// @ts-ignore
import {LotteryResult} from "@types/lottery";

export function ResultsTable({ row }: {
    row: LotteryResult;
}) {

    return (
        <section className="bg-white rounded-2xl shadow-sm border p-3 sm:p-4 mb-4">
            <header className="flex items-center gap-2 mb-3">
                <h2 className="text-lg font-semibold">{row.province} — {formatDate(row.drawDate)}</h2>
            </header>
            <table className="w-full text-center text-sm">
                <caption className="sr-only">Kết quả xổ số {row.province} ngày {formatDate(row.drawDate)}</caption>
                <thead className="sr-only">
                <tr><th scope="col">Giải</th><th scope="col">Số trúng</th></tr>
                </thead>
                <tbody className="[&>tr]:border-b [&>tr:last-child]:border-0">
                <tr key={row.province} className="hover:bg-neutral-50">
                    <th scope="row" className="text-left py-2 pe-2 font-medium w-28">{row.province}</th>
                    <td className="py-2">
                        <div className="flex flex-wrap items-center justify-center gap-2">

                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
}

export function formatDate(dateInput: string | Date): string {
    const date = new Date(dateInput);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}