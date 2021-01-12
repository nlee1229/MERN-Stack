import React, { useState } from 'react';
import styles from './Tab.module.css';

function Tabs({ items }) {
    // Keeps track of which tab is currently active
    const [activeIndex, setActiveIndex] = useState(0);

    function handleClick(i) {

        const { callback } = items[i];

        if (typeof items[i].callback === 'function') {
            callback();
        }

        setActiveIndex(i);
    }

    return (
        <div>
            <div className={styles.headers}>
                {items.map((item, i) => {
                    return (
                        <div
                            //ternary operators allow us to make if, then conditionals in jsx
                            // is i = activeIndex? If it is, let's add that to the style, otherwise, just add an empty string to it
                            key={i}
                            className={styles.header + (i === activeIndex ? ' ' + styles.active : '')}
                            onClick={() => handleClick(i)}
                        >
                            {item.label}
                        </div>
                    )
                })}
            </div>

            {/* div for the actual content */}
            <div className={styles.content}>{items[activeIndex].content}</div>
        </div>
    )
}

export default Tabs;