import React from 'react'
import Card from './Card'
import axios from 'axios';

const CardContainer = (props) => {
    const {zinger, setZinger, cards, setCards, currentCard, setCurrentCard} = props;
    // setCurrentCard(<Card quote={zinger.quote}/>)

    
    // setCards( myArray => myArray.concat(<Card/>) )

    return (
        <div>
        <button onClick={()=>{
            axios.get("https://golden-girls-api.herokuapp.com/random/dorothy")
            .then(res => {setZinger(res.data);
                setCurrentCard(<Card quote={zinger.quote}/>);
                setCards(oldArray => [...oldArray, currentCard]);
            })
            .catch(err => {console.log(err)})
    
          }}>Get a Zinger</button>
        <div>
            {cards}
        </div>
        </div>
    )
}

export default CardContainer

// setEquation(oldArray => [...oldArray, numberState]);