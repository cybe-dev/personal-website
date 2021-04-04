import Image from "next/image";

export default function ServiceList({ image, title, children }) {
  return (
    <div className="py-3 pr-3">
      <Image src={image} width={44} height={44} alt={title} />
      <div className="font-bold text-gray-700 montserrat mt-5">{title}</div>
      <div className="text-gray-600 text-justify roboto">{children}</div>
    </div>
  );
}
