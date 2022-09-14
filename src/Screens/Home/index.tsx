import React from "react";
import { View, Image, FlatList } from "react-native";

import logoImg from "../../assets/logo-nlw-esports.png";
import GameCard from "../../components/GameCard";
import Title from "../../components/Title";
import { GAMES } from "../../utils/games";
import { styles } from "./styles";
// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Title
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default Home;
