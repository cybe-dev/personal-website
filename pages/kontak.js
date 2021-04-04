import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { Fragment } from "react";
import BiodataList from "../src/components/biodata-list";
import Content from "../src/components/content";
import HeaderBar from "../src/components/header-bar";

export default function Kontak() {
  return (
    <Fragment>
      <Head>
        <title>Kontak</title>
        <meta
          content={`Hubungi saya untuk membahas tentang project anda bersama`}
          name="description"
        />
        <meta property="og:title" content="Kontak" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_HOSTNAME + "/kontak"}
        />
        <meta
          property="og:description"
          content={`Hubungi saya untuk membahas tentang project anda bersama`}
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/logo.png`}
        />
      </Head>
      <HeaderBar title="Kontak" description="Mari saling terhubung" />
      <div className="w-full flex flex-col">
        <Content className="bg-white p-5 mb-10 flex flex-col lg:flex-row">
          <div className="flex-1 lg:mr-10">
            <form>
              <div className="mb-3">
                <label>Nama</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-none"
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-none"
                />
              </div>
              <div className="mb-3">
                <label>Pesan</label>
                <textarea className="w-full p-2 border border-gray-300 rounded-none"></textarea>
              </div>
              <button
                type="submit"
                className="w-24 py-2 bg-primary rounded-none text-white hover:bg-blue-600"
              >
                Kirim
              </button>
            </form>
          </div>
          <div className="lg:w-2/5 mt-10 pt-10 border-t lg:border-0 lg:pt-0 lg:mt-6 order-2">
            <BiodataList
              icon={faFacebookF}
              text="Akbar Aditama Supriyono Putra"
            />
            <BiodataList icon={faInstagram} text="@akbaraditamasp" />
            <BiodataList icon={faEnvelope} text="Aditamaakbar1108@gmail.com" />
            <BiodataList icon={faMobileAlt} text="081271762774" />
          </div>
        </Content>
      </div>
    </Fragment>
  );
}
