export default function PrayerTimesSkeleton() {
  return (
    <div className="animate-pulse">
      {/* Header Skeleton */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-gray-50">
        <div className="space-y-3">
          <div className="h-8 w-64 bg-gray-100 rounded-lg" />
          <div className="h-4 w-48 bg-gray-100 rounded-lg" />
        </div>
        <div className="h-16 w-72 bg-gray-100 rounded-xl" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex flex-col border-l-2 border-gray-100 pl-4 space-y-4">
            <div className="h-3 w-16 bg-gray-100 rounded" />
            <div className="space-y-2">
              <div className="h-3 w-12 bg-gray-100 rounded" />
              <div className="h-8 w-20 bg-gray-100 rounded" />
            </div>
            <div className="pt-3 border-t border-gray-50 space-y-2">
              <div className="h-3 w-10 bg-gray-100 rounded" />
              <div className="h-5 w-16 bg-gray-100 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
