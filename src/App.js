// export default App;
//import StudentsList from "./Students";
/*
import Header from "./Header";
import Main from "./Main";
import MenuLeft from "./MenuLeft";

function App(){
  return(
    <div style={{padding:20, display:'flex'}}>
      <div style={{width:200, border:'1px solid #ccc'}}>
        <MenuLeft/>
      </div>
      <div style={{display:'flex' ,flexDirection:'column',flex:1, border:'1px solid #ccc'}}>
        <Header/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
*/
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchProvider from "./SearchProvider";
import MainLayout from "./MainLayout";
import { lazy } from "react";
// import Welcome, { Welcome3 } from "./Welcome";

const StudentsList = lazy(() => import('./Students'));
const ClassesList = lazy(() => import('./Classes'));


function App() {
  return (
    <BrowserRouter>
      <SearchProvider>
        <Routes>
          <Route path="/" element={<MainLayout/>}>
            <Route path="/" element={<StudentsList/>}/>
            <Route path="/classes" element={<ClassesList/>}/>
            <Route path="/classes/:id/students" element={<StudentsList/>}/>
          </Route>
        </Routes>
      
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
