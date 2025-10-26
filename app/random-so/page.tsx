"use client";
import { useState } from "react";
import ToolLayout from "@components/ToolLayout";
import {motion} from "framer-motion";

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
        <ToolLayout title="🎲 Quay thử số ngẫu nhiên">
                    <div className="flex gap-3 mb-3 justify-center items-center">
                        <span>Bộ:</span>
                        <input
                            type="number"
                            value={count}
                            onChange={(e) => setCount(Number(e.target.value))}
                            min={1}
                            max={10}
                            className="border px-2 py-1 rounded w-16"
                        />
                        <span>Từ:</span>
                        <input
                            type="number"
                            value={range.min}
                            onChange={(e) => setRange({ ...range, min: Number(e.target.value) })}
                            className="border px-2 py-1 rounded w-16"
                        />
                        <span>Đến:</span>
                        <input
                            type="number"
                            value={range.max}
                            onChange={(e) => setRange({ ...range, max: Number(e.target.value) })}
                            className="border px-2 py-1 rounded w-16"
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
                            <motion.div
                                initial={{opacity: 0, scale: 0.9}}
                                animate={{opacity: 1, scale: 1}}
                                transition={{duration: 0.3}}
                                key={i}
                            >
                                <div
                                    key={i}
                                    className="w-12 h-12 flex items-center justify-center border rounded-full font-bold text-lg"
                                >
                                    {n}
                                </div>
                            </motion.div>

                        ))}
                </div>
        </ToolLayout>


    );
}
