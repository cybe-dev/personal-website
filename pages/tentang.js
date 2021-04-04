import {
  faCalendar,
  faMapMarked,
  faRing,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import BiodataList from "../src/components/biodata-list";
import Content from "../src/components/content";
import HeaderBar from "../src/components/header-bar";
import Subtitle from "../src/components/subtitle";

export default function Tentang() {
  return (
    <Fragment>
      <Head>
        <title>Tentang</title>
        <meta
          content="Saya dalah seorang fullstack developer"
          name="description"
        />
        <meta property="og:title" content="Tentang" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_HOSTNAME + "/tentang"}
        />
        <meta
          property="og:description"
          content="Saya dalah seorang fullstack developer"
        />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOSTNAME}/logo.png`}
        />
      </Head>
      <HeaderBar title="Tentang" description={`Profil singkat saya`} />
      <div className="w-full flex flex-col">
        <Content className="bg-white p-5 flex flex-col lg:flex-row mb-10">
          <div className="mx-auto w-32 lg:w-64 mb-2">
            <Image
              src="/test.jpg"
              width={240}
              height={320}
              className="w-full object-cover"
            />
          </div>
          <div className="flex-1 lg:ml-5">
            <Subtitle>Intro</Subtitle>
            <p className="text-gray-600 roboto mt-3 text-justify mb-5">
              Saya adalah fullstack app developer yang selalu berusaha melakukan
              yang terbaik disetiap pekerjaan. Menjadi seorang app developer
              adalah impian saya sejak dulu. Berkat rasa ingin tahu dan
              keinginan untuk terus belajar, sekarang saya berhasil menguasai
              beberapa pengetahuan dalam bidang pengembangan aplikasi.
            </p>
            <div className="mt-3">
              <BiodataList icon={faUser} text="Akbar Aditama Supriyono Putra" />
              <BiodataList icon={faCalendar} text="11 Agustus 2000" />
              <BiodataList icon={faMapMarked} text="Palembang" />
              <BiodataList icon={faRing} text="Lajang" />
            </div>
          </div>
        </Content>
      </div>
    </Fragment>
  );
}
