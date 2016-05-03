(function($)
{
	var IS_LOCAL = location.href.match(/^file:/);
	var pickRandom = function(things) { return things[Math.floor(Math.random() * things.length)]; };
	
	var getSplash = function(pageTitle)
	{
		//return '9&frac34';
		var now = new Date();
		var month = now.getMonth();
		var date = now.getDate();
		var today = (month + 1) * 100 + date;
		
		if (today ===  111) return 'Happy Birthday Harri!';
		if (today === 1008) return 'Happy Birthday Courtney!';
		if (today === 1016) return 'Happy Anniversary Courtney!';
		
		if (today ===  101) return 'Happy New Year!';
		if (today ===  126) return '<div style="transform:rotate(180deg);-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);">Happy Australia Day!</div>';
		if (today ===  229) return 'Happy Leap Year!';
		if (today ===  314) return (Math.random() < 0.9375) ? 'Happy Pi Day!' : 'Happy Half-Tau Day!';
		if (today ===  401) return 'Fooled you!';
		if (today ===  628) return 'Happy Tau Day!';
		if (today ===  704) return '<span style="color:red;">Happy</span> <span style="color:white;text-shadow:0px -1px 1px black,1px -1px 1px black,1px 1px 1px black,-1px 0px 1px black,0px 1px 1px black,1px 0px 1px black,-1px -1px 1px black,-1px 1px 1px black;">4th of</span> <span style="color:blue">July!</span>';
		if (today === 1031) return pickRandom(['<span style="color:darkorange;">BOO!</span>', '<span style="color:darkorange;">Happy Halloween!</span>']);
		
		var splashes = [
			'A Googol is Ten Duotrigintillion',
			'A Googolplex is 10 in base googolplex',
			'Abstract',
			'Ad-free',
			'An hour\'s drive up',
			'As seen on the Internet',
			'At a gain for numbers',
			'At a loss for words',
			'Built for Chrome',
			'Built for Firefox',
			'Call me Harri',
			'Check out the navbar',
			'Check out these splashes',
			'Client-side',
			'Coder by day,<br />Coder by night',
			'Coder by Nature',
			'Conceptual',
			'Construction zone',
			'Contains long-winded essays',
			'Data',
			'Distraction',
			'Doing its best',
			'Don\'t deny it,<br />you were reading this',
			'Eco-friendly',
			'Error 404: Splash not found',
			'Follows a normal distribution',
			'Fork me on <a href="https://github.com/HarriKnox">GitHub</a>',
			'GNU',
			'Goal-oriented',
			'Gotta Catch \'em all',
			'Has the force of a great typhoon',
			'Has the strength of a raging fire',
			'High-level programming',
			'Hufflepuff',
			'I am the one who Knox',
			'I know you\'re on the<br />' + pageTitle + ' page',
			'I spell only "incorrectly" uncorrectly',
			'If it\'s not paradoxical,<br/>then it\'s paradoxical',
			'Indubitably',
			'Insert clever statement here',
			'Initializing...',
			'Initiating awesomeness',
			'Is as mysterious as<br/>the dark side of the moon',
			'Is as swift as a coursing river',
			'Is this your card: ' + pickRandom(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']) + pickRandom(['&spades;', '&clubs;', '&hearts;', '&diams;']),
			'It\'s pronounced "gif" not "gif"',
			'Learning <a href="http://clojure.org/">Clojure</a>',
			'Libre y Gratis',
			'Loading...',
			'Lorem ipsum dolor sit amet',
			'Made by Harrison Knox',
			'Made from scratch',
			'Made in California',
			'Made out of star dust',
			'Made you look',
			'Made with love',
			'Multilingual',
			'Never going to give you up',
			'No longer broken',
			'Now available in English',
			'Now includes<br/>complementary splashes',
			'Now mobile friendly',
			'Object-oriented',
			'Open source',
			'Overly complicated',
			'Paradoxical',
			'Parallel processing',
			'Performing big calculations',
			'Permanently temporary',
			'Please wait...',
			'Populated with words',
			'Powered by electrons',
			'Powered by jQuery',
			'Procedural',
			'Recycled star dust',
			'References itself',
			'Self-referential',
			'Something\'s a SKU',
			'Specific',
			'Splash!',
			'Tail recursive',
			'Temporarily permanent',
			'Think with your closures',
			'Think with your lambdas',
			'Thinking of clever splashes',
			'This I\'ll defend',
			'Today is ' + ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month] + " " + date,
			'Top secret',
			'Under construction',
			'Updates available',
			'Uses big numbers',
			'Uses dial-up',
			'Uses MathJax',
			'Uses recycled electrons',
			'Vague',
			'Virtual',
			'Warning: contains opinions',
			'When Harri met Courtney',
			'WIP<br />harriknox.github.io<br />June 15, 2015 - present',
			'Work in progress',
			
			'9&frac34',
			'&lambda;',
			'&pi; &lt; &tau;',
			'<span style="font-family:monospace">A wild HARRI appeared!</span>',
			'Go <span style="color:#115641">Mustangs</span>!',
			(IS_LOCAL ? 'Doesn\'t require<br/>' : 'Requires ') + 'Internet access',
			(Math.random() < 0.5 ? 'Irr' : 'R') + 'egularly updated',
			'<span style="color:coral;">Coral</span> <span style="color:crimson;">Crimson</span> <span style="color:darkorange;">DarkOrange</span><br /><span style="color:orange;">Orange</span> <span style="color:orangered;">OrangeRed</span> <span style="color:red;">Red</span>',
			(function(color) { return 'Ask about the<br />color <span style="color:' + color + ';">' + color + '</span>'; })(pickRandom(['Green', 'Goldenrod', 'Blue', 'Purple', 'Brown', 'Orange', 'Black',])),
		];
		
		if (today >= 1200)
		{
			var messages = ['Happy &lt;insert holiday here&gt;!', 'Happy Holidays!', 'Happy Nondenominational<br>Winter Themed Month']
			if (!document.cookie.match(/december=true/))
			{
				document.cookie = "december=true;path=/";
				return pickRandom(messages);
			}
			messages.forEach(function(message) { splashes.push(message); });
		}
		
		if (now.getDay() === 3) splashes.push('It\'s Tuesday!');
		if (now.getDay() === 1) splashes.push('Enjoy your weekend!');
		
		var hour = now.getHours();
		if (hour >= 5 && hour <= 10) splashes.push('Good Morning');
		else if (hour >= 16 && hour <= 19) splashes.push('Good Afternoon');
		else if (hour >= 20 && hour <= 23) splashes.push('Good Evening');
		
		return pickRandom(splashes);
	};
	
	var getHome = function() { return IS_LOCAL ? 'index.html' : '/'; };
	
	var setSplashVisibility = function()
	{
		var $splash = $('.splash');
		if ($('.header-container').width() <= 480)
			$splash.hide();
		else
			$splash.show();
	};
	
	$(document).ready(function()
	{
		/** Get page title **/
		var pageTitle = $('.page-title').text();
		
		/** Write page title in <head> and as a header **/
		$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
		
		var title = '<h1>I\'m a Programmer</h1><h3>not by trade but by nature</h3>';
		if (pageTitle !== 'Home') title = '<a href="' + getHome() + '" class="link-home" title="Home">' + title + '</a>';
		$('body').prepend('<div class="header-container"><div class="splash">' + getSplash(pageTitle) + '</div><div class="title">' + title + '</div></div>');
		
		/** Position the splash in middle (vertically) of header **/
		var $splash = $('.splash');
		var headerHeight = $('.header-container').height();
		var splashHeight = $splash.height();
		var top = (headerHeight - splashHeight) / 2;
		$splash.css('top', top);
		
		setSplashVisibility()
		
		$(window).resize(setSplashVisibility);
	});
})(jQuery);

