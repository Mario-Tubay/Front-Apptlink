
import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";

export default function HeaderTabs({ items, setActiveTab, activeTab }) {
  useEffect(() => {
    if (!activeTab && items.length > 0) {
      setActiveTab(items[0].name);
    }
  }, []);

  const stylesBtn = {
    btnActive: `w-3/6 px-10 py-2.5 border border-cyan-400 bg-cyan-400`,
    btnInactive: `w-3/6 px-10 py-2.5 border border-cyan-400`,
  };
  const stylesText = {
    textActive: `text-white font-bold text-sm text-center`,
    textInactive: `text-cyan-400 font-bold text-sm text-center`,
  };

  return (
    <View className="flex-row items-center justify-center mt-2">
      <Pressable
        key={1}
        onPress={() => setActiveTab(items[0].name)}
        className={`rounded-l-md ${items[0].name === activeTab ? stylesBtn.btnActive : stylesBtn.btnInactive}`}
      >
        <Text
          className={`${items[0]?.name === activeTab ? stylesText.textActive : stylesText.textInactive}`}
        >
          {items[0].title}
        </Text>
      </Pressable>
      <Pressable
        onPress={() => setActiveTab(items[1].name)}
        className={`rounded-r-md ${items[1]?.name === activeTab ? stylesBtn.btnActive : stylesBtn.btnInactive}`}
      >
        <Text
          className={`${items[1]?.name === activeTab ? stylesText.textActive : stylesText.textInactive}`}
        >
          {items[1].title}
        </Text>
      </Pressable>
    </View>
  );
}
