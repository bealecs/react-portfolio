import React from "react";
import { AdvancedNavbar } from "./AdvancedNavbar";

export const PipsWithPaul = () => {

    const pwpLogo = require("./pwpLogo.webp");

    return (
        <>
            <AdvancedNavbar />
            <div style={{backgroundColor:'#005C7A', height:'100%',minHeight:'90vh', display:'inline-flex', alignItems:'center', flexWrap:"wrap"}}>
                <img src={pwpLogo} style={{borderRadius:'50%', width:'300px', height:'300px', margin:"1% auto"}} alt="Pips With Paul Logo"/>
                <p style={{lineHeight:'2rem', color:'#CCDBDC', textAlign:"left",height:'100%',resize:'none'}}>I started Pips With Paul to really test my skillset at that time.
                I was starting to become familiar with React, but I had recently come across NextJS documentation and started reading. All it took was learning how NextJS handled routing, and I was hooked.
                I read through a lot of the documentation to get started, and began Pips With Paul using typescript and NextJS. <br /> <br /> Since starting this project, I have hit a couple of road blocks & learning curves; luckily, there is a lot of good documentation for NextJS, and finally, the site is starting to come together - <br>
                </br><br></br>You can now log in or create an account, which was handled through utilizing firebase authentication. Firebase's documentation also made it easy
                to set up and configure Google's sign in SDK. Because I like reading so much, I headed over to Stripe's documentation to add their services as well, seeing as this is a 
                subscription based service. Now, you can click on the courses and find a plan that is right for you. Once you have the plan that is right for you, your video courses that are pre-built by Paul and his team will appear
                on your account's dashboard!<br /><br /> Happy learning, go make that money <br /> <br />
                 <a href="https://vetswhocode.io/" target='_blank' rel="noopener noreferrer" style={{textDecoration:'underline', cursor:'pointer'}}>Check out the repository</a>
                 <br /><br />
                 <a href="https://vetswhocode.io/" target='_blank' rel="noopener noreferrer" style={{textDecoration:'underline', cursor:'pointer'}}>Check out the site</a>
                 </p>

            </div>
        </>
    )
}