
let p = fetch("https://kontests.net/api/v1/all")

p.then((response) => {
    return response.json()
}).then((contests) => {
    console.log(contests)

    ihtml = ""


    for (item in contests) {
        console.log(contests[item])
    
    ihtml += `
       
    <div class="card" style="width: 22rem;">
   
    <div class="card-body">
    <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=1024x1024&w=is&k=20&c=ffZ9DMUWJuqSOgFds4ltM_71PRVfBBu5vhPznWewDOM=" class="card-img-top" alt="img"> 
      <h3 class="card-title">Topic : ${contests[item].name}</h3>
      <h6 class="card-text">Site : ${contests[item].site}</h6>
      <h6 class="card-text">Starts at : ${contests[item].start_time}</h6> 
      <h6 class="card-text">Ends at : ${contests[item].end_time}</h6>
      <a href="${contests[item].url}" class="btn btn-primary">Visit Site </a>
    </div>
  </div>
    `
    }
   
    cardcontainer.innerHTML = ihtml
})
