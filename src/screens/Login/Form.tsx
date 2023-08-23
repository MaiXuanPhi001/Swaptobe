import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Input from '@commom/Input'
import Txt from '@commom/Txt'
import { screens } from '@contants/screens'
import { colors } from '@themes/colors'
import { navigate } from '@utils/navigationRef'
import React, { useState } from 'react'

const Form = () => {
    const [security, setSecurity] = useState<boolean>(true)

    return (
        <Box width={'100%'} paddingHorizontal={40} alignCenter>
            <Input
                radius={5}
                height={45}
                width={'100%'}
                borderWidth={1}
                hint={'Username'}
                tintColor={colors.gray2}
                borderColor={colors.gray}
                iconOne={require('@images/unAuth/user.png')}
            />
            <Input
                radius={5}
                height={45}
                width={'100%'}
                marginTop={15}
                borderWidth={1}
                hint={'Password'}
                security={security}
                tintColor={colors.gray2}
                borderColor={colors.gray}
                onPress={() => setSecurity(!security)}
                iconOne={require('@images/unAuth/lock.png')}
                iconTwo={security ?
                    require('@images/unAuth/view.png') :
                    require('@images/unAuth/hide.png')
                }
            />
            <Btn
                radius={5}
                height={45}
                marginTop={20}
                width={'100%'}
                backgroundColor={colors.darkViolet}
            >
                <Txt color={'white'} bold>
                    LOG IN
                </Txt>
            </Btn>
            <Btn marginVertical={20}>
                <Txt color={colors.violet}>
                    Forgot password ?
                </Txt>
            </Btn>
            <Btn onPress={() => navigate(screens.REGISTER)}>
                <Txt color={colors.violet}>
                    Do not have an account? <Txt bold color={colors.darkViolet}>REGISTER</Txt>
                </Txt>
            </Btn>
        </Box>
    )
}

export default Form