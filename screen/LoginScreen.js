import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <View>
      <Image
        style={styles.logoSection}
        source={require("../assets/images/logo.png")}
      />

      {/* image and input sectino */}
      <View style={[styles.userInputSec]}>
        <View style={ styles.shadowProp}>
        <Image
          style={styles.logoSection}
          source={require("../assets/images/cuteboy.png")}
        />

        <View style={styles.inputComponent}>
          <Entypo style={styles.iconSec} name="mail" size={24} color="black" />
          <TextInput style={styles.inputDiv} placeholder="Email" />
        </View>

        <View style={styles.inputComponent}>
          <FontAwesome name="lock" size={24} color="black" />
          <TextInput placeholder="Password" />
        </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logoSection: {
    width: 130,
    height: 120,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  userInputSec: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#c12929",
shadowOffset: {
  width: 0,
  height: 3,
},
shadowOpacity:  0.17,
shadowRadius: 3.05,
elevation: 4
  },

  shadowProp: {
    width: '85%',
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 45,
    padding: 20
  },

  inputComponent: {
    flexDirection: "row",
    padding: 8,
    width: "100%",
  },
  iconSec: {
    width: "10%",
  },
  inputDiv: {
    width: "90%",
  },
});
