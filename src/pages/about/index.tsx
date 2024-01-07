import Link from "next/link"
import Modal from "./_modal"
import { useState } from "react";


export default function About() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Link href="/">Home</Link>
            <h1>About This Project</h1>
            <h2>The purpose of this project is to practice using useReducer in React.js and the pages router in Next.js.</h2>

            <div
                style={{
                    textAlign: "center",
                    display: "block",
                    padding: 30,
                    margin: "auto",
                }}
            >
                <h1 style={{ color: "purple" }}>
                    This is modal practice!
                </h1>
                <h4>Modal Component in ReactJS?</h4>
                <button type="button" onClick={handleOpen}>
                    What is a modal?
                </button>
                <Modal isOpen={open} onClose={handleClose}>
                    <>
                        <h1>Modal Practice!</h1>
                        <h3>This is a modal!</h3>
                    </>
                </Modal>
                <br />
                <br />
                <p>Thanks <a href="https://www.geeksforgeeks.org/how-to-use-modal-component-in-reactjs/" rel="no_referrer" target="_blank">GeeksforGeeks</a></p>
            </div>


        </>
    )
}