import GamesDashboard from './components/dashboards/games/GamesDashboard';
import './App.css';
import Navbar from './components/navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/home/Home';
import SongsDashboard from './components/dashboards/songs/SongsDashboard';
import ShapesGame from './components/games/shapesGame/ShapesGame';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>

        <Switch>
          <Route exact path="/games" component={GamesDashboard}></Route>
          <Route exact path="/games/shapes" component={ShapesGame}></Route>
          <Route exact path="/songs" component={SongsDashboard}></Route>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
