import createHome from './home';
import createMenu from './menu';
import createContact from './contact';

const switchTab = (e) => {
    if (e.target.classList.contains('active')) return;

    const main = document.querySelector('.main');
    main.replaceChildren();

    const tabs = document.querySelectorAll('.tab');
    for (const tab of tabs) {
        tab.classList.remove('active');
    }
    e.target.classList.add('active');

    switch (e.target.textContent) {
        case 'Home':
            createHome();
            break;
        case 'Menu':
            createMenu();
            break;
        case 'Contact':
            createContact();
            break;
        default:
            break;
    }
}

const createHeader = () => {
    const header = document.createElement('header');
    header.classList.add('header');

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Falafel Factory';
    header.appendChild(headerTitle);

    const tabs = document.createElement('nav');
    tabs.classList.add('tabs');

    const tab = document.createElement('button')
    tab.classList.add('tab');

    const homeTab = tab.cloneNode();
    homeTab.classList.add('active');
    homeTab.textContent = 'Home';
    tabs.appendChild(homeTab);

    const menuTab = tab.cloneNode();
    menuTab.textContent = 'Menu';
    tabs.appendChild(menuTab);

    const contactTab = tab.cloneNode();
    contactTab.textContent = 'Contact';
    tabs.appendChild(contactTab);

    tabs.addEventListener('click', switchTab);

    header.appendChild(tabs);

    return header;
}

const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');

    return main;
}

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent = 'Copyright © 2022 by Stanisław Olejniczak';
    footer.appendChild(footerText);

    return footer;
}

export default function initalizePage() {
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createHome());
    content.appendChild(createFooter());
}
