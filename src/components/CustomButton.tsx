import { FC, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label: string;
  loading?: boolean;
}

const CustomButton: FC<ButtonProps> = ({ id, label, loading, ...props }) => {
  return (
    <button
      id={id}
      disabled={loading}
      className={`rounded-xl bg-color3 px-6 py-2 text-[16px] font-medium capitalize tracking-wider text-color2 hover:bg-color4 hover:text-color1 disabled:cursor-not-allowed disabled:bg-zinc-400 ${
        loading && "cursor-not-allowed bg-zinc-400 text-zinc-800"
      }`}
      {...props}
    >
      {label}
    </button>
  );
};

export default CustomButton;
