import { StyleSheet } from 'react-native';
import theme from './theme';

export default StyleSheet.create({
  text: {
    fontSize: 16,
    color: theme.colors.text,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  errorText: {
    fontSize: 12,
    color: theme.colors.danger,
    textAlign: 'center',
  },
  title: {
    fontSize: 36,
    color: theme.colors.text,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  subtitle: {
    fontSize: 22,
    color: theme.colors.text,
    textAlign: 'center',
    flexWrap: 'wrap',
    fontStyle: 'italic',
  },
});
