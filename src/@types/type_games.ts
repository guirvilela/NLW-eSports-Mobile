import { ImageSourcePropType } from "react-native";

export interface IGame {
  bannerUrl: ImageSourcePropType;
  id: string;
  title: string;
  _count: {
    ads: number;
  };
}
