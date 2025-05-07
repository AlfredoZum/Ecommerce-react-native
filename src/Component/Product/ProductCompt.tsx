import {View, Image, Text, TouchableOpacity} from 'react-native';
import {Product} from '../../Type/Producst';
import ProductStyle from './ProductStyles';
import useProductController from './ProductController';

interface CardComponentProps {
  product: Product;
}

const ProductCompont: React.FC<CardComponentProps> = ({product}) => {

    const { cutText, goToProductDetail } = useProductController();

  return (
    <TouchableOpacity style={ProductStyle.item} onPress={() => goToProductDetail(product)}>
      <Image style={ProductStyle.image} source={{uri: product.image}} />
      <Text style={ProductStyle.title}>{cutText(product.title)}  {}</Text>
      <Text style={ProductStyle.price}>$ {product.price}  {}</Text>
    </TouchableOpacity>
  );
};

export default ProductCompont;
