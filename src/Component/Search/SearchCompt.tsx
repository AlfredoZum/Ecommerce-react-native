import {
  Text,
  Image,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SearchStyles from './SearchStyle';
import {faSearch} from '@fortawesome/free-solid-svg-icons/faSearch';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const SearchCompt = () => {
  //   return <TextInput style={SearchStyles.input} placeholder='Search' />;
  return (
    <View style={SearchStyles.container}>
      <TouchableOpacity
        style={SearchStyles.iconContainer}
        onPress={() => console.log('Icono presionado')}>
        <FontAwesomeIcon icon={faSearch} size={20} color="gray" />
      </TouchableOpacity>
      <TextInput
        style={SearchStyles.input}
        // onChangeText={setSearchText}
        // value={searchText}
        placeholder="Buscar..."
      />
    </View>
  );
};

export default SearchCompt;
