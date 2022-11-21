// Issue 1
// Using View directly in a server component doesn't work
// import { View } from "reshaped";
// Re-exporting View in a client component works
import { View } from "./View";

// Issue 2
// Using View.Item directly in a server component doesn't work
// const ViewItem = View.Item
// Re-exporting View.Item as it's own component in a client component does
import { ViewItem } from "./View";

export default function Home() {
  return (
    <View direction="row">
      <ViewItem columns={6}>Hello</ViewItem>  
      <ViewItem columns={6}>Hello</ViewItem>
    </View>
  );
}