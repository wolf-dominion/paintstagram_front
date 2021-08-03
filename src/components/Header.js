import { Link } from 'react-router-dom'

import Icon from './Icon'

import './headerStyles.css'


function Header() {

    return (
        <div className='header-container'>
            <div className='header-wrapper'>
                <div className='logo-container'>
                    <div>PaintStagram</div>
                    <Icon name='palette' />
                </div>
                <div className='nav'>
                    <div>
                        <Link to="/">Draw</Link>
                    </div>
                    <div>
                        <Link to="/browse">Browse</Link>
                    </div>
                    <div>
                        Login
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header