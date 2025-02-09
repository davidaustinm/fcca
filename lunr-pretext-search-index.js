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
  "body": " Definitions and Algebraic Properties  There are many equivalent ways to think about a complex number, each of which is useful in its own right. In this section, we begin with a formal definition of a complex number. We then interpret this formal definition in more useful and easier-to-work-with algebraic language. Later we will see several more ways of thinking about complex numbers.    The complex numbers are pairs of real numbers, , equipped with the addition  and the multiplication  . complex number  real number  addition  multiplication     One reason to believe that the definitions of these binary operations are acceptable is that is an extension of , in the sense that the complex numbers of the form behave just like real numbers: . binary operation   So we can think of the real numbers being embedded in as those complex numbers whose second coordinate is zero. embedding of into   The following result states the algebraic structure that we established with our definitions.    The set of complex numbers endowed with the operations of addition and multiplication is a field. More specifically, this means that for all complex numbers , , and , we have field      What we are stating here can be compressed in the language of algebra: equations say that is an Abelian group with identity  ; equations say that is an Abelian group with identity . group  identity   The proof of Proposition is straightforward but nevertheless makes for good practice (see ). We give one sample:   By our definition for complex addition and properties of additive inverses in , .   The definition of complex multiplication implies the innocent looking statement .  This identity together with the fact that allows an alternative notation for complex numbers. The latter implies that we can write .  If we think in the spirit of our remark about embedding into of and as the real numbers and , then this means that we can write any complex number as a linear combination of and , with the real coefficients and . Now , in turn, can be thought of as the real number 1. So if we give a special name, say , then the complex number that we used to call can be written as or i@  .  We invite you to check that the definitions of our binary operations and are coherent with the usual real arithmetic rules if we think of complex numbers as given in the form .    The number is called the real part and the imaginary part  These names have historical reasons: people thought of complex numbers as unreal, imagined. of the complex number and are often denoted as and . real part  imaginary part     The identity then reads .  In fact, much more can now be said with the introduction of the square root of . It is not just that has a root, but every nonconstant polynomial has a root in : root  polynomial    Fundamental Theorem of Algebra  fundamental theorem of algebra   Every nonconstant polynomial of degree has roots (counting multiplicity) in .    The proof of this theorem requires some (important) machinery, so we defer its proof and an extended discussion of it to (see ).  "
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
  "body": " From Algebra to Geometry and Back  Although we just introduced a new way of writing complex numbers, let's for a moment return to the -notation. complex plane It suggests that we can think of a complex number as a two-dimensional real vector. vector When plotting these vectors in the plane , we will call the -axis the real axis and the -axis the imaginary axis . imaginary axis  real axis  axis real  axis imaginary The addition that we defined for complex numbers resembles vector addition; see . The analogy stops at multiplication: there is no usual multiplication of two vectors in that gives another vector, and certainly not one that agrees with our definition of the product of two complex numbers.   Addition of complex numbers.      z1=(3,5)  z2=(-4.5,2)  s = z1+z2           z_1       z_2       z_1+z_2         Any vector in is defined by its two coordinates. On the other hand, it is also determined by its length and the angle it encloses with, say, the positive real axis; let's define these concepts thoroughly.    The absolute value (also called the modulus ) of is , and an argument of is a number such that . modulus  absolute value  argument     A given complex number has infinitely many possible arguments. For instance, the number lies on the positive real axis, and so has argument , but we could just as well say it has argument , , , or for any integer . The number has modulus , and every real number is an argument. Aside from the exceptional case of , for any complex number , the arguments of all differ by a multiple of , just as we saw for the example .  The absolute value of the difference of two vectors has a nice geometric interpretation:    Let be two complex numbers, thought of as vectors in , and let denote the distance between (the endpoints of) the two vectors in (see ). Then . distance of complex numbers      Let and . From geometry we know that .  This is the definition of . Since and , this is also equal to .    Geometry behind the distance between two complex numbers.      z1=(3,5)  z2=(-4.5,2)  d = z1-z2      z_1       z_2       z_1-z_2        geometric interpretation of multiplication   That simply says that the vector from to has the same length as the vector from to .  It is very useful to keep this geometric interpretation in mind when thinking about the absolute value of the difference of two complex numbers.  One reason to introduce the absolute value and argument of a complex number is that they allow us to give a geometric interpretation for the multiplication of two complex numbers. Let's say we have two complex numbers: , with absolute value and argument , and , with absolute value and argument . This means we can write and . To compute the product, we make use of some classic trigonometric identities: trigonometric identities  .  So the absolute value of the product is and one of its arguments is . Geometrically, we are multiplying the lengths of the two vectors representing our two complex numbers and adding their angles measured with respect to the positive real axis. You should convince yourself that there is no problem with the fact that there are many possible arguments for complex numbers, as both cosine and sine are periodic functions with period .    Multiplication of complex numbers.      polar(r,t)=(r*cos(t), r*sin(t))  r1=2  r2=4  t1=0.9  t2=2.7  z1=polar(r1,t1)  z2=polar(r2,t2)  z3=polar(6,t1+t2)     \\phi_1     z_1      \\phi_2     z_2      \\phi_1+\\phi_2     z_1z_2         In view of the above calculation, it should come as no surprise that we will have to deal with quantities of the form (where is some real number) quite a bit. To save space, bytes, ink, etc., (and because Mathematics is for lazy people Peter Hilton (Invited address, Hudson River Undergraduate Mathematics Conference 2000). ) we introduce a shortcut notation and define .   Three sample complex numbers of the form .      polar(r,t)=(r*cos(t), r*sin(t))  z1=polar(1,pi\/4)  z2=polar(1,7*pi\/8)  z3=polar(1,3*pi\/2)     e^{\\frac{\\pi i}{4}} = \\frac1{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}}    e^{\\frac{7\\pi i}{8}}    e^{-\\frac{\\pi i}{2}}=-i         shows three examples. At this point, this exponential notation is indeed purely a notation. In particular, while our notation proves  \\ix{Euler's formula}  , this simply follows from the facts and . The connection between the numbers , , , and the complex exponential function (and thus the number ) is somewhat deeper. We'll explore this in . We will later see in that it has an intimate connection to the complex exponential function. For now, we motivate this maybe strange seeming definition by collecting some of its properties:    For any ,                             .       You are encouraged to prove them (see ); again we give a sample.   By definition of ,     implies that for any integers and . Thus numbers of the form with play a pivotal role in solving equations of the form , which is reason to give them a special name.    A root of unity is a number of the form for some integers and . root of unity Equivalently (by ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive  root of unity. root of unity primitive  primitive root of unity       The roots of unity are and . The latter two are primitive roots of unity.    With our new notation, the sentence the complex number has absolute value and argument now becomes the identity .  The left-hand side is often called the rectangular form , and the right-hand side the polar form of this complex number. polar form  rectangular form   We now have five different ways of thinking about a complex number: the formal definition, in rectangular form, in polar form, and geometrically, using Cartesian coordinates or polar coordinates. Each of these five ways is useful in different situations, and translating between them is an essential ingredient in complex analysis. The five ways and their corresponding notation are listed in . This list is not exhaustive; see, e.g., .   Five ways of thinking about a complex number.    Formal     Algebraic  Geometric    Rectangular:   Cartesian      z=(3,4)    x    y    z          Exponential:   Polar      z=(3,4)   \\theta     r    z           "
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
  "body": "  Let be two complex numbers, thought of as vectors in , and let denote the distance between (the endpoints of) the two vectors in (see ). Then . distance of complex numbers    "
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
  "body": "  A root of unity is a number of the form for some integers and . root of unity Equivalently (by ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive  root of unity. root of unity primitive  primitive root of unity    "
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
  "id": "sec_geometricprops",
  "level": "1",
  "url": "sec_geometricprops.html",
  "type": "Section",
  "number": "1.3",
  "title": "Geometric Properties",
  "body": " Geometric Properties  From the chain of basic inequalities (or, alternatively, by arguing with basic geometric properties of triangles), we obtain the inequalities .  The square of the absolute value has the nice property .  This is one of many reasons to give the process of passing from to a special name.    The number is the (complex) conjugate of . conjugate We denote the conjugate by .    Geometrically, conjugating means reflecting the vector corresponding to with respect to the real axis, as shown in .        z=(3.5,2)  zbar=(3.5,-2)     z    \\overline{z}       The complex conjugate is obtained by reflecting across the real axis.   The following proposition collects some basic properties of the conjugate.    For any ,                                            .       The proofs of these properties are straightforward (see ); once more we give a sample.   Let and . Then    We note that the property yields a neat formula for the inverse of a nonzero complex number, which is implicit already in : .  A famous geometric inequality (which holds, more generally, for vectors in ) goes as follows.   Triangle inequality    triangle inequality For any we have .    By drawing a picture in the complex plane, you should be able to come up with a geometric proof of the triangle inequality. Here we proceed algebraically:   We make extensive use of  , where the inequality follows from . Taking square roots on the left- and right-hand sides proves our claim.   For future reference we list several useful variants of the triangle inequality:    For , we have the following relations:   The triangle inequality: .    The reverse triangle inequality: . reverse triangle inequality  triangle inequality reverse     The triangle inequality for sums: .        is just a rewrite of the original triangle inequality, using the fact that , and follows by induction. The proof of the reverse triangle inequality is left as .  "
},
{
  "id": "sec_geometricprops-5",
  "level": "2",
  "url": "sec_geometricprops.html#sec_geometricprops-5",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "  The number is the (complex) conjugate of . conjugate We denote the conjugate by .   "
},
{
  "id": "fig-conjugate",
  "level": "2",
  "url": "sec_geometricprops.html#fig-conjugate",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "      z=(3.5,2)  zbar=(3.5,-2)     z    \\overline{z}       The complex conjugate is obtained by reflecting across the real axis.  "
},
{
  "id": "conjugation",
  "level": "2",
  "url": "sec_geometricprops.html#conjugation",
  "type": "Proposition",
  "number": "1.3.3",
  "title": "",
  "body": "  For any ,                                            .      "
},
{
  "id": "sec_geometricprops-11",
  "level": "2",
  "url": "sec_geometricprops.html#sec_geometricprops-11",
  "type": "Proof",
  "number": "1.3.1",
  "title": "",
  "body": " Let and . Then   "
},
{
  "id": "lem_triangleineq",
  "level": "2",
  "url": "sec_geometricprops.html#lem_triangleineq",
  "type": "Proposition",
  "number": "1.3.4",
  "title": "Triangle inequality.",
  "body": " Triangle inequality    triangle inequality For any we have .   "
},
{
  "id": "sec_geometricprops-16",
  "level": "2",
  "url": "sec_geometricprops.html#sec_geometricprops-16",
  "type": "Proof",
  "number": "1.3.2",
  "title": "",
  "body": " We make extensive use of  , where the inequality follows from . Taking square roots on the left- and right-hand sides proves our claim.  "
},
{
  "id": "cor_triangleineq",
  "level": "2",
  "url": "sec_geometricprops.html#cor_triangleineq",
  "type": "Corollary",
  "number": "1.3.5",
  "title": "",
  "body": "  For , we have the following relations:   The triangle inequality: .    The reverse triangle inequality: . reverse triangle inequality  triangle inequality reverse     The triangle inequality for sums: .      "
},
{
  "id": "sec_topologyintro",
  "level": "1",
  "url": "sec_topologyintro.html",
  "type": "Section",
  "number": "1.4",
  "title": "Elementary Topology of the Plane",
  "body": " Elementary Topology of the Plane  In we saw that the complex numbers , which were initially defined algebraically, can be identified with the points in the Euclidean plane . Euclidean plane In this section we collect some definitions and results concerning the topology of the plane. plane  topology    Sample circle and disk.       x  y      C[2+i,2]    D[-2,\\frac13]        In , we interpreted as the distance between the complex numbers and , viewed as points in the plane. So if we fix a complex number and a positive real number , then all satisfying form the set of points at distance from ; that is, this set is the circle with center and radius , which we denote by circle  .  The inside of this circle is called the open disk with center and radius ; we use the notation . open disk  disk open   Note that does not include the points on . illustrates these definitions.  Next we need some terminology for talking about subsets of .    Suppose is a subset of .   A point is an interior point of if some open disk with center is a subset of . interior point     A point is a boundary point of if every open disk centered at contains a point in and also a point that is not in . boundary point     A point is an accumulation point of if every open disk centered at contains a point of different from . accumulation point     A point is an isolated point of if some open disk centered at contains no point of other than . isolated point        The idea is that if you don't move too far from an interior point of then you remain in ; but at a boundary point you can make an arbitrarily small move and get to a point inside and you can also make an arbitrarily small move and get to a point outside .    A set is open if all its points are interior points. A set is closed if it contains all its boundary points. open set  closed set       For and , the sets and are open. The closed disk  is an example of a closed set. closed disk  disk closed     A given set might be neither open nor closed. The complex plane and the empty set  are (the only sets that are) both open and closed. empty set     The boundary  of a set is the set of all boundary points of . boundary The interior of is the set of all interior points of . The closure of is the set . closure       The closure of the open disk is . The boundary of is the circle .      The set is bounded if for some . bounded     One notion that is somewhat subtle in the complex domain is the idea of connectedness . Intuitively, a set is connected if it is in one piece. In a set is connected if and only if it is an interval, so there is little reason to discuss the matter. However, in the plane there is a vast variety of connected subsets.    Two sets are separated if there are disjoint open sets so that and . separated A set is connected if it is impossible to find two separated nonempty sets whose union is . connected A region is a connected open set. region     The idea of separation is that the two open sets and ensure that and cannot just stick together. It is usually easy to check that a set is not connected. On the other hand, it is hard to use the above definition to show that a set is connected, since we have to rule out any possible separation.    The intervals and on the real axis are separated: There are infinitely many choices for and that work; one choice is and , depicted in . Hence is not connected.   The intervals and are separated.       x  y              One type of connected set that we will use frequently is a path.    A path (or curve ) in is a continuous function , where is a closed interval in . curve  path We may think of as a parametrization of the image that is painted by the path and will often write this parametrization as . The path is smooth if is differentiable and the derivative is continuous and nonzero. smooth  There is a subtlety here, because is defined on a closed interval. For to be smooth, we demand both that exists for all , and that and exist.     This definition uses the calculus notions of continuity and differentiability; that is, being continuous means that for all  , and the derivative of at is defined by .     shows two examples of paths. On the left, we see the path parametrized by while the path shown on the right is    Two paths and their parametrizations; is smooth and is continuous and piecewise smooth.       x  y   f(t)=(-2+2*cos(t), 2*sin(t))  g1(t)=(3,t-2)  g2(t)=(6-t,1\/2*(t-1))  g(t)=chi_co(0,3,t)*g1(t) + chi_cc(3,5,t)*g2(t)       \\gamma_1(t)    \\gamma_2(t)          We remark that each path comes with an orientation i.e., a sense of direction. orientation For example, the path in is different from , even though both and yield the same picture: features a counter-clockwise orientation, where as that of is clockwise.  It is a customary and practical abuse of notation to use the same letter for the path and its parametrization. We emphasize that a path must have a parametrization, and that the parametrization must be defined and continuous on a closed and bounded interval . Since topologically we may identify with , a path can be specified by giving two continuous real-valued functions of a real variable, and , and setting .    The path is simple if is one-to-one, with the possible exception that (in plain English: the path does not cross itself). A path is closed if . simple  closed path  path closed       The unit circle  , parametrized, e.g., by , is a simple closed path. unit circle     As seems intuitively clear, any path is connected; however, a proof of this fact requires a bit more preparation in topology. The same goes for the following result, which gives a useful property of open connected sets.    If any two points in can be connected by a path in , then is connected. Conversely, if is open and connected, then any two points of can be connected by a path in ; in fact, we can connect any two points of by a chain of horizontal and vertical segments lying in .    Here a chain of segments in means the following: there are points so that and are the endpoints of a horizontal or vertical segment in , for all . chain of segments (It is not hard to parametrize such a chain, so it determines a path.)    Consider the open unit disk  . disk unit  unit disk Any two points in can be connected by a chain of at most two segments in , and so is connected. Now let ; this is the punctured disk obtained by removing the center from . Then is open and it is connected, but now you may need more than two segments to connect points. For example, you need three segments to connect to since we cannot go through .    We remark that the second part of is not generally true if is not open. For example, circles are connected but there is no way to connect two distinct points of a circle by a chain of segments that are subsets of the circle. A more extreme example, discussed in topology texts, is the topologist's sine curve, which is a connected set that contains points that cannot be connected by a path of any sort within .  "
},
{
  "id": "fig_circles",
  "level": "2",
  "url": "sec_topologyintro.html#fig_circles",
  "type": "Figure",
  "number": "1.4.1",
  "title": "",
  "body": " Sample circle and disk.       x  y      C[2+i,2]    D[-2,\\frac13]       "
},
{
  "id": "sec_topologyintro-8",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-8",
  "type": "Definition",
  "number": "1.4.2",
  "title": "",
  "body": "  Suppose is a subset of .   A point is an interior point of if some open disk with center is a subset of . interior point     A point is a boundary point of if every open disk centered at contains a point in and also a point that is not in . boundary point     A point is an accumulation point of if every open disk centered at contains a point of different from . accumulation point     A point is an isolated point of if some open disk centered at contains no point of other than . isolated point       "
},
{
  "id": "sec_topologyintro-10",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-10",
  "type": "Definition",
  "number": "1.4.3",
  "title": "",
  "body": "  A set is open if all its points are interior points. A set is closed if it contains all its boundary points. open set  closed set    "
},
{
  "id": "sec_topologyintro-11",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-11",
  "type": "Example",
  "number": "1.4.4",
  "title": "",
  "body": "  For and , the sets and are open. The closed disk  is an example of a closed set. closed disk  disk closed    "
},
{
  "id": "sec_topologyintro-13",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-13",
  "type": "Definition",
  "number": "1.4.5",
  "title": "",
  "body": "  The boundary  of a set is the set of all boundary points of . boundary The interior of is the set of all interior points of . The closure of is the set . closure    "
},
{
  "id": "sec_topologyintro-14",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-14",
  "type": "Example",
  "number": "1.4.6",
  "title": "",
  "body": "  The closure of the open disk is . The boundary of is the circle .   "
},
{
  "id": "sec_topologyintro-15",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-15",
  "type": "Definition",
  "number": "1.4.7",
  "title": "",
  "body": "  The set is bounded if for some . bounded    "
},
{
  "id": "sec_topologyintro-17",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-17",
  "type": "Definition",
  "number": "1.4.8",
  "title": "",
  "body": "  Two sets are separated if there are disjoint open sets so that and . separated A set is connected if it is impossible to find two separated nonempty sets whose union is . connected A region is a connected open set. region    "
},
{
  "id": "sec_topologyintro-19",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-19",
  "type": "Example",
  "number": "1.4.9",
  "title": "",
  "body": "  The intervals and on the real axis are separated: There are infinitely many choices for and that work; one choice is and , depicted in . Hence is not connected.   The intervals and are separated.       x  y             "
},
{
  "id": "def_smooth",
  "level": "2",
  "url": "sec_topologyintro.html#def_smooth",
  "type": "Definition",
  "number": "1.4.11",
  "title": "",
  "body": "  A path (or curve ) in is a continuous function , where is a closed interval in . curve  path We may think of as a parametrization of the image that is painted by the path and will often write this parametrization as . The path is smooth if is differentiable and the derivative is continuous and nonzero. smooth  There is a subtlety here, because is defined on a closed interval. For to be smooth, we demand both that exists for all , and that and exist.    "
},
{
  "id": "example-paths",
  "level": "2",
  "url": "sec_topologyintro.html#example-paths",
  "type": "Example",
  "number": "1.4.12",
  "title": "",
  "body": "   shows two examples of paths. On the left, we see the path parametrized by while the path shown on the right is    Two paths and their parametrizations; is smooth and is continuous and piecewise smooth.       x  y   f(t)=(-2+2*cos(t), 2*sin(t))  g1(t)=(3,t-2)  g2(t)=(6-t,1\/2*(t-1))  g(t)=chi_co(0,3,t)*g1(t) + chi_cc(3,5,t)*g2(t)       \\gamma_1(t)    \\gamma_2(t)         "
},
{
  "id": "sec_topologyintro-26",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-26",
  "type": "Definition",
  "number": "1.4.14",
  "title": "",
  "body": "  The path is simple if is one-to-one, with the possible exception that (in plain English: the path does not cross itself). A path is closed if . simple  closed path  path closed    "
},
{
  "id": "sec_topologyintro-27",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-27",
  "type": "Example",
  "number": "1.4.15",
  "title": "",
  "body": "  The unit circle  , parametrized, e.g., by , is a simple closed path. unit circle    "
},
{
  "id": "connbysegments",
  "level": "2",
  "url": "sec_topologyintro.html#connbysegments",
  "type": "Theorem",
  "number": "1.4.16",
  "title": "",
  "body": "  If any two points in can be connected by a path in , then is connected. Conversely, if is open and connected, then any two points of can be connected by a path in ; in fact, we can connect any two points of by a chain of horizontal and vertical segments lying in .   "
},
{
  "id": "sec_topologyintro-31",
  "level": "2",
  "url": "sec_topologyintro.html#sec_topologyintro-31",
  "type": "Example",
  "number": "1.4.17",
  "title": "",
  "body": "  Consider the open unit disk  . disk unit  unit disk Any two points in can be connected by a chain of at most two segments in , and so is connected. Now let ; this is the punctured disk obtained by removing the center from . Then is open and it is connected, but now you may need more than two segments to connect points. For example, you need three segments to connect to since we cannot go through .   "
},
{
  "id": "chapter1-exercises",
  "level": "1",
  "url": "chapter1-exercises.html",
  "type": "Exercises",
  "number": "1.5",
  "title": "Exercises",
  "body": "  Let and . Compute the following:                               Find the real and imaginary parts of each of the following:    for any                for any        Find the absolute value and conjugate of each of the following:                          Write in polar form:                                              Write in rectangular form:                          Write in both polar and rectangular form:                Show that the quadratic formula works. That is, for with , prove that the roots of the equation are .  Here we define if the discriminant  is negative. discriminant     Use the quadratic formula to solve the following equations.                               Find all solutions of the equation .    Fix and . Show that the equation has a solution if and only if . When solutions exist, show the solution set is a circle.    Find all solutions to the following equations:                          Show that if and only if .    Show that    is a real number if and only if ;     is either real or purely imaginary if and only if .       Prove Proposition .    Show that if then or .    Prove Proposition .    Fix a positive integer . Prove that the solutions to the equation are precisely where . ( Hint : To show that every solution of is of this form, first prove that it must be of the form for some , then write for some integer and some real number , and then argue that has to be zero.)    Show that and deduce from this closed formulas for and .    Fix a positive integer and a complex number . Find all solutions to . ( Hint : Write in terms of polar coordinates.)    Use Proposition to derive the triple angle formulas:                Given , define the matrix . Show that .  (This means that the set , equipped with the usual addition and multiplication of matrices, behaves exactly like .)    Prove Proposition .    Sketch the following sets in the complex plane:                                              Suppose is a polynomial with real coefficients. polynomial Prove that    .     if and only if .       Prove the reverse triangle inequality ( of ) . reverse triangle inequality     Use the previous exercise to show that for every on the circle .    Sketch the sets defined by the following constraints and determine whether they are open, closed, or neither; bounded; connected.                                    What are the boundaries of the sets in the previous exercise?    Let be the set of points satisfying either is real and , or , or or .   Sketch the set , being careful to indicate exactly the points that are in .    Determine the interior points of .    Determine the boundary points of .    Determine the isolated points of .       The set in the previous exercise can be written in three different ways as the union of two disjoint nonempty separated subsets. Describe them, and in each case say briefly why the subsets are separated.    Show that the union of two regions with nonempty intersection is itself a region.    Show that if and is closed, then . Similarly, if and is open, show that is contained in the interior of .    Find a parametrization for each of the following paths:   the circle , oriented counter-clockwise    the line segment from to     the top half of the circle , oriented clockwise    the rectangle with vertices , oriented counter-clockwise    the ellipse , oriented counter-clockwise       Draw the path parametrized by .    Let be the annulus determined by the inequalities . This is a connected open set. Find the maximum number of horizontal and vertical segments in needed to connect two points of .   "
},
{
  "id": "ex_1_0",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_0",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": " Let and . Compute the following:                             "
},
{
  "id": "ex_1_1",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_1",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": " Find the real and imaginary parts of each of the following:    for any                for any      "
},
{
  "id": "ex_1_2",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_2",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": " Find the absolute value and conjugate of each of the following:                        "
},
{
  "id": "ex_1_3",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_3",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": " Write in polar form:                                            "
},
{
  "id": "ex_1_4",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_4",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": " Write in rectangular form:                        "
},
{
  "id": "chapter1-exercises-6",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-6",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": " Write in both polar and rectangular form:              "
},
{
  "id": "chapter1-exercises-7",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-7",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": " Show that the quadratic formula works. That is, for with , prove that the roots of the equation are .  Here we define if the discriminant  is negative. discriminant   "
},
{
  "id": "chapter1-exercises-8",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-8",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": " Use the quadratic formula to solve the following equations.                             "
},
{
  "id": "ex_1_6",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_6",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": " Find all solutions of the equation .  "
},
{
  "id": "chapter1-exercises-10",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-10",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": " Fix and . Show that the equation has a solution if and only if . When solutions exist, show the solution set is a circle.  "
},
{
  "id": "ex_1_5",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_5",
  "type": "Exercise",
  "number": "1.5.11",
  "title": "",
  "body": " Find all solutions to the following equations:                        "
},
{
  "id": "chapter1-exercises-12",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-12",
  "type": "Exercise",
  "number": "1.5.12",
  "title": "",
  "body": " Show that if and only if .  "
},
{
  "id": "chapter1-exercises-13",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-13",
  "type": "Exercise",
  "number": "1.5.13",
  "title": "",
  "body": " Show that    is a real number if and only if ;     is either real or purely imaginary if and only if .     "
},
{
  "id": "ex_alg",
  "level": "2",
  "url": "chapter1-exercises.html#ex_alg",
  "type": "Exercise",
  "number": "1.5.14",
  "title": "",
  "body": " Prove Proposition .  "
},
{
  "id": "chapter1-exercises-15",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-15",
  "type": "Exercise",
  "number": "1.5.15",
  "title": "",
  "body": " Show that if then or .  "
},
{
  "id": "ex_easyexp",
  "level": "2",
  "url": "chapter1-exercises.html#ex_easyexp",
  "type": "Exercise",
  "number": "1.5.16",
  "title": "",
  "body": " Prove Proposition .  "
},
{
  "id": "ex_rootofunity",
  "level": "2",
  "url": "chapter1-exercises.html#ex_rootofunity",
  "type": "Exercise",
  "number": "1.5.17",
  "title": "",
  "body": " Fix a positive integer . Prove that the solutions to the equation are precisely where . ( Hint : To show that every solution of is of this form, first prove that it must be of the form for some , then write for some integer and some real number , and then argue that has to be zero.)  "
},
{
  "id": "ex_5throotsof1",
  "level": "2",
  "url": "chapter1-exercises.html#ex_5throotsof1",
  "type": "Exercise",
  "number": "1.5.18",
  "title": "",
  "body": " Show that and deduce from this closed formulas for and .  "
},
{
  "id": "chapter1-exercises-19",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-19",
  "type": "Exercise",
  "number": "1.5.19",
  "title": "",
  "body": " Fix a positive integer and a complex number . Find all solutions to . ( Hint : Write in terms of polar coordinates.)  "
},
{
  "id": "chapter1-exercises-20",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-20",
  "type": "Exercise",
  "number": "1.5.20",
  "title": "",
  "body": " Use Proposition to derive the triple angle formulas:              "
},
{
  "id": "ex_Casmatrices",
  "level": "2",
  "url": "chapter1-exercises.html#ex_Casmatrices",
  "type": "Exercise",
  "number": "1.5.21",
  "title": "",
  "body": " Given , define the matrix . Show that .  (This means that the set , equipped with the usual addition and multiplication of matrices, behaves exactly like .)  "
},
{
  "id": "ex_conjugation",
  "level": "2",
  "url": "chapter1-exercises.html#ex_conjugation",
  "type": "Exercise",
  "number": "1.5.22",
  "title": "",
  "body": " Prove Proposition .  "
},
{
  "id": "chapter1-exercises-23",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-23",
  "type": "Exercise",
  "number": "1.5.23",
  "title": "",
  "body": " Sketch the following sets in the complex plane:                                            "
},
{
  "id": "realpolynomialb",
  "level": "2",
  "url": "chapter1-exercises.html#realpolynomialb",
  "type": "Exercise",
  "number": "1.5.24",
  "title": "",
  "body": " Suppose is a polynomial with real coefficients. polynomial Prove that    .     if and only if .     "
},
{
  "id": "ex_reversetriangle",
  "level": "2",
  "url": "chapter1-exercises.html#ex_reversetriangle",
  "type": "Exercise",
  "number": "1.5.25",
  "title": "",
  "body": " Prove the reverse triangle inequality ( of ) . reverse triangle inequality   "
},
{
  "id": "chapter1-exercises-26",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-26",
  "type": "Exercise",
  "number": "1.5.26",
  "title": "",
  "body": " Use the previous exercise to show that for every on the circle .  "
},
{
  "id": "chapter1-exercises-27",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-27",
  "type": "Exercise",
  "number": "1.5.27",
  "title": "",
  "body": " Sketch the sets defined by the following constraints and determine whether they are open, closed, or neither; bounded; connected.                                  "
},
{
  "id": "chapter1-exercises-28",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-28",
  "type": "Exercise",
  "number": "1.5.28",
  "title": "",
  "body": " What are the boundaries of the sets in the previous exercise?  "
},
{
  "id": "chapter1-exercises-29",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-29",
  "type": "Exercise",
  "number": "1.5.29",
  "title": "",
  "body": " Let be the set of points satisfying either is real and , or , or or .   Sketch the set , being careful to indicate exactly the points that are in .    Determine the interior points of .    Determine the boundary points of .    Determine the isolated points of .     "
},
{
  "id": "chapter1-exercises-30",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-30",
  "type": "Exercise",
  "number": "1.5.30",
  "title": "",
  "body": " The set in the previous exercise can be written in three different ways as the union of two disjoint nonempty separated subsets. Describe them, and in each case say briefly why the subsets are separated.  "
},
{
  "id": "chapter1-exercises-31",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-31",
  "type": "Exercise",
  "number": "1.5.31",
  "title": "",
  "body": " Show that the union of two regions with nonempty intersection is itself a region.  "
},
{
  "id": "chapter1-exercises-32",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-32",
  "type": "Exercise",
  "number": "1.5.32",
  "title": "",
  "body": " Show that if and is closed, then . Similarly, if and is open, show that is contained in the interior of .  "
},
{
  "id": "ex_parametrizations",
  "level": "2",
  "url": "chapter1-exercises.html#ex_parametrizations",
  "type": "Exercise",
  "number": "1.5.33",
  "title": "",
  "body": " Find a parametrization for each of the following paths:   the circle , oriented counter-clockwise    the line segment from to     the top half of the circle , oriented clockwise    the rectangle with vertices , oriented counter-clockwise    the ellipse , oriented counter-clockwise     "
},
{
  "id": "ex_diamondpath",
  "level": "2",
  "url": "chapter1-exercises.html#ex_diamondpath",
  "type": "Exercise",
  "number": "1.5.34",
  "title": "",
  "body": " Draw the path parametrized by .  "
},
{
  "id": "chapter1-exercises-35",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-35",
  "type": "Exercise",
  "number": "1.5.35",
  "title": "",
  "body": " Let be the annulus determined by the inequalities . This is a connected open set. Find the maximum number of horizontal and vertical segments in needed to connect two points of .  "
},
{
  "id": "sec_optionallab",
  "level": "1",
  "url": "sec_optionallab.html",
  "type": "Section",
  "number": "1.6",
  "title": "Optional Lab",
  "body": " Optional Lab  Open the open-source software platform Geogebra.  geogebra    Convert the following complex numbers into their polar representation, i.e., give the absolute value and the argument of the number.  After you have finished computing these numbers, check your answers with the program.    Convert the following complex numbers given in polar representation into their rectangular representation.  After you have finished computing these numbers, check your answers with the program.    Pick your favorite five numbers , , , , and from the ones that you've played around with and put them in the tables below, in both rectangular and polar form. Apply the functions listed to your numbers. Think about which representation is more helpful in each instance.           rectangular                 polar                                                                                                                                                                                                                                    Play with other examples until you get a feel for these functions.     "
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
