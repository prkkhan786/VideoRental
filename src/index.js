import React from 'react';
import ReactDOM from 'react-dom';
//import Counter from './components/counter'
import 'bootstrap/dist/css/bootstrap.css';
import App from './app.jsx';
import Counters from './components/counters';
import{BrowserRouter} from 'react-router-dom';


ReactDOM.render(<BrowserRouter>
                     <App />
                </BrowserRouter>
,document.getElementById('root'));