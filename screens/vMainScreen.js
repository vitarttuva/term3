import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import Barcode from "../components/barcode";
import Nomenred from "../components/nomenred";

export default function MainScreen() {
  //console.log(route);
  const [nomenred, setNomenred] = useState([]);
  const [vcode, setVcode] = useState(null);
  const [scanvisible, setScanvisible] = useState(true);

  const visScan = () => {
    const vscv = !scanvisible;
    setScanvisible(vscv);
  };

  return (
    <View style={styles.vcontainer}>
      {/* <StatusBar /> */}

      <View style={styles.vcenter}>
        <Barcode setVcode={setVcode} scanvisible={scanvisible} />
        <Button title="Обновить" onPress={visScan} />
        <Text>
          штрихкод: {"\n"} {vcode}
        </Text>
        <Text>
          <Nomenred Barcode={vcode} nomen={setNomenred} />
        </Text>
      </View>
      <View style={styles.vcontainer2}>
        <View style={styles.vleft}>
          <Text>Поиск по штрихкоду</Text>
        </View>
        <View style={styles.vleft}>
          <Text>
            {"     "}
            {nomenred.name}
            {"\n"}
            !!!: {nomenred.comment}
            {"\n"}
            кодБЭСТ: {nomenred.code1c}
            {"\n"}
            ЦЕНА: {nomenred.price}
          </Text>
        </View>

        {/* <Button title="Поиск" onPress={() => navigation.navigate("Find")} /> */}
      </View>
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
