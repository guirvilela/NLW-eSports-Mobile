import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { IGame } from "../../@types/type_games";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
  data: IGame;
}

const GameCard: React.FC<Props> = ({
  data: { title, _count, bannerUrl },
  ...rest
}) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground source={{ uri: bannerUrl }} style={styles.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.ads}>
            {_count.ads} {_count.ads === 1 ? "anúncio" : "anúncios"}{" "}
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GameCard;
