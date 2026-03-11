import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

window.onscroll=function(){

const scrollTop=document.documentElement.scrollTop
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight
const scrolled=(scrollTop/height)*100

const bar=document.getElementById("scrollBar")

if(bar){
bar.style.width=scrolled+"%"
}

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

