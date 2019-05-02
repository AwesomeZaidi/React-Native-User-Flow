import React from 'react';
import { Button } from 'react-native';

export class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      const n = this.props.navigation.getParam('n', 0)
      console.log(this.props.navigation.state.params) // {n:0.84676}
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    };
};