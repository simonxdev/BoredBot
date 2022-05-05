document.getElementById("btn").addEventListener("click", () => {
fetch('https://apis.scrimba.com/bored/api/activity')
  .then(response => response.json())
  .then(data => {
    let type = data.type.toUpperCase();
      if(data.link === ""){
        document.getElementById("idea").innerHTML = `
        <h3>Type of Activity: <span class="type">${type}</span></h3>
        <h4>${data.activity}</h4>
      `
      } else {
        document.getElementById("idea").innerHTML = `
        <h3>Type of Activity: <span class="type">${type}</span></h3>
        <a href="${data.link}" target="_blank"><h4>${data.activity}</h4></a>
      `
      } 
    })
  })