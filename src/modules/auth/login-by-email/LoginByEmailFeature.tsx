"use client";

import { ROOTS_HOME } from "@/app/core/routes";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  Text,
  Link,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

export const LoginByEmailFeature = () => {
  const boxWidth = useBreakpointValue({ base: "90vw", sm: "400px" });
  return (
    <Flex className="min-h-screen items-center justify-center ">
      <Box
        className="bg-white p-4 sm:p-8 rounded-lg shadow-md w-full max-w-full"
        w={boxWidth}
      >
        <Link href={ROOTS_HOME} className="flex items-center">
          <FiArrowLeft />
          <Text className="text-sm">Back</Text>
        </Link>
        <Heading as="h2" size="lg" textAlign="center" mb={2}>
          Sign In
        </Heading>
        <Text color="gray.500" textAlign="center" mb={6}>
          Please enter your email to sign in
        </Text>
        <Input placeholder="Your Email" size="lg" mb={4} type="email" />
        <Button className="text-white w-full" colorScheme="blue">
          Next
        </Button>
        <Text className="flex items-center pt-2 justify-center text-sm text-gray-500">
          passwordless authentication methods.
        </Text>
        <Text className="text-sm pt-4">
          Don't having account?{" "}
          <Link className="text-blue-500" href="#">
            Sign up
          </Link>
        </Text>
      </Box>
    </Flex>
  );
};
