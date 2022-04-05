const firebaseAdmin = require('firebase-admin')
firebaseAdmin.initializeApp()

const db = firebaseAdmin
const auth = firebaseAdmin.auth()

module.export = {
    db,
    auth
}