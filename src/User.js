// User.jsx for # 59. UseParamsHook
import React from "react";
import { useParams } from "react-router-dom";
//user url main jo bhi kuch lukhata hain se usko fetch
// karne ke liye useParams ko import kiya from react - router - dom

//with useParams hook

const User = () => {
  const { fname, lname ,city} = useParams();
  
  //parameters passed here should match the parametrs written in the Route path
  return (
    <h2>
      User {fname}, {lname} from {city} page
    </h2>
  );
};

//------------------------------------------------------------------------
//with the old method before the hooks we have to write code like this
// const User = ({ match }) => {
//   return <h2>User {match.params.fname} page</h2>;
// };

export default User;