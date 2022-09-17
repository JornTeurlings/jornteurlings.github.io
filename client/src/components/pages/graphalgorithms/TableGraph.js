import './css/TableGraph.css';
import { selectAlphabet } from '../../../helpers/selectAlphabet';

const TableGraph = (props) => {
    const renderContent = () => {
        if (Object.keys(props.information).length > 0) {
            return props.information.map(node => (
                <tr className="">
                    <td className="align-center cell-area origin">{selectAlphabet(node.node)}</td>
                    <td className="align-center cell-area distance">{node.distance > Number.MAX_SAFE_INTEGER - 100 ? '∞' : node.distance}</td>
                    <td className="align-center cell-area previous">{node.node === props.start ? "Start" : selectAlphabet(node.previous)}</td>
                </tr>
            ))
    }
    }

    return (
        <div className='table-graph'>
            <table className="table">
                <thead>
                    <tr>
                        <th className="cell-area">Origin</th>
                        <th className="cell-area">Distance</th>
                        <th className="cell-area">Previous</th>
                    </tr>
                </thead>
                <tbody>
                    {renderContent()}
                </tbody>
            </table>
        </div>
    )
}

export default TableGraph;