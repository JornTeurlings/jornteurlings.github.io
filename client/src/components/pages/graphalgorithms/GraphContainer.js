import './css/GraphContainer.css';
import Graph from 'react-graph-vis';
import TableGraph from './TableGraph';
import { useEffect } from 'react';

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
      addEdge: true,
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
    useEffect(() => {
      if (props.disabled) {
        document.querySelector('.vis-edit-mode').style.display = 'none';
      } else {
        document.querySelector('.vis-edit-mode').style.display = 'block';
      }
    }, [props.disabled])

    return ( 
        <div id="content-height" className="my-5 d-flex justify-content-space-between flex-grow-1 graph-container-styling">
            <div className="col-md-9 d-flex">
              <div className="col-md-9">
                <Graph
                  graph={props.graph}
                  options={options}
                  events={props.events}
                  getNetwork={(network) => {
                    props.setNetwork(network);
                  }}
                />
              </div>
              <div className='col-md-3'>
              <TableGraph
                algorithm={props.algorithm}
                active={props.disabled}
                activeSelection={props.activeSelection}
                information={props.nodeInformation} 
                start={props.startingNode}
              />
              </div>
            </div>
        </div>
    )
}

export default GraphContainer;