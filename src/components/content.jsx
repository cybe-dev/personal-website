export default function Content({ children, className }) {
  let css = "mx-5 z-10 md:w-640 lg:w-768 xl:w-1024 md:mx-auto";
  if (className) {
    css += " " + className;
  }
  return <div className={css}>{children}</div>;
}
