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

// Projects Section
// THIS IS WHERE YOU ADD MORE BUTTONS FOR WHEN U ADD PROJECTS
document.getElementById('btnProjects').addEventListener('click', () => {
    const projectsDirectory = `
        <h6 class='fade-in'>Here are some of my projects! Click on a project to see more details:</h6>
        <div id="projectButtons">
            <button class="btn btn-secondary fade-in" id="btnTorontoHouseListing">Toronto House Listing Analysis</button>
            <button class="btn btn-secondary fade-in" id="btnSoundCheck">SoundCheck</button>
            <button class="btn btn-secondary fade-in" id="btnCalorieCalculator">Carlorie Calculator</button>
            <button class="btn btn-secondary fade-in" id="btnPortfolioSite">Portfolio Website</button>
            <button class="btn btn-secondary fade-in" id="btnSpotifyProject">DIY Spotify Wrapped</button>

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
                    This project helped me gain a deeper understanding of data analytics and the real estate market in Toronto. <br><br>
                    
                    You can find the full project and code on my Github <a href='https://github.com/CarandangC/Toronto-Market-Webscraper' target='_blank'>here</a>.<br>
                    There is also a readme file that also explains my findings.</p>
                </section>
            `;
            fadeOutAndUpdate(document.getElementById('projectDetails'), torontoHouseDetails);
        });

       // SoundCheck
        document.getElementById('btnSoundCheck').addEventListener('click', () => {
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

        // Calorie Calculator
        document.getElementById('btnCalorieCalculator').addEventListener('click', () => {
            const calorieCalculator = `
                <section class='fade-in'>
                    <h3>Calorie Calculator</h3>
                    <p>This was a personal project I made back in the summer of 2023. I am very into fitness if you have seen in my about page and nutrition goes hand in hand.
                    So I wanted to create a program that would give me the amount of calories based on a food item and its weight. This project was something practical and also cool to make as it was one of the first personal projects of mine.<br><br>
        
                    For this project, I used <strong>HTML, CSS, and Python,</strong> to create a user-friendly interface. I also used the <strong>Flask</strong> framework for the backend.<br><br>

                    What I enjoyed about this project was using an API for the first time. I used an API that had a catalog of over <strong>900 thousand</strong> food items that had many things related to the item, for example the nutritional value, macros, and of course, calories (per serving).
                    I was able to make an interesting and practical project that aligned with my values and introduced me to the world of APIs. <br><br>
        
                    You can find more information on this project on my GitHub <a href='https://github.com/CarandangC/Carlorie-Calculator' target='_blank'>here</a>.</p>
                </section>
            `;
            fadeOutAndUpdate(document.getElementById('projectDetails'), calorieCalculator);
        });

        // Portfolio Website
        document.getElementById('btnPortfolioSite').addEventListener('click', () => {
            const portfolioSite = `
                <section class='fade-in'>
                    <h3>Portfolio Website</h3>
                    <p>This is a project I started in Winter of 2024 and still updating regularly whenever I need to add new experiences or projects.<br><br>

                    I built this project because I always wanted to have a place where I could showcase my projects, and also to have another project that provides some sort of real life application and use.<br><br>

                    This project uses <strong>HTML, CSS, Javascript, and the Bootstrap framework.</strong><br><br>
                    What I enjoy(ed) about creating this project is that I have full control on how I design my website. Personally, I don't think I'm a very creative person, but making this website showed me how creative I could be, 
                    weather that is the theme, the layout, or just ideas on what things I could do to make it better (I was thinking a dark mode, don't ya think?).<br><br>

                    You can find the Github repo <a href='https://github.com/CarandangC/CarandangC.github.io'target='_blank'>here</a>.
                    </p>
                </section>
            `;
            fadeOutAndUpdate(document.getElementById('projectDetails'), portfolioSite);
        });

        //Spotify Wrapped

        document.getElementById('btnSpotifyProject').addEventListener('click', () => {
            const spotifyProject = `
                <section class='fade-in'>
                    <h3>DIY Spotify Wrapped</h3>
                    <p>This was a project idea I wanted to start for a while because I love listening to music and I wanted to get some experience with PowerBI. So I patiently waited till the end of the year to get rquest my data from Spotify.<br><br>
                    
                    If you are not familliar with Spotify Wrapped, it is a yearly event that Spotify hosts where it tells you your listening history throughout the year. Mainly your most played artists and songs. I wanted to make something
                    that replicated that using my own Spotify data. I also included a <strong>heatmap</strong> that shows what parts of the week I would listen to music the most. I also included a slider so you can choose the time frame of my listening history.<br><br>

                    This project uses <strong>Microsoft PowerBI</strong> and some <strong>DAX</strong> functions.<br><br>

                    What I learned about this project was just tinkering around with PowerBI and also learning about my own Spotify listening from certain time periods. It made me remember that during the summer I was addicted to this very specifc song called touch
                    and I would play it all day everday! Thats probably the reason as to why it was my number one in the year of 2024 hahaha!<br><br>

                    You can find my blog post in the readme file of the Github repo <a href='https://github.com/CarandangC/DIY-2024-Spotify-Wrapped'target='_blank'>here</a>.
                    </p>
                </section>
            `;
            fadeOutAndUpdate(document.getElementById('projectDetails'), spotifyProject);
        });
        // Copy paste this if you need to add more projects!
        // Change the 'btnAnotherProject' to another name (ex. btn(name of project)) and then add that 
        // variable in the button navigation tab (line 40)
        // Can the the constant to anything, just make sure to change it in the fadeoutandupdateline
        
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

// Experience Section
document.getElementById('btnExperience').addEventListener('click', () => {
    const experienceDirectory = `
        <h6 class='fade-in'>Here is where you can find previous internships I have done:</h6>
        <div id="experienceButtons">
            <button class="btn btn-secondary fade-in" id="btneCommerceAdvisor">Ontario Chamber of Commerce</button>
        </div>
        <div id="experienceDetails" class='fade-in'></div>
    `;
    fadeOutAndUpdate(outputDiv, experienceDirectory);

    setTimeout(() => {
        document.getElementById('btneCommerceAdvisor').addEventListener('click', () => {
            const eCommerceAdvisor = `
                <section class='fade-in'>
                    <h3>E-Commerce Advisor (Sept 2023 - Dec 2023)</h3>
                    <p>As an E-Commerce Advisor for the Ontario Chamber of Commerce, I supported over 50 small businesses in navigating the Canada Digital Adoption Program (CDAP) 
                    and enhancing their digital presence. <br><br>
                    My role involved guiding businesses through grant applications, providing tailored digital adoption strategies, and addressing inquiries related to e-commerce, website updates, and social media marketing. 
                    I also maintained accurate records, tracked program outcomes, and optimized Excel sheets to ensure data accuracy. <br><br>
                    This experience sharpened my skills in customer service, problem-solving, and digital transformation within the small business sector.</p>

                    <a href='https://occ.ca/' target='_blank'>Link to the OCC Website</a>'
                    <br>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEq_xkf346LN5OrhGB8HAETmfeC4uwWxv3A&s'>
                </section>
                `;

            fadeOutAndUpdate(document.getElementById('experienceDetails'), eCommerceAdvisor);
        });


    }, 250);

});
