type Props = {
  progression: number;
};
export default function ProgressionBar({ progression }: Props) {
  console.log(progression);
  const progressionValue: string = `w-[${progression}%]`;
  return (
    <div className="w-4/5 bg-secondary-color border-secondary-color border-[1px] h-4">
      <div className={`${progressionValue} h-full bg-main-color`}></div>
    </div>
  );
}
