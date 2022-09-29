import { NodeTypes } from './types';
import promiseTimeout from '../../../../helpers/promiseTimeout';

const createNodes = (nodes, type) => {
    let newObj = {};

    nodes.forEach((elem, i) => {
        newObj[elem.id] = {node: elem.id, cost: Number.MAX_SAFE_INTEGER, inTree: false, previous: undefined}
    });

    return [newObj, (nodes.map(value => value.id))];
}


const findIndexMinimum = (information, unvisited) => {
    let min = null;
    let minValue = Number.MAX_SAFE_INTEGER;
    Object.values(information).map((node) => {
        if (node.cost < minValue && !node.inTree) {
            min = node.node;
            minValue = node.cost;
        }
    })

    return min;
}

const primAlgorithm = async (graph, setGraph, setNodeInformation, startingPoint, visualizationSpeed, setEdgesGraph) => {
    let {nodes, edges} = graph.graph;
    setEdgesGraph(({ graph: { nodes, edges }, ...rest }) => {
        return {
          graph: {
            nodes: [
              ...nodes,
            ],
            edges: []
          },
          ...rest
        }
    });
    
    let [nodeInformation, _] = createNodes(nodes, NodeTypes.UNVISITED);
    nodeInformation[startingPoint].cost = 0;
    setNodeInformation(Object.values(nodeInformation));

    for(let i = 0; i < nodes.length; i++) {
        const minKey = findIndexMinimum(nodeInformation);
        nodeInformation[minKey].inTree = true;
        let addedEdge = edges.find(o => (o.from === minKey && o.to === nodeInformation[minKey].previous) || (o.to === minKey && o.from === nodeInformation[minKey].previous));
        if (addedEdge !== undefined) {
            setEdgesGraph(({ graph: { nodes, edges }, ...rest }) => {
                return {
                    graph: {
                        nodes: [
                        ...nodes,
                        ],
                        edges: [
                            ...edges,
                            addedEdge,
                        ]
                    },
                    ...rest
                }
            })
            await promiseTimeout({timeout: visualizationSpeed})
        };
        const adjacentEdges = edges.filter(o => o.from === minKey || o.to === minKey);
        for (let value of adjacentEdges) {
            if (value.from === minKey) {
                if (!nodeInformation[value.to].inTree && nodeInformation[value.to].cost > value.weight) {
                    setGraph({nodes: [value.to]})
                    await promiseTimeout({timeout: visualizationSpeed})
                    nodeInformation[value.to].cost = value.weight;
                    nodeInformation[value.to].previous = minKey;
                }
            } else {
                if (!nodeInformation[value.from].inTree && nodeInformation[value.from].cost > value.weight) {
                    setGraph({nodes: [value.from]})
                    await promiseTimeout({timeout: visualizationSpeed})
                    nodeInformation[value.from].cost = value.weight;
                    nodeInformation[value.from].previous = minKey;
                }
            }

        }
    }
    
}


export default primAlgorithm;