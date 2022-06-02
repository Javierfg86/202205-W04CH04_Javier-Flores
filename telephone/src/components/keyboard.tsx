import { Key } from './key';

export function Keyboard() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'delete'];
    return (
        <>
            <div className="keyboard-container">
                <ol className="keyboard">
                    <li>
                        {numbers.map((item) => (
                            <button className="key">{item}</button>
                        ))}
                    </li>
                </ol>
            </div>
        </>
    );
}
