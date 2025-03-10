import { View, StyleSheet, Platform } from "react-native";
import { BottomSheetModal, BottomSheetView, BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function ModalView({ children, reference, snapPoints = ["70"], }) {
  const { colorScheme } = useColorScheme();

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        snapPoints={snapPoints}
        ref={reference}
        backgroundStyle={{
          backgroundColor: colorScheme === "dark" ? "#1F2937" : "#ffffff",
          borderRadius: 10,
        }}
        index={0}
        handleComponent={() => (
          <View className="flex-row justify-center items-center py-[5px]">
            <View className="w-[30px] h-[5px] bg-gray-300 rounded-full" />
          </View>
        )}
        backdropComponent={(props) => (
          <View
            {...props}
            style={{ ...props.style, backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          />
        )}
        gestureHandlerProps={{ enabled: false }}
      >
        {
          Platform.OS === "ios" ? (
            <BottomSheetView style={styles.contentContainer}>
              {children}
            </BottomSheetView>
          ) : (
            <BottomSheetScrollView style={styles.contentContainer}>
              {children}
            </BottomSheetScrollView>
          )
        }




      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  handle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});