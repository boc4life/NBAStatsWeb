import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';
import Players from './pages/Players';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/players" component={Players} />
      </div>
    </Router>
  );
}

export default App;
