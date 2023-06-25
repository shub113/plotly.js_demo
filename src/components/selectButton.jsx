import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function SelectButton({ buttonStyle = "", onButtonClick = () => {} }) {
    const [isSelected, setIsSelected] = useState(false);

    const buttonClass = twMerge(
        "border border-black p-2 rounded-lg bg-blue-400 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out",
        buttonStyle,
        isSelected && "bg-green-400 hover:bg-green-600"
    );

    return (
        <button
            onClick={() => {
                setIsSelected((prev) => !prev);
                onButtonClick();
            }}
            className={buttonClass}
        >
            Button
        </button>
    );
}
