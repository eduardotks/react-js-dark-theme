import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './wrapper/ThemeWrapper';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ThemeTela from "./views/theme/ThemeTela";
import Home from "./views/home/Home";

ReactDOM.render(
  <ThemeContextWrapper>
    <React.StrictMode>
      <Home />
    </React.StrictMode>{' '}
  </ThemeContextWrapper>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
