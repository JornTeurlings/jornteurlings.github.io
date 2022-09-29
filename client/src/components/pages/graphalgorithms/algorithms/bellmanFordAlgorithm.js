import { NodeTypes } from './types';
import promiseTimeout from '../../../../helpers/promiseTimeout';

const createNodes = (nodes, type) => {
    let newObj = {};

    nodes.forEach((elem, i) => {
        newObj[elem.id] = {node: elem.id, distance: Number.MAX_SAFE_INTEGER, previous: undefined}
    });

    return newObj;
}



const bellmanFordAlgorithm = async (graph, setGraph, setNodeInformation, startingPoint, visualizationSpeed) => {
    let {nodes, edges} = graph.graph;
    let nodeInformation = createNodes(nodes, NodeTypes.UNVISITED);
    nodeInformation[startingPoint].distance = 0;
    setNodeInformation(Object.values(nodeInformation));

    for(let i = 0; i < nodes.length; i++) {
        for(let edge of edges) {
            setGraph({nodes: [edge.from], edges: [edge.id]})
            await promiseTimeout({timeout: visualizationSpeed});

            let tempDistance = nodeInformation[edge.from].distance + edge.weight;
            if (tempDistance < nodeInformation[edge.to].distance) {
                nodeInformation[edge.to].distance = tempDistance;
                nodeInformation[edge.to].previous = edge.from;
                setNodeInformation(Object.values(nodeInformation));
            }
        }
    }

    for(let edge of edges) {
        setGraph({nodes: [edge.from], edges: [edge.id]})
        await promiseTimeout({timeout: visualizationSpeed});
        let tempDistance = nodeInformation[edge.from].distance + edge.weight;
        if (tempDistance < nodeInformation[edge.to].distance &&  nodeInformation[edge.to].distance !== Number.MAX_SAFE_INTEGER) {
            console.log("Graph contains negative cycle, therefore the displayed distances are not accurate");
        }
    }
}


export default bellmanFordAlgorithm;