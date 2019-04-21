window.addEventListener('load',()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(poistion =>{
                long = position.coords.long;
                lat = position.coords.lat;

                const proxy = 'https://cors-anywhere.herokuapp.com';
                const api = `${proxy}https://api.darksky.net/forecast/6e6c966bc05ac6dbdf9119f85224c49b/${lat},${long}`;

                fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                });
            });
              } 
});  