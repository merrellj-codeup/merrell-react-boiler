import React, {useContext} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import { useLogin } from "./hooks/useLogin";
import { AuthContext } from "./contexts/Auth";
import LoginPage from './pages/Login';


export const App = () => {
  // Uncomment the following line to implement the login/logout functionality. Be sure it is ready before you start the next step
  // const { user, authIsReady } = useContext(AuthContext);

  // Comment out the following two lines to implement the login/logout functionality. They are only here to make the app work without it
  const user = true;
  const authIsReady = true;
  // End of comment out

  return authIsReady ? (
    user ? <AuthenticatedApp user={user} /> : <UnauthenticatedApp />
  ) : (
    <>
      <Reset />
      <AppWrapper>
        <h1>Loading...</h1>
      </AppWrapper>
    </>
  );
}

const AuthenticatedApp = (props) => {
  return (
      <BrowserRouter >
        <Routes>

          <Route exact path="/" element={
            <h1>Page template here</h1>
          } />
          {/* // use a map function to render the routes */}

        </Routes>
      </BrowserRouter>
  );
}

const UnauthenticatedApp = () => {
  const { login, isPending } = useLogin();
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={
            <AppWrapper className="login">
              <LoginPage doLogin={login} isPending={isPending} />
            </AppWrapper>
        }/>
        <Route exact path="/*" element={
            <AppWrapper className="login">
              <Navigate to="/login" />
            </AppWrapper>
        }/>
      </Routes>
    </BrowserRouter>
  );
};

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  position:relative;
  &.login {
    justify-content: center;
  }
`
export default App;
