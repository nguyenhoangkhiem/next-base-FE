import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Gộp className có điều kiện (chuẩn Tailwind + shadcn/ui)
 * Ví dụ: cn("p-2", condition && "bg-red-500")
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
