import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

import { requestPostPhoto } from '../../../api/requestPostPhoto';
import { requestUserInfo } from '../../../api/requestUserInfo';
import { RuLocale } from '../../../constants/ruLocale';

import { PostState } from './postSlice.types';

const initialState: PostState = {
  isLoading: false,
  isError: false,
  description: '',
  url: '',
  blurhash: '',
  username: '',
  userphoto: '',
  createdAt: '',
};

export const fetchPost = createAsyncThunk(
  'postSlice/fetchPost',
  async ({ photoId, userName }: { photoId: string; userName: string }) => {
    try {
      const photo = await requestPostPhoto(photoId);
      const userInfo = await requestUserInfo(userName);

      return {
        url: photo.data.urls.full,
        description: photo.data.description,
        blurhash: photo.data.blur_hash,
        username: photo.data.user.username,
        userphoto: userInfo.data.profile_image.medium,
        createdAt: photo.data.created_at,
      };
    } catch (e) {
      if (e instanceof Error) {
        Toast.show({
          type: 'error',
          text1: e.message,
        });
      } else {
        Toast.show({
          type: 'error',
          text1: RuLocale.somethingWentWrong,
        });
      }
    }
  }
);

const fullPhotoSlice = createSlice({
  name: 'gallerySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      if (action.payload) {
        state.description = action.payload.description;
        state.url = action.payload.url;
        state.blurhash = action.payload.blurhash;
        state.username = action.payload.username;
        state.userphoto = action.payload.userphoto;
        state.createdAt = action.payload.createdAt;
      }
    });
    builder.addCase(fetchPost.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchPost.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
  },
});

// export const { changeFilter } = postsSlice.actions;

export default fullPhotoSlice.reducer;
