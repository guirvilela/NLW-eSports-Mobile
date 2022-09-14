import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        background: THEME.COLORS.BACKGROUND_800,
        paddingTop: getStatusBarHeight(),
    },
});
