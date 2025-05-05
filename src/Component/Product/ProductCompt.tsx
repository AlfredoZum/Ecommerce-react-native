import {View, Image, Text} from 'react-native';
import {Product} from '../../Type/Producst';
import ProductStyle from './ProductStyles';
import useProductController from './ProductController';

interface CardComponentProps {
  product: Product;
}

const ProductCompont: React.FC<CardComponentProps> = ({product}) => {

    const { cutText } = useProductController();

  return (
    <View style={ProductStyle.item}>
      <Image style={ProductStyle.image} source={{uri: product.image}} />
      <Text>{cutText(product.title)}  {}</Text>
    </View>
  );
};

export default ProductCompont;
