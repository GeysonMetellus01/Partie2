/*Javascript pour afficher la section de recherche */
const btn_open = document.querySelector('.point-recherche');
const btn_exit = document.querySelector('.btn-exit');
const sectionRecherche = document.querySelector('.section-recherche');

btn_open.addEventListener('click',()=>{
    sectionRecherche.classList.add('active');
})

btn_exit.addEventListener('click',()=>{
    sectionRecherche.classList.remove('active');
})

/*Script pour afficher le parametre d'utilisateur en cliquant sur l'icone user*/
const btn_open_option_user = document.querySelector('.user-icone-option');
const option_user = document.querySelector('.conteneur-option-user');

btn_open_option_user.addEventListener('click',()=>{
    option_user.classList.toggle('affiche-option-user');
});


/////////////////////////

