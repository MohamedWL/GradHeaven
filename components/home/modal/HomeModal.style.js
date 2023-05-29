import { StyleSheet } from "react-native";
import { COLORS, SHADOWS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.small,
        marginBottom: SIZES.small / 2,
        height: 625,
        width: 330,
    },
    btn: (name, activeTab) => ({
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
        borderRadius: SIZES.medium,
        marginLeft: 2,
        marginTop: 10,
        justifyContent: 'center',
        height: 70,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    }),
    btnText: (name, activeTab) => ({
        fontFamily: "DMMedium",
        fontSize: 20,
        color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
    }),
    butt: (name, activeTab) => ({
        paddingVertical: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        backgroundColor: name === "Donations" ? "#FFD700" : "#DC143C",
        borderRadius: SIZES.medium,
        marginLeft: 2,
        marginTop: 10,
        justifyContent: 'center',
        height: 70,
        ...SHADOWS.medium,
        shadowColor: COLORS.white,
    }),
    buttText: (name, activeTab) => ({
        fontFamily: "DMMedium",
        fontSize: 20,
        color: name === "Donations" ? "#AAA9B8" : "white",
    }),
});

export default styles;