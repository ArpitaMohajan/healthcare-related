import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import Header from './Shared/Footer/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Detals from './components/Booking/Booking';
import Details from './components/Booking/Booking';
import Booking from './components/Booking/Booking';
import About from './components/About/About';
import Expert from './components/Expert/Expert';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/expert'>
              <Expert></Expert>
            </Route>

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path='*'>
              <NotFound></NotFound>
            </Route>


          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
