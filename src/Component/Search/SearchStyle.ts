import {StyleSheet} from 'react-native';

const SearchStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 30,
  },
  iconContainer: {
    position: 'absolute',
    left: 10,
  },
});

export default SearchStyles;
