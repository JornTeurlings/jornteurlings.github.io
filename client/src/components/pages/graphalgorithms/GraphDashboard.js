
import GraphNavigation from './GraphNavigation';
import GraphContainer from './GraphContainer';
import { useState, useEffect, useRef } from 'react';

import bellmanFordAlgorithm from './algorithms/bellmanFordAlgorithm';
import dijkstraAlgorithm from './algorithms/dijkstraAlgorithm';
import floydWarshallAlgorithm from './algorithms/floydWarshallAlgorithm';
import primAlgorithm from './algorithms/primAlgorithm';

import { randomColor } from '../../../helpers/randomColor';
import { selectAlphabet } from '../../../helpers/selectAlphabet';
import InfoModal from '../../components/InfoModal';
import GraphInformation from './information/GraphInformation';
import DijkstraInformation from './information/DijkstraInformation';
import BellmanInformation from './information/BellmanInformation';
import FloydInformation from './information/FloydInformation';
import PrimInformation from './information/PrimInformation';
import kruskalAlgorithm from './algorithms/kruskalAlgorithm';
import {johnsonsAlgorithmLayup, johnsonsAlgorithmFinish} from './algorithms/johnsonsAlgorithm';


const runAlgorithm = async (graph, algorithm = 'merge', setGraph, setNodeInformation, startingNode, visualizationSpeed, setEdgesGraph, addEdge = null) => {
    visualizationSpeed = (200) / (0.5 * visualizationSpeed);
    switch (algorithm) {
        case 'dijkstra': {
            await dijkstraAlgorithm(graph, setGraph, setNodeInformation, startingNode, visualizationSpeed);
            break;
        }
        case 'bellman': {
            await bellmanFordAlgorithm(graph, setGraph, setNodeInformation, startingNode, visualizationSpeed);
            break;
        }
        case 'floyd': {
            await floydWarshallAlgorithm(graph, setGraph, setNodeInformation, visualizationSpeed);
            break;
        }
        case 'prim': {
            await primAlgorithm(graph, setGraph, setNodeInformation, startingNode, visualizationSpeed, setEdgesGraph);
            break;
        }
        case 'kruskal': {
            await kruskalAlgorithm(graph, setGraph, setNodeInformation, startingNode, visualizationSpeed, setEdgesGraph);
            break;
        }
        case 'johnsons': {
            await johnsonsAlgorithmLayup(graph, setGraph, setNodeInformation, startingNode, visualizationSpeed, setEdgesGraph, addEdge);
            await bellmanFordAlgorithm(graph, setGraph, setNodeInformation, graph.graph.nodes.length, visualizationSpeed);
            break;
        }
        default:
            break;
    }
    return;
}

const selectAlgorithmInformation = (algorithm) => {
    switch (algorithm) {
        case 'dijkstra':
            return <DijkstraInformation />;
        case 'bellman':
            return <BellmanInformation />;
        case 'floyd':
            return <FloydInformation />;
        case 'prim':
            return <PrimInformation />;
        default:
            break;
    }
}
let network;

const generateEdges = (nodes, algorithm) => {
    let newEdges = []
    nodes.forEach((value) => {
        let randomAmountEdges;
        if (algorithm === 'prim' || algorithm === 'kruskal') {
            randomAmountEdges = Math.floor(Math.random()) + 2;    
        } else {
            randomAmountEdges = Math.floor(Math.random() * 1) + 2;    
        }
        
        let alreadyAdded = [];
        let newArray = new Array(randomAmountEdges).fill(0).map((_, i) => {
            let to = value.id;
            while (to === value.id || alreadyAdded.includes(to)) {
                to = Math.floor(Math.random() * nodes.length) + 1;
            }
            alreadyAdded.push(to);
            let weight;
            if (algorithm === 'bellman' || algorithm === 'floyd' || algorithm === 'johnsons') {
                weight = Math.floor(Math.random() * 15) - 2;
            } else {
                weight = Math.floor(Math.random() * 10) + 1;
            }

            if (algorithm === 'prim' || algorithm === 'kruskal') {
                return {
                    from: value.id, 
                    to: to,
                    weight: weight,
                    arrows: "line",
                    label: `${weight}`
                }
            }

            return {
                from: value.id, 
                to: to,
                weight: weight,
                label: `${weight}`
            }

        });


        newArray.forEach(({from, to, weight}, index) => {
            if (newEdges.find(o => o.from === to && o.to === from)) {
                newArray.splice(index, 1);
            }
        });

        newEdges = newEdges.concat(newArray);
    });
    return newEdges;
}

