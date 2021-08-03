import Icon from '../Icon'

import './toolbarStyles.css'

function Toolbar() {

    return (
        <>
            <div className='toolbar-container'>
                <div className='tools-wrapper'>
                    <div className='art-tool-button'>
                        <Icon name='brush' />
                    </div>
                    <div className='art-tool-button'>
                        <Icon name='eraser' />
                    </div>
                    <div className='art-tool-button'>
                        <Icon name='undo' />
                    </div>
                    <div className='art-tool-button'>
                        <Icon name='redo' />
                    </div>
                    <div className='art-tool-button'>
                        <Icon name='save' />
                    </div>
                    <div className='art-tool-button'>
                        <Icon name='trash' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Toolbar