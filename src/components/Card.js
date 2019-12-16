import React from 'react'

const Card = (props) => {
    const {quote}=props;
    return (
        <div>
            {quote}
        </div>
    )
};

export default Card