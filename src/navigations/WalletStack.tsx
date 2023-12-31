import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TopTabWallet from '@screens/TopTabWallet'
import React from 'react'

const Stack = createNativeStackNavigator()

const WalletStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.TOP_TAB_WALLET} component={TopTabWallet} />
        </Stack.Navigator>
    )
}

export default WalletStack