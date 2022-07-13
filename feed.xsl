<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  exclude-result-prefixes="atom"
>
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <title>RSS Feed - <xsl:value-of select="atom:feed/atom:title"/></title>
        <style type="text/css">
          body {
            max-width: 768px;
            margin: 0 auto;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 1.1rem;
            line-height: 1.5em;
          }
            
          section {
            margin: 30px 15px;
          }
          section:last-child {
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 60px;
            counter-reset: postCounter;
          }
          h1 {
            font-size: 2em;
            margin: .67em 0;
            line-height: 1.125em;
          }

          h2 {
            border-bottom: 1px solid #000;
            padding-bottom: .3em;
          }
          
          .alert {
            background: #fff5b1;
            padding: 4px 12px;
            margin: 0 -12px;
          }
            
          a {
            text-decoration: none;
            color: #000;
          }

          a:hover {
            text-decoration: underline;
          }
          
          .entry {
            border-bottom: solid 1px #000;
            counter-increment: postCounter;
            padding-bottom: 1rem;
          }

          .entry h3 {
            font-size: 1.1rem;
            margin-bottom: 0;
            font-weight: 600;
            text-transform: uppercase;
          }
          
          .entry p {
            color: #555;
            margin: 4px 0;
          }
          
          .entry img {
            clip-path: circle(45%);
            height: auto;
            float: right;
            width: 100px;
          }
          .entry::after {
            display: block;
            clear: both;
            content: "";
          }
          .counter {
            color: #fff;
            padding: 4px;
            font-weight: 400;
            background-color: #0f3b63;
            border-radius: 50%;
            border: solid 1px #000;
            margin-right: .5rem;
          }
          .entry:hover .counter {
            background-color: #fff;
            color: #c61f48;
            border-color: #c61f48;
          }
          .counter::after {
            font-size: 12px;
            vertical-align: top;
            width: 20px;
            height: 20px;
            text-align: center;
            content: counter(postCounter);
            visibility: visible;
            display: inline-block;
          }
        </style>
      </head>
      <body>
        <section>
          <div class="alert">
            <p><strong>This is a web feed</strong>, also known as an RSS feed. <strong>Subscribe</strong> by copying the URL from the address bar into your newsreader app.</p>
          </div>
        </section>
        <section>
          <xsl:apply-templates select="atom:feed" />
        </section>
        <section>
          <h2>Recent Items</h2>
          <xsl:apply-templates select="atom:feed/atom:entry" />
        </section>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="atom:feed">
    <h1><xsl:value-of select="atom:title"/> - RSS Feed</h1>
    <p>This RSS feed provides the latest news posts from the <xsl:value-of select="atom:title"/>.

    <a class="head_link" target="_blank">
      <xsl:attribute name="href">
        <xsl:value-of select="atom:link[@rel='alternate']/@href"/>
      </xsl:attribute>
      Visit Website &#x2192;
    </a>

    </p>

    <h2>What is an RSS feed?</h2>
    <p>An RSS feed is a data format that contains the latest content from a website, blog, or podcast. You can use feeds to <strong>subscribe</strong> to websites and get the <strong>latest content in one place</strong>.</p>
    <ul>
    	<li><strong>Feeds put you in control.</strong> Unlike social media apps, there is no algorithm deciding what you see or read. You always get the latest content from the creators you care about.</li>
    	<li><strong>Feed are private by design.</strong> No one owns web feeds, so no one is harvesting your personal information and profiting by selling it to advertisers.</li>
    	<li><strong>Feeds are spam-proof.</strong> Had enough? Easy, just unsubscribe from the feed.</li>
    </ul>
    <p>All you need to do to get started is to add the URL (web address) for this feed to a special app called a newsreader. Visit <a href="https://aboutfeeds.com/">About Feeds</a> to get started with newsreaders and subscribing. It's free. </p>
  </xsl:template>

  <xsl:template match="atom:entry">
    <div class="entry">
      <xsl:element name="img">
         <xsl:attribute name="src">
            <xsl:value-of select="atom:thumbnail"/>
         </xsl:attribute>
      </xsl:element>
      <h3>
        <span class="counter"></span>
        <a target="_blank">
          <xsl:attribute name="href">
            <xsl:value-of select="atom:link/@href"/>
          </xsl:attribute>
          <xsl:value-of select="atom:title"/>
        </a>
      </h3>
      <p>
        <xsl:value-of select="atom:summary"  disable-output-escaping="yes" />
      </p>
      <small>
        Published: <xsl:value-of select="atom:updated" />
      </small>
    </div>
  </xsl:template>

</xsl:stylesheet>