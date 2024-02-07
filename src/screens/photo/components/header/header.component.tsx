import { FontAwesome } from '@expo/vector-icons';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Image } from 'expo-image';
import { Text, View } from 'react-native';

import { useAppSelector } from '../../../../hooks/redux.hook';

import { AVATAR_SIZE, styles } from './header.styles';

const Header = () => {
  const { username, userphoto, createdAt } = useAppSelector((state) => state.postSlice);

  const formatDate = (date: string) => {
    return format(new Date(date), 'dd MMM yyyy', { locale: ru });
  };

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {userphoto ? (
          <Image source={{ uri: userphoto }} style={styles.userPhoto} />
        ) : (
          <FontAwesome name="user" size={AVATAR_SIZE} color="black" />
        )}
        {username && <Text style={styles.name}>{username}</Text>}
      </View>
      {createdAt && <Text style={styles.date}>{formatDate(createdAt)}</Text>}
    </View>
  );
};
export default Header;
