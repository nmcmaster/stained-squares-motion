import { useState } from "react";

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    obj?: {
        f1: string;
    };
}

const TextField: React.FC<Props> = ({ text }) => {
    const [counter, setCounter] = useState<number | null>(5);

    const increment = () => {
        setCounter(counter + 1);
    };

    const nullify = () => {
        setCounter(null);
    };

    return (
        <div>
            <p>Count is: {counter}</p>
            <button onClick={increment} />
            <input defaultValue={text} />
            <button onClick={nullify} />
        </div>
    );
};

export default TextField;
