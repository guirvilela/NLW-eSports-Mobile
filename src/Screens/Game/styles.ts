import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
  },

  image_content: {
    marginVertical: 32,
  },

  image: {
    widht: 311,
    height: 160,
    borderRadius: 8,
  },

  containerList: {
    width: "100%",
    marginTop: 32,
  },

  contentList: {
    paddingRight: 64,
    alignItems: "flex-start",
  },

  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontSize: THEME.FONT_SIZE.SM,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },

  emptyListContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
