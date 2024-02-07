import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useCallback, useRef, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { Photo } from '../../../../api/types';
import { navigationRoutes } from '../../../../constants/navigationRoutes';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux.hook';
import { NavigationProps } from '../../../../navigation/AppWrapper';
import { fetchGalleryImages } from '../../../../store/slices/gallerySlice/gallerySlice';
import Footer from '../footer/footer.component';
import Header from '../header/header.component';

import styles from './gallery.styles';

const NUM_COLUMNS = 3;

const Gallery = () => {
  const { images } = useAppSelector((state) => state.gallerySlice);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProps>();
  const flatListRef = useRef<FlatList>(null);
  const [isRefreshLoading, setIsRefreshLoading] = useState(false);

  const scrollToContent = () => {
    if (flatListRef?.current) {
      flatListRef.current.scrollToIndex({ animated: true, index: 0 });
    }
  };

  const openFullPhoto = useCallback(
    (id: string, userName: string) => {
      navigation.navigate(navigationRoutes.PhotoScreen, {
        id,
        userName,
      });
    },
    [navigation]
  );

  const renderImageThumbnail = useCallback(
    ({ item }: { item: Photo }) => {
      return (
        <TouchableOpacity
          style={styles.imageThumbnail}
          activeOpacity={0.7}
          onPress={() => openFullPhoto(item.id, item.user.username)}
        >
          <Image
            style={styles.image}
            contentFit="cover"
            source={item.urls.small}
            placeholder={item.blur_hash}
            cachePolicy={'memory-disk'}
          />
        </TouchableOpacity>
      );
    },
    [openFullPhoto]
  );

  const onRefresh = () => {
    setIsRefreshLoading(true);
    dispatch(fetchGalleryImages(false)).finally(() => setIsRefreshLoading(false));
  };

  const onEndReached = () => {
    dispatch(fetchGalleryImages(true));
  };

  return (
    <>
      {images.length === 0 ? null : (
        <FlatList
          ref={flatListRef}
          data={images}
          renderItem={renderImageThumbnail}
          numColumns={NUM_COLUMNS}
          columnWrapperStyle={styles.grid}
          contentContainerStyle={styles.grid}
          keyExtractor={(item) => item.id}
          onRefresh={onRefresh}
          refreshing={isRefreshLoading}
          onEndReached={onEndReached}
          ListHeaderComponent={() => <Header scrollToContent={scrollToContent} />}
          ListFooterComponent={() => <Footer />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </>
  );
};

export default Gallery;
