import * as React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native"; 
import LittleLemonHeader from "../components/LittleLemonHeader";
import LittleLemonFooter from '../components/LittleLemonFooter';
 
export default function Login({navigation}) {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')


 return (
  <>
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
      <View style={styles.form}>
        <Text style={styles.innerText}>Welcome, Muhammad Lawal</Text>
        <TextInput
          style={styles.textInput}
          value={username}
          placeholder={'Enter your username'} 
          onChange={setUsername}
        />
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder={'Enter your password'} 
          onChange={setPassword}
        />
        <Pressable onPress={() => {navigation.navigate('Dashboard')}}>
          <Text style={styles.btn}>Login</Text>
        </Pressable>
      </View>
    </View>
    <View style={{ backgroundColor: '#495E57' }}>
      <LittleLemonFooter />
    </View>
  </>
 )
}

const styles = StyleSheet.create({
  innerText: {
    color: '#F4CE14',
    fontSize: 30,
    textAlign: 'center'
  },
  form: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    backgroundColor: '#fefefe',
    height: 50,
    width: "80%",
    borderRadius: 10,
    paddingLeft: 10,
    marginTop: 20
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#F4CE14',
    color: 'black',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  }
})