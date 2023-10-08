
import React, { Suspense } from "react";
import { BrowserRouter } from 'react-router-dom';
import Routes from './constant/routes'
import Loader from "./components/loader";

const App = () => (
  <Suspense fallback={
    <Loader isSuspense />}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Suspense >
)
export default App;
