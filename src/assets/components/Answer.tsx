type Props = {
  children: React.ReactNode;
};

export default function Answer({ children }: Props) {
  return (
    <div className="border-secondary-color border-[1px] p-2 m-2 cursor-pointer">
      {children}
    </div>
  );
}
