import { StyleSheet, Dimensions } from 'react-native';

const PerfilStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#9ca4dc"
    },
    iconContainer: {
        flex: 1,
        backgroundColor: "#ffe2e2",
        borderBottomLeftRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },

    inputDatacontainer: {
        flex: 2,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
        paddingHorizontal: 40

    },

    aptoButton:{
        width: Dimensions.get('screen').width * 0.9,
        padding: 20,
        borderRadius: 30,
        marginTop: 10,
        alignItems: "center"
    },
    textAptoButtom: {
        color: "white"
    } 

});

export default PerfilStyles;