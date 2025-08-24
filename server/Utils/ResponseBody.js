export function apiResponse(data,message,error,code){
    return(
        {
            "data":data,
            "message":message,
            "error":error,
            "code":code
        }
    );
}