import { ItemTypes } from '../../../constants/ItemTypes';
import { Draggable } from 'react-beautiful-dnd';

const PathGridPoint = (props) => {
    const itemType = props.type === ItemTypes.BEGIN ? ItemTypes.BEGIN: ItemTypes.FINISH;
    const itemClass = props.type === ItemTypes.BEGIN ? 'fa-location-arrow' : 'fa-location-dot';
    return (
        <Draggable draggableId={`${itemType}`} index={0} key={props.number}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <i className={`fa-solid ${itemClass}`}></i>
                </div>
            )}
        </Draggable>

    )
}

export default PathGridPoint;