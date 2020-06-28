import React from 'react';
import { Spinner } from 'react-bootstrap';

type Props = {
  cargando: boolean;
};

const Loader: React.FC<Props> = props => {
  const { cargando } = props;

  if (!cargando) return null;

  return (
    <div className="overlay-cargando icon-xl" style={{ position: 'fixed' }}>
      <Spinner
        animation="border"
        variant="warning"
        style={{ alignItems: 'center' }}
        className="text-status"
      />
    </div>
  );
};

export default Loader;
