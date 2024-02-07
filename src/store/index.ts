import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import gallerySlice from './slices/gallerySlice/gallerySlice';
import postSlice from './slices/postSlice/postSlice';

const rootReducer = combineReducers({
  gallerySlice,
  postSlice,
});

export const store: ToolkitStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
