import { StyleSheet, Dimensions } from 'react-native';

const LoginStyles = StyleSheet.create({
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
        marginTop: 50

    },
    inputDataLogin: {
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor:"white",
        borderRadius: 30,
        marginTop: 20,
        paddingLeft: 20,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: 11.95,
        
        elevation: 18,
    },

    loginButton:{
        width: Dimensions.get('screen').width * 0.9,
        padding: 20,
        borderRadius: 30,
        marginTop: 50,
        alignItems: "center"
    },

    registroButton:{
        width: Dimensions.get('screen').width * 0.9,
        padding: 20,
        borderRadius: 30,
        marginTop: 10,
        alignItems: "center"
    },

    textLoginButtom: {
        color: "white"
    },

    textRegistroButtom: {
        color: "white"
    }

});

export default LoginStyles;