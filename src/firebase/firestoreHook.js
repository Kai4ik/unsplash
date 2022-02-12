import { useState, useEffect } from "react";
import { firestore } from "./firebase-configuration";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const q = query(
      collection(firestore, collectionName),
      orderBy("createdAt", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const dbDocuments = [];
      querySnapshot.forEach((doc) => {
        dbDocuments.push({ ...doc.data(), id: doc.id });
      });
      setDocs(dbDocuments);
    });
    return () => unsubscribe();
  }, [collectionName]);

  return { docs };
};

export default useFirestore;
