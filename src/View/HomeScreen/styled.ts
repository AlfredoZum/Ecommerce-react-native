import {StyleSheet, Dimensions} from 'react-native';
import { currentTheme } from '../../theme';

const {width} = Dimensions.get('window');

const HomeStyle = StyleSheet.create({
  container: {
    backgroundColor: currentTheme.background,
    flex: 1,
    padding: 10
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 2 - 20,
    margin: 5,
    minHeight: 100,
    padding: 10,
    borderRadius: 12,
    elevation: 1,
  },
  title: {
    fontSize: 16,
  },
  image: {
    marginTop: 10,
    width: '90%',
    height: 200,
  },
});

export default HomeStyle;
