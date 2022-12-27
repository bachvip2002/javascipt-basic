import {config} from './config'
import {getDatabase, ref, get,child } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
const dbRef = ref(getDatabase());
get(child(dbRef, `posts/1`)).then((snapshot) => {
if (snapshot.exists()) {
  console.log(snapshot.val());
} else {
  console.log("No data available");
}
}).catch((error) => {
console.error(error);
});
