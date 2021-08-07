import './pageUserStyles.css'
import { USER } from '../mock-data/userMockData'

function PageUser(props) {
    
     const userId = props.match.params.userId
    
    const displayUserArt = data => {
        return data.map((art, index) => {
            return(
                <div className='art-submission' key={index}>
                    <img alt='art' src={art} />
                </div>
            )
        })
    }
    
    return (
        <>
            <div>
                <h1>User page {userId}</h1>
                <div className='art-thumbnails-container'>
                    {displayUserArt(USER["user"]["art"])}
                </div>
            </div>
        </>
    )
}

export default PageUser