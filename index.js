const apiUrl = "https://zip-img-api.dev.nikjos.in";

function showImages(){
    document.getElementById("content").innerHTML="<h3>Loading...</h3>"
    let url=document.getElementById("urlbox").value
    axios.get(`${apiUrl}/api?url=${url}`).then(res=>{
        console.log(res.data)
        document.getElementById("content").innerHTML = "";
        if(res.data.length>0){
            res.data.forEach(img => {
                document.getElementById("content").innerHTML+=`<img src="${img}"> <br><br>`
            });
        }
        else{
            document.getElementById("content").innerHTML=`<h4>No Images Found in the given ZIP File</h4>`
        }

        
    })
    .catch(err=>{
        console.log(err)
        document.getElementById("content").innerHTML=`<h4>Some Error Occured</h4>${err.response.data}`
    })
}

function clearData(){
    document.getElementById("urlbox").value=""
    document.getElementById("content").innerHTML=""
}