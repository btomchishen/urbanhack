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
              <div className="logo"></div>
            
              <li className="p1"><Link to="/"><p className="p1"><img src={require("./img/logo.png")} alt="Логотип" /></p></Link></li>
              <li className="p1"><Link to="/packets"><p className="p1">Автомати з спец. пакетами</p></Link></li>
              <li className="p1"><Link to="/treners"><p className="p1">Тренери</p></Link></li>
              <li className="p1"><Link to="/peretrimka"><p className="p1">Перетримка</p></Link></li>
              <li className="p1"><Link to="/hospital"><p className="p1">Ветеринарні заклади</p></Link></li>
              <li className="p1"><Link to="/vistavki"><p className="p1">Виставки</p></Link></li>
              <li className="p1"><Link to="/clubs"><p className="p1">Клуби</p></Link></li>
              <li className="sign1 p1"><Link to="/signin">Вхід</Link></li>
              <li className="sign p1"><Link to="/register">Реєстрація</Link></li>
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
