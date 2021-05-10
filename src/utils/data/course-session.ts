import firebase from "firebase";

import { db } from "../firebase/core";

export interface SessionData {
  id: string;
  course: string;
  title: string;
  desc: string;
  date?: Date;
  lecturer?: string;
  scopes: string[];
  level: number;
  url?: string;
}

export const sessionSortFn = (a: SessionData, b: SessionData): number =>
  a.level - b.level || (a.date?.getTime() ?? -1) - (b.date?.getTime() ?? -1);

const sessionDataConverter: firebase.firestore.FirestoreDataConverter<SessionData> = {
  toFirestore: (data: SessionData): firebase.firestore.DocumentData => data,
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): SessionData => {
    const { course, date, desc, lecturer, level, scopes, title, url } = snapshot.data(options);
    const withDate = (date as firebase.firestore.Timestamp)?.toDate();
    return {
      id: snapshot.id,
      date: withDate,
      course,
      desc,
      lecturer,
      level,
      scopes,
      title,
      url,
    };
  },
};

export const getSessionsByCourse = (course: string): Promise<SessionData[]> =>
  db
    .collection("sessions")
    .where("course", "==", course)
    .withConverter<SessionData>(sessionDataConverter)
    .get()
    .then(snapshot => {
      const ss: SessionData[] = [];
      snapshot.forEach(doc => {
        ss.push(doc.data());
      });
      return ss;
    });
