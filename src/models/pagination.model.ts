export interface IPaginationDefaultFilter {
  page: number;
  limit: number;
  sort_by: string;
  order: string;
}

export interface IPaginationMeta {
  page: number;
  limit: number;
  total_pages: number;
  total_data: number;
  sort_by: string;
  order: string;
}

export interface IPaginationResponse {
  code: number;
  message: string;
  meta: IPaginationMeta;
  data: Array<any>;
}
