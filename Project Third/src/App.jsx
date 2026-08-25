import React from "react";
//simple function (not a component)
function add( a,b){
  return a+b;
}
//react component
function Welcome(){
  return <h2> welcome to my react component</h2>

}

//another component
function Info(){
  return(
    <div>
      <h3> what is the component </h3>
      <p> a component is a reusable piece of UI in react.</p>
    </div>
  );
}

//main app  component
function App(){
  return(
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>  First react component </h1>

      {/* using component*/}
      <Welcome/>
      <Info/>
      <h3> How to use component </h3>
      <p> use component like HTML tag: &lt;Welcome /&gt; </p>

      <h3> differnent betwen function and component</h3>
      <p> normal function result: {add(10,20)}</p>
      


    </div>
  );
}

export default App;
