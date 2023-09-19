import React, {Suspense} from 'react';
import {Routes, Route} from 'react-router-dom';
import './styles/style.scss';
import ErrorBoundary from './Components/ErrorBoundary';
import Spinner from "./Components/Spinner";

const Orders = React.lazy(() => import('./Pages/index'));
const CreateOrder = React.lazy(() => import('./Pages/CreateOrder'));
const Statistics = React.lazy(() => import('./Pages/Statistics'));

const NotFound = () => {
  return (
      <div className={'error_page'}>
          <span className={'error_page__code'}>{'404 '}</span>This page could not be found</div>
  );
};


const App = () => {
  return (
      <div className={'global'}>
          <div className={'global__layout'}>
              <Suspense fallback={<Spinner/>}>
                  <ErrorBoundary>
                      <Routes>
                          <Route path={'/'} element={<Orders/>}/>
                          <Route path={'/create'} element={<CreateOrder/>}/>
                          <Route path={'/statistic'} element={<Statistics/>}/>
                          <Route path={'/:orderId/edit'} element={<CreateOrder/>}/>
                          <Route path={'*'} element={<NotFound/>}/>
                      </Routes>
                  </ErrorBoundary>
              </Suspense>
          </div>
      </div>
  );
};
export default App;
