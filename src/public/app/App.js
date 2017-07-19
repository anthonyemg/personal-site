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
import anthonysTheme from 'material-ui/styles/baseThemes/anthonysTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Main from './Main.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(anthonysTheme)}>
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
