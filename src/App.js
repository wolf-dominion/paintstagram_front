import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import PageHome from './components/PageHome'
import PageBrowse from './components/PageBrowse'
import PageUser from './components/PageUser';

import './App.css';

function App() {
  return (
    <div className='box'>

      <Router>
        <Header />

        <Switch>
          <Route 
            exact 
            path='/'
            component={PageHome}
          >
          </Route>
          <Route 
            path='/browse' 
            component={PageBrowse}
          >
          </Route>
          <Route 
            path='/user/:userId'
            component={PageUser}
          >
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
