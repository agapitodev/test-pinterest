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
      apiKey: 'AIzaSyAtVxQ14XhUFkBw2SsWr-kuYifd0I-OCyw',
      authDomain: 'fake-pinterest.firebaseapp.com',
      projectId: 'fake-pinterest',
      storageBucket: 'fake-pinterest.appspot.com',
      messagingSenderId: '171063190084',
      appId: '1:171063190084:web:ab8dda73a19ca9b8c45211',
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
