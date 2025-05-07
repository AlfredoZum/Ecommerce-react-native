import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {Product} from '../../Type/Producst';
import style from './ProductDetailStyles';
import StarRating from '../../Component/StarRating/StarRatingCompt';

interface ProductDetailScreenProps {
  product: Product;
  navigation: NativeStackNavigationProp<any, 'ProductDetailScreen'>;
  route: RouteProp<any, 'ProductDetailScreen'>;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({
  navigation,
  route,
}) => {
  const product: Product = route?.params?.product;

  if (!product) {
    return <></>;
  }

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>{product.title}</Text>
      <View style={style.separate} />
      <Text style={style.description}>{product.description}</Text>
      <View style={style.separate} />
      <Text style={style.description}>
        <Text style={style.bold}>{product.rating.count}+</Text>
        &nbsp;bought last month
      </Text>
      <View style={style.separate} />
      <View style={style.imageContainer}>
        <Image style={style.image} source={{uri: product.image}} />
      </View>
      <View style={style.separate} />
      <View style={style.separate} />
      <Text style={style.price}>$ {product.price} USD</Text>
      <View style={style.separate} />
      <StarRating ratingValue={4.5} starSize={20} fullColor="gold" emptyColor="gray" />
      <View style={style.separate} />
      <TouchableOpacity
        onPress={() => console.log('Botón presionado')}
        style={style.button}>
        <Text style={{color: 'white', fontSize: 18}}>Add to cart</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  return <Text>Hola</Text>;
};

export default ProductDetailScreen;
