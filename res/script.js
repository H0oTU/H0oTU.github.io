"use strict";

// SPA content for each page
const pages = {
    home: `
        <h1>HOoT ~ <em>Hacking Organization of Temple</em></h1>
        <p>Welcome to Temple University's cybersecurity and hacking organization.<br>
        <strong>Here to hack? Join us!</strong></p>
      `,
    about: `
        <h1>About HOoT</h1>
        <p>HOoT is Temple University's student-run hacking and cybersecurity club. We welcome all skill levels and backgrounds. 
        Our mission is to foster a collaborative environment for learning, ethical hacking, and cybersecurity awareness.</p>
        <ul>
          <li>Workshops & hands-on sessions</li>
          <li>CTF competitions</li>
          <li>Guest speakers & networking</li>
        </ul>
        <br/>
      <em style="font-size: 0.9rem">Founded September 2025</em>
      `,
    events: `
        <h1>Events</h1>
        <p>Check out our upcoming events and past highlights:</p>
        <ul>
          <li><strong>CTFs:</strong> See <a href="#contact">Discord</a> for details</li>
        </ul>
      `,
    resources: `
        <h1>Blog & Resources</h1>
        <p>Explore our curated resources and blog posts:
          <br/> Coming soon!
        </p>
      `,
    contact: `
        <h1>Contact</h1>
        <p>Want to get in touch? Join our Discord and follow us on Instagram!
        <br/><br/><a href="https://discord.gg/NQpFsR8xMu" target="_blank"><img class=img src="res/discord.png"/></a>
        <a href="https://www.instagram.com/hoot.temple/" target="_blank"><img class=img src="res/instagram.png"/></a>
        </p>
      `
};

function renderPage(page) {
    const main = document.getElementById('main-content');
    if (pages[page]) {
        main.innerHTML = pages[page];
    } else {
        main.innerHTML = pages['home'];
    }
}

function handleNav(e) {
    if (e.target.classList.contains('nav-link')) {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        window.location.hash = page;
        renderPage(page);
        setActiveLink(page);
    }
}

function setActiveLink(page) {
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('data-page') === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function initSPA() {
    // Initial render
    let page = window.location.hash.replace('#', '') || 'home';
    renderPage(page);
    setActiveLink(page);
    // Listen for nav clicks
    document.querySelector('nav').addEventListener('click', handleNav);
    // Listen for hash changes (back/forward)
    window.addEventListener('hashchange', () => {
        let page = window.location.hash.replace('#', '') || 'home';
        renderPage(page);
        setActiveLink(page);
    });
}

window.addEventListener('DOMContentLoaded', initSPA);