import { Link, useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePostHog } from "posthog-react-native";

const SubscriptionDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("subscription_detail_viewed", { subscription_id: id });
  }, [id, posthog]);

  return (
    <SafeAreaView>
      <Text>Subscription Details: {id}</Text>
      <Link href={"/"}>Go back</Link>
    </SafeAreaView>
  );
};

export default SubscriptionDetails;
