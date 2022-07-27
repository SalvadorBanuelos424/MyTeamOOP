const generateSite = (team) => {
  const html = [];
  const generateManager = manager => {
    return `
<div class="container">
  <div class="card">
    <h2 class="name">${manager.name}&#9749;</h2>
    <h3 class="id">Employee ID# ${manager.id}</h3>
    <h4 class="email" id="email"><a href="mailto:${manager.email}">${manager.email}</a></h4>
    <h4 class="extra">Office: ${manager.office}</h4>
  </div>
</div>
    `;
    
  }
  const generateEngineer = engineer => {
    return`
<div class="container">
  <div class="card">
    <h2 class="name">${engineer.name}&#128187;</h2>
    <h3 class="id">Employee ID# ${engineer.id}</h3>
    <h4 class="email" id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></h4>
    <h4 class="extra" ><a href="https://github.com/${engineer.github}">github.com/${engineer.github}</a></h4>
  </div>
</div>
    `;
  }
  const generateIntern = intern => {
    return`
<div class="container">
  <div class="card">
    <h2 class="name">${intern.name}&#127979;</h2>
    <h3 class="id">Employee ID# ${intern.id}</h3>
    <h4 class="email" id="email"><a href="mailto:${intern.email}">${intern.email}</a></h4>
    <h4 class="extra">school: ${intern.school}</h4>
  </div>
</div>
    `;
  }

  html.push(team.filter((employee)=> employee.getRole() === "Manager").map((manager)=> generateManager(manager)));
  html.push(team.filter((employee)=> employee.getRole() === "Engineer").map((engineer)=> generateEngineer(engineer)));
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
  <link rel="stylesheet" href="/src/style.css">
  <title>MyTeamOOP</title>
</head>
    
<body>
  <h1 class="header">My Team by OOP</h1>
  
  <main class="container">${generateSite(team)}</main>
</body>
</html>`;
}


