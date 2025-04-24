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
        <Image className="object-cover h-72 w-72 mt-5" source={{uri: "https://brainrottoy.com/cdn/shop/files/Tung-tung-tung-sahur-brainrot-toy-buy-brainrottoy-plushie-png.png?v=1744919619"}}/>
        <View className="flex w-full">
          <View className="m-8">
            <Text className="text-3xl font-bold">Tung Tung Tung Sahur Plushie</Text>
            <Text className="mt-2">Tung tung tung tung sahur. Anomali mengerikan yang hanya keluar pada sahur. Konon katanya kalau ada orang yang dipanggil Sahur tiga kali dan tidak nyaut maka makhluk ini datang di rumah kalian. Hi seremnya. Tung tung ini biasanya bersuara layaknya pukulan kentungan seperti ini. Share ke teman kalian yang susah Sahur.</Text>
            <Text className="font-bold text-3xl mt-3 mb-3 text-emerald-500">R$ 200.00</Text>
            <TouchableOpacity className="bg-orange-600 text-white font-bold rounded-full flex items-center justify-center p-4">Comprar Agora</TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
