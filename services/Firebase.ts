import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  Auth,
  signInWithPopup,
} from 'firebase/auth';

class FirebaseService {
  private static classInstance?: FirebaseService;
  private readonly instance: FirebaseApp;
  private readonly authInstance: Auth;

  private constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAtVxQ14XhUFkBw2SsWr-kuYifd0I-OCyw',
      authDomain: 'fake-pinterest.firebaseapp.com',
      projectId: 'fake-pinterest',
      storageBucket: 'fake-pinterest.appspot.com',
      messagingSenderId: '171063190084',
      appId: '1:171063190084:web:ab8dda73a19ca9b8c45211',
    };

    this.instance = initializeApp(firebaseConfig);
    this.authInstance = getAuth(this.instance);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new FirebaseService();
    }

    return this.classInstance;
  }

  public SigninWithEmail = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(
      this.authInstance,
      email,
      password,
    );
    return userCredential.user;
  };

  public SignupWithEmail = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      this.authInstance,
      email,
      password,
    );
    return userCredential.user;
  };

  public accessWithGoogleProvider = async () => {
    this.authInstance.useDeviceLanguage();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(this.authInstance, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    return result.user;
  };
}

export default FirebaseService;
