const addbtn = document.querySelector('.addb');
const afrm = document.querySelector(".form");
addbtn.addEventListener('click',function (){
afrm.classList.toggle("fadein")
})

const addbook= ()=>
{
    const book = document.createElement("div");
    const remover= document.createElement("div");
    remover.classList.add("remove");
    remover.textContent="x";
    remover.addEventListener('click',()=>{
        book.remove();
    });
  
    const list = document.querySelector(".list");
    book.textContent=`${document.getElementById("title").value} is written by ${document.getElementById("author").value}`;
    book.classList.add("item");
    book.appendChild(remover)
    list.appendChild(book);
    afrm.classList.toggle("fadein")
    
}