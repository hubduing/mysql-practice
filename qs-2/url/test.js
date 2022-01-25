const url = require('url');
adr = 'https://www.google.com/search?q=hello+world&newwindow=1&source=hp&ei=PEHqYeaTDO3HrgSLg5LgBg&iflsig=ALs-wAMAAAAAYepPTBJFs8Bmi0VNm4oIsg-y9opZA-en&ved=0ahUKEwjmoaOPi8L1AhXto4sKHYuBBGwQ4dUDCAc&uact=5&oq=hello+world&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMgUIABCABDIFCC4QgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOhEILhCABBCxAxCDARDHARDRAzoOCC4QgAQQsQMQxwEQowI6CwgAEIAEELEDEIMBOgsILhCABBDHARCjAjoRCC4QgAQQsQMQgwEQxwEQowI6CwguEIAEELEDEIMBOggILhCxAxCDAToICC4QgAQQsQNQAFicFWDGF2gAcAB4AIABtAGIAcEIkgEDOC4zmAEAoAEB&sclient=gws-wiz';
let q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search, '\n');

const qdata = q.query;
console.log(qdata.q);