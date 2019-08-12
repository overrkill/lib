const addbtn = document.querySelector('.addb');
const afrm = document.querySelector(".form");
addbtn.addEventListener('click', function() {
    afrm.classList.toggle("fadein")
})

const addbook = () => {
    const book = document.createElement("div");
    const author = document.createElement("div");
    const title = document.createElement("div");
    const pages = document.createElement("div");
    const read = document.createElement("div");
    const remover = document.createElement("div");
    remover.classList.add("remove");
    remover.textContent = "x";
    remover.addEventListener('click', () => {
        book.remove();
    });
    read.addEventListener(
        'click',
        () => {
            if (read.textContent == "X") {
                read.textContent = "O"
            } else {
                read.textContent = "X"
            }
        }
    )
    const list = document.querySelector(".list");
    title.textContent = document.getElementById("title").value;
    author.textContent = document.getElementById("author").value;
    pages.textContent = document.getElementById("pages").value;

    if (document.getElementById("read").checked == true) {
        read.textContent = "O";
    } else {
        read.textContent = "X";
    }
    book.classList.add("item");
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);
    book.appendChild(read);
    book.appendChild(remover);
    list.appendChild(book);
    afrm.classList.toggle("fadein");

}