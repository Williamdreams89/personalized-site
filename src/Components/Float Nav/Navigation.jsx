import React from 'react';
import "./navigationer.css";
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServerLine} from "react-icons/ri";
import {BiMessageSquareDetail} from "react-icons/bi";


function Navigation() {
  return (
    <nav className='floating__nav'>
        <a href='#home'><AiOutlineHome /></a>
        <a href='#about'><AiOutlineUser /></a>
        <a href='#resume'><BiBook /></a>
        <a href='#portfolio'><RiServerLine /></a>
        <a href='#contact'><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Navigation