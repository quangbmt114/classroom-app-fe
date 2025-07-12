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

interface EmailVerifyFormProps {
  onBack: () => void;
}

export const EmailVerifyForm = ({ onBack }: EmailVerifyFormProps) => {
  const boxWidth = useBreakpointValue({ base: "90vw", sm: "400px" });

  const handleBack = () => {
    onBack();
  };

  return (
    <Box
      className="bg-white p-4 sm:p-8 rounded-lg shadow-md w-full max-w-full"
      w={boxWidth}
    >
      <Link onClick={handleBack} className="flex items-center">
        <FiArrowLeft />
        <Text className="text-sm">Back</Text>
      </Link>
      <Heading as="h2" size="lg" textAlign="center" mb={2}>
        Email Verification
      </Heading>
      <Text color="gray.500" textAlign="center" mb={6}>
        Please enter the code sent to your email
      </Text>
      <Input placeholder="Your Email" size="lg" mb={4} type="email" />
      <Button className="text-white w-full" colorScheme="blue">
        Submit
      </Button>
      <Text className="flex items-center pt-2 justify-center text-sm text-gray-500">
        passwordless authentication methods.
      </Text>
      <Text className="text-sm pt-4">
        Don&apos;t having account?{" "}
        <Link className="text-blue-500" href="#">
          Sign up
        </Link>
      </Text>
    </Box>
  );
};
