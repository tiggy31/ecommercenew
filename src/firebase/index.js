import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore' //for the db
import 'firebase/compat/auth'

const config = {
     
        apiKey: "AIzaSyBHQFP_KV9Qxmq_9V6f6YOIsEPW-B-yKL0",
        authDomain: "ecommerce-backstore.firebaseapp.com",
        projectId: "ecommerce-backstore",
        storageBucket: "ecommerce-backstore.appspot.com",
        messagingSenderId: "781066022204",
        appId: "1:781066022204:web:c9639c218fa6f1419ac239"
      
      
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
const auth = firebase.auth()

const createUserProfileDocument = async (userAuth,additionalData) => {
 if(!userAuth) {return}
 const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`)
 
 const snapShot = await userRef.get()

 if(!snapShot.exists){
     const {displayName, email} = userAuth
     const createdAt = new Date()

     try{
       await userRef.set({
           displayName,
           email,
           createdAt,
           ...additionalData
       })
     } catch (error){
      console.log("error creating user", error.message)
     }
 }
 return userRef
}


export {
    firestore,
    createUserProfileDocument,
    auth
}

