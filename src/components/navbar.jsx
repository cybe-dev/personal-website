import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Fragment, useState } from "react";

const List = ({ href, title, children, onClick }) => {
  return (
    <li onClick={(e) => onClick(e)}>
      <Link href={href}>
        <a
          className="hover:text-primary font-medium text-gray-700 mb-2 lg:mb-0 block"
          title={title}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default function Navbar() {
  const [shown, setShown] = useState(false);
  return (
    <Fragment>
      <div
        className={
          shown
            ? "fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-50 block lg:hidden"
            : "fixed top-0 left-0 right-0 h-screen bg-black bg-opacity-50 hidden"
        }
        onClick={() => setShown(false)}
      ></div>
      <div>
        <button
          className="block lg:hidden w-4 h-4"
          type="button"
          onClick={() => setShown(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={
            shown
              ? "fixed w-4/5 md:w-72 lg:w-auto lg:static top-0 right-0 h-screen lg:h-auto bg-white p-5 lg:p-0 transition-all duration-500"
              : "fixed w-4/5 md:w-72 lg:w-auto lg:static top-0 -right-full h-screen lg:h-auto bg-white p-5 lg:p-0 transition-all duration-500"
          }
        >
          <button
            className="mb-3 flex items-center lg:hidden text-gray-600 text-sm roboto"
            type="button"
            onClick={() => setShown(false)}
          >
            <FontAwesomeIcon
              icon={faTimes}
              className="text-primary mr-1 inline-block"
              width={18}
              height={18}
            />{" "}
            Tutup
          </button>
          <ul className="lg:flex navbar exo border-t lg:border-t-0 pt-3 lg:pt-0">
            <List href="/" title="Home" onClick={() => setShown(false)}>
              Home
            </List>
            <List
              href="/tentang"
              title="Tentang"
              onClick={() => setShown(false)}
            >
              Tentang
            </List>
            <List href="/kontak" title="Kontak" onClick={() => setShown(false)}>
              Kontak
            </List>
            <List
              href="/project"
              title="Project"
              onClick={() => setShown(false)}
            >
              Project
            </List>
          </ul>
        </div>
      </div>
    </Fragment>
  );
}
