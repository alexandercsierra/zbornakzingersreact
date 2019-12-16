import React from 'react'
import Card from './Card'
import axios from 'axios';
import styled from 'styled-components'
import { Button } from 'reactstrap';

const CardDiv = styled.div`
    width: 80%;
    // border: 1px solid red;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    @media(max-width: 650px){
        width: 100%;
    }
`;

// const Button = styled.button`
//     margin: 4%;
// `;

const CardContainer = (props) => {
    const {zinger, setZinger, cards, setCards, currentCard, setCurrentCard} = props;
    // setCurrentCard(<Card quote={zinger.quote}/>)

    
    // setCards( myArray => myArray.concat(<Card/>) )

    return (
        <div>
            <Button style={{margin: "4%"}}color="secondary"
                onClick={()=>{
                    axios.get("https://golden-girls-api.herokuapp.com/random/dorothy")
                    .then(res => {setZinger(res.data);
                        setCurrentCard(<Card zinger={zinger}/>);
                        setCards(oldArray => [...oldArray, currentCard]);
                    })
                    .catch(err => {console.log(err)})
            
                  }}
            
            
            
            >Get a Zinger</Button>{' '}
        {/* <Button onClick={()=>{
            axios.get("https://golden-girls-api.herokuapp.com/random/dorothy")
            .then(res => {setZinger(res.data);
                setCurrentCard(<Card zinger={zinger}/>);
                setCards(oldArray => [...oldArray, currentCard]);
            })
            .catch(err => {console.log(err)})
    
          }}>Get a Zinger</Button> */}
        <CardDiv>
            {cards}
        </CardDiv>
        </div>
    )
}

export default CardContainer

// setEquation(oldArray => [...oldArray, numberState]);