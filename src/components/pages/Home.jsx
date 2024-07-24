import {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        axios.get('./Albums.json')
            .then(response => {
                console.log(response.data);
                setAlbums(response.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const AlbumCard = ({albums}) => {
        const mappedAlbums = albums.map((album, index) => {
            return (
                <div key={index} className='album-card'>
                    <div className='album-img-cont'>
                        <img src={album.cover_image} alt={album.album_name}/>
                    </div>
                    <div className='album-details'>
                        <h2>{album.album_name}</h2>
                        <h3 className='artist'>{album.artist}</h3>
                        <h3>{album.release_year}</h3>
                        <p>{album.description}</p>
                    </div> 
                </div>
            ) // end of the map return
        })
        return (
            <>
                {mappedAlbums}
            </>
        )
    }

  return (
    <div className='album-grid-cont'>
        <AlbumCard albums={albums}/>
    </div>
  )
}

export default Home