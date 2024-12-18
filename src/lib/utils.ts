import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"
import * as cheerio from 'cheerio';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function reconstructUrl({url}: { url: string[] }) {
    const decodedComponents = url.map((component) => decodeURIComponent(component));
    return decodedComponents.join("/");
}

export async function fetchPageTitle(url: string) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);
        return $('title').text();
    } catch (error) {
        console.error('Error fetching page:', error);
        throw error;
    }
}