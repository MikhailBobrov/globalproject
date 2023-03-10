import { useState } from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevState: number) => prevState + 2);
        // setCount(count + 1);
    };

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button type="button" onClick={increment}>
                {/* increment */}
            </button>
        </div>
    );
};
