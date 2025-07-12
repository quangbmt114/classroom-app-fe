"use client";

import { PATH_AUTH } from "@/app/core/routes";
import { cn } from "@/utils/className";
import { Box, Button, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center px-3 py-8 bg-g-0 md:py-10 lg:px-16">
      <Box className="w-full lg:w-1/2 gap-6 flex flex-col m-[10%]">
        <div className="w-full flex flex-col items-center justify-center">
          <Text className="text-2xl font-bold">Sign in to class room app</Text>
          <Text className="text-sm text-gray-500">
            Please select one of the following options to sign in
          </Text>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-4">
          <Tooltip label="Login by phone">
            <Link href={PATH_AUTH.loginByPhone} className="w-full">
              <Button className="px-4 w-full h-20 border-gray-100 rounded-lg border-2 lg:h-20">
                <FaPhone className="text-2xl" />
              </Button>
            </Link>
          </Tooltip>

          <Tooltip label="Login by email">
            <Link href={PATH_AUTH.loginByMail} className="w-full">
              <Button className="px-4 w-full h-20 border-gray-100 rounded-lg border-2 lg:h-20">
                <FiMail className="text-2xl" />
              </Button>
            </Link>
          </Tooltip>
        </div>
      </Box>
    </div>
  );
}
