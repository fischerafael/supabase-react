import { Button, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { db } from "../db/config";
import { useGetSession } from "../hooks/useGetSession";

export const PageAccount = () => {
  const { session } = useGetSession();

  const [data, setData] = useState({
    website: "",
    avatar: "",
  });

  console.log("PROFILE DATA", data);

  //   const handleGetProfile = async () => {
  //     try {
  //       const user = db.auth.user();

  //       if (!user) return;
  //     } catch (e) {}
  //   };

  //   useEffect(() => {
  //     handleGetProfile();
  //   }, [session]);

  //   const handleUpdate = async ({
  //     website,
  //     avatar,
  //   }: {
  //     website?: string;
  //     avatar?: string;
  //   }) => {
  //     try {
  //       const user = db.auth.user();

  //       const update = { id: user?.id, website, avatar, updated_at: new Date() };

  //       const { error, data } = await db
  //         .from("profiles")
  //         .upsert(update, { returning: "minimal" });

  //       console.log(error, data);
  //     } catch (e) {}
  //   };

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
        <Input
          value={data.website}
          onChange={(e) => setData({ ...data, website: e.target.value })}
        />
        {/* <Button onClick={() => handleUpdate(data)}>Atualizar</Button> */}
      </VStack>
    </Flex>
  );
};
