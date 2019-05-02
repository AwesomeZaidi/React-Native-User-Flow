import React from 'react';
import { Button } from 'react-native';

export class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      const n = Math.random()
      return (
        <Button
          title="Go back"
          onPress={() => navigate('Home', {n} )}
        />
      );
    };
};