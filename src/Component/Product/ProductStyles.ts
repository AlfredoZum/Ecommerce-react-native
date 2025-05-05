import {StyleSheet, Dimensions} from 'react-native';
import { currentTheme } from '../../theme';

const {width} = Dimensions.get('window');

const ProductStyle = StyleSheet.create({
  item: {
    backgroundColor: currentTheme.background,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2 - 20,
    margin: 5,
    minHeight: 100,
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 16,
  },
  image: {
    marginTop: 10,
    width: '90%',
    height: 200,
    marginBottom: 6,
  },
});

export default ProductStyle;
