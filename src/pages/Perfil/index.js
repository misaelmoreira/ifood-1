import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import { Text } from 'react-native';


export default function Perfil() {
  return (
    <>
    <StatusBar style='theme-dark' />
      <SafeAreaView>
        <View>
          <Text>Perfil</Text>
        </View>                      
      </SafeAreaView>
    </>
  );
}



