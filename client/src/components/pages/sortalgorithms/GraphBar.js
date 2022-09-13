import './css/GraphBar.css';

const GraphBar = (props) => {
    let graphStyle = {
        width: '5px',
        marginLeft: '1px',
        height: `${props.height}%`,
        backgroundColor: props.color
    }

    return (
        <div className='graph-bar' style={graphStyle}>

        </div>
    )
}

export default GraphBar;