import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full h-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Choice 1</TabsTrigger>
        <TabsTrigger value="password">Choice 2</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="h-full w-full flex items-center justify-center text-white">
          Show Content one
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="h-full w-full flex items-center justify-center text-white">
          Show Content Two
        </div>
      </TabsContent>
    </Tabs>
  );
}
