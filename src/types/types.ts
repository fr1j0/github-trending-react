export interface Developer {
  avatar: string;
  name: string;
  href: string;
  username: string;
  repo: Repo;
  type: "user" | "organization";
  url: string;
}

export interface Repository {
  author: string;
  avatar: string;
  builtBy: Developer[];
  currentPeriodStars: number;
  description: string;
  forks: number;
  language: string;
  languageColor: string;
  name: string;
  stars: number;
  url: string;
}

interface Repo {
  description: string;
  url: string;
  name: string;
}
