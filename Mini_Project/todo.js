const button = document.querySelector('#btn');
const list = document.querySelector('#list');


button.onclick = function(){
    let item = document.querySelector("#todo").value;
    console.log(item, typeof(item));
    let text = document.createTextNode(item);
    console.log(text);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
    window.localStorage.setItem('item', 'text');
}
function removeAll(){
    let lst = document.getElementsByTagName("ol");
      lst[0].innerHTML = "";
  }