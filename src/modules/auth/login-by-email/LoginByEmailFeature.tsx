"use client";

import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { InputEmailForm } from "./components/InputEmailForm";
import { EmailVerifyForm } from "./components/EmailVerifyForm";

export const LoginByEmailFeature = () => {
  const [step, setStep] = useState<"inputEmail" | "emailVerify">("inputEmail");

  const handleNextStep = () => {
    setStep("emailVerify");
  };

  const handleBackStep = () => {
    setStep("inputEmail");
  };

  return (
    <Flex className="min-h-screen items-center justify-center ">
      {step === "inputEmail" && <InputEmailForm onNext={handleNextStep} />}
      {step === "emailVerify" && <EmailVerifyForm onBack={handleBackStep} />}
    </Flex>
  );
};
