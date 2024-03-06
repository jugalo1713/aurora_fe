import { useTranslations } from "next-intl";

type Props = {};

const Page = (props: Props) => {
  const t = useTranslations("Index");
  return (
    <>
      <main>
        <p>{t("imports")}</p>
      </main>
    </>
  );
};

export default Page;
