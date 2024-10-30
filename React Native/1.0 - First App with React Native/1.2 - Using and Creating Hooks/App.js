import { SafeAreaView, StatusBar} from 'react-native';
import Home from './src/telas/Home'

export default function App() {
  return <SafeAreaView style={{ flex: 1 }}>
      <StatusBar/>
      <Home/>
    </SafeAreaView>
}
