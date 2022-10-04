import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField  from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
// import { useNavigate } from "react-router-dom";
import RedAlert from '../RedAlert';

function About() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submit, setSubmit] = useState(false)

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const subscribe = {name, email};
    setName('');
    setEmail('');

    console.log(subscribe);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const user = {name, email};

    fetch('http://localhost:8000/users/', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(user)
    }).then(() => {
      // navigate("/#about");
      setName('');
      setEmail('');
      setSubmit(true);
    })
  };

  return (
    <div id='about' className='about'>
      <div className="about-parallax-01">
        <h1>Bananas, Mike</h1>
      </div>  

      {matches? (
        <div className='about-content-text'>
          <h1>¿Qué es Natural Shop?</h1>
          <p>Natural shop es justo eso, una tienda natural, no escondemos nada. Vendemos 
          productos naturales y te los llevamos a tu casa. ¿Qué igual no es la manera más 
          ecológica de vender este tipo de productos? Es posible. ¿Pero realmente nos importa
          el medio ambiente? ¿O es que acaso tan solo queremos que pienses que nos importa?
          <br /><br />
          En cualquier caso, te vendemos lo que quieres y necesitas para demostrar a todo tu 
          entorno lo mucho que te importa el mundo, el medio ambiente, las focas del ártico y 
          los niños bengalíes que no tejen nuestras prendas. Tampoco tenemos muy clara la 
          procedencia de nuestras materias primas, pero hemos hecho un logo "sostenible" para 
          que se vea bien en todos nuestros productos y para que el resto de gente sepa de tu 
          superioridad moral.
          <br /><br />
          ¿A qué esperas para parecer parte del cambio?</p>
        </div>
      ):(
        <Container className='about-content'>
        <Row>
          <Col className='about-content-text'>
            <h1>¿Qué es Natural Shop?</h1>
            <p>Natural shop es justo eso, una tienda natural, no escondemos nada. Vendemos 
            productos naturales y te los llevamos a tu casa. ¿Qué igual no es la manera más 
            ecológica de vender este tipo de productos? Es posible. ¿Pero realmente nos importa
            el medio ambiente? ¿O es que acaso tan solo queremos que pienses que nos importa?
            <br /><br />
            En cualquier caso, te vendemos lo que quieres y necesitas para demostrar a todo tu 
            entorno lo mucho que te importa el mundo, el medio ambiente, las focas del ártico y 
            los niños bengalíes que no tejen nuestras prendas. Tampoco tenemos muy clara la 
            procedencia de nuestras materias primas, pero hemos hecho un logo "sostenible" para 
            que se vea bien en todos nuestros productos y para que el resto de gente sepa de tu 
            superioridad moral.
            <br /><br />
            ¿A qué esperas para parecer parte del cambio?</p>
          </Col>
          <Col>
            <img src="images/girl01.jpg" alt="girl-img-by-gustavo-fring" />
          </Col>
        </Row>
      </Container>)}
      

      <div className="about-parallax-02"></div>

      {matches ? (
        <div className='about-content-text'>
          <h1>¿Qué es Natural Shop?</h1>
          <p>Natural shop es justo eso, una tienda natural, no escondemos nada. Vendemos 
          productos naturales y te los llevamos a tu casa. ¿Qué igual no es la manera más 
          ecológica de vender este tipo de productos? Es posible. ¿Pero realmente nos importa
          el medio ambiente? ¿O es que acaso tan solo queremos que pienses que nos importa?
          <br /><br />
          En cualquier caso, te vendemos lo que quieres y necesitas para demostrar a todo tu 
          entorno lo mucho que te importa el mundo, el medio ambiente, las focas del ártico y 
          los niños bengalíes que no tejen nuestras prendas. Tampoco tenemos muy clara la 
          procedencia de nuestras materias primas, pero hemos hecho un logo "sostenible" para 
          que se vea bien en todos nuestros productos y para que el resto de gente sepa de tu 
          superioridad moral.
          <br /><br />
          ¿A qué esperas para parecer parte del cambio?</p>
        </div>
      ):(
        <Container className='about-content'>
        <Row>
          <Col>
            <img src="images/dinosaur01.jpg" alt="dinosaur-img-by-nick-wehrli" />
          </Col>
          <Col className='about-content-text'>
            <h1 className='about-content-text02-h1'>¿Qué es Natural Shop?</h1>
            <p>Natural shop es justo eso, una tienda natural, no escondemos nada. Vendemos 
            productos naturales y te los llevamos a tu casa. ¿Qué igual no es la manera más 
            ecológica de vender este tipo de productos? Es posible. ¿Pero realmente nos importa
            el medio ambiente? ¿O es que acaso tan solo queremos que pienses que nos importa?
            <br /><br />
            En cualquier caso, te vendemos lo que quieres y necesitas para demostrar a todo tu 
            entorno lo mucho que te importa el mundo, el medio ambiente, las focas del ártico y 
            los niños bengalíes que no tejen nuestras prendas. Tampoco tenemos muy clara la 
            procedencia de nuestras materias primas, pero hemos hecho un logo "sostenible" para 
            que se vea bien en todos nuestros productos y para que el resto de gente sepa de tu 
            superioridad moral.
            <br /><br />
            ¿A qué esperas para parecer parte del cambio?</p>
          </Col>
        </Row>
      </Container>
      )}

      
      
      <div className="about-parallax-02"></div>  

      <div id='contacto' className="about-contacto">
      <Container className='about-contacto-box'>
        <Row>
          <Col md= {4} s={12}>
            <img src="images/logo-01-350.png" alt="logo" />
          </Col>
          <Col>
            <form className='about-contacto-box__form' noValidate onSubmit={handleSubmit}>
              <h2>Escríbenos</h2><br />
              {submit ? <RedAlert /> : (
                <div>
                  <TextField 
                  id="outlined-basic" 
                  label="Nombre" 
                  variant="outlined" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                  /><br />
                <TextField 
                  id="outlined-basic" 
                  label="Email" 
                  type="email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                  /><br />
                  <Button sx={{marginTop:"1rem"}} type='submit' onClick={handleClick}>Subscríbete</Button>
                </div>
              )}
            </form>
          </Col>
          <Col>
            <div className="icon-div">
              <a href="https://www.instagram.com/fanidfanidad/"><InstagramIcon className="icon-div__icon"/></a>
              <a href="https://www.facebook.com/" className="icon-div__icon" ><FacebookIcon /></a>
              <a href="https://twitter.com/malazan_sapper" className="icon-div__icon" ><TwitterIcon /></a>
            </div>
          </Col>
        </Row>
      </Container>
      </div>


    </div>
  )
}

export default About