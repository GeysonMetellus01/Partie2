document.querySelectorAll('a').forEach((genre)=>
{
    document.querySelectorAll('.icon-navigation').forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            e.preventDefault();
        })
    })
    genre.addEventListener('click',(e)=>{

        /*Morceau de code permettant de rentrer sur la liste de documents par categories*/
        const section_document_catalogue = document.querySelector('.documents-catalogue');
        section_document_catalogue.style.display='block';
        const btn_close_document_catalogue = document.querySelector('.retour-au-catalogue');
        btn_close_document_catalogue.addEventListener('click',()=>{
            section_document_catalogue.style.display='none';
        })

        /*Morceau permettant de creer un titre par rapport au choix de l'utilisateur*/
        const info_precis = e.target.textContent.trim().toLowerCase();
        const titre_catalogue = document.querySelector('.conteneur-titre-catalogue');
        const element_titre = document.createElement('h1');
        element_titre.classList.add('titre-catalogue');
        const titre = element_titre.textContent = info_precis;
        titre_catalogue.innerHTML =`<h1>Nos ${titre.charAt(0).toUpperCase()+titre.slice(1)}:</h1`
        titre_catalogue.classList.add('titre-catalogue');
    })
})


/*Travaillons sur la partie qui affichera les informations lors du click sur un document*/
const documentClick = document.querySelectorAll('.document-element').forEach((doc)=>{
    doc.addEventListener('click',(e)=>{
        /*Veritable lignes de code*/
        /*Tout d'abord affichons la section lorsqu'on clique sur un document*/
        const modalInfoDoc = document.querySelector('.info-bref-doc');
        modalInfoDoc.style.display='block';
        /*fermons la section avec le btn-retour*/
        const closeModalInfoDoc = document.querySelector('.retour-au-catalogueList');
        closeModalInfoDoc.addEventListener('click',()=>{
            modalInfoDoc.style.display='none';
        })
        /*Maintenant remplissons de manière dynamique les informatives relatives au documents sélectionnés*/
        /*Recuperons les infos*/
        const infoDoc = e.currentTarget;
        console.log(infoDoc);
        const titreDoc =  infoDoc.querySelector('.titre-doc').textContent;
        console.log(titreDoc);
        const auteurDoc = infoDoc.querySelector('.auteur-doc').textContent;
        console.log(auteurDoc);
        const imageDoc = infoDoc.querySelector('.image-couverture');
        console.log(imageDoc);

        /*Inserons les infos receuillis*/
        const imageDocument = document.querySelector('.conteneur-couverture-doc');
        imageDocument.appendChild(imageDoc);
        const titreDocument = document.querySelector('.info-titre-doc');
        titreDocument.innerText = titreDoc;
        const auteurDocument = document.querySelector('.info-auteur-doc');
        auteurDocument.innerText = auteurDoc;

        





        
    })
});

