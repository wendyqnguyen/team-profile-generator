function generateHTML(data) {
    // let licenseSection = renderLicenseSection(data.license);
    // let licenseLink = renderLicenseLink(data.license);
    // let badge = renderLicenseBadge(data.license);
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
        <title>Team Profile</title>
    </head>
<body>
    <header class="hero">
        <h1 class="app-title">My Team</h1>
    </header>
    </body>
    </html>
  `;
  }
  
  module.exports = generateHTML;
  