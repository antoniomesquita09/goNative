import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  searchBar: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.regular,
  },
  input: {
    borderWidth: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    borderColor: colors.light,
    height: 40,
    width: metrics.screenWidth - 70,
    paddingHorizontal: metrics.basePadding,
  },
  icon: {
    paddingRight: metrics.basePadding / 2,
    color: colors.dark,
  },
  error: {
    width: metrics.screenWidth - 20,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textError: {
    color: colors.danger,
    fontSize: 14,
  },
});

export default styles;
