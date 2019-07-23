import { SFC } from 'react';
import { GridOptions } from 'ag-grid-community';
export interface DataGridProps extends GridOptions {
    gridOptions?: GridOptions;
}
export declare const DataGrid: SFC<DataGridProps>;
