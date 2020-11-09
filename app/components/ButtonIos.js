import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Text from "./Text";

export default function ButtonIos({ title, onPress, style }) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Text
        style={{
          paddingTop: 15,
          color: "#007AFF",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});
