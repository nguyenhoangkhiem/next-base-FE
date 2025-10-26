'use client';

import useSWR from 'swr';
import AdSlot from '@components/AdSlot';
import { fetcher } from './lib/fetcher';
import '@styles/globals.css';

interface Project {
  _id: string;
  name: string;
  description: string;
}

export default function Page() {
  // Gọi API backend qua SWR
  const { data, error, isLoading } = useSWR<Project[]>(
    `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'}/projects`,
    fetcher
  );

  if (error) return <div className="text-red-500 p-6">⚠️ Lỗi tải dữ liệu</div>;
  if (isLoading) return <div className="p-6">⏳ Đang tải...</div>;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold">🚀 Dự án nổi bật</h1>
          <p className="text-gray-600 mt-2">
            Danh sách các project hiển thị từ API NestJS.
          </p>
        </header>

        <section className="grid gap-4">
          {data && data.length > 0 ? (
            data.map((project) => (
              <div
                key={project._id}
                className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">Không có dữ liệu.</p>
          )}
        </section>

        {/* Quảng cáo hoặc placeholder */}
        <AdSlot />
      </div>
    </main>
  );
}
