import { useTable } from 'react-table'

function Table({columns, data}){

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
      } = useTable({
        columns,
        data,
      })



    return <div>
        <table className="min-w-full divide-y divide-gray-200"
            {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                            {...column.getHeaderProps()}
                        >
                        {column.render("Header")}
                        </th>
                    ))}
                    </tr>
                ))}
            </thead>
        </table>







    </div>

}

export default Table