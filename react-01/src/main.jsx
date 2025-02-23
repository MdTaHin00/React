import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import LearnReact from './LreanReact.jsx';
import CallReact from './LreanReact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>,
   <LearnReact/>{/*  Function  call */},
   <CallReact/>{/* second call  function */}
  </StrictMode>,
);
