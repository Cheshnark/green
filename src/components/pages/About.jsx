import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField  from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
import RedAlert from '../RedAlert';

import girl from '../../images/girl01.jpg';
import dinosaur from '../../images/dinosaur01.jpg';
import logo from '../../images/logo-01-350.png';

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
        <h1>Natural Shop</h1>
      </div>  

      {matches? (
        <div className='about-content-text'>
          <h2>¿Qué es Natural Shop?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at mollis eros.
          Curabitur pulvinar turpis eget congue sagittis. Ut eu mauris nunc. Aenean a ornare est.
          Sed et pellentesque ante. Proin feugiat ante et ullamcorper porta. Duis quis malesuada
          tellus, in ultricies metus.
          <br /><br />
          Curabitur iaculis purus enim, in tempus velit faucibus non. Morbi mattis erat in 
          sollicitudin iaculis. Etiam faucibus, lectus sit amet efficitur finibus, massa enim ornare 
          neque, eget placerat neque ante vel ipsum. Interdum et malesuada fames ac ante ipsum primis 
          in faucibus. Vestibulum aliquet, ante ac aliquam pharetra, ex enim ornare nunc, sed varius 
          metus nibh in est. Mauris luctus aliquam neque, vel fringilla urna dictum in. Curabitur 
          risus mauris, commodo at laoreet quis, mollis at felis. Vestibulum in elementum metus, 
          laoreet bibendum arcu. Pellentesque iaculis mauris id semper cursus. Proin dignissim gravida 
          ipsum, sit amet convallis sapien luctus in.
          <br /><br />
          ¿A qué esperas para parecer parte del cambio?</p>
        </div>
      ):(
        <Container className='about-content'>
        <Row>
          <Col className='about-content-text'>
            <h2>¿Qué es Natural Shop?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at mollis eros.
            Curabitur pulvinar turpis eget congue sagittis. Ut eu mauris nunc. Aenean a ornare est.
            Sed et pellentesque ante. Proin feugiat ante et ullamcorper porta. Duis quis malesuada
            tellus, in ultricies metus.
            <br /><br />
            Curabitur iaculis purus enim, in tempus velit faucibus non. Morbi mattis erat in 
            sollicitudin iaculis. Etiam faucibus, lectus sit amet efficitur finibus, massa enim ornare 
            neque, eget placerat neque ante vel ipsum. Interdum et malesuada fames ac ante ipsum primis 
            in faucibus. Vestibulum aliquet, ante ac aliquam pharetra, ex enim ornare nunc, sed varius 
            metus nibh in est. Mauris luctus aliquam neque, vel fringilla urna dictum in. Curabitur 
            risus mauris, commodo at laoreet quis, mollis at felis. Vestibulum in elementum metus, 
            laoreet bibendum arcu. Pellentesque iaculis mauris id semper cursus. Proin dignissim gravida 
            ipsum, sit amet convallis sapien luctus in.
            <br /><br />
            ¿A qué esperas para parecer parte del cambio?</p>
          </Col>
          <Col>
            <img src={girl} alt="girl-img-by-gustavo-fring" />
          </Col>
        </Row>
      </Container>)}
      

      <div className="about-parallax-02"></div>

      {matches ? (
        <div className='about-content-text'>
          <h2>Nuestros principios</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at mollis eros.
          Curabitur pulvinar turpis eget congue sagittis. Ut eu mauris nunc. Aenean a ornare est.
          Sed et pellentesque ante. Proin feugiat ante et ullamcorper porta. Duis quis malesuada
          tellus, in ultricies metus.
          <br /><br />
          Curabitur iaculis purus enim, in tempus velit faucibus non. Morbi mattis erat in 
          sollicitudin iaculis. Etiam faucibus, lectus sit amet efficitur finibus, massa enim ornare 
          neque, eget placerat neque ante vel ipsum. Interdum et malesuada fames ac ante ipsum primis 
          in faucibus. Vestibulum aliquet, ante ac aliquam pharetra, ex enim ornare nunc, sed varius 
          metus nibh in est. Mauris luctus aliquam neque, vel fringilla urna dictum in. Curabitur 
          risus mauris, commodo at laoreet quis, mollis at felis. Vestibulum in elementum metus, 
          laoreet bibendum arcu. Pellentesque iaculis mauris id semper cursus. Proin dignissim gravida 
          ipsum, sit amet convallis sapien luctus in.
          <br /><br />
          ¿A qué esperas para parecer parte del cambio?</p>
        </div>
      ):(
        <Container className='about-content'>
        <Row>
          <Col>
            <img src={dinosaur} alt="dinosaur-img-by-nick-wehrli" />
          </Col>
          <Col className='about-content-text'>
            <h2 className='about-content-text02-h1'>Nuestros principios</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at mollis eros.
            Curabitur pulvinar turpis eget congue sagittis. Ut eu mauris nunc. Aenean a ornare est.
            Sed et pellentesque ante. Proin feugiat ante et ullamcorper porta. Duis quis malesuada
            tellus, in ultricies metus.
            <br /><br />
            Curabitur iaculis purus enim, in tempus velit faucibus non. Morbi mattis erat in 
            sollicitudin iaculis. Etiam faucibus, lectus sit amet efficitur finibus, massa enim ornare 
            neque, eget placerat neque ante vel ipsum. Interdum et malesuada fames ac ante ipsum primis 
            in faucibus. Vestibulum aliquet, ante ac aliquam pharetra, ex enim ornare nunc, sed varius 
            metus nibh in est. Mauris luctus aliquam neque, vel fringilla urna dictum in. Curabitur 
            risus mauris, commodo at laoreet quis, mollis at felis. Vestibulum in elementum metus, 
            laoreet bibendum arcu. Pellentesque iaculis mauris id semper cursus. Proin dignissim gravida 
            ipsum, sit amet convallis sapien luctus in.
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
            <img src={logo} alt="logo" />
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