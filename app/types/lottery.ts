import {string} from "postcss-selector-parser";

export interface PrizeList {
    giai_dac_biet: string[];
    giai_nhat: string[];
    giai_nhi: string[];
    giai_ba: string[];
    giai_tu: string[];
    giai_nam: string[];
    giai_sau: string[];
    giai_bay: string[];
    giai_tam: string[];
    [key: string]: string[];
}
export interface LotteryResult{
    _id: string;
    code: string;
    province?: string;
    region?: string;
    drawDate: string;
    openTime: string;
    openNum: string[];
    prizes: PrizeList[];
    createdAt?: string;
    source?: string;
}