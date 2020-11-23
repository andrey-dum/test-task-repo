import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import AboutMe from './components/AboutMe/AboutMe';
import Users from './components/Users';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Drawer from './components/Drawer/Drawer';
import ToastComponent from './common/ToastComponent';


function App() {

  const [open, setOpen] = useState(false);
  const handleOpenMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="app">
 
        <Header handleOpenMenu={handleOpenMenu} />
        <Drawer open={open} handleOpenMenu={handleOpenMenu} />

          <div className="content">

            <Route exact path="/">
              <Banner />
              <AboutMe />
              <Users />
              <SignUp />
            </Route>

            <Switch>
              <Route path="/banner" component={Banner} />
              <Route path="/aboutMe" component={AboutMe} />
              <Route path="/users" component={Users} />
              <Route path="/signUp" component={SignUp} />
            </Switch>
            
            <ToastComponent />
          </div>

        <Footer />
    </div>
  );
}

export default App;
