import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full rounded-lg border"
    >
      <ResizablePanel defaultSize={50} minSize={3}>
        <div className="bg-slate-100 flex h-full items-center justify-center py-2 pl-2 pr-1">
          <span className="font-semibold bg-red-400 w-full h-full rounded-md">
            One
          </span>
        </div>
      </ResizablePanel>
      <ResizableHandle />

      <ResizablePanel defaultSize={50} minSize={3}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={94} minSize={6}>
            <div className="flex bg-slate-100 h-full items-center justify-center pl-1 pb-1 pt-2 pr-2">
              <span className="w-full h-full font-semibold bg-red-400 rounded-md">
                Two
              </span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={6} minSize={6}>
            <div className="flex bg-slate-100 h-full items-center justify-center pl-1 pt-1 pb-2 pr-2">
              <span className="w-full h-full font-semibold bg-red-400 rounded-md">
                Three
              </span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
