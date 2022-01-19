import { Platform } from 'react-native';
import { moderateScale } from './scaling';
import theme from './theme';
import formStyles from './form-styles';

const IOS_OR_MD = Platform.OS === 'ios' ? 'ios' : 'md';

export { theme, formStyles, moderateScale, IOS_OR_MD };
