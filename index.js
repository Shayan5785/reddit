let api = "https://www.reddit.com/r/aww/.json"

const container = document.getElementById("container")
const text = document.getElementById("text")
const btn = document.getElementById("btn")

const fetchData = (api) =>{
    fetch(api)
    .then( res => res.json() )
    .then( data =>  {
        let a = data.data.children.slice(0,10)
        a.map( item => {
            const shortenTitle = `${item.data.title.substr(0, 54 )}...`;
            container.innerHTML += 
                `
                <div class="card">
                    <h2>${shortenTitle}</h2>
                    <img src="${item.data.thumbnail}" alt="no preview" id="image">
                    <a href="https://www.reddit.com${item.data.permalink}" target="_blank">Open</a>
                </div>
            `
        } )
    })
    .catch( err => console.log(err) )
}

const searchHandler = e =>{
    e.preventDefault();
    container.innerHTML = ""
    api = `https://www.reddit.com/r/${text.value}/.json`   
    fetchData(api)
    text.value = ""
}

btn.addEventListener('click',searchHandler)

fetchData(api)