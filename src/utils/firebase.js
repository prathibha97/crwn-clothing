import { initializeApp } from 'firebase/app';
import {
    createUserWithEmailAndPassword, getAuth,
    GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,
    signInWithRedirect,
    signOut
} from 'firebase/auth';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDg8sCgODpRjBEfUF3uLV4m8XNZIzPihdk",
    authDomain: "crwn-clothing-db-ed77b.firebaseapp.com",
    projectId: "crwn-clothing-db-ed77b",
    storageBucket: "crwn-clothing-db-ed77b.appspot.com",
    messagingSenderId: "923926501244",
    appId: "1:923926501244:web:c5f9c53b85b1bd886a36f9"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    if (!userAuth) return
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapShot = await getDoc(userDocRef)

    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUSerWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)