import Head from "next/head";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children?: any;
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
        <meta name="description" content={pageDescription} />
        <meta name="og:description" content={pageDescription} />
        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <nav style={{ margin: "100px" }}>
        <Navbar />
      </nav>

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
