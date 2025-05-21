export interface MenuItemType {
  name: string;
  src: string;
  alt: string;
  price: number;
}
export interface CategoryType {
  name: string;
  src: string;
  alt: string;
}

export interface ReviewType {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
  occupation: string;
}

export interface HeadingType {
  text: string;
  featuredText: string;
}

export interface StepsType {
  stepNumber: string;
  stepTitle: string;
  stepSubTitle: string;
  stepDescription: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SocialsType {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedIn?: string;
}

export interface StaffType {
  name: string;
  avatar: string;
  role: string;
  links?: SocialsType;
}
