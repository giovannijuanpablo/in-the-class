let arr =['elafante', 1, true]; //un array
console.log(document.body.children[1]);

console.log(arr[2]);
console.log(arr[1]);
console.log(arr[0]);

function addList() {
  let lista=  document.createElement('ul');
  let li1=  document.createElement('li');
  li1.textContent = 'Item 1'
  let li2=  document.createElement('li');
  li2.textContent = 'Item 2'
  let li3=  document.createElement('li');
  li3.textContent = 'Item 3'
  lista.append(li1);
  lista.append(li2);
  lista.append(li3);
  document.body.append(lista)
}

let todosLosParrafos = document.querySelectorAll('p')
for (let p of todosLosParrafos) {
  p.classList.add('dark')
}
console.log(document.getElementById('form'));
console.log(document.querySelectorAll('.cambia'));

let parraos = document.querySelectorAll('.cambia');

for (let o of parrafos) {
  p.textContent = 'Me cambiaron'
}
