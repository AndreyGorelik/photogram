interface UserProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface User {
  id: string;
  username: string;
  profile_image: UserProfileImage;
}

interface PhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface Photo {
  id: string;
  description: string;
  created_at: string;
  blur_hash: string;
  user: User;
  urls: PhotoUrls;
}
