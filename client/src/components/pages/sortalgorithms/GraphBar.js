import './css/GraphBar.css';

const GraphBar = (props) => {
    
    let graphStyle = {
        width: '5px',
        marginLeft: '1px',
        height: `${props.height}%`,
        backgroundColor: props.searchValue === props.index ? 'yellow' : props.color,
    }

    return (
        <div className='graph-bar' onClick={() => props.onClick(props.index)} style={graphStyle}>
        </div>
    )
}

export default GraphBar;