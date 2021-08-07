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
                    <img alt='art' src={art["url"]} />
                    <Link to={`/user/${art.artistid}`}>
                        artist: {art.artistid}
                    </Link>
                </div>
            )
        })
    }

    return (
        <>
            <div>Browse all submissions</div>
            <div>
                {displayArt(ART["art"])} 
            </div>
        </>
    )
}

export default PageBrowse