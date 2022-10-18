import {initializeApp} from 'firebase/app'
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