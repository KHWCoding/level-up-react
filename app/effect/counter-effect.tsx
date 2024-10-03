'use client';

import React, { useState, useEffect } from 'react';

function CounterEffect() {
    const [count, setCount] = useState(0);
    const [messages, setMessages] = useState<string[]>([]);

    useEffect(() => {
        setMessages(prev => [...prev, '컴포넌트가 마운트되었습니다.']);
        console.log('컴포넌트가 마운트되었습니다.');

        return () => {
            setMessages(prev => [...prev, '컴포넌트가 언마운트되었습니다.']);
            console.log('컴포넌트가 언마운트되었습니다.');
        };
    }, []);

    useEffect(() => {
        setMessages(prev => [...prev, `카운트가 업데이트되었습니다: ${count}`]);
        console.log(`카운트가 업데이트되었습니다: ${count}`);
    }, [count]);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="h-40 p-2 mb-4 overflow-auto border border-gray-300 w-80">
                {messages.map((msg, index) => (
                    <p key={index} className="text-sm text-gray-700">{msg}</p>
                ))}
            </div>
            <div className="flex flex-col items-center">
                <p className="mb-2 text-lg font-bold">카운트: {count}</p>
                <button onClick={() => setCount(count + 1)} className="px-4 py-2 font-semibold text-white bg-blue-500 hover:bg-blue-700">증가</button>
            </div>
        </div>
    )
}

export default CounterEffect;