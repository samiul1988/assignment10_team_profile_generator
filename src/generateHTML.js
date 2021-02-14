// Helper function that generates fontawesome icon class based on a role 
const generateRoleSpecificIconClass = role => {
    if ( role !== "Manager" && role !== "Engineer" && role !== "Intern" ) return "";

    let roleIconClass = role === "Manager" ? "fa-mug-hot" : (role === "Engineer" ? "fa-glasses" : "fa-user-graduate");
    return roleIconClass;
};

// This function generates individual card div
const generateCardDiv = ( name, id, role, email, uniquePropLabel, uniquePropVal ) => {
    let roleSpecificEntry = "";
    if (role === "Engineer") {
        roleSpecificEntry = 
            `<div class="card-item">
                                    ${uniquePropLabel}:
                                    <a 
                                        href=${uniquePropVal.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >${uniquePropVal.userName}
                                    </a>
                                </div>`;
    } else {
        roleSpecificEntry = 
        `<div class="card-item">
                                    ${uniquePropLabel}: ${uniquePropVal}
                                </div>`;
    }

    return (
        `<div class="card bg-light shadow rounded m-3 employee-card">
                            <div class="card-header bg-primary text-light">
                                <h5 class="card-title">${name}</h5>
                                <h6 class="card-title">
                                    <i class="fas ${generateRoleSpecificIconClass(role)}"></i> ${role}
                                </h6>
                            </div>
                            <div class="card-body">
                                <div class="card-item">ID: ${id}</div>
                                <div class="card-item">
                                    Email: <a href="mailto:${email}">${email}</a>
                                </div>
                                ${roleSpecificEntry}
                            </div>
                        </div>
                        `
    )
};

// This function generates employee cards
const generateCards = ({ manager, engineers, interns }) => {
    let cards = [];
    // Manager Card
    cards.push(
        generateCardDiv(manager.getName(), manager.getId(), manager.getRole(), manager.getEmail(), "Office Number", manager.getOfficeNumber())
    );

    // Other member cards
    if (engineers) {
        engineers.map( engineer => {
            cards.push(
                generateCardDiv(engineer.getName(), engineer.getId(), engineer.getRole(), engineer.getEmail(), "Github", engineer.getGithub())
            );
        });
    }

    if (interns) {
        interns.map( intern => {
            cards.push(
                generateCardDiv(intern.getName(), intern.getId(), intern.getRole(), intern.getEmail(), "School", intern.getSchool())
            );
        });
    }
    return cards.join("");
};

// This function generates the content of HTML file based on user input
module.exports = data => {
    return (
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <!-- Custom Stylesheet -->
    <link rel="stylesheet" href="./style/styles.css" />
    <title>Team Profile</title>
</head>

<body>
    <header class="bg-danger text-light text-center p-2">
        <h1 class="display-5">
            My Team
        </h1>
    </header>
    <!-- Cards Container -->
    <main>
        <div class="container main-container">
            <div class="row">
                <div class="col">
                    <section class="d-flex flex-wrap justify-content-center">
                        ${generateCards(data)}
                    </section>
                </div> 
            </div>
        </div>
    </main>
    
    <!-- sources for jquery, popper and bootstrap -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
</body>
</html>
`
    )
};