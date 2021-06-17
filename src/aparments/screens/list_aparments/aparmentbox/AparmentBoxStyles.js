import { StyleSheet, Dimensions } from 'react-native';

const aparmentboxstyles = StyleSheet.create({
    box: {
        height:150,
        display:"flex",
        flexDirection:"row",
        borderWidth: .5,
        borderColor: "gray",
        borderRadius: 10,
        overflow: "hidden",
        marginHorizontal: 20,
        width: Dimensions.get("screen").width - 40,
        backgroundColor: "transparent",
        marginTop: 20,
        alignItems: "center"
    },
    imageContainer: {
        width: Dimensions.get("screen").width / 2 - 40,
        height: 150,
        padding: 10
    },
    thumbnail:{
        width: Dimensions.get("screen").width / 2 - 60,
        height:130,
        resizeMode:"cover"
    },

    content:{
        width: Dimensions.get("screen").width / 2 - 40,
        justifyContent:"center",
        height: 150,
        padding: 10,
        flexDirection:"column",
    },

    title:{
        fontSize: 15,
        fontWeight: "600",
    },

    where:{
        fontSize: 12,
        fontWeight: "400",
    },
    
    price:{
        fontSize: 16,
        fontWeight: "600",
        color:"#1E96F0",
        marginTop:10
    },

    buttons: {
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editar:{
        backgroundColor:"green",
        borderRadius: 50,
        marginRight:10,
        paddingVertical:5,
        paddingHorizontal:15,
    },
    eliminar:{
        backgroundColor:"red",
        borderRadius: 50,
        paddingVertical:5,
        paddingHorizontal:15,
    }

});

export default aparmentboxstyles;