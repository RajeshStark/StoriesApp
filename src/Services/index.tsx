import axios from "axios";
import { STORY_API } from "../Utils/Config";


export const getStories = async (count: number | any) : Promise<any> => {
    try{
        const url = `${STORY_API}${count}`
        const resp = await axios.get(url)
        if(resp.status !== 200){
            throw new Error("Something wrong")
        }
        const data = await resp.data;
        return data;
    }
    catch(err){
        throw err
    }
}