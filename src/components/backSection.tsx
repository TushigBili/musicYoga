import React, { useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { BuildingLeft, BuildingSecLeft, Point, BuildingRight } from '../assets'

export const BackSection: React.FC<any> = () => {

    const verticalValue = new Animated.Value(0);

    const translateY = verticalValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -15]
    })

    useEffect(() => {
        Animated.timing(
            verticalValue,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start()
    }, [])

    return (
        <Animated.View style={[{ flexDirection: "row", justifyContent: "space-between", marginBottom: "25%" },
        {
            transform: [{
                translateY: translateY
            }]
        }
        ]}>
            <Animated.View style={{ flexDirection: "row", marginLeft: 28, justifyContent: 'space-evenly' }}>
                <Animated.View style={{ marginRight: 5 }}>
                    <BuildingLeft />
                </Animated.View>
                <Animated.View>
                    <BuildingSecLeft />
                </Animated.View>
            </Animated.View>
            <Animated.View style={{ flexDirection: "row", marginRight: 40, marginLeft: '20%' }}>
                <Animated.View >
                    <Point />
                </Animated.View>
                <Animated.View >
                    <BuildingRight />
                </Animated.View>
            </Animated.View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start'
    }
})