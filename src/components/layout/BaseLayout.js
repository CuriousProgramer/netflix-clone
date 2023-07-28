import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../utils/colors';

export default function BaseLayout({children}) {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            {children}
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});
