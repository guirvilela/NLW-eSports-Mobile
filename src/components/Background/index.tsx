import React from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "./styles";

import backgroundImg from "../../assets/background-galaxy.png";

interface IBackground {
  children: React.ReactNode;
}

const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
};

export default Background;
