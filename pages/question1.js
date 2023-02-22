import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NodeNextRequest } from 'next/dist/server/base-http/node'
import Questions from '../questions.json'

const Home = () => {
    const [textValue, setTextValue] = useState()
    const [answers, setAnswers] = useState([])
    const [counter, setCounter] = useState(0)




    function handleChange(e) { //onChange event
        setTextValue(e.target.value) // extract the value from the target that triggered an event
    }
    const router = useRouter()
    const reroute = () => { counter == questions.length - 1 ? router.push("/define-criteria") : null }

    const questions = Questions
        

    //when the "Done" button is clicked split textValue and merge splitted to the current state of ColumnHeaders
    //then reroute
    const handleClick = () => {
        if (textValue) {
            console.log(textValue)
            setAnswers([...answers, textValue])
            console.log(answers)
            setCounter(counter + 1)
            setTextValue('')

            //localStorage.setItem("answers", JSON.stringify(textValue))
            //this is how you merge an array with your current array state using set...
            reroute()
        }
        else {

        }

    }

    function handleKeyDown(e) {
        
        console.log('User pressed: ', e.key)
        if (e.key === 'Enter' || e.key === 'Return') {
            e.preventDefault()
            handleClick()
        }
    }

//     function getResponseFromOpenAI(){
//         var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");



//         var raw = JSON.stringify({
//         "prompt": answers
//         });

//         var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: raw,
//         redirect: 'follow'
//         };

//         fetch("/api", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     }

    useEffect(() => {
        console.log(answers.length)
        if (answers.length) {
            localStorage.setItem("questionAnswers", JSON.stringify(answers))
        }
    }
        , [answers])
    // useEffect(()=>{
    //     let list = JSON.parse(localStorage.getItem("questionAnswers"))
    //     console.log(typeof list)
    //     if (list && list.length === questions.length){
    //         const AIResponase = getResponseFromOpenAI()
    //     }

    // },[answers])

    
    while (counter < questions.length) {
        return <div>
            <div className='bg-primary opacity-100'>

                <div>

                </div>
                < div className={styles.container} >
                    <Head>
                        <title>Question {counter + 1}</title>
                        <meta name="description" content="Generated by create next app" />
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main className={styles.main}>
                        <div className='display: flex flex- items-center'>
                            <div>
                                <h1 className='text-primary-font font-family:Outfit font-style: font-semibold text-indigo-900 capitalize text-8xl'>
                                    {questions[counter].question}
                                </h1>
                                <br></br>
                                {(questions[counter].extraText) ?
                                    <h3 className='text-primary-font opacity-50 font-family:Outfit font-style: font-semibold text-indigo-900 capitalize text-2xl'>
                                        {questions[counter].extraText}
                                    </h3> : null
                                }

                            </div>
                            <div>
                                <form>
                                    <input key={counter} onKeyDown={handleKeyDown} className='mr-48 rounded-full box-border h-10 w-9/12 p-4 bg-input-colour centre text-white ' type="text" size={100} onChange={handleChange} placeholder='answer here' required></input>
                                    <button type="button" onClick={handleClick} className=' font-mono mt-2.5 text-primary-font bg-button p-1.5 rounded-lg bg-button hover:bg-gradient-to-r from-light-purple to-sea-green '>Next</button>

                                </form>
                            </div>
                        </div>
                    </main>
                </div >
            </div >
        </div >
    }
}
export default Home
