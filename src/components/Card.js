import React from "react";

const Card = (props) => {
    const { friendName, friendEmail, img} = props;
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${img}?200x200`} alt="robo-sola" />
        <div>
            <h2>
                {friendName}
            </h2>
            <p>
                {friendEmail}
            </p>
        </div>
    </div>
    );
}

export default Card;