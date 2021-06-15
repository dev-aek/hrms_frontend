import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import PostingAdvertisement from './pages/PostingAdvertisement';
import ConfirmJobAd from './pages/ConfirmJobAd.jsx';


function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <ConfirmJobAd />
      </Container>
    </div>
  );
}

export default App;
