import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import theme from '../theme';

export default class MyCustomDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags }; // return styles collected
  }

  render() {
    return (
      <html lang="en-US">
        <Head>
          <title>MA FK Written Communication Guide</title>
          {this.props.styleTags}
          <link rel="stylesheet" href="https://use.typekit.net/zou2ssf.css" />
        </Head>
        <ThemeProvider theme={theme}>
          <body>
            <Main />
            <NextScript />
          </body>
        </ThemeProvider>
      </html>
    );
  }
}
