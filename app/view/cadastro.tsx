import { Link, router } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login(){

  return(
    <View className="flex-1 justify-center items-center bg-slate-100 p-6 gap-7">
      <View className="items-center gap-2">
        <Text className="text-4xl font-bold">Crie sua conta</Text>
      </View>

      <View className="flex w-full gap-3">
        <TextInput className="bg-white p-3 rounded-full drop-shadow-md w-full" placeholder="Usuário"/>
        <TextInput className="bg-white p-3 rounded-full drop-shadow-md w-full" placeholder="Seu nome"/>
        <TextInput className="bg-white p-3 rounded-full drop-shadow-md w-full" placeholder="Senha"/>
      </View>

      <TouchableOpacity onPress={() => router.push('/')} className="drop-shadow-md text-center w-96 p-3 rounded-full text-white font-semibold bg-gradient-to-r from-orange-500 to-orange-300">Cadastrar</TouchableOpacity>
      <View className="flex-row gap-1">
        <Text className="text-slate-500">Já tem uma conta?</Text>
        <Link href={'/'}><Text className="font-bold">Entrar</Text></Link>
      </View>
    </View>
  );
}