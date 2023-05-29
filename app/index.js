import { View, ScrollView, SafeAreaView, Text, Alert, Modal, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';
import HomeModal from '../components/home/modal/HomeModal';
import styles from './style';

const Home = () => {

    const router = useRouter();
    const [searchWord, setSearchWord] = useState("");
    const [modalVisible, setModalVisible] = useState(false);

    //const { modalVisible } = this.state;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible({ modalVisible: !modalVisible });
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.headerModalView}>
                            <Text style={styles.modalText}>Here is your menu!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible({ modalVisible: true })}>
                                <Image
                                    source={icons.close}
                                    resizeMode="cover"
                                    style={{ height: 20, width: 20 }}
                                />
                            </Pressable>
                        </View>
                        <HomeModal />
                    </View>
                </View>
            </Modal>

            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <TouchableOpacity style={styles.btnContainer}
                            onPress={() => {
                                setModalVisible(true)
                            }}>
                            <Image
                                source={icons.menu}
                                resizeMode="cover"
                                style={styles.btnImg("60%")}
                            />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (

                        <TouchableOpacity style={styles.btnContainer} >
                            <Image
                                source={images.profile}
                                resizeMode="cover"
                                style={styles.btnImg("100%")}
                            />
                        </TouchableOpacity>

                    ),
                    headerTitle: "",
                }}
            />


            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}>
                    <Welcome
                        searchWord={searchWord}
                        setSearchWord={setSearchWord}
                        handleClick={() => {
                            if (searchWord) {
                                router.push(`/search/${searchWord}`)
                            }
                        }}
                    />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Home;