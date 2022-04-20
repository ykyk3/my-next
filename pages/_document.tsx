import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <style>{`body { margin: 0 } /* custom!*/`}</style>
                </Head>
                <body className="custom_class desuyo">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
