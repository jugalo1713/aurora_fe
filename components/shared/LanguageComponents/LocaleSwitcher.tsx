import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SupportedLanguages } from "@/constants";
import { useLocale } from "next-intl";
import Image from "next/image";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const LocaleSwitcher = () => {
  const currentLocale = useLocale();

  return (
    <LocaleSwitcherSelect currentValue={currentLocale}>
      <SelectTrigger className="w-[130px]">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {SupportedLanguages.length > 0 &&
          SupportedLanguages.map((language) => (
            <div key={language.label}>
              <SelectItem value={language.locale}>
                <div className="flex gap-2">
                  <Image
                    src={language.flag}
                    alt={`${language.label} flag`}
                    width={15}
                    height={15}
                  />
                  <span>{language.locale}</span>
                </div>
              </SelectItem>
            </div>
          ))}
      </SelectContent>
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
