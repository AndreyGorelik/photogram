import { ActivityIndicator, View } from 'react-native';

import { useAppSelector } from '../../../../hooks/redux.hook';

import styles from './footer.styles';

const Footer = () => {
  const { isLoading } = useAppSelector((state) => state.gallerySlice);
  if (isLoading) {
    return (
      <View style={styles.wrapper}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return;
};

export default Footer;
