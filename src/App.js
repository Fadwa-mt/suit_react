// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
//import StudentsList from "./Students";
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