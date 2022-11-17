import React from "react";
import styles from './modal.module.css'

const ModalBase = ({ message }) => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);

    if (!open) return null

    return (
        <div className={styles["modal"]}>
            <div className={styles["modal-container"]}>
                <h1>{message}</h1>
                <button className="border p-2 px-5 mt-5" type="button" onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}

export default ModalBase;