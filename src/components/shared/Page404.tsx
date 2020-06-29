import React, { FC } from 'react';
import { Image, Row } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import imageUrl from '../../assets/404.png';
import { incremenet } from '../../store/actions';
import { RootState } from '../../store/reducers';

const connector = connect(
  (state: RootState) => ({
    counter: state.countReducer.count,
  }),
  {
    increment: () => incremenet(),
  },
);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & ReduxProps;

const Page404: FC<Props> = props => {
  const { increment, counter } = props;
  if (counter === 1) increment();
  return (
    <Row className="justify-content-md-center">
      <Image
        src={imageUrl}
        style={{ height: 400, width: 'auto' }}
        className="img-responsive center-block"
      />
    </Row>
  );
};

export default withRouter(connector(Page404));
