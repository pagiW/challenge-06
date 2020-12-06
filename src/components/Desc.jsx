import React from 'react';

const Desc = () => {
    return (
        <section className="main__section--desc">
            <section className="main__section--image1">
                <figure className="img1">
                    <img src="https://github.com/degranda/Platzi-Room-homepage/blob/master/images/image-about-dark.jpg?raw=true" alt="dark room" />
                </figure>
            </section>
            <section className="main__section--p2">
                <article className="text2">
                    <h1>ABOUT OUR FURNITURE</h1>
                    <p>
                        Our multifunctional collection blends design and function to suit your
                        individual taste. Make each room unique, or pick a cohesive theme that best
                        express your interests and what inspires you. Find the furniture pieces you
                        need, from traditional to contemporary styles or anything in between.
                        Product specialists are available to help you create your dream space.
                    </p>
                </article>
            </section>
            <section className="main__section--image2">
                <figure className="img1">
                    <img src="https://github.com/degranda/Platzi-Room-homepage/blob/master/images/image-about-light.jpg?raw=true" alt="light room" />
                </figure>
            </section>
        </section>
    );
}

export default Desc;