const GraphDashboard = () => {
    const [startingNode, setStartingNode] = useState(3);
    const [speed, setSpeed] = useState(3);
    const [showModal, setShowModal] = useState(false);
    const [shuffle, setShuffle] = useState(false);
    const [activeAlgorithm, setActiveAlgorithm] = useState(false);
    const [nodeInformation, setNodeInformation] = useState({});
    const [algorithm, setAlgorithm] = useState('kruskal');
    const [activeSelection, setActiveSelection] = useState({nodes: [], edges: []})
    const [network, setNetwork] = useState({});
    const [graphState, setGraphState] = useState({
        counter: 7,
        graph: {
            nodes: new Array(7).fill(null).map((_, i) => ({id: i + 1, label: selectAlphabet(i + 1), title: `Node ${i+1}`})),
            edges: [],
        },
        events: {
            select: ({ nodes, edges }) => {
            },
            doubleClick: ({ pointer: { canvas } }) => {
                createNode(canvas.x, canvas.y);
            },
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

    const addEdge = (array) => {
        network.body.data.edges.add(array);
    }

    const setActiveNode = (nodeData, callback) => {
        var r = window.confirm("Set node " + nodeData.id + " as starting node?");
        if (r === true) {
            setStartingNode(nodeData.id)
            callback(nodeData);
        } 
    }

    const addEdgeCalback = (edgeData, callback) => {
        let edgeChangeData = edgeData;
        if (algorithm === 'bellman' || algorithm === 'floyd' || algorithm === 'johnsons') {
            let weight = Math.floor(Math.random() * 15) - 2;
            edgeChangeData.weight = weight
            edgeChangeData.label = `${weight}`
        } else {
            let weight = Math.floor(Math.random() * 10) + 1;
            edgeChangeData.weight = weight
            edgeChangeData.label = `${weight}`
        }

        setGraphState(({ graph: { nodes, edges }, ...rest }) => {
            return {
              graph: {
                nodes: [
                  ...nodes
                ],
                edges: [
                  ...edges,
                  edgeChangeData
                ]
              },
              ...rest
            }
        })
    }

    const onAlgorithmRunClick = async () => {
        setActiveAlgorithm(true);
        await runAlgorithm(graphState, algorithm, setActiveSelection, setNodeInformation, startingNode, speed, setGraphState, addEdge);
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
        setNodeInformation({});
        setShuffle(false);
    }, [algorithm, shuffle]);


    return (
        <div className="col-md-12 d-flex  flex-column m-auto h-100">
            <GraphNavigation 
            setSpeed={setSpeed}
            setAlgorithm={setAlgorithm} 
            setShuffle={setShuffle} 
            disabled={activeAlgorithm} 
            setShowModal={setShowModal} 
            onAlgorithmRunClick={onAlgorithmRunClick}
            />
            <GraphContainer 
                setNewEdge={addEdgeCalback}
                setActiveNode={setActiveNode}
                startingNode={startingNode} 
                nodeInformation={nodeInformation} 
                activeSelection={activeSelection}
                disabled={activeAlgorithm}
                algorithm={algorithm} 
                setNetwork={setNetwork}
                graph={graph} 
                events={events}
                />
            <InfoModal 
                show={showModal}
                handleClose={() => setShowModal(false)}
                infoCurrentPage={<GraphInformation/>}
                infoCurrentAlgorithm={selectAlgorithmInformation(algorithm)}
            />
        </div>
    )
}

export default GraphDashboard;