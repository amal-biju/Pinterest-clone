import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DataContextProvider } from './Context/DataContextProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <DataContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataContextProvider>,
  document.getElementById('root')
);


