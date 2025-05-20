import { useEffect, useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView} from "react-native";

export default function Index() {

  interface ProdutosAPI{

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
    console.log(dados)
  },[])

  return (
    <View className="bg-slate-100 flex-1 p-4">
      <Text className="flex-1 text-center">Loja Virtual</Text>

      <ScrollView className="">
        {dados.map((item, index) => (
          <View className="p-4 bg-white rounded">
            <Image className="h-72" source={{uri: item.image}}></Image>
            <Text>{item.title}</Text>
            <Text>{item.category}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
