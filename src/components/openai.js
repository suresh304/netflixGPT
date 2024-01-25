import {OPENAI_KEY} from "../utils/constants"
import {OpenAI } from "openai"
 export const openai = new OpenAI({
    apiKey: OPENAI_KEY,
    dangerouslyAllowBrowser: true
    // This is the default and can be omitted
  });