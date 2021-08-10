// import { useState } from 'react'
import { ART } from '../mock-data/artMockData'
import './pageBrowseStyles.css'
import { Link } from "react-router-dom";

function PageBrowse() {

    // const [count, setCount] = useState(0)

    const displayArt = data => {
        return data.map(art => {
            return(
                <div className='art-submission' key={art.id}>
                    <div className='link-to-artist-profile'>
                        art title |
                        <Link className='link-to-artist-profile' to={`/user/${art.artistid}`}>
                            | artist {art.artistid}
                        </Link>
                    </div>
                    <img className='thumbnail' alt='art' src={art["url"]} />
                </div>
            )
        })
    }

    return (
        <>
            <div className='browse-description'>Browse all submissions</div>
            <div className='art-thumbnails-container'>
                {displayArt(ART["art"])} 
            </div>
        </>
    )
}

export default PageBrowse