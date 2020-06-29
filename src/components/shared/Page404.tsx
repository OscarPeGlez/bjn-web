import React from 'react';
import { Image, Row } from 'react-bootstrap';
import imageUrl from '../../assets/404.png';

const Page404 = () => (
  <Row className="justify-content-md-center">
    <Image
      src={imageUrl}
      style={{ height: 400, width: 'auto' }}
      className="img-responsive center-block"
    />
  </Row>
);

export default Page404;
