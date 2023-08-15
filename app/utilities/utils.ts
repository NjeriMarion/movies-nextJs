export async function getMovies(){
    try{
        const response = await fetch("/api/get-movies")
        const result = await response.json();
        return result ;
    }catch(error){
        return error;
    }
}