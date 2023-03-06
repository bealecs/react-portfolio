import React from "react";
import { AdvancedNavbar } from "./AdvancedNavbar";

export const ClifsCatalog = () => {

    const cclogo = require("./banner.webp");

    return (
        <>
            <AdvancedNavbar />
            <div style={{backgroundColor:'#005C7A', height:'93vh', display:'flex',flexwrap:'wrap', flexDirection:'column', alignItems:'center'}}>
                <img src={cclogo} style={{borderRadius:'50%', width:'300px', height:'300px', margin:"2% auto"}} alt="logo for Clif's Catalog"/>
                <p style={{lineHeight:'2rem', color:'#CCDBDC', textAlign:"left",height:'100%',resize:'none'}}>I started Clif's Catalog while I was completing a course offered through Codecademy for front-end web development.
                <br /><br />
                This course was an introduction to utilizing API's, and I came across 'TheMealDB' API. This site offered a database of around 1,000 different meals from all over the world for their free use of the API.
                I utilized their API to create a random meal generator for my wife and I. This project was completed using React JS, and was seemingly boring as it was just a generator. Click a button, get a result...
                <br /> <br /> Naturally, I wanted to dig a little bit deeper. I found other ways to utilize their database, and changed the site from a generator to a full blown cookbook. 
                <br /> <br />
                Now, you can create an account, search for individual meals by category, and still generate random meals if you are feeling indecisive. While this site is still undergoing maintenance,
                eventually you will be able to save different meals to your favorites section for quick access. 
                <br /> <br />
                In the future, I plan to incorporate a larger spectrum of meals & meal categories, and maybe even go as far as to filter meals by allergens and more.
                <br /> <br />
                <a href="https://github.com/bealecs/pipswithpaul" target='_blank' rel="noopener noreferrer" style={{textDecoration:'underline', cursor:'pointer'}}>Check out the repository</a>
                 <br /><br />
                 <a href="https://pipswithpaul.vercel.app/" target='_blank' rel="noopener noreferrer" style={{textDecoration:'underline', cursor:'pointer'}}>Check out the site</a>
                </p>
            </div>
        </>
    )
}