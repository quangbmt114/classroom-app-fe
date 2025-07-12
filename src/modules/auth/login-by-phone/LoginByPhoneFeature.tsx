"use client";

import { Flex } from "@chakra-ui/react";
import { InputPhoneForm } from "./components/InputPhoneForm";
import { PhoneVerifyForm } from "./components/PhoneVerifyForm";
import { useState } from "react";

export const LoginByPhoneFeature = () => {
  const [step, setStep] = useState<"inputPhone" | "phoneVerify">("inputPhone");

  const handleNextStep = () => {
    setStep("phoneVerify");
  };

  const handleBackStep = () => {
    setStep("inputPhone");
  };

  return (
    <Flex className="min-h-screen items-center justify-center ">
      {step === "inputPhone" && <InputPhoneForm onNext={handleNextStep} />}
      {step === "phoneVerify" && <PhoneVerifyForm onBack={handleBackStep} />}
    </Flex>
  );
};
