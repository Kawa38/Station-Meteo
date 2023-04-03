// 

const lat =50
const lon =6


// reste à faire  : integre le event sur la recherche de la ville/
// changer la couleur de la température ? 
// mettre en place les bonnes images

fetch("http://api.openweathermap.org/geo/1.0/direct?q=Grenoble&limit=5&appid=e5b2e46eaffb52df77cef14f70895920")
.then(response => response.json())
.then(dataV =>{
    console.log(dataV);
    const ville = dataV[0].name; 
    const lon = dataV[0].lon;
    const lat = dataV[0].lat;
    console.log("vile: " +ville + "lon =" + lon +"lat= "+ lat);
})
.catch(error => console.error(error));




fetch("https://api.openweathermap.org/data/3.0/onecall?lat="+lat+"&lon="+lon+"&exclude={part}&units=metric&lang=fr&appid=e5b2e46eaffb52df77cef14f70895920")

.then(response => response.json())
.then(data =>{
     afficherlesinfos(data);
     afficherlesimages(data);
})

.catch(error => console.error(error));



//*****FONCTIONS******/
function afficherlesinfos(data) {
    const TxtMeteo = document.querySelector("#TxtMeteo");
    TxtMeteo.textContent = data.current.weather[0].description;
    const nbPression = document.querySelector("#pression");
    nbPression.textContent = data.current.pressure+ " hPa";
    const nbVent = document.querySelector("#vent");
    vent.textContent = data.current.wind_speed+ " m/s";
    const nbTemp = document.querySelector("#temp");
    temp.textContent = (data.current.temp + "°C");
}

function afficherlesimages(data) {
let listeimages =[["cheminacces","valeur","id"],
                    ["./Images/couvert1000-1000.jpg","couvert","#img1"],
                    ["./Images/neige1000-1000.jpg","","#img1"],
                    ["./Images/orage1000-1000.jpg","","#img1"],
                    ["./Images/pluie1000-1000.jpg","","#img1"],
                    ["./Images/soleil1000-1000.jpg","","#img1"],
                    ];
for (image of listeimages){ 

        let id =image[2]; 
        let cheImage=image[0];
        let valeur = image[1];
        let CurentImage =document.querySelector(id);
        // console.log("CurentImage =" + CurentImage );
// A FINIR pour mettre l'image en place
        //<img src="./Images/neige1000-1000.jpg" alt="visu tendance" 
}
                }