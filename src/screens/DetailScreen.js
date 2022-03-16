import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen({ route, navigation }) {
   const { itemId } = route.params;
  return (
    <SafeAreaView>
      <Text>Detalle {JSON.stringify(itemId)}</Text>
      <Button onPress={() =>{
        navigation.navigate('Home');
      }} title="REGRESAR" />
    </SafeAreaView>
  );
}
