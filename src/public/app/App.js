import React from 'react';
import { render } from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
<<<<<<< HEAD
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
=======
>>>>>>> dev
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import colorTheme from '../colorTheme.js'
import Main from './Main.jsx';

class App extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
=======
      <MuiThemeProvider muiTheme={colorTheme}>
>>>>>>> dev
        <Router>
          <div>
            <Route exact path="/" render={() => (
              <Main />
            )}/>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
