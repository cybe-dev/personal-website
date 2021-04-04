export default function SkillList({ name, percent }) {
  return (
    <div>
      <div className="flex justify-between">
        <span className="font-bold roboto text-gray-700">{name}</span>
        <span className="roboto text-gray-600">{percent}</span>
      </div>
      <div className="w-full bg-gray-200 h-2">
        <div
          className="h-full bg-primary-tint"
          style={{ width: percent }}
        ></div>
      </div>
    </div>
  );
}
