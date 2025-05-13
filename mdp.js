

// Script Js pour le choix de pays et departement.
const communesParDepartement = {
    "Ouest": [ "Arcahaie", "Cabaret", "Croix-des-Bouquets", "Ganthier", "Thomazeau", "Cornillon",
                "Fonds-Verrettes", "Anse-à-Galets", "Pointe-à-Raquette", "Léogâne", "Petit-Goâve", "Grand-Goâve",
                "Port-au-Prince", "Carrefour", "Delmas" , "Pétion-Ville", "Kenscoff", "Cité Soleil", "Gressier",
                "Tabarre" 
             ],
    "Artibonite" : [ "Dessalines", "Desdunes", "Grande-Saline", "Petite-Rivière-de-l'Artibonite", "Gonaïves", 
                     "Ennery", "L'Estère", "Gros-Morne","Anse-Rouge","Terre-Neuve" ,"Marmelade", 
                     "Saint-Michel-de-l'Attalaye","Saint-Marc", "Verrettes", "La Chapelle"
                    ],

    "Centre" : [ "Cerca-la-Source", "Thomassique","Hinche", "Cerca-Carvajal", "Maïssade", "Thomonde",
                 "Lascahobas", "Belladère","Savanette","Mirebalais", "Saut-d'Eau", "Boucan-Carré"
                ],

    "Nord": [ "Cap-Haïtien","Quartier-Morin","Limonade","Plaine-du-Nord","Milot","Acul-du-Nord","Grande Rivière du Nord",
                "Bahon","Saint-Raphaël","Dondon","Le-Borgne", "Port-Margot","Ranquitte","Pignon","La Victoire", 
                "Limbé","Bas-Limbé","Plaissance","Pilate"
            ],

    "Nord-Est" : ["Fort-Liberté", "Perches", "Ferrier", "Ouanaminthe", "Capotille", "Mont-Organisé", "Trou-du-Nord",
                  "Caracol" ,"Sainte-Suzanne","Terrier-Rouge", "Vallières", "Carice", "Mombin-Crochu"
                 ],

    "Nord-Ouest" : ["Môle-Saint-Nicolas", "Baie-de-Henne", "Bombardopolis", "Jean-Rabel", "Port-de-Paix", 
                    "Bassin-Bleu", "Chansolme", "La Tortue","La pointe des Palmistes","Saint-Louis-du-Nord",
                    "Anse-à-Foleur"
                    ],

    "Sud-Est" : ["Bainet", "Côte-de-Fer", "Belle-Anse", "Anse-à-Pitres","Grand-Gosier", "Thiotte", "Jacmel", 
                 "Cayes-Jacmel", "Marigot", "La Vallée-de-Jacmel"
                ],

    "Nippes" : [ "Miragoâne", "Petite-Rivière-de-Nippes", "Fonds-des-Nègres", "Paillant", "Anse-à-Veau", "L'Asile", 
                 "Petit-Trou-de-Nippes", "Plaisance-du-Sud", "Arnaud", "Barradères", "Grand-Boucan"
                ],

    "Sud": ["Aquin","Cavaillon","Fonds-des-Blancs","Saint-Louis-du-Sud","Les Cayes", "Camp-Perrin", "Chantal", 
            "Ducis", "Maniche", "Île-à-Vache", "Torbeck", "Les Chardonnières", "Les Anglais", "Tiburon", 
            "Les Côteaux", "Port-à-Piment", "Roche-à-Bateau", "Port-Salut", "Arniquet", "Saint-Jean-du-Sud"
            ],

    "Grand-Anse" : ["Anse-d'Ainault", "Dame-Marie", "Les Irois", "Corail", "Roseaux","Beaumont", "PestelLes",
                    "Îles Cayemites", "Jérémie", "Marfranc", "Moron", "Chambellan", "Abricots", "Trou-Bonbon"
                    ],
};


function choixDuPays() {
const paysSelection = document.getElementById("pays");
const haitiSection = document.querySelector(".dept_com");
const departementSelection = document.getElementById("departement");


if (paysSelection.value === "haiti") {
    haitiSection.classList.remove("hidden");
    departementSelect.setAttribute("required", "required");
} 
else{
    haitiSection.classList.add("hidden");
    departementSelect.removeAttribute("required");

    // Réinitialiser les champs
    departementSelect.value = "";
    document.getElementById("commune").innerHTML = '<option value="">-- Sélectionnez une commune --</option>';
}
}
function updateCommunes() {
const departementSelect = document.getElementById("departement");
const communeSelect = document.getElementById("commune");
const selectedDep = departementSelect.value;

communeSelect.innerHTML = '<option value="">Sélectionnez une commune</option>';

if (selectedDep && communesParDepartement[selectedDep]) {
    communesParDepartement[selectedDep].forEach(function(commune) {
            const option = document.createElement("option");
            option.value = commune;
            option.textContent = commune;
            communeSelect.appendChild(option);
        });
    }
}



/*Script page d'info Perso ---- */
/*Affichage du fonctionnalite changer le mot de passe au click sur le bouton*/
const btn_mod = document.querySelector('.btn-chang-mdp');
const conteneur_mdp = document.querySelector('.conteneur-mdp-mod');
const annul = document.querySelector('.anunuler-btn-mdp');
btn_mod.addEventListener('click',()=>{
    conteneur_mdp.classList.add('active-mdp-mot');
})
annul.addEventListener('click',()=>{
    conteneur_mdp.classList.remove('active-mdp-mot');
})