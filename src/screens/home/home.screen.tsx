import { useEffect } from 'react';
import { View } from 'react-native';

import { useAppDispatch } from '../../hooks/redux.hook';
import { fetchGalleryImages } from '../../store/slices/gallerySlice/gallerySlice';

import Gallery from './components/gallery/gallery.component';
import { styles } from './home.styles';
import { HomeScreenProps } from './home.types';

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchGalleryImages(false));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Gallery />
    </View>
  );
};

export default HomeScreen;
