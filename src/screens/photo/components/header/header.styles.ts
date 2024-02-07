import { StyleSheet } from 'react-native';

export const AVATAR_SIZE = 32;

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '800',
  },
  date: {
    color: 'gray',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  userPhoto: { width: AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE },
});
