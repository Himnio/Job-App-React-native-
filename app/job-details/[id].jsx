import React from "react";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useCallback, useState } from "react";



const jobDetails = () => {
  return (
  <SafeAreaView>
    <Stack.Screen
      options={{
        headerTitle:"Job Details",
      }}
    />

    
  </SafeAreaView>
  
)};

export default jobDetails;
