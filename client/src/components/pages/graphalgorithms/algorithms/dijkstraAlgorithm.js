import { NodeTypes } from './types';
import promiseTimeout from '../../../../helpers/promiseTimeout';
const createNodes = (nodes, type) => {
    let newObj = {};


    nodes.forEach((elem, i) => {
        newObj[elem.id] = {node: elem.id, distance: Number.MAX_SAFE_INTEGER, previous: undefined}
    });

    return [newObj, (nodes.map(value => value.id))];
}


const findIndexMinimum = (information, unvisited) => {
    let min = null;
    let minValue = Number.MAX_SAFE_INTEGER;
    Object.values(information).map((node) => {
        if (node.distance < minValue && unvisited.includes(node.node)) {
            min = node.node;
            minValue = node.distance;
        }
    })

    return min;
}

const findValidEdges = (index, edges) => {
    return Object.values(edges).filter((value, i) => {
        return value.from === index ? [value.to, value.weight] : false;
    })
}

const dijkstraAlgorithm = async (graph, setGraph, setNodeInformation, startingPoint, visualizationSpeed) => {
    let {nodes, edges} = graph.graph;
    let [nodeInformation, unvisitedNodes] = createNodes(nodes, NodeTypes.UNVISITED);
    nodeInformation[startingPoint].distance = 0;
    setNodeInformation(Object.values(nodeInformation));

    let i = 0;

    while (unvisitedNodes.length > 0) {
        const index = findIndexMinimum(nodeInformation, unvisitedNodes);
        if (index === null) {
            break
        }
        const information = nodeInformation[index];
        unvisitedNodes.splice(unvisitedNodes.indexOf(index), 1);

        setGraph({nodes: [index], edges: []}, false);
        await promiseTimeout({timeout: visualizationSpeed})

        let neighbours = findValidEdges(index, edges);
        if (neighbours.length === 0) {
            break;
        }
        for (let neighbour of neighbours) {
            setGraph({nodes: [index], edges: [neighbour.id]})
            await promiseTimeout({timeout: visualizationSpeed})

            if (information.distance + neighbour.weight < nodeInformation[neighbour.to].distance) {
                nodeInformation[neighbour.to].distance = information.distance + neighbour.weight;
                nodeInformation[neighbour.to].previous = information.node;
            }
        }
        if (i === 7) break;
        i++;
    }

    console.log("All paths have been found: ", nodeInformation);
    
}


export default dijkstraAlgorithm;