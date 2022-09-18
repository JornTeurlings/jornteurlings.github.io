import { NodeTypes } from "./types";
import promiseTimeout from "../../../../helpers/promiseTimeout";

const createNodes = (nodes, edges) => {
    let newArray = new Array(nodes.length).fill(Number.MAX_SAFE_INTEGER).map(column => new Array(nodes.length).fill(Number.MAX_SAFE_INTEGER));
    for (let i = 1; i <= nodes.length; i++) {
        for (let j = 1; j <= nodes.length; j++) {
            if (i === j) {
                newArray[i - 1][j - 1] = 0;
            }
            let foundEdge = edges.find(o => o.from === i && o.to === j)
            if (foundEdge) {
                newArray[i - 1][j - 1] = foundEdge.weight;
            }
        }
    }
    return newArray;
}


const floydWarshallAlgorithm = async (graph, setGraph, setNodeInformation, visualizationSpeed) => {
    let {nodes, edges} = graph.graph;
    let nodeInformation= createNodes(nodes, edges);

    for (let k = 0; k < nodes.length; k++) {
        for (let i = 0; i < nodes.length; i++) {
            for (let j = 0; j < nodes.length; j++) {
                setNodeInformation(Object.values(nodeInformation));        
                setGraph({nodes: [k + 1, i + 1, j + 1]});
                await promiseTimeout({timeout: visualizationSpeed / 4});
                nodeInformation[i][j] = Math.min(nodeInformation[i][j], nodeInformation[i][k] + nodeInformation[k][j]);
            }
        }
    }
    console.log(nodeInformation);
}

export default floydWarshallAlgorithm;