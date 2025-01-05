export type Props = {
  icon: React.ReactNode;
  title: string;
};

export const BaseEntity = ({ icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full h-full">{icon}</div>
      <span className="text-md">{title}</span>
    </div>
  );
};
