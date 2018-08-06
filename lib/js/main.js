let URL_RandomUserAPI = "https://randomuser.me/api/?results=50";
let Profile = document.getElementById("profile");


fetch(URL_RandomUserAPI)
    .then(function(response){
            return response.json();
    }).then(function(myJson){
            console.log(myJson);
        for(i = 0; i < myJson.results.length; i++){
            // Image Element
            let image = document.createElement("img");
            image.src = myJson.results[i].picture.large;
            Profile.appendChild(image);

            // Name Element
            let first_name = myJson.results[i].name.first.charAt(0).toUpperCase() + myJson.results[i].name.first.substr(1) + ' '  + myJson.results[i].name.last.charAt(0).toUpperCase() + myJson.results[i].name.last.substr(1);
            let p_name = document.createElement("p");
            p_name.innerHTML = first_name;
            Profile.appendChild(p_name); 
            
            // Email Element
            let email = myJson.results[i].email;
            let p_email = document.createElement("p");
            p_email.innerHTML = email;
            Profile.appendChild(p_email);

            // Phone Element
            let phoneNumber = myJson.results[i].phone;
            let p_phoneNumber = document.createElement("p");
            p_phoneNumber.innerHTML = phoneNumber;
            Profile.appendChild(p_phoneNumber);  
            
            // Gender Element
            let gender = myJson.results[i].gender.charAt(0).toUpperCase() + myJson.results[i].gender.substr(1);     
            let p_gender = document.createElement("p");
            p_gender.innerHTML = gender;
            Profile.appendChild(p_gender); 

            // DOB Element
            let DOB = myJson.results[i].dob.date;     
            let p_DOB = document.createElement("p");
            p_DOB.innerHTML = DOB;
            Profile.appendChild(p_DOB);

            // Divider
            let divider = document.createElement("hr");
            Profile.appendChild(divider);
        }

        
    })



















                