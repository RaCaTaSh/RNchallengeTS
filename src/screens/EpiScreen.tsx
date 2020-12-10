import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import EpiQuery from "../graphql/querys/epiQuery";
import { Entypo } from "@expo/vector-icons";

const EpiScreen = (props:any) => {
  const textParam:string = props.navigation.getParam("textId");

  function ClearInput() {
    setSearch("");
  }

  const [search, setSearch] = useState("");
  useEffect(() => {
    if (textParam != "") {
      setSearch(textParam);
    }
  }, []);
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ backgroundColor: "#7034df", flexDirection: "row" ,borderRadius:35}}>
        <TextInput
          style={styles.textinput}
          onChangeText={(text) => setSearch(text)}
          placeholder="Ej:mor"
          value={search}
        />
        {search != "" ? (
          <TouchableOpacity style={styles.cross} onPress={ClearInput}>
            <Entypo name="cross" size={30} color="black" />
          </TouchableOpacity>
        ) : null}
      </View>
      <EpiQuery text={search} />

      <View style={styles.allbuttons}>
        <View style={styles.onebutton}>
          <Button
            title="Characters"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Characters",
                params: { textId: search },
              });
            }}
          />
        </View>
        <View style={styles.onebutton}>
          <Button
            title="Location"
            onPress={() => {
              props.navigation.navigate({
                routeName: "Locations",
                params: { textId: search, params: { textId: search } },
              });
            }}
          />
        </View>
        <View style={styles.onebutton}>
          <Button title="Episode" onPress={()=>{}}/>
        </View>
      </View>

      <View style={{ marginBottom: 200 }}></View>
    </View>
  );
};
export default EpiScreen;

const styles = StyleSheet.create({
  textinput: {
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: "80%",
    borderWidth: 1,
    marginHorizontal: "5%",
    marginVertical: "5%",
    borderRadius: 5,
    backgroundColor: "white",
    fontSize:25
  },
  cross: {
    marginTop: 25,
    paddingRight: 20,
  },
  allbuttons: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    top: 628,
  },
  onebutton: {
    width: "33.33%",
  },
});