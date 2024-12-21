const outputDiv = document.getElementById('output');

document.getElementById('btnAbout').addEventListener('click', () => {
    // Combine both parts of text to avoid overwriting
    outputDiv.textContent = "Hey! My name is Carlos and I'm currently studying at Toronto Metropolitan University. School has taught me a lot of things about Computer Science and topics related to the field. " +
                            "In my free time I enjoy being physically active. I love volleyball, weightlifting, and badminton. If I'm not doing those, I'm probably gaming or hanging out with friends!";
});

document.getElementById('btnProjects').addEventListener('click', () => {
    // Add content for the Projects section
    outputDiv.textContent = "I am passionate about creating meaningful projects that apply my knowledge to solve real-life problems. Check out my GitHub for more!";
});
