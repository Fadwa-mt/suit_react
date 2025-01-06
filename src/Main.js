/*
import {useState } from "react";
import FilterBox from "./FilterBox";
import StudentsList from "./Students";

export default function Main(){
    const [search , setSearch]= useState('');
    return <div 
    style={{display: 'flex', flexDirection:' column'}}>
    <FilterBox handleSearch ={(value)=> setSearch(value)}/>
        <StudentsList search={search}/>
    </div>;
}
    */
import FilterBox from "./FilterBox";
import { Outlet } from "react-router-dom";

export default function Main(){
      return <div 
               style={{display: 'flex', 
               flexDirection: 'column'}}>
            <FilterBox/>
            {/* <StudentsList/> */} 
            <Outlet/>
      </div>;
}