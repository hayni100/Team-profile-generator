const { builtinModules } = require("module")

function template(answers) {
    return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
      </head>
      <header class="header">Team Profile</header>
      <body>
        <div class="card" style="width: 18rem; padding:20px; margin: 50px;">
            <div class="card-header" style="height: 9rem; font-size: 30px; background-color: aquamarine;">
              <p>Manager<br>${answers.manager_name}</p>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${answers.manager_id}</li>
              <li class="list-group-item">Email: <a href="mailto:${answers.manager_email}">${answers.manager_email}</a>
              </li>
              <li class="list-group-item">Office number: ${answers.manager_office_number}</li>
            </ul>
          </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
      </body>
    </html>`;

}

module.exports = template;