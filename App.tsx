import React from "react";
import { StatusBar } from "react-native";
import {
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
} from "@expo-google-fonts/inter";
import Background from "./src/components/Background";
import Home from "./src/Screens/Home";
import Loading from "./src/components/Loading";

const App: React.FC = () => {
    const [fontsLoader] = useFonts({
        Inter_400Regular,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_900Black,
    });

    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                backgroundColor={"transparent"}
                translucent
            />

            {fontsLoader ? <Home /> : <Loading />}
        </Background>
    );
};

export default App;
