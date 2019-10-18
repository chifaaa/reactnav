
import React from 'react';

// import ReactDOM from 'react-dom';

        
// function ShowMeOnHover() 
// {
//     document.getElementById('uldropid').style.display = "block";
// }
   
    export const Menu = (props) =>props.menu.map((el, i) =><li key={i} ><a href={el.target} ><span style={{color: el.isvisited ? '#6bb09d' : 'rgb(100, 100, 100)'}}>{el.name}</span></a>
   <ul className="uldrop" style={el.drop? {display:'flex',flexDirection:'column'}:{display:'none'}}><br/><br/><br/> {el.drop && (el.drop.map((elm, y) =>
   <li className='ildrop' key={y}><a href={elm.target}><span>{elm.name}</span></a></li>))}</ul></li>)
    // className={el.name}

    // export const Menu = (props) =>props.menu.map((el, i) =><li key={i} ><a href={el.target} ><span onmouseover='ShowMeOnHover()' style={{color: el.isvisited ? '#6bb09d' : 'rgb(100, 100, 100)'}}>{el.name}</span></a>
    // <ul className="uldrop" id='uldropid' style='display:none;'><br/><br/><br/> {el.drop && (el.drop.map((elm, y) =>
    // <li className='ildrop' key={y}><a href={elm.target}><span>{elm.name}</span></a></li>))}</ul></li>)
