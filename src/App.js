import './App.css';

import MainDashboard from './layouts/MainDashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Navi from './layouts/Navi';


function App() {
  return (
    <div className="App">
        <Navi/>
        <Container className="main">
          <MainDashboard/>
        </Container>
        
    </div>
  );
}

export default App;
