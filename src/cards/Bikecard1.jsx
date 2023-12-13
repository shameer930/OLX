// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement,reset, fetchData } from "../redux/actions/counter.action";



// function App() {
//   // Use useSelector with the correct property path
//   const count = useSelector((state) => state.count);
//   const data = useSelector((state) => state.data);
//   const a=fetchData()
//   console.log(a,"hyeeee")
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
//         data.users.map((item)=>{
//           return(
//             <h1>{item?.Category}</h1>
//           )
//         })
//       }
//     </>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/counter.action";

function Bikecard1() {
  const data = useSelector((state) => state.data.users);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetchData action when the component mounts
    dispatch(fetchData());
  }, [dispatch]); // The dependency array ensures this effect only runs on mount
  
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
       
        <div>  {data.users.map((item) => (
          <h1>{item.Category}</h1>
        ))
}</div>
        
      )}
    </div>
  );
}

export default Bikecard1;