console.log("If the website doesn't update, CTRL + F5 to hard reload to refresh browser cache and redownload all website files including photos, html files, and javascript files. You will have the most updated version of the website.")

//for index.html
let allServices = document.getElementsByClassName("servicesButton")
let serviceIcons = document.getElementsByClassName("service-icon")

for(let i = 0; i < allServices.length; i++){
  allServices[i].addEventListener("click", function(){
    localStorage.setItem("title", allServices[i].parentElement.children[0].textContent)
    localStorage.setItem("description", allServices[i].parentElement.children[1].textContent)
    localStorage.setItem("logo", serviceIcons[i].childNodes[1].className)
  })
}

//for services.html
console.log(localStorage.getItem("logo"))
let serviceInfo = document.querySelector(".serviceInfo").children

document.querySelector(".title").innerHTML = `<h2><span>${localStorage.getItem("title")}</span></h2>`

document.querySelector(".orangeIcon").className = `${localStorage.getItem("logo")}`
serviceInfo[0].innerHTML = `${localStorage.getItem("title")}`
if(serviceInfo[0].textContent == 'Maintenance'){
  //serviceInfo[1].innerHTML = `${localStorage.getItem("description")}`
  serviceInfo[1].innerHTML = `Depending on what you need maintaining, costs will vary. Please contact us for more information. <br><a href="index.html#contact" class="bttn servicesButton">Contact Us <i class="fi flaticon-next"></i></a> `
}
else if(serviceInfo[0].textContent == 'Repair'){
  serviceInfo[1].innerHTML = 
  `
  We repair fans, switches and lights and the average cost to repair them is around <b>$141 to $419</b>. Emergency/urgent repairs by our electricians on weekends, holidays, or evenings can cost <b>$150/hour</b> and may also change a <b>$75</b> callout fee.<br><br>
  
  Replacing an electrical panel can cost between <b>$850 to $2500</b>. Most homes today use a 200-amp panel, but larger homes need 400 amps which cost between <b>$2000 to $4000</b>. Trying to get by with a breaker box that is too small can result in tripped breakers, overheating, and fire. Those issues will cost more in the long run, so it might be a good idea to spend the extra money to get a 200-amp panel now and avoid repairs later.<br><br>


  `
}
else if(serviceInfo[0].textContent == 'Installation'){
  serviceInfo[1].innerHTML = 
  `
  We install fans, switches, and lights and the average cost to repair them is around <b>$141 to $419</b>.<br>Below is a table with our current installation services and its price range.<br><br>
  
  <div class="row box">
    <div class="col-8"> 
      <div class="service-item">
        <div class="service-info text-left">
          <h5 class="text-uppercase">Service</h5>
          <p>Installing Door bells, smoke or carbon monoxide detector</p>
          <p>Install Light Fixtures</p>
          <p>Install Recessed Light Fixture</p>
          <p>Install Outlet</p>
          <p>Install Ceiling Fan, Track Lights, or Wall Sconce</p>
          <p>Install Attic Fans</p>
          <p>Install Bathroom Fan</p>
          <p>Install Electric Car Charging Station</p>
          <p>Install Hot Tub Wiring / Conduit</p>
          <p>Install Home Generator</p>
          <p>Install Hardwired Home Automation System</p>

        </div>
      </div> 
    </div>

    <div class="col-4"> 
      <div class="service-item">
        <div class="service-info text-left">
          <h5 class="text-uppercase">Price</h5>
          <p><b>$90 - $150</b></p>
          <p><b>$113 - $414</b></p>
          <p><b>$125 - $300</b></p>
          <p><b>$120 - $150</b></p>
          <p><b>$150 - $350</b></p>
          <p><b>$300 - $900</b></p>
          <p><b>$150 - $550</b></p>
          <p><b>$750 - $2,600</b></p>
          <p><b>$800 - $1,500</b></p>
          <p><b>$3,000 - $5,000</b></p>
          <p><b>$4,000 - $12,000</b></p>

        </div>
      </div>
    </div>
      
  </div>
    `
}
else if(serviceInfo[0].textContent == 'Upgrading'){
  serviceInfo[1].innerHTML = 
  `	
  The cost to replace or upgrade your electrical panel is between <b>$850 to $2,500</b>. Today, most homes need the 200-amp panel, but if you have a larger home and need 400 amps, the installation will cost from <b>$2,000 up to $4,000</b>. Trying to get by with a breaker box that is too small can result in tripped breakers, overheating, and fire. Those issues will cost more in the long run, so it might be a good idea to spend the extra money to get a 200-amp panel now and avoid repairs later.<br><br>
  
  <div class="row box">
    <div class="col-8"> 
      <div class="service-item">
        <div class="service-info text-left">
          
          <h5 class="text-uppercase">Service</h5>
          <p>200-amp Electrical Panel</p>
          <p>400-amp Electrical Panel</p>
          <p>Upgrade Electrical Panel</p>
        </div>
      </div> 
    </div>

    <div class="col-4"> 
      <div class="service-item">
        <div class="service-info text-left">
          
          <h5 class="text-uppercase">Price</h5>
          <p><b>$850 - $2,500</b></p>
          <p><b>$2,000 - $4,000</b></p>
          <p><b>$1,100 - $2,500</b></p>
        </div>
      </div>
    </div>
      
  </div>
  
  `
}
else if(serviceInfo[0].textContent == 'Troubleshoot'){
  serviceInfo[1].innerHTML = 
  `
  Troubleshooting is the first step for many electrical projects. Identifying the source of the problem and then providing solutions is our specialty. Please give us a call: (416)-770-4405
  `
}

