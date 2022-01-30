import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { db } from "../db/config";

export const PageLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { user, error } = await db.auth.signIn({ email });

      if (error) throw error;

      console.log(user);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  console.log("EMAIL", email);

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
        <Text>Supabase</Text>
        <Text>Login with Email</Text>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={() => handleLogin(email)}>Log In</Button>
      </VStack>
    </Flex>
  );
};
