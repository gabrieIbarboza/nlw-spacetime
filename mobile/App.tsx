import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="bg-gray-500 flex-1">
      <Text className="text-gray-50 font-bold text-5xl">
        Hi, my name is Gabriel Barboza!
      </Text>
      <StatusBar style="light" translucent />
    </View>
  )
}
