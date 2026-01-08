import type { ReactElement } from "react";
interface QuestionComponentProps {
    svgIcon?: ReactElement;
    name: string;
};

function QuestionComponent({svgIcon, name} : QuestionComponentProps) {
    return (
        <button className="text-[14px] flex items-center gap-1 text-gray-400 cursor-pointer hover:text-accent-primary transition-colors duration-200">
            {svgIcon}
            {name}
        </button>
    );
};

export default QuestionComponent;