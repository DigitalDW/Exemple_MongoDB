import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import { Voiture } from '../api/voitures.js'

import './body.html'
import '../templates/affichage_liste.html'
import '../templates/formulaire.html'

Template.body.helpers({
	voitures(){
		return Voiture.find({})
	}
});

Template.formulaire.events({
	'submit .ajouter': function(event){
		event.preventDefault();
		const target = event.target;
		const model = target.nom.value;
		const constructor = target.marque.value;
		const color = target.color.value;
		const classe = target.type.value;
		const num_km = target.num_km.value;
		const occasion = target.occas.value;
		const prix = target.prix.value;
		const stat_vendu = target.vendu.value;
		if(occasion == "occas"){
			occas = true;
		}else{
			if(occasion == "neuve"){
				occas = false;
			}
		}
		if(stat_vendu == "vendue"){
			vendue = true;
		}else{
			if(stat_vendu == "dispo"){
				vendue = false;
			}
		}
		Voiture.insert({
			modele:model,
			marque:constructor,
			couleur:color,
			classe:classe,
			statut_vente:{
			    km:num_km,
			    occasion:occas,
			    prix:prix,
			    vendue:vendue
			}
		})
	}
});