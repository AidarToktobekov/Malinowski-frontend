export interface IHouseCard {
  setVideo?: (video: string) => void;
  video?: string;
  houseNumber: string;
  plot: string;
  house: string;
  price: string;
  sold: boolean;
  language: string;
  isHovered?: string;
  setIsHovered?: (isHovered: string) => void;
  size: string;
  setShowHouse?: (house: House) => void;
  photo?: string[];
  allVideo?: {
    back: string;
    exterior1_1: string;
    exterior1_2: string;
    exterior1_3: string;
    exterior1_4: string;
    exterior2_1: string;
    exterior2_2: string;
    exterior3_1: string;
    exterior3_2: string;
    exterior4_1: string;
    exterior4_2: string;
    interior1_1: string;
    interior1_2: string;
    interior2_1: string;
    interior2_2: string;
    exterior1: string;
    exterior2: string;
    exterior3: string;
    exterior4: string;
    interior1: string;
    interior2: string;
  };
  date?: string;
  kitchen?: string;
  garage?: string;
  livingRoom?: string;
  bedroom1?: string;
  bedroom2?: string;
  wardrobe?: string;
  cabinet?: string;
}

export interface House {
  houseNumber: string;
  plot: string;
  house: string;
  price: string;
  sold: boolean;
  language: string;
  video: {
    back: string;
    exterior1_1: string;
    exterior1_2: string;
    exterior1_3: string;
    exterior1_4: string;
    exterior2_1: string;
    exterior2_2: string;
    exterior3_1: string;
    exterior3_2: string;
    exterior4_1: string;
    exterior4_2: string;
    interior1_1: string;
    interior1_2: string;
    interior2_1: string;
    interior2_2: string;
    exterior1: string;
    exterior2: string;
    exterior3: string;
    exterior4: string;
    interior1: string;
    interior2: string;
  };
  photo: string[];
  date: string;
  kitchen: string;
  garage: string;
  livingRoom: string;
  bedroom1: string;
  bedroom2: string;
  wardrobe: string;
  cabinet: string;
}

export interface IHouseShowing {
  houseNumber: string;
  plot: string;
  house: string;
  price: string;
  sold: boolean;
  language: string;
  setShowHouse: (house: House) => void;
  video: {
    back: string;
    exterior1_1: string;
    exterior1_2: string;
    exterior1_3: string;
    exterior1_4: string;
    exterior2_1: string;
    exterior2_2: string;
    exterior3_1: string;
    exterior3_2: string;
    exterior4_1: string;
    exterior4_2: string;
    interior1_1: string;
    interior1_2: string;
    interior2_1: string;
    interior2_2: string;
    exterior1: string;
    exterior2: string;
    exterior3: string;
    exterior4: string;
    interior1: string;
    interior2: string;
  };
  setVideo: (video: string) => void;
  nowVideo: string;
  photo: string[];
  date: string;
  kitchen: string;
  garage: string;
  livingRoom: string;
  bedroom1: string;
  bedroom2: string;
  wardrobe: string;
  cabinet: string;
}
