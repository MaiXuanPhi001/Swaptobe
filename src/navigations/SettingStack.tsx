import { screens } from '@contants/screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Setting from '@screens/Setting'
import React from 'react'
import TurnOn2FA from '@screens/Setting/TwoFactorAuth/TurnOn2FA'

const Stack = createNativeStackNavigator()

const SettingStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={screens.SETTING} component={Setting} />
            <Stack.Screen name={screens.TURN_ON_2FA} component={TurnOn2FA} />
        </Stack.Navigator>
    )
}

export default SettingStack