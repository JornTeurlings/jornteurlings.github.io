import './css/PathGridBox.css';
import { ItemTypes } from '../../../constants/ItemTypes';
import { Droppable } from 'react-beautiful-dnd';

const PathGridBox = (props) => {
    let sqrClass = 'border btn';
    let sqrStyle = {
        width: '35px',
        height: '35px', 
        margin: '0px',
        borderRadius: '0px'
    }

    if (props.obstacle) {
        sqrClass = 'border btn grid-box-active'
    } else if (props.current) {
        sqrClass = 'border btn btn-warning'
    }

    return (
        <Droppable droppableId={`${props.id}`} type={ItemTypes.POINT} isDropDisabled={props.obstacle}>
            {(provided, snapshot) => (
            <div 
                ref={provided.innerRef}
                className={sqrClass} 
                style={sqrStyle}
                id={props.id}
                key={props.id}
                onClick={props.handleClick}
            >
                {props.children}
                {provided.placeholder}
            </div>
            )}
        </Droppable>

    )
}

export default PathGridBox;