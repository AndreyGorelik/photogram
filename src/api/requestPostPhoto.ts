import { AxiosResponse } from 'axios';

import { UNSPLASH_KEY } from '../constants/unsplashApi';

import axios from './axios';
import { API_ROUTES } from './constants';
import { Photo } from './types';

export const requestPostPhoto = async (photoId: string): Promise<AxiosResponse<Photo>> => {
  return await axios.get(`${API_ROUTES.photos}/${photoId}/`, {
    params: {
      client_id: UNSPLASH_KEY,
    },
  });
};
