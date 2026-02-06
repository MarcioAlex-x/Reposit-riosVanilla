document.addEventListener('DOMContentLoaded',()=> {
    const titulo = document.querySelector('.titulo')
    const subtitulo = document.querySelector('.subtitulo')
    const bio = document.querySelector('#bio')

    const fecthData = async () =>{
        const responseUser = await fetch('https://api.github.com/users/MarcioAlex-x')
        const dataUser = await responseUser.json()
        
        const fetchRepos = await fetch('https://api.github.com/users/MarcioAlex-x/repos')
        const dataRepos = await fetchRepos.json()
    }

    fecthData()
    
})
