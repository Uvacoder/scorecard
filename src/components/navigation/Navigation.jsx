import React from "react";
import { HStack, IconButton, Spacer } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export function Navigation() {
  return (
    <HStack w="100%" justify="left" position="fixed" bottom="0">
      <IconButton icon={<HamburgerIcon />} />
      <Spacer />
    </HStack>
  );
}
