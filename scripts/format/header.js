(function($)
{
	var IS_LOCAL = location.href.match(/^file:/);
	var pickRandom = function(things) { return things[Math.floor(Math.random() * things.length)]; };
	
	var getSplash = function(pageTitle)
	{
		var now = new Date();
		var month = now.getMonth();
		var date = now.getDate();
		var today = (month + 1) * 100 + date;
		
		if (today === 111) return 'Happy Birthday Harri!';
		if (today === 1008) return 'Happy Birthday Courtney!';
		if (today === 1016) return 'Happy Anniversary Courtney!';
		if (today === 126) return '<div style="transform:rotate(180deg);-ms-transform:rotate(180deg);-webkit-transform:rotate(180deg);">Happy Australia Day!</div>';
		if (today === 101) return 'Happy New Year!';
		if (today === 401) return 'Fooled you!';
		if (today === 704) return '<span style="color:red;">Happy</span> <span style="color:white;text-shadow:0px -1px 1px black,1px -1px 1px black,1px 1px 1px black,-1px 0px 1px black,0px 1px 1px black,1px 0px 1px black,-1px -1px 1px black,-1px 1px 1px black;">4th of</span> <span style="color:blue">July!</span>';
		if (today === 1031) return pickRandom(['<span style="color:darkorange;">BOO!</span>', '<span style="color:darkorange;">Happy Halloween!</span>']);
		
		var splashes = [
			'Now includes<br/>complementary splashes',
			'Now mobile friendly',
			'Work in progress',
			'Check out the navbar',
			'Made by Harrison Knox',
			'Made from scratch',
			'Made in California',
			'Call me Harri',
			'I am the one who Knox',
			'Powered by jQuery',
			'Powered by electrons',
			'Now available in English',
			'<span style="color:coral;">Coral</span> <span style="color:crimson;">Crimson</span> <span style="color:darkorange;">DarkOrange</span><br />' +
			'<span style="color:orange;">Orange</span> <span style="color:orangered;">OrangeRed</span> <span style="color:red;">Red</span>',
			'Fork me on <a href="https://github.com/HarriKnox">GitHub</a>',
			(IS_LOCAL ? 'Doesn\'t require<br/>' : 'Requires ') + 'internet access',
			'Error 404: Splash not found',
			'Please wait...',
			'Loading...',
			'Lorem ipsum dolor sit amet',
			'Follows a normal distribution',
			'Never going to give you up',
			'At a loss for words',
			'Ad-free',
			'Open source',
			'Goal-oriented',
			'Object-oriented',
			'Performing big calculations',
			'Learning <a href="http://clojure.org/">Clojure</a>',
			'A Googol is Ten Duotrigintillion',
			'Think with your lambdas',
			'Think with your closures',
			'&#955;',
			'Contains long-winded essays',
			'Warning: contains opinions',
			'Don\'t deny it,<br />you were reading this',
			'Made you look',
			'Today is ' + ['January', 'February', 'March', 'April' , 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][month] + " " + (date),
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
		
		['Green', 'Goldenrod', 'Blue', 'Purple', 'Brown', 'Orange', 'Black',].forEach(function(color)
		{
			splashes.push('Ask about the<br />color <span style="color:' + color + ';">' + color + '</span>');
		});
		
		if (now.getDay() === 3) splashes.push('It\'s Tuesday');
		
		var hour = now.getHours();
		if (hour >= 5 && hour <= 10) splashes.push('Good Morning');
		
		return pickRandom(splashes);
	};
	
	var getHome = function() { return IS_LOCAL ? 'index.html' : '/'; };
	
	var setSplashVisibility = function()
	{
		var $splash = $('#splash');
		if ($('#header-container').width() <= 480)
			$splash.hide();
		else
			$splash.show();
	};
	
	$(document).ready(function()
	{
		/** Get page title **/
		var pageTitle = $('#page-title').text();
		
		/** Write page title in <head> and as a header **/
		$('head').append('<title>Coder by Nature: ' + pageTitle + '</title>');
		
		var title = '<h1>I\'m a Programmer</h1>' +
			'<h3>not by trade but by nature</h3>';
		if (pageTitle !== 'Home') title = '<a href="' + getHome() + '" id="link-home" title="Home">' + title + '</a>';
		$('body').prepend(
			'<div id="header-container">' +
				'<div id="splash">' + getSplash(pageTitle) + '</div>' +
				'<div id="title">' + title + '</div>'+
			'</div>'
		);
		
		/** Position the splash in middle (vertically) of header **/
		var $splash = $('#splash');
		var headerHeight = $('#header-container').height();
		var splashHeight = $splash.height();
		var top = (headerHeight - splashHeight) / 2;
		$splash.css('top', top);
		
		setSplashVisibility()
		
		$(window).resize(setSplashVisibility);
	});
})(jQuery);