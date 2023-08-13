type Props = {
  disabled: boolean;
  onClick: () => void;
};

export default function NextButton({ disabled, onClick }: Props) {
  return (
    <button
      className={`bg-secondary-color text-main-color py-1 px-4 ${
        disabled ? "opacity-40" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      NEXT
    </button>
  );
}
