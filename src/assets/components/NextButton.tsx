type Props = {
  disabled: boolean;
};

export default function NextButton({ disabled }: Props) {
  return (
    <button
      className={`bg-secondary-color text-main-color py-1 px-4 ${
        disabled ? "opacity-40" : ""
      }`}
      disabled={disabled}
    >
      NEXT
    </button>
  );
}
