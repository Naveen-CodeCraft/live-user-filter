let filter = document.getElementById('input')
let result = document.getElementById('result')
const listItem = []
chatlist()

async function chatlist(){
    const request =await fetch('https://randomuser.me/api?results=50')
    const {results} = await request.json()
   
    results.forEach(item =>{
        let li = document.createElement('li')

        listItem.push(li)

        li.innerHTML = `<img src="${item.picture.large}" alt="">
        <div class="user-info">
            <h4>${item.name.first} ${item.name.last}</h4>
            <p>${item.location.city}, ${item.location.country}</p>
        </div>`
        
        result.appendChild(li)
        
        
    })
    
    
}

filter.addEventListener('input', (e) => filterData(e.target.value))
function filterData(searchTerm){
   listItem.forEach(item => {
    
     if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
        item.classList.remove('hide')
     }else{
        item.classList.add('hide')
     }
   })
}
// setTimeout(() => {
//     listItem.forEach(item => console.log(item))
// }, 5000);



