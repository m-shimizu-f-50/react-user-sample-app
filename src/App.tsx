import { ChakraProvider, Button } from "@chakra-ui/react";
import "./styles.css";
export default function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">ボタン---</Button>
    </ChakraProvider>
  );
}
