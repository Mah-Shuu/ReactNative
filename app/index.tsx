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
      <View className="flex items-center">
        <Image className="object-cover h-60 w-72 mt-5" source={{uri: "https://www.pngplay.com/wp-content/uploads/9/Air-Jordan-No-Background.png"}}/>
        <View className="flex w-full">
          <View className="m-8">
            <Text className="text-3xl font-bold">Air Jordan</Text>
            <Text className="mt-2">Um tênis maneirão</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
