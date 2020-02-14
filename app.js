fetch('https://ghibliapi.herokuapp.com/films')
.then(res => {
    return res.json()
})
.then(data => {

    const container = document.getElementById('container')

    data.forEach(movie => {
        console.log(movie)

        let movie_div = document.createElement('div')
        movie_div.innerHTML = '<div class="title">' + movie.title + '</div><div class="description">' + movie.description + '</div>' 

        container.append(movie_div)
    });


    
})