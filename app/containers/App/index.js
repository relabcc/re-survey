import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import QuizPage from 'containers/QuizPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz/:id" component={QuizPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
