import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./navbar";
import Link from "next/link";

export default function Header() {
  const [offsetY, setOffsetY] = useState(0);
  const [transformHeader, setTransformHeader] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setOffsetY(window.pageYOffset);
    };
  }, []);

  useEffect(() => {
    if (transformHeader && offsetY === 0) {
      setTransformHeader(false);
    }
    if (!transformHeader && offsetY > 0) {
      setTransformHeader(true);
    }
  }, [offsetY]);
  return (
    <header
      className={
        transformHeader
          ? "flex bg-white shadow-md fixed top-0 left-0 right-0 z-20 transition-all duration-500"
          : "flex bg-white fixed top-0 left-0 right-0 z-20 transition-all duration-500"
      }
    >
      <div className="mx-5 w-full md:w-640 lg:w-768 xl:w-1024 md:mx-auto flex h-16 items-center justify-between">
        <Link href="/">
          <a className="w-8 h-8" title={`${process.env.NEXT_PUBLIC_NAME}`}>
            <Image
              src="/logo.png"
              alt={`Logo ${process.env.NEXT_PUBLIC_NAME}`}
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </a>
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
