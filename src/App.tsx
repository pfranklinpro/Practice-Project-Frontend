import React, { Suspense } from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
// import logo from './logo.svg';
import LoadingPage from './pages/LoadingPage';

function App() {
  const Router = React.lazy(() => import("./components/Router"));
  return (
    <div>
      <NavigationBar />
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="page">
        <Suspense fallback={<LoadingPage />}>
          <Router />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
