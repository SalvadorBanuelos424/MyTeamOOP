const generateSite = (team) => {
  const html = [];
  const generateManager = manager => {
    return `
    <div class="card">
      <h3 class="name">${manager.name}</h3>
      <h3 class="id"${manager.id}</h3>
      <h4 class="email">${manager.email}</h4>
      <h4 class="office">${manager.office}</h4>
    </div>
    `;
    
  }
  const generateEngineer = engineer => {
  return`
    <div class="card">
      <h3 class="name">${engineer.name}</h3>
      <h3 class="id"${engineer.id}</h3>
      <h4 class="email">${engineer.email}</h4>
      <h4 class="office">${engineer.github}</h4>
    </div>`;
 
  }
  const generateIntern = intern => {
    return`
    <div class="card">
      <h3 class="name">${intern.name}</h3>
      <h3 class="id"${intern.id}</h3>
      <h4 class="email">${intern.email}</h4>
      <h4 class="office">${intern.school}</h4>
    </div>`;
  }

  // for (let i = 0; i < team.length; i++) {
  //   if (team[i].getRole() === "Manager") {
  //       generateManager(team[i]);
  //   }
  //   if (team[i].getRole() === "Engineer") {
  //       generateEngineer(team[i]);
  //   }
  //   if (team[i].getRole() === "Intern") {
  //       generateIntern(team[i]);
  //   }
  // }

  html.push(team.filter((employee)=> employee.getRole() === "Engineer").map((engineer)=> generateEngineer(engineer)));
  html.push(team.filter((employee)=> employee.getRole() === "Manager").map((manager)=> generateManager(manager)));
  html.push(team.filter((employee)=> employee.getRole() === "Intern").map((intern)=> generateIntern(intern)));


  return html.join("");
}


module.exports = team => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="style.css">
      <title>Portfolio Demo</title>
    </head>
    <body>
      <h1 class="header">My Team by OOP</h1>
      <main class="container">${generateSite(team)}</main>
    </body>
    </html>`;
}


