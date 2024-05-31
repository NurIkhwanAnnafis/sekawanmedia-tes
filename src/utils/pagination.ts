export interface IPagination {
  page: number;
  total_pages: number;
  limit: number;
  total_data: number;
}

export const defaultPagination = {
  page: 1,
  total_pages: 1,
  limit: 10,
  total_data: 0,
};

export interface IData {
  data: Array<any>;
  pagination: IPagination;
}
