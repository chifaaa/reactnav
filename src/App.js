import React from 'react';
import './App.css';
import {Menu} from './menu';

let menuItems = [
  {
  name: 'Home',
  target: '#',
  ishovered:false,
  isvisited:true,
  isclicked: false},
  {
  name: 'Services',
  target: '#',
  drop:[{name:'For entrepreneurs',target:'#',ishovered:false,isvisited:false,isclicked: false},{name:'For students',target:'#',ishovered:false,isvisited:false,isclicked: false},{name:'For hobbyists',target:'#',ishovered:false,isvisited:false,isclicked: false}],
  ishovered:false,
  isvisited:false,
  isclicked: false},
  {
  name: 'Contact',
  target: '#',
  ishovered:false,
  isvisited:false,
  isclicked: false}
]


function App() {
  
  return (
    <div className="App">
     <header>
     <ul className='the'>
     <Menu menu={menuItems}/>
     </ul>
     </header>
    </div>
  );

}

export default App;
