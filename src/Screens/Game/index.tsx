import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IDuoCardProps } from "../../@types/ads";
import { IRouter } from "../../@types/route";
import Background from "../../components/Background";
import DuoCard from "../../components/DuoCard";
import DuoMatch from "../../components/DuoMatch";
import HeaderBack from "../../components/HeaderBack";
import Title from "../../components/Title";
import { api } from "../../server/api";
import { styles } from "./styles";

const Game: React.FC = () => {
  const [gameAds, setGameAds] = useState<IDuoCardProps[]>([]);
  const [visibleConnect, setVisibleConnect] = useState<boolean>(false);
  const [discord, setDiscord] = useState("");

  const {
    params: { title, id, bannerUrl },
  } = useRoute<IRouter>();

  useEffect(() => {
    getGameAds();
  }, []);

  const getGameAds = async () => {
    const gameSpecificAds = await api.get(`/games/${id}/ads`);
    setGameAds(gameSpecificAds.data);
  };

  const handleConnect = async (id: string) => {
    setVisibleConnect(true);

    try {
      const response = await api.get(`/ads/${id}/discord`);

      setDiscord(response.data.discord);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <HeaderBack />

        <View style={styles.image_content}>
          <Image
            source={{ uri: bannerUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Title title={title} subtitle="Conecte-se e comece a jogar" />

        <FlatList
          data={gameAds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => handleConnect(item.id)} />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={
            gameAds.length > 0 ? styles.contentList : styles.emptyListContent
          }
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para este jogo.
            </Text>
          )}
        />
        <DuoMatch
          discord={discord}
          closeModal={() => setVisibleConnect(false)}
          visible={visibleConnect}
        />
      </SafeAreaView>
    </Background>
  );
};

export default Game;
