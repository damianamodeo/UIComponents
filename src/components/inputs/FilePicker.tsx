import { useState } from "react";
import  Button  from "./ButtonSimple";
// import { HelpText } from "../text/help-text";

export const FileInput = ({ id, helpText, fileTypes }: any) => {
  const [text, setText] = useState(helpText);

  return (
    <>
      <input
        id={id}
        type="file"
        accept={fileTypes}
        // hidden="hidden"
        onChange={(e: any) => {
          setText(e.target.value.match(/[/\\]([\w\d\s.\-()]+)$/)[1]);
        }}
      />
      <div className="my-3 flex flex-col content-center gap-5 text-center">
        <Button
          color="primary"
          action={() => {
            const fileInput: any = document.getElementById(id);
            fileInput.click();
          }}
        >
          Choose File
        </Button>
        <div>{text}</div>
      </div>
    </>
  );
};