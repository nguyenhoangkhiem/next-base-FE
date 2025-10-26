"use client";
import { useState } from "react";
import { numberToVietnamese } from "@lib/numberToText";
import ToolLayout from "@components/ToolLayout";

export default function DoiSoThanhChu() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const convert = () => {
        const n = Number(value.replace(/\D/g, ""));
        setResult(numberToVietnamese(n));
    };

    return (
        <ToolLayout title="🔢 Đổi số thành chữ (VNĐ)">
            <input
                type="text"
                placeholder="Nhập số cần đổi..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="border rounded px-3 py-2 w-full mb-3"
            />
            <button onClick={convert} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
                Chuyển đổi
            </button>
            {result && (
                <div className="mt-4 p-3 border rounded bg-gray-50 font-semibold">
                    {result}
                </div>
            )}
        </ToolLayout>

    );
}
