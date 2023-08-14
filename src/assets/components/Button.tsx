type Props = {
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ disabled, onClick, children }: Props) {
  return (
    <button
      className={`bg-secondary-color text-main-color py-1 px-4 ${
        disabled ? "opacity-40" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
