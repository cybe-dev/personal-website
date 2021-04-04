import { Fragment } from "react";
import Content from "../src/components/content";
import ServiceList from "../src/components/service-list";
import SkillList from "../src/components/skill-list";
import Title from "../src/components/title";
import service from "../src/service";
import PortfolioList from "../src/components/portfolio-list";
import Head from "next/head";

export async function getServerSideProps() {
  let skill,
    portfolio,
    error = {};
  try {
    skill = (await service.get("/skill")).data.data;
  } catch (e) {
    if (e.response) {
      if (e.response?.status !== 404) {
        error = {
          code: e.response?.status,
        };
      }
    }
  }
  try {
    portfolio = (await service.get("/portfolio")).data.data;
  } catch (e) {
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
      error,
      skills: skill || [],
      portfolio: portfolio || {},
    },
  };
}

export default function Home({ skills, portfolio }) {
  return (
    <Fragment>
      <Head>
        <title>{process.env.NEXT_PUBLIC_NAME}</title>
        <meta
          content="Saya adalah fullstack developer profesional yang bekerja secara freelance dan remote."
          name="description"
        />
        <meta property="og:title" content={process.env.NEXT_PUBLIC_NAME} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={process.env.NEXT_PUBLIC_HOSTNAME} />
        <meta property="og:description" content="Fullstack Developer" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/logo.png`}
        />
      </Head>
      <div className="h-screen w-full">
        <Content className="h-full flex flex-col justify-center">
          <div className="lg:w-1/2 flex lg:block flex-col items-center">
            <h1 className="text-3xl lg:text-5xl montserrat font-bold text-gray-800">
              {process.env.NEXT_PUBLIC_NAME}
            </h1>
            <h2 className="lg:text-xl mb-3 poppins text-gray-700 font-medium">
              {process.env.NEXT_PUBLIC_TITLE}
            </h2>
            <a
              title="Download CV"
              href="#"
              className="inline-block mt-2 py-1 px-3 lg:py-2 lg:px-5 bg-primary text-white rounded-sm roboto hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
        </Content>
      </div>
      <div className="w-full bg-white py-16">
        <Content>
          <Title>Pelayanan Terbaik Saya</Title>
          <div className="w-full grid grid-flow-row lg:grid-cols-3 gap-9 mt-8">
            <ServiceList image="/frontend.png" title="Frontend Developer">
              Merancang suatu perangkat lunak dari sisi client yang berhubungan
              dengan tampilan dan user interface.
            </ServiceList>
            <ServiceList image="/backend.png" title="Backend Developer">
              Merancang perangkat lunak dari sisi server yang berhubungan dengan
              logika dan database.
            </ServiceList>
            <ServiceList image="/mobile.png" title="React Native Developer">
              Merancang perangkat lunak mobile (Android & iOS) dengan framework
              React Native.
            </ServiceList>
          </div>
        </Content>
      </div>
      <div className="w-full bg-gray-100 py-16">
        <Content>
          <Title>Skill Saya</Title>
          <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
            {skills?.map((item, index) => (
              <SkillList
                key={`${index}`}
                name={item.name}
                percent={`${item.percent}%`}
              />
            ))}
          </div>
        </Content>
      </div>
      <div className="w-full bg-white py-16">
        <Content>
          <Title>Project Terakhir</Title>
          <div className="grid grid-flow-row grid-cols-1 gap-6 lg:gap-10 mt-10">
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
