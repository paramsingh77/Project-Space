function loadingData(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=> {
                console.log("Printing the data");
                resolve()
            },3000)       
    })
}


