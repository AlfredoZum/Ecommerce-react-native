import {StyleSheet, Dimensions} from 'react-native';
import { currentTheme } from '../../theme';

const {width} = Dimensions.get('window');

const ProductDetailStyle = StyleSheet.create({
  container: {
    backgroundColor: currentTheme.background,
    margin: 10,
    // alignItems: 'center',
    // justifyContent: 'center',
    // margin: 5,
    // padding: 10,
    // borderRadius: 12,
    // elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
  },
  imageContainer: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  separate: {
    width: '100%',
    margin: 5,
  },
  bold: {
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: currentTheme.primary,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    padding: 10,
    elevation: 1,
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    color: currentTheme.accent
  }
});

export default ProductDetailStyle;
