let cadastros = {
    usuarios: ['matheusmft', 'marcosp', 'jeffjunior'],
    senhas: ["66160936", 'miguel1106', 'jeffinho'],
    emails: ['matheus@gmail.com','marcosp@gmail.com','jeffinho@gmail.com'],

    logar() {
        let usuario = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;

        if (cadastros.usuarios.indexOf(usuario) >= 0 && usuario == cadastros.usuarios[cadastros.usuarios.indexOf(usuario)] && senha == cadastros.senhas[cadastros.usuarios.indexOf(usuario)]) {
            document.write('você está logado')
        }
        else {
            document.write('sem sucesso')
        }
    },
    cadastrar() {
        let usuario = document.getElementById("login").value;
        let senha = document.getElementById("senha").value;
        let email = document.getElementById("email").value;
        cadastros.usuarios.push(usuario);
        cadastros.senhas.push(senha);
        cadastros.emails.push(email)
        document.write('parabens, vc está cadastrado')
        window.location.href = 'file:///C:/Users/Captei/Desktop/Programa%C3%A7%C3%A3o/Login/TelaLoguin.html'

    }

}

function validaSenha() {
    for (i = 0; senha.length >= i; i++) {
        if (senha[i] == "!" || senha[i] == "#" || senha[i] == "$" || senha[i] == "/" || senha[i] == "*") {
            validaaSenha += 1
        }
    }
    if (validaaSenha < 1) {
        console.log('sua senha precisa ter um caractere especial')
    }
    else {
        console.log('senha inserida com sucesso')
    }
}
