import { ImageSourcePropType } from "react-native";

// By declaring these types globally, any file in your project can use them without importing anything.
// You can just reference these types directly since TypeScript already knows about them everywhere.

declare global {
  interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
  }
}
