import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  grid: {
    gap: 5,
  },
  userPhoto: { width: 100, height: 100, borderRadius: 100 },
  userActivities: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  userActivitiesItem: { alignItems: 'center', flex: 1 },
  userActivitiesItemHeader: { fontWeight: '800' },
  imageThumbnail: {
    width: Dimensions.get('screen').width / 3 - 10,
    height: Dimensions.get('screen').width / 3 - 10,
  },
  image: {
    flex: 1,
  },
});

export default styles;
