var heros = [
	{   Id: 0, 
		Name: 'Batman',
		Power: 'Fist fighting',
		Badass: 10
	},
	{	Id: 1,
		Name: 'Superman',
		Power: 'Laser eyes',
		Badass: 7
	},
	{	Id: 2,
		Name: 'Flash',
		Power: 'Too fast',
		Badass: 5
	},
	{	Id: 3,
		Name: 'Spiderman',
		Power: 'Just a nice guy',
		Badass: 1
	},
	{	Id: 4,
		Name: 'Hulk',
		Power: 'SMASH!',
		Badass: 42
	}
];

var total = heros.length;

var mainPage = {
	template: '#mainPage',
	data: function () {
		return {heros};
	}
};


var  infoHero = {
	template: '#infoHero',
	data: function () {
		return { hero: heros[getIndex(this.$route.params.hero_id)]};
	}
};

var  editHero = {
	template: '#editHero',
	data: function () {
		return { 
			curHero: {
				Name: heros[getIndex(this.$route.params.hero_id)].Name,
				Power: heros[getIndex(this.$route.params.hero_id)].Power,
				Badass: heros[getIndex(this.$route.params.hero_id)].Badass,
			}
			
		};
	},
	methods: {
		checkValidInput: checkValidInput,
		editHero: function () {
			if(this.curHero.Name == '') {
				document.getElementById("nameField").style.display="inline";
			}
			else if(this.curHero.Power == '') {
				document.getElementById("powerField").style.display="inline";
			}
			else {
				heros[getIndex(this.$route.params.hero_id)].Name = this.curHero.Name;
				heros[getIndex(this.$route.params.hero_id)].Power = this.curHero.Power;
				heros[getIndex(this.$route.params.hero_id)].Badass = this.curHero.Badass;
				router.push('/');
			}			
		}
	}
};

function checkValidInput() {
	document.getElementById("nameField").style.display="none";
	document.getElementById("powerField").style.display="none";
}


var  addHero = {
	template: '#addHero',
	data: function () {
		return { tempHero: {
			Id: total++,
			Name: '',
			Power: '',
			Badass: 0
		}};
	},
	methods: {
		checkValidInput: checkValidInput,
		addHero: function () {
			var hero = this.tempHero;
			if(hero.Name == '') {
				document.getElementById("nameField").style.display="inline";
			}
			else if(hero.Power == '') {
				document.getElementById("powerField").style.display="inline";
			}
			else {
				heros.push({
					Id: hero.Id,
					Name: hero.Name,
					Power: hero.Power,
					Badass: hero.Badass
				});
				router.push('/');
			}			
		}
	}
};


var deleteHero = {
	template: '#deleteHero',
	data: function () {
		
		return { hero: heros[getIndex(this.$route.params.hero_id)]};
	},
	methods: {
		deleteHero: function () {
			remove(this.$route.params.hero_id);
			router.push('/');
		}
	}
};
function getIndex(hero_id) {
	for (var i = 0; i < heros.length; i++) {
		if(heros[i].Id == hero_id) {
			return i;
		}
	}
}
function remove(hero_id) {
	heros.splice(getIndex(hero_id),1);
}

const routes = [
  { path: '/', 
  	name: "mainPage",
  	component: mainPage },
  { path: '/info/:hero_id', 
  	name: "info",
  	component: infoHero },
  { path: '/edit/:hero_id', 
  	name: "edit",
  	component: editHero },
  { path: '/delete/:hero_id', 
  	name: "delete",
  	component: deleteHero },
  { path: '/addHero', 
  	name: "addHero",
  	component: addHero }
];


const router = new VueRouter({
  routes 
});


var app = new Vue({
  router
}).$mount('#app');