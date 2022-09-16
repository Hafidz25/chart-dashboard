import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SD, MapelSD } from './pages/SD';
import { SMP, MapelSMP } from './pages/SMP';
import { SMA, MapelSMA } from './pages/SMA';
import { Fitur, Data } from './pages/Fitur';
import Visit from './pages/Visit';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/sd' exact component={SD} />
        <Route path='/sd/mapel' exact component={MapelSD} />
        <Route path='/smp' exact component={SMP} />
        <Route path='/smp/mapel' exact component={MapelSMP} />
        <Route path='/sma' exact component={SMA} />
        <Route path='/sma/mapel' exact component={MapelSMA} />
        <Route path='/fitur' exact component={Fitur} />
        <Route path='/fitur/data' exact component={Data} />
        <Route path='/visit' exact component={Visit} />
      </Switch>
    </Router>
  );
}

export default App;
