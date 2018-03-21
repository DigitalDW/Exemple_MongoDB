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

Template.body.events({
	'click #lancer': function(){
		var voitures = [
			{
			modele:"Laguna",
			marque:"Renault",
			couleur:"Bleue",
			classe:"Familiale",
			statut_vente:{
			   	km:30000,
			   	occasion:true,
			    prix:12500,
			    vendue:false
			  	}
			},
			{
			modele:"Elise",
			marque:"Lotus",
			couleur:"Orange",
			classe:"Sportive",
			statut_vente:{
			    km:550000,
			    occasion:true,
			    prix:45000,
			    vendue:false
			  	}
			},
			{
		  	modele:"Gallardo",
		 	marque:"Lamborghini",
		  	couleur:"Rouge",
		  	classe:"Sportive",
		  	statut_vente:{
		    	km:2500,
		    	occasion:false,
		    	prix:250000,
		    	vendue:false
		  		}
			},
			{
			modele:"Camaro RS",
			marque:"Chevrolet",
			couleur:"Noire",
			classe:"Musclecar",
			statut_vente:{
			    km:540000,
			    occasion:true,
			    prix:20000,
			    vendue:true
			  	}
			},
			{
		  	modele:"Sportsroof",
		  	marque:"Ford Mustang",
		  	couleur:"Jaune",
		  	classe:"Musclecar",
		  	statut_vente:{
			    km:145000,
			    occasion:true,
			    prix:67500,
			    vendue:false
		  		}
			},
			{
		  	modele:"Agera RS",
		  	marque:"Koenigsegg",
		  	couleur:"Orange",
		  	classe:"Sportive",
		  	statut_vente:{
			    km:0,
			    occasion:false,
			    prix:500000,
			    vendue:false
			  	}
			},
			{
		  	modele:"Zonda",
		  	marque:"Pagani",
		  	couleur:"Blanche",
		  	classe:"Sportive",
		  	statut_vente:{
			    km:0,
			    occasion:false,
			    prix:450000,
			    vendue:false
			  	}	
			},
			{
		  	modele:"RX8",
		  	marque:"Mazda",
		  	couleur:"Rouge",
		  	classe:"Sportive",
		  	statut_vente:{
		    	km:263000,
		    	occasion:true,
		    	prix:10000,
		    	vendue:false
		  		}
			},
			{
		  	modele:"RX7",
		  	marque:"Mazda",
		  	couleur:"Bleue",
		  	classe:"Sportive",
		  	statut_vente:{
			    km:45000,
			    occasion:true,
			    prix:10000,
			    vendue:false
			  	}
			},
			{
		  	modele:"RX7",
		  	marque:"Mazda",
		  	couleur:"Rouge",
		  	classe:"Sportive",
		  	statut_vente:{
			    km:2000,
			    occasion:false,
			    prix:28000,
			    vendue:false
			  	}
			},
			{
		  	modele:"Panda",
		  	marque:"Fiat",
		  	couleur:"Bleue",
		  	classe:"Citadine",
		  	statut_vente:{
			    km:123000,
			    occasion:true,
			    prix:4500,
			    vendue:true
			  	}
			},
			{
		  	modele:"Starlet",
		  	marque:"Toyota",
		  	couleur:"Verte",
		  	classe:"Polyvalente",
		  	statut_vente:{
			    km:680000,
			    occasion:true,
			    prix:1300,
			    vendue:false
			  	}
			},
			{
		  	modele:"5008 II",
		  	marque:"Peugeot",
		  	couleur:"Blanche",
		  	classe:"Familiale",
		  	statut_vente:{
			    km:350000,
			    occasion:true,
			    prix:12500,
			    vendue:true
			  	}
			},
			{
		  	modele:"Prius",
		  	marque:"Toyota",
		  	couleur:"Grise",
		  	classe:"Familiale",
		  	statut_vente:{
			    km:0,
			    occasion:false,
			    prix:35000,
			    vendue:false
			  	}
			},
			{
		  	modele:"Sprinter Trueno",
		  	marque:"Toyota",
		  	couleur:"Blanche",
		  	classe:"Coupe",
		  	statut_vente:{
			    km:0,
			    occasion:false,
			    prix:87500,
			    vendue:false
			  	}
			},
			{
		  	modele:"Firebird",
		  	marque:"Pontiac",
		  	couleur:"Brune",
		  	classe:"Musclecar",
		  	statut_vente:{
			    km:150000,
			    occasion:true,
			    prix:123000,
			    vendue:true
			  	}
			},
			{
		  	modele:"DMC-12",
		  	marque:"DeLorean",
		  	couleur:"Grise",
		  	classe:"Coupe",
		  	statut_vente:{
			    km:320000,
			    occasion:true,
			    prix:85000,
			    vendue:false
			  	}
			},
			{
		  	modele:"Exige",
		  	marque:"Lotus",
		  	couleur:"Jaune",
		  	classe:"Sportive",
		  	statut_vente:{
			    km:250,
			    occasion:false,
			    prix:125000,
			    vendue:false
			  	}
			},
			{
		  	modele:"Aventador",
		  	marque:"Lamborghini",
		  	couleur:"Rouge",
		  	classe:"Sportive",
		  	statut_vente:{
			    km:0,
			    occasion:false,
			    prix:350000,
			    vendue:false
			  	}
			},
			{
		  	modele:"911",
		  	marque:"Porsche",
		  	couleur:"Grise",
		  	classe:"Coupe",
		  	statut_vente:{
			    km:15000,
			    occasion:true,
			    prix:67500,
			    vendue:true
			  	}
			},
			{
		  	modele:"500",
		  	marque:"Fiat",
		  	couleur:"Rouge",
		  	classe:"Familiale",
		  	statut_vente:{
			    km:340000,
			    occasion:true,
			    prix:1300,
			    vendue:false
			  	}
			},
			{
		  	modele:"Auris",
		  	marque:"Toyota",
		  	couleur:"Blanche",
		  	classe:"Familiale",
		  	statut_vente:{
			    km:345000,
			    occasion:true,
			    prix:3850,
			    vendue:false
			  	}
			},
			{
		  	modele:"Punto",
		  	marque:"Fiat",
		  	couleur:"Rouge",
		  	classe:"Familiale",
		  	statut_vente:{
			    km:20000,
			    occasion:true,
			    prix:4000,
			    vendue:false
			  	}
			},
			{
	  		modele:"Golf GT",
	  		marque:"VW",
	  		couleur:"Grise",
	  		classe:"Sportive",
	  		statut_vente:{
		    	km:325000,
		    	occasion:true,
		    	prix:7600,
		    	vendue:true
		  		}
			},
			{
		  	modele:"ZOE",
		  	marque:"Renault",
		  	couleur:"Blanche",
		  	classe:"Citadine",
		  	statut_vente:{
			    km:0,
			    occasion:false,
			    prix:12500,
			    vendue:false
			  	}
			}
		]
		_.each(voitures, function(doc) { 
		  	Voiture.insert(doc);
		})
	}
})

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