"use client";

import { PATH_AUTH } from "@/app/core/routes";
import { cn } from "@/utils/className";
import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const LoginFeature = () => {
  return (
    <div className="w-full h-screen flex px-3 py-8 bg-g-0 md:py-10 lg:px-16">
      <div className=" gap-2 flex items-center justify-center lg:mt-12 ">
        <Link href={PATH_AUTH.loginByPhone} className="w-full">
          <Button
            className={cn(
              "w-full h-12 border-gray-100 rounded-lg border-2 lg:h-16"
            )}
          >
            <FaPhone className="text-2xl" />
          </Button>
        </Link>

        <Link href={PATH_AUTH.loginByEmail} className="w-full">
          <Button
            className={
              "w-full h-12 border-gray-100 rounded-lg border-2 lg:h-16"
            }
          >
            <FiMail className="text-2xl" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
