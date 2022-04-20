import { useRouter } from 'next/router';
import { useState } from 'react';
import type { GetServerSideProps } from 'next';

function Hello({ name }) {
    return (
        <div>
            <span>{name}</span>
        </div>
    );
}
export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('http://localhost:3000/api/hello');
    const props = await res.json();
    return { props };
};
export default Hello;
