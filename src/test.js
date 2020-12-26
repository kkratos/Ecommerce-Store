import firebase from 'firebase/app'
import 'firebase/firestore'

const firestore = firebase.firestore();

firestore.collection('users').doc('iAb1wBb4aFonseqn7YWT').collection('cartItems').doc('Pe6RYumVgvzBkjr7M9Y9');
firestore.doc('/users/iAb1wBb4aFonseqn7YWT/cartItems/Pe6RYumVgvzBkjr7M9Y9');
firestore.collection('/users/iAb1wBb4aFonseqn7YWT/cartItems');