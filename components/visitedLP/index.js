import React from 'react'
//import styles from '../styles/Home.module.css'
import Link from 'next/link'
function VisitedLP(styles) {
    return (
        <div className={styles.container} >
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Revisit your table
                </h1>
                <Link href="../pages/table-page.js">
                    <a>
                        <button>Your Table</button>
                    </a>
                </Link>

            </main>

        </div>



    )
}

export default VisitedLP