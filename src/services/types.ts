interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ApiResponse<R> {
  info?: Info;
  results?: R[];
  error?: string;
}
