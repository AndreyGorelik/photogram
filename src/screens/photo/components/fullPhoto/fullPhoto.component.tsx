import { ImageBackground } from 'expo-image';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useAppSelector } from '../../../../hooks/redux.hook';

import { styles } from './fullPhoto.styles';

const FullPhoto = () => {
  const { url, blurhash } = useAppSelector((state) => state.postSlice);

  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground
      source={{ uri: url }}
      style={styles.photo}
      contentFit="cover"
      placeholder={blurhash}
      onLoadStart={() => setLoading(true)}
      onLoadEnd={() => setLoading(false)}
    >
      {loading && <ActivityIndicator size="large" color="black" />}
    </ImageBackground>
  );
};

export default FullPhoto;
