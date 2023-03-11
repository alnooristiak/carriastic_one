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
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SignupScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <Image
        style={styles.logoSection}
        source={require("../assets/images/logo.png")}
      />

      {/* SignIn Section */}
      <View style={styles.mainContainer}>
        <View style={styles.mainBgContainer}>
          <Text style={styles.signUpText}>Sign Up</Text>

          {/* input groups start */}
          <View>
            {/* name */}
            <View style={styles.inputComponent}>
              <FontAwesome
                style={styles.iconSec}
                name="user-circle-o"
                size={20}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Name" />
            </View>
            {/* email */}
            <View style={styles.inputComponent}>
              <FontAwesome
                style={styles.iconSec}
                name="lock"
                size={24}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Email" />
            </View>
            {/* designition */}
            <View style={styles.inputComponent}>
              <FontAwesome5
                style={styles.iconSec}
                name="id-card-alt"
                size={18}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Designition" />
            </View>
            {/* Employe ID */}
            <View style={styles.inputComponent}>
              <FontAwesome5
                style={styles.iconSec}
                name="id-card"
                size={18}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Employe ID" />
            </View>
            {/* Password */}
            <View style={styles.inputComponent}>
              <FontAwesome
                style={styles.iconSec}
                name="lock"
                size={24}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Password" />
            </View>
            {/* Comferm Password */}
            <View style={styles.inputComponent}>
              <FontAwesome
                style={styles.iconSec}
                name="lock"
                size={24}
                color="black"
              />
              <TextInput
                style={styles.inputDiv}
                placeholder="Comferm Password"
              />
            </View>
            {/* Upload Photo */}
            <View style={[styles.inputComponent, styles.inputLast]}>
              <MaterialIcons
                name="add-a-photo"
                size={20}
                style={styles.iconSec}
                color="black"
              />
              <TextInput style={styles.inputDiv} placeholder="Upload Photo" />
            </View>
          </View>
          {/* input groups End */}

          {/* Sign up button */}
          <Pressable style={styles.signUpBtn}>
            <Text style={styles.signUpText}>SIGN UP</Text>
          </Pressable>
        </View>
      </View>

      {/* navigate page linking section */}
      <View style={styles.navigateSec}>
        <Text style={styles.longText}>Already have an account? </Text>
        <Pressable onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={[styles.longText, styles.loginText]}>LOGIN</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  logoSection: {
    width: 130,
    height: 120,
    alignSelf: "center",
    marginTop: 25,
    marginBottom: 20,
  },
  mainContainer: {
    borderColor: "blue",
    borderWidth: 3,
    width: "90%",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  mainBgContainer: {
    backgroundColor: "#8e44ad",
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  signUpText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    margin: 12,
  },
  // input section styles
  inputComponent: {
    flexDirection: "row",
    // justifyContent: 'center',
    alignItems: "center",
    padding: 8,
    width: "70%",
    borderWidth: 1,
    borderColor: "black",
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  iconSec: {
    width: "10%",
  },
  inputDiv: {
    width: "90%",
  },
  inputLast: {
    marginBottom: 50,
  },

  // navigate section
  navigateSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
  },
  longText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8e44ad",
  },
  loginText: {
    textDecorationLine: "underline",
  },

  // sign up btn section
  signUpBtn: {
    borderRadius: 7,
    backgroundColor: "white",
    padding: 10,
    width: "50%",
    position: "absolute",
    bottom: -20,
    borderColor: "black",
    borderWidth: 1,
    overflow: "visible",
  },
  signUpText: {
    textAlign: "center",
    color: "#8e44ad",
    fontSize: 17,
    fontWeight: "bold",
  },
});
