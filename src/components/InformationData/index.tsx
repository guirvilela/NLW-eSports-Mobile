import React from "react";
import { View, Text, ColorValue } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface IInformationProps {
  label: string;
  title?: string;
  colorValue?: ColorValue;
}

const InformationData: React.FC<IInformationProps> = ({
  label,
  title,
  colorValue = THEME.COLORS.TEXT,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Text style={{ ...styles.title, color: colorValue }} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
};

export default InformationData;
