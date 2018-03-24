function init() {
	let token = "7B2QVBjTjDVavcEIou8%2BjWEqtrLsAmQKWEN4wYY%2FOZHtMY4d4EQXRuRhagezk%2FFUrVX3V0Ice2PVDfS2rq1acNcEzWF8DjoZzQScJ2uNRkDaOPMKn5LmYSM%2Fkw31cS8Zw0pl48P19McAfs2JWvr9P%2BmhYIphHVg45JiioafWHJHypr1PoOabd%2BemVakzi%2BFOKe%2BVPZowwYg8vduIGcb1p9otov0J3ZJuYNCDLX0aRhErN0oj6%2FXfZcWSDhrCEkMdjHXlns8tQTf5XpOEdog2npTtVO4JSr2RZ9FkFQR4WgzRsXz0mK020UcJWAZXG%2BlNdSIcRsh%2BgXNjS5jo1EoM%2FSg0Rlhz5O0EMerTF7oBC8sWEON6Xf0dECJbGMbRsBQe52k7sXPeUc2xWm3slvfWkAs5Fu4aZKbw%2BsPdMIHLebk5BF7P21qr07HObrG7RuYvvzsephSAA%2BxUYKtPYiLNyJp%2FAG5v3In4gCTI1wPbpqxhm6Au%2B%2F%2FIaeDbFTRv47ZLI9KMPRQdrH7t%2FN7P33%2FyvoMBqLePkFy9IFO5YPFOJJ%2BCwhjeULipCRPQR2YrwtE%2F%2Bm4H%2F9cYjImWcD4QVEnKWIXNyLMMipgzeE2HpBHKyipKMa6nYu5AiYGpJgAYZ2i5xG4EfMAELKNKdUkJVjpx%2B3IBOcHkvT9wt9dNbReiJBelsj%2FymRkfZSJMQxpqJhfgNOD601d00CGPxdKUzK4tbbtfjS4zT8sJqEIRoQK1Hn8s4%2FJcbcpHURsshNg2juk7PVW6jkpEXP%2FAGmUs%2FvQSNc7kLIyVALSv0Le3w2q5kRAY2e%2BmWb3Ua3VuKSPscd2Hjlv%2BGTIGw5dfaewGTRovqpDtV8XQpag2I0kZ3dTrPFOb%2Bqqcp3IE8cQcDCLg6JoHlnCdKdDT9AMp6R4x%2FsFIXiFJUjN%2FwIMvkLFL6uf5i9IssNJIGLp6SAdkBRfIyhjBuV4vSUIc1v25HeUQZ1vHqccdNFxCyS%2FGXyr9husFO%2F8%3D";
	let stream = WatsonSpeech.SpeechToText.recognizeMicrophone({
		token: token,
		outputElement : "#display"
	});

	stream.on("error", err => {
		console.log("error: ", err);
	});

	document.getElementById('name').style.display = 'block';
	document.getElementById('challenge').style.display = 'none';
	document.getElementById('rating').style.display = 'none';
	document.getElementById('feedback').style.display = 'none';

	document.querySelector('#question2').onclick = function() {
		document.getElementById('name').style.display = 'none';
		document.getElementById('challenge').style.display = 'block';
		document.getElementById('rating').style.display = 'none';
		document.getElementById('feedback').style.display = 'none';
	};

	document.querySelector('#question3').onclick = function() {
		document.getElementById('name').style.display = 'none';
		document.getElementById('challenge').style.display = 'none';
		document.getElementById('rating').style.display = 'block';
		document.getElementById('feedback').style.display = 'none';
	};

	document.querySelector('#done').onclick = function() {
		document.getElementById('name').style.display = 'none';
		document.getElementById('challenge').style.display = 'none';
		document.getElementById('rating').style.display = 'none';
		document.getElementById('feedback').style.display = 'block';
		stream.stop();
	};
};

window.onload = init;


