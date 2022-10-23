import Document, {Head, Html, Main, NextScript,} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap"
                          rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;500;700&display=swap"
                          rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,200;0,300;0,400;0,700;1,100;1,500&display=swap"
                        rel="stylesheet"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;800&family=Raleway:ital,wght@0,200;0,300;0,400;0,700;0,900;1,100;1,500&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument