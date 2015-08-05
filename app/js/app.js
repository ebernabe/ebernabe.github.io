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
		    <h1>Skills</h1>
		    <p>I am a Front/Back-End Developer living and working in San Jose, Costa Rica. </p>
<p>Making Websites or Internet Applications from zero to 100%.</p>
<p>Skills: visual interaction design (Mockups), HTML5/Jade = 99%, Stylus/nib/CSS3/Foundation/(Polyfills if we need it) = 95%, Responsive Design/Media-Queries/Mobile First, Javascript/Ajax/REST/Jquery/Angular Js/React Js/JSON/Browserify  (<a href="http://tetris.ml/">try my hobby multiplayer in nodejs</a>), PHP=90%, Python/Django/Templates/Admin/Memcache %80, Git/SSH, Node.js/Socket.io/Express 50%, Mysql=85%, Photoshop=95%,  Apache/DNS/AWS, Linux/Mac/Windows are welcome, Grunt/Gulp task.</p>

		</div>
	}
}

class Work extends React.Component{
	render(){
		return <div><h1>Work Examples</h1>
		<p><a href="https://github.com/ebernabe/">Do you want to see an example of my code?</a> I am working in my free time in a <a href="https://github.com/ebernabe/tetris">tetris multigamer</a> in node.js/socket.io/jquery/express/jade: (its not finished, but it works) Please try it <a href="http://tetris.ml/">http://tetris.ml/</a> </p>
<p>Or look at my ToDo list with timer in Angular <a href="https://github.com/ebernabe/ToDoListTimer/">here</a>   <a href="http://thedictionary.ga/examples/todotimer/">Please try it</a> </p>
		</div>
	}
}

class Contact extends React.Component{
	render(){
		return <div><h1>Contact Me</h1></div>
	}
}




$(document).foundation();
$(document).ready(function (){

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