var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec_defalg",
  "level": "1",
  "url": "sec_defalg.html",
  "type": "Section",
  "number": "1.1",
  "title": "Definitions and Algebraic Properties",
  "body": " Definitions and Algebraic Properties  There are many equivalent ways to think about a complex number, each of which is useful in its own right. In this section, we begin with a formal definition of a complex number. We then interpret this formal definition in more useful and easier-to-work-with algebraic language. Later we will see several more ways of thinking about complex numbers.    The complex numbers are pairs of real numbers, , equipped with the addition  and the multiplication  . complex number  real number  addition  multiplication     One reason to believe that the definitions of these binary operations are acceptable is that is an extension of , in the sense that the complex numbers of the form behave just like real numbers: . binary operation   So we can think of the real numbers being embedded in as those complex numbers whose second coordinate is zero. embedding of into   The following result states the algebraic structure that we established with our definitions.    The set of complex numbers endowed with the operations of addition and multiplication is a field. More specifically, this means that for all complex numbers , , and , we have field      What we are stating here can be compressed in the language of algebra: equations say that is an Abelian group with identity  ; equations say that is an Abelian group with identity . group  identity   The proof of Proposition is straightforward but nevertheless makes for good practice (see ). We give one sample:   By our definition for complex addition and properties of additive inverses in , .   The definition of complex multiplication implies the innocent looking statement .  This identity together with the fact that allows an alternative notation for complex numbers. The latter implies that we can write .  If we think in the spirit of our remark about embedding into of and as the real numbers and , then this means that we can write any complex number as a linear combination of and , with the real coefficients and . Now , in turn, can be thought of as the real number 1. So if we give a special name, say , then the complex number that we used to call can be written as or i@  .  We invite you to check that the definitions of our binary operations and Proposition are coherent with the usual real arithmetic rules if we think of complex numbers as given in the form .    The number is called the real part and the imaginary part  These names have historical reasons: people thought of complex numbers as unreal, imagined. of the complex number and are often denoted as and . real part  imaginary part     The identity then reads .  In fact, much more can now be said with the introduction of the square root of . It is not just that has a root, but every nonconstant polynomial has a root in : root  polynomial    Fundamental Theorem of Algebra  fundamental theorem of algebra   Every nonconstant polynomial of degree has roots (counting multiplicity) in .    The proof of this theorem requires some (important) machinery, so we defer its proof and an extended discussion of it to (see ).  "
},
{
  "id": "sec_defalg-3",
  "level": "2",
  "url": "sec_defalg.html#sec_defalg-3",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "  The complex numbers are pairs of real numbers, , equipped with the addition  and the multiplication  . complex number  real number  addition  multiplication    "
},
{
  "id": "alg",
  "level": "2",
  "url": "sec_defalg.html#alg",
  "type": "Proposition",
  "number": "1.1.2",
  "title": "",
  "body": "  The set of complex numbers endowed with the operations of addition and multiplication is a field. More specifically, this means that for all complex numbers , , and , we have field     "
},
{
  "id": "sec_defalg-10",
  "level": "2",
  "url": "sec_defalg.html#sec_defalg-10",
  "type": "Proof",
  "number": "1.1.1",
  "title": "",
  "body": " By our definition for complex addition and properties of additive inverses in , .  "
},
{
  "id": "sec_defalg-15",
  "level": "2",
  "url": "sec_defalg.html#sec_defalg-15",
  "type": "Definition",
  "number": "1.1.3",
  "title": "",
  "body": "  The number is called the real part and the imaginary part  These names have historical reasons: people thought of complex numbers as unreal, imagined. of the complex number and are often denoted as and . real part  imaginary part    "
},
{
  "id": "sec_defalg-18",
  "level": "2",
  "url": "sec_defalg.html#sec_defalg-18",
  "type": "Theorem",
  "number": "1.1.4",
  "title": "Fundamental Theorem of Algebra.",
  "body": " Fundamental Theorem of Algebra  fundamental theorem of algebra   Every nonconstant polynomial of degree has roots (counting multiplicity) in .   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "References",
  "number": "",
  "title": "Bibliography",
  "body": " Bibliography  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
