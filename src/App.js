import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import User from "./User";
import Service from "./Service";
import "./App.css";
import UseParamsHook from "./UseParamHook";
import LocationUser from "./LocationUser";
import HistoryUser from "./HistoryUser";
import Name from "./Name"
import UseLocationHook from "./UseLocationHook";
import UseHistoryApp from "./UseHistoryApp";

const RouterApp = () => {
  // const Name = () => {
  //   return <h1>Hello I am Name page</h1>;
  // };
  //-------------------------------------------
  return (
    <>
     
     
      {/* ********************[ plain Router ]*****************************  */}
      {/* <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/name" component={Name} />
        <Route component={Error} />
      </Switch> */}
     
      {/* **************************[ UseParamsHook ]***********************************************  */}
      {/* <UseParamsHook />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/User/:fname/:lname/:city" component={User} />
        <Route component={Error} />
      </Switch>  */}
      {/* **************************[ useLocationHook ]***************************************** 
      {/* #60. useLocationHook in React Router * */}
       {/* <UseLocationHook />
      <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/locationuser/:fname/:lname" component={LocationUser} />
        <Route component={Error} />
      </Switch> */}
      {/* ***************************[ UseHistoryApp ]**************************************************************  */}
      <UseHistoryApp />
       <Switch>
        <Route exact path="/" component={() => <About name="About" />} />
        <Route
          exact
          path="/service"
          render={() => <Service name="Service" />} //render method
        />
        <Route exact path="/contact" component={Contact} />
        <Route path="/contact/Name" component={Name} />
        <Route path="/historyuser/:fname/:lname" component={HistoryUser} />
        <Route component={Error} />
      </Switch> 
    </>
  );
};

export default RouterApp;



// ##################################### [ HOC ] ###################################################### 

// import React, {useState} from 'react';

// function App(){
//   return(
//     <div className="App">
//       <h1>HOC</h1>
//       <HOCred cmp = {counter}/>
//     </div>
//   )
// }

// function HOCred(props){
//   return(
//     <h2 style={{backgroundColor:"red", width: 100}}><props.cmp /></h2>
//   )
// }

// function counter() {
//   const[count, setcount] = useState(0)
//   return <div>
//     <h3>{count}</h3>
//     <button onClick={() => setcount(count + 1) }>update</button>
//   </div>;
// }

// export default App;

// ******************************* [ HOC ]***************************************************** 

// import "./App.css";
// import { useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <h1>HOC</h1>
//       <HOCRed cmp={Counter} />
//       <HOCGreen cmp={Counter} />
//     </div>
//   );
// }
// function HOCRed(props) {
//   return (
//     <h2 style={{ backgroundColor: "red", width: 100 }}>
//       red
//       <props.cmp />
//     </h2>
//   );
// }
// function HOCGreen(props) {
//   return (
//     <h2
//       style={{
//         backgroundColor: "green",
//         width: 100,
//       }}
//     >
//       green
//       <props.cmp />
//     </h2>
//   );
// }
// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Update
//       </button>
//     </div>
//   );
// }

// export default App;