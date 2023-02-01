import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import './ArtImageTile.css';


function ArtImageTile({ art, gallery }) {

    const { galleryId } = useParams()
    console.log(gallery)
    if (art.images[0]) {
        return (

            <Link className="image-tile" to={`/galleries/${galleryId}/art/${art.id}`}>
                <img src={art.images[0].baseimageurl}>
                </img>
            </Link>

        );

    }
    else {
        <Link className="image-tile" to={`/galleries/${galleryId}/art/${art.id}`}>
            {art.title}
        </Link>
    }

}

export default ArtImageTile
