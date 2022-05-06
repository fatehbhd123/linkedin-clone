import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@mui/icons-material'
import React from 'react'
import { db, auth } from './firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, orderBy, query } from "firebase/firestore";
import InputOption from './InputOption'
import Post from './Post'
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';
export default function Feed() {
    const user = useSelector(selectUser);
    const [posts, setPosts] = React.useState([]);
    const [input, setInput] = React.useState("");

    console.log(posts);
    React.useEffect(() => {

        const p = collection(db, 'Posts');
        const postsCollectionRef = query(p, orderBy('timestamp', 'desc'));
        onSnapshot(postsCollectionRef, snapshot => {
            setPosts(snapshot.docs.map(doc => (
                { ...doc.data(), id: doc.id }
            )))
        })
    }
        , [])
    const sendPost = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'Posts'), {
            name: user.displayName,
            descreption: user.email,
            message: input,
            photoUrl: user.photoURL || "",
            timestamp: serverTimestamp()
        })
        setInput('');
    }
    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className='feed_input'>
                    <Create />
                    <form action="">
                        <input type="text" value={input} onChange={(e) => {
                            setInput(e.target.value)
                        }} />
                        <button type='submit' onClick={sendPost}>Send</button>
                    </form>
                </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={Image} color="#70B5F9" title="Photo" />
                    <InputOption Icon={Subscriptions} color="#7FC15E" title="Video" />
                    <InputOption Icon={EventNote} color="#E7A33E" title="Event" />
                    <InputOption Icon={CalendarViewDay} color="#FC9295" title="Write article" />

                </div>

            </div>
            <FlipMove>

                {posts.map(({ id, name, descreption, message, photoUrl }) =>
                    <Post
                        key={id}
                        name={name}
                        descreption={descreption}
                        message={message}
                        photoUrl={photoUrl} />
                )}
            </FlipMove>
        </div>
    )
}
