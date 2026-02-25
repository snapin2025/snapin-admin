
import {PaginationModel} from "@/graphql-types";
import {useQueryParams} from "@/shared/model/useQueryParams";

type PaginationParams = Pick<PaginationModel, "page" | "pageSize">

const DEFAULT_PAGE = 1;
const DEFAULT_PAGE_SIZE = 10;

export const usePaginationParams = () => {
    const {searchParams, setQueryParams} = useQueryParams<PaginationParams>();


    const currentPage = Math.max(Number(searchParams.get("page")) || DEFAULT_PAGE, 1);
    const pageSize = Math.max(Number(searchParams.get("pageSize")) || DEFAULT_PAGE_SIZE, 1);

    // Функции для обновления пагинации
    const setPage = (page: number) => setQueryParams({page});

    const setPageSize = (size: number) =>
        setQueryParams({
            pageSize: size,
            page: 1, // сбрасываем страницу при изменении размера
        });

    return {
        currentPage,
        pageSize,
        setPage,
        setPageSize,
    };
};
