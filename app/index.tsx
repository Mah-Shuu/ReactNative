import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput} from "react-native";

export default function Index() {

  const [nome, setNome] = useState("");

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <Text className="text-white">{nome}</Text>
      <TextInput className="bg-white" onChangeText={(e) => setNome(e)}/>
      <TouchableOpacity className="bg-slate-700 p-4">
        <Text className="text-white">Click</Text>
      </TouchableOpacity>
    </View>
  );
}
