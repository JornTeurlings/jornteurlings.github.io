import Graph from 'react-graph-vis';
import { useEffect, useState } from 'react';
import GraphDashboard from './GraphDashboard';

const options = {
    layout: {
      hierarchical: false
    },
    edges: {
      color: "#000000"
    },
    interaction: {
        zoomView: false,
    },
    manipulation: {
        enabled: true,
        addNode: true,
        addEdge:true,
    }
  };
  
const randomColor = () => {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');

    return `#${red}${green}${blue}`;
}


const GraphContainer = (props) => {
    const createNode = (x, y) => {
        const color = randomColor();
        setGraphState(({ graph: { nodes, edges }, counter, ...rest }) => {
          const id = counter + 1;
          const from = Math.floor(Math.random() * (counter - 1)) + 1;
          return {
            graph: {
              nodes: [
                ...nodes,
                { id, label: `${id}`, x, y, font: {size:20} }
              ],
              edges: [
                ...edges,
                { from, to: id }
              ]
            },
            counter: id,
            ...rest
          }
        });
    }

    const [graphState, setGraphState] = useState({
        counter: 15,
        graph: {
            nodes: new Array(10).fill(null).map((_, i) => ({id: i + 1, label: `${i + 1}`, font: { size: 20}})),
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
        let newEdges = [];
        graph.nodes.forEach((value) => {
            const randomAmountEdges = Math.floor(Math.random() * (1 + 1) + 1);
            let newArray = new Array(randomAmountEdges).fill(0).map((_, i) => (
                {
                    from: value.id, 
                    to: Math.floor(Math.random() * graph.nodes.length),
                    weight: Math.floor(Math.random() * 10),
                }
            ))

            newEdges = newEdges.concat(newArray);
        });

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

    }, []);

    return (
        <div id="content-height" className="my-5 d-flex justify-content-center flex-grow-1">
            <div  className="col-md-9 d-flex flex-wrap bar-chart-sort justify-content-center">
            <Graph
                graph={graph}
                options={options}
                events={events}
                getNetwork={network => {
                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                }}
            />
            </div>
        </div>
    )
}

export default GraphContainer;