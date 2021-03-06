const API_key = "75056b99a5ba4bfa18ac24ffdc0ad9f5";
const url_genres = "https://api.themoviedb.org/3/genre/movie/list?api_key="+API_key+"&language=en-US";
const url_config = "https://api.themoviedb.org/3/configuration?api_key="+API_key+"";
let html = "",
    html_2 ="",
    html_images = "",
    movies = {
        "id" : {},
        "title" : {},
        "release_date" : {},
        "poster_path" : {}
    };

fetch(url_config)
    .then(resp => resp.json())
    .then(function(data) {
        //console.log(data);
        base_url = data.images.base_url;
        poster_size = data.images.poster_sizes[2];
    })

fetch(url_genres)
    .then(resp => resp.json())
    .then(function(data) {
        //console.log(data);
        //console.log(typeof(data));
        for(let i = 0, genresLength = data.genres.length; i < genresLength; i++) {
            //console.log(data.length)
            html = '<option value="'+data.genres[i].id+'">'+ data.genres[i].name+'</option>';
            genres.innerHTML += html;
        }
    });

submit.onclick = () => {
    all_films.innerHTML = "";
    const url_mvoviesByGenres = "https://api.themoviedb.org/3/discover/movie?api_key="+API_key+"&with_genres="+genres.value+"";
    //console.log(url_mvoviesByGenres);
    fetch(url_mvoviesByGenres)
        .then(response => response.json())
        .then(function(data){
            console.log(data.results);
            //console.log(typeof(data));
            for(let j = 0, moviesByGenresLength = data.results.length; j < moviesByGenresLength; j++) {
                html_2 = '<div class="card_film">';
                html_2 += '<div class="card"> <img class="img_card" src="'+base_url+poster_size+'/'+data.results[j].poster_path+'"> </div>';
                html_2 += '<p id="'+data.results[j].id+'" class="card_title">'+data.results[j].title+'</p>';
                html_2 += '<p class="card_date">'+data.results[j].release_date+'</p>';
                html_2 += '</div>';
                all_films.innerHTML += html_2;
            }
        })
}


/*
            for(let g = 0, moviesIdLength = Object.keys(movies.id).length; g < moviesIdLength; g++) {
                url_imagesByMovies += "https://api.themoviedb.org/3/movie/"+movies.id[g]+"/images?api_key="+API_key+"&language=en-US";
                fetch(url_imagesByMovies)
                    .then(response => response.json())
                    .then(function(data) {
                        console.log(data);
                    })
            }

    let url_imagesByMovies = "";
    url_imagesByMovies += "https://api.themoviedb.org/3/movie/"+data.results[j].id+"/images?api_key="+API_key+"&language=en-US";
    fetch(url_imagesByMovies)
        .then(resp => resp.json())
        .then(function(data2) {
            console.log(data2);
            html_images = "<img src=>";
            imagesByMovies.innerHTML += html_images;
        })
*/
/*
const url = 'https://ghibliapi.herokuapp.com/films/';
let html ="";
//create an array
let asProducer = [];
let movies = [];
fetch(url)
    .then(resp => resp.json())
    .then(function(data) {
        //console.log(data);

        (function() {
            for(i = 0, arrayLength = data.length; i < arrayLength; i++) {
                //console.log(data[i].producer);
                
                // put in variable a the producer
                let sApiProducer = data[i].producer;
    
                //see if producer is already in array 
                if (asProducer.includes(sApiProducer)) {
                    null;
                } else {
                    asProducer.push(sApiProducer);
                }
            }
        }());
        //console.log(asProducer);

        (function(){
            for (p = 0, asProdLength = asProducer.length; p < asProdLength; p++) {
                //console.log(asProdLength);
                //console.log(html);
                html = '<li class="l-producers" id="producer'+p+'" value="'+p+'"> <a href="#"> ' + asProducer[p] + '</a> </li>';
                producers = document.getElementById("producers");
                producers.innerHTML += html;
            }
        }());
        let list_producers = document.getElementsByClassName('l-producers');
        console.log(list_producers);
        producer0.onclick = () => {
            let producerID = producer0.getAttribute("value");
            movies.push(data.filter(datas => datas.producer == asProducer[producerID]));
            console.log(movies);
            html = '<table>';
            html += '<tr>';
            html += '<th> Title </th>';
            html += '<th> Description </th>';
            html += '</tr> <tr>';
            for(i = 0, numberOfMovies = movies.length; i < numberOfMovies; i++) {
                html += '<td>' + movies[i].title + ' </td>';
                html += '<td>' + movies[i].description + ' </td>';
            }
            html += '</tr>';

            let movies_HTML = document.getElementById("t-movies");
            movies_HTML.innerHTML = html;
        };
        producer1.onclick = () => {
            console.log(producer1.getAttribute("value"));
        };
        producer2.onclick = () => {
            console.log(producer2.getAttribute("value"));
        };
        /*CheckProducer(2);
        console.log(list_producers.onclick);
        function CheckProducer(producerID) {
            if (producerID) {
                producerID = producerID
                movies.push(data.filter(datas => datas.producer == asProducer[producerID]));
                //console.log(asProducer[producerID]);
            }
        }
    })
*/
