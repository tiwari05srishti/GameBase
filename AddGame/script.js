const cafeList = document.querySelector('#cafe-list') ;
const form = document.querySelector('#add-cafe-form');

// create element and render cafe
function renderCafe(doc){
   let li = document.createElement('li');
   let games = document.createElement('span');
   let links = document.createElement('span'); 
   let cross = document.createElement('div');
   
   li.setAttribute('data-id', doc.id);
   games.textContent = doc.data().Game;
   links.textContent = doc.data().Link;
   cross.textContent = "✖";

   li.appendChild(games);
   li.appendChild(links);
   li.appendChild(cross);

   cafeList.appendChild(li);

   // deleting data

//    cross.addEventListener('click', (e) =>{
//        e.stopPropagation();
//        let id = e.parentElement.getAttribute('data-id');
//        db.collection('Games').doc(id).delete();
//    });
   cross.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('Games').doc(id).delete();
});
}
// getting data
// db.collection('Games').get().then(snapshot =>{
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc);
//     })
// })

// saving data

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Games').add({
        Game: form.games.value,
        Link: form.links.value
    })
    form.games.value = '';
    form.links.value = '';
})

// real time listener
db.collection('Games').orderBy('Game').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change => {
        console.log(change.doc.data());
        if(change.type == 'added'){
            renderCafe(change.doc);
        } else if (change.type == 'removed'){
            let li = cafeList.querySelector('[data-id=' + change.doc.id + ']');
            cafeList.removeChild(li);
        }
    });
});