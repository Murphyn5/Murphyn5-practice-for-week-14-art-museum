import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation/index.js';
import GalleryView from './components/GalleryNavigation/GalleryView/index.js'
import { Route, Switch } from 'react-router-dom'


function App() {

  return (
    <div className='page-wrapper'>
      < GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path='/'>
          <h2>
            Harvard Art Museum
          </h2>
          <p>
            Look, but Don't Touch. Please select a Gallery in the navigation bar.
          </p>
        </Route>
        <Route path='/galleries/:galleryId'>
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h2>
            404: Page Not Found
          </h2>
        </Route>
      </Switch>
    </div>


  );
}

export default App;
