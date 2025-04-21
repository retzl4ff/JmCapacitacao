import Head from "next/head";
import Body from "../components/Body";
import Header from "../components/Header";

function Page() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/link-logo.svg" type="image/x-icon" />
      </Head>
      <div className="d-flex" style={{ overflowX: "hidden" }}>
        <Header />
        <Body />
      </div>
    </>
  );
}

export default Page;