/*
Never Gonna Give you Up

Never gonna give you up						Will not give you up
Never gonna let you down					Will not let you down
Never gonna run around and desert you		Will not run around and desert you
Never gonna make you cry					Will not make you cry
Never gonna say goodbye						Will not say goodbye
Never gonna tell a lie and hurt you			Will not tell a lie and hurt you


I'll Make a Man out of You

You must be swift as a coursing river		As swift as a coursing river
With all the force of a great typhoon		Has the force of a great typhoon
With all the strength of a raging fire		Has the strength of a raging fire
Mysterious as the dark side of the moon		Is as mysterious as the dark side of the moon


Love song

I'm not gonna write you a love song														Will not write you a love song
'cause you asked for it																	because you requested it
'cause you need one, you see															nor because you need one
I'm not gonna write you a love song														will not write you a love song
'cause you tell me it's make or break in this											because it's make or break
If you're on your way																	if you are leaving
I'm not gonna write you to stay															will not write to make you stay
If all you have is leaving I'ma need a better reason to write you a love song today		will need a better reason than you leaving


Shake It Off

'Cause the players gonna play, play, play, play, play		Players will play
And the haters gonna hate, hate, hate, hate, hate			Haters will hate
Baby, I'm just gonna shake, shake, shake, shake, shake		I will shake
I shake it off, I shake it off								Shake it off
*/
