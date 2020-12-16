// MODAL STARTS

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close-btn")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
          modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

// const fetch = require("node-fetch");

console.log('Starting server...')

// //Obj of data to send in future like a dummyDb

form = document.querySelector("#form")

if (form) {
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const myData = {
            data: {
                "property-type": form["property-type"].value,
                "zip-code": parseInt(form["zip-code"].value),
                "area":  parseInt(form["area"].value),
                "rooms-number":  parseInt(form["rooms-number"].value),
                // "property_subtype": form["rooms-number"].value,
                // "land-area": form["land-area"].value,
                // "garden": form["garden"].value,
                // "garden-area": form["garden-area"].value,
                // "equipped-kitchen": form["equi_kitchen"].value,
                // "swimmingpool": form["swimpool"].value,
                // "furnished": form["furnised"].value,
                // "open-fire": form["openfire"].value,
                // "terrace": form["terrace"].value,
                // "terrace-area": form["terrace-area"].value,
                "facades-number": 2,
                // "building-state": form["building-state"].value,
                "full-address": "",
            }
        };

        let info = {
            data:{
                "property-type": "APARTMENT",
                "area": 80,
                "rooms-number": 2,
                "zip-code": 2000,
                "full-address":"",
                "facades-number":2
            }
        }
    

        predict_url = form.action
        console.log('redirected')
        console.log(myData)
        //POST request with body equal on data in JSON format
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // API that modify the header to correct the CORS Policy
        const url = "https://pacific-refuge-73853.herokuapp.com/predict";
        fetch(proxyurl + url, {
                method: 'POST', // POSt method to send info to the API
                body: JSON.stringify(myData),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(contents => { 
                console.log(contents);
                modal.style.display = "block";
                document.getElementById("price").innerHTML=contents.prediction[0];
                document.querySelector("#btn").insertAdjacentHTML("afterend", `<p>TOTAL PRICE: ${contents.prediction[0]}</p>`)
            })
            .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    });

}

