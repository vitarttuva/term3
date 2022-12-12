import React, { useState, useEffect } from "react";
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

export default function Nomenred({ Barcode, nomen }) {
  //const [nomenitem, setNomenitem] = useState(null);

  const [vbar, setBar] = useState(null);
  console.log(Barcode);

  const FindNomen = (vbar1) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log("===" + vbar1);

    const apiUrl = "http://terminal17.ru/Ajax/Obmen/}";
    const data = { mobileBarcode: vbar1 };

    axios
      .post(apiUrl, data, config)
      .then(function (response) {
        nomen(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        setNomenitem(error);
      });
  };

  useEffect(() => {
    console.log("Запрос на сервер");
    console.log(vbar);
    console.log(Barcode);

    if (vbar != Barcode) {
      setBar(Barcode);
      FindNomen(Barcode);
    }
  }, [Barcode]);

  return <View></View>;
}
