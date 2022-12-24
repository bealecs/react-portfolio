import React from "react";


export function Welcome(props) {
    return (
        <div className={props.className}>
            <div className="container2">
            <section className="body">
                <h1 className="name">Clifton Beale</h1>
                <h3 className={props.className2}>Aspiring Front-End Web Developer</h3>
            </section>
            </div>
         </div>
    );
}