import React from 'react'
import styles from './loading.module.css'

function Loading() {
    return (
        <div className={styles['lds-spinner']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    )
}

export default Loading