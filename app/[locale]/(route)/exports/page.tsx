import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Index");
  return (
    <main className=" ">
      <p>{t("exports")}</p>
    </main>
  );
};

export default Page;
