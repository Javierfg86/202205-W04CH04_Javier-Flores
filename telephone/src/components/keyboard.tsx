import { Key } from './key';

export function Keyboard() {
    const data: Array<string> = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        'delete',
    ];
    return (
        <>
            <ol className="keyboard">
                {data.map((item) => (
                    <li key={item}>
                        <Key item={item}></Key>
                    </li>
                ))}
            </ol>
        </>
    );
}
