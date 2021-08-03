import '../components/drawingContainerStyles.css'

import Canvas from './drawingComponents/Canvas'
import Toolbar from './drawingComponents/Toolbar'

function DrawingContainer() {

    return (
        <div className='drawing-container'>
            <div className='drawing-wrapper'>
                <Toolbar/>
                <Canvas/>
            </div>
        </div>
    )
}

export default DrawingContainer