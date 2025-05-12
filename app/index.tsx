import { Text, View, Image, TouchableOpacity, ScrollView} from "react-native";

export default function Index() {
  return (
    <View className="bg-slate-100 h-screen">
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
        <View className="m-3 mt-0 pb-16 gap-2">

          <View className="flex items-center bg-white rounded drop-shadow-lg p-4 gap-3">
            <Image className="object-cover h-60 w-60" source={{uri: "https://brainrottoy.com/cdn/shop/files/Tung-tung-tung-sahur-brainrot-toy-buy-brainrottoy-plushie-png.png?v=1744919619"}}/>

            <View className="gap-2">
              <Text className="text-xl font-bold">Tung Tung Tung Sahur Plushie</Text>
              <Text>Tung tung tung tung sahur. Anomali mengerikan yang hanya keluar pada sahur. Konon katanya kalau ada orang yang dipanggil Sahur tiga kali dan tidak nyaut maka makhluk ini datang di rumah kalian. Hi seremnya. Tung tung ini biasanya bersuara layaknya pukulan kentungan seperti ini. Share ke teman kalian yang susah Sahur.</Text>
              <TouchableOpacity className="bg-orange-600 text-white font-bold rounded-full flex items-center justify-center p-2">Ver Mais</TouchableOpacity>
            </View>

          </View>
          <View className="flex items-center bg-white rounded drop-shadow-lg p-4 gap-3">
            <Image className="object-cover h-60 w-60" source={{uri: "https://tralalerotralalaplushies.com/wp-content/uploads/2025/04/Tralalero-Tralala-Plush.png"}}/>

            <View className="gap-2">
              <Text className="text-xl font-bold">Tralalero Tralala Plushie</Text>
              <Text>Trallallero-trallalà, porco Dio e porco Allah Ero con il mio fottuto figlio merdardo a giocare a Fortnit Quando a un punto arriva mia nonna, Ornella Leccacappella.</Text>
              <TouchableOpacity className="bg-orange-600 text-white font-bold rounded-full flex items-center justify-center p-2">Ver Mais</TouchableOpacity>
            </View>

          </View>
          <View className="flex items-center bg-white rounded drop-shadow-lg p-4 gap-3">
            <Image className="object-cover h-60 w-60" source={{uri: "https://images.tcdn.com.br/img/img_prod/1119462/pelucia_patrick_35cm_multikids_99636971_1_986672a908f5b2fd1db2defcfa8a1fd5.jpg"}}/>

            <View className="gap-2">
              <Text className="text-xl font-bold">Patrick Plushie</Text>
              <Text>Olha quem saiu da TV para o mundo real! O Bob Esponja e Patrick de pelúcia!! Com plush super premium macio e detalhes bordados, são mega fofinhos e representam os moradores marinhos mais famosos do mundo! Detalhe bordado Plush super premium macio Hipoalérgico Enchimento em poliéster *Imagens Meramente Ilustrativas*</Text>
              <TouchableOpacity className="bg-orange-600 text-white font-bold rounded-full flex items-center justify-center p-2">Ver Mais</TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>


    </View>
  );
}
