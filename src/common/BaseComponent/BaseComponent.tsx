import { Component } from 'react';

export default class BaseComponent<Props, State = {}> extends Component<Props, State> {
  state: State;
  props: Props;
}
