let name = document.querySelector('#name');
let login = document.querySelector('#login');
let mail = document.querySelector('#mail');
let password = document.querySelector('#password');
let rpassword = document.querySelector('#rpassword');
let submit = document.querySelector('#submit');
let google = document.querySelector('#google');

let users = {};

function User(name, login, mail, password, rpassword) {
	this.name = name;
	this.login = login;
	this.mail = mail;
	this.password = password;
        this.rpassword = rpassword;
}

function createId(users) {
	return Object.keys(users).length;
}

submit.addEventListener('click', () => {
	const nameUser = name.value;
	const loginUser = login.value;
	const mailUser = mail.value;
	const passwordUser = password.value;
	const rpasswordUser = rpassword.value;

	if (mailUser.contains("@") || passwordUser != rpasswordUser) 
	{
	    alert(`Не все поля заполнены верно!`) 
	}
	else
	{
            const user = new User(nameUser, loginUser, mailUser, passwordUser, rpasswordUser);

	    const userId = 'User' + createId(users);
	    users[userId] = user;

	    console.log(users);

	    alert(`${nameUser} (или же ${loginUser}), вы успешно прошли регистрацию`) 
	}
})

google.addEventListener('click', () => {
	alert(`Это не настоящая кнопка входа через Google!`)
})
