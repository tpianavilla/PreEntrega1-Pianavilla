import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {initializeApp} from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyAxyliFkT5Ngm1W3_OSgRL5rYmg3HCwHXw",
  authDomain: "lightweight---coderhouse.firebaseapp.com",
  projectId: "lightweight---coderhouse",
  storageBucket: "lightweight---coderhouse.appspot.com",
  messagingSenderId: "963250249388",
  appId: "1:963250249388:web:38dbf82f717a445c4f8909"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
