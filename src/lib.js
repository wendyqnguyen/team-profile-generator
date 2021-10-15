const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//function to generate HTML for a page given an array of employee objects
function generateHTML(teamData) {
    //call generateCards which returns html for each card in the teamData array
    let cardsHTML = generateCards(teamData);
    
    //return HTML for a whole page with inserted employee cards
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <title>Team Profile</title>
    </head>
<body>
    <header class="hero text-center" style="background-color: #c94956;">
        <h1 class="app-title text-white">My Team</h1>
    </header>
    <div class="d-flex flex-wrap mx-auto">
    ${cardsHTML}
    </div>
    </body>
    </html>
  `;

  };
  

  
function generateCards(teamArray){
    let cardHTML = '';
    
    for (i=0; i < teamArray.length; i++){
      let teamMember  = teamArray[i];
        cardHTML = cardHTML + `
        <div class="card mx-auto shadow p-3 mb-5 bg-white" style="width: 18rem;">
        <div class="card-header text-white" style="background-color: #4375f3;">
        <h4 class="card-title">${teamMember.name}</h4>
        <p class="card-text">${teamMember.getIcon()} ${teamMember.getRole()}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${teamMember.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${teamMember.email}">${teamMember.email}</a></li>`;

        if (teamMember.getRole() === "Manager"){
        cardHTML = cardHTML + `
        <li class="list-group-item">Office number: ${teamMember.officeNumber}</li>`;
          } else if(teamMember.getRole() === "Engineer"){
            cardHTML = cardHTML + `
            <li class="list-group-item">GitHub: <a href="https://github.com/${teamMember.gitHub}/">${teamMember.gitHub}</a></li>`;
        } else if(teamMember.getRole() === "Intern"){
            cardHTML = cardHTML + `
            <li class="list-group-item">School: ${teamMember.school}</li>`;

        };
        cardHTML = cardHTML + `
        </ul>
      </div>`;

    }

    return cardHTML;
  }

  module.exports = generateHTML;
  