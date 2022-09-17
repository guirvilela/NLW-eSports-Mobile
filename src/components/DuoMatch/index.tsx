import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  ModalProps,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import { styles } from "./styles";
import { THEME } from "../../theme";
import Title from "../Title";
import * as Clipboard from "expo-clipboard";

interface IDuoMatch extends ModalProps {
  discord: string;
  closeModal: () => void;
}

const DuoMatch: React.FC<IDuoMatch> = ({ discord, closeModal, ...rest }) => {
  const [isCopping, setIsCopping] = useState<boolean>(false);

  const handleCopyDiscord = async () => {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert("Discord", "Discord copiado com sucesso!");
    setIsCopping(false);
  };

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={closeModal}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Title
            title="Let's play"
            subtitle="Agora é só começar a jogar"
            style={{ alignItems: "center", marginVertical: 24 }}
          />
          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscord}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DuoMatch;
