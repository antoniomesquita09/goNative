import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../Styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  header: {
    width: metrics.screenWidth - 150,
    margin: metrics.baseMargin,
    padding: metrics.basePadding / 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: metrics.baseRadius,
  },
  icon: {
    color: colors.dark,
  },
});

export default styles;
