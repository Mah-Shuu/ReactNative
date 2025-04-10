import { Text, View, Image, TouchableOpacity} from "react-native";

function correr(){
  alert("Lhe falta ódio...\nMorra pelas minhas mões!")
}

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-neutral-900">

      <View className="p-6 bg-neutral-800 justify-center items-center rounded-3xl shadow-xl">
        <Image className="w-60 h-60 rounded-full mb-5 border-4 border-red-700 shadow-xl shadow-red-800" source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2b-UQwn8THlZ5n-Z-DUFWfleZibJ8rok4Q&s"}}/>
        <Text className="text-4xl text-red-700 font-bold mb-3">XxEnzoMiguelxX</Text>
        <Text className="text-2xl text-white">Não queira ver meu lado maligno...</Text>
        <Text className="text-xl text-red-400">Itachi do Naruto é igual eu</Text>
        <Text className="text-2xl text-white font-bold text-shadow-lg">Cuidado com migo</Text>
        <TouchableOpacity className="text-xl bg-gradient-to-t from-red-950 to-red-700 text-white p-3 pr-5 pl-5 rounded-full mt-4 font-bold shadow-xl shadow-red-950" onPress={correr} >CORRER</TouchableOpacity>
      </View>

    </View>
  );
}
