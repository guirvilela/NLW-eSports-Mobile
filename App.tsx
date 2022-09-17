import React, { useEffect, useRef, useState } from "react";
import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import Background from "./src/components/Background";
import Loading from "./src/components/Loading";
import { Routes } from "./src/routes";
import "./src/service/notificationConfigs";
import { Subscription } from "expo-modules-core";
import { getPushNotificationToken } from "./src/service/getPushNotificationToken";
import * as Notifications from "expo-notifications";

const App: React.FC = () => {
  const [phoneTokenNotification, setPhoneTokenNotification] =
    useState<string>("");
  const [fontsLoader] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
    getPushNotificationToken().then((token) =>
      setPhoneTokenNotification(String(token))
    );
  }, []);

  useEffect(() => {
    getNotificationListener.current =
      Notifications.addNotificationReceivedListener((notification) =>
        console.log(notification)
      );

    responseNotificationListener.current =
      Notifications.addNotificationResponseReceivedListener((response) =>
        console.log(response)
      );

    return () => {
      if (
        getNotificationListener.current &&
        responseNotificationListener.current
      ) {
        Notifications.removeNotificationSubscription(
          getNotificationListener.current
        );
        Notifications.removeNotificationSubscription(
          responseNotificationListener.current
        );
      }
    };
  }, []);

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor={"transparent"}
        translucent
      />

      {fontsLoader ? <Routes /> : <Loading />}
    </Background>
  );
};

export default App;
