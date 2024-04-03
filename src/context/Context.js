import { React, createContext, useState } from "react";
import { ToastAndroid } from "react-native";

export const AppContext = createContext();

export default function Context(props) {
  const [inputUrl, setInputUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isColor, setIsColor] = useState("");

  async function onPressHandler() {
    if (!inputUrl) return ToastAndroid.show("Enter video url", 10);

    if (
      ["pinterest.com", "pin.it"].some((url) => inputUrl.match(url)) != true
    ) {
      return ToastAndroid.show("Enter pinterest video url", 10);
    }

    try {
      setIsLoading(true);
      setVideoUrl("");
      const responce = await fetch(`${process.env.API_URL}`,
        {
          method: "POST",
          body: JSON.stringify({ url: inputUrl }),
          headers: {
            "Content-Type": "application/json",
            Origin: `${process.env.ORIGIN}`,
          },
        }
      );

      const videoUrl = await responce.json();
      if (videoUrl.message) {
        setIsLoading(false);
        return ToastAndroid.show(videoUrl.message, 10);
      }
      if (videoUrl.url) {
        // console.log(videoUrl.url);
        setIsLoading(false);
        setVideoUrl(videoUrl.url);
        setInputUrl("");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  return (
    <AppContext.Provider
      value={[
        isColor,
        setIsColor,
        inputUrl,
        setInputUrl,
        videoUrl,
        isLoading,
        onPressHandler,
      ]}
    >
      {props.children}
    </AppContext.Provider>
  );
}
