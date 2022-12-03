export interface MetaInterface extends Card {
  keywords: string;
}

export interface Card {
  title: string;
  description: string;
  img: string;
  path: string;
}

export interface CaseStudy {
  title: string;
  img: string;
  desc: string;
  areas: string[];
  link: string;
  background: string;
}
