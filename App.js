import { createContext, useEffect, useState } from 'react';
import './App.css';
import CompA from './Components/CompA';

// Creating Context
export const MYContextAPI = createContext();

function App() {
  const [StateData, setStateData] = useState({});

  // Fetching Data Function
  const FetchingData = async () => {
    try {
      const Data = await fetch("https://dummyjson.com/users");
      const response = await Data.json();
      console.log(response);
      setStateData(response); // Set fetched data in state
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    FetchingData();
  }, []);

  return (
    <div className="App">
      <MYContextAPI.Provider value={StateData}>
        <CompA />
      </MYContextAPI.Provider>
    </div>
  );
}

export default App;
