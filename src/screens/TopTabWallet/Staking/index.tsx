import Box from '@commom/Box'
import React from 'react'
import ChooseCoin from '../P2p/ChooseCoin'
import SelectPackage from './SelectPackage'
import Amount from './Amount'
import Statistical from './Statistical'
import Scroll from '@commom/Scroll'

const Staking = () => {
    return (
        <Box flex={1} backgroundColor={'#edebf0'} marginTop={-20}>
            <Scroll flex={1}>
                <ChooseCoin />
                <SelectPackage />
                <Box
                    flex={1}
                    padding={20}
                    marginTop={20}
                    borderTopLeftRadius={20}
                    borderTopRightRadius={20}
                    backgroundColor={'white'}
                >
                    <Amount />
                    <Statistical />
                </Box>
            </Scroll>
        </Box>
    )
}

export default Staking