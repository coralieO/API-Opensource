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
                html = '<li class="l-producers" id="'+p+'"> <a href="#"> ' + asProducer[p] + '</a> </li>';
                producers = document.getElementById("producers");
                producers.innerHTML += html;
            }
        }());
        let list_producers = document.getElementsByClassName('l-producers');
        list_producers.onclick = CheckProducer(2);
        console.log(list_producers.onclick);
        function CheckProducer(producerID) {
            if (producerID) {
                producerID = producerID
                movies.push(data.filter(datas => datas.producer == asProducer[producerID]));
                //console.log(asProducer[producerID]);
            }
        }
    })