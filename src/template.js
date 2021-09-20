const generateCards= teamData => {

    const manager = teamData.manager.map(function(job) {
        let managerHtml = `
        <div class="card text-center text-dark bg-info mb-lg-auto" style="max-width: 25rem; margin:auto; margin-top: 2.5rem;">
        <div class="col-0">
        <h2 class="card-header text-center">${job.name}</h2>
        <div class="card-body bg-light mb-3">
          <h3 class="card-title text-xl-center">Manager</h3>
                <h4>ID: ${job.id}</h4>
                <h4>Email: <a href="mailto:${job.email}">${job.email}</a></h4>
                <h4> Office number: ${job.officeNumber}</h4>
        </div>
      </div>
     </div>
    </div>
    `

        return managerHtml
    });

    const engineer = teamData.engineer.map(function(job) {
        let engineerHtml = `
        <div class="card text-center text-dark bg-info mb-lg-auto" style="max-width: 25rem; margin:auto;">
        <div class="col-0">
            <h2 class="card-header text-center">${job.name}</h2>
            <div class="card-body bg-light mb-3">
              <h3 class="card-title text-xl-center">Engineer</h3>
                <h4>ID: ${job.id}</h4>
                <h4> Email: <a href="mailto:${job.email}">${job.email}</a></h4>
                <h4> Github: <a href="https://github.com/${job.github}" target="_blank">${job.github}</a></h4>
            </div>
          </div>
    </div>
`
        return engineerHtml
    })

    const intern = teamData.intern.map(function(job) {
        let interHtml =`
        <div class="card text-center text-dark bg-info mb-lg-auto" style="max-width: 25rem; margin:auto;">
        <div class="col-0">
        <h2 class="card-header text-center">${job.name}</h2>
        <div class="card-body bg-light mb-3">
          <h3 class="card-title text-xl-center">Intern</h3>
          <h4>ID: ${job.id}</h4>
          <h4> Email: <a href="mailto:${job.email}">${job.email}</a></h4>
          <h4> School: ${job.school}</h4>
        </div>
    </div>
     </div>
`
        return interHtml
    })
    return [manager,engineer,intern]
}

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
        <header>
        <div class="card dark bg-secondary text-xl-center text-white bg-secondary mb-3" style="max-width: 50rem; margin:auto; margin-top: 2.5rem;">
         <h1 class="text-center">Team Profile</h1>
       </div>
       </header>
            ${generateCards(templateData)}
        </body>
        </html>
        `
}
