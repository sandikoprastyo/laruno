/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';
import img from '../../assets/img/undraw_teaching_f1cm.svg';
//import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Container className='Header'>
        <Row>
          <Col className='left'>
            <h1 className='title'>Online Training</h1>
            <p className='desc'>
              Laruno portal tips training seminar untuk bisnis, marketing,
              sales, investasi, properti dan keuangan indonesia.
            </p>
            <span className='button-learn-more'>Learn more</span>
          </Col>
          <Col className='right'>
            <img src={img} alt='img' width='500' height='auto' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
