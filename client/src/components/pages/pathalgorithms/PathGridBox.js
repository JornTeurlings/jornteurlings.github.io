import './css/PathGridBox.css';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../../constants/ItemTypes';

const PathGridBox = (props) => {
    const [{canDrop, isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.BEGIN,
        drop: () => (props.setNewPoint(props.id)),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        })
    }));

    console.log('options', {canDrop, isOver});

    let sqrClass = 'border btn';
    let sqrStyle = {
        width: '35px',
        height: '35px', 
        margin: '0px',
        borderRadius: '0px'
    }

    if (props.active) {
        sqrClass = 'border btn grid-box-active'
    } else if (props.current) {
        sqrClass = 'border btn btn-warning'
    }

    return (
        <div 
            ref={drop}
            className={sqrClass} 
            style={sqrStyle}
            id={props.id}
            key={props.id}
            onClick={props.handleClick}
        >
            {props.children}
        </div>
    )
}

export default PathGridBox;