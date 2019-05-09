import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 54 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darker,
  },
});

export default styles;
