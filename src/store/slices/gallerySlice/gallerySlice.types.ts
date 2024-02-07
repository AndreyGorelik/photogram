import { Photo } from '../../../api/types';

export interface PostCardInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsReducerState {
  isLoading: boolean;
  isError: boolean;
  images: Photo[];
  page: number;
}
