import { Text } from 'react-native';
import { Container } from './src/App.styles';
import { Login } from './src/screens/Login';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme/default';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

