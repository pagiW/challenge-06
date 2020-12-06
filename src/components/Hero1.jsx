import React, { useState } from 'react';

const Hero1 = () => {
    let [slide, setSlide] = useState(1);
    let media = window.matchMedia('screen and (max-width: 600px)');
    let none;
    let none2;
    let none3;
    let noneL;
    let isNone;
    let shadow;

    if (media.matches) {
        isNone = true;
    } else {
        isNone = false;
    }
    let [okNone, setNone] = useState(isNone);
    let [isMatches, setMatches] = useState(isNone);
    media.onchange = () => {
        if (media.matches) {
            setNone(okNone = true);
            setMatches(isMatches = true);
        } else {
            setNone(okNone = false);
            setMatches(isMatches = false);
        }
    }

    if (slide === 1) {
        none = {display: "initial"};
    } else {
        none = {display: "none"};
    }
    if (slide === 2) {
        none2 = {display: "initial"};
    } else {
        none2 = {display: "none"};
    }
    if (slide === 3) {
        none3 = {display: "initial"};
    } else {
        none3 = {display: "none"};
    }
    if (okNone) {
        noneL = {display: "none"};
    } else {
        noneL = {display: "flex"};
    }
    if (!okNone && isMatches) {
        shadow = {display: "initial"};
    } else {
        shadow = {display: "none"};
    }

    function burguer() {
        if (okNone) {
            setNone(okNone = false);
        } else {
            setNone(okNone = true);
        }
    }
    document.onkeyup = (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'a') {
            if (slide === 1) {
                setSlide(slide = 3);
            } else {
                setSlide(slide -= 1);
            }
        } else if (e.key === 'ArrowRight' || e.key === 'd') {
            if (slide === 3) {
                setSlide(slide = 1);
            } else {
                setSlide(slide += 1);
            }
        }
    }
    const more = () => {
        if (slide === 3) {
            setSlide(slide = 1);
        } else {
            setSlide(slide += 1);
        }
    }
    const less = () => {
        if (slide === 1) {
            setSlide(slide = 3);
        } else {
            setSlide(slide -= 1);
        }
    }
    return (
        <section className="main__section--slides">
            <section className="main__section--images">
                <figure className="images">
                    <img src="https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-1.jpg?raw=true" alt="hero 1" id="heroes" style={none} />
                    <img src="https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-2.jpg?raw=true" alt="hero 2" id="heroes" style={none2} />
                    <img src="https://github.com/degranda/Platzi-Room-homepage/blob/master/images/desktop-image-hero-3.jpg?raw=true" alt="hero 3" id="heroes" style={none3} />
                </figure>
                <section className="nav">
                    <img src={okNone ? "https://raw.githubusercontent.com/degranda/Platzi-Room-homepage/75069686c5bbcfc198b107794150e9c0ac5cad70/images/icon-hamburger.svg" : "https://raw.githubusercontent.com/degranda/Platzi-Room-homepage/75069686c5bbcfc198b107794150e9c0ac5cad70/images/icon-close.svg"} alt="burger button" className="burger-button" id="nav-button" onClick={burguer} />
                    <img src="https://raw.githubusercontent.com/degranda/Platzi-Room-homepage/75069686c5bbcfc198b107794150e9c0ac5cad70/images/logo.svg" alt="logo" className="logo-img" />
                    <nav>
                        <ul id="list" style={noneL}>
                            <li><a href="/challenge-06">Home</a></li>
                            <li><a href="/challenge-06">Shop</a></li>
                            <li><a href="/challenge-06">About</a></li>
                            <li><a href="/challenge-06">Contact</a></li>
                        </ul>
                    </nav>
                </section>
            </section>
            <section className="main__section--p1">
                <article className="text1">
                    {
                        slide === 1 ?
                        <>
                            <h1 id="title1">Discover innovative ways to decorate</h1>
                            <p id="p1">We provide
                                unmatched quality, comfort, and style for property owners across the
                                country. Our experts combine form andnfunction in bringing your vision to
                                life. Create a room in your own style with our collection and make your
                                property a reflection of you and what you love.</p>
                        </>:
                        slide === 2 ?
                        <>
                            <h1 id="title1">We are available all across the globe</h1>
                            <p id="p1">With stores all over the world, it's easy for you to
                            find furniture for your home or place of business. Locally, we’re in most
                            major cities throughout the country. Find the branch nearest you using our
                            store locator. Any questions? Don't hesitate to contact us today.</p>
                        </>:
                        <>
                            <h1 id="title1">Manufactured with the best materials</h1>
                            <p id="p1">Our modern furniture store provide a
                            high level of quality. Our company has invested in advanced technology to
                            ensure that every product is made as perfect and as consistent as possible.
                            With three decades of experience in this industry, we understand what
                            customers want for their home and office.</p>
                        </>
                    }
                    <a href="/challenge-06">
                        <p>SHOP NOW</p>
                        <img src="https://raw.githubusercontent.com/degranda/Platzi-Room-homepage/75069686c5bbcfc198b107794150e9c0ac5cad70/images/icon-arrow.svg" alt="arrow" className="arrow" />
                    </a>
                </article>
                <section className="buttons">
                    <button className="back-button-slide" id="b-b" aria-label="back slide" onClick={less}></button>
                    <button className="next-button-slide" id="n-b" aria-label="next slide" onClick={more}></button>
                </section>
            </section>
            <div className="shadow" id="shadow" style={shadow}></div>
        </section>
    );
}

export default Hero1;