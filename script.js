let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    formValidation()
});

let formValidation = () =>{
    if(input.value === ""){
        msg.innerHTML = "Failer to input fild";
    }else{
        msg.innerHTML = "";
        acceptData()
    }
}

let data = {};

let acceptData = () =>{
    data['text'] = input.value;
    console.log(data)
    createPost()
}


let createPost = () =>{
    posts.innerHTML += `
        <div>
            <p>${data.text}</p>
                <span class="option">
                <i onclick="udatePost(this)" class="fas fa-edit"></i>
                <i onclick="removePost(this)" class="fas fa-trash-alt"></i>
            </span>
        </div>
    `;

    input.value = ''
}

let removePost = (e) => {
    e.parentElement.parentElement.remove()
}

let udatePost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove()
}