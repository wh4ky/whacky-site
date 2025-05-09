export type Repository = {
  full_name: string;
  name: string;
  owner: {
    login: string;
  };
  description: string;
  url: string;
  languages: {
    [language: string]: string
  };
  license?: {
    name: string;
    url: string;
  };
};
