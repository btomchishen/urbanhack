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
import Register from './components/register';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <nav className="nav">
            <ul className="router-flex">
              <div className="logo"><img src={require("./img/logo.png")} alt="Логотип" /></div>
            
              <li><Link to="/"><p>Головна</p></Link></li>
              <li><Link to="/packets">Автомати з<br />спец. пакетами</Link></li>
              <li><Link to="/treners"><p>Тренери</p></Link></li>
              <li><Link to="/peretrimka"><p>Перетримка</p></Link></li>
              <li><Link to="/hospital">Ветеринарні<br />заклади</Link></li>
              <li><Link to="/vistavki"><p>Виставки</p></Link></li>
              <li><Link to="/clubs"><p>Клуби</p></Link></li>
              <div className="sign-right">
              <li className="sign"><Link to="/signin">Вхід</Link></li>
              <li className="sign"><Link to="/register">Реєстрація</Link></li>
              </div>
            </ul>
          </nav>
          <Switch>
          <Route path="/treners">
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
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>

        </div>
      </Router>


      <a href="tel: +38096869558" id="popup__toggle" ><div class="circlephone" ></div><div class="circle-fill" ></div><div class="img-circle"><div class="img-circleblock"></div></div></a>

    </div>
  );
}

export default App;
