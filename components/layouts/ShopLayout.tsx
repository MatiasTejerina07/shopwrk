import Head from "next/head";
import { FC } from "react";

interface Props {
  children: any;
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>{/* NAVBAR */}</nav>
      <main
        style={{
          margin: "80 px auto",
          maxWidth: "1440px",
          padding: "0px 30px",
        }}
      >
        {children}
      </main>
      <footer>{/* FOOTER */}</footer>
    </>
  );
};
