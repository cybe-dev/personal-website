export default function MainWrapper({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen w-full overflow-x-hidden flex flex-col">
      {children}
    </div>
  );
}
