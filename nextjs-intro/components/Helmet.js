import Head from "next/head";

export default function Helmet({ title }) {
  return (
    <Head>
      <title>{title} | next movies</title>
    </Head>
  );
}
