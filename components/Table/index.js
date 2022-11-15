import { useTable } from 'react-table'
// import styles from '../styles/Table.module.css'


function Table({ columns, data, updateMyData }) {

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
        updateMyData,
    })



    return <div>
        <table className="min-w-full divide-y divide-gray-200"
            {...getTableProps()}>
            <thead className="bg-white rounded text-deep-purple">
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                {...column.getHeaderProps()}
                            >
                                {column.render("Header")}
                            </th> //this renders the value of "Header" as defined in columns
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody className="text-deep-purple bg-deep-purple divide-y divide-gray-200" {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900"
                                        {...cell.getCellProps()}
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>







    </div>

}

export default Table