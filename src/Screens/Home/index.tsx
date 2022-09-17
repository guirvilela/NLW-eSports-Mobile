import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IGame } from "../../@types/type_games";

import logoImg from "../../assets/logo-nlw-esports.png";
import Background from "../../components/Background";
import GameCard from "../../components/GameCard";
import Title from "../../components/Title";
import { api } from "../../server/api";
import { styles } from "./styles";

const Home: React.FC = () => {
  const navigation = useNavigation();
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    getAllGames();
  }, []);

  const getAllGames = async () => {
    try {
      const allGames = await api.get("/games");
      setGames(allGames?.data);
    } catch (error) {
      console.log("ERRO", error);
    }
  };

  const handleOpenGame = ({ id, bannerUrl, title }: IGame) => {
    navigation.navigate("game", {
      id,
      title,
      bannerUrl,
    });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Title
          title="Encontre seu duo"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.list}
        />
      </SafeAreaView>
    </Background>
  );
};

export default Home;
