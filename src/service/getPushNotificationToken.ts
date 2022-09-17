import * as Notifications from "expo-notifications";

export const getPushNotificationToken = async () => {
  const { granted } = await Notifications.getPermissionsAsync();

  if (!granted) {
    await Notifications.requestPermissionsAsync();
  } else {
    const pushToken = await Notifications.getExpoPushTokenAsync();

    console.log(pushToken.data);

    return pushToken.data;
  }
};
