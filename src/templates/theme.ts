const scriptFonts = `
        <a:font script="Jpan" typeface="游ゴシック Light"/>
        <a:font script="Hang" typeface="맑은 고딕"/>
        <a:font script="Hans" typeface="等线 Light"/>
        <a:font script="Hant" typeface="新細明體"/>
        <a:font script="Arab" typeface="Times New Roman"/>
        <a:font script="Hebr" typeface="Times New Roman"/>
        <a:font script="Thai" typeface="Angsana New"/>
        <a:font script="Ethi" typeface="Nyala"/>
        <a:font script="Beng" typeface="Vrinda"/>
        <a:font script="Gujr" typeface="Shruti"/>
        <a:font script="Khmr" typeface="MoolBoran"/>
        <a:font script="Knda" typeface="Tunga"/>
        <a:font script="Guru" typeface="Raavi"/>
        <a:font script="Cans" typeface="Euphemia"/>
        <a:font script="Cher" typeface="Plantagenet Cherokee"/>
        <a:font script="Yiii" typeface="Microsoft Yi Baiti"/>
        <a:font script="Tibt" typeface="Microsoft Himalaya"/>
        <a:font script="Thaa" typeface="MV Boli"/>
        <a:font script="Deva" typeface="Mangal"/>
        <a:font script="Telu" typeface="Gautami"/>
        <a:font script="Taml" typeface="Latha"/>
        <a:font script="Syrc" typeface="Estrangelo Edessa"/>
        <a:font script="Orya" typeface="Kalinga"/>
        <a:font script="Mlym" typeface="Kartika"/>
        <a:font script="Laoo" typeface="DokChampa"/>
        <a:font script="Sinh" typeface="Iskoola Pota"/>
        <a:font script="Mong" typeface="Mongolian Baiti"/>
        <a:font script="Viet" typeface="Times New Roman"/>
        <a:font script="Uigh" typeface="Microsoft Uighur"/>
        <a:font script="Geor" typeface="Sylfaen"/>
        <a:font script="Armn" typeface="Arial"/>
        <a:font script="Bugi" typeface="Leelawadee UI"/>
        <a:font script="Bopo" typeface="Microsoft JhengHei"/>
        <a:font script="Java" typeface="Javanese Text"/>
        <a:font script="Lisu" typeface="Segoe UI"/>
        <a:font script="Mymr" typeface="Myanmar Text"/>
        <a:font script="Nkoo" typeface="Ebrima"/>
        <a:font script="Olck" typeface="Nirmala UI"/>
        <a:font script="Osma" typeface="Ebrima"/>
        <a:font script="Phag" typeface="Phagspa"/>
        <a:font script="Syrn" typeface="Estrangelo Edessa"/>
        <a:font script="Syrj" typeface="Estrangelo Edessa"/>
        <a:font script="Syre" typeface="Estrangelo Edessa"/>
        <a:font script="Sora" typeface="Nirmala UI"/>
        <a:font script="Tale" typeface="Microsoft Tai Le"/>
        <a:font script="Talu" typeface="Microsoft New Tai Lue"/>
        <a:font script="Tfng" typeface="Ebrima"/>
`

export const colorSchemeXML = ({
	dark1 = '000000',
	dark2 = '44546A',
	light1 = 'FFFFFF',
	light2 = 'E7E6E6',
	accent1 = '4472C4',
	accent2 = 'ED7D31',
	accent3 = 'A5A5A5',
	accent4 = 'FFC000',
	accent5 = '5B9BD5',
	accent6 = '70AD47',
	hLink = '0563C1',
	folHLink = '954F72',
} = {}) => {
	return `<a:clrScheme name="Sublime">
      <a:dk1>
        <a:sysClr val="windowText" lastClr="${dark1}"/>
      </a:dk1>
      <a:lt1>
        <a:sysClr val="window" lastClr="${light1}"/>
      </a:lt1>
      <a:dk2>
        <a:srgbClr val="${dark2}"/>
      </a:dk2>
      <a:lt2>
        <a:srgbClr val="${light2}"/>
      </a:lt2>
      <a:accent1>
        <a:srgbClr val="${accent1}"/>
      </a:accent1>
      <a:accent2>
        <a:srgbClr val="${accent2}"/>
      </a:accent2>
      <a:accent3>
        <a:srgbClr val="${accent3}"/>
      </a:accent3>
      <a:accent4>
        <a:srgbClr val="${accent4}"/>
      </a:accent4>
      <a:accent5>
        <a:srgbClr val="${accent5}"/>
      </a:accent5>
      <a:accent6>
        <a:srgbClr val="${accent6}"/>
      </a:accent6>
      <a:hlink>
        <a:srgbClr val="${hLink}"/>
      </a:hlink>
      <a:folHlink>
        <a:srgbClr val="${folHLink}"/>
      </a:folHlink>
    </a:clrScheme>`
}

const DEFAULT_SCHEME = colorSchemeXML({})

