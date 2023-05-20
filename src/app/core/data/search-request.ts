export interface SearchRequest{
    responseTime?: number;
    minPrice?: number;
    maxPrice?: number;
    stars?:number;
    triType?:string;
    keyWorld?:string;
    params?:PaginationParams;
}


export interface PaginationParams{
    page?:string;
    pageSize?:string;
}