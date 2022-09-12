import {API} from "../../backend"; 

export const getProducts = () => {
    console.log("hi");
    return fetch(`${API}product/?format=json`, {crossDomain:true,headers: {'Content-Type':'application/json'}, method: "GET"})
    .then((response) => {
        return response.json(); 
    })
    .catch((err)=> console.log(err)); 
};