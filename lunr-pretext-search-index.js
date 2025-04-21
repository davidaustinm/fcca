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
  "id": "def-complex-number",
  "level": "2",
  "url": "sec_defalg.html#def-complex-number",
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
  "body": " From Algebra to Geometry and Back  Although we just introduced a new way of writing complex numbers, let's for a moment return to the -notation. complex plane It suggests that we can think of a complex number as a two-dimensional real vector. vector When plotting these vectors in the plane , we will call the -axis the real axis and the -axis the imaginary axis . imaginary axis  real axis  axis real  axis imaginary The addition that we defined for complex numbers resembles vector addition; see . The analogy stops at multiplication: there is no usual multiplication of two vectors in that gives another vector, and certainly not one that agrees with our definition of the product of two complex numbers.   Addition of complex numbers.      z1=(3,5)  z2=(-4.5,2)  s = z1+z2           z_1       z_2       z_1+z_2         Any vector in is defined by its two coordinates. On the other hand, it is also determined by its length and the angle it encloses with, say, the positive real axis; let's define these concepts thoroughly.    The absolute value (also called the modulus ) of is , and an argument of is a number such that . modulus  absolute value  argument     A given complex number has infinitely many possible arguments. For instance, the number lies on the positive real axis, and so has argument , but we could just as well say it has argument , , , or for any integer . The number has modulus , and every real number is an argument. Aside from the exceptional case of , for any complex number , the arguments of all differ by a multiple of , just as we saw for the example .  The absolute value of the difference of two vectors has a nice geometric interpretation:    Let be two complex numbers, thought of as vectors in , and let denote the distance between (the endpoints of) the two vectors in (see ). Then . distance of complex numbers      Let and . From geometry we know that .  This is the definition of . Since and , this is also equal to .    Geometry behind the distance between two complex numbers.      z1=(3,5)  z2=(-4.5,2)  d = z1-z2      z_1       z_2       z_1-z_2        geometric interpretation of multiplication   That simply says that the vector from to has the same length as the vector from to .  It is very useful to keep this geometric interpretation in mind when thinking about the absolute value of the difference of two complex numbers.  One reason to introduce the absolute value and argument of a complex number is that they allow us to give a geometric interpretation for the multiplication of two complex numbers. Let's say we have two complex numbers: , with absolute value and argument , and , with absolute value and argument . This means we can write and . To compute the product, we make use of some classic trigonometric identities: trigonometric identities  .  So the absolute value of the product is and one of its arguments is . Geometrically, we are multiplying the lengths of the two vectors representing our two complex numbers and adding their angles measured with respect to the positive real axis. You should convince yourself that there is no problem with the fact that there are many possible arguments for complex numbers, as both cosine and sine are periodic functions with period .    Multiplication of complex numbers.      polar(r,t)=(r*cos(t), r*sin(t))  r1=2  r2=4  t1=0.9  t2=2.7  z1=polar(r1,t1)  z2=polar(r2,t2)  z3=polar(6,t1+t2)     \\phi_1     z_1      \\phi_2     z_2      \\phi_1+\\phi_2     z_1z_2         In view of the above calculation, it should come as no surprise that we will have to deal with quantities of the form (where is some real number) quite a bit. To save space, bytes, ink, etc., (and because Mathematics is for lazy people Peter Hilton (Invited address, Hudson River Undergraduate Mathematics Conference 2000). ) we introduce a shortcut notation and define .   Three sample complex numbers of the form .      polar(r,t)=(r*cos(t), r*sin(t))  z1=polar(1,pi\/4)  z2=polar(1,7*pi\/8)  z3=polar(1,3*pi\/2)     e^{\\frac{\\pi i}{4}} = \\frac1{\\sqrt{2}}+i\\frac{1}{\\sqrt{2}}    e^{\\frac{7\\pi i}{8}}    e^{-\\frac{\\pi i}{2}}=-i         shows three examples. At this point, this exponential notation is indeed purely a notation. In particular, while our notation proves  \\ix{Euler's formula}  , this simply follows from the facts and . The connection between the numbers , , , and the complex exponential function (and thus the number ) is somewhat deeper. We'll explore this in . We will later see in that it has an intimate connection to the complex exponential function. For now, we motivate this maybe strange seeming definition by collecting some of its properties:    For any ,                             .       You are encouraged to prove them (see ); again we give a sample.   By definition of ,     implies that for any integers and . Thus numbers of the form with play a pivotal role in solving equations of the form , which is reason to give them a special name.    A root of unity is a number of the form for some integers and . root of unity Equivalently (by ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive root of unity . root of unity primitive  primitive root of unity       The roots of unity are and . The latter two are primitive roots of unity.    With our new notation, the sentence the complex number has absolute value and argument now becomes the identity .  The left-hand side is often called the rectangular form , and the right-hand side the polar form of this complex number. polar form  rectangular form   We now have five different ways of thinking about a complex number: the formal definition, in rectangular form, in polar form, and geometrically, using Cartesian coordinates or polar coordinates. Each of these ways is useful in different situations, and translating between them is an essential ingredient in complex analysis. This list is not exhaustive; see, e.g., .  Various ways of thinking about a complex number  We collect the various ways we've seen of describing a complex number.   Formal definition  A complex number is formally defined to be an ordered pair of real numbers , as given in .    Rectangular form   We frequently represent a complex number as , and we may visualize the number using Cartesian coordinates.       z=(3,4)    x    y    z          Exponential form   Similarly, a complex number also has an exponential form and can be visualized using polar coordinates.       z=(3,4)   \\theta     r    z            "
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
  "body": "  A root of unity is a number of the form for some integers and . root of unity Equivalently (by ), a root of unity is a complex number such that for some positive integer . In this case, we call an root of unity . If is the smallest positive integer with the property , then is a primitive root of unity . root of unity primitive  primitive root of unity    "
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
  "body": "   Let and . Compute the following:                                 Find the real and imaginary parts of each of the following:    for any                for any          Find the absolute value and conjugate of each of the following:                            Write in polar form:                                                Write in rectangular form:                            Write in both polar and rectangular form:                  Show that the quadratic formula works. That is, for with , prove that the roots of the equation are .  Here we define if the discriminant  is negative. discriminant       Use the quadratic formula to solve the following equations.                                 Find all solutions of the equation .      Fix and . Show that the equation has a solution if and only if . When solutions exist, show the solution set is a circle.      Find all solutions to the following equations:                            Show that if and only if .      Show that    is a real number if and only if ;     is either real or purely imaginary if and only if .         Prove Proposition .      Show that if then or .      Prove Proposition .      Fix a positive integer . Prove that the solutions to the equation are precisely where . ( Hint : To show that every solution of is of this form, first prove that it must be of the form for some , then write for some integer and some real number , and then argue that has to be zero.)      Show that and deduce from this closed formulas for and .      Fix a positive integer and a complex number . Find all solutions to . ( Hint : Write in terms of polar coordinates.)      Use Proposition to derive the triple angle formulas:                  Given , define the matrix . Show that .  (This means that the set , equipped with the usual addition and multiplication of matrices, behaves exactly like .)      Prove Proposition .      Sketch the following sets in the complex plane:                                                Suppose is a polynomial with real coefficients. polynomial Prove that    .     if and only if .         Prove the reverse triangle inequality ( of ) . reverse triangle inequality       Use the previous exercise to show that for every on the circle .      Sketch the sets defined by the following constraints and determine whether they are open, closed, or neither; bounded; connected.                                      What are the boundaries of the sets in the previous exercise?      Let be the set of points satisfying either is real and , or , or or .   Sketch the set , being careful to indicate exactly the points that are in .    Determine the interior points of .    Determine the boundary points of .    Determine the isolated points of .         The set in the previous exercise can be written in three different ways as the union of two disjoint nonempty separated subsets. Describe them, and in each case say briefly why the subsets are separated.      Show that the union of two regions with nonempty intersection is itself a region.      Show that if and is closed, then . Similarly, if and is open, show that is contained in the interior of .      Find a parametrization for each of the following paths:   the circle , oriented counter-clockwise    the line segment from to     the top half of the circle , oriented clockwise    the rectangle with vertices , oriented counter-clockwise    the ellipse , oriented counter-clockwise         Draw the path parametrized by .      Let be the annulus determined by the inequalities . This is a connected open set. Find the maximum number of horizontal and vertical segments in needed to connect two points of .    "
},
{
  "id": "ex_1_0",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_0",
  "type": "Exercise",
  "number": "1.5.1",
  "title": "",
  "body": "  Let and . Compute the following:                              "
},
{
  "id": "ex_1_1",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_1",
  "type": "Exercise",
  "number": "1.5.2",
  "title": "",
  "body": "  Find the real and imaginary parts of each of the following:    for any                for any       "
},
{
  "id": "ex_1_2",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_2",
  "type": "Exercise",
  "number": "1.5.3",
  "title": "",
  "body": "  Find the absolute value and conjugate of each of the following:                         "
},
{
  "id": "ex_1_3",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_3",
  "type": "Exercise",
  "number": "1.5.4",
  "title": "",
  "body": "  Write in polar form:                                             "
},
{
  "id": "ex_1_4",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_4",
  "type": "Exercise",
  "number": "1.5.5",
  "title": "",
  "body": "  Write in rectangular form:                         "
},
{
  "id": "chapter1-exercises-6",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-6",
  "type": "Exercise",
  "number": "1.5.6",
  "title": "",
  "body": "  Write in both polar and rectangular form:               "
},
{
  "id": "chapter1-exercises-7",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-7",
  "type": "Exercise",
  "number": "1.5.7",
  "title": "",
  "body": "  Show that the quadratic formula works. That is, for with , prove that the roots of the equation are .  Here we define if the discriminant  is negative. discriminant    "
},
{
  "id": "chapter1-exercises-8",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-8",
  "type": "Exercise",
  "number": "1.5.8",
  "title": "",
  "body": "  Use the quadratic formula to solve the following equations.                              "
},
{
  "id": "ex_1_6",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_6",
  "type": "Exercise",
  "number": "1.5.9",
  "title": "",
  "body": "  Find all solutions of the equation .   "
},
{
  "id": "chapter1-exercises-10",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-10",
  "type": "Exercise",
  "number": "1.5.10",
  "title": "",
  "body": "  Fix and . Show that the equation has a solution if and only if . When solutions exist, show the solution set is a circle.   "
},
{
  "id": "ex_1_5",
  "level": "2",
  "url": "chapter1-exercises.html#ex_1_5",
  "type": "Exercise",
  "number": "1.5.11",
  "title": "",
  "body": "  Find all solutions to the following equations:                         "
},
{
  "id": "chapter1-exercises-12",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-12",
  "type": "Exercise",
  "number": "1.5.12",
  "title": "",
  "body": "  Show that if and only if .   "
},
{
  "id": "chapter1-exercises-13",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-13",
  "type": "Exercise",
  "number": "1.5.13",
  "title": "",
  "body": "  Show that    is a real number if and only if ;     is either real or purely imaginary if and only if .      "
},
{
  "id": "ex_alg",
  "level": "2",
  "url": "chapter1-exercises.html#ex_alg",
  "type": "Exercise",
  "number": "1.5.14",
  "title": "",
  "body": "  Prove Proposition .   "
},
{
  "id": "chapter1-exercises-15",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-15",
  "type": "Exercise",
  "number": "1.5.15",
  "title": "",
  "body": "  Show that if then or .   "
},
{
  "id": "ex_easyexp",
  "level": "2",
  "url": "chapter1-exercises.html#ex_easyexp",
  "type": "Exercise",
  "number": "1.5.16",
  "title": "",
  "body": "  Prove Proposition .   "
},
{
  "id": "ex_rootofunity",
  "level": "2",
  "url": "chapter1-exercises.html#ex_rootofunity",
  "type": "Exercise",
  "number": "1.5.17",
  "title": "",
  "body": "  Fix a positive integer . Prove that the solutions to the equation are precisely where . ( Hint : To show that every solution of is of this form, first prove that it must be of the form for some , then write for some integer and some real number , and then argue that has to be zero.)   "
},
{
  "id": "ex_5throotsof1",
  "level": "2",
  "url": "chapter1-exercises.html#ex_5throotsof1",
  "type": "Exercise",
  "number": "1.5.18",
  "title": "",
  "body": "  Show that and deduce from this closed formulas for and .   "
},
{
  "id": "chapter1-exercises-19",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-19",
  "type": "Exercise",
  "number": "1.5.19",
  "title": "",
  "body": "  Fix a positive integer and a complex number . Find all solutions to . ( Hint : Write in terms of polar coordinates.)   "
},
{
  "id": "chapter1-exercises-20",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-20",
  "type": "Exercise",
  "number": "1.5.20",
  "title": "",
  "body": "  Use Proposition to derive the triple angle formulas:               "
},
{
  "id": "ex_Casmatrices",
  "level": "2",
  "url": "chapter1-exercises.html#ex_Casmatrices",
  "type": "Exercise",
  "number": "1.5.21",
  "title": "",
  "body": "  Given , define the matrix . Show that .  (This means that the set , equipped with the usual addition and multiplication of matrices, behaves exactly like .)   "
},
{
  "id": "ex_conjugation",
  "level": "2",
  "url": "chapter1-exercises.html#ex_conjugation",
  "type": "Exercise",
  "number": "1.5.22",
  "title": "",
  "body": "  Prove Proposition .   "
},
{
  "id": "chapter1-exercises-23",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-23",
  "type": "Exercise",
  "number": "1.5.23",
  "title": "",
  "body": "  Sketch the following sets in the complex plane:                                             "
},
{
  "id": "realpolynomialb",
  "level": "2",
  "url": "chapter1-exercises.html#realpolynomialb",
  "type": "Exercise",
  "number": "1.5.24",
  "title": "",
  "body": "  Suppose is a polynomial with real coefficients. polynomial Prove that    .     if and only if .      "
},
{
  "id": "ex_reversetriangle",
  "level": "2",
  "url": "chapter1-exercises.html#ex_reversetriangle",
  "type": "Exercise",
  "number": "1.5.25",
  "title": "",
  "body": "  Prove the reverse triangle inequality ( of ) . reverse triangle inequality    "
},
{
  "id": "chapter1-exercises-26",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-26",
  "type": "Exercise",
  "number": "1.5.26",
  "title": "",
  "body": "  Use the previous exercise to show that for every on the circle .   "
},
{
  "id": "chapter1-exercises-27",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-27",
  "type": "Exercise",
  "number": "1.5.27",
  "title": "",
  "body": "  Sketch the sets defined by the following constraints and determine whether they are open, closed, or neither; bounded; connected.                                   "
},
{
  "id": "chapter1-exercises-28",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-28",
  "type": "Exercise",
  "number": "1.5.28",
  "title": "",
  "body": "  What are the boundaries of the sets in the previous exercise?   "
},
{
  "id": "chapter1-exercises-29",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-29",
  "type": "Exercise",
  "number": "1.5.29",
  "title": "",
  "body": "  Let be the set of points satisfying either is real and , or , or or .   Sketch the set , being careful to indicate exactly the points that are in .    Determine the interior points of .    Determine the boundary points of .    Determine the isolated points of .      "
},
{
  "id": "chapter1-exercises-30",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-30",
  "type": "Exercise",
  "number": "1.5.30",
  "title": "",
  "body": "  The set in the previous exercise can be written in three different ways as the union of two disjoint nonempty separated subsets. Describe them, and in each case say briefly why the subsets are separated.   "
},
{
  "id": "chapter1-exercises-31",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-31",
  "type": "Exercise",
  "number": "1.5.31",
  "title": "",
  "body": "  Show that the union of two regions with nonempty intersection is itself a region.   "
},
{
  "id": "chapter1-exercises-32",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-32",
  "type": "Exercise",
  "number": "1.5.32",
  "title": "",
  "body": "  Show that if and is closed, then . Similarly, if and is open, show that is contained in the interior of .   "
},
{
  "id": "ex_parametrizations",
  "level": "2",
  "url": "chapter1-exercises.html#ex_parametrizations",
  "type": "Exercise",
  "number": "1.5.33",
  "title": "",
  "body": "  Find a parametrization for each of the following paths:   the circle , oriented counter-clockwise    the line segment from to     the top half of the circle , oriented clockwise    the rectangle with vertices , oriented counter-clockwise    the ellipse , oriented counter-clockwise      "
},
{
  "id": "ex_diamondpath",
  "level": "2",
  "url": "chapter1-exercises.html#ex_diamondpath",
  "type": "Exercise",
  "number": "1.5.34",
  "title": "",
  "body": "  Draw the path parametrized by .   "
},
{
  "id": "chapter1-exercises-35",
  "level": "2",
  "url": "chapter1-exercises.html#chapter1-exercises-35",
  "type": "Exercise",
  "number": "1.5.35",
  "title": "",
  "body": "  Let be the annulus determined by the inequalities . This is a connected open set. Find the maximum number of horizontal and vertical segments in needed to connect two points of .   "
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
  "id": "sec_limitsandcontinuity",
  "level": "1",
  "url": "sec_limitsandcontinuity.html",
  "type": "Section",
  "number": "2.1",
  "title": "Limits and Continuity",
  "body": " Limits and Continuity    A (complex) function  is a map from a subset to ; in this situation we will write and call the domain of . domain  function This means that each element gets mapped to exactly one complex number, called the image of and usually denoted by . image of a point     So far there is nothing that makes complex functions any more special than, say, functions from to . In fact, we can construct many familiar looking functions from the standard calculus repertoire, such as (the identity map identity map  ), , , or . The former three could be defined on all of , whereas for the latter we have to exclude the origin from the domain. On the other hand, we could construct some functions that make use of a certain representation of , for example, , , or .  Next we define limits of a function. The philosophy of the following definition is not restricted to complex functions, but for sake of simplicity we state it only for those functions. limit of a function     Suppose and is an accumulation point of . accumulation point If is a complex number such that for every we can find so that, for all satisfying , we have , then is the limit of as approaches ; in short, .    This definition is the same as is found in most calculus texts. The reason we require that is an accumulation point of the domain is just that we need to be sure that there are points of the domain that are arbitrarily close to . Just as in the real case, our definition (i.e., the part that says ) does not require that is in the domain of and, if is in the domain of , the definition explicitly ignores the value of .    Let's prove that .  Given , we need to determine such that implies . We rewrite .  If we choose , say, smaller than 1 then the factor on the right can be bounded by 3 (draw a picture!). This means that any should do the trick: in this case, implies .  This was a proof written out in a way one might come up with it. Here's a short, neat version:  Given , choose . Then implies from which we conclude that .  This proves .    Just as in the real case, the limit is unique if it exists (see ). It is often useful to investigate limits by restricting the way the point approaches . The following result is a direct consequence of the definition.    Suppose and . Suppose and is an accumulation point of . If is the restriction of to , then exists and has the value .    The definition of limit in the complex domain has to be treated with a little more care than its real companion; this is illustrated by the following example.    The limit of as does not exist.  To see this, we try to compute this limit as on the real and on the imaginary axis. In the first case, we can write , and hence .  In the second case, we write where , and then .  So we get a different limit depending on the direction from which we approach 0. Proposition then implies that the limit of as does not exist.    On the other hand, the following usual limit rules are valid for complex functions; the proofs of these rules are everything but trivial and make for nice practice (see ); as usual, we give a sample proof.    Let and be complex functions with domain , let be an accumulation point of , and let . If and exist, then    .     .     .     where in the last identity we also require that .    We will prove of the proposition. Assume that (otherwise there is nothing to prove), and let and . Then we know that, given , we can find such that and .  Thus, choosing , we infer that implies .  Here we used the triangle inequality ( Proposition ). This proves that , which was our claim.    Because the definition of the limit is somewhat elaborate, the following fundamental definition looks almost trivial. trivial     Suppose . If and either is an isolated point of or then is continuous at . continuous More generally, is continuous on if is continuous at every .    However, in almost all proofs using continuity it is necessary to interpret this in terms of 's and 's. So here is an alternate definition:    Suppose and . Then is continuous at if, for every positive real number , there is a positive real number so that . continuous     See for a proof that these definitions are equivalent.    We already proved (in ) that the function given by is continuous at . You're invited (see ) to extend our proof to show that, in fact, this function is continuous on .  On the other hand, let be given by   In we proved that is not continuous at . However, this is its only point of discontinuity (see ).    Just as in the real case, we can take the limit inside a continuous function, by considering composition of functions.    The image of the function is the set . image of a function If the image of is contained in the domain of another function , we define the composition  through . composition       Let with image contained in , and let . Suppose is an accumulation point of , , and is continuous at . Then ; in short, .    Given , we know there is an such that .  For this , we also know there is a such that .  Stringing these two implications together gives that .  We have thus proved that .    "
},
{
  "id": "sec_limitsandcontinuity-2",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-2",
  "type": "Definition",
  "number": "2.1.1",
  "title": "",
  "body": "  A (complex) function  is a map from a subset to ; in this situation we will write and call the domain of . domain  function This means that each element gets mapped to exactly one complex number, called the image of and usually denoted by . image of a point    "
},
{
  "id": "sec_limitsandcontinuity-5",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-5",
  "type": "Definition",
  "number": "2.1.2",
  "title": "",
  "body": "  Suppose and is an accumulation point of . accumulation point If is a complex number such that for every we can find so that, for all satisfying , we have , then is the limit of as approaches ; in short, .   "
},
{
  "id": "exam_limitexists",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#exam_limitexists",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Let's prove that .  Given , we need to determine such that implies . We rewrite .  If we choose , say, smaller than 1 then the factor on the right can be bounded by 3 (draw a picture!). This means that any should do the trick: in this case, implies .  This was a proof written out in a way one might come up with it. Here's a short, neat version:  Given , choose . Then implies from which we conclude that .  This proves .   "
},
{
  "id": "restrictedlimit",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#restrictedlimit",
  "type": "Proposition",
  "number": "2.1.4",
  "title": "",
  "body": "  Suppose and . Suppose and is an accumulation point of . If is the restriction of to , then exists and has the value .   "
},
{
  "id": "exam_limitdoesnotexist",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#exam_limitdoesnotexist",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": "  The limit of as does not exist.  To see this, we try to compute this limit as on the real and on the imaginary axis. In the first case, we can write , and hence .  In the second case, we write where , and then .  So we get a different limit depending on the direction from which we approach 0. Proposition then implies that the limit of as does not exist.   "
},
{
  "id": "limits",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#limits",
  "type": "Proposition",
  "number": "2.1.6",
  "title": "",
  "body": "  Let and be complex functions with domain , let be an accumulation point of , and let . If and exist, then    .     .     .     where in the last identity we also require that .    We will prove of the proposition. Assume that (otherwise there is nothing to prove), and let and . Then we know that, given , we can find such that and .  Thus, choosing , we infer that implies .  Here we used the triangle inequality ( Proposition ). This proves that , which was our claim.   "
},
{
  "id": "sec_limitsandcontinuity-15",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-15",
  "type": "Definition",
  "number": "2.1.7",
  "title": "",
  "body": "  Suppose . If and either is an isolated point of or then is continuous at . continuous More generally, is continuous on if is continuous at every .   "
},
{
  "id": "sec_limitsandcontinuity-17",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-17",
  "type": "Definition",
  "number": "2.1.8",
  "title": "",
  "body": "  Suppose and . Then is continuous at if, for every positive real number , there is a positive real number so that . continuous    "
},
{
  "id": "sec_limitsandcontinuity-19",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-19",
  "type": "Example",
  "number": "2.1.9",
  "title": "",
  "body": "  We already proved (in ) that the function given by is continuous at . You're invited (see ) to extend our proof to show that, in fact, this function is continuous on .  On the other hand, let be given by   In we proved that is not continuous at . However, this is its only point of discontinuity (see ).   "
},
{
  "id": "sec_limitsandcontinuity-21",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#sec_limitsandcontinuity-21",
  "type": "Definition",
  "number": "2.1.10",
  "title": "",
  "body": "  The image of the function is the set . image of a function If the image of is contained in the domain of another function , we define the composition  through . composition    "
},
{
  "id": "funoflimit",
  "level": "2",
  "url": "sec_limitsandcontinuity.html#funoflimit",
  "type": "Proposition",
  "number": "2.1.11",
  "title": "",
  "body": "  Let with image contained in , and let . Suppose is an accumulation point of , , and is continuous at . Then ; in short, .    Given , we know there is an such that .  For this , we also know there is a such that .  Stringing these two implications together gives that .  We have thus proved that .   "
},
{
  "id": "sec_diffholom",
  "level": "1",
  "url": "sec_diffholom.html",
  "type": "Section",
  "number": "2.2",
  "title": "Differentiability and Holomorphicity",
  "body": " Differentiability and Holomorphicity  The fact that simple functions such as do not have limits at certain points illustrates something special about complex numbers that has no parallel in the reals we can express a function in a very compact way in one variable, yet it shows some peculiar behavior in the limit. We will repeatedly notice this kind of behavior; one reason is that when trying to compute a limit of a function as, say, , we have to allow to approach the point in any way. On the real line there are only two directions to approach from the left or from the right (or some combination of those two). In the complex plane, we have an additional dimension to play with. This means that the statement A complex function has a limit is in many senses stronger than the statement A real function has a limit . This difference becomes apparent most baldly when studying derivatives.    Suppose is a complex function and is an interior point of . The derivative of at is defined as , provided this limit exists. derivative In this case, is called differentiable at . differentiable   If is differentiable for all points in an open disk centered at then is called holomorphic  Some sources use the term analytic instead of holomorphic . As we will see in Chapter 8, in our context, these two terms are synonymous. Technically, though, these two terms have different definitions. Since we will be using the above definition, we will stick with using the term holomorphic instead of the term analytic . at . holomorphic The function is holomorphic on the open set if it is differentiable (and hence holomorphic) at every point in . Functions that are differentiable (and hence holomorphic) in the whole complex plane are called entire . entire       The function given by is entire, that is, holomorphic in : For any , .    The difference quotient limit can be rewritten as . difference quotient   This equivalent definition is sometimes easier to handle. Note that need not be a real number but can rather approach zero from anywhere in the complex plane.  The notions of differentiability and holomorphicity are not interchangeable:    The function given by is differentiable at and nowhere else; in particular, is not holomorphic at . To see why, let's write . Then .  If then taking the limit of as thus means taking the limit of as , which gives , a number that depends on , i.e., on the direction that approaches . Hence this limit does not exist.  On the other hand, if then the right-hand side above equals . Hence , which implies, by , that .      The function given by is nowhere differentiable: , which does not exist, as discussed in .    The basic properties for derivatives are similar to those we know from real calculus. In fact, the following rules follow mostly from properties of the limit.    Suppose and are differentiable at and is differentiable at . Then    for any           provided that      for any nonzero integer      is continuous at      .       . Note that we have used the definition of the derivative and Proposition  & (the addition and multiplication rules for limits).    A prominent application of the differentiation rules is the composition of a complex function with a path . The proof of the following result gives a preview.    Suppose is holomorphic at with and suppose and are two smooth paths that pass through , making an angle of with each other. Then transforms and into smooth paths which meet at , and the transformed paths make an angle of with each other.    In words, a holomorphic function with nonzero derivative preserves angles. Functions that preserve angles in this way are called conformal . conformal  function conformal    Let and be parametrizations of the two paths such that . Then (considered as a vector) is the tangent vector of at the point , and is the tangent vector of at . Moving to the image of and under , the tangent vector of at the point is , and similarly, the tangent vector of at the point is . This means that the action of multiplies the two tangent vectors and by the same nonzero complex number , and so the two tangent vectors got dilated by (which does not affect their direction) and rotated by the same angle (an argument of ).   We end this section with yet another differentiation rule, that for inverse functions. As in the real case, this rule is only defined for functions that are bijections. bijection     A function is one-to-one if, for every image , there is a unique such that . one-to-one The function is onto  onto if every has a preimage (that is, there exists such that ). A bijection is a function that is both one-to-one and onto. If is a bijection, then is the inverse of if for all and for all ; in other words, the composition is the identity function on , and is the identity function on .      Suppose are open sets, is a bijection, is the inverse function inverse function of , and . If is differentiable at with and is continuous at , then is differentiable at with .    Since for all , .  Now define and set   This is continuous at and by continuity of , so we can apply Proposition :     "
},
{
  "id": "sec_diffholom-3",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-3",
  "type": "Definition",
  "number": "2.2.1",
  "title": "",
  "body": "  Suppose is a complex function and is an interior point of . The derivative of at is defined as , provided this limit exists. derivative In this case, is called differentiable at . differentiable   If is differentiable for all points in an open disk centered at then is called holomorphic  Some sources use the term analytic instead of holomorphic . As we will see in Chapter 8, in our context, these two terms are synonymous. Technically, though, these two terms have different definitions. Since we will be using the above definition, we will stick with using the term holomorphic instead of the term analytic . at . holomorphic The function is holomorphic on the open set if it is differentiable (and hence holomorphic) at every point in . Functions that are differentiable (and hence holomorphic) in the whole complex plane are called entire . entire    "
},
{
  "id": "exam_zcubedentire",
  "level": "2",
  "url": "sec_diffholom.html#exam_zcubedentire",
  "type": "Example",
  "number": "2.2.2",
  "title": "",
  "body": "  The function given by is entire, that is, holomorphic in : For any , .   "
},
{
  "id": "exam_zbarsquareddiff",
  "level": "2",
  "url": "sec_diffholom.html#exam_zbarsquareddiff",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": "  The function given by is differentiable at and nowhere else; in particular, is not holomorphic at . To see why, let's write . Then .  If then taking the limit of as thus means taking the limit of as , which gives , a number that depends on , i.e., on the direction that approaches . Hence this limit does not exist.  On the other hand, if then the right-hand side above equals . Hence , which implies, by , that .   "
},
{
  "id": "sec_diffholom-9",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-9",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": "  The function given by is nowhere differentiable: , which does not exist, as discussed in .   "
},
{
  "id": "derivativerules",
  "level": "2",
  "url": "sec_diffholom.html#derivativerules",
  "type": "Proposition",
  "number": "2.2.5",
  "title": "",
  "body": "  Suppose and are differentiable at and is differentiable at . Then    for any           provided that      for any nonzero integer      is continuous at      .       . Note that we have used the definition of the derivative and Proposition  & (the addition and multiplication rules for limits).   "
},
{
  "id": "dernonzeroconformal",
  "level": "2",
  "url": "sec_diffholom.html#dernonzeroconformal",
  "type": "Proposition",
  "number": "2.2.6",
  "title": "",
  "body": "  Suppose is holomorphic at with and suppose and are two smooth paths that pass through , making an angle of with each other. Then transforms and into smooth paths which meet at , and the transformed paths make an angle of with each other.   "
},
{
  "id": "sec_diffholom-15",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-15",
  "type": "Proof",
  "number": "2.2.1",
  "title": "",
  "body": " Let and be parametrizations of the two paths such that . Then (considered as a vector) is the tangent vector of at the point , and is the tangent vector of at . Moving to the image of and under , the tangent vector of at the point is , and similarly, the tangent vector of at the point is . This means that the action of multiplies the two tangent vectors and by the same nonzero complex number , and so the two tangent vectors got dilated by (which does not affect their direction) and rotated by the same angle (an argument of ).  "
},
{
  "id": "sec_diffholom-17",
  "level": "2",
  "url": "sec_diffholom.html#sec_diffholom-17",
  "type": "Definition",
  "number": "2.2.7",
  "title": "",
  "body": "  A function is one-to-one if, for every image , there is a unique such that . one-to-one The function is onto  onto if every has a preimage (that is, there exists such that ). A bijection is a function that is both one-to-one and onto. If is a bijection, then is the inverse of if for all and for all ; in other words, the composition is the identity function on , and is the identity function on .   "
},
{
  "id": "inversederivative",
  "level": "2",
  "url": "sec_diffholom.html#inversederivative",
  "type": "Proposition",
  "number": "2.2.8",
  "title": "",
  "body": "  Suppose are open sets, is a bijection, is the inverse function inverse function of , and . If is differentiable at with and is continuous at , then is differentiable at with .    Since for all , .  Now define and set   This is continuous at and by continuity of , so we can apply Proposition :    "
},
{
  "id": "sec_Cauchy-Riemann",
  "level": "1",
  "url": "sec_Cauchy-Riemann.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Cauchy–Riemann Equations",
  "body": " The Cauchy Riemann Equations  When considering a real-valued function of two variables, there is no notion of the derivative of a function. For such a function, we instead only have partial derivatives and (and also directional derivatives) which depend on the way in which we approach a point .  For a complex-valued function , we now have a new concept of the derivative , which by definition cannot depend on the way in which we approach a point . It is logical, then, that there should be a relationship between the complex derivative and the partial derivatives  . partial derivative  derivative partial (so this definition is exactly as in the real-valued case).  This relationship between the complex derivative and partial derivatives is very strong, and it is a powerful computational tool. It is described by the Cauchy-Riemann equations , named after Augustin Louis Cauchy (1789 1857) and Georg Friedrich Bernhard Riemann (1826 1866), even though the equations appeared already in the works of Jean le Rond d'Alembert (1717 1783) and Leonhard Euler (1707 1783). Cauchy Riemann equations        Suppose is differentiable at . Then the partial derivatives of exist and satisfy and the derivative is given by .    Suppose is a complex function such that the partial derivatives and exist in an open disk centered at and are continuous at . If these partial derivatives satisfy { } then is differentiable at .       Before proving , we note several comments and give two applications. It is traditional, and often convenient, to write the function in terms of its real and imaginary parts. That is, we write where is the real part of and is the imaginary part. Then, using the usual shorthand and , we have both .  With this terminology we can rewrite as the pair of equations   As stated, parts (a) and (b) in are not quite converse statements. However, we will show in that if is holomorphic at then and have continuous partials (of any order) at . That is, in we will see that is holomorphic in an open set if and only if and have continuous partials that satisfy in .  If and satisfy and their second partials are also continuous, then , that is,   (and an analogous identity for ). Functions with continuous second partials satisfying this partial differential equation on a region (though not necessarily ) are called harmonic on ; we will study such functions in . harmonic Again, as we will see later, if is holomorphic in an open set then the partials of any order of and exist; hence we will show that the real and imaginary parts of a function that is holomorphic in an open set are harmonic on that set.    We revisit Example and again consider given by .  Thus are continuous on and satisfy . Thus by Theorem (b), is entire.      Revisiting Example (you saw that coming, didn't you?), we consider given by .  Now , which satisfy only when . (The contrapositive of) (a) thus implies that is not differentiable on .     (a) If is differentiable at then .  As we know by now, we must get the same result if we restrict to be on the real axis and if we restrict it to be on the imaginary axis. In the first case, and .  In the second case, and .  Thus we have shown that .  (b) Suppose the Cauchy-Riemann equation holds and the partial derivatives and are continuous in an open disk centered at . Our goal is to prove that . By , .  On the other hand, we can rewrite the difference quotient for as .  Thus .  We claim that both limits on the right-hand side are , so we have achieved our set goal. The fractions and are bounded in absolute value by , so we just need to see that the limits of the expressions in parentheses are . The second term on the right-hand side of has a limit of since, by definition, and taking the limit here as is the same as taking the limit as .  We cannot do something equivalent for the first term in , since now both and are involved, and both change as . Instead we apply the Mean-Value for real functions, We collect several theorems from calculus, such as the Mean-Value Theorem for real-valued functions, in the Appendix. to the real and imaginary parts and of . gives real numbers such that .  Thus .  Because and are continuous at , , and so goes to 0 as , which we set out to prove.   "
},
{
  "id": "cre",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#cre",
  "type": "Theorem",
  "number": "2.3.1",
  "title": "",
  "body": "     Suppose is differentiable at . Then the partial derivatives of exist and satisfy and the derivative is given by .    Suppose is a complex function such that the partial derivatives and exist in an open disk centered at and are continuous at . If these partial derivatives satisfy { } then is differentiable at .      "
},
{
  "id": "sec_Cauchy-Riemann-11",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#sec_Cauchy-Riemann-11",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  We revisit Example and again consider given by .  Thus are continuous on and satisfy . Thus by Theorem (b), is entire.   "
},
{
  "id": "sec_Cauchy-Riemann-12",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#sec_Cauchy-Riemann-12",
  "type": "Example",
  "number": "2.3.3",
  "title": "",
  "body": "  Revisiting Example (you saw that coming, didn't you?), we consider given by .  Now , which satisfy only when . (The contrapositive of) (a) thus implies that is not differentiable on .   "
},
{
  "id": "sec_Cauchy-Riemann-13",
  "level": "2",
  "url": "sec_Cauchy-Riemann.html#sec_Cauchy-Riemann-13",
  "type": "Proof",
  "number": "2.3.1",
  "title": "",
  "body": " (a) If is differentiable at then .  As we know by now, we must get the same result if we restrict to be on the real axis and if we restrict it to be on the imaginary axis. In the first case, and .  In the second case, and .  Thus we have shown that .  (b) Suppose the Cauchy-Riemann equation holds and the partial derivatives and are continuous in an open disk centered at . Our goal is to prove that . By , .  On the other hand, we can rewrite the difference quotient for as .  Thus .  We claim that both limits on the right-hand side are , so we have achieved our set goal. The fractions and are bounded in absolute value by , so we just need to see that the limits of the expressions in parentheses are . The second term on the right-hand side of has a limit of since, by definition, and taking the limit here as is the same as taking the limit as .  We cannot do something equivalent for the first term in , since now both and are involved, and both change as . Instead we apply the Mean-Value for real functions, We collect several theorems from calculus, such as the Mean-Value Theorem for real-valued functions, in the Appendix. to the real and imaginary parts and of . gives real numbers such that .  Thus .  Because and are continuous at , , and so goes to 0 as , which we set out to prove.  "
},
{
  "id": "sec_constantfcts",
  "level": "1",
  "url": "sec_constantfcts.html",
  "type": "Section",
  "number": "2.4",
  "title": "Constant Functions",
  "body": " Constant Functions  As a sample application of the definition of the derivative of a complex function, we consider functions that have a derivative of . In a typical calculus course, one of the first applications of the Mean-Value Theorem for real-valued functions ( ) is to show that if a function has zero derivative everywhere on an interval then it must be constant.    If is an interval and is a real-valued function with defined and equal to for all , then there is a constant such that for all .     The Mean-Value says that for any , for some . Now , so the above equation yields . Since this is true for any , the function must be constant on .   We do not (yet) have a complex version of the Mean-Value Theorem, and so we will use a different argument to prove that a complex function whose derivative is always must be constant.  Our proof of required two key features of the function , both of which are somewhat obviously necessary. The first is that be differentiable everywhere in its domain. In fact, if is not differentiable everywhere, we can construct functions that have zero derivative almost everywhere but that have infinitely many values in their image.  The second key feature is that the interval is connected. It is certainly important for the domain to be connected in both the real and complex cases. For instance, if we define the function through then for all in the domain of , but is not constant. This may seem like a silly example, but it illustrates a pitfall to proving a function is constant that we must be careful of. Recall that a region of is an open connected subset.    If is a region and is a complex-valued function with defined and equal to for all , then is constant.     We will first show that is constant along horizontal segments and along vertical segments in .  Suppose that is a horizontal line segment in . Thus there is some number such that the imaginary part of any is . Now consider the real part of the function , for . Since is constant on , we can consider to be just a function of , the real part of . By assumption, , so for we have . Thus, by Proposition , is constant on .  We can argue the same way to see that the imaginary part of is constant on , since on . Since both the real and imaginary parts of are constant on , the function itself is constant on .  This same argument works for vertical segments, interchanging the roles of the real and imaginary parts. We have thus proved that is constant along horizontal segments and along vertical segments in . Now if and are two points in that can be connected by a path composed of horizontal and vertical segments, we conclude that . But any two points of a region may be connected by finitely many such segments by Theorem , so has the same value at any two points of , thus proving the theorem.   There are a number of surprising applications of ; see, e.g., and   "
},
{
  "id": "lem_constant",
  "level": "2",
  "url": "sec_constantfcts.html#lem_constant",
  "type": "Proposition",
  "number": "2.4.1",
  "title": "",
  "body": "  If is an interval and is a real-valued function with defined and equal to for all , then there is a constant such that for all .   "
},
{
  "id": "sec_constantfcts-4",
  "level": "2",
  "url": "sec_constantfcts.html#sec_constantfcts-4",
  "type": "Proof",
  "number": "2.4.1",
  "title": "",
  "body": " The Mean-Value says that for any , for some . Now , so the above equation yields . Since this is true for any , the function must be constant on .  "
},
{
  "id": "derivative0",
  "level": "2",
  "url": "sec_constantfcts.html#derivative0",
  "type": "Theorem",
  "number": "2.4.2",
  "title": "",
  "body": "  If is a region and is a complex-valued function with defined and equal to for all , then is constant.   "
},
{
  "id": "sec_constantfcts-9",
  "level": "2",
  "url": "sec_constantfcts.html#sec_constantfcts-9",
  "type": "Proof",
  "number": "2.4.2",
  "title": "",
  "body": " We will first show that is constant along horizontal segments and along vertical segments in .  Suppose that is a horizontal line segment in . Thus there is some number such that the imaginary part of any is . Now consider the real part of the function , for . Since is constant on , we can consider to be just a function of , the real part of . By assumption, , so for we have . Thus, by Proposition , is constant on .  We can argue the same way to see that the imaginary part of is constant on , since on . Since both the real and imaginary parts of are constant on , the function itself is constant on .  This same argument works for vertical segments, interchanging the roles of the real and imaginary parts. We have thus proved that is constant along horizontal segments and along vertical segments in . Now if and are two points in that can be connected by a path composed of horizontal and vertical segments, we conclude that . But any two points of a region may be connected by finitely many such segments by Theorem , so has the same value at any two points of , thus proving the theorem.  "
},
{
  "id": "chapter2-exercises",
  "level": "1",
  "url": "chapter2-exercises.html",
  "type": "Exercises",
  "number": "2.5",
  "title": "Exercises",
  "body": "   Use the definition of limit to show for any that .      Evaluate the following limits or explain why they don't exist.                  Prove that, if a limit exists, then it is unique.      Prove .      Let and suppose is an accumulation point of . Show that if and only if .       is useful for showing that limits do not exist, but it is not at all useful for showing that a limit does exist. For example, define .  Show that the limits of at along all straight lines through the origin exist and are equal, but does not exist. ( Hint : Consider the limit along the parabola .)      Suppose that and . Prove that if and only if .      Show that the function given by is continuous on .      Show that the function given by is continuous on .      Determine where each of the following functions is continuous:                  Show that the two definitions of continuity in are equivalent. Consider separately the cases where is an accumulation point of and where is an isolated point of .      Consider the function given by . Apply the definition of the derivative to give a direct proof that .      Prove .      Prove .      Find the derivative of the function , where with . When is ?      Prove that if is given by a polynomial in then is entire. What can you say if is given by a polynomial polynomial in and ?      Prove or find a counterexample: If and are real valued and continuous, then is continuous; if and are (real) differentiable then is (complex) differentiable.      Where are the following functions differentiable? Where are they holomorphic? Determine their derivatives at points where they are differentiable.                                                                    Define if , and if . Show that satisfies the Cauchy-Riemann equation at , yet is not differentiable at . Why doesn't this contradict (b)?      Prove: If is holomorphic in the region and always real valued, then is constant in . ( Hint : Use the Cauchy-Riemann equations to show that .)      Prove: If and are both holomorphic in the region then is constant in .      Suppose is entire and can be written as , that is, the real part of depends only on and the imaginary part of depends only on . Prove that for some and .      Suppose is entire, with real and imaginary parts and satisfying for all . Show that is constant.      Prove that the Cauchy-Riemann equations take on the following form in polar coordinates: .      For each of the following functions , find a function such that is holomorphic in some region. Maximize that region.                            Is harmonic on ? What about ?      Consider the general real homogeneous quadratic function , where , and are real constants.   Show that is harmonic if and only if .    If is harmonic then show that it is the real part of a function of the form for some . Give a formula for in terms of , and .         Re-prove by using the formula for given in .      Prove that, If is a region and is a complex-valued function with defined and equal to for all , then for some . ( Hint : Use to show that , and then use again for the function .)    "
},
{
  "id": "chapter2-exercises-1",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-1",
  "type": "Exercise",
  "number": "2.5.1",
  "title": "",
  "body": "  Use the definition of limit to show for any that .   "
},
{
  "id": "ex_2_1",
  "level": "2",
  "url": "chapter2-exercises.html#ex_2_1",
  "type": "Exercise",
  "number": "2.5.2",
  "title": "",
  "body": "  Evaluate the following limits or explain why they don't exist.               "
},
{
  "id": "ex_limitunique",
  "level": "2",
  "url": "chapter2-exercises.html#ex_limitunique",
  "type": "Exercise",
  "number": "2.5.3",
  "title": "",
  "body": "  Prove that, if a limit exists, then it is unique.   "
},
{
  "id": "ex_limits",
  "level": "2",
  "url": "chapter2-exercises.html#ex_limits",
  "type": "Exercise",
  "number": "2.5.4",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ex_limiteq0",
  "level": "2",
  "url": "chapter2-exercises.html#ex_limiteq0",
  "type": "Exercise",
  "number": "2.5.5",
  "title": "",
  "body": "  Let and suppose is an accumulation point of . Show that if and only if .   "
},
{
  "id": "chapter2-exercises-6",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-6",
  "type": "Exercise",
  "number": "2.5.6",
  "title": "",
  "body": "   is useful for showing that limits do not exist, but it is not at all useful for showing that a limit does exist. For example, define .  Show that the limits of at along all straight lines through the origin exist and are equal, but does not exist. ( Hint : Consider the limit along the parabola .)   "
},
{
  "id": "chapter2-exercises-7",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-7",
  "type": "Exercise",
  "number": "2.5.7",
  "title": "",
  "body": "  Suppose that and . Prove that if and only if .   "
},
{
  "id": "ex_zsquaredcontinuous",
  "level": "2",
  "url": "chapter2-exercises.html#ex_zsquaredcontinuous",
  "type": "Exercise",
  "number": "2.5.8",
  "title": "",
  "body": "  Show that the function given by is continuous on .   "
},
{
  "id": "ex_zbaroverzcont",
  "level": "2",
  "url": "chapter2-exercises.html#ex_zbaroverzcont",
  "type": "Exercise",
  "number": "2.5.9",
  "title": "",
  "body": "  Show that the function given by is continuous on .   "
},
{
  "id": "chapter2-exercises-10",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-10",
  "type": "Exercise",
  "number": "2.5.10",
  "title": "",
  "body": "  Determine where each of the following functions is continuous:               "
},
{
  "id": "ex_continuitydefs",
  "level": "2",
  "url": "chapter2-exercises.html#ex_continuitydefs",
  "type": "Exercise",
  "number": "2.5.11",
  "title": "",
  "body": "  Show that the two definitions of continuity in are equivalent. Consider separately the cases where is an accumulation point of and where is an isolated point of .   "
},
{
  "id": "chapter2-exercises-12",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-12",
  "type": "Exercise",
  "number": "2.5.12",
  "title": "",
  "body": "  Consider the function given by . Apply the definition of the derivative to give a direct proof that .   "
},
{
  "id": "chapter2-exercises-13",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-13",
  "type": "Exercise",
  "number": "2.5.13",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "ex_diffrules",
  "level": "2",
  "url": "chapter2-exercises.html#ex_diffrules",
  "type": "Exercise",
  "number": "2.5.14",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "chapter2-exercises-15",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-15",
  "type": "Exercise",
  "number": "2.5.15",
  "title": "",
  "body": "  Find the derivative of the function , where with . When is ?   "
},
{
  "id": "polynomialsholomorphic",
  "level": "2",
  "url": "chapter2-exercises.html#polynomialsholomorphic",
  "type": "Exercise",
  "number": "2.5.16",
  "title": "",
  "body": "  Prove that if is given by a polynomial in then is entire. What can you say if is given by a polynomial polynomial in and ?   "
},
{
  "id": "chapter2-exercises-17",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-17",
  "type": "Exercise",
  "number": "2.5.17",
  "title": "",
  "body": "  Prove or find a counterexample: If and are real valued and continuous, then is continuous; if and are (real) differentiable then is (complex) differentiable.   "
},
{
  "id": "ex_2_2",
  "level": "2",
  "url": "chapter2-exercises.html#ex_2_2",
  "type": "Exercise",
  "number": "2.5.18",
  "title": "",
  "body": "  Where are the following functions differentiable? Where are they holomorphic? Determine their derivatives at points where they are differentiable.                                                                 "
},
{
  "id": "chapter2-exercises-19",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-19",
  "type": "Exercise",
  "number": "2.5.19",
  "title": "",
  "body": "  Define if , and if . Show that satisfies the Cauchy-Riemann equation at , yet is not differentiable at . Why doesn't this contradict (b)?   "
},
{
  "id": "ex_realimpliesconst",
  "level": "2",
  "url": "chapter2-exercises.html#ex_realimpliesconst",
  "type": "Exercise",
  "number": "2.5.20",
  "title": "",
  "body": "  Prove: If is holomorphic in the region and always real valued, then is constant in . ( Hint : Use the Cauchy-Riemann equations to show that .)   "
},
{
  "id": "ex_fandconjfimpliesconst",
  "level": "2",
  "url": "chapter2-exercises.html#ex_fandconjfimpliesconst",
  "type": "Exercise",
  "number": "2.5.21",
  "title": "",
  "body": "  Prove: If and are both holomorphic in the region then is constant in .   "
},
{
  "id": "chapter2-exercises-22",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-22",
  "type": "Exercise",
  "number": "2.5.22",
  "title": "",
  "body": "  Suppose is entire and can be written as , that is, the real part of depends only on and the imaginary part of depends only on . Prove that for some and .   "
},
{
  "id": "chapter2-exercises-23",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-23",
  "type": "Exercise",
  "number": "2.5.23",
  "title": "",
  "body": "  Suppose is entire, with real and imaginary parts and satisfying for all . Show that is constant.   "
},
{
  "id": "ex_crepolar",
  "level": "2",
  "url": "chapter2-exercises.html#ex_crepolar",
  "type": "Exercise",
  "number": "2.5.24",
  "title": "",
  "body": "  Prove that the Cauchy-Riemann equations take on the following form in polar coordinates: .   "
},
{
  "id": "ex_harmconj",
  "level": "2",
  "url": "chapter2-exercises.html#ex_harmconj",
  "type": "Exercise",
  "number": "2.5.25",
  "title": "",
  "body": "  For each of the following functions , find a function such that is holomorphic in some region. Maximize that region.                         "
},
{
  "id": "ex_225",
  "level": "2",
  "url": "chapter2-exercises.html#ex_225",
  "type": "Exercise",
  "number": "2.5.26",
  "title": "",
  "body": "  Is harmonic on ? What about ?   "
},
{
  "id": "chapter2-exercises-27",
  "level": "2",
  "url": "chapter2-exercises.html#chapter2-exercises-27",
  "type": "Exercise",
  "number": "2.5.27",
  "title": "",
  "body": "  Consider the general real homogeneous quadratic function , where , and are real constants.   Show that is harmonic if and only if .    If is harmonic then show that it is the real part of a function of the form for some . Give a formula for in terms of , and .      "
},
{
  "id": "ex_diffrulesViaCR",
  "level": "2",
  "url": "chapter2-exercises.html#ex_diffrulesViaCR",
  "type": "Exercise",
  "number": "2.5.28",
  "title": "",
  "body": "  Re-prove by using the formula for given in .   "
},
{
  "id": "ex_2ndderivative0",
  "level": "2",
  "url": "chapter2-exercises.html#ex_2ndderivative0",
  "type": "Exercise",
  "number": "2.5.29",
  "title": "",
  "body": "  Prove that, If is a region and is a complex-valued function with defined and equal to for all , then for some . ( Hint : Use to show that , and then use again for the function .)   "
},
{
  "id": "sec_mobius",
  "level": "1",
  "url": "sec_mobius.html",
  "type": "Section",
  "number": "3.1",
  "title": "Möbius Transformations",
  "body": " Möbius Transformations   Mobius transformation@Möbius transformation   The first class of functions that we will discuss in some detail are built from linear polynomials.    A linear fractional transformation is a function of the form where . linear fractional transformation If then is called a Möbius Named after August Ferdinand Möbius (1790 1868). transformation .     said that any polynomial in is an entire function, and so the linear fractional transformation is holomorphic in , unless (in which case is entire). If then implies , which means that a Möbius transformation will never take on the value . Our first proposition in this chapter says that with these small observations about the domain and image of a Möbius transformation, we obtain a class of bijections, which are quite special among complex functions. bijection    inverse function of a Möbius transformation     Let with . Then given by has the inverse function given by .    We remark that the same formula for works when , except that in this case both domain and image of are ; see . In either case, we note that the inverse of a Möbius transformation is another Möbius transformation.    Consider the linear fractional transformation . This is a Möbius transformation (check the condition!) with domain whose inverse can be computed via , so that , with domain .     We first prove that is one-to-one. If , that is, , then , which can be rearranged to .  Since this implies that . This shows that is one-to-one.   verifies that the Möbius transformation is the inverse of , and by what we have just proved, is also one-to-one. But this implies that is onto.   We remark that Möbius transformations provide an immediate application of Proposition , as the derivative of is and thus never zero. Proposition implies that Möbius transformations are conformal, conformal that is, they preserve angles. function conformal   Möbius transformations have even more fascinating geometric properties. En route to an example of such, we introduce some terminology. Special cases of Möbius transformations are translations  , dilations  , and inversion  . translation  dilation  inversion The next result says that if we understand those three special Möbius transformations, we understand them all.    Suppose is a linear fractional transformation. If then , and if then .  In particular, every linear fractional transformation is a composition of translations, dilations, and inversions.     Simplify.     Möbius transformations map circles and lines into circles and lines.      Continuing Example , consider again . For , , which is a real number. Thus Theorem implies that maps the unit circle to the real line.     Translations and dilations certainly map circles and lines into circles and lines, so by Proposition , we only have to prove the statement of the theorem for the inversion .  The equation for a circle centered at with radius is , which we can transform to for some real numbers , , , and that satisfy (see ). The form is more convenient for us, because it includes the possibility that the equation describes a line (precisely when ).  Suppose satisfies ; we need to prove that satisfies a similar equation. Since , we can rewrite as .  But this equation, in conjunction with , says that lies on a circle or line.    demonstrates the effect that the inversion has on horizontal and vertical lines. In particular, the vertical line defined by is mapped into the circle of radius centered at .   Inversion maps vertical lines, shown on the left, into the circles centered on the real axis. Horizontal lines are mapped into circles centered on the imaginary axis.      b=4                   b=4     x0=k\/4      y0=k\/4           "
},
{
  "id": "sec_mobius-4",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-4",
  "type": "Definition",
  "number": "3.1.1",
  "title": "",
  "body": "  A linear fractional transformation is a function of the form where . linear fractional transformation If then is called a Möbius Named after August Ferdinand Möbius (1790 1868). transformation .   "
},
{
  "id": "inversemobius",
  "level": "2",
  "url": "sec_mobius.html#inversemobius",
  "type": "Proposition",
  "number": "3.1.2",
  "title": "",
  "body": "  Let with . Then given by has the inverse function given by .   "
},
{
  "id": "ex_mobiusinverse",
  "level": "2",
  "url": "sec_mobius.html#ex_mobiusinverse",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": "  Consider the linear fractional transformation . This is a Möbius transformation (check the condition!) with domain whose inverse can be computed via , so that , with domain .   "
},
{
  "id": "sec_mobius-10",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-10",
  "type": "Proof",
  "number": "3.1.1",
  "title": "",
  "body": " We first prove that is one-to-one. If , that is, , then , which can be rearranged to .  Since this implies that . This shows that is one-to-one.   verifies that the Möbius transformation is the inverse of , and by what we have just proved, is also one-to-one. But this implies that is onto.  "
},
{
  "id": "transdilinv",
  "level": "2",
  "url": "sec_mobius.html#transdilinv",
  "type": "Proposition",
  "number": "3.1.4",
  "title": "",
  "body": "  Suppose is a linear fractional transformation. If then , and if then .  In particular, every linear fractional transformation is a composition of translations, dilations, and inversions.   "
},
{
  "id": "sec_mobius-14",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-14",
  "type": "Proof",
  "number": "3.1.2",
  "title": "",
  "body": " Simplify.  "
},
{
  "id": "circlestocircles",
  "level": "2",
  "url": "sec_mobius.html#circlestocircles",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "",
  "body": "  Möbius transformations map circles and lines into circles and lines.   "
},
{
  "id": "ex_mobiusinverse2",
  "level": "2",
  "url": "sec_mobius.html#ex_mobiusinverse2",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  Continuing Example , consider again . For , , which is a real number. Thus Theorem implies that maps the unit circle to the real line.   "
},
{
  "id": "sec_mobius-17",
  "level": "2",
  "url": "sec_mobius.html#sec_mobius-17",
  "type": "Proof",
  "number": "3.1.3",
  "title": "",
  "body": " Translations and dilations certainly map circles and lines into circles and lines, so by Proposition , we only have to prove the statement of the theorem for the inversion .  The equation for a circle centered at with radius is , which we can transform to for some real numbers , , , and that satisfy (see ). The form is more convenient for us, because it includes the possibility that the equation describes a line (precisely when ).  Suppose satisfies ; we need to prove that satisfies a similar equation. Since , we can rewrite as .  But this equation, in conjunction with , says that lies on a circle or line.  "
},
{
  "id": "fig-inversion",
  "level": "2",
  "url": "sec_mobius.html#fig-inversion",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": " Inversion maps vertical lines, shown on the left, into the circles centered on the real axis. Horizontal lines are mapped into circles centered on the imaginary axis.      b=4                   b=4     x0=k\/4      y0=k\/4          "
},
{
  "id": "sec_riemannspere",
  "level": "1",
  "url": "sec_riemannspere.html",
  "type": "Section",
  "number": "3.2",
  "title": "Infinity and the Cross Ratio",
  "body": " Infinity and the Cross Ratio  In the context of Möbius transformations, it is useful to introduce a formal way of saying that a function  blows up in absolute value, and this gives rise to a notion of infinity. infinity  limit infinity     Suppose .    means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     In the first definition we require that be an accumulation point of while in the second and third we require that be an extended accumulation point of , in the sense that for every there is some with .    As in , the limit, in any of these senses, is unique if it exists.    We claim that : Given , let . Then implies .      Let be a Möbius transformation with . Then .  To simplify the notation, introduce the constant . Given , let . Then implies, with the reverse triangle inequality ( ), that and so .    We stress that is not a number in , just as are not numbers in . However, we can extend  by adding on , if we are careful. We do so by realizing that we are always talking about a limit when handling . It turns out (see ) that the usual limit rules behave well when we mix complex numbers and . For example, if and is finite then the usual limit of sum = sum of limits rule still holds and gives . The following definition captures the philosophy of this paragraph.    The extended complex plane is the set , together with the following algebraic properties: For any ,        if then               if then .    complex plane extended  extended complex plane   The extended complex plane is also called the Riemann sphere or the complex projective line , denoted . complex projective line  Riemann sphere     If a calculation involving is not covered by the rules above then we must investigate the limit more carefully. For example, it may seem strange that is not defined, but if we take the limit of as we will get , even though the individual limits of and are both .  Now we reconsider Möbius transformations with in mind. For example, is now defined for and , with and , and so we might argue the proper domain for is actually . Let's consider the other basic types of Möbius transformations. A translation is now defined for , with , and a dilation (with ) is also defined for , with . Since every Möbius transformation can be expressed as a composition of translations, dilations and inversions ( ), we see that every Möbius transformation may be interpreted as a transformation of onto . This general case is summarized in the following extension of .    Suppose and , and consider defined through   Then is a bijection.    This corollary also holds for if we then define .    Continuing Examples and , consider once more the Möbius transformation . With the definitions and , we can extend to a function .    With on our mind we can also add some insight to . We recall that in , we proved that maps the unit circle to the real line. Essentially the same proof shows that, more generally, any circle passing through gets mapped to a line (see ). The original domain of was , so the point must be excluded from these circles. However, by thinking of as function from to , we can put back into the picture, and so transforms circles that pass through to straight lines plus  . If we remember that corresponds to being arbitrarily far away from any point in , we can visualize a line plus as a circle passing through . If we make this a definition, then can be expressed as: any Möbius transformation of transforms circles to circles .  We can take this remark a step further, based on the idea that three distinct points in determine a unique circle passing through them: If the three points are in and nonlinear, this fact comes straight from Euclidean geometry; if the three points are on a straight line or if one of the points is , then the circle is a straight line plus .    The Möbius transformation given by maps .  The points , , and uniquely determine the unit circle and the points 0, 1, and uniquely determine the real line, viewed as a circle in . Thus implies that maps the unit circle to , which we already concluded in .    Conversely, if we know where three distinct points in are transformed by a Möbius transformation then we should be able to figure out everything about the transformation. There is a computational device that makes this easier to see.    If , , , and are any four points in with , , and distinct, then their cross ratio is defined as . cross ratio   This includes the implicit definitions and, if one of , , , or is , then the two terms containing are canceled; e.g., .      Our running example can be written as .      The function defined by is a Möbius transformation that satisfies .  Moreover, if is any Möbius transformation with , , and , then and are identical.    Most of this follows from our definition of , but we need to prove the uniqueness statement. By Proposition , the inverse is a Möbius transformation and, by Exercise , the composition is again a Möbius transformation. Note that and, similarly, and . If we write then and so , the identity function. But since , this means that and are identical.    So if we want to map three given points of to , and by a Möbius transformation, then the cross ratio gives us the only way to do it. What if we have three points , and and we want to map them to three other points , and ?    Suppose , and are distinct points in and , and are distinct points in . Then there is a unique Möbius transformation satisfying , , and .    Let where and . Uniqueness follows as in the proof of .    This theorem gives an explicit way to determine from the points and but, in practice, it is often easier to determine directly from the conditions (by solving for , , and ).  "
},
{
  "id": "sec_riemannspere-3",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-3",
  "type": "Definition",
  "number": "3.2.1",
  "title": "",
  "body": "  Suppose .    means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     means that for every we can find so that, for all satisfying , we have .     In the first definition we require that be an accumulation point of while in the second and third we require that be an extended accumulation point of , in the sense that for every there is some with .   "
},
{
  "id": "sec_riemannspere-5",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-5",
  "type": "Example",
  "number": "3.2.2",
  "title": "",
  "body": "  We claim that : Given , let . Then implies .   "
},
{
  "id": "sec_riemannspere-6",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-6",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": "  Let be a Möbius transformation with . Then .  To simplify the notation, introduce the constant . Given , let . Then implies, with the reverse triangle inequality ( ), that and so .   "
},
{
  "id": "sec_riemannspere-8",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-8",
  "type": "Definition",
  "number": "3.2.4",
  "title": "",
  "body": "  The extended complex plane is the set , together with the following algebraic properties: For any ,        if then               if then .    complex plane extended  extended complex plane   The extended complex plane is also called the Riemann sphere or the complex projective line , denoted . complex projective line  Riemann sphere    "
},
{
  "id": "cor_inversemobius",
  "level": "2",
  "url": "sec_riemannspere.html#cor_inversemobius",
  "type": "Corollary",
  "number": "3.2.5",
  "title": "",
  "body": "  Suppose and , and consider defined through   Then is a bijection.   "
},
{
  "id": "ex_mobiusinverse3",
  "level": "2",
  "url": "sec_riemannspere.html#ex_mobiusinverse3",
  "type": "Example",
  "number": "3.2.6",
  "title": "",
  "body": "  Continuing Examples and , consider once more the Möbius transformation . With the definitions and , we can extend to a function .   "
},
{
  "id": "sec_riemannspere-16",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-16",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  The Möbius transformation given by maps .  The points , , and uniquely determine the unit circle and the points 0, 1, and uniquely determine the real line, viewed as a circle in . Thus implies that maps the unit circle to , which we already concluded in .   "
},
{
  "id": "sec_riemannspere-18",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-18",
  "type": "Definition",
  "number": "3.2.8",
  "title": "",
  "body": "  If , , , and are any four points in with , , and distinct, then their cross ratio is defined as . cross ratio   This includes the implicit definitions and, if one of , , , or is , then the two terms containing are canceled; e.g., .   "
},
{
  "id": "sec_riemannspere-19",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-19",
  "type": "Example",
  "number": "3.2.9",
  "title": "",
  "body": "  Our running example can be written as .   "
},
{
  "id": "crossratio",
  "level": "2",
  "url": "sec_riemannspere.html#crossratio",
  "type": "Proposition",
  "number": "3.2.10",
  "title": "",
  "body": "  The function defined by is a Möbius transformation that satisfies .  Moreover, if is any Möbius transformation with , , and , then and are identical.    Most of this follows from our definition of , but we need to prove the uniqueness statement. By Proposition , the inverse is a Möbius transformation and, by Exercise , the composition is again a Möbius transformation. Note that and, similarly, and . If we write then and so , the identity function. But since , this means that and are identical.   "
},
{
  "id": "sec_riemannspere-22",
  "level": "2",
  "url": "sec_riemannspere.html#sec_riemannspere-22",
  "type": "Corollary",
  "number": "3.2.11",
  "title": "",
  "body": "  Suppose , and are distinct points in and , and are distinct points in . Then there is a unique Möbius transformation satisfying , , and .    Let where and . Uniqueness follows as in the proof of .   "
},
{
  "id": "sec_stereoproj",
  "level": "1",
  "url": "sec_stereoproj.html",
  "type": "Section",
  "number": "3.3",
  "title": "Stereographic Projection",
  "body": " Stereographic Projection  The addition of to the complex plane gives the plane a useful structure. This structure is revealed by a famous function called stereographic projection , which gives us a way of visualizing the extended complex plane that is, with the point at infinity in , as the unit sphere. It also provides a way of seeing that a line in the extended complex plane really is a circle, and of visualizing Möbius functions.  To begin, we think of as the -plane in , that is, . To describe stereographic projection, we will be less concerned with actual complex numbers and more concerned with their coordinates. Consider the unit sphere  . unit sphere   The sphere and the complex plane intersect in the set , which corresponds to the equator on the sphere and the unit circle on the complex plane. Let , the north pole of , and let , the south pole . south pole  north pole     The stereographic projection of to from is the map defined as follows. stereographic projection For any point , as the -coordinate of is strictly less than 1, the line through and intersects in exactly one point, which define to be . We also declare that . provides an illustration of this definition.     The definition of stereographic projection.     a=0.35  sa=1\/a^2  b=0.25  sb=1\/b^2  x2=(1-sa)\/(1-sa*sb)  y2=(1-x2)\/sa  int_pt=(sqrt(x2),sqrt(y2))  north=(0,1)  angle=atan(sqrt(y2\/x2))  ell1(t)=(cos(t),a*sin(t))  ell2(t)=(b*cos(t),sin(t))  r=1.7  p1=(r*cos(angle),r*sin(angle))  p2=-p1  e=(r,0)  phiP=(-1.5,-1)  s=0.72  P=s*north+(1-s)*phiP                   N  \\phi(P)  P   {\\mathbb C}          The map is given by   It is bijective, with inverse map and .     Given , the straight line through and is parametrized by where . When hits , the third coordinate is , so it must be that . Plugging this value of into the formula for yields as stated.  To see the formula for the inverse map , we begin with a point and solve for a point so that . The point satisfies the equation . The equation tells us that and . Thus, we solve three equations for three unknowns. The latter two equations yield .  Solving for and then plugging this into the identities and proves the desired formula. It is easy to check that and are both the identity map; see .     The stereographic projection takes the set of circles in bijectively to the set of circles in , where for a circle we have (that is, is a line in ) if and only if .     A circle in is the intersection of with some plane . If is a normal vector to , then there is a unique real number so that is given by . By possibly changing , we may assume that . We may also assume that , since if we can replace with , and if then .  Consider the circle of intersection . A point in the complex plane lies on the image of this circle under if and only if satisfies the defining equation for . Using the equations from Proposition for , we see that .  If , this is a straight line in the -plane. Moreover, every line in the -plane can be obtained in this way. Note that if and only if , which is if and only if the image under is a straight line.  If , then completing the square yields .  Depending on whether the right hand side of this equation is positive, 0, or negative, this is the equation of a circle, point, or the empty set in the -plane, respectively. These three cases happen when , , and , respectively. Only the first case corresponds to a circle in . verifies that every circle in the -plane arises in this manner.   We can now think of the extended complex plane as a sphere in , the afore-mentioned Riemann sphere .  It is particularly nice to think about the basic Möbius transformations via their effect on the Riemann sphere. We will describe inversion. It is worth thinking about, though beyond the scope of this book, how other Möbius functions behave. For instance, a rotation , composed with , can be seen to be a rotation of . We encourage you to verify this and consider the harder problems of visualizing a real dilation, , or a translation, . We give the hint that a real dilation is in some sense dual to a rotation, in that each moves points along perpendicular sets of circles. Translations can also be visualized via how they move points along sets of circles.  We now use stereographic projection to take another look at . We want to know what this function does to the sphere . We will take a point , project it to the plane by the stereographic projection , apply to the point that results, and then pull this point back to by .  We know which we now regard as the complex number .  We know from a previous calculation that , which gives . Thus .  Rather than plug this result into the formulas for , we can just ask what triple of numbers will be mapped to this particular pair using the formulas . The answer is .  Thus we have shown that the effect of on is to take to . This is a rotation around the -axis by 180 degrees.  We now have a second argument that takes circles and lines to circles and lines. A circle or line in is taken to a circle on by . Then rotates the sphere which certainly takes circles to circles. Now takes circles back to circles and lines. We can also say that the circles that go to lines under are the circles through 0, because 0 is mapped to under , and so a circle through 0 in goes to a circle through the south pole in . Now 180-degree rotation about the -axis takes the south pole to the north pole, and our circle is now passing through . But we know that will take this circle to a line in .  We end by mentioning that there is, in fact, a way of putting the complex metric on . It is certainly not the (finite) distance function induced by . Indeed, the origin in the complex plane corresponds to the south pole of . We have to be able to get arbitrarily far away from the origin in , so the complex distance function has to increase greatly with the coordinate. The closer points are to the north pole (corresponding to in ), the larger their distance to the origin, and to each other! In this light, a line in the Riemann sphere corresponds to a circle in through . In the regular sphere, the circle has finite length, but as a line on the Riemann sphere with the complex metric, it has infinite length.  "
},
{
  "id": "sec_stereoproj-5",
  "level": "2",
  "url": "sec_stereoproj.html#sec_stereoproj-5",
  "type": "Definition",
  "number": "3.3.1",
  "title": "",
  "body": "  The stereographic projection of to from is the map defined as follows. stereographic projection For any point , as the -coordinate of is strictly less than 1, the line through and intersects in exactly one point, which define to be . We also declare that . provides an illustration of this definition.   "
},
{
  "id": "fig_sphereandplane",
  "level": "2",
  "url": "sec_stereoproj.html#fig_sphereandplane",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " The definition of stereographic projection.     a=0.35  sa=1\/a^2  b=0.25  sb=1\/b^2  x2=(1-sa)\/(1-sa*sb)  y2=(1-x2)\/sa  int_pt=(sqrt(x2),sqrt(y2))  north=(0,1)  angle=atan(sqrt(y2\/x2))  ell1(t)=(cos(t),a*sin(t))  ell2(t)=(b*cos(t),sin(t))  r=1.7  p1=(r*cos(angle),r*sin(angle))  p2=-p1  e=(r,0)  phiP=(-1.5,-1)  s=0.72  P=s*north+(1-s)*phiP                   N  \\phi(P)  P   {\\mathbb C}       "
},
{
  "id": "prop_coordmaps",
  "level": "2",
  "url": "sec_stereoproj.html#prop_coordmaps",
  "type": "Proposition",
  "number": "3.3.3",
  "title": "",
  "body": "  The map is given by   It is bijective, with inverse map and .   "
},
{
  "id": "sec_stereoproj-8",
  "level": "2",
  "url": "sec_stereoproj.html#sec_stereoproj-8",
  "type": "Proof",
  "number": "3.3.1",
  "title": "",
  "body": " Given , the straight line through and is parametrized by where . When hits , the third coordinate is , so it must be that . Plugging this value of into the formula for yields as stated.  To see the formula for the inverse map , we begin with a point and solve for a point so that . The point satisfies the equation . The equation tells us that and . Thus, we solve three equations for three unknowns. The latter two equations yield .  Solving for and then plugging this into the identities and proves the desired formula. It is easy to check that and are both the identity map; see .  "
},
{
  "id": "StereoCircle",
  "level": "2",
  "url": "sec_stereoproj.html#StereoCircle",
  "type": "Theorem",
  "number": "3.3.4",
  "title": "",
  "body": "  The stereographic projection takes the set of circles in bijectively to the set of circles in , where for a circle we have (that is, is a line in ) if and only if .   "
},
{
  "id": "sec_stereoproj-10",
  "level": "2",
  "url": "sec_stereoproj.html#sec_stereoproj-10",
  "type": "Proof",
  "number": "3.3.2",
  "title": "",
  "body": " A circle in is the intersection of with some plane . If is a normal vector to , then there is a unique real number so that is given by . By possibly changing , we may assume that . We may also assume that , since if we can replace with , and if then .  Consider the circle of intersection . A point in the complex plane lies on the image of this circle under if and only if satisfies the defining equation for . Using the equations from Proposition for , we see that .  If , this is a straight line in the -plane. Moreover, every line in the -plane can be obtained in this way. Note that if and only if , which is if and only if the image under is a straight line.  If , then completing the square yields .  Depending on whether the right hand side of this equation is positive, 0, or negative, this is the equation of a circle, point, or the empty set in the -plane, respectively. These three cases happen when , , and , respectively. Only the first case corresponds to a circle in . verifies that every circle in the -plane arises in this manner.  "
},
{
  "id": "sec_exptrigfcts",
  "level": "1",
  "url": "sec_exptrigfcts.html",
  "type": "Section",
  "number": "3.4",
  "title": "Exponential and Trigonometric Functions",
  "body": " Exponential and Trigonometric Functions  To define the complex exponential function, we once more borrow concepts from calculus, namely the real exponential function How to define the real exponential function is a nontrivial question. Our preferred way to do this is through a power series: . In light of this definition, you might think we should have simply defined the complex exponential function through a complex power series. In fact, this is possible (and an elegant definition); however, one of the promises of this book is to introduce complex power series as late as possible. We agree with those readers who think that we are cheating at this point, as we borrow the concept of a (real) power series to define the real exponential function. and the real sine and cosine, and we finally make sense of the notation . function exponential     The (complex) exponential function exponential function  is , defined for as .    This definition seems a bit arbitrary. Our first justification is that all exponential rules that we are used to from real numbers carry over to the complex case. exponential rules They mainly follow from Proposition and are collected in the following.    For all ,                             .        is very special and has no counterpart for the real exponential function. It says that the complex exponential function is periodic with period . periodic This has many interesting consequences; one that may not seem too pleasant at first sight is the fact that the complex exponential function is not one-to-one.   is not only remarkable, but we invite you to meditate on its proof below; it gives a strong indication that our definition of is reasonable. We also note that implies that is entire.  We leave the proof of as Exercise but give one sample.   The partial derivatives of are .  They are continuous in and satisfy the Cauchy Riemann equation : for all . Thus Theorem says that is entire with derivative .   We should make sure that the complex exponential function specializes to the real exponential function for real arguments: indeed, if then .                       size=8        p=(cos(angle), sin(angle))         The domain of the complex exponential function is shown on the left and the codomain on the right. The function maps the blue vertical lines on the left into circles on the right and maps the red dashed horizontal lines on the left into the rays on the right.   The trigonometric functions sine, cosine, tangent, cotangent, etc. also have complex analogues; however, they do not play the same prominent role as in the real case. trigonometric functions  sine  cosine  tangent  cotangent In fact, we can define them as merely being special combinations of the exponential function. function trigonometric     The (complex) sine and cosine are defined as , respectively. The tangent and cotangent are defined as , respectively.    Note that to write tangent and cotangent in terms of the exponential function, we used the fact that . Because is entire, so are and .  As with the exponential function, we should make sure that we're not redefining the real sine and cosine: if then .  A similar calculation holds for the cosine. Not too surprisingly, the following properties follow mostly from .    For all , .    Finally, one word of caution: unlike in the real case, the complex sine and cosine are not bounded consider, for example, as .  We end this section with a remark on hyperbolic trig functions. hyperbolic trig functions The hyperbolic sine , cosine , tangent , and cotangent are defined as in the real case:    .   As such, they are yet more special combinations of the exponential function. They still satisfy the identities you already know, e.g., .  Moreover, they are related to the trigonometric functions via .  "
},
{
  "id": "sec_exptrigfcts-3",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-3",
  "type": "Definition",
  "number": "3.4.1",
  "title": "",
  "body": "  The (complex) exponential function exponential function  is , defined for as .   "
},
{
  "id": "expproperties",
  "level": "2",
  "url": "sec_exptrigfcts.html#expproperties",
  "type": "Proposition",
  "number": "3.4.2",
  "title": "",
  "body": "  For all ,                             .      "
},
{
  "id": "sec_exptrigfcts-9",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-9",
  "type": "Proof",
  "number": "3.4.1",
  "title": "",
  "body": " The partial derivatives of are .  They are continuous in and satisfy the Cauchy Riemann equation : for all . Thus Theorem says that is entire with derivative .  "
},
{
  "id": "fig-complex-exponential",
  "level": "2",
  "url": "sec_exptrigfcts.html#fig-complex-exponential",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": "                     size=8        p=(cos(angle), sin(angle))         The domain of the complex exponential function is shown on the left and the codomain on the right. The function maps the blue vertical lines on the left into circles on the right and maps the red dashed horizontal lines on the left into the rays on the right.  "
},
{
  "id": "sec_exptrigfcts-13",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-13",
  "type": "Definition",
  "number": "3.4.4",
  "title": "",
  "body": "  The (complex) sine and cosine are defined as , respectively. The tangent and cotangent are defined as , respectively.   "
},
{
  "id": "trigproperties",
  "level": "2",
  "url": "sec_exptrigfcts.html#trigproperties",
  "type": "Proposition",
  "number": "3.4.5",
  "title": "",
  "body": "  For all , .   "
},
{
  "id": "sec_exptrigfcts-20",
  "level": "2",
  "url": "sec_exptrigfcts.html#sec_exptrigfcts-20",
  "type": "Definition",
  "number": "3.4.6",
  "title": "",
  "body": "  .  "
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
