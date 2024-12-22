const outputDiv = document.getElementById('output');

// About Me Section
document.getElementById('btnAbout').addEventListener('click', () => {
    const aboutMeTitle = "<h3 class='fade-in'>About Me</h3>";
    const aboutMeText = `
        <p class='fade-in'>Hey! My name is Carlos, and I'm currently studying at Toronto Metropolitan University. 
        School has taught me a lot about Computer Science and the various related fields, but I'm excited to apply this knowledge in real-world projects!</p>
        <p class='fade-in'>I am a Python enthusiast and am also interested in the data and analytics field. However, since I'm still a student, I am open to other fields as well, particularly software engineering.
        I'm a very logical thinker, so I always base my reasoning on facts. In the data and analytics field, I am surrounded by so much information, 
        which can help me and potential clients/businesses make informed decisions!</p>
        <p class='fade-in'>Outside of school, I’m passionate about staying active. I enjoy volleyball, weightlifting, and badminton. When I'm not at the gym or on the court, you can find me gaming or hanging out with friends.</p>
    `;
    const projectsIntro = "<p class='fade-in'>I also love working on interesting projects. You can find some by viewing my <a href='https://github.com/CarandangC' class='fade-in'>Github</a> or clicking the projects tab!</p>";
    const projectLinks = `
        <p class='fade-in'>Here are some useful links/resources if you ever need to contact me!</p>
        <ul class='fade-in'>
            <li><a href='https://github.com/CarandangC' target='_blank'>My GitHub</a></li>
            <li><a href='https://www.linkedin.com/in/ccarandang/' target='_blank'>My LinkedIn</a></li>
            <li><a href="mailto:email@example.com">My Email</a></li>
        </ul>
    `;

    outputDiv.innerHTML = aboutMeTitle + aboutMeText + projectsIntro + projectLinks;
});

// Event listener for Projects button
// This is where you add your other projects
document.getElementById('btnProjects').addEventListener('click', () => {
    const projectsDirectory = `
        <p class='fade-in'>Here are some projects I have made over the years! Click on a project to see details:</p>
        <div id="projectButtons">
            <button class="btn btn-secondary fade-in" id="btnTorontoHouseListing">Toronto House Listing Analysis</button>
            <button class="btn btn-secondary fade-in" id="btnAnotherProject">Another Project</button>
        </div>
        <div id="projectDetails" class='fade-in'></div>
    `;
    
    outputDiv.innerHTML = projectsDirectory;

    document.getElementById('btnTorontoHouseListing').addEventListener('click', () => {
        const torontoHouseDetails = `
            <section class='fade-in'>
                <h3>Toronto House Listing Analysis</h3>
                <p>This was a project I made in the summer of 2023. Because I am interested in data analytics, I decided to make this project to get some
                hands-on experience with web scraping (data collection), data organization, and data visualization.<br><br>
                For this project, I scraped house listings in Toronto, Ontario using Python and multiple frameworks. These included 
                Beautiful Soup (for web scraping), Pandas, Matplotlib, and NumPy (to organize, clean, and present data in a visually appealing way).<br><br>
                I had two hypotheses for this project: I wanted to know if the location of the listing would increase in value relative to its proximity to downtown Toronto,
                and if the number of bedrooms and bathrooms would increase the price of the listing.<br><br>
                After gathering all the information I needed to test these hypotheses, 
                the data confirmed that the closer the house was to downtown Toronto, the higher the price. Additionally, the number of bedrooms and bathrooms also had a positive correlation with the price of the listing.<br><br>
                This project helped me gain a deeper understanding of data analytics and the real estate market in Toronto. You can find the full project and code on my <a href='https://github.com/CarandangC/Toronto-Market-Webscraper' target='_blank'>GitHub</a>.</p>
            </section>
        `;
        document.getElementById('projectDetails').innerHTML = torontoHouseDetails;
    });

    // Add event listener for Another Project button (example placeholder)
    document.getElementById('btnAnotherProject').addEventListener('click', () => {
        const anotherProjectDetails = `
            <section>
                <h3>Another Project</h3>
                <p>Details about another project will go here.</p>
            </section>
        `;
        document.getElementById('projectDetails').innerHTML = anotherProjectDetails;
    });
});