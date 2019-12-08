let a = document.getElementById('add');
let x = document.getElementById('additem');
let span = document.getElementById('span');
let q = document.getElementById('time');
let j;
let v = 100;
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
plus.onclick = () => {
  v+= 50
  span.innerText=v;
}
minus.onclick = () =>{
  v-= 50
  span.innerText=v;

}
a.onclick = () => {
  x.parentNode.removeChild(x);
  a.parentNode.removeChild(a);
  q.parentNode.removeChild(q);
  
  j = x.value;
  b = q.value;
  j = j.split(" ");
  console.log(j)
  for (let i = 0; j.length > i; i++) {
    console.log(j[i]);  
    setTimeout(function () {
      span.innerText = j[i];
      console.log(j[i])
    }
      ,  ((100/v)*1000) * i);

  }
}
function setText(elem, text) {
  elem.innerText = text;
}
