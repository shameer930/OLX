import React, { useEffect } from "react";
import { useSelector,useDispatch } from 'react-redux';
import { fetchData2 } from '../redux/actions/counter.action';


const UserTable = () => {
    const data = useSelector((state) => state.data.users);
    console.log(data,"data new")
    const dispatch=useDispatch();
    
    
   
    useEffect(()=>{
      dispatch(fetchData2())
    },[dispatch])
    // Add more user data as needed
  

  return (
    <div className="custom-container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr >
              <td>{x.name}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
