export interface Profile {
  firstname: string;
  lastname: string;
  age: number;
  currency: string;
  city: string;
  country: string;
  username: string;
  avatar: string;
}

export interface ProfileScheme {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly: boolean;
}
