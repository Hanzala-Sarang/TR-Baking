import { Utensils } from 'lucide-react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        <Utensils className="w-16 h-16 text-amber-600 loader" />
        <p className="mt-4 text-amber-700 animate-pulse">Loading delicious content...</p>
      </div>
    </div>
  );
};

export default Loader;