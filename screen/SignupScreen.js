import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SignupScreen = () => {
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
        </View>
      </View>

    </ScrollView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    logoSection: {
        width: 130,
        height: 120,
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 20,
      },
      mainContainer: {
        borderColor: 'blue',
        borderWidth: 3,
        width: '90%',
        borderRadius: 10,
        // justifyContent: 'center',
        // alignItems: 'center'
      },
      mainBgContainer: {
        backgroundColor: '#8e44ad',
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
      },
      signUpText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 12,
      }
})