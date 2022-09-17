import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { IDuoCardProps } from "../../@types/ads";
import { THEME } from "../../theme";
import InformationData from "../InformationData";

import { GameController } from "phosphor-react-native";
import { styles } from "./styles";

interface Props {
  data?: IDuoCardProps;
  onConnect: () => void;
}

const DuoCard: React.FC<Props> = ({ data, onConnect }) => {
  return (
    <View style={styles.container}>
      <InformationData label="Nome" title={data?.name} />

      <InformationData
        label="Tempo de jogo"
        title={
          data?.yearsPlaying + ` ${data?.yearsPlaying === 1 ? "ano" : "anos"}`
        }
      />

      <InformationData
        label="Disponibilidade"
        title={`${data?.weekDays.length} dias \u2022 ${data?.hourStart}h - ${data?.hourEnd}h`}
      />

      <InformationData
        title={data?.useVoiceChannel ? "Sim" : "Não"}
        label="Chamada de áudio?"
        colorValue={
          data?.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonText}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DuoCard;
