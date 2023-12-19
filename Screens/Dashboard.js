import { View, Text, StyleSheet } from "react-native";
import LittleLemonHeader from "../components/LittleLemonHeader";


export default function Dashboard() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <Text style={styles.innerText}>Welcome, Muhammad Lawal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57'
  },
  innerText: {
    color: '#F4CE14',
    fontSize: 30,
    textAlign: 'center'
  }
})