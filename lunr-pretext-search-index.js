var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Preface",
  "number": "",
  "title": "About this book",
  "body": " About this book   And what is the use of a book,'' thought Alice, ``without pictures or conversations?   Lewis Carroll in Alice in Wonderland     A First Course in Complex Analysis was written for a one-semester undergraduate course developed at Binghamton University (SUNY) and San Francisco State University, and has been adopted at several other institutions. For many of our students, Complex Analysis is their first rigorous analysis (if not mathematics) class they take, and this book reflects this very much. We tried to rely on as few concepts from real analysis as possible. In particular, series and sequences are treated from scratch, which has the consequence that power series are introduced late in the course. The goal our book works toward is the Residue Theorem, including some nontraditional applications from both continuous and discrete mathematics.  A printed paperback version of this open textbook is available from Orthogonal Publishing or your favorite online bookseller.  "
},
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Preface",
  "number": "",
  "title": "About the authors",
  "body": " About the authors  Matthias Beck is a professor in the Mathematics Department at San Francisco State University. His research interests are in geometric combinatorics and analytic number theory. He is the author of three other books, Computing the Continuous Discretely: Integer-point Enumeration in Polyhedra (with Sinai Robins, Springer 2007), The Art of Proof: Basic Training for Deeper Mathematics (with Ross Geoghegan, Springer 2010), and Combinatorial Reciprocity Theorems: An Invitation to Enumerative Geometric Combinatorics (with Raman Sanyal, AMS 2018).   Gerald Marchesi is a lecturer in the Department of Mathematical Sciences at Binghamton University (SUNY).  Dennis Pixton is a professor emeritus in the Department of Mathematical Sciences at Binghamton University (SUNY). His research interests are in dynamical systems and formal languages.  Lucas Sabalka is an applied mathematician at a technology company in Lincoln, Nebraska. He works on 3-dimensional computer vision applications. He was formerly a professor of mathematics at St. Louis University, after postdoctoral positions at UC Davis and Binghamton University (SUNY). His mathematical research interests are in geometric group theory, low dimensional topology, and computational algebra.  Robert Chaffer (cover art) is a professor emeritus at Central Michigan University. His academic interests are in abstract algebra, combinatorics, geometry, and computer applications. Since retirement from teaching, he has devoted much of his time to applying those interests to creation of art images.  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Preface",
  "number": "",
  "title": "A Note to Instructors",
  "body": " A Note to Instructors  The material in this book should be more than enough for a typical semester-long undergraduate course in complex analysis; our experience taught us that there is more content in this book than fits into one semester. Depending on the nature of your course and its place in your department's overall curriculum, some sections can be either partially omitted or their definitions and theorems can be assumed true without delving into proofs. contains optional longer homework problems that could also be used as group projects at the end of a course.  We would be happy to hear from anyone who has adopted our book for their course, as well as suggestions, corrections, or other comments.  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Acknowledgements",
  "body": " Acknowledgements  We thank our students who made many suggestions for and found errors in the text. Special thanks go to Sheldon Axler, Collin Bleak, Pierre-Alexandre Bliman, Matthew Brin, Andrew Hwang, John McCleary, Sharma Pallekonda, Joshua Palmatier, and Dmytro Savchuk for comments, suggestions, and additions after teaching from this book.  We thank Lon Mitchell for his initiative and support for the print version of our book with Orthogonal Publishing, and Bob Chaffer for allowing us to feature his art on the book's cover.  We are grateful to the American Institute of Mathematics for including our book in their Open Textbook Initiative .  "
},
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
  "id": "geomprop",
  "level": "1",
  "url": "geomprop.html",
  "type": "Section",
  "number": "1.2",
  "title": "From Algebra to Geometry and Back",
  "body": " From Algebra to Geometry and Back  Although we just introduced a new way of writing complex numbers, let's for a moment return to the -notation. complex plane It suggests that we can think of a complex number as a two-dimensional real vector. vector When plotting these vectors in the plane , we will call the -axis the real axis and the -axis the imaginary axis . imaginary axis  real axis  axis real  axis imaginary The addition that we defined for complex numbers resembles vector addition; see Figure . The analogy stops at multiplication: there is no usual multiplication of two vectors in that gives another vector, and certainly not one that agrees with our definition of the product of two complex numbers.   Addition of complex numbers.      z1=(3,5)  z2=(-4.5,2)  s = z1+z2           z_1       z_2       z_1+z_2         Any vector in is defined by its two coordinates. On the other hand, it is also determined by its length and the angle it encloses with, say, the positive real axis; let's define these concepts thoroughly.    The absolute value (also called the modulus ) of is , and an argument of is a number such that . modulus  absolute value  argument     A given complex number has infinitely many possible arguments. For instance, the number lies on the positive real axis, and so has argument , but we could just as well say it has argument , , , or for any integer . The number has modulus , and every real number is an argument. Aside from the exceptional case of , for any complex number , the arguments of all differ by a multiple of , just as we saw for the example .  The absolute value of the difference of two vectors has a nice geometric interpretation:    Let be two complex numbers, thought of as vectors in , and let denote the distance between (the endpoints of) the two vectors in (see Figure ). Then . distance of complex numbers      Let and . From geometry we know that .  This is the definition of . Since and , this is also equal to .    Geometry behind the distance between two complex numbers.      z1=(3,5)  z2=(-4.5,2)  d = z1-z2      z_1       z_2       z_1-z_2        geometric interpretation of multiplication   That simply says that the vector from to has the same length as the vector from to .  It is very useful to keep this geometric interpretation in mind when thinking about the absolute value of the difference of two complex numbers.  One reason to introduce the absolute value and argument of a complex number is that they allow us to give a geometric interpretation for the multiplication of two complex numbers. Let's say we have two complex numbers: , with absolute value and argument , and , with absolute value and argument . This means we can write and . To compute the product, we make use of some classic trigonometric identities: trigonometric identities  .  So the absolute value of the product is and one of its arguments is . Geometrically, we are multiplying the lengths of the two vectors representing our two complex numbers and adding their angles measured with respect to the positive real axis. You should convince yourself that there is no problem with the fact that there are many possible arguments for complex numbers, as both cosine and sine are periodic functions with period .    Multiplication of complex numbers.      polar(r,t)=(r*cos(t), r*sin(t))  r1=2  r2=4  t1=0.9  t2=2.7  z1=polar(r1,t1)  z2=polar(r2,t2)  z3=polar(6,t1+t2)     \\phi_1     z_1      \\phi_2     z_2      \\phi_1+\\phi_2     z_1z_2         In view of the above calculation, it should come as no surprise that we will have to deal with quantities of the form (where is some real number) quite a bit. To save space, bytes, ink, etc., (and because Mathematics is for lazy people Peter Hilton (Invited address, Hudson River Undergraduate Mathematics Conference 2000). ) we introduce a shortcut notation and define .   Three sample complex numbers of the form .      polar(r,t)=(r*cos(t), r*sin(t))  z1=polar(1,pi\/4)  z2=polar(1,7*pi\/8)  z3=polar(1,3*pi\/2)     e^{\\frac{\\pi i}{4}} = \\frac1{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}}    e^{\\frac{7\\pi i}{8}}    e^{-\\frac{\\pi i}{2}}=-i         Figure shows three examples. At this point, this exponential notation is indeed purely a notation. In particular, while our notation proves  \\ix{Euler's formula}  , this simply follows from the facts and . The connection between the numbers , , , and the complex exponential function (and thus the number ) is somewhat deeper. We'll explore this in Section . We will later see in Chapter that it has an intimate connection to the complex exponential function. For now, we motivate this maybe strange seeming definition by collecting some of its properties:    For any ,                             .       You are encouraged to prove them (see Exercise ); again we give a sample.   By definition of ,     Proposition implies that for any integers and . Thus numbers of the form with play a pivotal role in solving equations of the form , which is reason to give them a special name.    A root of unity is a number of the form for some integers and . root of unity Equivalently (by Exercise ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive  root of unity. root of unity primitive  primitive root of unity       The roots of unity are and . The latter two are primitive roots of unity.    With our new notation, the sentence the complex number has absolute value and argument now becomes the identity .  The left-hand side is often called the rectangular form , and the right-hand side the polar form of this complex number. polar form  rectangular form   We now have five different ways of thinking about a complex number: the formal definition, in rectangular form, in polar form, and geometrically, using Cartesian coordinates or polar coordinates. Each of these five ways is useful in different situations, and translating between them is an essential ingredient in complex analysis. The five ways and their corresponding notation are listed in . This list is not exhaustive; see, e.g., Exercise .   Five ways of thinking about a complex number.    Formal     Algebraic  Geometric    Rectangular:   Cartesian      z=(3,4)    x    y    z          Exponential:   Polar      z=(3,4)   \\theta     r    z           "
},
{
  "id": "fig_addition",
  "level": "2",
  "url": "geomprop.html#fig_addition",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Addition of complex numbers.      z1=(3,5)  z2=(-4.5,2)  s = z1+z2           z_1       z_2       z_1+z_2        "
},
{
  "id": "geomprop-5",
  "level": "2",
  "url": "geomprop.html#geomprop-5",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "  The absolute value (also called the modulus ) of is , and an argument of is a number such that . modulus  absolute value  argument    "
},
{
  "id": "prop_distance",
  "level": "2",
  "url": "geomprop.html#prop_distance",
  "type": "Proposition",
  "number": "1.2.3",
  "title": "",
  "body": "  Let be two complex numbers, thought of as vectors in , and let denote the distance between (the endpoints of) the two vectors in (see Figure ). Then . distance of complex numbers    "
},
{
  "id": "geomprop-9",
  "level": "2",
  "url": "geomprop.html#geomprop-9",
  "type": "Proof",
  "number": "1.2.1",
  "title": "",
  "body": " Let and . From geometry we know that .  This is the definition of . Since and , this is also equal to .  "
},
{
  "id": "distfig",
  "level": "2",
  "url": "geomprop.html#distfig",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " Geometry behind the distance between two complex numbers.      z1=(3,5)  z2=(-4.5,2)  d = z1-z2      z_1       z_2       z_1-z_2        geometric interpretation of multiplication  "
},
{
  "id": "geomprop-15",
  "level": "2",
  "url": "geomprop.html#geomprop-15",
  "type": "Figure",
  "number": "1.2.5",
  "title": "",
  "body": " Multiplication of complex numbers.      polar(r,t)=(r*cos(t), r*sin(t))  r1=2  r2=4  t1=0.9  t2=2.7  z1=polar(r1,t1)  z2=polar(r2,t2)  z3=polar(6,t1+t2)     \\phi_1     z_1      \\phi_2     z_2      \\phi_1+\\phi_2     z_1z_2        "
},
{
  "id": "fig_rootsof1",
  "level": "2",
  "url": "geomprop.html#fig_rootsof1",
  "type": "Figure",
  "number": "1.2.6",
  "title": "",
  "body": " Three sample complex numbers of the form .      polar(r,t)=(r*cos(t), r*sin(t))  z1=polar(1,pi\/4)  z2=polar(1,7*pi\/8)  z3=polar(1,3*pi\/2)     e^{\\frac{\\pi i}{4}} = \\frac1{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}}    e^{\\frac{7\\pi i}{8}}    e^{-\\frac{\\pi i}{2}}=-i       "
},
{
  "id": "easyexp",
  "level": "2",
  "url": "geomprop.html#easyexp",
  "type": "Proposition",
  "number": "1.2.7",
  "title": "",
  "body": "  For any ,                             .      "
},
{
  "id": "geomprop-21",
  "level": "2",
  "url": "geomprop.html#geomprop-21",
  "type": "Proof",
  "number": "1.2.2",
  "title": "",
  "body": " By definition of ,   "
},
{
  "id": "geomprop-23",
  "level": "2",
  "url": "geomprop.html#geomprop-23",
  "type": "Definition",
  "number": "1.2.8",
  "title": "",
  "body": "  A root of unity is a number of the form for some integers and . root of unity Equivalently (by Exercise ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive  root of unity. root of unity primitive  primitive root of unity    "
},
{
  "id": "geomprop-24",
  "level": "2",
  "url": "geomprop.html#geomprop-24",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": "  The roots of unity are and . The latter two are primitive roots of unity.   "
},
{
  "id": "fig_5ways",
  "level": "2",
  "url": "geomprop.html#fig_5ways",
  "type": "Table",
  "number": "1.2.10",
  "title": "Five ways of thinking about a complex number.",
  "body": " Five ways of thinking about a complex number.    Formal     Algebraic  Geometric    Rectangular:   Cartesian      z=(3,4)    x    y    z          Exponential:   Polar      z=(3,4)   \\theta     r    z          "
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
