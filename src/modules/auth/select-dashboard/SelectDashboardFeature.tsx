"use client";

import { PATH_AUTH } from "@/app/core/routes";
import { cn } from "@/utils/className";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export const SelectDashboardFeature = () => {
  return (
    <div className="w-full h-screen justify-center items-center flex px-3 py-8 bg-g-0 md:py-10 lg:px-16">
      <div className="w-full gap-2 flex items-center justify-center lg:mt-12  lg:w-1/2 lg:p-12 rounded-lg p-4">
        <Box className=" rounded-lg p-6 lg:p-12 shadow-lg w-full">
          <Flex className=" flex-col gap-2 items-center">
            <Text className="text-2xl font-bold">Select Dashboard</Text>
            <Text className="text-sm text-gray-500">
              Please select dashboard to sign in
            </Text>
          </Flex>
          <Box className="mt-4">
            <Flex className="flex gap-4 w-full">
              <Link href={PATH_AUTH.loginByPhone} className="w-full">
                <Button
                  className={cn(
                    "w-full h-12 border-gray-100 rounded-lg border-2 lg:h-16"
                  )}
                >
                  Instructor
                </Button>
              </Link>

              <Link href={PATH_AUTH.loginByEmail} className="w-full">
                <Button
                  className={
                    "w-full h-12 border-gray-100 rounded-lg border-2 lg:h-16"
                  }
                >
                  Student
                </Button>
              </Link>
            </Flex>
          </Box>
        </Box>
      </div>
    </div>
  );
};