export default function makeXmlTheme(fontFamily, colorScheme = DEFAULT_SCHEME): string {
	return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Sublime Theme">
  <a:themeElements>
    ${colorScheme}
    <a:fontScheme name="Sublime">
      <a:majorFont>
        <a:latin typeface="${fontFamily || 'Calibri Light'}" panose="020F0302020204030204"/>
        <a:ea typeface=""/>
        <a:cs typeface=""/>
        ${scriptFonts}
      </a:majorFont>
      <a:minorFont>
        <a:latin typeface="${fontFamily || 'Calibri'}" panose="020F0502020204030204"/>
        <a:ea typeface=""/>
        <a:cs typeface=""/>
        ${scriptFonts}
      </a:minorFont>
    </a:fontScheme>
    <a:fmtScheme name="Sublime">
      <a:fillStyleLst>
        <a:solidFill>
          <a:schemeClr val="phClr"/>
        </a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0">
              <a:schemeClr val="phClr">
                <a:lumMod val="110000"/>
                <a:satMod val="105000"/>
                <a:tint val="67000"/>
              </a:schemeClr>
            </a:gs>
            <a:gs pos="50000">
              <a:schemeClr val="phClr">
                <a:lumMod val="105000"/>
                <a:satMod val="103000"/>
                <a:tint val="73000"/>
              </a:schemeClr>
            </a:gs>
            <a:gs pos="100000">
              <a:schemeClr val="phClr">
                <a:lumMod val="105000"/>
                <a:satMod val="109000"/>
                <a:tint val="81000"/>
              </a:schemeClr>
            </a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0"/>
        </a:gradFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0">
              <a:schemeClr val="phClr">
                <a:satMod val="103000"/>
                <a:lumMod val="102000"/>
                <a:tint val="94000"/>
              </a:schemeClr>
            </a:gs>
            <a:gs pos="50000">
              <a:schemeClr val="phClr">
                <a:satMod val="110000"/>
                <a:lumMod val="100000"/>
                <a:shade val="100000"/>
              </a:schemeClr>
            </a:gs>
            <a:gs pos="100000">
              <a:schemeClr val="phClr">
                <a:lumMod val="99000"/>
                <a:satMod val="120000"/>
                <a:shade val="78000"/>
              </a:schemeClr>
            </a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0"/>
        </a:gradFill>
      </a:fillStyleLst>
      <a:lnStyleLst>
        <a:ln w="6350" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill>
            <a:schemeClr val="phClr"/>
          </a:solidFill>
          <a:prstDash val="solid"/>
          <a:miter lim="800000"/>
        </a:ln>
        <a:ln w="12700" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill>
            <a:schemeClr val="phClr"/>
          </a:solidFill>
          <a:prstDash val="solid"/>
          <a:miter lim="800000"/>
        </a:ln>
        <a:ln w="19050" cap="flat" cmpd="sng" algn="ctr">
          <a:solidFill>
            <a:schemeClr val="phClr"/>
          </a:solidFill>
          <a:prstDash val="solid"/>
          <a:miter lim="800000"/>
        </a:ln>
      </a:lnStyleLst>
      <a:effectStyleLst>
        <a:effectStyle>
          <a:effectLst/>
        </a:effectStyle>
        <a:effectStyle>
          <a:effectLst/>
        </a:effectStyle>
        <a:effectStyle>
          <a:effectLst>
            <a:outerShdw blurRad="57150" dist="19050" dir="5400000" algn="ctr" rotWithShape="0">
              <a:srgbClr val="000000">
                <a:alpha val="63000"/>
              </a:srgbClr>
            </a:outerShdw>
          </a:effectLst>
        </a:effectStyle>
      </a:effectStyleLst>
      <a:bgFillStyleLst>
        <a:solidFill>
          <a:schemeClr val="phClr"/>
        </a:solidFill>
        <a:solidFill>
          <a:schemeClr val="phClr">
            <a:tint val="95000"/>
            <a:satMod val="170000"/>
          </a:schemeClr>
        </a:solidFill>
        <a:gradFill rotWithShape="1">
          <a:gsLst>
            <a:gs pos="0">
              <a:schemeClr val="phClr">
                <a:tint val="93000"/>
                <a:satMod val="150000"/>
                <a:shade val="98000"/>
                <a:lumMod val="102000"/>
              </a:schemeClr>
            </a:gs>
            <a:gs pos="50000">
              <a:schemeClr val="phClr">
                <a:tint val="98000"/>
                <a:satMod val="130000"/>
                <a:shade val="90000"/>
                <a:lumMod val="103000"/>
              </a:schemeClr>
            </a:gs>
            <a:gs pos="100000">
              <a:schemeClr val="phClr">
                <a:shade val="63000"/>
                <a:satMod val="120000"/>
              </a:schemeClr>
            </a:gs>
          </a:gsLst>
          <a:lin ang="5400000" scaled="0"/>
        </a:gradFill>
      </a:bgFillStyleLst>
    </a:fmtScheme>
  </a:themeElements>
  <a:objectDefaults/>
  <a:extraClrSchemeLst/>
  <a:extLst>
    <a:ext uri="{05A4C25C-085E-4340-85A3-A5531E510DB2}">
      <thm15:themeFamily xmlns:thm15="http://schemas.microsoft.com/office/thememl/2012/main" name="Sublime Theme" id="{62F939B6-93AF-4DB8-9C6B-D6C7DFDC589F}" vid="{4A3C46E8-61CC-4603-A589-7422A47A8E4A}"/>
    </a:ext>
  </a:extLst>
</a:theme>
`
}
