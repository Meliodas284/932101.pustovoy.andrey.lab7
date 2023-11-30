const inputElement = document.getElementById("count");
const firstButton = document.getElementById("first");
const secondButton = document.getElementById("second");
const thirdButton = document.getElementById("third");
const canvas = document.querySelector(".canvas-block");

firstButton.addEventListener("click", (e) => {
	e.preventDefault();
	let count = inputElement.value;
	for (let i = 0; i < Number(count); i++) drawRectangle();
});

secondButton.addEventListener("click", (e) => {
	e.preventDefault();
	let count = inputElement.value;
	for (let i = 0; i < Number(count); i++) drawTriangle();
});

thirdButton.addEventListener("click", (e) => {
	e.preventDefault();
	let count = inputElement.value;
	for (let i = 0; i < Number(count); i++) drawCircle();
});


function drawRectangle(){
	const rectangle = document.createElement('div');
    rectangle.classList.add('rectangle');

    const canvasWidth = canvas.offsetWidth;
    const canvasHeight = canvas.offsetHeight;
    const width = Math.floor(Math.random() * 150) + 50;
    const height = Math.floor(Math.random() * 150) + 50;
    const top = Math.floor(Math.random() * (canvasHeight - height));
    const left = Math.floor(Math.random() * (canvasWidth - width));

    rectangle.style.width = `${width}px`;
    rectangle.style.height = `${height}px`;
    rectangle.style.top = `${top}px`;
    rectangle.style.left = `${left}px`;

    canvas.appendChild(rectangle);

    rectangle.addEventListener("dblclick", (e) =>{
    	e.preventDefault();
    	rectangle.remove();
    });
}

function drawTriangle(){
	const triangle = document.createElement('div');
  	triangle.classList.add('triangle');

  	const canvasWidth = canvas.offsetWidth;
  	const canvasHeight = canvas.offsetHeight;
  	const size = Math.floor(Math.random() * 100) + 50; // Размер треугольника от 50 до 149 пикселей
  	const top = Math.floor(Math.random() * (canvasHeight - size));
  	const left = Math.floor(Math.random() * (canvasWidth - size));

  	triangle.style.borderLeftWidth = `${size / 2}px`;
  	triangle.style.borderRightWidth = `${size / 2}px`;
  	triangle.style.borderBottomWidth = `${size}px`;
  	triangle.style.top = `${top}px`;
  	triangle.style.left = `${left}px`;

  	canvas.appendChild(triangle);

  	triangle.addEventListener("dblclick", (e) =>{
    	e.preventDefault();
    	triangle.remove();
    });
}

function drawCircle(){
	const circle = document.createElement('div');
	circle.classList.add('circle');

  	const canvasWidth = canvas.offsetWidth;
  	const canvasHeight = canvas.offsetHeight;
  	const radius = Math.floor(Math.random() * 100) + 20;
  	const top = Math.floor(Math.random() * (canvasHeight - 2 * radius));
  	const left = Math.floor(Math.random() * (canvasWidth - 2 * radius));

  	circle.style.width = `${2 * radius}px`;
  	circle.style.height = `${2 * radius}px`;
  	circle.style.top = `${top}px`;
  	circle.style.left = `${left}px`;

  	canvas.appendChild(circle);

  	circle.addEventListener("dblclick", (e) =>{
    	e.preventDefault();
    	circle.remove();
    });
}