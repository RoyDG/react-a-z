import React from 'react';
import './App.css';


function App() {

  const who = "this is me";
  const hero = ['mash', 'sakib', 'tamim', 'mushfiq', 'mahamudullah', 'mustafiz'];
  const things = [{item: "mango", price: "50", weight: '1kg', colour: 'red'}];

  const info = [{name:"Roy", id: "1", work: 'coding'}]

  //map over things objects of array
  const thingsName = things.map (allThings => allThings.price);
  console.log(thingsName)

  //map over hero array
   const heroName = hero.map (legends => legends);
   console.log(heroName)
 
  return (
    <div className="App">

    {
      things.map(thingName => <Product grocery = {thingName}></Product>)
    }
    {
        info.map(infoName => <Person name ={infoName}></Person>)
        
    }

     <Person name = "Rahul" Id ="2"></Person>
    <Person name = "Roy" Id = "5"></Person>
    <Person work = "Coding" Id = "22" name = "Engineer">
    </Person>
    <Person name = {who}></Person>
    <Product grocery = {things[0]}></Product>
    <Legends crickters = {hero + " "}></Legends>

      <div>
        <ul>
          {
            hero.map(legend => <li>{legend}</li>)
          }
        </ul>
      </div>
    </div>
   
  );
}

function Legends (props){

  return (
    <div>
      <h2>Hero: {props.crickters}</h2>
    
    </div>
  )};

function Person(props){
  const {name, id, work} = props.name
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Work: {work}</h2>
      <h3>Name:{name}</h3>
      <h3>Id:{id}</h3>
    </div>
  )};

  function Product(props){
    //if passing key by this const or u can declare like item.
    const {weight, price, colour} = props.grocery;
    return (
      <div>
        <p>
          Item:  {props.grocery.item}
        </p>
        <p>
          Price:  {price}
        </p>
        <p>
        Weight: {weight}
        </p>
        <p>
          Colour:  {colour}
        </p>
      </div>
    )
  }
export default App;