"use client";
import {LotteryResult} from "@types/lottery";
export function ItemResultsTable({ items }: {
    items: LotteryResult[];
}) {
    const list_prize = [
        {key: 'giai_tam' , name: "G.8", color: '#f40819'},
        {key: 'giai_bay' , name: "G.7"},
        {key: 'giai_sau' , name: "G.6"},
        {key: 'giai_nam' , name: "G.5"},
        {key: 'giai_tu' , name: "G.4"},
        {key: 'giai_ba' , name: "G.3"},
        {key: 'giai_nhi' , name: "G.2"},
        {key: 'giai_nhat' , name: "G.1"},
        {key: 'giai_dac_biet' , name: "G.ĐB", color: '#f40819'},
    ]


    return (
        <section className="bg-white rounded-2xl shadow-sm border p-3 sm:p-4 mb-4">
            <table className="w-full text-center text-sm font-bold">
                <thead  className="[&>tr>th]:border [&>tr:last-child]:border">
                <tr className="border-b pb-3">
                    <th scope="col" className="w-20">Giải</th>
                    {items.map( item => (
                        <th className="text-[24px] py-2 " scope="col" key={item._id}>{item.province}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="[&>tr>td]:border [&>tr:last-child]:border">
                {list_prize.map( _ => (
                    <tr key={_.key}>
                        <td className="p-2">{_.name}</td>
                        {items.map( (item: LotteryResult) => (
                            <td key={item._id}>
                                {item.prizes[_.key].map( (number: string, index: number) => (
                                    <div className={`text-[26px] py-2 ${_.color ? `text-red-500` : ""}` } key={index.toString()}>
                                        {number}
                                    </div>
                                ))}
                            </td>
                        ))}
                    </tr>
                ))}

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