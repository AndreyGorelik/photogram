import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    width: '100%',
  },
  userPhoto: { width: 100, height: 100, borderRadius: 100 },
  userActivities: { flex: 1, flexDirection: 'row', gap: 10 },
  userActivitiesItem: { alignItems: 'center', flex: 1 },
  userActivitiesItemHeader: { fontWeight: '800' },
  userActivitiesItemTitle: { textTransform: 'lowercase' },
});

export default styles;
