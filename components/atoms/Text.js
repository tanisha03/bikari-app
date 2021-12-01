import React from 'react'
import { Text } from 'react-native'
import {moderateScale} from '../../config/scale';

export default props => <Text {...props} style={{fontFamily: 'Montserrat', color: props.color? props.color : '#333', fontSize: moderateScale(12), ...props.style}}>{props.children}</Text>;
