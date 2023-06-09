import { StyleSheet } from "react-native";
import { COLORS, SIZES, icons, FONT } from "../constants";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 750,
        width: 350,
    },
    headerModalView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 325,
        height: 65,
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: 'lightgray',
    },
    buttonClose: {
        backgroundColor: 'lightgray',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        verticalAlign: 'middle',
        marginLeft: 30,
        fontFamily: "DMMedium",
        fontSize: 20,
    },
    btnContainer: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
    btnImg: (dimension) => ({
        width: dimension,
        height: dimension,
        borderRadius: SIZES.small / 1.25,
    }),
});

export default styles;