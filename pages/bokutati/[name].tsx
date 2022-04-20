import { useRouter } from 'next/router';

function Bokutati() {
    const router = useRouter();
    const { name } = router.query;
    return <div>僕たち {name} エンジニアです！！！！</div>;
}

export default Bokutati;
