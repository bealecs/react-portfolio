import React from "react";
import { AdvancedNavbar } from "./AdvancedNavbar";

export const PipsWithPaul = () => {

    const pwpLogo = require("./pwpLogo.webp");

    return (
        <>
            <AdvancedNavbar />
            <div style={{backgroundColor:'#005C7A'}}>
                <img src={pwpLogo} style={{borderRadius:'50%', width:'20%', margin:'1%'}} />
            </div>
        </>
    )
}