import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";
import axios from "axios";

export default function MainScreen({ navigation, route }) {
  console.log(route);

  const [barcode, setBarcode] = useState("");
  const [nomenred, setNomenred] = useState([]);
  const [scanvisible, setScanvisible] = useState(true);

  useEffect(() => {}, []);

  return (
    <View style={styles.vcontainer}>
      {/* картинка   */}
      <Image 
      style={{width: "50%",height: 250,}}
      source={require("../assets/terminalIcon.png")} />
      <Text>{'\n'}</Text>
      {/* здесь делаем вход */}
      <Button title="Вход" onPress={() => navigation.navigate("Find")} />
    </View>
  );
}

const styles = StyleSheet.create({
  vcontainer: {
    flex: 1,
    //backgroundColor: "#808080",
    justifyContent: "center",
    alignItems: "center",
  },
  vcontainer2: {
    flex: 1,
    backgroundColor: "#fff500",
    //justifyContent: "center",
    //alignItems: "center",
  },
  vcenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  vleft: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    left: 10,
  },
});
