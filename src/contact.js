import LogoFB from './assets/facebook.png';
import LogoIG from './assets/instagram.png';

export default function createContact() {
    const main = document.querySelector('.main');

    const mainText = document.createElement('h2');
    mainText.textContent = 'Contact us';
    main.appendChild(mainText);

    const contactGrid = document.createElement('div');
    contactGrid.classList.add('contact-grid');

    const contactSection = document.createElement('div');
    contactSection.classList.add('contact-section');

    // section 1
    const section1 = contactSection.cloneNode();

    const header1 = document.createElement('h3');
    header1.textContent = 'Get in touch';
    section1.appendChild(header1);

    const tel = document.createElement('a');
    tel.setAttribute('href', '#');
    tel.textContent = '+48 000 000 000';
    section1.appendChild(tel);

    const email = document.createElement('a');
    email.setAttribute('href', '#');
    email.textContent = 'contact@falafel.factory';
    section1.appendChild(email);

    contactGrid.appendChild(section1);

    // section 2
    const section2 = contactSection.cloneNode();

    const header2 = document.createElement('h3');
    header2.textContent = 'Our hours';
    section2.appendChild(header2);

    const hours = document.createElement('p');
    hours.innerText = 'Mon-Fri: 11:00 - 21:00\r\nSat-Sun: 12:00 - 00:00';
    section2.appendChild(hours);

    contactGrid.appendChild(section2);

    // section 3
    const section3 = contactSection.cloneNode();

    const header3 = document.createElement('h3');
    header3.textContent = 'Follow us';
    section3.appendChild(header3);

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');

    const logoFB = document.createElement('img');
    logoFB.src = LogoFB;
    logoContainer.appendChild(logoFB);

    const logoIG = document.createElement('img');
    logoIG.src = LogoIG;
    logoContainer.appendChild(logoIG);


    section3.appendChild(logoContainer);
    contactGrid.appendChild(section3);

    // section 4
    const section4 = contactSection.cloneNode();

    const header4 = document.createElement('h3');
    header4.textContent = 'Location';
    section4.appendChild(header4);

    const location = document.createElement('p');
    location.textContent = 'Plac Defilad 1\r\nWarsaw, Poland';
    section4.appendChild(location);
    contactGrid.appendChild(section4);

    main.appendChild(contactGrid);

    return main;
}
