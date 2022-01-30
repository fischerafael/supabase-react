import { Flex, Text, VStack } from "@chakra-ui/react";
import { useGetSession } from "../hooks/useGetSession";

export const PageAccount = () => {
  const {} = useGetSession();

  return (
    <Flex bg="gray.50" w="100vw" h="100vh" justify="center" align="center">
      <VStack
        bg="white"
        p="8"
        w="full"
        maxW="container.sm"
        maxH="50vh"
        align="flex-start"
      >
        <Text>Restricted</Text>
      </VStack>
    </Flex>
  );
};
