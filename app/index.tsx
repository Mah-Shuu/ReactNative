import { Text, View, Image, TouchableOpacity, ScrollView} from "react-native";

export default function Index() {
  return (
    <View className="bg-slate-100">
      <View className="h-16 bg-orange-600 flex justify-center">
        <Text className="ml-3 font-bold text-xl text-white">Dashboard</Text>
      </View>
      
      <View className="grid grid-cols-3 m-3 gap-2">
        <View className="bg-white p-3 place-content-between rounded drop-shadow-lg">
          <Text className="font-bold">Visitas</Text>
          <Text className="text-3xl font-bold text-orange-600">1,500</Text>
          <Text>Ultimos 7 dias</Text>
        </View>
        <View className="bg-white p-3 place-content-between rounded drop-shadow-lg">
          <Text className="font-bold">Vendas</Text>
          <Text className="text-3xl font-bold text-lime-600">320</Text>
          <Text>Ultimos 7 dias</Text>
        </View>
        <View className="bg-white p-3 place-content-between rounded drop-shadow-lg">
          <Text className="font-bold">Novos Usuários</Text>
          <Text className="text-3xl font-bold text-blue-600">120</Text>
          <Text>Ultimos 7 dias</Text>
        </View>
      </View>

      <ScrollView>
        <View className="m-3">
          <View className="flex items-center bg-white rounded drop-shadow-lg p-4 gap-3">
            <Image className="object-cover h-60 w-60" source={{uri: "https://brainrottoy.com/cdn/shop/files/Tung-tung-tung-sahur-brainrot-toy-buy-brainrottoy-plushie-png.png?v=1744919619"}}/>

            <View className="gap-2">
              <Text className="text-xl font-bold">Tung Tung Tung Sahur Plushie</Text>
              <Text>Tung tung tung tung sahur. Anomali mengerikan yang hanya keluar pada sahur. Konon katanya kalau ada orang yang dipanggil Sahur tiga kali dan tidak nyaut maka makhluk ini datang di rumah kalian. Hi seremnya. Tung tung ini biasanya bersuara layaknya pukulan kentungan seperti ini. Share ke teman kalian yang susah Sahur.</Text>
              <TouchableOpacity className="bg-orange-600 text-white font-bold rounded-full flex items-center justify-center p-2">Ver Mais</TouchableOpacity>
            </View>

          </View>
          <View className="flex items-center bg-white rounded drop-shadow-lg p-4 gap-3">
            <Image className="object-cover h-60 w-60" source={{uri: "https://brainrottoy.com/cdn/shop/files/Tung-tung-tung-sahur-brainrot-toy-buy-brainrottoy-plushie-png.png?v=1744919619"}}/>

            <View className="gap-2">
              <Text className="text-xl font-bold">Tung Tung Tung Sahur Plushie</Text>
              <Text>Tung tung tung tung sahur. Anomali mengerikan yang hanya keluar pada sahur. Konon katanya kalau ada orang yang dipanggil Sahur tiga kali dan tidak nyaut maka makhluk ini datang di rumah kalian. Hi seremnya. Tung tung ini biasanya bersuara layaknya pukulan kentungan seperti ini. Share ke teman kalian yang susah Sahur.</Text>
              <TouchableOpacity className="bg-orange-600 text-white font-bold rounded-full flex items-center justify-center p-2">Ver Mais</TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView> 
    </View>
  );
}
