import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import { UserProvider } from './context/UserContext';
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import GlobalStyle from './assets/GlobalStyle';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          {/* <Route path='/' exact component={} /> */}
          <Route path='/sign-up' component={SignUp} />
          <Route path='/' component={SignIn} />
          {/* <Route path='/entry' component={} />
          <Route path='/outgoing' component={} /> */}
        </Switch>
      </BrowserRouter>
    </UserProvider>

  );
}

export default App;
