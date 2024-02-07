import { useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';

import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook';
import { fetchPost } from '../../store/slices/postSlice/postSlice';

import ActionsPanel from './components/actionsPanel/actionsPanel.component';
import Description from './components/description/description.component';
import FullPhoto from './components/fullPhoto/fullPhoto.component';
import Header from './components/header/header.component';
import { styles } from './photo.styles';
import { PhotoScreenProps } from './photo.types';

const PhotoScreen: React.FC<PhotoScreenProps> = ({ route }) => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.postSlice);
  const { id, userName } = route.params;

  useEffect(() => {
    dispatch(fetchPost({ photoId: id, userName }));
  }, [dispatch, id, userName]);

  if (isLoading) {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <ActivityIndicator />
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Header />
      <FullPhoto />
      <ActionsPanel />
      <Description />
    </ScrollView>
  );
};

export default PhotoScreen;
