import { useContext, useEffect } from "react";
import { styles } from "../styles/home.style.js";
import VideoDetail from "./VideoDetail.js";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  ToastAndroid,
  View,
  StatusBar,
  ActivityIndicator,
  Image,
} from "react-native";
import { AppContext } from "../context/Context.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const [
    isColor,
    setIsColor,
    inputUrl,
    setInputUrl,
    videoUrl,
    isLoading,
    onPressHandler,
  ] = useContext(AppContext);

  const colorChanges = async () => {
    if (isColor == "#000000") {
      try {
        await AsyncStorage.setItem("theme-color", "#b22222");
        const value = await AsyncStorage.getItem("theme-color");
        setIsColor(value);
      } catch (error) {
        console.log(error);
      }
    }

    if (isColor == "#b22222") {
      try {
        await AsyncStorage.setItem("theme-color", "#000000");
        const value = await AsyncStorage.getItem("theme-color");
        setIsColor(value);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const checkColorINStorage = async () => {
      try {
        const value = await AsyncStorage.getItem("theme-color");
        if (value) {
          setIsColor(value);
        }
        if (!value) {
          setIsColor("#b22222");
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkColorINStorage();
  }, []);

  if (!isColor) return null;

  return (
    <>
      <ScrollView
        style={[styles.topContainer, { borderColor: isColor }]}
        keyboardShouldPersistTaps="handled"
      >
        <StatusBar backgroundColor={isColor} />
        <SafeAreaView>
          <View style={[styles.textContainer, { backgroundColor: isColor }]}>
            <Text style={styles.headingText}>Pinterest Video Saver</Text>
          </View>
          <View style={[styles.inputContainer, { borderColor: isColor }]}>
            <TextInput
              onChangeText={setInputUrl}
              value={inputUrl}
              style={styles.inputText}
              placeholder="paste video url"
            />
            <View style={styles.buttonContainer}>
              <Pressable
                style={[
                  styles.button,
                  {
                    borderColor: isColor,
                    backgroundColor: isColor,
                  },
                ]}
                onPress={onPressHandler}
              >
                <Text style={{ color: "#ffffff" }}>Get Video</Text>
              </Pressable>
            </View>
          </View>
          {isLoading && (
            <View style={{ paddingTop: 30 }}>
              <ActivityIndicator size="large" color={isColor} />
            </View>
          )}
          {videoUrl && <VideoDetail url={videoUrl} />}
        </SafeAreaView>
      </ScrollView>
      <Pressable
        onPress={colorChanges}
        style={{
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          bottom: 20,
          position: "absolute",
          marginHorizontal: 10,
        }}
      >
        {isColor == "#000000" ? (
          <Image
            source={require("../../assets/dark.png")}
            style={{ width: 35, height: 35 }}
          />
        ) : (
          <Image
            source={require("../../assets/bright.png")}
            style={{ width: 35, height: 35 }}
          />
        )}
      </Pressable>
    </>
  );
};

export default Home;
