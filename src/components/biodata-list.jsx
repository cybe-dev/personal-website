import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BiodataList({ icon, text }) {
  return (
    <div className="flex items-center mb-3">
      <div className="w-6 h-6 flex justify-center items-center bg-primary text-white">
        <FontAwesomeIcon icon={icon} width={14} height={14} />
      </div>
      <div className="font-bold roboto ml-3 text-gray-600">{text}</div>
    </div>
  );
}
