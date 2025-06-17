import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Home(){

    interface ProdutosAPI{
        id : number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
    }

    const [produtos,setProdutos] = useState<ProdutosAPI[]>([]);
    const [loading,setLoading] = useState(true);

    async function pegarProdutos() {
        let resposta = await fetch('https://fakestoreapi.com/products');
        let dados = await resposta.json();

        setProdutos(dados);
        setLoading(false);
    }

    useEffect(() => {
        pegarProdutos();
    },[]);

    if(loading){
        return(
            <View className="flex-1 bg-white items-center justify-center drop-shadow-xl">
                <ActivityIndicator size={"large"} color={"#000000"} />
            </View>
        );
    }


    return(
        <View className="flex-1  bg-slate-100">
            <ScrollView className="h-screen ">
                {produtos.map((item, index) => (
                    <View key={index} className="m-2 flex-row box-border items-center text-wrap gap-3 bg-white p-2 rounded-xl">
                        <Image resizeMode="contain" className=" w-32 h-32 items-center justify-center" source={{uri: item.image}}></Image>
                        <View className="flex justify-between text-wrap w-full h-full" style={{flexShrink: 1}}>
                            <View className="flex text-wrap" >
                                <Text className="text-base font-bold text-wrap">{item.title}</Text>
                                <Text className="text-green-500 font-bold mt-1">R$ {item.price}</Text>
                            </View>
                            <TouchableOpacity className="bg-black text-white text-center mt-3 box-border p-2 rounded-xl">Detalhes</TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}