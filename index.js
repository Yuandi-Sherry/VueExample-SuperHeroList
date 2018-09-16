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

var mainPage = {
	template: '#mainPage',
	data: function () {
		return {heros};
	}
};


var  infoHero = {
	template: '#infoHero',
	data: function () {
		return { hero: getHero( this.$route.params.hero_id)};
	}
};

var  editHero = {
	template: '#editHero',
	data: function () {
		return { hero: getHero(this.$route.params.hero_id)};
	}
};

function getHero(hero_id) {
	for (var i = 0; i < heros.length; i++) {
		if(heros[i].Id == hero_id) {
			return heros[i];
		}
	}
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
  	component: editHero }
];


const router = new VueRouter({
  routes 
});


var app = new Vue({
  router
}).$mount('#app');