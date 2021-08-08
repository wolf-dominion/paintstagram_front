import './pageUserStyles.css'
import { USER } from '../mock-data/userMockData'

function PageUser(props) {
    const user = USER["user"]
     // const userId = props.match.params.userId
    
    const displayUserArt = data => {
        return data.map((art, index) => {
            return(
                <div className='art-submission' key={index}>
                    <img className='thumbnail' alt='art' src={art} />
                </div>
            )
        })
    }
    
    return (
        <>
            <div className='user-profile-container'>
                <div className='user-info-container'>
                    <div className='profile-pic'>
                        <img alt='' src={user["profileimage"]}/>
                    </div>
                    <div className='profile-name'>{user["username"]}</div>
                </div>
                <div className='art-thumbnails-container'>
                    {displayUserArt(user["art"])}
                </div>
            </div>
        </>
    )
}

export default PageUser