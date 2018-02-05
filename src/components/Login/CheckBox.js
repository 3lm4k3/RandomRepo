import React from 'react';
import { Animated } from 'react-native';
import LottieView from 'lottie-react-native';

export default class CheckBox extends React.Component {
  state = {
      progress: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    return (
      <LottieView source={require('../../assets/animations/animation-w150-h150')} progress={this.state.progress} />
    );
  }
}