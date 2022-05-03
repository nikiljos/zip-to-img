function showImages(){
    document.getElementById("content").innerHTML=""
    let url=document.getElementById("urlbox").value
    axios.get(`https://zip-img-extractor.herokuapp.com/api?url=${url}`).then(res=>{
        console.log(res.data)
        res.data.forEach(img => {
            document.getElementById("content").innerHTML+=`<img src="${img}"> <br><br>`
        });
    })
    .catch(err=>{
        console.log(err)
        document.getElementById("content").innerHTML=`<h4>Some Error Occured</h4>${err.response.data}`
    })
}

function clearData(){
    console.log("trigger")
    document.getElementById("urlbox").value=""
    document.getElementById("content").innerHTML=""
}