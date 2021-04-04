import Content from "./content";

export default function HeaderBar({ title, description }) {
  return (
    <div className="w-full mt-16 header-bar bg-primary relative">
      <Content className="relative flex flex-col items-center justify-center h-44 text-center">
        <h1 className="text-2xl montserrat font-bold text-white">{title}</h1>
        <h2 className="text-gray-100 roboto text-center px-6">{description}</h2>
      </Content>
    </div>
  );
}
