export interface NavLink {
  name: string;
  path: string;
}

export interface DefaultPosition {
  defaultTop: number[];
  defaultLeft: number[];
}

export interface Position {
  top: number;
  left: number;
}

export interface TrinketItem extends DefaultPosition {
  image: string;
  mobile: boolean;
  rotate: number;
  size: number;
}

export interface Experience {
  name?: string;
  link: string;
  posters: string[];
}

export interface WorkBlock {
  name: string;
  descrp: string;
  experience: Experience[];
}

export interface WorkContent {
  id: string;
  about: string;
  industry?: string[];
  metrics?: string[];
  role?: string[];
  content?: string[];
  display: string[];
}
