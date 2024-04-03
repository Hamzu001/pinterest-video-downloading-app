import { styles } from "../styles/videoDetail.style.js";
import { Pressable, Text, View } from "react-native";
import React, { useContext } from "react";
import { Video, ResizeMode } from "expo-av";
import * as FileSystem from "expo-file-system";
import { shareAsync } from "expo-sharing";
import { AppContext } from "../context/Context.js";

const VideoDetail = ({ url }) => {
  const [isColor] = useContext(AppContext);

  const downloadVideo = async () => {
    const filename = "pinterest" + Math.floor(Math.random() * 111) + ".mp4";
    const result = await FileSystem.downloadAsync(
      `${url}`,
      FileSystem.documentDirectory + filename
    );
    // console.log(result.uri);
    shareAsync(result.uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <Video
          style={styles.video}
          source={{
            uri: `${url}`,
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
        />
      </View>
      <Pressable style={styles.btnContainer} onPress={downloadVideo}>
        <Text
          style={[
            styles.btnText,
            { borderColor: isColor, backgroundColor: isColor },
          ]}
        >
          Download Video
        </Text>
      </Pressable>
    </View>
  );
};

export default VideoDetail;
