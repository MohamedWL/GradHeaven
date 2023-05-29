import { useState } from 'react'
import { View, Text, FlatList, Modal, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons, images, SIZES } from '../../../constants';
import styles from './HomeModal.style';

function TabButton({ name, activeTab, onHandleSearchType }) {
    return (
        <TouchableOpacity
            style={styles.btn(name, activeTab)}
            onPress={onHandleSearchType}
        >
            <Text style={styles.btnText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    );
}

function OtherButton({ name, activeTab, onHandleSearchType }) {
    return (
        <TouchableOpacity
            style={styles.butt(name, activeTab)}
            onPress={onHandleSearchType}
        >
            <Text style={styles.buttText(name, activeTab)}>{name}</Text>
        </TouchableOpacity>
    );
}

const HomeModal = () => {
    const tabs = ["Your profile", "Find jobs externally", "Saved jobs", "Your interviews", "Settings"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    return (
        <View style={styles.container}>
            <FlatList
                data={tabs}
                vertical
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TabButton
                        name={item}
                        activeTab={activeTab}
                        onHandleSearchType={() => setActiveTab(item)}
                    />
                )}
                contentContainerStyle={{ columnGap: SIZES.small / 2 }}
                keyExtractor={(item) => item}
            />
            <View style={{ marginBottom: 15 }}>
                <OtherButton
                    name={"Donations"}
                    activeTab={activeTab}
                    onHandleSearchType={() => setActiveTab("Donations")}
                />
                <OtherButton
                    name={"Sign Out"}
                    activeTab={activeTab}
                    onHandleSearchType={() => setActiveTab("Sign Out")}
                />
            </View>

        </View>
    )
}

export default HomeModal
