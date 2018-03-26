import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import QuizPage from 'containers/QuizPage/Loadable';
import SurveyPage from 'containers/SurveyPage/Loadable';
import ResultPage from 'containers/ResultPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Preloader from 'components/Preloader';

import assets from 'assets';

import ScrollToTop from './ScrollToTop';

export default function App() {
  return (
    <div>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/quiz/:id" component={QuizPage} />
          <Route path="/final" component={SurveyPage} />
          <Route path="/result" component={ResultPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </ScrollToTop>
      <Preloader images={assets} />
    </div>
  );
}
