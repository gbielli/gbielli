var requestURL = 'https://api-adresse.data.gouv.fr/search/?q=';
 var select = document.getElementById("selection");

window.onload = function() {
    document.getElementById('adresse').addEventListener('input', autocompleteAdresse, false);
};

let changeLocation = document.getElementById('change-location')

changeLocation.addEventListener('click', function() {
    
   var inputZ = document.getElementById('inputAdresse')
    if (inputZ.style.display == "none") {
        inputZ.style.display = "block";
    } else {
        inputZ.style.display  = "none";
    }
});


function autocompleteAdresse() {
        
    var inputValue = document.getElementById("adresse").value;
    if (inputValue) {
        fetch(setQuery(inputValue))
            .then(function (response) {
                response.json().then(function (data) {
                    displaySelection(data);
                });
            });
    } else {
        select.style.display = "none";
    }
};

function displaySelection(response) {
    if (Object.keys(response.features).length > 0) {
        select.style.display = "block";
        select.removeChild(select.firstChild);
        var ul = document.createElement('ul');
        select.appendChild(ul);

        response.features.forEach(function (element) {
            var li = document.createElement('li')
            var ligneAdresse = document.createElement('span');
            ligneAdresse.innerHTML = element.properties.label;
            li.onclick = function() {
                selectAdresse(element); };

                li.appendChild(ligneAdresse);
                ul.appendChild(li);
            });
        } else {
            select.style.display = "none";
        }
    };

    function selectAdresse(element) {
        document.getElementById("adresse").value = element.properties.name + "\r\n" + element.properties.postcode + " " + element.properties.city;
        select.style.display = "none";
        
    };

    function setQuery(value) {
        return requestURL + value + "?type=housenumber&autocomplete=1";
    };











/* let inputAddress = document.querySelector('#inputAddress');
const apiUrl = "https://api-adresse.data.gouv.fr/search/?q="
const rest = "&type=housenumber&autocomplete=1&limit=5"
let results ="";
let result = "";


if (inputAddress.value != "") {
inputAddress.addEventListener('focus', function() {

    let input = inputAddress.value;
    let urlAddress = apiUrl + input;
    let featureLabel = "";
    let featureScore;
    let each;
    let line;


    fetch(urlAddress).then((response) =>
    response.json().then((data) => {


        for (let i = 0; i < 5; i++) {
            
            featureLabel = data.features[i].properties.label;
            featureScore = data.features[i].properties.score;
            line = document.createElement("p");
            document.getElementById('rep').appendChild(line).innerHTML = featureLabel;

           // console.log(each)
           //each.innerHTML = featureLabel;
        }


    }) 
);

})
};
*/