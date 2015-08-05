'use strict'

let $ = require('jquery');
let foundation = require('foundation');
let tubular = require("./tubular.js");
 

import React from "react";
import {default as Router,Route} from "react-router"

let ReactHandler = Router.RouteHandler


class Portfolio extends React.Component{
	render(){
		return <div>
				<ReactHandler />
				</div>
	}
}


class Skills extends React.Component{
	render(){
		return <div>
		    <h2>Skills</h2>
		    <p>I am a Front/Back-End Developer living and working in San Jose, Costa Rica. </p>
<p>Making Websites or Internet Applications from zero to 100%.</p>
<p>Skills: visual interaction design (Mockups), HTML5/Jade = 99%, Stylus/nib/CSS3/Foundation/(Polyfills if we need it) = 95%, Responsive Design/Media-Queries/Mobile First, Javascript/Ajax/REST/Jquery/Angular Js/React Js/JSON/Browserify  (<a href="http://tetris.ml/">try my hobby multiplayer in nodejs</a>), PHP=90%, Python/Django/Templates/Admin/Memcache %80, Git/SSH, Node.js/Socket.io/Express 50%, Mysql=85%, Photoshop=95%,  Apache/DNS/AWS, Linux/Mac/Windows are welcome, Grunt/Gulp task.</p>

		</div>
	}
}

class Work extends React.Component{
	render(){
		return <div><h2>Work Examples</h2>
		<p><a href="https://github.com/ebernabe/" target="_blank">Do you want to see an example of my code?</a> I am working in my free time in a <a href="https://github.com/ebernabe/tetris" target="_blank">tetris multigamer</a> in node.js/socket.io/jquery/express/jade: (its not finished, but it works) Please try it <a href="http://tetris.ml/" target="_blank">http://tetris.ml/</a> </p>
<p>Or look at my ToDo list with timer in Angular <a href="https://github.com/ebernabe/ToDoListTimer/" target="_blank">here</a>   <a href="http://thedictionary.ga/examples/todotimer/"  target="_blank">Please try it</a> </p>
<p>Live Flickr Feed with React <a href="https://github.com/ebernabe/ReactFlickrFeed" target="_blank">Click Here</a></p>
<p>Example Using Ajax, SocketIO with React and pokemons :) <a href="https://github.com/ebernabe/ReactPokemonAjaxSocketIO" target="_blank">Click Here</a></p>
<p>Filter List With React (ecmascript 6) <a href="https://github.com/ebernabe/FiltrarListaReact" target="_blank">Click Here</a></p>
<p>Ajax Api/json, localStorage and pokemons :)  (ecmascript 6) <a href="https://github.com/ebernabe/FiltrarListaReact" target="_blank">Click Here</a></p>
		</div>
	}
}

class Contact extends React.Component{
	render(){
		return <div><h2>Contact Me</h2>
				<p>Twitter <a href="https://twitter.com/ebernabe" target="_blank">@ebernabe</a></p>
		</div>
	}
}




$(document).foundation();
$(document).ready(function (){

// $('nav.menu .Portfolio-item').addClass('animated  fadeInDown');
// setTimeout(function(){$('.Portfolio-skills').addClass('animated  fadeInLeft')},100);
// setTimeout(function(){$('.Portfolio-work').addClass('animated  fadeInLeft')},100);
// setTimeout(function(){$('.Portfolio-contact').addClass('animated  fadeInLeft')},100);
$('.Portfolio-home').addClass('animated  flipInX');
$('.Portfolio-skills').addClass('animated  flipInX');
$('.Portfolio-work').addClass('animated    flipInX');
$('.Portfolio-contact').addClass('animated    flipInX');
// $('h1').addClass('animated  pulse');

	if( (window.location.pathname === '/')||(window.location.pathname === '/index.html')){
	  // It is not the home page. It is not xyz.com. It has something after /
	  $('#wrap').tubular({
			 videoId: 'ziDNDKt8ojA',
			 ratio: 16/9,
			 wrapperZIndex: -9999999,
			 mute: true,
			 start: 18
		 }); // where idOfYourVideo is the YouTube ID
	} 
	else{
		

		let routes = <Route handler={Portfolio}>
		<Route path="skills" handler={Skills} />
		<Route path="work" handler={Work} />
		<Route path="contact" handler={Contact} />
		</Route>

		Router.run(routes,Router.HashLocation,(Root) => {
			React.render(<Root />,document.getElementById("container"))
		})

		
	}

	 

});