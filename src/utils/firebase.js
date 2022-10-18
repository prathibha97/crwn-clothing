import {initializeApp} from 'firebase/app'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDg8sCgODpRjBEfUF3uLV4m8XNZIzPihdk",
  authDomain: "crwn-clothing-db-ed77b.firebaseapp.com",
  projectId: "crwn-clothing-db-ed77b",
  storageBucket: "crwn-clothing-db-ed77b.appspot.com",
  messagingSenderId: "923926501244",
  appId: "1:923926501244:web:c5f9c53b85b1bd886a36f9"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)

    if(!userSnapShot.exists()){
        const {displayName, email} = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log('error creating the user', err.message)
        }
    }
return userDocRef
}