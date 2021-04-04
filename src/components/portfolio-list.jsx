import Image from "next/image";

export default function PortfolioList({ title, url, image, text }) {
  return (
    <a className="flex group" href={url} target="_blank" title={title}>
      <div className="w-24 lg:w-32 mt-1">
        <Image
          src={process.env.NEXT_PUBLIC_BASE_URL + image}
          width={320}
          height={240}
          className="w-full object-cover"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className="flex-1 ml-3">
        <div className="text-gray-700 roboto font-bold group-hover:text-primary">
          {title}
        </div>
        <div className="text-gray-600 roboto">{text}</div>
      </div>
    </a>
  );
}
