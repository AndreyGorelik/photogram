import { AxiosResponse } from 'axios';

import { UNSPLASH_KEY } from '../constants/unsplashApi';

import axios from './axios';
import { API_ROUTES } from './constants';
import { Photo } from './types';

export const requestPhotoList = async (
  next: boolean,
  page: number,
  perPage: number,
  initialPage: number
): Promise<AxiosResponse<Photo[]>> => {
  return await axios.get(`${API_ROUTES.photos}/`, {
    params: {
      client_id: UNSPLASH_KEY,
      page: next ? page + 1 : initialPage,
      per_page: perPage,
    },
  });
};
