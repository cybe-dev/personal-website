import Content from "./content";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 py-5 mt-auto">
      <Content className="text-center text-white">
        &copy;2021 {process.env.NEXT_PUBLIC_NAME}, All Right Reserved
      </Content>
    </footer>
  );
}
