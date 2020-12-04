import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { UserProvider } from './context/UserContext';
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import NewEntry from "./pages/NewEntry";
import NewOutgoing from "./pages/NewOutgoing";
import ShowWallet from "./pages/ShowWallet";
import GlobalStyle from './assets/GlobalStyle';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path='/' exact component={ShowWallet} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/entry' component={NewEntry} />
          <Route path='/outgoing' component={NewOutgoing} />
        </Switch>
      </BrowserRouter>
    </UserProvider>

  );
}

export default App;
