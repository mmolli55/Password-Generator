const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pwField1 = document.getElementById('pw-field1')
let pwField2 = document.getElementById('pw-field2')
let lengthInput = document.getElementById('length-input')

function randomNum() {
	return Math.floor(Math.random() * characters.length)
}

function generate() {
	let password = ""
	let pwLength = lengthInput.value ? Number(lengthInput.value) : 15

	for (let i = 1; i <= pwLength; i++) {
		password += characters[randomNum()]
	}
	return password
}

function updateFields() {
	pwField1.value = generate()
  pwField2.value = generate()
}

