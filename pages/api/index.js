import { useEffect, useState } from "react";
import Questions from '../../questions.json'

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// useEffect(() => {

//     // Perform localStorage action
//     const answer = localStorage.getItem("questionAnswers")

//     const prompt1 = "summarise the responses to every question asked. Conversationally address your response to the student who has answered the questions. Q: What size of school are you looking for? A:" + answer[0] +
//         "Q:What type of extra curricular activities are you interested in? A: " + answer[1] +
//         "Q:What kind of campus atmosphere are you looking for? A: " + answer[2] +
//         "Q:What types of majors and classes are you interested in? A: " + answer[3] +
//         "Q:What do you hope to gain from your college experience? A: " + answer[4]

// }, [])


export default async function handler(
    req, res
) {
    console.log("hello i am in api")
    //const tester = req.body.prompt
    const command = "summarise the responses to every question asked. Conversationally address your response to the student who has answered the questions.\n\n"
    const questions = Questions
    const answers = req.body.prompt
    //json.parse is converting the string into an array
    console.log("right before i fail")
    const answersArray = JSON.parse(answers)
    console.log("these are the answers", answers)
    // '["small", "dance", "fun", "computer science", "fun"]'
    

    //console.log(typeof JSON.parse(answers))

    let prompt = command
    for (let i = 0; i<questions.length;i ++){
        prompt= prompt + "Q: " + questions[i].question + " A: " + answersArray[i] + " \n"
    }

    console.log(prompt)

    const response1 = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,

    });
    const data = response1.data.choices[0].text.trimStart()
    res.status(200).json({data: data})


}