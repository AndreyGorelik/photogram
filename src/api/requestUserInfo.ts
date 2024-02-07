import { AxiosResponse } from 'axios';

import { UNSPLASH_KEY } from '../constants/unsplashApi';

import axios from './axios';
import { API_ROUTES } from './constants';
import { User } from './types';

export const requestUserInfo = async (userName: string): Promise<AxiosResponse<User>> => {
  return await axios.get(`${API_ROUTES.users}/${userName}/`, {
    params: {
      client_id: UNSPLASH_KEY,
    },
  });
};
