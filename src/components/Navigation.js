import React from 'react'
import { Link } from 'react-router-dom';
import creed2 from '../images/assassin.jpg'
import bnt2 from '../images/bayonetta.jpg'
import halo3 from '../images/halo.jpg'
import god2 from '../images/kratos.jpg'
import croft2 from '../images/lara.jpg'
import zelda2 from '../images/link.jpg'


const Navigation = () => {
    return (
        <div>
            <Link to="/Assassins">
                <figure>
                    <img src={creed2} />
                    <figcaption>Assassin's Creed</figcaption>
                </figure>
            </Link>
            <Link to="/Bayonetta">
                <figure>
                    <img src={bnt2} />
                    <figcaption>Bayonetta</figcaption>
                </figure>
            </Link>
            <Link to="/Halo">
                <figure>
                    <img src={halo3} />
                    <figcaption>Halo</figcaption>
                </figure>
            </Link>
            <Link to="/Kratos">
                <figure>
                    <img src={god2} />
                    <figcaption>God of War</figcaption>
                </figure>
            </Link>
            <Link to="Lara">
                <figure>
                    <img src={croft2} />
                    <figcaption>Tomb Raider</figcaption>
                </figure>
            </Link>
            <Link to="/Link">
                <figure>
                    <img src={zelda2} />
                    <figcaption>The Legend of Zelda</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navigation
