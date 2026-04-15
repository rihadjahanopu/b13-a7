import { fetchAnalyticsData } from '@/lib/mock-data';
import { AnalyticsChart } from '@/components/ui/AnalyticsChart';

export default async function Analytics() {
  const data = await fetchAnalyticsData();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col min-h-[70vh]">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Friendship Analytics</h1>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 flex-grow flex items-center justify-center">
        <div className="w-full max-w-lg">
          <AnalyticsChart data={data} />
        </div>
      </div>
    </div>
  );
}
