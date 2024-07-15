type TableProps<T> = {
  data: T[];
  pagination?: boolean;
  columns: TColumn[];
};

type TColumn = {
  name: string;
  key: string;
};

function getNestedValue(obj: any, key: string): any {
  return key.split(".").reduce((acc, part) => acc && acc[part], obj);
}

export const CustomTable = <T,>({
  data,
  columns,
  pagination,
}: TableProps<T>) => {
  return (
    <div>
      <h1>Table</h1>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={row?.id || i}>
              {columns.map((column) => (
                <td key={column.key}>{getNestedValue(row, column.key)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {pagination && <div>pagination</div>}
    </div>
  );
};
