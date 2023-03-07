import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  type: string;
}

const CustomInput = ({ id, placeholder, type, ...props }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="input-border input h-10 w-7/12 max-w-full rounded-lg border-2 border-zinc-400 bg-[#EFFFFD] px-4 py-0 font-normal text-color1 placeholder-slate-400 md:text-[14px] lg:text-[15px]"
      {...props}
    />
  );
};

export default CustomInput;
