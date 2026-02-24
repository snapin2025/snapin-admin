"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const useQueryParams = <T extends Record<string, string | number | boolean>>() => {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Обновление одного или нескольких параметров сразу
    const setQueryParams = (updates: Partial<T>) => {
        const params = new URLSearchParams(searchParams.toString());

        Object.entries(updates).forEach(([key, value]) => {
            if (value === undefined || value === null) {
                params.delete(key);
            } else {
                params.set(key, String(value));
            }
        });

        router.push(`?${params.toString()}`, { scroll: false });
    };

    return {
        searchParams,
        setQueryParams,
    };
};
