// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h4>HELLO</h4>
//     </div>
//   );
// }

// export default App;




// // 15. useContext Hook 

// import './App.css';
// import { Box } from './components/context/Box';
// import ThemeContextProvider from './components/context/ThemeContext';

// function App() {
//   return (
//     <div className="App">
//       <ThemeContextProvider>
//         <Box/>
//       </ThemeContextProvider>
//     </div>
//   );
// }

// export default App;


// // 17. useRef Hook 

// import './App.css';
// import DomRef from './components/ref/DomRef';
// import MutableRef from './components/ref/MutableRef';

// function App() {
//   return (
//     <div className="App">
//       {/* <DomRef/> */}
//       <MutableRef/>
//     </div>
//   );
// }

// export default App;



// // 18. class component 

// import './App.css';
// import Counter from './components/class/Counter';

// function App() {
//   return (
//     <div className="App">
//       <Counter/>
//     </div>
//   );
// }

// export default App;



// 19. component prop

import './App.css';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component = {Profile} />
    </div>
  );
}

export default App;


