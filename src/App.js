import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CardContainer from './components/CardContainer'


function App() {

  const [zinger, setZinger] = useState("");
  const [currentCard, setCurrentCard] = useState();
  const [cards, setCards] = useState([]);

useEffect(()=>{
  axios.get("https://golden-girls-api.herokuapp.com/random/dorothy")
        .then(res => {setZinger(res.data); console.log(res.data)})
        .catch(err => {console.log(err)})

}, [])

  




  return (
    <div className="App">
      
      <CardContainer setZinger = {setZinger} zinger = {zinger} cards={cards} setCards={setCards} currentCard={currentCard} setCurrentCard={setCurrentCard}/>
    </div>
  );
}

export default App;
