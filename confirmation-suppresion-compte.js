const btn_supp_compte = document.querySelector('.btn-sup-compte');
const menu_conteneur = document.querySelector('.page-modal-sup');

const btn_annul_sup_comp = document.querySelector('.btn-annule');
const btn_confirm_sup_comp = document.querySelector('.btn-supp-modal');


btn_supp_compte.addEventListener('click',()=>{
    menu_conteneur.classList.add('active-confirm-option');
})
btn_annul_sup_comp.addEventListener('click',()=>{
    menu_conteneur.classList.remove('active-confirm-option');
})