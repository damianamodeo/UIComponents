import { useRef } from "react";
import { useLongPress } from "./useLongPress";

type ButtonType = {
  children: string;
  clickAction?: any;
  longPressAction?: any;
  color: "primary" | "secondary" | "grey" | "error" | "warning" | "success";
  delay?: number;
  submit?: boolean;
};

const Button = ({
  clickAction,
  longPressAction,
  children,
  color,
  delay,
  submit,
}: ButtonType) => {
  const ref = useRef(document.createElement("button"));

  const colors: any = {
    primary: `bg-primary-500 hover:bg-primary-400 dark:bg-primary-400 dark:hover:bg-primary-400 `,
    secondary: `bg-secondary-500 hover:bg-secondary-400 dark:bg-secondary-300 dark:hover:bg-secondary-400 `,
    grey: `bg-grey-500 hover:bg-grey-400 dark:bg-grey-300 dark:hover:bg-grey-400 `,
    error: `bg-error-500 hover:bg-error-400 dark:bg-error-300 dark:hover:bg-error-400 `,
    warning: `bg-warning-500 hover:bg-warning-400 dark:bg-warning-300 dark:hover:bg-warning-400 `,
  };

  const onLongPress = () => {
    if (longPressAction) {
      longPressAction();
    }
    submit && ref.current.click();
  };

  const onClick = () => {
    if (clickAction) {
      clickAction();
    }
    submit && ref.current.click();
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: delay,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <>
      <button
        {...longPressEvent}
        type={`${submit ? "submit" : "button"}`}
        className={`${colors[color]} text-white font-medium text-sm px-5 py-2.5 focus:outline-none dark:text-black`}
        ref={ref}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
