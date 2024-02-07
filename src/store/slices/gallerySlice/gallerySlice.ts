import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Toast from 'react-native-toast-message';

import { RootState } from '../..';
import { requestPhotoList } from '../../../api/requestPhotoList';
import { RuLocale } from '../../../constants/ruLocale';

import { PostsReducerState } from './gallerySlice.types';

const initialState: PostsReducerState = {
  isLoading: false,
  isError: false,
  images: [],
  page: 1,
};

const PER_PAGE = 18;
const INITIAL_PAGE = 1;

export const fetchGalleryImages = createAsyncThunk(
  'postsSlice/fetchPosts',
  async (next: boolean, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const { page, images } = state.gallerySlice;

    try {
      const response = await requestPhotoList(next, page, PER_PAGE, INITIAL_PAGE);

      const prevIds = images.map((item) => item.id);
      const newFetchedImages = response.data.filter((item) => !prevIds.includes(item.id));

      const newImages = next ? images.concat(newFetchedImages) : response.data;
      return {
        newImages,
        page: next ? page + 1 : INITIAL_PAGE,
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

const gallerySlice = createSlice({
  name: 'gallerySlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryImages.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchGalleryImages.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      if (action.payload) {
        state.images = action.payload.newImages;
        state.page = action.payload.page;
      }
    });
    builder.addCase(fetchGalleryImages.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
  },
});

export default gallerySlice.reducer;
