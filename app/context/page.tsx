import { CounterProvider } from "./counter-context";
import { CounterStatus, ContextClickCounter, ContextClickCounterMinus } from "./context-click-counter";

export default function Page() {
    return (
        <CounterProvider>
            <main className="flex flex-col p-4 space-y-2">
                <h1 className="text-xl font-bold text-gray-400">리액트 첫 번째 컴포넌트</h1>
                <ContextClickCounter />
                <h1 className="text-xl font-bold text-gray-400">아래는 두 번째 컴포넌트</h1>
                <ContextClickCounterMinus />
                <h1 className="text-xl font-bold text-gray-400">아래는 세 번째 컴포넌트</h1>
                <CounterStatus />
            </main>
        </CounterProvider>
    )
}