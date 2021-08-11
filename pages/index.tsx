import Head from "next/head";
import {
  UtrechtArticle,
  UtrechtBadgeCounter,
  UtrechtBadgeData,
  UtrechtBadgeStatus,
  UtrechtBreadcrumb,
  UtrechtButton,
  UtrechtCheckbox,
  UtrechtDocument,
  UtrechtFormFieldCheckbox,
  UtrechtFormFieldTextbox,
  UtrechtHeading,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
  UtrechtHeading5,
  UtrechtHeading6,
  UtrechtHtmlContent,
  UtrechtIconFacebook,
  UtrechtIconLinkedin,
  UtrechtIconTwitter,
  UtrechtIconWhatsapp ,
  UtrechtLogo,
  UtrechtPageFooter ,
  UtrechtPagination,
  UtrechtParagraph ,
  UtrechtSeparator,
  UtrechtSidenav,
  UtrechtTextbox,
} from "@utrecht/web-component-library-react";

export default function Home() {
  return (
    <>
      <UtrechtDocument>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>

          <UtrechtLogo></UtrechtLogo>

          <UtrechtBreadcrumb json="[{&quot;href&quot;:&quot;https://example.com/&quot;,&quot;title&quot;:&quot;Home&quot;},{&quot;href&quot;:&quot;https://example.com/a/&quot;,&quot;title&quot;:&quot;Wonen en leven&quot;},{&quot;href&quot;:&quot;https://example.com/a/b/&quot;,&quot;title&quot;:&quot;Afval&quot;},{&quot;href&quot;:&quot;https://example.com/a/b/c/&quot;,&quot;title&quot;:&quot;Kliko's&quot;,&quot;current&quot;:true}]" variant="arrows"></UtrechtBreadcrumb>

          <UtrechtHeading level={1}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </UtrechtHeading>

          <UtrechtParagraph>
            Get started by editing <code>pages/index.js</code>
          </UtrechtParagraph>

          <div>
            <a href="https://nextjs.org/docs">
              <UtrechtHeading level={2}>Documentation &rarr;</UtrechtHeading>
              <UtrechtParagraph>Find in-depth information about Next.js features and API.</UtrechtParagraph>
            </a>

            <a href="https://nextjs.org/learn">
              <UtrechtHeading level={2}>Learn &rarr;</UtrechtHeading>
              <UtrechtParagraph>Learn about Next.js in an interactive course with quizzes!</UtrechtParagraph>
            </a>

            <a href="https://github.com/vercel/next.js/tree/master/examples">
              <UtrechtHeading level={2}>Examples &rarr;</UtrechtHeading>
              <UtrechtParagraph>Discover and deploy boilerplate example Next.js projects.</UtrechtParagraph>
            </a>

            <a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
              <UtrechtHeading level={2}>Deploy &rarr;</UtrechtHeading>
              <UtrechtParagraph>Instantly deploy your Next.js site to a public URL with Vercel.</UtrechtParagraph>
            </a>
          </div>
        </main>

        <UtrechtSeparator></UtrechtSeparator>

        <form>
          <UtrechtButton>Click me</UtrechtButton>
        </form>



          <UtrechtPageFooter >

            <UtrechtIconFacebook >
            </UtrechtIconFacebook>

            <UtrechtIconLinkedin >
            </UtrechtIconLinkedin>

            <UtrechtIconTwitter >
            </UtrechtIconTwitter>

            <UtrechtIconWhatsapp >
            </UtrechtIconWhatsapp>

          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Robert
          </a>
        </UtrechtPageFooter >

      </UtrechtDocument>
    </>
  );
}
