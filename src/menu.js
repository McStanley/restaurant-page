import Menu_1 from './assets/menu_1.jpg';
import Menu_2 from './assets/menu_2.jpg';
import Menu_3 from './assets/menu_3.jpg';
import Menu_4 from './assets/menu_4.jpg';
import Menu_5 from './assets/menu_5.jpg';
import Menu_6 from './assets/menu_6.jpg';

export default function createMenu() {
    const main = document.querySelector('.main');

    const mainText = document.createElement('h2');
    mainText.textContent = 'Our menu';
    main.appendChild(mainText);

    // create menu grid
    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    // define menu items to be generated
    const menuItems = [
        { name: 'Falafel 1', photo: Menu_1 },
        { name: 'Falafel 2', photo: Menu_2 },
        { name: 'Falafel 3', photo: Menu_3 },
        { name: 'Falafel 4', photo: Menu_4 },
        { name: 'Falafel 5', photo: Menu_5 },
        { name: 'Falafel 6', photo: Menu_6 },
    ];
    // generate menu items
    for (const item of menuItems) {
        const menuItem = document.createElement('figure');
        menuItem.classList.add('menu-item');

        const image = new Image();
        image.src = item.photo;
        menuItem.appendChild(image);

        const caption = document.createElement('figcaption');
        caption.textContent = item.name;
        menuItem.appendChild(caption);

        menuGrid.appendChild(menuItem);
    }

    main.appendChild(menuGrid);

    return main;
}
