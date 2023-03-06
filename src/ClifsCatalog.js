import React from "react";
import { AdvancedNavbar } from "./AdvancedNavbar";

export const ClifsCatalog = () => {

    const pwpLogo = require("./banner.webp");

    return (
        <>
            <AdvancedNavbar />
            <div style={{backgroundColor:'#005C7A', height:'93vh'}}>
                <img src={pwpLogo} style={{borderRadius:'100%', width:'20%', margin:'1%'}} />
            </div>
        </>
    )
}