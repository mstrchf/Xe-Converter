import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import Currency from '../components/Currency';

function Converter()  {
    return (
        <ScrollView style={styles.container}>
            <Currency />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5
    }
})

export default Converter;
