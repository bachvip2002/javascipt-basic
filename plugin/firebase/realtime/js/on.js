
import { getDatabase, ref, onDisconnect } from "firebase/database";

const db = getDatabase();
const presenceRef = ref(db, "disconnectmessage");
// Write a string when this client loses connection
onDisconnect(presenceRef).set("I disconnected!");