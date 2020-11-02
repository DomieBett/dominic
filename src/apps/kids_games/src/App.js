import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import './App.css';
import AppConfig from './components/config/AppConfig';
import GamesDashboard from './components/dashboards/games/GamesDashboard';
import SongsDashboard from './components/dashboards/songs/SongsDashboard';
import ShapesGame from './components/games/shapesGame/ShapesGame';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <AppConfig></AppConfig>

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
