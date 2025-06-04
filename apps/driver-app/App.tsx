import "./global.css"; // Import NativeWind global styles
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut, useAuth } from '@clerk/clerk-expo';
import * as SecureStore from 'expo-secure-store';
import { PlaceholderNativeComponent } from '@mobilepantry/ui/native'; // Example from shared UI
import { sampleApiFunction } from '@mobilepantry/api'; // Example from shared API

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

// Replace with your actual Clerk Publishable Key from app.json or .env
const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_YOUR_CLERK_PUBLISHABLE_KEY_FROM_APP_JSON";

function SignInWithClerk() {
  // signOut and signIn are not typically used directly from useAuth for UI like this.
  // Clerk provides <SignIn /> and <SignUp /> components or navigation strategies.
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Loading Clerk...</Text>
      </View>
    );
  }
  // This is a simplified example. You'll likely want to use Clerk's hosted UI or build your own.
  // For this example, we'll just show a sign-in button if not signed in.
  // Clerk's <SignIn /> component can be used for a more complete UI.
  if (!isSignedIn) {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="text-lg mb-4">Welcome to Mobile Pantry Driver App!</Text>
        <TouchableOpacity 
          className="bg-primary p-3 rounded-lg shadow"
          onPress={() => {
            // This is a placeholder. In a real app, you'd navigate to a sign-in screen
            // or use Clerk's <SignIn /> component which handles the flow.
            // For simplicity, we're not implementing the full sign-in flow here.
            console.log("Sign in pressed - implement full flow with Clerk components or navigation.");
            // Example: signIn({ strategy: 'oauth_google' }); // if you have OAuth configured
          }}
        >
          <Text className="text-white font-bold">Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null; // Or your main app content if signed in, handled by <SignedIn>
}

function MainApp() {
  const { signOut } = useAuth(); // Get signOut here to use it
  const apiData = sampleApiFunction();

  return (
    <View className="flex-1 justify-center items-center bg-background p-4">
      <Text className="text-2xl font-bold text-primary mb-2">Driver App Home</Text>
      <Text className="text-foreground mb-1">Welcome, Driver!</Text>
      <Text className="text-foreground mb-1">Message from API: {apiData.message}</Text>
      <PlaceholderNativeComponent />
      <SignedIn>
        <View className="mt-4">
          <TouchableOpacity 
            className="bg-secondary p-3 rounded-lg shadow"
            onPress={() => signOut()} // Call the destructured signOut
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
          Clerk Publishable Key is not configured. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file or update app.json.
        </Text>
      </View>
    );
  }
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <MainApp />
      </SignedIn>
      <SignedOut>
        <SignInWithClerk />
      </SignedOut>
    </ClerkProvider>
  );
};

export default App;
