import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Image, View, ButtonContainer } from './style';
import { Text } from 'react-native';

import Banner from '../../assets/img/banner.png'
import Button from '../../components/Button';


export default function Home({ navigation}) {
  return (
    <>
    <StatusBar style='theme-dark' />
      <SafeAreaView>
        <View> 
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Pedir Comida nunca foi tão Facil</Text>
          <Image source={Banner} />
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Permitir Localização</Text>
          <Text>Para descobrir restaurante que entregam na sua regiao</Text>

        </View>
        <ButtonContainer>
          <Button text='PULAR' onPress={() => navigation.navigate('Main')} />
          <Button text='ENTRAR' theme='primary' />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}



