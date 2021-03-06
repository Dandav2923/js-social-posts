// alert ('ciao');
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
//     - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.

// struttura della card :
// <div class="post">
//     <div class="post__header">
//         <div class="post-meta">
//             <div class="post-meta__icon">
//                 <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">
//             </div>
//             <div class="post-meta__data">
//                 <div class="post-meta__author">Phil Mangione</div>
//                 <div class="post-meta__time">4 mesi fa</div>
//             </div>
//         </div>
//     </div>
//     <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
//     <div class="post__image">
//         <img src="https://unsplash.it/600/300?image=171" alt="">
//     </div>
//     <div class="post__footer">
//         <div class="likes js-likes">
//             <div class="likes__cta">
//                 <a class="like-button  js-like-button" href="#" data-postid="1">
//                     <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                     <span class="like-button__label">Mi Piace</span>
//                 </a>
//             </div>
//             <div class="likes__counter">
//                 Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
//             </div>
//         </div>
//     </div>
// </div>

// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.

// creaiamo una funzione per generare casualmente il numero di likes al post 
function getLikes(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let likes = getLikes (1, 100000);
// console.log(likes);
let likes2 = getLikes(1, 100000);
let likes3 = getLikes(1, 100000);

// creaimo una data per i post 
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const date =  randomDate(new Date(2021, 0, 1), new Date());
// console.log(data);
const date2 = randomDate(new Date(2021, 0, 1), new Date());
const date3 = randomDate(new Date(2021, 0, 1), new Date());


// console.log(d.toDateString());
let post = [
    {
        imageProfile: `https://unsplash.it/300/300?image=15`,
        author: `Phil Mangione`,
        date: date,
        text: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://unsplash.it/600/300?image=171`,
        counterLike: getLikes(1, 100000),
    },
    {
        imageProfile: `https://unsplash.it/300/300?image=15`,
        author: `Phil Mangione`,
        date: date2,
        text: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        counterLike: getLikes(1, 100000),
    },
    {
        imageProfile: `https://unsplash.it/300/300?image=15`,
        author: `Phil Mangione`,
        date: date3,
        text: `Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.`,
        imagePost: `https://unsplash.it/600/300?image=171`,
        counterLike: getLikes(1, 100000),
    },
];

// creaiamo una funzione per stampare i post 
function printPost(array, container) {
    container.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        const templatePost = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${obj.imageProfile}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${obj.author}</div>
                        <div class="post-meta__time">${obj.date.toDateString()}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${obj.text}</div>
            <div class="post__image">
                <img src="${obj.imagePost}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${obj.counterLike}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
      `;
        container.innerHTML += templatePost;
    }
}

const container = document.getElementById('container');
printPost(post, container);


const containerLikes = document.querySelectorAll('.likes__counter');
console.log(containerLikes);
const button = document.querySelectorAll('.likes__cta');
console.log(button);
let index;
for (let index = 0; index < button.length; index++) {
    button[index].addEventListener('click', function (event) {
        event.preventDefault();
        containerLikes[index].innerHTML = '';
        let newLikes = post[index].counterLike + 1;
        console.log(newLikes);
        const containerNewLikes = `
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${newLikes}</b> persone
        </div>
        `;
        containerLikes[index].innerHTML = containerNewLikes;
    });  
} 
// button.addEventListener('click', function() {
//     containerLikes.innerHTML ='';
//     let newLikes = likes + 1;
//     const containerNewLikes = `
//     <div class="likes__counter">
//         Piace a <b id="like-counter-1" class="js-likes-counter">${newLikes}</b> persone
//     </div>
//     `;
//     containerLikes.innerHTML = containerNewLikes;
// });