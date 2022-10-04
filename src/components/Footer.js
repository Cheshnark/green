import React from "react";

const Footer = () => {
    const year = (new Date()).getFullYear();
    
    return(
        <div className="footer">
            <p> Sitio web desarrollado por Csnark ©{year}</p>
        </div>
    )
}

export default Footer;