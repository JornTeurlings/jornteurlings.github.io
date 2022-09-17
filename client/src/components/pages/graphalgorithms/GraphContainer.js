import Graph from 'react-graph-vis';
import TableGraph from './TableGraph';

const options = {
    layout: {
      hierarchical: false,
      improvedLayout:true
    },
    edges: {
      arrows: {
        to: {
          type: 'triangle'
        },
        from: {
          type: 'triangle'
        }
      },
      color:  {
        color: "#484b6a",
        hover: "#6f74a1"
      },
      font : {
        strokeWidth: 5,
        size:20
      },
      smooth: {
        enabled:true
      },
      length: 250,
      hoverWidth: 2,
      width: 1.5,
    },
    nodes: {
      shape: 'square',
      color: {
        background: '#6f74a1',
        border: '#0D7377',
        hover: {
          background: '#13A8AD',
          border: '#6f74a1',
        },
        highlight: {
          background: '#3ad3d8',
          border: '#6f74a1'
        }
      },
      font : {
        color: '#000000',
        size: 30
      }
    },
    interaction: {
      zoomView: false,
      hover:true
    },
    manipulation: {
      enabled: true,
      editNode: (nodeData, callback) => {

      }
    },
    physics: {
      enabled: true,
      stabilization: false,
      barnesHut: {
        theta: 0.5,
        gravitationalConstant: -2000,
        centralGravity: 0.3,
        springLength: 150,
        springConstant: 0.008,
        damping: 0.09,
        avoidOverlap: 1
      },
      solver: 'barnesHut'
    }
  };
  

const GraphContainer = (props) => {
    return (
        <div id="content-height" className="my-5 d-flex justify-content-center flex-grow-1">
            <div className="col-md-9 d-flex">
              <Graph
                graph={props.graph}
                options={options}
                events={props.events}
                getNetwork={(network) => {
                  props.setNetwork(network);
                }}
              />
              <TableGraph
                information={props.nodeInformation} 
                start={props.startingNode}
              />
            </div>
        </div>
    )
}

export default GraphContainer;