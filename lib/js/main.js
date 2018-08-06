let URL_RandomUserAPI = "https://randomuser.me/api";
let Profile = document.getElementById("profile");


fetch(URL_RandomUserAPI)
    .then(function(response){
            return response.json();
    }).then(function(myJson){
            console.log(myJson);
            
            // Name Element
            let name = myJson.results[0].name;
            let p_name = document.createElement("p");
            p_name.innerHTML = name;
            Profile.appendChild(p_name); 
            
            // Email Element
            let email = myJson.results[0].email;
            let p_email = document.createElement("p");
            p_email.innerHTML = email;
            Profile.appendChild(p_email);     

            // Phone Element
            let phoneNumber = myJson.results[0].phoneNumber;     
            let p_phoneNumber = document.createElement("p");
            p_phoneNumber.innerHTML = phoneNumber;
            Profile.appendChild(p_phoneNumber);  
            
            // Address Element
            let address = myJson.results[0].address;     
            let p_address = document.createElement("p");
            p_address.innerHTML = address;
            Profile.appendChild(p_address); 

            // DOB Element
            let DOB = myJson.results[0].DOB;     
            let p_DOB = document.createElement("p");
            p_DOB.innerHTML = DOB;
            Profile.appendChild(p_DOB);
            })

