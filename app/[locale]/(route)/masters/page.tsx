import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Index");
  return (
    <main>
      <p>{t("masters")}</p>
    </main>
  );
};

export default Page;
