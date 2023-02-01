import { useParams } from "react-router-dom";
import ArtImageTile from '../ArtImageTile/index.js'
import ArtDescription from "../ArtDescription/index.js";
import { Route } from 'react-router-dom'
import './GalleryView.css'

function GalleryView({ galleries }) {

    const { galleryId } = useParams()

    const gallery = galleries.find((gallery) => gallery.gallerynumber === galleryId);
    const objects = gallery.objects
    console.log(objects)
    return (
        <>
            <h2>{gallery.name}</h2>
            <Route exact path='/galleries/:galleryId'>
                <div className="art-nav">
                    {objects.map((art) => (
                        <ArtImageTile art={art} key={art.id} />
                    ))}
                </div>
            </Route>
            <Route exact path='/galleries/:galleryId/art/:artId'>
                <ArtDescription gallery={gallery} />
            </Route>

        </>
    );
}

export default GalleryView



// You should loop through `gallery.objects`. :)
