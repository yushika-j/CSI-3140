<!-- Write an XSL style sheet for your solution to
Exercise 15.7 that displays the nutritional facts in an HTML5 table -->

<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html>
      <head>
        <title>Nutritional Facts</title>
      </head>
      <body>
        <h1>Nutritional Facts</h1>
        <table>
          <tr>
            <th>Item</th>
            <th>Amount</th>
          </tr>
          <xsl:apply-templates select="nutritional-facts/*" />
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="nutritional-facts/*">
    <tr>
      <td><xsl:value-of select="name()" /></td>
      <td><xsl:value-of select="." /></td>
    </tr>
  </xsl:template>
</xsl:stylesheet>