import { Text, View, Image, TouchableOpacity} from "react-native";

function correr(){
  alert("Lhe falta ódio...\nMorra pelas minhas mões!")
}

export default function Index() {
  return (
    <View>
      <View className="h-16 bg-orange-600 flex justify-center">
        <Text className="ml-3 text-xl text-white">Detalhes do Produto</Text>
      </View>
      <View>
        <Image/>
      </View>
    </View>
  );
}
