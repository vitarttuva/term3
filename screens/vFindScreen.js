import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";
import VitInput from "../components/vinput";

import axios from "axios";

export default function FindScreen() {
  const [vfind, setVfind] = useState("123");
  const [nomen, setNomen] = useState([]);
  const [nomenitem, setNomenitem] = useState([]);

  const getSite2 = (vt) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        //Authorization: `Bearer ${user.jwt}`,
      },
    };

    const apiUrl = "http://terminal17.ru/Ajax/Obmen/}";
    const data = { mobile: vt };

    axios
      .post(apiUrl, data, config)
      .then(function (response) {
        setNomen(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        setNomen(error);
      });
  };

  const vRenderMap = ({ item }) => (
    <View>
      <TouchableOpacity
        onPress={() => {
          // console.log("------------");
          // console.log(item);
          setNomenitem(item);
          // navigation.navigate("Главная",{nomenred: item}); //Переносим на главную
        }}
      >
        <Text>
          {"     "}
          {item.name}
          {"\n"}
          !!!: {item.comment}
          {"\n"}
          кодБЭСТ: {item.code1c}
          {"\n"}
          ЦЕНА: {item.price}
          {"\n"}
          --------------------------------------------------
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.vcontainer}>
      <View>
        <Text>
          Сейчас выбрано:
          {"\n"}
          {nomenitem.code1c}
          {"\n"}
          {nomenitem.comment}
          {"\n"}
          {nomenitem.price}
        </Text>
      </View>
      <View style={styles.vcontainer2}>
        <View style={styles.vleft}>
          {nomen.length ? (
            <FlatList
              data={nomen}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => vRenderMap({ item })}
            />
          ) : (
            <Text style={{ fontSize: 32 }}>Ничего не найдено</Text>
          )}
        </View>
      </View>
      <View style={styles.vfind}>
        <VitInput
          FuncText={getSite2}
          TitleButton="Поиск"
          style={styles.vleft}
        />
      </View>
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
    flex: 0.9,
    backgroundColor: "#ace5ee",
    //justifyContent: "center",
    //alignItems: "center",
  },
  vfind: {
    flex: 0.1,
    // width: 100,
  },
  vleft: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    //left: 10,
  },
});
