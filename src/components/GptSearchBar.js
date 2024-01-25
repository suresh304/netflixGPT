import React from 'react'
import {  useSelector } from "react-redux";
import {lang} from "../utils/langConstants"
import {openai} from "../components/openai"


const GptSearchBar = () => {
    const selected_lang = useSelector(state=>state.lang)
    const chatHandler = async()=>{
        console.log("chat handler")
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: 'countries names start with alphabet k' }],
            model: 'gpt-3.5-turbo',
          });
        const json = await chatCompletion.json()
        console.log(json)
    }

  return (
    <div className="flex justify-center">
        <input type="text" placeholder={lang[selected_lang.name]?.searchPlaceHolder||lang["English"]?.searchPlaceHolder} className="rounded-md w-3/12 my-[10%] bg-blue-200  h-12"/>
        <button className= "bg-slate-500 h-12 w-24 rounded-md my-[10%] text-white" onClick={chatHandler}>{lang["English"]?.searchBtnText||lang[selected_lang.name]?.searchBtnText}</button>
    </div>
  )
}

export default GptSearchBar