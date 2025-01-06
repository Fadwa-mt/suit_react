/*
import { useEffect, useState } from "react";

export default function Header (){
    const [search , setSearch]= useState('')
    useEffect(()=>{
        document.addEventListener('update_search', (evt)=> {
            setSearch(evt.detail)
        })
        return() => document.removeEventListener('update_search' , () =>{});
    },[])
    return <div 
    style={{textAlign: 'center', height:100, border:' 1px solid #ccc'}}>
    Header  {search}
    </div>;
}
    */
import { useContext, useEffect, useState } from "react";
import SearchContext from "./SearchContext";

export default function Header(){
      const contextkeys = useContext(SearchContext)
      // const [search, setSeacrh] = useState('')
      // useEffect(() => {
      //       document.addEventListener('update_search', 
      //             (evt) => {
      //             setSeacrh(evt.detail)
      //       })
      //       return () => document.removeEventListener('update_search', () => {});
      // }, [])
      console.log(contextkeys)
      return <div 
               style={{
            textAlign: 'center', 
            height: 100, 
               border: '1px solid #ccc'}}>
            Header {contextkeys.search}
      </div>;
}