"use client";
import { useState } from "react";

export default function RandomSo() {
    const [count, setCount] = useState(6);
    const [range, setRange] = useState({ min: 1, max: 99 });
    const [numbers, setNumbers] = useState<number[]>([]);

    const random = () => {
        const res = Array.from({ length: count }, () =>
            Math.floor(Math.random() * (range.max - range.min + 1)) + range.min
        );
        setNumbers(res);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow">
            <h1 className="text-xl font-bold mb-4">🎲 Quay thử số ngẫu nhiên</h1>
            <div className="flex gap-3 mb-3">
                <input
                    type="number"
                    value={count}
                    onChange={(e) => setCount(Number(e.target.value))}
                    min={1}
                    max={10}
                    className="border px-2 py-1 rounded w-20"
                />
                <input
                    type="number"
                    value={range.min}
                    onChange={(e) => setRange({ ...range, min: Number(e.target.value) })}
                    className="border px-2 py-1 rounded w-20"
                />
                <input
                    type="number"
                    value={range.max}
                    onChange={(e) => setRange({ ...range, max: Number(e.target.value) })}
                    className="border px-2 py-1 rounded w-20"
                />
            </div>
            <button
                onClick={random}
                className="bg-green-600 text-white px-4 py-2 rounded w-full mb-3"
            >
                Quay thử
            </button>
            <div className="flex flex-wrap justify-center gap-2">
                {numbers.map((n, i) => (
                    <div
                        key={i}
                        className="w-12 h-12 flex items-center justify-center border rounded-full font-bold text-lg"
                    >
                        {n}
                    </div>
                ))}
            </div>
        </div>
    );
}
