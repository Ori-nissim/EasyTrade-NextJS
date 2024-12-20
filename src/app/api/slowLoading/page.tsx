import { Suspense } from "react";
import SlowComponent from "./components/SlowComponent";


export default function SlowLoadingPage() {
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-2xl font-bold text-center">Slow Loading Example</h1>

      {/* Suspense wraps the component */}
      <Suspense fallback={<LoadingFallback />}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}

// Fallback component to show while waiting
function LoadingFallback() {
  return (
    <div className="text-center mt-5 text-blue-500">
      Loading slow component...
    </div>
  );
}
