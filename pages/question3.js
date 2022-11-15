import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
    const [textValue, setTextValue] = useState()
    function handleChange(e) { //onChange event
        setTextValue(e.target.value) // extract the value from the target that triggered an event
    }
    const router = useRouter()
    const reroute = () => { textValue ? router.push("/define-criteria") : null }


    //when the "Done" button is clicked split textValue and merge splitted to the current state of ColumnHeaders
    //then reroute
    const handleClick = () => {
        if (textValue) {
            //this is how you merge an array with your current array state using set...
            reroute()
        }
        else {

        }

    }

    return <div>
        <div className='bg-primary opacity-100'>

            <div>

            </div>
            < div className={styles.container} >
                <Head>
                    <title>Question 3</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main className={styles.main}>
                    <div className='display: flex flex- items-center'>
                        <div>
                            <h1 className='text-primary-font font-family:Outfit font-style: font-semibold text-indigo-900 capitalize text-8xl'>
                                What type of class environment do I like?
                            </h1>
                        </div>
                        <div>
                            <form>
                                <input className='mr-48 rounded-full box-border h-10 w-9/12 p-4 bg-input-colour centre text-white ' type="text" size={100} onChange={handleChange} placeholder='answer here' required></input>
                                <button type="button" onClick={handleClick} className=' font-mono mt-2.5 text-primary-font bg-button p-1.5 rounded-lg bg-button hover:bg-gradient-to-r from-light-purple to-sea-green '>Next</button>

                            </form>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    </div >
}
export default Home