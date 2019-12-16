import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styled from 'styled-components'

const CardDiv = styled.div`
    width: 28%;
    margin: 2%;

`;

const Cards = (props) => {
    const {zinger} = props;
  return (
    <CardDiv>
      <Card style={{width: "100%", boxShadow: "0px 0px 8px 1px #111111"}}>
        <CardImg top width="100%" src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-golden-girls-bea-arthur.jpg" alt="Card image cap" />
        <CardBody>
            <CardTitle>{zinger.who}</CardTitle>
          {/* <CardSubtitle>Card subtitle</CardSubtitle> */}
            <CardText>{zinger.quote}</CardText>
          {/* <Button>Button</Button> */}
        </CardBody>
      </Card>
    </CardDiv>
  );
};

export default Cards;






// import React from 'react'

// const Card = (props) => {
//     const {quote}=props;
//     return (
//         <div>
//             {quote}
//         </div>
//     )
// };

// export default Card