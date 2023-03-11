import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Image
        style={styles.logoSection}
        source={require("../assets/images/logo.png")}
      />

      {/* image and input sectino */}
      <View style={[styles.userInputSec]}>
        <View style={styles.shadowProp}>
          <Image
            style={styles.boyImage}
            source={require("../assets/images/cuteboy.png")}
          />

          <View style={{ marginTop: 70 }}>
            <View style={styles.inputComponent}>
              <Entypo
                style={styles.iconSec}
                name="mail"
                size={24}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Email" />
            </View>

            <View style={styles.inputComponent}>
              <Entypo
                style={styles.iconSec}
                name="lock"
                size={24}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Password" />
            </View>

            <Pressable style={styles.signUpBtn}>
              <Text style={styles.signUpText}>LOGIN</Text>
            </Pressable>
            <Text style={styles.forgotText}>Forgot Password?</Text>
            <View style={styles.line}></View>
            <Text style={styles.orText}>OR</Text>
          </View>
        </View>
      </View>

      {/* need an account section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text style={styles.navigateText}>Need an account?</Text>

        <Pressable onPress={() => navigation.navigate("SignupScreen")}>
          <Text style={[styles.longText, styles.loginText]}>SIGNUP</Text>
        </Pressable>
      </View>

      {/* Information icon section */}
      <Pressable
        style={styles.infoIcon}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <MaterialCommunityIcons
          style={styles.infoMIcon}
          name="information-variant"
          size={50}
          color="#8e44ad"
        />
      </Pressable>
    </ScrollView>
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
  boyImage: {
    width: 120,
    height: 120,
    padding: 12,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: "green",
    top: 10,
    position: "absolute",
    marginTop: -75,
    justifyContent: "center",
    alignSelf: "center",
  },
  userInputSec: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },

  shadowProp: {
    width: "85%",
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 45,
    padding: 20,
  },

  inputComponent: {
    flexDirection: "row",
    padding: 8,
    width: "100%",
    borderColor: "black",
    borderBottomWidth: 2,
    marginBottom: 12,
    borderRadius: 15,
  },
  iconSec: {
    width: "10%",
  },
  inputDiv: {
    width: "90%",
  },
  longText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8e44ad",
  },
  loginText: {
    textDecorationLine: "underline",
    marginLeft: 25,
  },
  navigateText: {
    fontSize: 18,
  },

  // sign up btn section
  signUpBtn: {
    borderRadius: 7,
    backgroundColor: "#8e44ad",
    padding: 8,
    width: "100%",
    borderColor: "black",
  },
  signUpText: {
    textAlign: "center",
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    fontSize: 20,
  },

  // forgot test style
  forgotText: {
    textAlign: "right",
    marginVertical: 17,
    fontSize: 17,
  },
  line: {
    border: 1,
    borderWidth: 0.5,
    borderColor: "black",
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 16,
  },

  // info icon
  infoIcon: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 80,
    marginVertical: 40,
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
  },
  infoMIcon: {
    alignSelf: "center",
  },
});
