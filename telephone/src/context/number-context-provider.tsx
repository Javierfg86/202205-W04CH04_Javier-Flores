import { ReactElement } from 'react';
import { useState } from 'react';

export function NumberContextProvider({
    children,
}: {
    children: ReactElement;
}) {
    const initialState: Array<string> = [];
    const [number, setNumber] = useState(initialState);
    const context = { number };
    return (
        <NumberContext.Provider value={context}>
            {children}
        </NumberContext.Provider>
    );
}
