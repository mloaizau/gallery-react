import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Assassins from './components/Assassins';
import Bayonetta from './components/Bayonetta';
import Halo from './components/Halo';
import Kratos from './components/Kratos';
import Lara from './components/Lara';
import Navigation from './components/Navigation';
import Zelda from './components/Link';

function App() {
  return (
    <BrowserRouter>

      <div className="container">
        <h1 className="text-center mt-3 mb-3 text-white">Galería</h1>
      </div>

      <Route path="/Assassins" component={Assassins} />
      <Route path="/Bayonetta" component={Bayonetta} />
      <Route path="/Halo" component={Halo} />
      <Route path="/Kratos" component={Kratos} />
      <Route path="/Lara" component={Lara} />
      <Route path="/Link" component={Zelda} />

      <Navigation/>

    </BrowserRouter>
  );
}

export default App;
