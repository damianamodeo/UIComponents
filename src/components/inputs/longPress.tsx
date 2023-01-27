import { useLongPress } from "./useLongPress";
// import {
//   PageContext,
//   MultipleEditContext,
// } from "../../../../../services/context/notAtHomesContext";
import { useContext } from "react";

export const LongPress = ({ action, children }: any) => {
  // const { page, setPage } = useContext(PageContext);
  // const { multipleEdit, setMultipleEdit } = useContext(MultipleEditContext);

  const onLongPress = () => {
    action();
  };

  const onClick = () => {
    console.log("click is triggered");
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 500,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);
  return <div {...longPressEvent}>{children}</div>;
};
