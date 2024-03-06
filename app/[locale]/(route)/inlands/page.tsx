import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Index");
  return (
    <div>
      <p>{t("inland")}</p>
    </div>
  );
};

export default Page;
