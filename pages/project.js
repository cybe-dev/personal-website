import Head from "next/head";
import { Fragment } from "react";
import Content from "../src/components/content";
import HeaderBar from "../src/components/header-bar";
import PortfolioList from "../src/components/portfolio-list";
import service from "../src/service";

export async function getServerSideProps() {
  let portfolio;
  try {
    portfolio = (await service.get("/portfolio?offset=0&limit=50")).data.data;
  } catch (e) {
    console.log(e);
    if (e.response) {
      if (e.response?.status !== 404) {
        error = {
          code: e.response?.status,
        };
      }
    }
  }

  return {
    props: {
      portfolio: portfolio || {},
    },
  };
}

export default function Project({ portfolio }) {
  return (
    <Fragment>
      <Head>
        <title>Project</title>
        <meta
          content={`Daftar beberapa project yang telah saya kerjakan`}
          name="description"
        />
        <meta property="og:title" content="Project" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_HOSTNAME + "/project"}
        />
        <meta
          property="og:description"
          content="Daftar beberapa project yang telah saya kerjakan"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/logo.png`}
        />
      </Head>
      <HeaderBar
        title="Project"
        description={`Project yang telah saya kerjakan`}
      />
      <div className="w-full flex flex-col">
        <Content className="bg-white p-5 mb-10">
          <div className="grid grid-flow-row grid-cols-1 gap-6 lg:gap-10">
            {portfolio.rows?.map((item, index) => (
              <PortfolioList
                key={`${index}`}
                url={item.url}
                text={item.text}
                image={item.image}
                title={item.title}
              />
            ))}
          </div>
        </Content>
      </div>
    </Fragment>
  );
}
