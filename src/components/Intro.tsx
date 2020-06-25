/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

interface IntroProps {
  text?: string;
}

interface IntroState {
  data: number;
  textState: string;
}

class Intro extends React.Component<IntroProps, IntroState> {
  constructor(props: IntroProps) {
    super(props);
    this.state = {
      data: 1,
      textState: 'Soy un text del estado',
    };
  }

  private handleClick = (): void => {
    this.setState({ textState: 'Me actualice' });
  };

  public render(): JSX.Element {
    const { text } = this.props;
    const { textState } = this.state;
    const t = text || textState;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <p className="App-Intro" onClick={this.handleClick}>
        <span>{t}</span>
      </p>
    );
  }
}

export default Intro;
