// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as Provider } from "@chakra-ui/react";
import { theme } from "@/themes";

export const ChakraProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <Provider theme={theme}>{children}</Provider>
    </CacheProvider>
  );
};
