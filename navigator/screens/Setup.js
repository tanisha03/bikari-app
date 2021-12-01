import React,{useState, useEffect} from 'react'
import { StyleSheet, View } from 'react-native'
import Container from '../../components/atoms/Container'
import Text from '../../components/atoms/Text'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { THEME } from '../../config/themes'
import StickyButton from '../../components/molecules/StickyButton'
import {moderateScale} from '../../config/scale';
import { AuthContext } from '../../context/AuthContext'
import Badge from '../../components/atoms/Badge'

const Setup = ({route, navigation}) => {
    const {setIsSignedIn} = React.useContext(AuthContext);
    const { step } = route.params;

    const [progressStep, setProgressStep] = useState(step);

    useEffect(() => {
        setProgressStep(step);
        return () => {
            setProgressStep(1);
        }
    }, [step]);

    return (
        <>
            <Container>
                <Text style={styles.heading}>Setup your business</Text>
                <View>
                    <View style={styles.listItem}>
                        { progressStep ===1 ? (
                            <View style={{...styles.counter}}>
                                <Text>1</Text>
                            </View>
                            ) : <Badge/>
                        }
                        <View>
                            <Text>Enter Business details</Text>
                            {
                                progressStep===1 && (
                                    <TouchableOpacity onPress={() => navigation.navigate('BusinessDetails')}>
                                        <Text style={{color: THEME.color.primary}}>START</Text>
                                    </TouchableOpacity>
                                )
                            }
                        </View>
                    </View>
                    <View style={styles.verticalRule}/>
                    <View style={styles.listItem}>
                        { progressStep <=2 ? (
                            <View style={{...styles.counter}}>
                                <Text>2</Text>
                            </View>
                            ) : <Badge/>
                        }
                        <View>
                            <Text>Create your first offer</Text>
                            {
                                progressStep===2 && 
                                (
                                    <View style={{flex: 1, flexDirection: 'row'}}>
                                        <TouchableOpacity onPress={() => navigation.navigate('NewOfferForm')}>
                                            <Text style={{color: THEME.color.primary, marginRight: 12}}>START</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setProgressStep(3)}>
                                            <Text style={{color: '#E2106C'}}>SKIP FOR NOW</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                    <View style={styles.verticalRule}/>
                    <View style={styles.listItem}>
                        { progressStep <=3 ? (
                            <View style={{...styles.counter}}>
                                <Text>3</Text>
                            </View>
                            ) : <Badge/>
                        }
                        <View>
                            <Text>Share on WhatsApp</Text>
                            {
                                progressStep===3 && 
                                <TouchableOpacity>
                                    <Text style={{color: THEME.color.primary}}>SHARE</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </Container>
            <StickyButton bg={progressStep===3 ? THEME.color.primary : THEME.color.disabled} color='white' onPress={() => setIsSignedIn(true)} disabled={progressStep!==3}>NEXT</StickyButton>
        </>
    )
}

export default Setup

const styles = StyleSheet.create({
    heading:{
        fontSize: moderateScale(20),
        marginBottom: moderateScale(24)
    },
    listItem: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center'
    },
    counter: {
        borderWidth: 1,
        paddingVertical:moderateScale(4, 0.2),
        paddingHorizontal:moderateScale(9, 0.2),
        width:moderateScale(28),
        height:moderateScale(28),
        borderRadius: 100,
        marginRight:moderateScale(8)
    },
    verticalRule: {
        borderWidth: 1,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: '#929292',
        height: moderateScale(100),
        marginLeft: 12,
        marginVertical: moderateScale(8)
    }
})
