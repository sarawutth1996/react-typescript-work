interface authProfile {
  nickname: string;
  role: string;
}

export interface authLogin {
  username: string;
  password: string;
  profile: authProfile;
}
