window.$discordMessage = {
	profiles: {
		siris: {
			author: 'Siris',
			avatar: `./assets/siris.webp`,
			roleColor: '#000000'
		},
		invi: {
			author: 'Invite Management',
			avatar: `./assets/LOGO.webp`,
			roleColor: '#5865F2',
			bot: true,
			verified: true
		}
	},

	emojis: {
		':joins:': {
			name: 'joins',
			url: './assets/joins.webp'
		},
		':leaves:': {
			name: 'leaves',
			url: './assets/leaves.webp'
		},
		':bonus:': {
			name: 'bonus',
			url: './assets/bonus.webp'
		},
		':yes:': {
			name: 'yes',
			url: './assets/verified.webp'
		},
		':inviter:': {
			name: 'inviter',
			url: './assets/inviter.webp'
		},
		':invite-code:': {
			name: 'invite-code',
			url: './assets/invite-code.webp'
		}
	}
};

function getNum(number) {
	if (number < 10) return `0${number}.`;
	else return `${number}.`;
}

const invites = [
	{ name: 'Siris', j: 543, l: 201, b: 0 },
	{ name: 'Isa', j: 313, l: 5, b: 0 },
	{ name: 'Ryth', j: 404, l: 99, b: 0 },
	{ name: 'Hope', j: 523, l: 280, b: 0 },
	{ name: 'Jane', j: 561, l: 321, b: 0 },
	{ name: 'Ryuk', j: 235, l: 26, b: 0 },
	{ name: 'Creed', j: 203, l: 2, b: 0 },
	{ name: 'Waylord', j: 370, l: 195, b: 0 },
	{ name: 'Rock', j: 358, l: 192, b: 0 },
	{ name: 'Shane', j: 302, l: 146, b: 0 },
	{ name: 'Levi', j: 173, l: 42, b: 0 },
	{ name: 'Jen', j: 392, l: 275, b: 0 },
	{ name: 'Tron', j: 124, l: 11, b: 0 },
	{ name: 'Jake', j: 101, l: 3, b: 0 },
	{ name: 'Star', j: 171, l: 73, b: 0 },
	{ name: 'Yuri', j: 152, l: 66, b: 0 },
	{ name: 'Paul', j: 236, l: 151, b: 0 },
	{ name: 'Luke', j: 90, l: 7, b: 0 },
	{ name: 'Xen', j: 84, l: 7, b: 0 },
	{ name: 'Trap', j: 92, l: 20, b: 0 }
];

function clickButton(num) {
	if (num === 100 || num === -100) {
		if (!window.page) window.page = 1;
		const page = window.page === 2 ? 1 : 2;

		for (let i = 0; i < 10; i++) {
			const data = invites[i + (page - 1) * 10];

			document.getElementsByClassName('rank').item(i).innerHTML = page === 1 ? getNum(i + 1) : getNum(i + 11);
			document.getElementsByClassName('total').item(i).innerHTML = `・${data.j - data.l + data.b}`;
			document.getElementsByClassName('name').item(i).innerHTML = `\x3C!---->@${data.name}`;

			document.getElementsByClassName('joins').item(i).innerHTML = data.j;
			document.getElementsByClassName('leaves').item(i).innerHTML = data.l;
			document.getElementsByClassName('bonus').item(i).innerHTML = data.b;
		}

		window.page = page;
		document.getElementById('lb-footer').innerHTML = `Page ${window.page}/2`;
	} else if (num >= 0) {
		if (window.verifyAttempt) window.verifyAttempt += `${num}`;
		else window.verifyAttempt = `${num}`;

		document.getElementById('input-field-verification').innerHTML = window.verifyAttempt;
	} else if (num === -1) {
		if (window.verifyAttempt === '4923') alert('Verification successful!');
		else alert('Verification failed!');

		window.verifyAttempt = '';
		document.getElementById('input-field-verification').innerHTML = '&#8205;';
	} else if (num === -2) {
		window.verifyAttempt = '';
		document.getElementById('input-field-verification').innerHTML = '&#8205;';
	}
}

const menuToggle = document.getElementById('navbarSupportedContent');
const navbtn = document.getElementById('navbar-btn');

navbtn.addEventListener('click', () => {
    menuToggle.classList.toggle('collapse');
})

fetch('https://api.invi-bot.xyz/stats').then(res => res.json()).then(data => {
	document.getElementById('stats-servers').innerHTML = data.guilds.toLocaleString();
    document.getElementById('stats-members').innerHTML = data.members.toLocaleString();
    document.getElementById('stats-invites').innerHTML = data.invites.toLocaleString();
})