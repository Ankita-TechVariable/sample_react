import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import SearchEngine from './Containers/SearchEngineContainer/SearchEngine';
import DetailPage from './Containers/DetailPageContainer/DetailPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SearchEngine } />
          <Route path="/:id" component={DetailPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
