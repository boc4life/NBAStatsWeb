import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Navbar from './components/Navbar';
import SingleTeam from './pages/SingleTeam';
import SinglePlayer from './pages/SinglePlayer';
import './App.css';

function App() {
  return (
      <div>
        <Router>
        <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/teams" component={Teams} />
            <Route exact path="/players" component={Players} />
            <Route exact path="/teams/:team" component={SingleTeam} />
            <Route exact path="/players/:player" component={SinglePlayer} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;
