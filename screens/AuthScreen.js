import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Image,
} from "react-native";




export default function MainScreen({ navigation, route }) {
  console.log(route);
  
  const [barcode, setBarcode] = useState("");
  const [nomenred, setNomenred] = useState([]);
  const [scanvisible, setScanvisible] = useState(true);

  useEffect(() => {
    
  }, []);

  return (
    <View style={styles.vcontainer}>
      
      <Button title="Проба" onPress={() => navigation.navigate("Find")} />
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  vcontainer: {
    flex: 1,
    //backgroundColor: "#808080",
    //justifyContent: "center",
    //alignItems: "center",
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
