import React from "react";
import "./styles.css"
import brickImg from "../img/brickAndMortar.jpg"

function Header() {
    return (
        <div>
            <div>
                <img src={brickImg} alt="brickAndMortar" />
            </div>
            Jobsite
        </div>
    )
};

export default Header;

// source={require{"../../../public/img/brickAndMortar.jpg"}}