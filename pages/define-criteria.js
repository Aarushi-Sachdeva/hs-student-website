import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import React from 'react'
import { useColumns } from '../components/context/global'
import { useRouter } from 'next/router'


export default function Home() {


    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const [isSSR, setSSR] = useState(true) //isSSR is keeping track of whether we are Server Side Rendering or not
    const [summary, setSummary] = useState()

    const getResponseFromOpenAI = async (answers) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
      
        var raw = JSON.stringify({
          prompt: answers
        });
      
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        setLoading(true)
        const response = await fetch("/api", requestOptions);
        setLoading(false)
      
        return response;
      };
      
      useEffect(() => {
        const fetchData = async () => {
          let localAnswers = localStorage.getItem("questionAnswers");
          console.log("localAnswers", localAnswers)
          const AIResponse = await getResponseFromOpenAI(localAnswers);
          const data = await AIResponse.json();
          if (AIResponse) {
            console.log(data.data);
            setSummary(data.data);
          }
        };
        fetchData();
      }, []);
      

    useEffect(() => {
        // set to false, essentially telling it we are in the client
        //the empty [] tells means that as soon as the client is open set isSSR to false
        setSSR(false)
        const storageColumns = localStorage.getItem("columns")
        if (storageColumns != null) {
            console.log("storageColumns.length=", storageColumns.length)
        }
        if (storageColumns != null && storageColumns.length > 62) { //16 is a oddly specific num don't knwo where it is coming from
            router.push("/table-page")
        }
    }, [router])

    const [textValue, setTextValue] = useState()
    function handleChange(e) { //onChange event
        setTextValue(e.target.value) // extract the value from the target that triggered an event
    }

    //need to find a way to export columnHeaders so that it can be imported in table-page.js and passed as an
    // argument to the createColumns function
    const { columnHeaders, setcolumnHeaders } = useColumns()



    // useEffect(() => {
    //   if (textValue != null) {
    //     const splitted = textValue.split(',')
    //     setcolumnHeaders(splitted)
    //   }
    // }, [textValue])
    //idea: use the Context idea to export these variables https://dev.to/nazmifeeroz/using-usecontext-and-usestate-hooks-as-a-store-mnm
    useEffect(() => {
        if (columnHeaders.length)
            localStorage.setItem("columns", JSON.stringify(columnHeaders))

    }
        , [columnHeaders])

    const reroute = () => { textValue ? router.push("/table-page") : null }

    //write a function that renders a loading scree if loading is true and renders the rest of the page if loading is false
    function renderLoading(){
        return (
            <div className="flex min-h-screen flex-col items-center justify-center ">
            <div className="my-8 w-[60%] overflow-hidden rounded-md">
            <div className="relative space-y-1 rounded-md bg-white/5 p-0.5 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent"></div>
            </div>
            </div>
        )
    }

    //type out all contents of summary with animate typing across the screen
    const renderSummary = () => {
        return (
            <div className="text-white text-xl font-mono font-semibold border-r-2 border-black w-[64ch] overflow-hidden animate-typing">{summary}</div>
        )
    }

    const renderThis = () => {
        return (

            
            <><p><div className="text-white text-xl font-mono font-semibold border-r-2 border-black w-[34ch] whitespace-nowrap overflow-hidden animate-typing">{summary}</div></p>
            <h1 className='text-white font-family:Outfit font-style: font-semibold text-indigo-900 capitalize text-6xl text-left pr-52'>
            List out the broad criteria you have for your college experience
            </h1>
            <div>
                <form>
                <input className='mr-48 rounded-full box-border h-10 w-9/12 p-4 bg-input-colour centre text-white ' type="text" size={100} onChange={handleChange} placeholder='type a list of comma seperated words' required></input>
                <button type="button" onClick={handleClick} className=' font-mono mt-2.5 text-primary-font bg-button p-1.5 rounded-lg bg-button hover:bg-gradient-to-r from-light-purple to-sea-green '>go to table</button>
    
                </form>
            </div></>
            
        )
    }


    //when the "Done" button is clicked split textValue and merge splitted to the current state of ColumnHeaders
    //then reroute
    const handleClick = () => {
        if (textValue) {
            const splitted = textValue.split(',')
            setcolumnHeaders([...columnHeaders, ...splitted])//this is how you merge an array with your current array state using set...
            reroute()
        }
        else {

        }

    }

    function handleKeyDown(e) {
        console.log('User pressed: ', e.key)
        if (e.key === 'Enter') {
            handleClick()
        }
    }

    

    return (
        <div className='bg-primary opacity-100'>
    
    
        < div className={styles.container} >
        <Head>
            <title>Defining Criteria</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {loading ? renderLoading() : <></>}
        <main className={styles.main}>
        <div className='flex flex-col'>
            {!isSSR ? renderSummary(): <></>}
        </div>
        <div className='flex flex-col'>
                        <h1 className='text-white font-family:Outfit font-style: font-semibold text-indigo-900 capitalize text-6xl text-left pr-52'>
                            List out the broad criteria you have for your college experience
                        </h1>
                        <div>
                            <form>
                                <input className='mr-48 rounded-full box-border h-10 w-9/12 p-4 bg-input-colour centre text-white ' type="text" size={100} onChange={handleChange} placeholder='type a list of comma seperated words' required></input>
                                <button type="button" onClick={handleClick} className=' font-mono mt-2.5 text-primary-font bg-button p-1.5 rounded-lg bg-button hover:bg-gradient-to-r from-light-purple to-sea-green '>go to table</button>

                            </form>
                        </div>
                    </div>
    </main>
    </div >
    </div>
    )
    
}