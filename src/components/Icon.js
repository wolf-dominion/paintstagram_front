import {
    FaPaintBrush,
    FaEraser,
    FaUndoAlt,
    FaRedoAlt,
    FaTrashAlt,
    FaSave, 
    FaPalette
  } from 'react-icons/fa'

const iconMap = {
    brush: FaPaintBrush,
    eraser: FaEraser,
    undo: FaUndoAlt,
    redo: FaRedoAlt,
    trash: FaTrashAlt,
    save: FaSave, 
    palette: FaPalette
}

const Icon = ({name}) => {

    const MappedIcon = iconMap[name] || null

    return (
        <div className='icon-container'>
            <MappedIcon />
        </div>
    )
}

export default Icon