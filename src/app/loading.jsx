export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
      <div className="w-full max-w-2xl text-center mb-12">
        <div className="h-10 w-64 bg-gray-200 animate-pulse rounded-md mx-auto mb-4"></div>
        <div className="h-4 w-96 bg-gray-200 animate-pulse rounded-md mx-auto relative overflow-hidden">
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]"></div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mb-16 w-full">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-40 h-24 bg-gray-100 rounded-xl animate-pulse shadow-sm flex flex-col items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-[shimmer_1.5s_infinite]"></div>
          </div>
        ))}
      </div>

      <div className="w-full text-left mb-6">
        <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md relative overflow-hidden">
           <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_infinite]"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center animate-pulse relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shimmer_1.5s_infinite]"></div>
            <div className="w-20 h-20 bg-gray-200 rounded-full mb-4"></div>
            <div className="h-5 w-32 bg-gray-200 rounded-md mb-2"></div>
            <div className="h-4 w-20 bg-gray-100 rounded-md mb-4"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
