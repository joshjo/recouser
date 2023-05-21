import { useFonts } from 'expo-font'
import { useColorScheme } from 'react-native'
import { TamaguiProvider, Theme, YStack } from 'tamagui'
import Map from './src/screens/Map'

import config from './tamagui.config'

export default function App() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <YStack f={1} jc="center" ai="center" backgroundColor={'$backgroundSoft'}>
          <Map />
        </YStack>
      </Theme>
    </TamaguiProvider>
  )
}
