import { ImageSourcePropType } from "react-native";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      game: {
        id: string;
        title: string;
        bannerUrl: ImageSourcePropType;
      };
    }
  }
}
