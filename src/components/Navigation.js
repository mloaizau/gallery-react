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
        <div className="container mt-3 padre">
            <Link to="/Assassins" className="links">
                <figure>
                    <img src={creed2} className="size-img" />
                    <figcaption>Assassin's Creed</figcaption>
                </figure>
            </Link>
            <Link to="/Bayonetta" className="links">
                <figure>
                    <img src={bnt2} className="size-img"/>
                    <figcaption>Bayonetta</figcaption>
                </figure>
            </Link>
            <Link to="/Halo" className="links">
                <figure>
                    <img src={halo3} className="size-img"/>
                    <figcaption>Halo</figcaption>
                </figure>
            </Link>
            <Link to="/Kratos" className="links">
                <figure>
                    <img src={god2} className="size-img"/>
                    <figcaption>God of War</figcaption>
                </figure>
            </Link>
            <Link to="Lara" className="links">
                <figure>
                    <img src={croft2} className="size-img"/>
                    <figcaption>Tomb Raider</figcaption>
                </figure>
            </Link>
            <Link to="/Link" className="links">
                <figure>
                    <img src={zelda2} className="size-img" />
                    <figcaption>The Legend of Zelda</figcaption>
                </figure>
            </Link>
        </div>
    )
}

export default Navigation
