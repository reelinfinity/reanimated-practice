import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
} from "react-native-reanimated";

import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const SIZE = 100.0;
// const handleRotation = (progress: Animated.SharedValue<number>) => {
//   "worklet";
//   return `${progress.value * 2 * Math.PI}rad`;
// };
// const App = function () {
//   const progress = useSharedValue(1);
//   const scale = useSharedValue(2);

//   const reanimatedStyle = useAnimatedStyle(() => {
//     // console.log(progress.value * SIZE);
//     return {
//       opacity: progress.value,
//       borderRadius: (progress.value * SIZE) / 2,
//       transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
//     };
//   }, []);

//   useEffect(() => {
//     progress.value = withRepeat(withSpring(0.5), 3, true);
//     scale.value = withRepeat(withSpring(1), 3, true);
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, reanimatedStyle]} />
//     </View>
//   );
// };

const App = () => {
  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: () => {},
      onActive: () => {},
      onEnd: () => {},
    });
  return (
    <View style={styles.container}>
      <PanGestureHandler>
        <Animated.View style={styles.square} />
      </PanGestureHandler>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "rgba(0, 0, 256, 0.5)",
    borderRadius: 20,
  },
});
