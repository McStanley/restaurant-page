import Front from './assets/front.jpg';

export default function createHome() {
    const main = document.querySelector('.main');

    const mainText = document.createElement('h2');
    mainText.textContent = 'Try the best falafel in town!';
    main.appendChild(mainText);

    const front = new Image();
    front.src = Front;
    main.appendChild(front);

    return main;
}
