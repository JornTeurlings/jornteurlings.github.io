import { NodeTypes } from './types';
import promiseTimeout from '../../../../helpers/promiseTimeout';
import UnionFind from '../helpers/UnionFind';

const createNodes = (nodes, type) => {
    let newObj = {};

    nodes.forEach((elem, i) => {
        newObj[elem.id] = {node: elem.id, cost: Number.MAX_SAFE_INTEGER, inTree: false, previous: undefined}
    });

    return newObj;
}

const findIndexMinimum = (edges) => {
    let min = null;
    let minValue = Number.MAX_SAFE_INTEGER;
    Object.values(edges).map((edge) => {
        if (edge.weight < minValue) {
            min = edge.id;
            minValue = edge.weight;
        }
    })

    return min;
}

const kruskalAlgorithm = async (graph, setGraph, setNodeInformation, startingPoint, visualizationSpeed, setEdgesGraph) => {
    let {nodes, edges} = graph.graph;
    setEdgesGraph(({ graph: { nodes, edges }, ...rest }) => {
        return {
          graph: {
            nodes: [
              ...nodes
            ],
            edges: []
          },
          ...rest
        }
    });

    let unionFind = new UnionFind((Object.values(nodes)).map(o => o.id));
    let nodeInformation = createNodes(nodes, NodeTypes.UNVISITED);
    nodeInformation[startingPoint].cost = 0;
    setNodeInformation(Object.values(nodeInformation));

    while (edges.length > 0) {
        // eslint-disable-next-line no-loop-func
        let addedEdge = edges.find(o => o.id === findIndexMinimum(edges));
        if (!unionFind.connected(addedEdge.from, addedEdge.to)) {
            setEdgesGraph(({ graph: { nodes, edges }, ...rest }) => {
                return {
                    graph: {
                        nodes: [
                        ...nodes,
                        ],
                        edges: [
                            ...edges,
                            addedEdge
                        ]
                    },
                    ...rest
                }
            });
            unionFind.union(addedEdge.from, addedEdge.to);
        }
        edges = edges.filter(o => o.id !== addedEdge.id);
        await promiseTimeout({timeout: visualizationSpeed});
    }
    
}


export default kruskalAlgorithm;