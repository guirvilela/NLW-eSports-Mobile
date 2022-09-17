import { ParamListBase, RouteProp } from "@react-navigation/native";
import { ImageSourcePropType } from "react-native";
import { IGame } from "./type_games";

export interface IRouter extends RouteProp<ParamListBase, string> {
  params: Omit<IGame, "_count">;
}
