import Link from "next/link";
import { Button } from "../ui/button";
import { AudioWaveform, ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip } from "../ui/tooltip";
import { ToolTipLC } from "../ui/tooltip/tooltip-lc";

const Navbar = () => {
  return (
    <nav className="top-0 px-4 w-full h-10 bg-neutral-900 flex items-center">
      <div className="flex items-center justify-between w-full">
        <div className="w-full flex items-center justify-between md:w-auto space-x-[1px]">
          <AudioWaveform className="h-6 w-6 text-white" />

          <div className="flex items-center p-2">
            <ToolTipLC title={"Problem List"} desc={"Expand panel"} />
            <ToolTipLC title={"A"} desc={"Previous question"} />
            <ToolTipLC title={"D"} desc={"Next question"} />
            <ToolTipLC title={"C"} desc={"Pick one"} />
          </div>
        </div>

        <div className="flex items-center p-2">
          <ToolTipLC title={"X"} desc={"Debug"} />
          <ToolTipLC title={"Run"} desc={"Run"} />
          <ToolTipLC title={"Submit"} desc={"Submit"} />
          <ToolTipLC title={"O"} desc={"Timer"} />
          <ToolTipLC title={"P"} desc={"Notes"} />
        </div>

        <div className="flex items-center p-2">
          <ToolTipLC title={"#"} desc={"Layout"} />
          <ToolTipLC title={"$"} desc={"Settings"} />
          <ToolTipLC title={"F"} desc={"Streak"} />
          <ToolTipLC title={"TT"} desc={"Profile"} />
          <ToolTipLC title={"Premium"} desc={""} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
