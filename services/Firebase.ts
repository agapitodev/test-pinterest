import { UploadedImage } from '@/app/_lib/types';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  Auth,
  signInWithPopup,
} from 'firebase/auth';
import {
  Firestore,
  collection,
  getFirestore,
  addDoc,
  query,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';
import {
  FirebaseStorage,
  getStorage,
  ref,
  uploadBytes,
} from 'firebase/storage';

class FirebaseService {
  private static classInstance?: FirebaseService;
  private readonly instance: FirebaseApp;
  private readonly authInstance: Auth;
  private readonly dbInstance: Firestore;
  private readonly storageInstance: FirebaseStorage;

  private constructor() {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGIN_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    this.instance = initializeApp(firebaseConfig);
    this.authInstance = getAuth(this.instance);
    this.dbInstance = getFirestore(this.instance);
    this.storageInstance = getStorage(this.instance);
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

  public createPublicImage = async (file: File) => {
    const imageRef = ref(this.storageInstance, file.name);
    const filedata = await file.arrayBuffer();
    const snapshot = await uploadBytes(imageRef, filedata);
    const url = `gs://${snapshot.ref.bucket}/${snapshot.ref.fullPath}`;
    await addDoc(collection(this.dbInstance, 'uploadImages'), {
      url,
      name: file.name,
    });
  };

  public subscribeUploadImages = (
    setImages: (images: UploadedImage[]) => void,
  ) => {
    const q = query(collection(this.dbInstance, 'uploadImages'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const images: UploadedImage[] = [];
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          name: doc.data().name,
          url: doc.data().url,
        };
        images.push(data);
      });
      setImages(images);
    });
  };
}

export default FirebaseService;
