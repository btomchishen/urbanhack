import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/home';
import Area from './components/area';
import Clubs from './components/clubs';
import Hospital from './components/hospital';
import Vistavki from './components/vistavki';
import Peretrimka from './components/peretrimka';
import Packets from './components/packets';
import SignIn from './components/signin';
import SignUp from './components/signup';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav className="nav">
            <ul className="router-flex">
              <li><Link to="/">Головна</Link></li>
              <li><Link to="/area">Місця вигулу</Link></li>
              <li><Link to="/packets">Автомати з<br />спец. пакетами</Link></li>
              <li><Link to="/peretrimka">Перетримка</Link></li>
              <li><Link to="/hospital">Ветеринарні<br />заклади</Link></li>
              <li><Link to="/vistavki">Виставки</Link></li>
              <li><Link to="/clubs">Клуби</Link></li>
              <div className="sign-right">
              <li className="sign"><Link to="/signin">Вхід</Link></li>
              <li className="sign"><Link to="/signup">Реєстрація</Link></li>
              </div>
            </ul>
          </nav>
          <Switch>
          <Route path="/area">
              <Area />
            </Route>
            <Route path="/packets">
              <Packets />
            </Route>
            <Route path="/peretrimka">
              <Peretrimka />
            </Route>
            <Route path="/hospital">
              <Hospital />
            </Route>
            <Route path="/vistavki">
              <Vistavki />
            </Route>
            <Route path="/clubs">
              <Clubs />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signout">
              <SignUp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>


      



    </div>
  );
}

export default App;
