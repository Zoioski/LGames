import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA33Gl1DPKsx5qZy5MfDO9zfD5KNN1qhY8",
  authDomain: "igames-34f6d.firebaseapp.com",
  databaseURL: "https://igames-34f6d.firebaseio.com",
  projectId: "igames-34f6d",
  storageBucket: "igames-34f6d.appspot.com",
  messagingSenderId: "282397266910",
  appId: "1:282397266910:web:0244178bf52209913a034f"
};

firebase.initializeApp(firebaseConfig);

export function salvarPedido(nome, descricao, imagem, valor) {
  let data = new Date();
  //let dia = data.getDate()
  //let mes = (data.getMonth() + 1)
  //let ano = data.getFullYear()
  let horas = data.getHours() + ':' + data.getMinutes()


  firebase.database().ref('Pedidos/').child(horas).set({


    name: nome,
    description: descricao,
    image: imagem,
    price: valor

  });


}

export function excluirPedido(id) {



  firebase.database().ref('Pedidos/').child(id).remove();


}

export default firebase