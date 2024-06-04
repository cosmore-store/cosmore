import * as React from 'react';

interface TableDataProps {
    row: number;
    column: number;
    updateChartArray: Function;
}

export const TableData: React.FC<TableDataProps> = React.memo(
  ({ row, column, updateChartArray }) => {
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        updateChartArray(row, column, e.target.value);
      },
      [row, column, updateChartArray]
    );

    return (
      <td
        key={`${row}-${column}`}
        className="whitespace-nowrap bg-ui-fg-inverted-subtle text-center items-center tracking-wider"
      >
        <input
          className="pt-1 px-4 pb-1 border text-center bg-ui-bg-inverse-field rounded-md mt-1 appearence-none focus:outline-none focus:ring-0 focus:shadow-borders-interactive-with-active border-ui-border-base hover:bg-ui-bg-field-hover"
          type="text"
          placeholder="Cell"
          onChange={handleChange}
          autoComplete="off"
        />
      </td>
    );
  }
);
