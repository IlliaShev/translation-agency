import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { initializeApp } from 'firebase/app';
import './index.css';

initializeApp({
    apiKey: "AIzaSyDtGH1dISVOreegpPUpxf1TokcI50Vgtqs",
    authDomain: "translation-agency-d572c.firebaseapp.com",
    projectId: "translation-agency-d572c",
    storageBucket: "translation-agency-d572c.appspot.com",
    messagingSenderId: "523606972272",
    appId: "1:523606972272:web:afcaf05f09b799edeea1b5",
    measurementId: "${config.measurementId}"
});

ReactDOM.render(<App />, document.getElementById('root'));
