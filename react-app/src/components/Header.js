import React from 'react';
import Button from './Button'
import {useLocation} from "react-router-dom"
const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
  return (
    <header>
      <h1 className='header'>{title}</h1>
      {location.pathname==='/' && (<Button
        color={showAdd ? "Red" : "Green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />)}

    </header>
  )
};
Header.defaultProps={
    title: "Task Tracker",
}
const headingStyle={
    color:'red', backgroundColor:"black"
}

export default Header;
