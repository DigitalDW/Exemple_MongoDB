# Exemple_MongoDB
Exercices pour les bases de données avec MongoDB

## Mise en place
Clonez simplement ce Repository (idéalement sur le bureau) et utilisez la ligne suivante dans le terminal (ou la console windows) pour pointer vers le bon dossier:

### Mac
<pre>
  cd Desktop/Exemple_MongoDB/exercices_mongodb
</pre>
### Windows
<pre>
  cd %systemdrive%\users\%username%\Desktop\exercices_mongodb
</pre>

Ensuite, entrez:
<pre>
  meteor npm install
</pre>
Puis:
<pre>
  meteor
</pre>
Dans l'invite de commande pour lancer l'application. Puis, appuyez sur le bouton "Lancer" qui fera l'insert dans la base de données. Pour finir: ouvrez une nouvelle fenêtre du terminal et pointez à nouveau vers le dossier et enfin entrez la ligne suivante:
<pre>
  meteor mongo
</pre>
Voilà! Vous pouvez commencer les exercices:

# Exercices

Employez la méthode .count() après votre query pour vérifier rapidement si vos matchs sont corrects.
----
1) Retourner le modèle et la couleur des voitures de la marque Toyota. 

Réponse: .count()=4

---
2) Retourner le modèle et le prix de toutes les voitures de marque Mazda et tous les véhicules blanche. 

Réponse: .count()=8

---
3) Retourner tous les modèles et marques des les voitures rouges et oranges dont le prix est inférieur à 125000. 

Réponse: .count()=5

---
4) Retourner tous les modèles, prix et état d'occasion des voitures rouges, blanches et grises familiales qui ne sont pas vendues. 

Réponse: .count()=4

---
5) Retourner tous les modèles, marques et prix des voitures familiales, polyvalentes, musclecar et sportives, rouges, oranges, vertes, jaunes et noires qui ne sont pas vendues et qui ont plus de 100000 km au compteur.

Réponse: .count()=5

---
6) Modifier le compteur kilométrique de la Toyota Prius (actuellement à 0) à 25000.

Pour vérifier, c/c la ligne suivante: db.voitures.find({modele:"Prius"},{"statut_vente.km":1})

---
7) Modifier la couleur de toutes les voitures rouges en rose.

Vérification: db.voitures.find({$or:[{couleur:"Rouge"}, {couleur:"Rose"}]},{couleur:1}) (doit afficher toutes les voitures rouges ou roses, mais n'affiche que des roses -> réussi!)

---
8) Supprimer les voitures oranges et Roses.

Vérification: db.voitures.find({},{couleur:1}) (affiche les vouleurs de toutes les voitures -> il n'y a ni orange ni rose (ni rouge!))

---
9) Supprimer le contenu de la collection puis ré-insérer les éléments.

---
10) Boss final: Changez la couleur de toutes les voitures: elles deviennent toutes rouges. Aussi, changez leur statut "vendue" en false. Comme on est un peu véreux, on va aussi mettre tous les compteurs à 0 km et doubler le prix de tous les véhicules. Supprimez toutes les voitures qui ne sont pas sportives. Enfin, vendez toutes les Lamborghinis, les Lotus et les Mazdas. Supprimez les voitures vendues.

Réponse, à la fin, il ne devrait rester que 3 voitures: la Koenigsegg Agera RS, la Pagani Zonda et la VW Golf GT

---
11) Bonus: amusez-vous à ajouter des véhicules via le formulaire sur la page et cherchez à changer, par exemple, le modèle d'une voiture (vous verrez que la liste change instantanément!) 

---
# Solutions:

<a href="https://gist.github.com/DigitalDW/629dbcae94291c78be7570c556d6f0a2#file-reponses-txt">Réponses</a>
