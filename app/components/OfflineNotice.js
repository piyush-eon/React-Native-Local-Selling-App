import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import Constants from "expo-constants";
import AppText from "./Text";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netinfo = useNetInfo();

  if (netinfo.type !== "unknown" && netinfo.isInternetReachable === false)
    return (
      <View
        style={{
          backgroundColor: colors.primary,
          height: 50,
          position: "absolute",
          zIndex: 10,
          top: Constants.statusBarHeight,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <AppText style={{ color: colors.white }}>
          No Internet Connection
        </AppText>
      </View>
    );

  return null;
};

export default OfflineNotice;
