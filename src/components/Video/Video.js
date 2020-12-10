import React from 'react';
import './Video.css';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { Player } from 'video-react';
import video1 from '../../assets/video/1.mp4';
import video2 from '../../assets/video/2.mp4';
import video3 from '../../assets/video/3.mp4';

const Videos = () => {
  return (
    <div className='videos'>
      <h1>Video populer</h1>
      <hr className='hr' />
      <Container>
        <Row>
          <Col sm={12} xs={12} md={4} lg={4}>
            <CardVideo src={video1} />
          </Col>
          <Col sm={12} xs={12} md={4} lg={4}>
            <CardVideo src={video2} />
          </Col>
          <Col sm={12} xs={12} md={4} lg={4}>
            <CardVideo src={video3} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const CardVideo = (props) => {
  return (
    <CardDeck>
      <Card>
        <Player src={props.src} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className='text-muted'>Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
};

export default Videos;
