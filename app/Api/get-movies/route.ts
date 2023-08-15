import { MOVIE_BASE_URL , REACT_API_KEY} from "@/app/config/config";

export async function GET(){
    if(!MOVIE_BASE_URL){
        return new Response("Movie base url not found",{
            status :404,
        });
    }
    if(!REACT_API_KEY){
        return new Response("Movie api token not found",{
            status :404,
        });
    }
    try{
        let base_url:string = MOVIE_BASE_URL 
        const request = await fetch(`${MOVIE_BASE_URL}3/movie/popular`, {
            method:'GET',
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${REACT_API_KEY}`
            }
        })
        const response = await request.json();
        return new response(JSON.stringify(response),{
            status:200,
            statusText:"Success"
        })
    }
    catch(error: any){
        return new Response(error,{
            status:500,
        });
    };
    
}