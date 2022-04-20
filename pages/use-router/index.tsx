import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Hello() {
    const router = useRouter();
    const [count, setCount] = useState(Number(0));
    const handlePush = (e) => {
        e.preventDefault();

        setCount(count + 1);
        router.push(`${router.pathname}?value=${count + 1}`);
    };
    const handleReplace = (e) => {
        e.preventDefault();
        setCount(count + 1);
        router.push(`${router.pathname}?value=${count + 1}`);
    };
    const handleBack = (e) => {
        e.preventDefault();
        router.back();
    };
    const handleReload = (e) => {
        e.preventDefault();
        router.reload();
    };
    useEffect(() => {
        if (!router.isReady && !router.query.value) {
            return;
        }
        setCount(Number(router.query.value));
    }, [router.query]);
    return (
        <div>
            <span>hello next js {count}</span>
            <button onClick={handlePush}>Push</button>
            <button onClick={handleReplace}>Replace</button>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleReload}>Reload</button>
        </div>
    );
}
export default Hello;
