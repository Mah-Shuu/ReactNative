import { useState } from "react";
import { Text, View, Image, TouchableOpacity, TextInput} from "react-native";

export default function Index() {
  const [lista, setLista] = useState<string[]>([]);
  let [texto, setTexto] = useState("");

  function addLista(){
    setLista((elementosAnteriores) => [...elementosAnteriores,texto])
  }

  return (
    <View className="bg-slate-100 p-4 flex gap-3">
      <Text className="text-2xl">Lista de Tarefas</Text>
      
      <TextInput onChangeText={setTexto} className="flex-1 bg-white border-2 border-gray-400 p-2 rounded" placeholder="Digite uma tarefa..."/>
      <TouchableOpacity onPress={addLista} className="bg-orange-500 justify-center items-center p-2 rounded"><Text className="text-white">Adicionar Tarefa</Text></TouchableOpacity>
      
      <Text>Total de tarefas: {lista.length}</Text>
      {lista.map((item,index) => (
         <Text key={index}>{item}</Text>
      ))}
    </View>
  );
}
