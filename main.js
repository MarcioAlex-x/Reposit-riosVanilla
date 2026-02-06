document.addEventListener('DOMContentLoaded',()=> {
    const titulo = document.querySelector('.titulo')
    const subtitulo = document.querySelector('.subtitulo')
    const bio = document.querySelector('#bio')
    const imagem = document.querySelector('.imagem')

    const fecthData = async () =>{
        const responseUser = await fetch('https://api.github.com/users/MarcioAlex-x')
        const dataUser = await responseUser.json()
        imagem.src=dataUser.avatar_url
        imagem.alt=`Imagem de ${dataUser.login}`
        titulo.innerHTML = dataUser.name
        bio.innerHTML = dataUser.bio
        
        const fetchRepos = await fetch('https://api.github.com/users/MarcioAlex-x/repos')
        const dataRepos = await fetchRepos.json()

    }

    fecthData()
    
})
