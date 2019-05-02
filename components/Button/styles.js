// components/Button/styles.js

import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY, BORDER_RADIUS } from '../../styles/common';

export default StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
  },
  button: {
    backgroundColor: COLOR_PRIMARY,
    // color: '#fff',
    borderRadius: BORDER_RADIUS,
    padding: 15,
  },
});