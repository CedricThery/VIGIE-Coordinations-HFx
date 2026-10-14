import {
  collection,
  addDoc,
  onSnapshot
}
from "firebase/firestore";

import { db }
from "../firebase/firebase";

export async function saveZone(
  zone
) {

  await addDoc(

    collection(
      db,
      "zones"
    ),

    zone

  );

}

export function watchZones(
  callback
) {

  return onSnapshot(

    collection(
      db,
      "zones"
    ),

    snapshot => {

      callback(

        snapshot.docs.map(

          d => ({
            id: d.id,
            ...d.data()
          })

        )

      );

    }

  );

}