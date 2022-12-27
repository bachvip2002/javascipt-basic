import {config} from './config'
import { getDatabase, ref,  push, set ,onValue } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
function addData() {
    const db = getDatabase();
    const postListRef = ref(db, 'posts/5');
    const newPostRef = push(postListRef);
    set(newPostRef, {
        title: 'deptrai',
        content: "hai"
    });
}

// const db = getDatabase();
// const starCountRef = ref(db, 'posts/5');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });
