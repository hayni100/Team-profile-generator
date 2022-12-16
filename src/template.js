const { builtinModules } = require("module")

function template(answers) {
    return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
    <section class="manager">
      <h1>Manager<h1>
        <p>Name: ${answers.manager_name}</p>
        <p>Employee ID: ${answers.manager_id}</p>
        <P>Email: ${answers.manager_email}</P>
    </section>
      </body>
    </html>`;

}

module.exports = template;