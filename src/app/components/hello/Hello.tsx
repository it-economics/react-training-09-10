import { Component } from 'react';

import styles from './Hello.module.css';

type Props = { name?: string };

type State = { visible: boolean };

export class Hello extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { visible: false };
  }

  static defaultProps = {
    name: 'World',
  };

  override render() {
    return (
      <div className={styles['container']}>
        <button onClick={() => this.setState({visible: !this.state.visible})}>Toggle</button>
        <p>Hello {this.state.visible && this.props.name}!</p>
      </div>
    );
  }
}

export default Hello;
