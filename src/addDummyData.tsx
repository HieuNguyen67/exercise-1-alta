import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const addDummyData = async () => {
  const dummyData = [
    {
      id: 1,
      match: "Arsenal - Manchester City",
      date: "2024-10-10",
      team1: "Arsenal",
      team2: "Manchester City",
      tournament: "Premier League",
    },
    {
      id: 2,
      match: "Man United - Liverpool",
      date: "2024-10-20",
      team1: "Man United",
      team2: "Liverpool",
      tournament: "Premier League",
    },
    {
      id: 3,
      match: "Chelsea - Manchester City",
      date: "2024-11-10",
      team1: "Chelsea",
      team2: "Manchester City",
      tournament: "Premier League",
    },
  ];

  try {
    const collectionRef = collection(db, "posts");
    for (const data of dummyData) {
      await addDoc(collectionRef, data);
    }
    console.log("Dummy data added!");
  } catch (error) {
    console.error("Error adding dummy data: ", error);
  }
};

export default addDummyData;
