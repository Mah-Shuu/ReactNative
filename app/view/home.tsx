import { useEffect, useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";

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
        <View className="flex-1 bg-slate-100">
            <ScrollView>
                {produtos.map((item, index) => (
                    <View key={index} className="m-3 flex-row w-full box-content">
                        <Image resizeMode="contain" className=" w-10 h-10 items-center justify-center" source={{uri: item.image}}></Image>
                        <View className="flex w-full">
                            <Text className="text-lg font-bold mt-2 text-wrap w-fit">{item.title}</Text>
                            <Text className="">{item.category}</Text>
                            <Text className="text-green-500 font-bold mt-2">R$ {item.price}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}