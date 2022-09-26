import { NodeTypes } from './types';
import promiseTimeout from '../../../../helpers/promiseTimeout';
import { selectAlphabet } from '../../../../helpers/selectAlphabet';
import bellmanFordAlgorithm from './bellmanFordAlgorithm';
import dijkstraAlgorithm from './dijkstraAlgorithm';

const createNodes = (nodes, type) => {
    let newObj = {};
    nodes.forEach((elem, i) => {
        newObj[elem.id] = {node: elem.id, distance: Number.MAX_SAFE_INTEGER, previous: undefined}
    });

    return [newObj, (nodes.map(value => value.id))];
}


export const johnsonsAlgorithmLayup = async (graph, setGraph, setNodeInformation, startingPoint, visualizationSpeed, setEdgesGraph, addEdge) => {
    let {nodes, edges} = graph.graph;
    const id = graph.counter + 1;
    const edgesNew = nodes.map( o => {
        return { from: id, to: o.id, weight: 0, label: `${0}`};
    });
        
    addEdge(edgesNew);
    setEdgesGraph(({ graph: { nodes }, ...rest }) => {
        return {
          graph: {
            nodes: [
              ...nodes,
              { id, label: selectAlphabet(id), title:`Node ${id}`}
            ],
            edges : [
                ...edges,
            ]
          },
          ...rest
        }
    });
    
}

export const johnsonsAlgorithmFinish = async (graph, setGraph, setNodeInformation, startingPoint, visualizationSpeed, setEdgesGraph, addEdge) => {
    
}

