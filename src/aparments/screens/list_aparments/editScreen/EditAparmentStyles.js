import { StyleSheet, Dimensions } from 'react-native';

const EditAparmentStyles = StyleSheet.create({
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
        marginTop: 20

    },
    inputDataRegistro: {
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor:"white",
        borderRadius: 30,
        marginTop: 10,
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

   
    ingresoButton:{
        width: Dimensions.get('screen').width * 0.9,
        padding: 20,
        borderRadius: 30,
        marginTop: 20,
        alignItems: "center"
    },



    textIngresoButtom: {
        color: "white"
    }

});

export default EditAparmentStyles;