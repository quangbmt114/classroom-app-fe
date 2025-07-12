"use client";

import React, { ReactNode } from "react";
import { NoSSR } from "./components/NoSSR";
import { ChakraProvider } from "./core/providers/ChakraProvider";

export default function AppWrappers({ children }: { children: ReactNode }) {
  return (
    <NoSSR>
      <ChakraProvider>
        <React.Fragment>{children}</React.Fragment>
      </ChakraProvider>
    </NoSSR>
  );
}
