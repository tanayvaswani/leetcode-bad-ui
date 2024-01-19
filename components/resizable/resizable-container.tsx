import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { TabsDemo } from "../tabs/tabs-demo";

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="w-full">
      <ResizablePanel defaultSize={50} minSize={3}>
        <div className="flex h-full items-center justify-center py-2 pl-2 pr-1">
          <div className="font-semibold bg-neutral-800 w-full h-full rounded-md">
            <TabsDemo />
          </div>
        </div>
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={50} minSize={3}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={94} minSize={6}>
            <div className="flex h-full items-center justify-center pl-1 pb-1 pt-2 pr-2">
              <div className="w-full h-full font-semibold bg-neutral-800 rounded-md">
                <TabsDemo />
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={6} minSize={6}>
            <div className="flex h-full items-center justify-center pl-1 pt-1 pb-2 pr-2">
              <div className="w-full h-full font-semibold bg-neutral-800 rounded-md">
                <TabsDemo />
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
