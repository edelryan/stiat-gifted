define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/stiat/qualtrics/qstiat6.js'], 
function(APIConstructor, stiatExtension){

	var API = new APIConstructor();

	return stiatExtension({

		category: {
			name: 'Gifted Students',
			title: {
				media: {word: 'Gifted Students'},
				css: {color:'#31b404','font-size':'2em'},
				height: 7
			},
			media: [
				{word: 'Gifted'},
				{word: 'Bright'},
				{word: 'Talented'},
				{word: 'Intelligent'},
				{word: 'Advanced'},
				{word: 'Exceptional'}
			],
			css: {color:'#31b404','font-size':'3em'}
		},

		attribute1: {
			name: 'Self-Sufficient',
			title: {
				media: {word: 'Self-Sufficient'},
				css: {color:'#31b404','font-size':'2em'},
				height: 7
			},
			media: [
				{word: 'Effortless learner'},
				{word: 'Quick learner'},
				{word: 'Self-teaching'},
				{word: 'Resilient'},
				{word: 'High-achieving'},
				{word: 'Needs no help'}
			],
			css: {color:'#31b404','font-size':'3em'}
		},

		attribute2: {
			name: 'Needing Support',
			title: {
				media: {word: 'Needing Support'},
				css: {color:'#31b404','font-size':'2em'},
				height: 7
			},
			media: [
				{word: 'Anxious'},
				{word: 'Overwhelmed'},
				{word: 'Confused'},
				{word: 'Struggling'},
				{word: 'Vulnerable'},
				{word: 'Uncertain'}
			],
			css: {color:'#31b404','font-size':'3em'}
		},

		base_url: {
			image: 'https://baranan.github.io/minno-tasks/images/'
		},

		onTrialEnd: function(trialData, trialIndex, blockIndex, trialObj, response) {
			var rt = trialData.rt || trialData.latency;
			if (rt && rt > 10000) {
				alert('Please respond more quickly if you can!');
			}
		}
	});
});
