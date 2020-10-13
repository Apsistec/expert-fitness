/* Defines the product entity */
export interface Table {
  id?: number | null;
  tableName?: string | null;
  tableCode?: string | null;
  category?: string | null;
  tags?: string[] | null;
  releaseDate?: string | null;
  description?: string | null;
  starRating?: number | null;
}

// export interface TableResolved {
//   table?: Table;
//   error?: any;
// }
