import { useRef, forwardRef } from "react";

const Input = forwardRef(({ label, isTextarea, ...props }, ref) => {
  const inputStyles = "bg-stone-300 rounded py-2 px-3";
  return (
    <div className="flex flex-col">
      <label className="uppercase text-stone-600 rounded-lg mb-2 font-semibold">
        {label}
      </label>
      {isTextarea ? (
        <textarea className={inputStyles} {...props} ref={ref} />
      ) : (
        <input className={inputStyles} {...props} ref={ref} />
      )}
    </div>
  );
});

export default Input;
