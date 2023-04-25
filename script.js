let x=document.getElementById('final');


const call = async()=>{
    try {
        let res= await fetch("https://restcountries.com/v3.1/alpha/IN");
    let data= await res.json();
    // console.log(data);
    let htmldata=`<div class="container-md contain d-flex justify-content-center align-items-center">
    <div class="card" style="width: 18rem">
      <img src="${data[0].flags.png}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${data[0].name.common}</h5>
        
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Capital: ${data[0].capital}</li>
        <li class="list-group-item">Currency: ${data[0].currencies.INR.name}</li>
        <li class="list-group-item">Timezone: ${data[0].timezones}</li>
      </ul>
      <div class="card-body">
        <a href="${data[0].maps.googleMaps}" class="card-link">Map</a>
      </div>
    </div>
  </div>`;

        x.insertAdjacentHTML('afterbegin',htmldata);
    } 
    catch(error) {
        console.log(error);
    }
}

call();