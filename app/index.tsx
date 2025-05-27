import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator} from "react-native";

export default function Index() {

  interface ProdutosAPI{
    id : number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }

  const [dados, setDados] = useState<ProdutosAPI[]>([]);
  const [loading,setLoading] = useState(true)

  async function puxarDados(){
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json()

    setDados(data);
    setLoading(false);
  }

  useEffect(() => {
    puxarDados()
  },[])

  if(loading){
    return (
      <View className="flex-1 bg-white items-center justify-center drop-shadow-xl">
        <ActivityIndicator size={"large"} color={"#000000"} />
      </View>
    )
  }

  return (
    <View className="bg-slate-100 flex-1">

      <Text className="flex-1 text-center p-4 text-xl">🛒 Loja Virtual</Text>

      <ScrollView className="">
        {dados.map((item, index) => (
          <View key={index} className="p-4 m-3 bg-white rounded-xl drop-shadow-xl items-center">
            <Image resizeMode="contain" className=" w-full h-72 items-center justify-center" source={{uri: item.image}}></Image>
            <Text className="text-lg font-bold w-full mt-2">{item.title}</Text>
            <Text className="w-full">{item.category}</Text>
            <Text className="text-green-500 font-bold w-full mt-2">R$ {item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
