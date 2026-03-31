import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView>
      <Text>Subscription Details: {id}</Text>
      <Link href={"/"}>Go back</Link>
    </SafeAreaView>
  );
};

export default SubscriptionDetails;
