import React, { useState } from "react";
import { GrGroup } from "react-icons/gr";
import { BsPersonCircle } from "react-icons/bs";
import { FaFacebook,FaInstagram ,FaTwitter  } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import '../../style/home.css'
import { Grid } from "@mui/material";
import { BasicRating } from "../../components";
import clayMockup from '../../images/Clay_Mockup___2556 1.svg'
import HBOMAX from '../../images/image 104.svg'
import spotify from '../../images/image 104 (1).svg'
import dinesy from '../../images/image 106.svg'
// import gaming from '../../images/Frame 47663.svg'
// import musica from '../../images/Frame 47664.svg'
// import software from '../../images/Frame 47666.svg'
// import bienestar from '../../images/Frame 47667.svg'
// import lecture from '../../images/Frame 47668.svg'
// import streaming from '../../images/Frame 47669.svg'
import page1 from '../../images/page1.svg'
import page2 from '../../images/page2.svg'
import page3 from '../../images/page3.svg'
import page4 from '../../images/page4.svg'
import page5 from '../../images/page5.svg'
import page6 from '../../images/page6.svg'
import vector from '../../images/vector.PNG'
import profile1 from '../../images/profile1.svg'
import profile2 from '../../images/profile2.svg'
import profile3 from '../../images/profile3.svg'
import profile4 from '../../images/profile4.svg'
import jLogo from '../../images/jLogo.svg'
const card = [
    {
        profile: '../../images/page1.svg',
        name: "necoline",
        review: "good",
        detail: "sadf afd adfs adfs af adfa fd afaf"
    }
]
const Home = () => {
    return (
        <>
            <Grid container id="navbar">
                <Grid item xs={12} sm={6} md={4} lg={9}><h1 style={{ color: "white" }}>Joinly</h1></Grid>
                <Grid item xs={12} sm={6} md={4} lg={3} id="nav-button">
                    <button id="nav-button-1">Registrarme</button>
                    <button id="nav-button-2">Inicier sesion</button>
                </Grid>
            </Grid>
            <Grid container id="container">
                <Grid item xs={12} sm={6} md={8} lg={6}>
                    <h1 className="section-heading">Unite a nuestra comunidad y ahorrá en los gastos de suscripciones digitales multiusuario</h1>
                    <button className="empezer-button">Empezar ahora</button>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={6}>
                    <img src={clayMockup} id="clay-mock-image" />
                </Grid>
            </Grid>
            <div id="section-2">
                <p className="card-header-text">Descubre los planes que <br /> puedes compartir</p>
                <Grid container id="card-container">
                    <Grid item xs={12} sm={6} md={4} lg={4} className="three-cards"><img src={HBOMAX} /><p>HBO Max</p></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} className="three-cards"><img src={spotify} /><p>Sptify Music</p></Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} className="three-cards"><img src={dinesy} /><p>Disney Plue</p></Grid>
                </Grid>
                {/* <Grid container>
                    <Grid item xs={12} sm={4} md={3} lg={2}><img src={streaming} className="six-cards" /></Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}><img src={musica} className="six-cards" /></Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}><img src={gaming} className="six-cards" /></Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}><img src={bienestar} className="six-cards" /></Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}><img src={software} className="six-cards" /></Grid>
                    <Grid item xs={12} sm={4} md={3} lg={2}><img src={lecture} className="six-cards" /></Grid>
                </Grid> */}
                <p className="HBO-text">HBO Max, Nintendo Switch, Microsoft 365, Apple Music, Canva y <br />muchas otras plataformas más para que puedas compartir y ahorrar el 80% del plan.</p>
                <button className="Comenzá-btn">Comenzá ahora</button>
            </div>
            <div id="section-3">
                <p className="section-3-heading">Conocé lo que podés hacer</p>
                <div id="section-3-data">
                    <div id="section-3-card">
                        <Grid container>
                            <Grid item xs={12} sm={6} md={6} lg={6} >
                                <div className="section-3-card-1">
                                    <GrGroup className="group-icon" />
                                    <span>¡Compartí experiencias con otros grupos!</span>
                                    <p>Uníte a los grupos de las plataformas que más te gustan para seguir disfrutando y ahorrar al mismo tiempo.</p>
                                    <button>Unirte a un grupo</button>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} lg={6} >
                                <div className="section-3-card-1">
                                    <BsPersonCircle className="group-icon" />
                                    <span>¡Compartí experiencias con otros grupos!</span>
                                    <p>Uníte a los grupos de las plataformas que más te gustan para seguir disfrutando y ahorrar al mismo tiempo.</p>
                                    <button>Unirte a un grupo</button>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <p>Te contamos en tres simples pasos como funciona cada uno</p>
                    <div id="section-3-card-2">
                        <p>Unirse a un grupo</p>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={4} lg={4} className="pages-card-1"><img src={page1} /><p>1. sumate a un grupo</p></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} className="pages-card-1"><img src={page2} /><p>2. Pagá las cuotas <br />mensuales al admin</p></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} className="pages-card-1"><img src={page3} /><p>3. Disfrutá del <br />servicio o producto</p></Grid>
                        </Grid>
                        <p>Compartir suscripción</p>
                        <Grid container>
                            <Grid item xs={12} sm={6} md={4} lg={4} className="pages-card-1"><img src={page4} /><p>1. Creá un grupo <br />para compartir</p></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} className="pages-card-1"><img src={page5} /><p>2. Aguardá a que <br /> otros miembros se unan</p></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4} className="pages-card-1"><img src={page6} /><p>3. Recibí cada mes la <br /> cuota de los  <br /> miembros</p></Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div id="section-4">
                <p>Mirá como funciona</p>
                <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/q0mmJrkQYaU">
                </iframe>
            </div>
            <div id="section-5">
                <p>Enterate que dicen<br /> sobre nosotros</p>
                {/* {card.map((item, index) => {
                        <div className="card-slider" key={index}>
                            <div className="card-header"><img src={item.profile} /><p>{item.name}</p></div>
                            <p className="review">{item.review}</p>
                            <p className="details">{item.detail}</p>
                        </div>
                    }
                    )} */}
                <Grid container>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div className="card-slider" >
                            <div className="card-header"><img src={profile1} /><p>Nicolas</p></div>
                            <p className="review">Increible!</p>
                            <p className="details">Estoy muy contento de haber elegido ésta plataforma.</p>
                            <BasicRating />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div className="card-slider" >
                            <div className="card-header"><img src={profile2} /><p>Emilia</p></div>
                            <p className="review">Encantada!</p>
                            <p className="details">Amé la plataforma para compartir! Necesito que incorporen la plataf...</p>
                            <BasicRating />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div className="card-slider" >
                            <div className="card-header"><img src={profile3} /><p>Jolio</p></div>
                            <p className="review">Wow!</p>
                            <p className="details">Me ahorré muchísimo dinero, agradezco que haya esto en mi país.</p>
                            <BasicRating />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} lg={3}>
                        <div className="card-slider" >
                            <div className="card-header"><img src={profile4} /><p>Robrto</p></div>
                            <p className="review">Copado!</p>
                            <p className="details">Me encanta!</p>
                            <BasicRating />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div id="section-6">
                <Grid container>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <div className="footer">
                            <img src={jLogo} />
                            <h1>Joinly</h1>
                            <p>Copyright © 2022</p>
                            <p>Córdoba, Argentina</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <div className="footer">
                            <h2>Información</h2>
                            <p>Centro de ayuda</p>
                            <p>Contactanos</p>
                            <p>FAQ</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <div className="footer">
                            <h2>Legal</h2>
                            <p>Términos y condiciones</p>
                            <p>Cookies</p>
                            <p>Política de Privacidad</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                        <div className="footer">
                           <h2>Seguinos en</h2>
                            <FaFacebook id="facebook-icon"/>
                           <AiFillTwitterCircle id="twitter-icon"/>
                            <FaInstagram id="insta-icon"/>
                        </div>
                    </Grid>
                </Grid>
            </div>

        </>
    )
}
export default Home