import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Product} from '../../Type/Producst';

interface UseProductControllerProps {
  cutText: (text: string) => string;
  goToProductDetail: (product: Product) => void;
}

const useProductController = (): UseProductControllerProps => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const cutText = (text: string) => {
    return text.length > 40 ? text.substring(0, 40) + '...' : text;
  };

  const goToProductDetail = (product: Product) => navigation.navigate('ProductDetail', { product });

  return {
    cutText,
    goToProductDetail,
  };
};

export default useProductController;
