import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import {TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons/faBars';
import {useNavigation} from '@react-navigation/native';
import { currentTheme } from '../theme';

type HeaderRightProps = {
  tintColor?: string;
  canGoBack?: boolean;
};

const GlobalHeaderRight: React.FC<HeaderRightProps> = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableOpacity
      style={{marginRight: 15}}
      onPress={() => navigation.navigate('Home')}>
      <FontAwesomeIcon icon={faBars} color={currentTheme.textPrimaryInverse} />
    </TouchableOpacity>
  );
};

export const defaultStackNavigationOptions: NativeStackNavigationOptions = {
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: currentTheme.primary,
  },
  headerTintColor: currentTheme.textPrimaryInverse,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: props => <GlobalHeaderRight {...props} />,
};
