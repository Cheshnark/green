import React from "react";

const NotFound = () => {
    return (
        <div className="not-found">
            <div className="not-found__container">
                <div className="not-found__text">
                    <h1> Error 404 </h1>
                    <p> Lo sentimos, la página que buscas no existe. Prueba a navegar usando la barra de navegación.
                    Tienes un ratón o un dedo, ya sabes.</p>
                </div>
            </div>
            <div className="not-found__bottom"></div>
           
        </div>
    )
};

export default NotFound;