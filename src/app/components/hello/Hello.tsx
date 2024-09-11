import { Button, Stack, Typography } from '@mui/material';
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
      <Stack className={styles['container']} direction="row" alignItems="center">
        <Button onClick={() => this.setState({visible: !this.state.visible})}>Toggle</Button>
        <Typography>Hello {this.state.visible && this.props.name}!</Typography>
      </Stack>
    );
  }
}

export default Hello;
