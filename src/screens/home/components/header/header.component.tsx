import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

import { RuLocale } from '../../../../constants/ruLocale';
import { useAppSelector } from '../../../../hooks/redux.hook';

import styles from './header.styles';
import { HeaderProps } from './header.types';

const TEXT_LINES = 1;
const MOCK_SUBSCRIBERS = 348;
const MOCK_PUBLICATIONS = 889;
const MOCK_SUBSCRIPTIONS = 143;

const Header: React.FC<HeaderProps> = ({ scrollToContent }) => {
  const { images } = useAppSelector((state) => state.gallerySlice);

  const source = images[0].user.profile_image.large
    ? { uri: images[0].user.profile_image.large }
    : require('../../../../assets/images/defaultAvatar.png');

  return (
    <View style={styles.wrapper}>
      <Image source={source} style={styles.userPhoto} />

      <View style={styles.userActivities}>
        <TouchableOpacity
          style={styles.userActivitiesItem}
          activeOpacity={0.7}
          onPress={scrollToContent}
        >
          <Text style={styles.userActivitiesItemHeader}>{MOCK_PUBLICATIONS}</Text>
          <Text
            numberOfLines={TEXT_LINES}
            ellipsizeMode="tail"
            style={styles.userActivitiesItemTitle}
          >
            {RuLocale.publications}
          </Text>
        </TouchableOpacity>

        <View style={styles.userActivitiesItem}>
          <Text style={styles.userActivitiesItemHeader}>{MOCK_SUBSCRIBERS}</Text>
          <Text
            numberOfLines={TEXT_LINES}
            ellipsizeMode="tail"
            style={styles.userActivitiesItemTitle}
          >
            {RuLocale.subscribers}
          </Text>
        </View>

        <View style={styles.userActivitiesItem}>
          <Text style={styles.userActivitiesItemHeader}>{MOCK_SUBSCRIPTIONS}</Text>
          <Text
            numberOfLines={TEXT_LINES}
            ellipsizeMode="tail"
            style={styles.userActivitiesItemTitle}
          >
            {RuLocale.subscriptions}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
