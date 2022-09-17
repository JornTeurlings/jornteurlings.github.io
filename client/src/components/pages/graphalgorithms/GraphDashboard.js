
import GraphNavigation from './GraphNavigation';
import GraphContainer from './GraphContainer';
import { useState, useEffect, useRef } from 'react';

import dijkstraAlgorithm from './algorithms/dijkstraAlgorithm';
import { randomColor } from '../../../helpers/randomColor';
import { selectAlphabet } from '../../../helpers/selectAlphabet';
import bellmanFordAlgorithm from './algorithms/bellmanFordAlgorithm';

const runAlgorithm = async (graph, algorithm = 'merge', setGraph, setNodeInformation, startingNode, visualizationSpeed) => {
    switch (algorithm) {
        case 'dijkstra': {
            await dijkstraAlgorithm(graph, setGraph, setNodeInformation, startingNode, visualizationSpeed);
            break;
        }
        case 'bellman': {
            await bellmanFordAlgorithm(graph, setGraph, setNodeInformation, startingNode, visualizationSpeed);
            break;
        }
        default:
            break;
    }
    return;
}

// const createHTMLElement = (id, setStartingNode) => {
//     const element = document.createElement("div");
//     element.style.border="1px solid gray";
//     element.style.height="2em";
//     element.style.width="auto";
//     element.style.display="flex";

//     const text = document.createElement('p');
//     text.innerText = "Starting Node?:"
//     text.style.color = "black";
//     element.appendChild(text);

//     const button = document.createElement("button");
//     button.onclick = () => setStartingNode(id);
//     element.appendChild(button);

//     return element;
// }

let network;

const generateEdges = (nodes, algorithm) => {
    let newEdges = []
    nodes.forEach((value) => {
        const randomAmountEdges = Math.floor(Math.random() * 1) + 2;
        let alreadyAdded = [];
        let newArray = new Array(randomAmountEdges).fill(0).map((_, i) => {
            let to = value.id;
            while (to === value.id || alreadyAdded.includes(to)) {
                to = Math.floor(Math.random() * nodes.length) + 1;
            }
            alreadyAdded.push(to);
            let weight;
            if (algorithm === 'bellman') {
                weight = Math.floor(Math.random() * 15) - 2;
            } else {
                weight = Math.floor(Math.random() * 10) + 1;
            }
            
            return {
                from: value.id, 
                to: to,
                weight: weight,
                label: `${weight}`
            }
    })

        newEdges = newEdges.concat(newArray);
    });
    return newEdges;
}

const GraphDashboard = () => {
    const [startingNode, setStartingNode] = useState(3);
    const [activeAlgorithm, setActiveAlgorithm] = useState(false);
    const [nodeInformation, setNodeInformation] = useState({});
    const [algorithm, setAlgorithm] = useState('bellman');
    const [activeSelection, setActiveSelection] = useState({nodes: [], edges: []})
    const [network, setNetwork] = useState({});
    const [graphState, setGraphState] = useState({
        counter: 7,
        graph: {
            nodes: new Array(7).fill(null).map((_, i) => ({id: i + 1, label: selectAlphabet(i + 1), title: `Node ${i+1}`})),
            edges: []
        },
        events: {
            select: ({ nodes, edges }) => {

            },
            doubleClick: ({ pointer: { canvas } }) => {
                createNode(canvas.x, canvas.y);
            }
        }
    })
    const { graph, events } = graphState;

    useEffect(() => {
        if (Object.keys(network).length > 0) {
            network.setSelection(activeSelection, {
                highlightEdges: false
            });    
        }
        
    }, [activeSelection])

    const createNode = (x, y) => {
        const color = randomColor();
        setGraphState(({ graph: { nodes, edges }, counter, ...rest }) => {
          const id = counter + 1;
          const from = Math.floor(Math.random() * (counter - 1)) + 1;
          const weight = Math.floor(Math.random() * 10) + 1; 
          return {
            graph: {
              nodes: [
                ...nodes,
                { id, label: selectAlphabet(id), title:`Node ${id}` }
              ],
              edges: [
                ...edges,
                { from, to: id, weight: weight, label: `${weight}` }
              ]
            },
            counter: id,
            ...rest
          }
        });
    }

    const onAlgorithmRunClick = async () => {
        setActiveAlgorithm(true);
        await runAlgorithm(graphState, algorithm, setActiveSelection, setNodeInformation, startingNode, 1000);
        setActiveAlgorithm(false);
    }


    useEffect(() => {
        let newEdges = [];
        newEdges = generateEdges(graph.nodes, algorithm);
        setGraphState(({ graph: { nodes, edges },...rest }) => {
            return {
                graph: {
                  nodes: [
                    ...nodes,
                  ],
                  edges: newEdges,
                },
                ...rest
              };
        });

    }, [algorithm]);


    return (
        <div className="col-md-12 d-flex  flex-column m-auto h-100">
            <GraphNavigation setAlgorithm={setAlgorithm} onAlgorithmRunClick={onAlgorithmRunClick}/>
            <GraphContainer startingNode={startingNode} nodeInformation={nodeInformation} setNetwork={setNetwork} graph={graph} events={events}/>
        </div>
    )
}

export default GraphDashboard;