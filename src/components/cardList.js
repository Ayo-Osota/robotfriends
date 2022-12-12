import React from "react";
// import { robots } from "./robots";
import Card from "./Card";

const cardList = ({robots}) => {
    const cardArray = robots.map((user, i) => {
        return <Card key={i} friendName={robots[i].name} friendEmail={robots[i].email} img={robots[i].id} />
    });
    return (
        <div>
          {cardArray}  
        </div> 
    )
}

export default cardList;