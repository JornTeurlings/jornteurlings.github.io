import DataNavigation from "./DataNavigation";
import DataContainer from "./DataContainer";
import DataInput from "./DataInput";
import { selectAlphabet } from "../../../helpers/selectAlphabet";
import { useState, useEffect } from "react";
import Huffman from "./algorithms/HuffmanAlgorithm";

const runAlgorithm = async (data, algorithm = 'merge', graph, setNodeInformation, visualizationSpeed, setEdgesGraph, addEdge = null) => {
    visualizationSpeed = (200) / (0.3 * visualizationSpeed);
    switch (algorithm) {
        case 'huffman': {
            await Huffman(data, graph, setNodeInformation, visualizationSpeed, setEdgesGraph, addEdge);
            break;
        }
        default:
            break;
    }
    return;
}

const DataDashboard = () => {
    const [speed, setSpeed] = useState(3);
    const [showModal, setShowModal] = useState(false);
    const [activeAlgorithm, setActiveAlgorithm] = useState(false);
    const [nodeInformation, setNodeInformation] = useState({});
    const [data, setData] = useState(null);
    const [algorithm, setAlgorithm] = useState('huffman');
    const [activeSelection, setActiveSelection] = useState({nodes: [], edges: []})
    const [network, setNetwork] = useState({});
    const [graphState, setGraphState] = useState({
        counter: 0,
        graph: {
            nodes: [],
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
        
    }, [activeSelection, network])

    const createNode = (x, y) => {
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

    const onAlgorithmRunClick = async () => {
        const data = document.getElementById("data-string").value;
        if (data == "") {
            return null 
        } else { 
            setActiveAlgorithm(true);
            await runAlgorithm(data, algorithm, graph, setNodeInformation, speed, setGraphState, addEdge);
            setActiveAlgorithm(false);
        }
    }



    return (
        <div className="col-md-12 d-flex flex-column h-100 m-auto">
            <DataNavigation 
                setSpeed={setSpeed}
                setAlgorithm={setAlgorithm} 
                disabled={activeAlgorithm} 
                setShowModal={setShowModal} 
                onAlgorithmRunClick={onAlgorithmRunClick}
            />
            <DataInput />
            <DataContainer 
               nodeInformation={nodeInformation} 
               activeSelection={activeSelection}
               disabled={activeAlgorithm}
               algorithm={algorithm} 
               setNetwork={setNetwork}
               graph={graph} 
               events={events}
            />
        </div>
    )
}

export default DataDashboard;