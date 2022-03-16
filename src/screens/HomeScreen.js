import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen({navigation }) {
  return (
    <SafeAreaView>
      <Text>Estamos en HomeScreen</Text>
      <Button onPress={()=>{

         navigation.navigate('Detail', {
            itemId: 8,
          });
        
      }} title="Mostrar detalle del post 8" />
    </SafeAreaView>
  );
}
