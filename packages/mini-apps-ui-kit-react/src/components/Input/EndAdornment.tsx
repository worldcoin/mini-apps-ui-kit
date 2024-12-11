import * as React from "react";

import { Tick } from "../Icons/Tick";
import PasteButton from "../PasteButton";

interface EndAdornmentProps {
  isValid?: boolean;
  showPasteButton?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  endAdornment?: React.ReactNode;
  className?: string;
}

const EndAdornment: React.FC<EndAdornmentProps> = ({
  isValid,
  showPasteButton,
  inputRef,
  endAdornment,
  className,
}) => {
  if (showPasteButton) {
    return <PasteButton inputRef={inputRef} className={className} />;
  }

  if (isValid) {
    return <Tick className="text-success-700" />;
  }

  if (endAdornment) {
    return endAdornment;
  }
  return null;
};

export default EndAdornment;
