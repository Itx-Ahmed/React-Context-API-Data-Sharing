import React, { useContext } from 'react';
import { MYContextAPI } from '../App';

const CompC = () => {
  const myfetchdata = useContext(MYContextAPI); // Access context data

  return (
    <>
      <h1>Fetching Data from Context Hook from User API</h1>
      
      {/* Conditional Rendering */}
      {myfetchdata?.users ? (
        myfetchdata.users.map((item) => (
          <div key={item.id}>
            <h1>ID: {item.id}</h1>
            <h2>Age: {item.age}</h2>
            <h3>Email: {item.email}</h3>
          </div>
        ))
      ) : (
        <h1 style={{color:"red"}}>Loading data...</h1>
      )}
    </>
  );
};

export default CompC;
