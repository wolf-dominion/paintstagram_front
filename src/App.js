import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import PageHome from './components/PageHome'
import PageBrowse from './components/PageBrowse'

import './App.css';

function App() {
  return (
    <div className='box'>

      <Router>
        <Header />

        <Switch>
          <Route exact path='/'>
            <PageHome/>
          </Route>
          <Route path='/browse'>
            <PageBrowse/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
