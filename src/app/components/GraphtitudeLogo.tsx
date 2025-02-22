import { BarChart2 } from "lucide-react";

export default function GraphtitudeLogo() {
  return (
    <div className="flex items-center gap-x-2 rtl:flex-row-reverse">
      <BarChart2 className="h-8 w-8 text-blue-600" />
      <h1 className="text-2xl font-bold text-textTitle">Graphtitude</h1>
    </div>
  );
}
