import { VStack } from "@chakra-ui/react";
import { Navigation } from "../navigation";

export function MainLayout({ children }) {
  return (
    <VStack w="100%" maxW="100vw" h="100%" minH="100vh">
      <Navigation />
      {children}
    </VStack>
  );
}
