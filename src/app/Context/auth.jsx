import React, {useState} from "react";

const Authentication = React.createContext({});

function AuthProvider(props){
  let isLoged = localStorage.getItem("loged");
  const [loged, setLoged] = useState(isLoged ? true : false);

  return (
  <Authentication.Provider value={{loged, setLoged}}>
    {props.children};
  </Authentication.Provider>);
 
};

export {Authentication, AuthProvider};