export type Props = {
  active: boolean;
  icon: React.ReactNode;
  title: string;
};

export const BaseEntity = ({ active, icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-full">{icon}</div>
      <span className={`text-md ${active && "text-lab-pink-500"}`}>
        {title}
      </span>
    </div>
  );
};
