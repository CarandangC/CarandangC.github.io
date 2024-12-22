const outputDiv = document.getElementById('output');

// Utility function to fade out and then update content
function fadeOutAndUpdate(targetElement, newContent) {
    targetElement.classList.remove('fade-in');
    targetElement.classList.add('fade-out');

    setTimeout(() => {
        targetElement.innerHTML = newContent;
        targetElement.classList.remove('fade-out');
        targetElement.classList.add('fade-in');
    }, 250); // Match the fade-out duration in CSS
}

// About Me Section
document.getElementById('btnAbout').addEventListener('click', () => {
    const aboutMeContent = `
        <h3 class='fade-in'>About Me</h3>
        <p class='fade-in'>Hey! My name is Carlos, and I'm currently studying at Toronto Metropolitan University. 
        School has taught me a lot about Computer Science and the various related fields, but I'm excited to apply this knowledge in real-world projects!</p>
        <p class='fade-in'>I am a Python enthusiast and am also interested in the data and analytics field. However, since I'm still a student, I am open to other fields as well, particularly software engineering.
        I'm a very logical thinker, so I always base my reasoning on facts. In the data and analytics field, I am surrounded by so much information, 
        which can help me and potential clients/businesses make informed decisions!</p>
        <p class='fade-in'>Outside of school, I’m passionate about staying active. I enjoy volleyball, weightlifting, and badminton. When I'm not at the gym or on the court, you can find me gaming or hanging out with friends.</p>
        <p class='fade-in'>I also love working on interesting projects. You can find some by viewing my <a href='https://github.com/CarandangC' class='fade-in'>Github</a> or clicking the projects tab!</p>
        <p class='fade-in'>Here are some useful links/resources if you ever need to contact me!</p>
        <ul class='fade-in'>
            <li><a href='https://github.com/CarandangC' target='_blank'>My GitHub</a></li>
            <li><a href='https://www.linkedin.com/in/ccarandang/' target='_blank'>My LinkedIn</a></li>
            <li><a href="mailto:email@example.com">My Email</a></li>
        </ul>
    `;
    fadeOutAndUpdate(outputDiv, aboutMeContent);
});

// Event listener for Projects button
document.getElementById('btnProjects').addEventListener('click', () => {
    const projectsDirectory = `
        <h6 class='fade-in'>Here are some projects I have made over the years! Click on a project to see details:</h6>
        <div id="projectButtons">
            <button class="btn btn-secondary fade-in" id="btnTorontoHouseListing">Toronto House Listing Analysis</button>
            <button class="btn btn-secondary fade-in" id="btnAnotherProject">SoundCheck</button>
        </div>
        <div id="projectDetails" class='fade-in'></div>
    `;

    fadeOutAndUpdate(outputDiv, projectsDirectory);

    setTimeout(() => {
        document.getElementById('btnTorontoHouseListing').addEventListener('click', () => {
            const torontoHouseDetails = `
                <section class='fade-in'>
                    <h3>Toronto House Listing Analysis</h3>
                    <p>This was a project I made in the summer of 2023. Because I am interested in data analytics, I decided to make this project to get some
                    hands-on experience with <strong>web scraping (data collection), data organization, and data visualization.</strong><br><br>

                    For this project, I gathered information (webscrapped) on house listings located in Toronto, Ontario using Python and multiple frameworks. These included 
                    Beautiful Soup (for web scraping), Pandas, Matplotlib, and NumPy (to organize, clean, and present data in a visually appealing way).<br><br>
                    I had two hypotheses for this project: I wanted to know if the location of the listing would increase in value relative to its proximity to downtown Toronto,
                    and if the number of bedrooms and bathrooms would increase the price of the listing.<br><br>

                    After gathering all the information I needed to test these hypotheses, 
                    the data confirmed that the closer the house was to downtown Toronto, the higher the price. Additionally, the number of bedrooms and bathrooms also had a positive correlation with the price of the listing.<br><br>
                    This project helped me gain a deeper understanding of data analytics and the real estate market in Toronto. You can find the full project and code on my <a href='https://github.com/CarandangC/Toronto-Market-Webscraper' target='_blank'>GitHub</a>.</p>
                </section>
            `;
            fadeOutAndUpdate(document.getElementById('projectDetails'), torontoHouseDetails);
        });

       // SoundCheck
        document.getElementById('btnAnotherProject').addEventListener('click', () => {
            const soundCheck = `
                <section class='fade-in'>
                    <h3>SoundCheck</h3>
                    <p>This was a school project where I worked with four other people and we were tasked to create a simulated, online ticketing system (similar to Ticketmaster).<br><br>
                    We used <strong>HTML, CSS, Python, and SQL</strong> for this project. I was also the lead <strong>backend developer</strong> for this project. This meant that I was in charge of creating
                    the databases for users, events, shopping carts associated with each user's account, checkout verification, and event information which includes quantity of tickets.<br><br>

                    This project was a fun one to do because I was able to work collaboratively, learn how to create a product using the <strong>software development life cycle (SDLC)</strong>,
                    and honestly opened my eyes on what I could create if I put my mind to it. <br><br>

                    You can find more information on this project on my GitHub <a href='https://github.com/CarandangC/soundCheck' target='_blank'>here</a>.</p>

                    <!-- Image with adjustable size -->
                    <img src="https://private-user-images.githubusercontent.com/86864028/250307543-ded077bc-dd78-40a4-87d5-b4c970bec59c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzQ4MzAxMzAsIm5iZiI6MTczNDgyOTgzMCwicGF0aCI6Ii84Njg2NDAyOC8yNTAzMDc1NDMtZGVkMDc3YmMtZGQ3OC00MGE0LTg3ZDUtYjRjOTcwYmVjNTljLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjIyVDAxMTAzMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWM5YmJjNTFkODgzNTg4ZDZlYzA4N2JmZjkwZmJmNTA3MzM5NjE5NDFkNzUzODQ3NWExODNiNDBjYWFlNTMxODUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.LpIo7IwVgxr7dypdltJXwNpAq_13jOq5NBxAuGRJT48">
                </section>
            `;
            fadeOutAndUpdate(document.getElementById('projectDetails'), soundCheck);
        });

        // Copy paste this if you need to add more projects!
        
        // document.getElementById('btnAnotherProject').addEventListener('click', () => {
        //     const anotherProjectDetails = `
        //         <section class='fade-in'>
        //             <h3>Another Project</h3>
        //             <p>Details about another project will go here.</p>
        //         </section>
        //     `;
        //     fadeOutAndUpdate(document.getElementById('projectDetails'), anotherProjectDetails);
        // });


    }, 250); // Wait for fade-out before adding event listeners
});
