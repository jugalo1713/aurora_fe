"use client";
import { Select } from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

const LocaleSwitcherSelect = ({
  children,
  currentValue,
}: {
  children: React.ReactNode;
  currentValue: string;
}) => {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState(currentValue);

  const onSelectChange = (e: string) => {
    setCurrentLanguage(e);
    startTransition(() => {
      router.replace(`/${e}`);
    });
  };

  return (
    <Select value={currentLanguage} onValueChange={onSelectChange}>
      {children}
    </Select>
  );
};

export default LocaleSwitcherSelect;
