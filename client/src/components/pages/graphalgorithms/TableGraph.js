import './css/TableGraph.css';
import { selectAlphabet } from '../../../helpers/selectAlphabet';
import { useEffect, useState } from 'react';

const TableGraph = (props) => {
    const [update, setUpdate] = useState(props.active);
    const renderContent = () => {
        if (props.algorithm === 'floyd') {
            if(props.information[0] instanceof Array) {
                return props.information.map((node, i) => (
                    <tr key={i} className="">
                        <td className={`align-center cell-area origin ${props.activeSelection.nodes[1] === i + 1 ? 'active' : ''}`}>{selectAlphabet(i + 1)}</td>
                        {node.map((distance, j) => <td key={`${i}-${j}`} className={`cell-area`}>{distance > Number.MAX_SAFE_INTEGER - 100 ? '∞' : distance}</td>)}
                    </tr>
                ))
            }
        } else {
            return props.information.map((node, i) => {
                if (props.algorithm === 'prim') {
                    return (
                        <tr key={i} className="">
                            <td className="align-center cell-area origin">{selectAlphabet(node.node)}</td>
                            <td className="align-center cell-area distance">{node.cost > Number.MAX_SAFE_INTEGER - 100 ? '∞' : node.cost}</td>
                            <td className="align-center cell-area previous">{node.inTree ? "In Set" :"Not in Set"}</td>
                        </tr>
                    )
                    
                } else {
                    return (
                        <tr key={i} className="">
                            <td className="align-center cell-area origin">{selectAlphabet(node.node)}</td>
                            <td className="align-center cell-area distance">{node.distance > Number.MAX_SAFE_INTEGER - 100 ? '∞' : node.distance}</td>
                            <td className="align-center cell-area previous">{node.node === props.start ? "Start" : selectAlphabet(node.previous)}</td>
                        </tr>
                    )
                }

        })
        }
       
    }
    const renderHead = () => {
        if (Object.keys(props.information).length > 0) {
            if (props.algorithm === 'floyd') {
                return (
                    <thead>
                        <tr>
                            <th className="pivot">{selectAlphabet(props.activeSelection.nodes[0])}</th>
                            {props.information.map((node, i) => <th key={i} className={`cell-area ${props.activeSelection.nodes[2] === i + 1 ? 'active' : ''}`} >{selectAlphabet(i + 1)}</th>)}
                        </tr>
                    </thead>
                )
            } else {
                return (
                    <thead>
                        <tr>
                            <th className="cell-area">Origin</th>
                            <th className="cell-area">Distance</th>
                            <th className="cell-area">Previous</th>
                        </tr>
                    </thead>
                )
            }
        }
    }

    const renderTable = () => {
        if (Object.keys(props.information).length > 0 && props.algorithm !== 'kruskal') {
            return (
                <tbody>
                    {renderContent()}
                </tbody>
            );   
        }
    }

    return (
        <div className='table-graph'>
            <table className="table">
                {renderHead()}
                {renderTable()}
            </table>
        </div>
    )
}

export default TableGraph;