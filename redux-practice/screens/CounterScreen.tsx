import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { increment, decrement, selectCounterValue, selectCounterStep, incrementByAmount, setStep, reset } from '../store/counterSlice';

export default function CounterScreen() {
    const dispatch = useDispatch();
    const count = useSelector(selectCounterValue);
    const step = useSelector(selectCounterStep);

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>{count}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.decrementBtn]}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.buttonText}>- Giảm</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.incrementBtn]}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.buttonText}>+ Tăng</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.amountBtn]}
                    onPress={() => dispatch(incrementByAmount(5))}
                >
                    <Text style={styles.buttonText}>+ 5 Trực tiếp</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.button, styles.stepBtn]}
                    onPress={() => dispatch(setStep(2))}
                >
                    <Text style={styles.buttonText}>Đổi Step = 2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.stepBtn]}
                    onPress={() => dispatch(setStep(1))}
                >
                    <Text style={styles.buttonText}>Đổi Step = 1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, styles.resetBtn]}
                    onPress={() => dispatch(reset())}
                >
                    <Text style={styles.buttonText}>Reset về 0</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 16,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    incrementBtn: {
        backgroundColor: 'green',
    },
    decrementBtn: {
        backgroundColor: 'red',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    amountBtn: { 
        backgroundColor: 'blue', 
    },
    stepBtn: { 
        backgroundColor: 'gray',
    },
    resetBtn: { 
        backgroundColor: 'orange'
    },
});