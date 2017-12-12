
var Skill = {
	init: function(name, percent){
		this.name = name;
		this.percent = percent;
	},

	frame: function(color){

		this.color = color;
		var content = document.getElementById("content"); // select div with id "content"
		var skillCnt = document.createElement("div");
		skillCnt.classList.add("skillCnt");
		var skillElt = document.createElement("p"); // create element <p> 
		skillElt.textContent = this.name + " : "; // 

		var div = document.createElement("div"); // create div element  
		div.classList.add("skill");	// add a class for style

		var fillElt = document.createElement("div"); // create a div for color fill
		fillElt.classList.add("level"); // add a class for style
		fillElt.style.backgroundColor = this.color ; // param color

		var level = this.percent;
		//console.log("level : "+ level);
		var size = 0;
		var timer;

		function interval()
		{
			size ++ ;
			fillElt.style.width = size + "%";
			fillElt.textContent = size + " %";
			
			if ( size == level)
			{
				window.clearInterval(timer);
			}
		  
		}

		timer = window.setInterval(interval,40);

	
		content.appendChild(skillCnt);
		skillCnt.appendChild(skillElt)
		skillCnt.appendChild(div);
		div.appendChild(fillElt);
	}, 


};




window.addEventListener("load", function(event){
	
	// create new Skill
	var html = Object.create(Skill);
	html.init("HTML5", 80);
	html.frame("blue");
	//skills.push(html);

	var css = Object.create(Skill);
	css.init("CSS3", 80);
	css.frame("red");
	//skills.push(css);

	var boot = Object.create(Skill);
	boot.init("Bootstrap", 50);
	boot.frame("purple");


	var js = Object.create(Skill);
	js.init("Javascript", 70);
	js.frame("yellow");
	//skills.push(js);

	var jquery = Object.create(Skill);
	jquery.init("JQuery", 50);
	jquery.frame("green");
	//kills.push(jquery);

	var photoshop = Object.create(Skill);
	photoshop.init("Photoshop CS5", 70);
	photoshop.frame("lightBlue");

	var indesign = Object.create(Skill);
	indesign.init("InDesign CS5", 65);
	indesign.frame("pink");

	var php = Object.create(Skill);
	php.init("PHP 5.6", 55);
	php.frame("gray");





});