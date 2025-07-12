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
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FiArrowLeft } from "react-icons/fi";
import * as yup from "yup";

interface InputPhoneFormProps {
  onNext: () => void;
}

const formSchema = yup.object().shape({
  phone: yup.string().required("Phone is required"),
});

export const InputPhoneForm = ({ onNext }: InputPhoneFormProps) => {
  const boxWidth = useBreakpointValue({ base: "90vw", sm: "400px" });
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    onNext();
  };

  return (
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
        Please enter your phone to sign in
      </Text>
      <Input
        placeholder="Your Phone Number"
        size="lg"
        mb={4}
        type="tel"
        {...register("phone")}
      />
      {errors.phone && (
        <Text className="text-red-500 text-sm">{errors.phone.message}</Text>
      )}

      <Button
        className="text-white w-full"
        colorScheme="blue"
        onClick={handleSubmit(onSubmit)}
      >
        Next
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
