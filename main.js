document.addEventListener('DOMContentLoaded',()=> {

    const titulo = document.querySelector('.titulo')
    const subtitulo = document.querySelector('.subtitulo')
    const bio = document.querySelector('#bio')
    const imagem = document.querySelector('.imagem')
    // A partir daqui
    const blog = document.querySelector('.blog')
    const seguidores = document.querySelector('.seguidores')
    const seguindo = document.querySelector('.seguindo')
    const local = document.querySelector('.local')
    const publicRepos = document.querySelector('.publicRepos')
    const criadoEm = document.querySelector('.criadoEm')
    // Até aqui

    async function fecthData() {
        const responseUser = await fetch('https://api.github.com/users/MarcioAlex-x')
        const dataUser = await responseUser.json()
        // Dados do usuário
        imagem.src = dataUser.avatar_url
        imagem.alt = `Imagem de ${dataUser.login}`
        titulo.innerHTML = dataUser.name
        subtitulo.innerHTML = dataUser.login
        bio.innerHTML = dataUser.bio
        if(blog !== "")blog.innerHTML = `Blog: ${dataUser.blog}`
        seguidores.innerHTML = `Seguidores: ${dataUser.followers}`
        seguindo.innerHTML = `Seguindo: ${dataUser.following}`
        if(dataUser.location !== null) local.innerHTML = `Cidade: ${dataUser.location}`
        publicRepos.innerHTML = `Repositórios públicos: ${dataUser.public_repos}`
        criadoEm.innerHTML = `Criado em: ${new Date(dataUser.created_at).toLocaleDateString('pt-BR',{
            day:'2-digit',
            month:'long',
            year:'numeric'
        })}`
        // Dados dos repositórios
        const fetchRepos = await fetch('https://api.github.com/users/MarcioAlex-x/repos')
        const dataRepos = await fetchRepos.json()
        
    }

    fecthData()
    
})
