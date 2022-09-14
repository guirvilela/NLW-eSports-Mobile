import React from "react";
import { View, Text, ViewProps } from "react-native";
import { styles } from "./styles";

// import { Container } from './styles';

interface ITitle extends ViewProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<ITitle> = ({ title, subtitle, ...rest }) => {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default Title;
