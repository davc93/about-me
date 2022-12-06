const API = 'https://www.davc93.dev/api/projects'
import {data} from './data'
export const getProjects = async () => {

    try {
        const response = await fetch(API)
        const data = await response.json()
        console.log(data)
        return data        
    } catch (error) {
        console.error("no esta funcionando la api, se devuelve data dummy")
        console.log(data)
        return data
    }

}