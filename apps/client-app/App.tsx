import "./global.css";
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { PlaceholderNativeComponent } from '@mobilepantry/ui/native';
import { sampleApiFunction } from '@mobilepantry/api';

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_YOUR_CLERK_PUBLISHABLE_KEY_FROM_APP_JSON";

function SignInPlaceholder() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <View className="flex-1 justify-center items-center"><Text>Loading Clerk...</Text></View>;
  }

  if (!isSignedIn) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-lg mb-4">Welcome to Mobile Pantry Client App!</Text>
        <TouchableOpacity 
          className="bg-primary p-3 rounded-lg shadow"
          onPress={() => console.log("Sign in pressed - implement full flow with Clerk components or navigation.")}
        >
          <Text className="text-white font-bold">Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return null;
}

function MainAppContent() {
  const { signOut } = useAuth();
  const apiData = sampleApiFunction();

  return (
    <View className="flex-1 justify-center items-center bg-background p-4">
      <Text className="text-2xl font-bold text-primary mb-2">Client App Home</Text>
      <Text className="text-foreground mb-1">Welcome, Client!</Text>
      <Text className="text-foreground mb-1">Message from API: {apiData.message}</Text>
      <PlaceholderNativeComponent />
      <SignedIn>
        <View className="mt-4">
          <TouchableOpacity 
            className="bg-secondary p-3 rounded-lg shadow"
            onPress={() => signOut()}
          >
            <Text className="text-white font-bold">Sign Out</Text>
          </TouchableOpacity>
        </View>
      </SignedIn>
      <StatusBar style="auto" />
    </View>
  );
}

const App: React.FC = () => {
  if (!CLERK_PUBLISHABLE_KEY.startsWith("pk_")) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-red-500 text-center p-4">
          Clerk Publishable Key is not configured. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in .env or app.json.
        </Text>
      </View>
    );
  }
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <MainAppContent />
      </SignedIn>
      <SignedOut>
        <SignInPlaceholder />
      </SignedOut>
    </ClerkProvider>
  );
};

export default App;
