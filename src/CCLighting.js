import React from "react";
import { AdvancedNavbar } from "./AdvancedNavbar";

export const CCLighting = () => {

    const cclogo = require("./cclightinglogo.webp");

    return (
        <>
            <AdvancedNavbar />
            <div style={{backgroundColor:'#005C7A', minHeight:'90vh', height:'100%', display:'flex',flexwrap:'wrap', flexDirection:'column', alignItems:'center'}}>
                <img src={cclogo} style={{borderRadius:'50%', width:'200px', height:'200px', margin:"2% auto"}} alt="logo for Clif's Catalog"/>
                <p style={{lineHeight:'2rem', color:'#CCDBDC', textAlign:"left",height:'100%',resize:'none', margin:'2% 10%'}}>
                My older brother (Tyler) and good friend (Noah) run an exterior lighting business located in south-eastern Virginia. As business has started picking up for them,
                 I thought that I would make them a landing page to showcase some of their work in a professional light.
                <br /> <br />  This page includes a navbar with links to a gallery of their showcased work, product page to be transparent with customers about products and warranties that they utilize, about page, customer testimonials page, and of course a hero section.
                <br /> <br />
                Finally, you can even send their business email a personalized message to get in contact with the company.
                <br /> <br />
                This project proved to be a bit easier than the previous projects, due to the fact that I am becoming more familiar with React. Something that was new to me with this project
                was the use of emailJS for the contact page. It is very interesting to see how there is a tool for almost everything out there, you just have to do some digging and you can find
                some cool things.
                <br /> <br />
                <a href="https://github.com/bealecs/cclighting" target='_blank' rel="noopener noreferrer" style={{textDecoration:'underline', cursor:'pointer'}}>Check out the repository</a>
                 <br /><br />
                 <a href="https://cclighting.netlify.app/" target='_blank' rel="noopener noreferrer" style={{textDecoration:'underline', cursor:'pointer'}}>Check out the site</a>
                </p>
            </div>
        </>
    )
}