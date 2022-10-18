import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Table from '../components/Table'
import { useState, useEffect } from 'react'


const Home = () => {
    const [rowdata, setRowData] = useState([])

      const onAddRowClick = () => { //this function modifies the state of rowdata usinf setRowData
    setRowData(
      rowdata.concat({ college: "", location: "", psychology_program: "", social_life: "" })
    )
  }
    const columns = [
        {
          Header: "College",
          accessor: "college",
        },
        {
          Header: "Location",
          accessor: "location",
        },
        {
          Header: "Psychology Program",
          accessor: "psychology_program",
        },
        {
          Header: "social-life",
          accessor: "social_life",
        },
      ]
    


  return (
    <><div className={styles.container}>
          <Head>
              <title>Uni-research-table</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
      </div><main className={styles.main}>
              <h1>Uni-research-table</h1>
              <div className="container mx-auto">
                  <button
                      onClick={onAddRowClick} //button click call the onAddRowClick function
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                      Add Row
                  </button>
                  <div className="flex justify-center mt-8">
                      <Table columns={columns} data={rowdata} />
                  </div>
              </div>


          </main></>
    )
}

export default Home