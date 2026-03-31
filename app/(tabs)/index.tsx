import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

// Since the SafeAreaView is a third party component, the styled wrapper enables className support for it
const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text className='text-primary text-7xl font-sans-extrabold'>Home</Text>
      <Link
        href='/onboarding'
        className='mt-4 font-bold rounded bg-primary text-white p-4'
      >
        Go to Onboarding
      </Link>
      <Link
        href='/(auth)/sign-in'
        className='mt-4 font-bold rounded bg-primary text-white p-4'
      >
        Go to Sign In
      </Link>
      <Link
        href='/(auth)/sign-up'
        className='mt-4 font-bold rounded bg-primary text-white p-4'
      >
        Go to Sign Up
      </Link>
    </SafeAreaView>
  );
}
