import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Provider } from 'react-redux';
import store from './redux/store';
import Routea from "./Routes";

import Login from "./components/Login";
import Bikecard1 from "./cards/Bikecard";
import Firstpage from "./Pages/Firstpage";

function App() {

  return (
    <>
    <Provider store={store}>
   <BrowserRouter> 
    <Routea/>
    
</BrowserRouter>
</Provider>
{/* <Dashboard/> */}
   
    </>

  );
}

export default App;


// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement,reset, fetchData } from "./redux/actions/counter.action";



// function App() {
//   // Use useSelector with the correct property path
//   const count = useSelector((state) => state.count);
//   const data = useSelector((state) => state.data.users);

//   const dispatch = useDispatch();
//   useEffect(()=>{
// dispatch(fetchData())
//   },[dispatch])

//   return (
//     <>
//       {/* <button onClick={() => dispatch(increment)}>add</button>
//       <h1>{count}</h1> {/* Display the count here */}
//       {/* <button onClick={() => dispatch(decrement)}>minus</button>
//       <button onClick={() => dispatch(reset)}>reset</button>  */}
//       {
//         data.map((item)=>{
//           return(
//             <h1>{item?.Category}</h1>
//           )
//         })
//       }
//     </>
//   );
// }

// export default App;
