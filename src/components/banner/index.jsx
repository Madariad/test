

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {bg} from './banner.module.css'

import img from '@/assets/img/Mathematics-cuate.svg'

window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });


export default function banner() {
  return (
<div className={bg}>
  <Container>
    <div style={{paddingTop: '10%'}}>
    <Row>
  <Col xs={12} md={6}>
    {/* Текст будет занимать всю ширину на маленьких экранах и половину на средних и больших */}
    <div style={{ fontSize: '5vw', paddingTop: '50px' }}>
      <span style={{ color: 'yellow' }}>Высшая</span> математика
    </div>
  </Col>

  <Col xs={12} md={{ span: 4, offset: 2 }}>
    {/* Изображение будет занимать всю ширину на маленьких экранах и четверть на средних и больших */}
    <img style={{ width: '100%', maxWidth: '500px' }} src={img} alt="" />
  </Col>
</Row>

    </div>
  </Container>
</div>

  )
}
