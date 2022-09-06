import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../../constants/ItemTypes';

const PathGridPoint = (props) => {
    const [{ isDragging}, drag] = useDrag({
        type: ItemTypes.BEGIN,
        item: { name: 'Any custom name',},
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })

    const opacity = isDragging ? 0.4 : 1;

    return (
        <div ref={drag} style ={{ opacity }}>
            <i className='fa-solid fa-chess-pawn'></i>
        </div>
    )
}

export default PathGridPoint;