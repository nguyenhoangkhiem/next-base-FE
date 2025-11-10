// app/page.tsx
import { ResultsTable} from "@components/ResultTable";
import { fetchTodayAll } from "@utils/fetcher";
import {ItemResultsTable} from "@components/ItemResultTable";

export const revalidate = 30; // ISR 30s

export default async function HomePage() {
    const data: any = await fetchTodayAll();
    return (
        <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8">
                {data.map((row: any, index: any) => (
                    <ItemResultsTable items={[row]} key={index} />
                    // <ResultsTable key={index} row={row} />
                ))}
            </div>
            <aside className="lg:col-span-4 space-y-4">
                <AdSlot id="aside-top" />
                <StatsCards stats={data.stats} />
                <ScheduleCard schedule={data.schedule} />
                <AdSlot id="aside-bottom" className="h-[250px]" />
            </aside>
        </div>
    );
}

function HeroCard({ data }: { data: any }) {
    const top = data.issueList?.[0];
    if (!top) return null;
    return (
        <div className="bg-gradient-to-br from-white to-neutral-50 border rounded-2xl shadow-sm p-4 mb-4">
            <h1 className="text-xl font-bold mb-1">KQXS hôm nay</h1>
            <p className="text-sm text-neutral-600 mb-3">Cập nhật tự động mỗi 30 giây.</p>
            <div className="flex flex-wrap gap-2 text-sm">
                <Badge label="Đặc biệt" value={top.rows?.[0]?.numbers?.[0] ?? "--"} />
                <Badge label="Giải nhất" value={top.rows?.[1]?.numbers?.[0] ?? "--"} />
            </div>
        </div>
    );
}

function Badge({ label, value }: { label: string; value: string }) {
    return (
        <div className="inline-flex items-center gap-2 border rounded-lg px-3 py-1 bg-white">
            <span className="text-neutral-600">{label}</span>
            <span className="font-mono font-semibold">{value}</span>
        </div>
    );
}

function AdSlot(props: any) { return null } // dùng Ad thực ở layout
function StatsCards(props: any) { return null }
function ScheduleCard(props: any) { return null }
