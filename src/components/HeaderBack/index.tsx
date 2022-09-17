import React from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { THEME } from "../../theme";

import logoImg from "../../assets/logo-nlw-esports.png";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const HeaderBack: React.FC = () => {
  const navigate = useNavigation();

  const handleGoBack = () => {
    navigate.goBack();
  };

  return (
    <TouchableOpacity style={styles.header} onPress={handleGoBack}>
      <Entypo
        name="chevron-thin-left"
        color={THEME.COLORS.CAPTION_300}
        size={25}
      />

      <Image source={logoImg} style={styles.logo} />

      <View style={styles.right} />
    </TouchableOpacity>
  );
};

export default HeaderBack;
