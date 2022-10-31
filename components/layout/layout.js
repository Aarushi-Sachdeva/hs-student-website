import React, { useState } from 'react'
import { ColumnProvider } from '../context/global'

export const Layout = ({ children }) => {
    const [columnHeaders, setcolumnHeaders] = useState(() => {
        //if localStorage is not "undefined" (e.i. comes from the client)
        if
            (typeof localStorage !== "undefined") {
            // get the version of the table before refresh (oldState) from the client's local storage
            //if there is there is an oldState parse it and return, else return an empty list
            //const tableOldState = localStorage.getItem("table")
            const columnsOldState = localStorage.getItem("columns")
            // console.log("columnsOldState", columnsOldState)
            // console.log("tableOldState", tableOldState)
            if (columnsOldState != null && columnsOldState != "[]") {
                const columns = (JSON.parse(columnsOldState))
                return columns
            }
            // else if (columnsOldState != [] && columnsOldState != null && tableOldState.len == 0) {
            //     console.log("columnsOldState", columnsOldState)
            //     const columns = (JSON.parse(columnsOldState))
            //     return columns
            // }
            else {
                return []
            }
        }
        return [] //return empty list from server side
    })

    return (

        <ColumnProvider value={{ columnHeaders, setcolumnHeaders }}>{children}</ColumnProvider>
    )
}
