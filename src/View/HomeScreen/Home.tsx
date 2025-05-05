import React from 'react';
import {Text, Image, View, FlatList} from 'react-native';
import useHomeController from './HomeController';
import HomeStyle from './styled';

//Component
import SearchCompt from '../../Component/Search/SearchCompt';
import ProductCompont from '../../Component/Product/ProductCompt';

const HomeScreen: React.FC = () => {
  const {products} = useHomeController();

  return (
    <View style={HomeStyle.container}>
      <SearchCompt />
      <FlatList
        data={products}
        renderItem={({item}) => <ProductCompont product={item} />}
        keyExtractor={item => String(item.id)}
        numColumns={2}
      />
    </View>
  );
};

export default HomeScreen;
