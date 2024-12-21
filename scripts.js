const outputDiv = document.getElementById('output');

document.getElementById('btnAbout').addEventListener('click', () => {
    // Defining content as variables
    const aboutMeTitle = "<h3 class='fade-in'>About Me</h3>";
    const aboutMeText = `
        <p class='fade-in'>Hey! My name is Carlos, and I'm currently studying at Toronto Metropolitan University. 
        School has taught me a lot about Computer Science and the various related fields, but I'm excited to apply this knowledge in real-world projects!</p>
        <p class='fade-in'>I am a Python enthusiast and I am also interested in the data and analytics field. However, since I'm still a student I am open to other fields as well, particularly software engineering.
        I'm a very logical thinker so I always base my reasonings on facts. And in the data and analytics field, I am surrounded with so much information
        which can help me and potential clients/business make informed decisions!
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

    // Inserting the content dynamically
    outputDiv.innerHTML = aboutMeTitle + aboutMeText +  projectsIntro + projectLinks;
});

document.getElementById('btnProjects').addEventListener('click', () => {
    // Add content for the Projects section
    outputDiv.textContent = "I am passionate about creating meaningful projects that apply my knowledge to solve real-life problems. Check out my GitHub for more!";
});
