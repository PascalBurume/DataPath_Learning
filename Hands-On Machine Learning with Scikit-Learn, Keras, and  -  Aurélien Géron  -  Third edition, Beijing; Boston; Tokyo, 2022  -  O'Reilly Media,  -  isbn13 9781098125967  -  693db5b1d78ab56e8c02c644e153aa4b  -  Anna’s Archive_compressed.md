Hands-On Machine Learning
with Scikit-Learn, Keras, and
TensorFlow
THIRD EDITION
Concepts, Tools, and Techniques to Build Intelligent
Systems
Aurélien Géron
Hands-On Machine Learning with Scikit-Learn, Keras, and
TensorFlow
by Aurélien Géron
Copyright © 2022 Aurélien Géron. All rights reserved.
Printed in the United States of America.
Published by O’Reilly Media, Inc., 1005 Gravenstein Highway North,
Sebastopol, CA 95472.
O’Reilly books may be purchased for educational, business, or sales
promotional use. Online editions are also available for most titles
```
(http://oreilly.com). For more information, contact our
```
corporate/institutional sales department: 800-998-9938 or
corporate@oreilly.com.
Acquisitions Editor: Rebecca Novack
Development Editor: Nicole Taché
Production Editor: Beth Kelly
```
Copyeditor:
```
```
Proofreader:
```
```
Indexer:
```
Interior Designer: David Futato
Cover Designer: Karen Montgomery
```
Illustrator: Kate Dullea
```
October 2022: Third Edition
Revision History for the Early Release
2022-02-08: First Release
2022-03-14: Second Release
See http://oreilly.com/catalog/errata.csp?isbn=9781492032649 for release
details.
The O’Reilly logo is a registered trademark of O’Reilly Media, Inc. Hands-
On Machine Learning with Scikit-Learn, Keras, and TensorFlow, the cover
image, and related trade dress are trademarks of O’Reilly Media, Inc.
The views expressed in this work are those of the author, and do not
represent the publisher’s views. While the publisher and the author have
used good faith efforts to ensure that the information and instructions
contained in this work are accurate, the publisher and the author disclaim all
responsibility for errors or omissions, including without limitation
responsibility for damages resulting from the use of or reliance on this
work. Use of the information and instructions contained in this work is at
your own risk. If any code samples or other technology this work contains
or describes is subject to open source licenses or the intellectual property
rights of others, it is your responsibility to ensure that your use thereof
complies with such licenses and/or rights.
978-1-098-12244-7
[]
Preface
The Machine Learning Tsunami
In 2006, Geoffrey Hinton et al. published a paper showing how to train a
deep neural network capable of recognizing handwritten digits with state-
```
of-the-art precision (>98%). They branded this technique “Deep Learning.”
```
```
A deep neural network is a (very) simplified model of our cerebral cortex,
```
composed of a stack of layers of artificial neurons. Training a deep neural
net was widely considered impossible at the time, and most researchers
had abandoned the idea in the late 1990s. This paper revived the interest of
the scientific community, and before long many new papers demonstrated
that Deep Learning was not only possible, but capable of mind-blowing
```
achievements that no other Machine Learning (ML) technique could hope
```
```
to match (with the help of tremendous computing power and great amounts
```
```
of data). This enthusiasm soon extended to many other areas of Machine
```
Learning.
A decade later, Machine Learning had conquered the industry, and today it
is at the heart of much of the magic in high-tech products, ranking your web
search results, powering your smartphone’s speech recognition,
recommending videos, and beating the world champion at the game of Go.
Before you know it, it will be driving your car.
Machine Learning in Your Projects
So, naturally you are excited about Machine Learning and would love to
join the party!
Perhaps you would like to give your homemade robot a brain of its own?
Make it recognize faces? Or learn to walk around?
1
2
```
Or maybe your company has tons of data (user logs, financial data,
```
```
production data, machine sensor data, hotline stats, HR reports, etc.), and
```
more than likely you could unearth some hidden gems if you just knew
where to look. With Machine Learning, you could accomplish the following
and much more:
Segment customers and find the best marketing strategy for each
group.
Recommend products for each client based on what similar clients
bought.
Detect which transactions are likely to be fraudulent.
Forecast next year’s revenue.
Whatever the reason, you have decided to learn Machine Learning and
implement it in your projects. Great idea!
Objective and Approach
This book assumes that you know close to nothing about Machine
Learning. Its goal is to give you the concepts, tools, and intuition you need
to implement programs capable of learning from data.
We will cover a large number of techniques, from the simplest and most
```
commonly used (such as Linear Regression) to some of the Deep Learning
```
techniques that regularly win competitions.
Rather than implementing our own toy versions of each algorithm, we will
be using production-ready Python frameworks:
Scikit-Learn is very easy to use, yet it implements many Machine
Learning algorithms efficiently, so it makes for a great entry point
to learning Machine Learning. It was created by David Cournapeau
in 2007, and is now led by a team of researchers at the French
```
Institute for Research in Computer Science and Automation (Inria).
```
TensorFlow is a more complex library for distributed numerical
computation. It makes it possible to train and run very large neural
networks efficiently by distributing the computations across
```
potentially hundreds of multi-GPU (graphics processing unit)
```
```
servers. TensorFlow (TF) was created at Google and supports
```
many of its large-scale Machine Learning applications. It was open
sourced in November 2015, and version 2.0 was released in
September 2019.
Keras is a high-level Deep Learning API that makes it very simple
to train and run neural networks. Keras comes bundled with
TensorFlow, and it relies on TensorFlow for all the intensive
computations.
The book favors a hands-on approach, growing an intuitive understanding
of Machine Learning through concrete working examples and just a little bit
of theory.
TIP
While you can read this book without picking up your laptop, I highly recommend you
experiment with the code examples available online. See the Code examples section
later in this preface.
Prerequisites
This book assumes that you have some Python programming experience. If
you don’t know Python yet, https://learnpython.org/ is a great place to start.
The official tutorial on Python.org is also quite good.
This book also assumes that you are familiar with Python’s main scientific
libraries—in particular, NumPy, Pandas, and Matplotlib. If you have never
used these libraries, don’t worry, they’re easy to learn, and I created a
tutorial for each of them. You can access them online at
```
https://homl.info/tutorials.
```
Moreover, if you want to fully understand how the Machine Learning
```
algorithms work (not just how to use them), then you should have at least a
```
basic understanding of a few math concepts, especially linear algebra.
Specifically, you should know what vectors and matrices are, and how to
perform some simple operations like adding vectors, or transposing and
```
multiplying matrices. If you need a quick introduction to linear algebra (it’s
```
```
really not rocket science!), I created a tutorial available at
```
```
https://homl.info/tutorials. You will also find a tutorial on differential
```
calculus, which may be helpful to understand how neural networks are
trained, but it’s not entirely essential to grasp the important concepts. This
book also uses other mathematical concepts occasionally, such as
exponentials and logarithms, a bit of probability theory and some basic
statistics concepts, but nothing too advanced. If you need help on any of
these, please check out https://khanacademy.org/, which offers many
excellent and free math courses online.
Roadmap
This book is organized in two parts. Part I, “The Fundamentals of Machine
Learning”, covers the following topics:
What Machine Learning is, what problems it tries to solve, and the
main categories and fundamental concepts of its systems
The steps in a typical Machine Learning project
Learning by fitting a model to data
Optimizing a cost function
Handling, cleaning, and preparing data
Selecting and engineering features
Selecting a model and tuning hyperparameters using cross-
validation
The challenges of Machine Learning, in particular underfitting and
```
overfitting (the bias/variance trade-off)
```
The most common learning algorithms: Linear and Polynomial
Regression, Logistic Regression, k-Nearest Neighbors, Support
Vector Machines, Decision Trees, Random Forests, and Ensemble
methods
Reducing the dimensionality of the training data to fight the “curse
of dimensionality”
Other unsupervised learning techniques, including clustering,
density estimation, and anomaly detection
Part II, “Neural Networks and Deep Learning”, covers the following topics:
What neural nets are and what they’re good for
Building and training neural nets using TensorFlow and Keras
The most important neural net architectures: feedforward neural
nets for tabular data, convolutional nets for computer vision,
```
recurrent nets and long short-term memory (LSTM) nets for
```
sequence processing, encoder/decoders and Transformers for
natural language processing, autoencoders and generative
```
adversarial networks (GANs) for generative learning
```
Techniques for training deep neural nets
```
How to build an agent (e.g., a bot in a game) that can learn good
```
strategies through trial and error, using Reinforcement Learning
Loading and preprocessing large amounts of data efficiently
Training and deploying TensorFlow models at scale
The first part is based mostly on Scikit-Learn, while the second part uses
TensorFlow and Keras.
CAUTION
Don’t jump into deep waters too hastily: while Deep Learning is no doubt one of the
most exciting areas in Machine Learning, you should master the fundamentals first.
Moreover, most problems can be solved quite well using simpler techniques such as
```
Random Forests and Ensemble methods (discussed in Part I). Deep Learning is best
```
suited for complex problems such as image recognition, speech recognition, or natural
```
language processing, and it requires a lot of data, computing power, and patience (unless
```
```
you can leverage a pre-trained neural network, as we will see).
```
Changes in the Third Edition
This third edition has four main objectives:
1. Cover additional ML topics: (TODO write the list of new ML
```
topics)
```
2. Discuss some of the latest important results from Deep Learning
research.
3. Update the code examples to use the latest versions of Scikit-
Learn, NumPy, Pandas, Matplotlib, and other libraries.
4. Clarify some sections and fix some errors, thanks to plenty of great
feedback from readers.
See https://homl.info/changes3 for more details on what changed in the
```
third edition. (TODO write changes page and link to it)
```
Code Examples
All the code examples in this book are open source and available online at
```
https://github.com/ageron/handson-ml3, as Jupyter notebooks. These are
```
interactive documents containing text, images, and executable code snippets
```
(Python in our case). The easiest and quickest way to get started is to run
```
these notebooks using Google Colab: this is a free service that allows you to
run any Jupyter notebook directly online, without having to install anything
on your machine. All you need is a web browser and a Google account.
NOTE
In this book, I will assume that you are using Google Colab, but I have also tested the
notebooks on other online platforms such as Kaggle or Binder, so you can use those if
```
you prefer. Alternatively, you can install the required libraries and tools (or the Docker
```
```
image for this book) and run the notebooks directly on your own machine. See the
```
instructions at https://github.com/ageron/handson-ml3.
Other Resources
Many excellent resources are available to learn about Machine Learning.
For example, Andrew Ng’s ML course on Coursera is amazing, although it
requires a significant time investment.
There are also many interesting websites about Machine Learning,
including of course Scikit-Learn’s exceptional User Guide. You may also
enjoy Dataquest, which provides very nice interactive tutorials, and ML
blogs such as those listed on Quora. Finally, there are many excellent
YouTube channels about Machine Learning, including ML Street Talk,
Yannic Kilcher and many others, some of which are listed at
```
https://homl.info/youtubechannels.
```
There are many other introductory books about Machine Learning. In
```
particular:
```
```
Joel Grus’s Data Science from Scratch, 2nd edition (O’Reilly)
```
presents the fundamentals of Machine Learning and implements
```
some of the main algorithms in pure Python (from scratch, as the
```
```
name suggests).
```
Stephen Marsland’s Machine Learning: An Algorithmic
```
Perspective, 2nd edition (Chapman & Hall) is a great introduction
```
to Machine Learning, covering a wide range of topics in depth with
```
code examples in Python (also from scratch, but using NumPy).
```
```
Sebastian Raschka’s Python Machine Learning, 3rd edition (Packt
```
```
Publishing) is also a great introduction to Machine Learning and
```
```
leverages Python open source libraries (Pylearn 2 and Theano).
```
François Chollet’s Deep Learning with Python, 2nd edition
```
(Manning) is a very practical book that covers a large range of
```
topics in a clear and concise way, as you might expect from the
author of the excellent Keras library. It favors code examples over
mathematical theory.
Andriy Burkov’s The Hundred-Page Machine Learning Book is
very short and covers an impressive range of topics, introducing
them in approachable terms without shying away from the math
equations.
Yaser S. Abu-Mostafa, Malik Magdon-Ismail, and Hsuan-Tien
```
Lin’s Learning from Data (AMLBook) is a rather theoretical
```
approach to ML that provides deep insights, in particular on the
```
bias/variance trade-off (see Chapter 4).
```
Stuart Russell and Peter Norvig’s Artificial Intelligence: A Modern
```
Approach, 4th Edition (Pearson), is a great (and huge) book
```
covering an incredible amount of topics, including Machine
Learning. It helps put ML into perspective.
Jeremy Howard and Sylvain Gugger’s Deep Learning for Coders
```
with fastai and PyTorch (O’Reilly) provides a wonderfully clear
```
and practical introduction to Deep Learning using the fastai and
PyTorch libraries.
Finally, joining ML competition websites such as Kaggle.com will allow
you to practice your skills on real-world problems, with help and insights
from some of the best ML professionals out there.
Conventions Used in This Book
The following typographical conventions are used in this book:
Italic
Indicates new terms, URLs, email addresses, filenames, and file
extensions.
Constant width
Used for program listings, as well as within paragraphs to refer to
program elements such as variable or function names, databases, data
types, environment variables, statements and keywords.
Constant width bold
Shows commands or other text that should be typed literally by the user.
Constant width italic
Shows text that should be replaced with user-supplied values or by
values determined by context.
TIP
This element signifies a tip or suggestion.
NOTE
This element signifies a general note.
WARNING
This element indicates a warning or caution.
O’Reilly Online Learning
NOTE
For almost 40 years, O’Reilly Media has provided technology and business training,
knowledge, and insight to help companies succeed.
Our unique network of experts and innovators share their knowledge and
expertise through books, articles, and our online learning platform.
O’Reilly’s online learning platform gives you on-demand access to live
training courses, in-depth learning paths, interactive coding environments,
and a vast collection of text and video from O’Reilly and 200+ other
publishers. For more information, please visit https://oreilly.com.
How to Contact Us
Please address comments and questions concerning this book to the
```
publisher:
```
O’Reilly Media, Inc.
1005 Gravenstein Highway North
Sebastopol, CA 95472
```
800-998-9938 (in the United States or Canada)
```
```
707-829-0515 (international or local)
```
```
707-829-0104 (fax)
```
We have a web page for this book, where we list errata, examples, and any
additional information. You can access this page at
```
https://homl.info/oreilly2.
```
To comment or ask technical questions about this book, send email to
bookquestions@oreilly.com.
For news and more information about our books and courses, see our
website at https://www.oreilly.com.
Find us on Facebook: https://facebook.com/oreilly
Follow us on Twitter: https://twitter.com/oreillymedia
Watch us on YouTube: https://www.youtube.com/oreillymedia
Acknowledgments
Never in my wildest dreams did I imagine that the first and second editions
of this book would get such a large audience. I received so many messages
from readers, many asking questions, some kindly pointing out errata, and
most sending me encouraging words. I cannot express how grateful I am to
all these readers for their tremendous support. Thank you all so very much!
Please do not hesitate to file issues on GitHub if you find errors in the code
```
examples (or just to ask questions), or to submit errata (TODO define link)
```
if you find errors in the text. Some readers also shared how this book helped
them get their first job, or how it helped them solve a concrete problem they
were working on. I find such feedback incredibly motivating. If you find
this book helpful, I would love it if you could share your story with me,
```
either privately (e.g., via LinkedIn) or publicly (e.g., tweet me at
```
```
@aureliengeron or write an Amazon review). (TODO define link)
```
```
(TODO: add thanks to 3rd edition reviewers: Hannes Hapke, Sara
```
Robinson, Laurence Moroney, Kyle Gallatin, Eric Lebigot, Jason Mayes,
```
Soonson Kwon and Google for GCE credits)
```
```
(TODO: add thanks to Ulf Bissbort for ML discussions)
```
```
(TODO update this paragraph for 3rd edition) Many thanks as well to
```
O’Reilly’s fantastic staff, in particular Nicole Taché, who gave me
insightful feedback and was always cheerful, encouraging, and helpful: I
could not dream of a better editor. Big thanks to Michele Cronin as well,
```
who was very helpful (and patient) at the start of this second edition, and to
```
Kristen Brown, the production editor for the second edition, who saw it
```
through all the steps (she also coordinated fixes and updates for each reprint
```
```
of the first edition). Thanks as well to Rachel Monaghan and Amanda
```
```
Kersey for their thorough copyediting (respectively for the first and second
```
```
edition), and to Johnny O’Toole who managed the relationship with
```
Amazon and answered many of my questions. Thanks to Marie
Beaugureau, Ben Lorica, Mike Loukides, and Laurel Ruma for believing in
this project and helping me define its scope. Thanks to Matt Hacker and all
of the Atlas team for answering all my technical questions regarding
formatting, AsciiDoc, and LaTeX, and thanks to Nick Adams, Rebecca
Demarest, Rachel Head, Judith McConville, Helen Monroe, Karen
Montgomery, Rachel Roumeliotis, and everyone else at O’Reilly who
contributed to this book.
I’ll never forget all the wonderful people who helped me with the first and
second editions of this book: friends, colleagues, experts, including many
members of the TensorFlow team, the list is long: Olzhas Akpambetov,
Karmel Allison, Martin Andrews, David Andrzejewski, Paige Bailey, Lukas
Biewald, Eugene Brevdo, William Chargin, François Chollet, Robert
Crowe, Mark Daoust, Daniel “Wolff” Dobson, Nick Felt, Bruce Fontaine,
Justin Francis, Goldie Gadde, Irene Giannoumis, Ingrid von Glehn, Vincent
Guilbeau, Sandeep Gupta, Priya Gupta, Kevin Haas, Eddy Hung,
Konstantinos Katsiapis, Viacheslav Kovalevskyi, Jon Krohn, Allen Lavoie,
Karim Matrah, Grégoire Mesnil, Clemens Mewald, Dan Moldovan,
Dominic Monn, Sean Morgan, Tom O’Malley, Haesun Park, Alexandre
Passos, Ankur Patel, Josh Patterson, André Susano Pinto, Anthony
Platanios, Oscar Ramirez, Anna Revinskaya, Saurabh Saxena, Salim
Sémaoune, Ryan Sepassi, Jiri Simsa, Iain Smears, Xiaodan Song, Christina
Sorokin, Michel Tessier, Dustin Tran, Todd Wang, Pete Warden, Martin
Wicke, Edd Wilder-James, Sam Witteveen, Jason Zaman, Yuefeng Zhou
and my dear brother Sylvain.
I would also like to thank my former Google colleagues, in particular the
YouTube video classification team, for teaching me so much about Machine
Learning. I could never have started the first edition without them. Special
thanks to my personal ML gurus: Clément Courbet, Julien Dubois, Mathias
Kende, Daniel Kitachewsky, James Pack, Alexander Pak, Anosh Raj, Vitor
Sessak, Wiktor Tomczak, Ingrid von Glehn, and Rich Washington. And
thanks to everyone else I worked with at YouTube and in the amazing
Google research teams in Mountain View.
Last but not least, I am infinitely grateful to my beloved wife, Emmanuelle,
and to our three wonderful children, Alexandre, Rémi, and Gabrielle, for
encouraging me to work hard on this book. I’m also thankful to them for
their insatiable curiosity: explaining some of the most difficult concepts in
this book to my wife and children helped me clarify my thoughts and
directly improved many parts of it. And they keep bringing me cookies and
coffee, who could ask for anything more?
1 Geoffrey E. Hinton et al., “A Fast Learning Algorithm for Deep Belief Nets,” Neural
```
Computation 18 (2006): 1527–1554.
```
2 Despite the fact that Yann LeCun’s deep convolutional neural networks had worked well for
image recognition since the 1990s, although they were not as general-purpose.
Part I. The Fundamentals of
Machine Learning
Chapter 1. The Machine
Learning Landscape
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take
advantage of these technologies long before the official release of these
titles.
This will be the 1st chapter of the final book. Notebooks are available
on GitHub at https://github.com/ageron/handson-ml3. Datasets are
available at https://github.com/ageron/data.
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this
chapter, please reach out to the editoor at ntache@oreilly.com.
Not so long ago, if you had picked up your phone and asked it the way
home, it would have ignored you—and people would have questionned
your sanity. But Machine Learning is no longer Science Fiction: billions of
people use it every day. And the truth is it has actually been around for
decades in some specialized applications, such as Optical Character
```
Recognition (OCR). The first ML application that really became
```
mainstream, improving the lives of hundreds of millions of people, took
over the world back in the 1990s: the spam filter. It’s not exactly a self-
aware robot, but it does technically qualify as Machine Learning: it has
actually learned so well that you seldom need to flag an email as spam
anymore. It was followed by hundreds of ML applications that now quietly
power hundreds of products and features that you use regularly: voice
prompts, automatic translation, image search, product recommendations,
and many more.
Where does Machine Learning start and where does it end? What exactly
does it mean for a machine to learn something? If I download a copy of all
Wikipedia articles, has my computer really learned something? Is it
suddenly smarter? In this chapter I will start by clarifying what Machine
Learning is and why you may want to use it.
Then, before we set out to explore the Machine Learning continent, we will
take a look at the map and learn about the main regions and the most
notable landmarks: supervised versus unsupervised learning and their
variants, online versus batch learning, instance-based versus model-based
learning. Then we will look at the workflow of a typical ML project,
discuss the main challenges you may face, and cover how to evaluate and
fine-tune a Machine Learning system.
```
This chapter introduces a lot of fundamental concepts (and jargon) that
```
every data scientist should know by heart. It will be a high-level overview
```
(it’s the only chapter without much code), all rather simple, but my goal is
```
to ensure everything is crystal clear to you before we continue on to the rest
of the book. So grab a coffee and let’s get started!
TIP
If you are already familiar with Machine Learning basics, you may want to skip directly
to Chapter 2. If you are not sure, try to answer all the questions listed at the end of the
chapter before moving on.
What Is Machine Learning?
```
Machine Learning is the science (and art) of programming computers so
```
they can learn from data.
Here is a slightly more general definition:
[Machine Learning is the] field of study that gives computers the ability
to learn without being explicitly programmed.
—Arthur Samuel，1959
And a more engineering-oriented one:
A computer program is said to learn from experience E with respect to
some task T and some performance measure P, if its performance on T,
as measured by P, improves with experience E.
—Tom Mitchell，1997
Your spam filter is a Machine Learning program that, given examples of
```
spam emails (flagged by users) and examples of regular emails (nonspam,
```
```
also called “ham”), can learn to flag spam. The examples that the system
```
uses to learn are called the training set. Each training example is called a
```
training instance (or sample). The part of a Machine Learning system that
```
learns and makes predictions is called a model. Neural networks and
random forests are examples of models.
In this case, the task T is to flag spam for new emails, the experience E is
```
the training data, and the performance measure P needs to be defined; for
```
example, you can use the ratio of correctly classified emails. This particular
performance measure is called accuracy, and it is often used in
classification tasks.
If you just download a copy of all Wikipedia articles, your computer has a
lot more data, but it is not suddenly better at any task. It is not Machine
Learning.
Why Use Machine Learning?
Consider how you would write a spam filter using traditional programming
```
techniques (Figure 1-1):
```
1. First you would examine what spam typically looks like. You
```
might notice that some words or phrases (such as “4U,” “credit
```
```
card,” “free,” and “amazing”) tend to come up a lot in the subject
```
line. Perhaps you would also notice a few other patterns in the
sender’s name, the email’s body, and other parts of the email.
2. You would write a detection algorithm for each of the patterns that
you noticed, and your program would flag emails as spam if a
number of these patterns were detected.
3. You would test your program and repeat steps 1 and 2 until it was
good enough to launch.
Figure 1-1. The traditional approach
Since the problem is difficult, your program will likely become a long list
of complex rules—pretty hard to maintain.
In contrast, a spam filter based on Machine Learning techniques
automatically learns which words and phrases are good predictors of spam
by detecting unusually frequent patterns of words in the spam examples
```
compared to the ham examples (Figure 1-2). The program is much shorter,
```
easier to maintain, and most likely more accurate.
What if spammers notice that all their emails containing “4U” are blocked?
They might start writing “For U” instead. A spam filter using traditional
programming techniques would need to be updated to flag “For U” emails.
If spammers keep working around your spam filter, you will need to keep
writing new rules forever.
In contrast, a spam filter based on Machine Learning techniques
automatically notices that “For U” has become unusually frequent in spam
flagged by users, and it starts flagging them without your intervention
```
(Figure 1-3).
```
Figure 1-2. The Machine Learning approach
Figure 1-3. Automatically adapting to change
Another area where Machine Learning shines is for problems that either are
too complex for traditional approaches or have no known algorithm. For
example, consider speech recognition. Say you want to start simple and
write a program capable of distinguishing the words “one” and “two.” You
```
might notice that the word “two” starts with a high-pitch sound (“T”), so
```
you could hardcode an algorithm that measures high-pitch sound intensity
and use that to distinguish ones and twos—but obviously this technique will
not scale to thousands of words spoken by millions of very different people
```
in noisy environments and in dozens of languages. The best solution (at
```
```
least today) is to write an algorithm that learns by itself, given many
```
example recordings for each word.
```
Finally, Machine Learning can help humans learn (Figure 1-4). ML models
```
```
can be inspected to see what they have learned (although for some models
```
```
this can be tricky). For instance, once a spam filter has been trained on
```
enough spam, it can easily be inspected to reveal the list of words and
combinations of words that it believes are the best predictors of spam.
Sometimes this will reveal unsuspected correlations or new trends, and
thereby lead to a better understanding of the problem. Digging into large
amounts of data to discover hidden patterns is called data mining, and
Machine Learning excels at it.
Figure 1-4. Machine Learning can help humans learn
To summarize, Machine Learning is great for:
Problems for which existing solutions require a lot of fine-tuning
or long lists of rules: one Machine Learning model can often
simplify code and perform better than the traditional approach.
Complex problems for which using a traditional approach yields no
good solution: the best Machine Learning techniques can perhaps
find a solution.
Fluctuating environments: a Machine Learning system can easily
be retrained on new data, always keeping it up to date.
Getting insights about complex problems and large amounts of
data.
Examples of Applications
Let’s look at some concrete examples of Machine Learning tasks, along
with the techniques that can tackle them:
Analyzing images of products on a production line to automatically classify
them
This is image classification, typically performed using convolutional
```
neural networks (CNNs; see Chapter 14) or sometimes Transformers
```
```
(see Chapter 16).
```
Detecting tumors in brain scans
This is semantic image segmentation, where each pixel in the image is
```
classified (as we want to determine the exact location and shape of
```
```
tumors), typically using CNNs or Transformers.
```
Automatically classifying news articles
```
This is natural language processing (NLP), and more specifically text
```
classification, which can be tackled using recurrent neural networks
```
(RNNs) and CNNs, but Transformers work even better (see Chapter
```
```
16).
```
Automatically flagging offensive comments on discussion forums
This is also text classification, using the same NLP tools.
Summarizing long documents automatically
This is a branch of NLP called text summarization, again using the same
tools.
Creating a chatbot or a personal assistant
This involves many NLP components, including natural language
```
understanding (NLU) and question-answering modules.
```
Forecasting your company’s revenue next year, based on many performance
metrics
```
This is a regression task (i.e., predicting values) that may be tackled
```
using any regression model, such as a Linear Regression or Polynomial
```
Regression model (see Chapter 4), a regression SVM (see Chapter 5), a
```
```
regression Random Forest (see Chapter 7), or an artificial neural
```
```
network (see Chapter 10). If you want to take into account sequences of
```
past performance metrics, you may want to use RNNs, CNNs, or
```
Transformers (see Chapters 15 and 16).
```
Making your app react to voice commands
This is speech recognition, which requires processing audio samples:
since they are long and complex sequences, they are typically processed
```
using RNNs, CNNs, or Transformers (see Chapters 15 and 16).
```
Detecting credit card fraud
This is anomaly detection, which can be tackled using isolation forests,
```
Gaussian mixture models (see Chapter 9) or autoencoders (see Chapter
```
```
17).
```
Segmenting clients based on their purchases so that you can design a
different marketing strategy for each segment
This is clustering, which can be achieved using K-Means, DBSCAN
```
and more (see Chapter 9).
```
Representing a complex, high-dimensional dataset in a clear and insightful
diagram
This is data visualization, often involving dimensionality reduction
```
techniques (see Chapter 8).
```
Recommending a product that a client may be interested in, based on past
purchases
This is a recommender system. One approach is to feed past purchases
```
(and other information about the client) to an artificial neural network
```
```
(see Chapter 10), and get it to output the most likely next purchase. This
```
neural net would typically be trained on past sequences of purchases
across all clients.
Building an intelligent bot for a game
```
This is often tackled using Reinforcement Learning (RL; see Chapter
```
```
18), which is a branch of Machine Learning that trains agents (such as
```
```
bots) to pick the actions that will maximize their rewards over time
```
```
(e.g., a bot may get a reward every time the player loses some life
```
```
points), within a given environment (such as the game). The famous
```
AlphaGo program that beat the world champion at the game of Go was
built using RL.
This list could go on and on, but hopefully it gives you a sense of the
incredible breadth and complexity of the tasks that Machine Learning can
tackle, and the types of techniques that you would use for each task.
Types of Machine Learning Systems
There are so many different types of Machine Learning systems that it is
useful to classify them in broad categories, based on the following criteria:
```
How they are supervised during training (supervised, unsupervised,
```
```
semi-supervised, self-supervised, and others)
```
```
Whether or not they can learn incrementally on the fly (online
```
```
versus batch learning)
```
Whether they work by simply comparing new data points to known
data points, or instead by detecting patterns in the training data and
```
building a predictive model, much like scientists do (instance-
```
```
based versus model-based learning)
```
```
These criteria are not exclusive; you can combine them in any way you like.
```
For example, a state-of-the-art spam filter may learn on the fly using a deep
neural network model trained using human-provided examples of spam and
```
ham; this makes it an online, model-based, supervised learning system.
```
Let’s look at each of these criteria a bit more closely.
Training Supervision
ML systems can be classified according to the amount and type of
supervision they get during training. There are many categories, but we’ll
discuss the main ones: supervised learning, unsupervised learning, self-
supervised learning, semi-supervised learning, and Reinforcement
Learning.
Supervised learning
In supervised learning, the training set you feed to the algorithm includes
```
the desired solutions, called labels (Figure 1-5).
```
```
Figure 1-5. A labeled training set for spam classification (an example of supervised learning)
```
A typical supervised learning task is classification. The spam filter is a
good example of this: it is trained with many example emails along with
```
their class (spam or ham), and it must learn how to classify new emails.
```
Another typical task is to predict a target numeric value, such as the price
```
of a car, given a set of features (mileage, age, brand, etc.). This sort of task
```
```
is called regression (Figure 1-6). To train the system, you need to give it
```
```
many examples of cars, including both their features and their targets (i.e.,
```
```
their prices).
```
NOTE
The words target and label are generally treated as synonyms in supervised learning, but
target is more common in regression tasks, and label is more common in classification
tasks. Moreover, features are sometimes called predictors or attributes. These terms
```
may refer to individual samples (e.g., “this car’s mileage feature is equal to 15,000”) or
```
```
to all samples (e.g., “the mileage feature is strongly correlated with price”).
```
Note that some regression models can be used for classification as well, and
vice versa. For example, Logistic Regression is commonly used for
classification, as it can output a value that corresponds to the probability of
```
belonging to a given class (e.g., 20% chance of being spam).
```
1
```
Figure 1-6. A regression problem: predict a value, given an input feature (there are usually multiple
```
```
input features, and sometimes multiple output values)
```
Unsupervised learning
In unsupervised learning, as you might guess, the training data is unlabeled
```
(Figure 1-7). The system tries to learn without a teacher.
```
Figure 1-7. An unlabeled training set for unsupervised learning
For example, say you have a lot of data about your blog’s visitors. You may
want to run a clustering algorithm to try to detect groups of similar visitors
```
(Figure 1-8). At no point do you tell the algorithm which group a visitor
```
belongs to: it finds those connections without your help. For example, it
might notice that 40% of your visitors are teenagers who love comic books
and generally read your blog after school, while 20% are adults who enjoy
sci-fi and who visit during the weekends. If you use a hierarchical
clustering algorithm, it may also subdivide each group into smaller groups.
This may help you target your posts for each group.
Figure 1-8. Clustering
Visualization algorithms are also good examples of unsupervised learning:
you feed them a lot of complex and unlabeled data, and they output a 2D or
```
3D representation of your data that can easily be plotted (Figure 1-9). These
```
```
algorithms try to preserve as much structure as they can (e.g., trying to keep
```
```
separate clusters in the input space from overlapping in the visualization) so
```
that you can understand how the data is organized and perhaps identify
unsuspected patterns.
Figure 1-9. Example of a t-SNE visualization highlighting semantic clusters
A related task is dimensionality reduction, in which the goal is to simplify
the data without losing too much information. One way to do this is to
2
merge several correlated features into one. For example, a car’s mileage
may be strongly correlated with its age, so the dimensionality reduction
algorithm will merge them into one feature that represents the car’s wear
and tear. This is called feature extraction.
TIP
It is often a good idea to try to reduce the dimension of your training data using a
dimensionality reduction algorithm before you feed it to another Machine Learning
```
algorithm (such as a supervised learning algorithm). It will run much faster, the data will
```
take up less disk and memory space, and in some cases it may also perform better.
Yet another important unsupervised task is anomaly detection—for
example, detecting unusual credit card transactions to prevent fraud,
catching manufacturing defects, or automatically removing outliers from a
dataset before feeding it to another learning algorithm. The system is shown
```
mostly normal instances during training, so it learns to recognize them;
```
then, when it sees a new instance, it can tell whether it looks like a normal
```
one or whether it is likely an anomaly (see Figure 1-10). A very similar task
```
is novelty detection: it aims to detect new instances that look different from
all instances in the training set. This requires having a very “clean” training
set, devoid of any instance that you would like the algorithm to detect. For
example, if you have thousands of pictures of dogs, and 1% of these
pictures represent Chihuahuas, then a novelty detection algorithm should
not treat new pictures of Chihuahuas as novelties. On the other hand,
anomaly detection algorithms may consider these dogs as so rare and so
different from other dogs that they would likely classify them as anomalies
```
(no offense to Chihuahuas).
```
Figure 1-10. Anomaly detection
Finally, another common unsupervised task is association rule learning, in
which the goal is to dig into large amounts of data and discover interesting
relations between attributes. For example, suppose you own a supermarket.
Running an association rule on your sales logs may reveal that people who
purchase barbecue sauce and potato chips also tend to buy steak. Thus, you
may want to place these items close to one another.
Semi-supervised learning
Since labeling data is usually time-consuming and costly, you will often
have plenty of unlabeled instances, and few labeled instances. Some
algorithms can deal with data that’s partially labeled. This is called semi-
```
supervised learning (Figure 1-11).
```
```
Figure 1-11. Semi-supervised learning with two classes (triangles and squares): the unlabeled
```
```
examples (circles) help classify a new instance (the cross) into the triangle class rather than the
```
square class, even though it is closer to the labeled squares
Some photo-hosting services, such as Google Photos, are good examples of
this. Once you upload all your family photos to the service, it automatically
recognizes that the same person A shows up in photos 1, 5, and 11, while
another person B shows up in photos 2, 5, and 7. This is the unsupervised
```
part of the algorithm (clustering). Now all the system needs is for you to tell
```
it who these people are. Just add one label per person and it is able to name
everyone in every photo, which is useful for searching photos.
Most semi-supervised learning algorithms are combinations of
unsupervised and supervised algorithms. For example a clustering
algorithm may be used to group similar instances together, and then every
unlabeled instance can be labeled with the most common label in their
cluster. Once the whole dataset is labeled, it is possible to use any
supervised learning algorithm.
Self-supervised learning
Another approach to Machine Learning involves actually generating a fully
labeled dataset from a fully unlabeled one. Again, once the whole dataset it
labeled, any supervised learning algorithm can be used. This approach is
called self-supervised learning.
For example, if you have a large dataset of unlabeled images, you can
randomly mask a small part of each image and then train a model to recover
```
the original image (Figure 1-12). During training, the masked images are
```
used as the inputs to the model, and the original images are used as the
labels.
3
```
Figure 1-12. Self-supervised learning example: input (left) and target (right)
```
The resulting model may be quite useful in itself, for example to repair
damaged images or to erase unwanted objects from pictures. But more often
than not, a model trained using self-supervised learning is not the final goal.
You usually want to tweak and fine-tune the model for a slightly different
task. One that you actually care about.
For example, suppose that what you really want is to have a pet
classification model: given a picture of any pet, it will tell you what species
it belongs to. If you have a large dataset of unlabeled photos of pets, you
can start by training an image-repairing model using self-supervised
learning. Once it performs well, it must be able to distinguish different pet
```
species: indeed, when it repairs an image of a cat whose face is masked, it
```
knows it must not add a dog’s face. Assuming your model’s architecture
```
allows it (and most neural network architectures do), it is then possible to
```
tweak the model so that it predicts pet species instead of repairing images.
The final step consists of fine-tuning the model on a labeled dataset: the
model already knows what cats, dogs and other pet species look like, so this
step is only needed so the model can learn the mapping between the species
it already knows and the labels we expect from it.
NOTE
Transferring knowledge from one task to another is called transfer learning, and it’s one
of the most important techniques in Machine Learning today, especially when using
```
deep neural networks (i.e., neural networks composed of many layers of neurons). We
```
will discuss this in detail in Part II.
Some people consider self-supervised learning to be a part of unsupervised
learning, since it deals with fully unlabeled datasets. But self-supervised
```
learning uses (generated) labels during training, so in that regard it’s closer
```
to supervised learning. And the term “unsupervised learning” is generally
used when dealing with tasks like clustering, dimensionality reduction or
anomaly detection, whereas self-supervised learning focuses on the same
tasks as supervised learning: mainly classification and regression. In short,
it’s best to treat self-supervised learning as its own category.
Reinforcement Learning
Reinforcement Learning is a very different beast. The learning system,
called an agent in this context, can observe the environment, select and
```
perform actions, and get rewards in return (or penalties in the form of
```
```
negative rewards, as shown in Figure 1-13). It must then learn by itself what
```
is the best strategy, called a policy, to get the most reward over time. A
policy defines what action the agent should choose when it is in a given
situation.
Figure 1-13. Reinforcement Learning
For example, many robots implement Reinforcement Learning algorithms
to learn how to walk. DeepMind’s AlphaGo program is also a good
example of Reinforcement Learning: it made the headlines in May 2017
when it beat Ke Jie, the number one ranked player in the world at the time,
at the game of Go. It learned its winning policy by analyzing millions of
games, and then playing many games against itself. Note that learning was
```
turned off during the games against the champion; AlphaGo was just
```
applying the policy it had learned. As we will see in the next section, this is
called offline learning.
Batch versus Online Learning
Another criterion used to classify Machine Learning systems is whether or
not the system can learn incrementally from a stream of incoming data.
Batch learning
In batch learning, the system is incapable of learning incrementally: it must
be trained using all the available data. This will generally take a lot of time
and computing resources, so it is typically done offline. First the system is
trained, and then it is launched into production and runs without learning
```
anymore; it just applies what it has learned. This is called offline learning.
```
Unfortunately, a model’s performance tends to decay slowly over time,
simply because the world continues to evolve while the model remains
unchanged. This phenomenon is often called model rot or data drift. The
solution is to regularly retrain the model on up-to-date data. How often you
need to do that depends on the use case: if the model classifies pictures of
cats and dogs, its performance will decay very slowly, but if the model
deals with fast-evolving systems, for example making predictions on the
financial market, then it is likely to decay quite fast.
WARNING
Even a model trained to classify pictures of cats and dogs may need to be retrained
regularly, not because cats and dogs will mutate overnight, but because cameras keep
changing, along with image formats, sharpness, brightness, and size ratios. Moreover,
people may love different breeds next year, or they may decide to dress their pets with
tiny hats—who knows?
```
If you want a batch learning system to know about new data (such as a new
```
```
type of spam), you need to train a new version of the system from scratch
```
```
on the full dataset (not just the new data, but also the old data), then replace
```
the old model with the new one. Fortunately, the whole process of training,
evaluating, and launching a Machine Learning system can be automated
```
fairly easily (as we saw in Figure 1-3), so even a batch learning system can
```
adapt to change. Simply update the data and train a new version of the
system from scratch as often as needed.
This solution is simple and often works fine, but training using the full set
of data can take many hours, so you would typically train a new system
only every 24 hours or even just weekly. If your system needs to adapt to
```
rapidly changing data (e.g., to predict stock prices), then you need a more
```
reactive solution.
Also, training on the full set of data requires a lot of computing resources
```
(CPU, memory space, disk space, disk I/O, network I/O, etc.). If you have a
```
lot of data and you automate your system to train from scratch every day, it
will end up costing you a lot of money. If the amount of data is huge, it may
even be impossible to use a batch learning algorithm.
Finally, if your system needs to be able to learn autonomously and it has
```
limited resources (e.g., a smartphone application or a rover on Mars), then
```
carrying around large amounts of training data and taking up a lot of
resources to train for hours every day is a showstopper.
Fortunately, a better option in all these cases is to use algorithms that are
capable of learning incrementally.
Online learning
In online learning, you train the system incrementally by feeding it data
instances sequentially, either individually or in small groups called mini-
batches. Each learning step is fast and cheap, so the system can learn about
```
new data on the fly, as it arrives (see Figure 1-14).
```
Figure 1-14. In online learning, a model is trained and launched into production, and then it keeps
learning as new data comes in
Online learning is useful for systems that need to adapt to change extremely
```
rapidly (e.g., to detect new patterns in the stock market). It is also a good
```
option if you have limited computing resources, for example if the model is
trained on a mobile device.
Online learning algorithms can also be used to train models on huge
```
datasets that cannot fit in one machine’s main memory (this is called out-of-
```
```
core learning). The algorithm loads part of the data, runs a training step on
```
```
that data, and repeats the process until it has run on all of the data (see
```
```
Figure 1-15).
```
WARNING
```
Out-of-core learning is usually done offline (i.e., not on the live system), so online
```
learning can be a confusing name. Think of it as incremental learning.
Figure 1-15. Using online learning to handle huge datasets
One important parameter of online learning systems is how fast they should
adapt to changing data: this is called the learning rate. If you set a high
learning rate, then your system will rapidly adapt to new data, but it will
```
also tend to quickly forget the old data (you don’t want a spam filter to flag
```
```
only the latest kinds of spam it was shown). Conversely, if you set a low
```
```
learning rate, the system will have more inertia; that is, it will learn more
```
slowly, but it will also be less sensitive to noise in the new data or to
```
sequences of nonrepresentative data points (outliers).
```
A big challenge with online learning is that if bad data is fed to the system,
```
the system’s performance will decline, possibly quickly (depending on the
```
```
data quality and learning rate). If it’s a live system, your clients will notice.
```
```
For example, bad data could come from a bug (e.g., a malfunctioning
```
```
sensor on a robot), or it could come from someone trying to game the
```
```
system (e.g., spamming a search engine to try to rank high in search
```
```
results). To reduce this risk, you need to monitor your system closely and
```
```
promptly switch learning off (and possibly revert to a previously working
```
```
state) if you detect a drop in performance. You may also want to monitor
```
the input data and react to abnormal data, for example using an anomaly
```
detection algorithm (see Chapter 9).
```
Instance-Based Versus Model-Based Learning
One more way to categorize Machine Learning systems is by how they
generalize. Most Machine Learning tasks are about making predictions.
This means that given a number of training examples, the system needs to
```
be able to make good predictions for (generalize to) examples it has never
```
seen before. Having a good performance measure on the training data is
```
good, but insufficient; the true goal is to perform well on new instances.
```
There are two main approaches to generalization: instance-based learning
and model-based learning.
Instance-based learning
Possibly the most trivial form of learning is simply to learn by heart. If you
were to create a spam filter this way, it would just flag all emails that are
identical to emails that have already been flagged by users—not the worst
solution, but certainly not the best.
Instead of just flagging emails that are identical to known spam emails,
your spam filter could be programmed to also flag emails that are very
similar to known spam emails. This requires a measure of similarity
```
between two emails. A (very basic) similarity measure between two emails
```
could be to count the number of words they have in common. The system
would flag an email as spam if it has many words in common with a known
spam email.
This is called instance-based learning: the system learns the examples by
heart, then generalizes to new cases by using a similarity measure to
```
compare them to the learned examples (or a subset of them). For example,
```
in Figure 1-16 the new instance would be classified as a triangle because
the majority of the most similar instances belong to that class.
Figure 1-16. Instance-based learning
Model-based learning, and a typical Machine Learning workflow
Another way to generalize from a set of examples is to build a model of
these examples and then use that model to make predictions. This is called
```
model-based learning (Figure 1-17).
```
Figure 1-17. Model-based learning
For example, suppose you want to know if money makes people happy, so
you download the Better Life Index data from the OECD’s website and
```
World Bank stats about gross domestic product (GDP) per capita from
```
OurWorldInData.org. Then you join the tables and sort by GDP per capita.
Table 1-1 shows an excerpt of what you get.
T
a
b
l
e
1
-
1
.
D
o
e
s
m
o
n
e
y
m
a
k
e
p
e
o
p
l
e
h
a
p
p
i
e
r
?
```
Country GDP per capita (USD) Life satisfaction
```
Turkey 28,384 5.5
Hungary 31,008 5.6
France 42,026 6.5
United States 60,236 6.9
New Zealand 42,404 7.3
Australia 48,698 7.3
Denmark 55,938 7.6
```
Let’s plot the data for these countries (Figure 1-18).
```
Figure 1-18. Do you see a trend here?
```
There does seem to be a trend here! Although the data is noisy (i.e., partly
```
```
random), it looks like life satisfaction goes up more or less linearly as the
```
country’s GDP per capita increases. So you decide to model life satisfaction
as a linear function of GDP per capita. This step is called model selection:
you selected a linear model of life satisfaction with just one attribute, GDP
```
per capita (Equation 1-1).
```
Equation 1-1. A simple linear model
```
life_satisfaction = θ0 + θ1 × GDP_per_capita
```
This model has two model parameters, θ and θ . By tweaking these
parameters, you can make your model represent any linear function, as
shown in Figure 1-19.
0 1
4
Figure 1-19. A few possible linear models
Before you can use your model, you need to define the parameter values θ
and θ . How can you know which values will make your model perform
best? To answer this question, you need to specify a performance measure.
```
You can either define a utility function (or fitness function) that measures
```
how good your model is, or you can define a cost function that measures
how bad it is. For Linear Regression problems, people typically use a cost
```
function that measures the distance between the linear model’s predictions
```
```
and the training examples; the objective is to minimize this distance.
```
This is where the Linear Regression algorithm comes in: you feed it your
training examples, and it finds the parameters that make the linear model fit
best to your data. This is called training the model. In our case, the
algorithm finds that the optimal parameter values are θ = 3.75 and θ =
6.78 × 10 .
WARNING
```
Confusingly, the same word “model” can refer to a type of model (e.g., Linear
```
```
Regression), to a fully specified model architecture (e.g., Linear Regression with one
```
```
input and one output), or to the final trained model ready to be used for predictions (e.g.,
```
```
Linear Regression with one input and one output, using θ = 3.75 and θ = 6.78 × 10 ).
```
Model selection consists in choosing the type of model and fully specifying its
architecture. Training a model means running an algorithm to find the model parameters
that will make it best fit the training data, and hopefully make good predictions on new
data.
```
Now the model fits the training data as closely as possible (for a linear
```
```
model), as you can see in Figure 1-20.
```
0
1
0 1
–5
0 1 –5
Figure 1-20. The linear model that fits the training data best
You are finally ready to run the model to make predictions. For example,
say you want to know how happy Cypriots are, and the OECD data does not
have the answer. Fortunately, you can use your model to make a good
```
prediction: you look up Cyprus’s GDP per capita, find $37,655, and then
```
apply your model and find that life satisfaction is likely to be somewhere
around 3.75 + 37,655 × 6.78 × 10 = 6.30.
To whet your appetite, Example 1-1 shows the Python code that loads the
data, separates the inputs X from the labels y, creates a scatterplot for
visualization, and then trains a linear model and makes a prediction.
Example 1-1. Training and running a linear model using Scikit-Learn
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
# Download and prepare the data
```
data_root = "https://github.com/ageron/data/raw/main/"
```
```
lifesat = pd.read_csv(data_root + "lifesat/lifesat.csv")
```
```
X = lifesat[["GDP per capita (USD)"]].values
```
```
y = lifesat[["Life satisfaction"]].values
```
# Visualize the data
```
lifesat.plot(kind='scatter', grid=True,
```
```
x="GDP per capita (USD)", y="Life satisfaction")
```
```
plt.axis([23_500, 62_500, 4, 9])
```
```
plt.show()
```
# Select a linear model
```
model = LinearRegression()
```
# Train the model
```
model.fit(X, y)
```
# Make a prediction for Cyprus
```
X_new = [[37_655.2]] # Cyprus' GDP per capita in 2020
```
```
print(model.predict(X_new)) # outputs [[6.30165767]]
```
–5
5
NOTE
If you had used an instance-based learning algorithm instead, you would have found that
```
Israel has the closest GDP per capita to that of Cyprus ($38,341), and since the OECD
```
data tells us that Israelis’ life satisfaction is 7.2, you would have predicted a life
satisfaction of 7.2 for Cyprus. If you zoom out a bit and look at the two next-closest
countries, you will find Lithuania and Slovenia, both with a life satisfaction of 5.9.
Averaging these three values, you get 6.33, which is pretty close to your model-based
```
prediction. This simple algorithm is called k-Nearest Neighbors regression (in this
```
```
example, k = 3).
```
Replacing the Linear Regression model with k-Nearest Neighbors regression in the
previous code is as simple as replacing these two lines:
from sklearn.linear_model import LinearRegression
```
model = LinearRegression()
```
with these two:
from sklearn.neighbors import KNeighborsRegressor
```
model = KNeighborsRegressor(n_neighbors=3)
```
If all went well, your model will make good predictions. If not, you may
```
need to use more attributes (employment rate, health, air pollution, etc.), get
```
more or better-quality training data, or perhaps select a more powerful
```
model (e.g., a Polynomial Regression model).
```
In summary:
You studied the data.
You selected a model.
```
You trained it on the training data (i.e., the learning algorithm
```
searched for the model parameter values that minimize a cost
```
function).
```
Finally, you applied the model to make predictions on new cases
```
(this is called inference), hoping that this model will generalize
```
well.
This is what a typical Machine Learning project looks like. In Chapter 2
you will experience this firsthand by going through a project end to end.
We have covered a lot of ground so far: you now know what Machine
Learning is really about, why it is useful, what some of the most common
categories of ML systems are, and what a typical project workflow looks
like. Now let’s look at what can go wrong in learning and prevent you from
making accurate predictions.
Main Challenges of Machine Learning
In short, since your main task is to select a model and train it on some data,
the two things that can go wrong are “bad model” and “bad data.” Let’s
start with examples of bad data.
Insufficient Quantity of Training Data
For a toddler to learn what an apple is, all it takes is for you to point to an
```
apple and say “apple” (possibly repeating this procedure a few times). Now
```
the child is able to recognize apples in all sorts of colors and shapes.
Genius.
```
Machine Learning is not quite there yet; it takes a lot of data for most
```
Machine Learning algorithms to work properly. Even for very simple
problems you typically need thousands of examples, and for complex
problems such as image or speech recognition you may need millions of
```
examples (unless you can reuse parts of an existing model).
```
THE UNREASONABLE EFFECTIVENESS OF DATA
In a famous paper published in 2001, Microsoft researchers Michele
Banko and Eric Brill showed that very different Machine Learning
algorithms, including fairly simple ones, performed almost identically
well on a complex problem of natural language disambiguation once
```
they were given enough data (as you can see in Figure 1-21).
```
6
Figure 1-21. The importance of data versus algorithms
As the authors put it, “these results suggest that we may want to
reconsider the trade-off between spending time and money on algorithm
development versus spending it on corpus development.”
The idea that data matters more than algorithms for complex problems
was further popularized by Peter Norvig et al. in a paper titled “The
Unreasonable Effectiveness of Data”, published in 2009. It should be
noted, however, that small- and medium-sized datasets are still very
common, and it is not always easy or cheap to get extra training data—
so don’t abandon algorithms just yet.
Nonrepresentative Training Data
In order to generalize well, it is crucial that your training data be
representative of the new cases you want to generalize to. This is true
whether you use instance-based learning or model-based learning.
For example, the set of countries we used earlier for training the linear
```
model was not perfectly representative; it did not contain any country with
```
a GDP per capita lower than $23,500 or higher than $62,500. Figure 1-22
shows what the data looks like when you add such countries.
7
8
Figure 1-22. A more representative training sample
If you train a linear model on this data, you get the solid line, while the old
model is represented by the dotted line. As you can see, not only does
adding a few missing countries significantly alter the model, but it makes it
clear that such a simple linear model is probably never going to work well.
It seems that very rich countries are not happier than moderately rich
```
countries (in fact, they seem slightly unhappier!), and conversely some poor
```
countries seem happier than many rich countries.
By using a nonrepresentative training set, we trained a model that is
unlikely to make accurate predictions, especially for very poor and very
rich countries.
It is crucial to use a training set that is representative of the cases you want
to generalize to. This is often harder than it sounds: if the sample is too
```
small, you will have sampling noise (i.e., nonrepresentative data as a result
```
```
of chance), but even very large samples can be nonrepresentative if the
```
sampling method is flawed. This is called sampling bias.
EXAMPLES OF SAMPLING BIAS
Perhaps the most famous example of sampling bias happened during
the US presidential election in 1936, which pitted Landon against
```
Roosevelt: the Literary Digest conducted a very large poll, sending mail
```
to about 10 million people. It got 2.4 million answers, and predicted
with high confidence that Landon would get 57% of the votes. Instead,
Roosevelt won with 62% of the votes. The flaw was in the Literary
Digest’s sampling method:
First, to obtain the addresses to send the polls to, the Literary
Digest used telephone directories, lists of magazine
subscribers, club membership lists, and the like. All of these
lists tended to favor wealthier people, who were more likely to
```
vote Republican (hence Landon).
```
Second, less than 25% of the people who were polled
answered. Again this introduced a sampling bias, by
potentially ruling out people who didn’t care much about
politics, people who didn’t like the Literary Digest, and other
key groups. This is a special type of sampling bias called
nonresponse bias.
Here is another example: say you want to build a system to recognize
funk music videos. One way to build your training set is to search for
“funk music” on YouTube and use the resulting videos. But this
assumes that YouTube’s search engine returns a set of videos that are
representative of all the funk music videos on YouTube. In reality, the
```
search results are likely to be biased toward popular artists (and if you
```
live in Brazil you will get a lot of “funk carioca” videos, which sound
```
nothing like James Brown). On the other hand, how else can you get a
```
large training set?
Poor-Quality Data
```
Obviously, if your training data is full of errors, outliers, and noise (e.g.,
```
```
due to poor-quality measurements), it will make it harder for the system to
```
detect the underlying patterns, so your system is less likely to perform well.
It is often well worth the effort to spend time cleaning up your training data.
The truth is, most data scientists spend a significant part of their time doing
just that. The following are a couple examples of when you’d want to clean
up training data:
If some instances are clearly outliers, it may help to simply discard
them or try to fix the errors manually.
```
If some instances are missing a few features (e.g., 5% of your
```
```
customers did not specify their age), you must decide whether you
```
want to ignore this attribute altogether, ignore these instances, fill
```
in the missing values (e.g., with the median age), or train one
```
model with the feature and one model without it.
Irrelevant Features
As the saying goes: garbage in, garbage out. Your system will only be
capable of learning if the training data contains enough relevant features
and not too many irrelevant ones. A critical part of the success of a Machine
Learning project is coming up with a good set of features to train on. This
process, called feature engineering, involves the following steps:
```
Feature selection (selecting the most useful features to train on
```
```
among existing features)
```
```
Feature extraction (combining existing features to produce a more
```
useful one—as we saw earlier, dimensionality reduction algorithms
```
can help)
```
Creating new features by gathering new data
Now that we have looked at many examples of bad data, let’s look at a
couple examples of bad algorithms.
Overfitting the Training Data
Say you are visiting a foreign country and the taxi driver rips you off. You
might be tempted to say that all taxi drivers in that country are thieves.
Overgeneralizing is something that we humans do all too often, and
unfortunately machines can fall into the same trap if we are not careful. In
Machine Learning this is called overfitting: it means that the model
performs well on the training data, but it does not generalize well.
Figure 1-23 shows an example of a high-degree polynomial life satisfaction
model that strongly overfits the training data. Even though it performs
much better on the training data than the simple linear model, would you
really trust its predictions?
Figure 1-23. Overfitting the training data
Complex models such as deep neural networks can detect subtle patterns in
```
the data, but if the training set is noisy, or if it is too small (which
```
```
introduces sampling noise), then the model is likely to detect patterns in the
```
noise itself. Obviously these patterns will not generalize to new instances.
For example, say you feed your life satisfaction model many more
attributes, including uninformative ones such as the country’s name. In that
case, a complex model may detect patterns like the fact that all countries in
the training data with a w in their name have a life satisfaction greater than
```
7: New Zealand (7.3), Norway (7.6), Sweden (7.3), and Switzerland (7.5).
```
How confident are you that the w-satisfaction rule generalizes to Rwanda or
Zimbabwe? Obviously this pattern occurred in the training data by pure
chance, but the model has no way to tell whether a pattern is real or simply
the result of noise in the data.
WARNING
Overfitting happens when the model is too complex relative to the amount and noisiness
of the training data. Here are possible solutions:
```
Simplify the model by selecting one with fewer parameters (e.g., a linear
```
```
model rather than a high-degree polynomial model), by reducing the number
```
of attributes in the training data, or by constraining the model.
Gather more training data.
```
Reduce the noise in the training data (e.g., fix data errors and remove outliers).
```
Constraining a model to make it simpler and reduce the risk of overfitting is
called regularization. For example, the linear model we defined earlier has
two parameters, θ and θ . This gives the learning algorithm two degrees of
freedom to adapt the model to the training data: it can tweak both the height
```
(θ ) and the slope (θ ) of the line. If we forced θ = 0, the algorithm would
```
have only one degree of freedom and would have a much harder time fitting
the data properly: all it could do is move the line up or down to get as close
as possible to the training instances, so it would end up around the mean. A
very simple model indeed! If we allow the algorithm to modify θ but we
0 1
0 1 1
1
force it to keep it small, then the learning algorithm will effectively have
somewhere in between one and two degrees of freedom. It will produce a
model that’s simpler than one with two degrees of freedom, but more
complex than one with just one. You want to find the right balance between
fitting the training data perfectly and keeping the model simple enough to
ensure that it will generalize well.
Figure 1-24 shows three models. The dotted line represents the original
```
model that was trained on the countries represented as circles (without the
```
```
countries represented as squares), the solid line is our second model trained
```
```
with all countries (circles and squares), and the dashed line is a model
```
trained with the same data as the first model but with a regularization
constraint. You can see that regularization forced the model to have a
```
smaller slope: this model does not fit the training data (circles) as well as
```
the first model, but it actually generalizes better to new examples that it did
```
not see during training (squares).
```
Figure 1-24. Regularization reduces the risk of overfitting
The amount of regularization to apply during learning can be controlled by
a hyperparameter. A hyperparameter is a parameter of a learning algorithm
```
(not of the model). As such, it is not affected by the learning algorithm
```
```
itself; it must be set prior to training and remains constant during training. If
```
you set the regularization hyperparameter to a very large value, you will get
```
an almost flat model (a slope close to zero); the learning algorithm will
```
almost certainly not overfit the training data, but it will be less likely to find
a good solution. Tuning hyperparameters is an important part of building a
```
Machine Learning system (you will see a detailed example in the next
```
```
chapter).
```
Underfitting the Training Data
As you might guess, underfitting is the opposite of overfitting: it occurs
when your model is too simple to learn the underlying structure of the data.
```
For example, a linear model of life satisfaction is prone to underfit; reality
```
is just more complex than the model, so its predictions are bound to be
inaccurate, even on the training examples.
Here are the main options for fixing this problem:
Select a more powerful model, with more parameters.
```
Feed better features to the learning algorithm (feature engineering).
```
```
Reduce the constraints on the model (e.g., reduce the regularization
```
```
hyperparameter).
```
Stepping Back
By now you know a lot about Machine Learning. However, we went
through so many concepts that you may be feeling a little lost, so let’s step
back and look at the big picture:
Machine Learning is about making machines get better at some
task by learning from data, instead of having to explicitly code
rules.
There are many different types of ML systems: supervised or not,
batch or online, instance-based or model-based.
In an ML project you gather data in a training set, and you feed the
training set to a learning algorithm. If the algorithm is model-
based, it tunes some parameters to fit the model to the training set
```
(i.e., to make good predictions on the training set itself), and then
```
hopefully it will be able to make good predictions on new cases as
well. If the algorithm is instance-based, it just learns the examples
by heart and generalizes to new instances by using a similarity
measure to compare them to the learned instances.
The system will not perform well if your training set is too small,
or if the data is not representative, is noisy, or is polluted with
```
irrelevant features (garbage in, garbage out). Lastly, your model
```
```
needs to be neither too simple (in which case it will underfit) nor
```
```
too complex (in which case it will overfit).
```
There’s just one last important topic to cover: once you have trained a
model, you don’t want to just “hope” it generalizes to new cases. You want
to evaluate it and fine-tune it if necessary. Let’s see how to do that.
Testing and Validating
The only way to know how well a model will generalize to new cases is to
actually try it out on new cases. One way to do that is to put your model in
production and monitor how well it performs. This works well, but if your
model is horribly bad, your users will complain—not the best idea.
A better option is to split your data into two sets: the training set and the
test set. As these names imply, you train your model using the training set,
and you test it using the test set. The error rate on new cases is called the
```
generalization error (or out-of-sample error), and by evaluating your model
```
on the test set, you get an estimate of this error. This value tells you how
well your model will perform on instances it has never seen before.
```
If the training error is low (i.e., your model makes few mistakes on the
```
```
training set) but the generalization error is high, it means that your model is
```
overfitting the training data.
TIP
It is common to use 80% of the data for training and hold out 20% for testing. However,
this depends on the size of the dataset: if it contains 10 million instances, then holding
out 1% means your test set will contain 100,000 instances, probably more than enough
to get a good estimate of the generalization error.
Hyperparameter Tuning and Model Selection
Evaluating a model is simple enough: just use a test set. But suppose you
```
are hesitating between two types of models (say, a linear model and a
```
```
polynomial model): how can you decide between them? One option is to
```
train both and compare how well they generalize using the test set.
Now suppose that the linear model generalizes better, but you want to apply
some regularization to avoid overfitting. The question is, how do you
choose the value of the regularization hyperparameter? One option is to
train 100 different models using 100 different values for this
hyperparameter. Suppose you find the best hyperparameter value that
produces a model with the lowest generalization error—say, just 5% error.
You launch this model into production, but unfortunately it does not
perform as well as expected and produces 15% errors. What just happened?
The problem is that you measured the generalization error multiple times on
the test set, and you adapted the model and hyperparameters to produce the
best model for that particular set. This means that the model is unlikely to
perform as well on new data.
```
A common solution to this problem is called holdout validation (Figure 1-
```
```
25): you simply hold out part of the training set to evaluate several
```
candidate models and select the best one. The new held-out set is called the
```
validation set (or the development set, or dev set). More specifically, you
```
train multiple models with various hyperparameters on the reduced training
```
set (i.e., the full training set minus the validation set), and you select the
```
model that performs best on the validation set. After this holdout validation
```
process, you train the best model on the full training set (including the
```
```
validation set), and this gives you the final model. Lastly, you evaluate this
```
final model on the test set to get an estimate of the generalization error.
Figure 1-25. Model selection using holdout validation
This solution usually works quite well. However, if the validation set is too
small, then model evaluations will be imprecise: you may end up selecting a
suboptimal model by mistake. Conversely, if the validation set is too large,
then the remaining training set will be much smaller than the full training
set. Why is this bad? Well, since the final model will be trained on the full
training set, it is not ideal to compare candidate models trained on a much
smaller training set. It would be like selecting the fastest sprinter to
participate in a marathon. One way to solve this problem is to perform
repeated cross-validation, using many small validation sets. Each model is
evaluated once per validation set after it is trained on the rest of the data. By
averaging out all the evaluations of a model, you get a much more accurate
measure of its performance. There is a drawback, however: the training
time is multiplied by the number of validation sets.
Data Mismatch
In some cases, it’s easy to get a large amount of data for training, but this
data probably won’t be perfectly representative of the data that will be used
in production. For example, suppose you want to create a mobile app to
take pictures of flowers and automatically determine their species. You can
easily download millions of pictures of flowers on the web, but they won’t
be perfectly representative of the pictures that will actually be taken using
the app on a mobile device. Perhaps you only have 1,000 representative
```
pictures (i.e., actually taken with the app).
```
In this case, the most important rule to remember is that both the validation
set and the test set must be as representative as possible of the data you
expect to use in production, so they should be composed exclusively of
representative pictures: you can shuffle them and put half in the validation
```
set and half in the test set (making sure that no duplicates or near-duplicates
```
```
end up in both sets). After training your model on the web pictures, if you
```
observe that the performance of the model on the validation set is
disappointing, you will not know whether this is because your model has
overfit the training set, or whether this is just due to the mismatch between
the web pictures and the mobile app pictures.
```
One solution is to hold out some of the training pictures (from the web) in
```
```
yet another set that Andrew Ng dubbed the train-dev set (Figure 1-26).
```
```
After the model is trained (on the training set, not on the train-dev set), you
```
can evaluate it on the train-dev set. If the model performs poorly, then it
must have overfit the training set, so you should try to simplify or
regularize the model, get more training data, and clean up the training data.
But if it performs well on the train-dev set, then you can evaluate the model
on the dev set. If it performs poorly, then the problem must be coming from
the data mismatch. You can try to tackle this problem by preprocessing the
web images to make them look more like the pictures that will be taken by
the mobile app, and then retraining the model. Once you have a model that
performs well on both the train-dev set and the dev set, you can evaluate it
one last time on the test set to know how well it is likely to perform in
production.
```
Figure 1-26. When real data is scarce (right), you may use similar abundant data (left) for training
```
and hold out some of it in a train-dev set to evaluate overfitting. The real data is then used to
```
evaluate data-mismatch (dev set), and to evaluate the final model’s performance (test set).
```
NO FREE LUNCH THEOREM
A model is a simplified representation of the data. The simplifications
are meant to discard the superfluous details that are unlikely to
generalize to new instances. When you select a particular type of
model, you are implicitly making assumptions about the data. For
example, if you choose a linear model, you are implicitly assuming that
the data is fundamentally linear and that the distance between the
instances and the straight line is just noise, which can safely be ignored.
In a famous 1996 paper, David Wolpert demonstrated that if you make
absolutely no assumption about the data, then there is no reason to
prefer one model over any other. This is called the No Free Lunch
```
(NFL) theorem. For some datasets the best model is a linear model,
```
while for other datasets it is a neural network. There is no model that is
```
a priori guaranteed to work better (hence the name of the theorem). The
```
only way to know for sure which model is best is to evaluate them all.
Since this is not possible, in practice you make some reasonable
assumptions about the data and evaluate only a few reasonable models.
For example, for simple tasks you may evaluate linear models with
various levels of regularization, and for a complex problem you may
evaluate various neural networks.
Exercises
In this chapter we have covered some of the most important concepts in
Machine Learning. In the next chapters we will dive deeper and write more
code, but before we do, make sure you can answer the following questions:
1. How would you define Machine Learning?
2. Can you name four types of applications where it shines?
3. What is a labeled training set?
9
4. What are the two most common supervised tasks?
5. Can you name four common unsupervised tasks?
6. What type of algorithm would you use to allow a robot to walk in
various unknown terrains?
7. What type of algorithm would you use to segment your customers
into multiple groups?
8. Would you frame the problem of spam detection as a supervised
learning problem or an unsupervised learning problem?
9. What is an online learning system?
10. What is out-of-core learning?
11. What type of algorithm relies on a similarity measure to make
predictions?
12. What is the difference between a model parameter and a model
hyperparameter?
13. What do model-based algorithms search for? What is the most
common strategy they use to succeed? How do they make
predictions?
14. Can you name four of the main challenges in Machine Learning?
15. If your model performs great on the training data but generalizes
poorly to new instances, what is happening? Can you name three
possible solutions?
16. What is a test set, and why would you want to use it?
17. What is the purpose of a validation set?
18. What is the train-dev set, when do you need it, and how do you use
it?
19. What can go wrong if you tune hyperparameters using the test set?
Solutions to these exercises are available at the end of this chapter’s
notebook, at https://homl.info/colab3.
1 Fun fact: this odd-sounding name is a statistics term introduced by Francis Galton while he
was studying the fact that the children of tall people tend to be shorter than their parents. Since
the children were shorter, he called this regression to the mean. This name was then applied to
the methods he used to analyze correlations between variables.
2 Notice how animals are rather well separated from vehicles and how horses are close to deer
but far from birds. Figure reproduced with permission from Richard Socher et al., “Zero-Shot
Learning Through Cross-Modal Transfer,” Proceedings of the 26th International Conference
```
on Neural Information Processing Systems 1 (2013): 935–943.
```
3 That’s when the system works perfectly. In practice it often creates a few clusters per person,
and sometimes mixes up two people who look alike, so you may need to provide a few labels
per person and manually clean up some clusters.
```
4 By convention, the Greek letter θ (theta) is frequently used to represent model parameters.
```
```
5 It’s OK if you don’t understand all the code yet; I will present Scikit-Learn in the following
```
chapters.
6 For example, knowing whether to write “to,” “two,” or “too,” depending on the context.
7 Figure reproduced with permission from Michele Banko and Eric Brill, “Scaling to Very Very
Large Corpora for Natural Language Disambiguation,” Proceedings of the 39th Annual
```
Meeting of the Association for Computational Linguistics (2001): 26–33.
```
8 Peter Norvig et al., “The Unreasonable Effectiveness of Data,” IEEE Intelligent Systems 24,
```
no. 2 (2009): 8–12.
```
9 David Wolpert, “The Lack of A Priori Distinctions Between Learning Algorithms,” Neural
```
Computation 8, no. 7 (1996): 1341–1390.
```
Chapter 2. End-to-End Machine
Learning Project
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take advantage
of these technologies long before the official release of these titles.
This will be the 2nd chapter of the final book. Notebooks are available on
GitHub at https://github.com/ageron/handson-ml3. Datasets are available at
```
https://github.com/ageron/data.
```
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this chapter,
please reach out to the editoor at ntache@oreilly.com.
In this chapter you will work through an example project end to end, pretending
to be a recently hired data scientist at a real estate company. The example
```
project is fictitious; the goal is to illustrate the main steps of a Machine
```
Learning project, not to learn anything about the real estate business. Here are
the main steps we will walk through:
1. Look at the big picture.
2. Get the data.
3. Explore and visualize the data to gain insights.
4. Prepare the data for Machine Learning algorithms.
5. Select a model and train it.
6. Fine-tune your model.
7. Present your solution.
8. Launch, monitor, and maintain your system.
Working with Real Data
When you are learning about Machine Learning, it is best to experiment with
real-world data, not artificial datasets. Fortunately, there are thousands of open
datasets to choose from, ranging across all sorts of domains. Here are a few
places you can look to get data:
Popular open data repositories
OpenML.org
Kaggle.com
PapersWithCode.com
UC Irvine Machine Learning Repository
Amazon’s AWS datasets
TensorFlow Datasets
```
Meta portals (they list open data repositories)
```
DataPortals.org
OpenDataMonitor.eu
Other pages listing many popular open data repositories
Wikipedia’s list of Machine Learning datasets
Quora.com
The datasets subreddit
In this chapter we’ll use the California Housing Prices dataset from the StatLib
```
repository (see Figure 2-1). This dataset is based on data from the 1990
```
```
California census. It is not exactly recent (a nice house in the Bay Area was still
```
```
affordable at the time), but it has many qualities for learning, so we will pretend
```
1
it is recent data. For teaching purposes I’ve added a categorical attribute and
removed a few features.
Figure 2-1. California housing prices
Look at the Big Picture
Welcome to the Machine Learning Housing Corporation! Your first task is to
use California census data to build a model of housing prices in the state. This
data includes metrics such as the population, median income, and median
housing price for each block group in California. Block groups are the smallest
```
geographical unit for which the US Census Bureau publishes sample data (a
```
```
block group typically has a population of 600 to 3,000 people). I will call them
```
“districts” for short.
Your model should learn from this data and be able to predict the median
housing price in any district, given all the other metrics.
TIP
Since you are a well-organized data scientist, the first thing you should do is pull out your
```
Machine Learning project checklist. You can start with the one in Appendix A; it should
```
work reasonably well for most Machine Learning projects, but make sure to adapt it to your
needs. In this chapter we will go through many checklist items, but we will also skip a few,
either because they are self-explanatory or because they will be discussed in later chapters.
Frame the Problem
The first question to ask your boss is what exactly the business objective is.
Building a model is probably not the end goal. How does the company expect
to use and benefit from this model? Knowing the objective is important because
it will determine how you frame the problem, which algorithms you will select,
which performance measure you will use to evaluate your model, and how
much effort you will spend tweaking it.
```
Your boss answers that your model’s output (a prediction of a district’s median
```
```
housing price) will be fed to another Machine Learning system (see Figure 2-2),
```
along with many other signals. This downstream system will determine
whether it is worth investing in a given area or not. Getting this right is critical,
as it directly affects revenue.
2
Figure 2-2. A Machine Learning pipeline for real estate investments
PIPELINES
A sequence of data processing components is called a data pipeline.
Pipelines are very common in Machine Learning systems, since there is a
lot of data to manipulate and many data transformations to apply.
Components typically run asynchronously. Each component pulls in a large
amount of data, processes it, and spits out the result in another data store.
Then, some time later, the next component in the pipeline pulls this data
and spits out its own output. Each component is fairly self-contained: the
interface between components is simply the data store. This makes the
```
system simple to grasp (with the help of a data flow graph), and different
```
teams can focus on different components. Moreover, if a component breaks
```
down, the downstream components can often continue to run normally (at
```
```
least for a while) by just using the last output from the broken component.
```
This makes the architecture quite robust.
On the other hand, a broken component can go unnoticed for some time if
proper monitoring is not implemented. The data gets stale and the overall
system’s performance drops.
```
The next question to ask your boss is what the current solution looks like (if
```
```
any). The current situation will often give you a reference for performance, as
```
well as insights on how to solve the problem. Your boss answers that the district
housing prices are currently estimated manually by experts: a team gathers up-
to-date information about a district, and when they cannot get the median
housing price, they estimate it using complex rules.
```
This is costly and time-consuming, and their estimates are not great; in cases
```
where they manage to find out the actual median housing price, they often
realize that their estimates were off by more than 30%. This is why the
company thinks that it would be useful to train a model to predict a district’s
median housing price, given other data about that district. The census data
looks like a great dataset to exploit for this purpose, since it includes the median
housing prices of thousands of districts, as well as other data.
With all this information, you are now ready to start designing your system.
First, determine what kind of training supervision the model will need: is it
supervised, unsupervised, semi-supervised, self-supervised, or Reinforcement
Learning? And is it a classification task, a regression task, or something else?
Should you use batch learning or online learning techniques? Before you read
on, pause and try to answer these questions for yourself.
Have you found the answers? Let’s see: it is clearly a typical supervised
```
learning task, since the model can be trained with labeled examples (each
```
instance comes with the expected output, i.e., the district’s median housing
```
price). It is also a typical regression task, since the model will be asked to
```
predict a value. More specifically, this is a multiple regression problem, since
```
the system will use multiple features to make a prediction (it will use the
```
```
district’s population, the median income, etc.). It is also a univariate regression
```
problem, since we are only trying to predict a single value for each district. If
we were trying to predict multiple values per district, it would be a multivariate
regression problem. Finally, there is no continuous flow of data coming into the
system, there is no particular need to adjust to changing data rapidly, and the
data is small enough to fit in memory, so plain batch learning should do just
fine.
TIP
If the data were huge, you could either split your batch learning work across multiple servers
```
(using the MapReduce technique) or use an online learning technique.
```
Select a Performance Measure
Your next step is to select a performance measure. A typical performance
```
measure for regression problems is the Root Mean Square Error (RMSE). It
```
gives an idea of how much error the system typically makes in its predictions,
with a higher weight given to large errors. Equation 2-1 shows the
mathematical formula to compute the RMSE.
```
Equation 2-1. Root Mean Square Error (RMSE)
```
```
RMSE (X, h) =
```
1
m
m
∑
```
i=1
```
```
(h (x(i)) − y(i))
```
2

⎷
NOTATIONS
This equation introduces several very common Machine Learning notations
that I will use throughout this book:
m is the number of instances in the dataset you are measuring the
RMSE on.
For example, if you are evaluating the RMSE on a
validation set of 2,000 districts, then m = 2,000.
```
x is a vector of all the feature values (excluding the label) of the
```
```
i instance in the dataset, and y is its label (the desired output
```
```
value for that instance).
```
For example, if the first district in the dataset is located at
longitude –118.29°, latitude 33.91°, and it has 1,416
inhabitants with a median income of $38,372, and the
```
median house value is $156,400 (ignoring the other
```
```
features for now), then:
```
```
x(1) =
```
```
and:
```
```
y(1) = 156,400
```
```
X is a matrix containing all the feature values (excluding labels) of
```
all instances in the dataset. There is one row per instance, and the
```
i row is equal to the transpose of x , noted (x ) .
```
For example, if the first district is as just described, then
the matrix X looks like this:
```
(i)
```
```
th (i)
```
⎛
⎝
−118.29
33.91
1,416
38,372
⎞
⎠
```
th (i) (i) ⊺ 3
```
```
X = = ( )
```
h is your system’s prediction function, also called a hypothesis.
When your system is given an instance’s feature vector x , it
```
outputs a predicted value ŷ = h(x ) for that instance (ŷ is
```
```
pronounced “y-hat”).
```
For example, if your system predicts that the median
housing price in the first district is $158,400, then ŷ =
```
h(x ) = 158,400. The prediction error for this district is
```
ŷ – y = 2,000.
```
RMSE(X,h) is the cost function measured on the set of examples
```
using your hypothesis h.
```
We use lowercase italic font for scalar values (such as m or y ) and
```
```
function names (such as h), lowercase bold font for vectors (such as x ),
```
```
and uppercase bold font for matrices (such as X).
```
Even though the RMSE is generally the preferred performance measure for
regression tasks, in some contexts you may prefer to use another function. For
example, suppose that there are many outlier districts. In that case, you may
```
consider using the mean absolute error (MAE, also called the average absolute
```
```
deviation; see Equation 2-2):
```
```
Equation 2-2. Mean absolute error (MAE)
```
```
MAE (X, h) =
```
1
m
m
∑
```
i=1
```
```
h (x(i)) − y(i)
```
Both the RMSE and the MAE are ways to measure the distance between two
```
vectors: the vector of predictions and the vector of target values. Various
```
⎛
⎜
⎝
```
(x(1))
```
⊺
```
(x(2))
```
⊺
⋮
```
(x(1999))
```
⊺
```
(x(2000))
```
⊺
⎞
⎟
⎠
−118.29 33.91 1,416 38,372
⋮ ⋮ ⋮ ⋮
```
(i)
```
```
(i) (i)
```
```
(1)
```
```
(1)
```
```
(1) (1)
```
```
(i)
```
```
(i)
```
distance measures, or norms, are possible:
```
Computing the root of a sum of squares (RMSE) corresponds to the
```
Euclidean norm: this is the notion of distance you are familiar with. It
```
is also called the ℓ norm, noted ∥ · ∥ (or just ∥ · ∥).
```
```
Computing the sum of absolutes (MAE) corresponds to the ℓ norm,
```
noted ∥ · ∥ . This is sometimes called the Manhattan norm because it
measures the distance between two points in a city if you can only
travel along orthogonal city blocks.
More generally, the ℓ norm of a vector v containing n elements is
```
defined as ∥v∥ = (|v | + |v | + ... + |v | ) . ℓ gives the number of
```
nonzero elements in the vector, and ℓ gives the maximum absolute
value in the vector.
The higher the norm index, the more it focuses on large values and
neglects small ones. This is why the RMSE is more sensitive to
```
outliers than the MAE. But when outliers are exponentially rare (like
```
```
in a bell-shaped curve), the RMSE performs very well and is generally
```
preferred.
Check the Assumptions
Lastly, it is good practice to list and verify the assumptions that have been made
```
so far (by you or others); this can help you catch serious issues early on. For
```
example, the district prices that your system outputs are going to be fed into a
downstream Machine Learning system, and you assume that these prices are
going to be used as such. But what if the downstream system converts the
```
prices into categories (e.g., “cheap,” “medium,” or “expensive”) and then uses
```
those categories instead of the prices themselves? In this case, getting the price
```
perfectly right is not important at all; your system just needs to get the category
```
right. If that’s so, then the problem should have been framed as a classification
task, not a regression task. You don’t want to find this out after working on a
regression system for months.
Fortunately, after talking with the team in charge of the downstream system,
you are confident that they do indeed need the actual prices, not just categories.
Great! You’re all set, the lights are green, and you can start coding now!
2 2
1
1
k
k 0 k 1 k n k 1/k 0
∞
Get the Data
It’s time to get your hands dirty. Don’t hesitate to pick up your laptop and walk
through the code examples. As I mentioned in the preface, all the code
examples in this book are open source and available online at
```
https://github.com/ageron/handson-ml3, as Jupyter notebooks, which are
```
interactive documents containing text, images, and executable code snippets
```
(Python in our case). In this book I will assume you are running these
```
notebooks on Google Colab, a free service that lets you run any Jupyter
notebook directly online, without having to install anything on your machine.
```
But if you want to use another online platform (e.g., Kaggle kernels) or if you
```
want to install everything locally on your own machine, please see the
```
instructions on this project’s home page at the GitHub page (above).
```
Running the Code Examples Using Google Colab
First, open a web browser and visit https://homl.info/colab3: this will lead you
to Google Colab, and it will display the list of Jupyter notebooks for this book
```
(see Figure 2-3). You will find one notebook per chapter, plus a few extra
```
notebooks, including an extra chapter on Support Vector Machines, and
tutorials for NumPy, Matplotlib, Pandas, Linear Algebra and Differential
Calculus.
Figure 2-3. List of notebooks in Google Colab
For example, if you click on
02_end_to_end_machine_learning_project.ipynb, the
```
notebook from Chapter 2 will open up in Google Colab (see Figure 2-4).
```
Figure 2-4. Your notebook in Google Colab
A Jupyter notebook is composed of a list of cells. Each cell contains either
```
executable code or text. Try double-clicking on the first text cell (which
```
```
contains the sentence “Welcome to Machine Learning Housing Corp.!”). This
```
will open the cell for editing. Notice that Jupyter notebooks use Markdown
```
syntax for formatting (e.g., **bold**, *italics*, # Title, [url]
```
```
(link text), and so on). Try modifying this text, then press Shift-Enter to
```
see the result.
Next, create a new code cell by selecting Insert > Code cell from the menu.
Alternatively, you can click the + Code button in the toolbar, or hover your
mouse over the bottom of a cell until you see + Code and + Text appear,
then click on + Code. In the new code cell, type some Python code, such as
```
print("Hello World") then press Shift-Enter to run this code (or click
```
```
on the ▷ button on the left side of the cell).
```
If you are not logged in to your Google Account, you will be asked to login
```
now (if you don’t already have a Google account, you will need to create one).
```
Once you are logged in and you try to run the code, you will get a security
warning telling you that this notebook was not authored by Google. Indeed, a
malicious person could create a notebook that tries to trick you into entering
your Google credentials so they can access your personal data. So before you
```
run a notebook, always make sure you trust its author (or double-check what
```
```
each code cell will do before running it). Now, assuming you trust me (or you
```
```
plan to check every code cell), you can go ahead and click “Run anyway”.
```
Colab will then allocate a new Runtime for you: this is a free virtual machine
located on Google’s servers, containing a bunch of tools and Python libraries,
```
including everything we need for most chapters (in some chapters, we will need
```
```
to run a command to install some additional libraries). This will take a few
```
seconds. Next, Colab will automatically connect to this Runtime and use it to
execute your new code cell. Importantly, the code runs on the Runtime, not on
your machine. The code’s output will be displayed under the cell. Congrats,
you’ve run some Python code on Colab!
TIP
```
To insert a new code cell, you can also type Ctrl-m (or Cmd-m on macOS) followed by a (to
```
```
insert above the active cell) or b (to insert below). There are many other keyboard shortcuts
```
```
available: you can view and edit them by typing Ctrl-m (or Cmd-m) then h. If you choose to
```
run the notebooks on Kaggle or on your own machine using JupyterLab or an IDE such as
Visual Studio Code with the Jupyter extension, you will see some minor differences:
Runtimes are called Kernels, the User Interface and keyboard shortcuts are slightly different,
etc. But switching from one Jupyter environment to another is not too hard.
Saving Your Code Changes and Your Data
You can make changes to a Colab notebook, and they will persist for as long as
you keep your browser tab open, but once you close it, the changes will be lost.
To avoid this, make sure you save a copy of the notebook to your Google Drive
by selecting File > Save a copy in Drive. Alternatively, you can download the
notebook to your computer by selecting File > Download > Download .ipynb.
Either way, you can later visit https://colab.research.google.com/ and open the
```
notebook again (either from Google Drive or by uploading it from your
```
```
computer).
```
WARNING
Google Colab is meant only for interactive use: you can play around in the notebooks and
tweak the code as you like, but you cannot let the notebooks run unattended for a long period
of time, or else the Runtime will be shutdown and all of its data will be lost.
If the notebook generates data that you care about, make sure you download
```
this data before the Runtime shuts down. To do this, click on the Files icon (see
```
```
step 1 in Figure 2-5), find the file you want to download, click on the vertical
```
```
dots next to it (step 2), and click Download (step 3).
```
```
Figure 2-5. Downloading a file from a Google Colab Runtime (steps 1 to 3), or mounting your Google
```
```
Drive (circled icon)
```
Alternatively, you can mount your Google Drive on the Runtime, allowing the
notebook to read and write files directly to Google Drive, as if it were a local
```
directory. For this, click on the Files icon (step 1) then click on the Google
```
```
Drive icon (circled in Figure 2-5) and follow the on-screen instructions. By
```
default, your Google Drive will be mounted at
/content/drive/MyDrive. If you want to backup a data file, simply
copy it to this directory by running !cp /content/my_great_model
```
/content/drive/MyDrive. Any command starting with a bang (!) is
```
treated as a shell command, not as Python code: cp is the Linux shell command
to copy a file from one path to another. Note that Colab Runtimes run on Linux
```
(specifically, Ubuntu).
```
The Power and Danger of Interactivity
Jupyter notebooks are interactive, and that’s a great thing: you can run each cell
one by one, stop at any point, insert a cell, play with the code, go back and run
the same cell again, etc., and I highly encourage you to do so. If you just run the
cells one by one without ever playing with them, you won’t learn as fast.
However, this flexibility comes at a price: it’s very easy to run cells in the
wrong order, or to forget to run a cell. If this happens, the subsequent code cells
are likely to fail. For example, the very first code cell in each notebook contains
```
setup code (such as imports), so make sure you run it first, or else nothing will
```
work.
TIP
```
If you ever run into a weird error, try restarting the Runtime (by selecting Runtime > Restart
```
```
runtime from the menu) and then run all the cells again from the beginning of the notebook:
```
this will often solve the problem. If not, then it’s likely that one of the changes you made
broke the notebook: just revert to the original notebook and try again. If it still fails, then
please file an issue on GitHub.
Book Code vs Notebook Code
You may sometimes notice some little differences between the code in this
book and the code in the notebooks. This may happen for several reasons:
A library may have changed slightly by the time you read these lines,
or perhaps despite my best efforts I made an error in the book. Sadly, I
```
cannot magically fix the code in your copy of this book (unless you are
```
```
reading an electronic copy and you can download the latest version),
```
but I can fix the notebooks: so if you run into an error after copying
code from this book, please look for the fixed code in the notebooks: I
will strive to keep them error-free and up-to-date with the latest library
versions.
```
The notebooks contain some extra code to beautify the figures (adding
```
```
labels, setting font size, etc.), and to save them in high resolution for
```
this book. You can safely ignore this extra code if you want.
I optimized the code for readability and simplicity: I made it as linear and flat
as possible, defining very few functions or classes. The goal is to ensure that
the code you are running is generally right in front of you, and not nested
within several layers of abstractions that you have to search through. This also
makes it easier for you to play with the code. For simplicity, there’s limited
error handling, and I placed some of the least common imports right where they
```
are needed (instead of placing them at the top of the file, as is recommended by
```
```
the PEP 8 Python style guide). That said, your production code will not be very
```
```
different: just a bit more modular, and with additional tests and error handling,
```
that’s all.
OK! Once you’re comfortable with Colab, you’re ready to download the data.
Download the Data
In typical environments your data would be available in a relational database or
some other common data store, and spread across multiple
tables/documents/files. To access it, you would first need to get your credentials
and access authorizations and familiarize yourself with the data schema. In this
project, however, things are much simpler: you will just download a single
4
```
compressed file, housing.tgz, which contains a comma-separated values (CSV)
```
file called housing.csv with all the data.
Rather than manually downloading and decompressing the data, it’s usually
preferable to write a function that does it for you. This is useful in particular if
the data changes regularly: you can write a small script that uses the function to
```
fetch the latest data (or you can set up a scheduled job to do that automatically
```
```
at regular intervals). Automating the process of fetching the data is also useful
```
if you need to install the dataset on multiple machines.
Here is the function to fetch and load the data:
from pathlib import Path
import pandas as pd
import tarfile
import urllib.request
```
def load_housing_data():
```
```
tarball_path = Path("datasets/housing.tgz")
```
```
if not tarball_path.is_file():
```
```
Path("datasets").mkdir(parents=True, exist_ok=True)
```
```
url = "https://github.com/ageron/data/raw/main/housing.tgz"
```
```
urllib.request.urlretrieve(url, tarball_path)
```
```
with tarfile.open(tarball_path) as housing_tarball:
```
```
housing_tarball.extractall(path="datasets")
```
```
return pd.read_csv(Path("datasets/housing/housing.csv"))
```
```
housing = load_housing_data()
```
```
When load_housing_data() is called, it looks for the
```
datasets/housing.tgz file, and if it does not find it, it creates the datasets
```
directory inside the current directory (which is /content by default, in Colab), it
```
downloads the housing.tgz file from the ageron/data GitHub repository, it
extracts its content into the datasets directory, and this creates the
datasets/housing directory with the housing.csv file inside it. Lastly, the
```
function loads this CSV file into a Pandas DataFrame object containing all the
```
data, and it returns it.
Take a Quick Look at the Data Structure
```
Let’s take a look at the top five rows of data using the DataFrame’s head()
```
```
method (see Figure 2-6).
```
Figure 2-6. Top five rows in the dataset
```
Each row represents one district. There are 10 attributes (they are not all shown
```
```
in the screenshot): longitude, latitude, housing_median_age,
```
total_rooms, total_bedrooms, population, households,
median_income, median_house_value, and ocean_proximity.
```
The info() method is useful to get a quick description of the data, in
```
particular the total number of rows, each attribute’s type, and the number of
non-null values:
```
>>> housing.info()
```
<class 'pandas.core.frame.DataFrame'>
```
RangeIndex: 20640 entries, 0 to 20639
```
```
Data columns (total 10 columns):
```
# Column Non-Null Count Dtype
--- ------ -------------- -----
0 longitude 20640 non-null float64
1 latitude 20640 non-null float64
2 housing_median_age 20640 non-null float64
3 total_rooms 20640 non-null float64
4 total_bedrooms 20433 non-null float64
5 population 20640 non-null float64
6 households 20640 non-null float64
7 median_income 20640 non-null float64
8 median_house_value 20640 non-null float64
9 ocean_proximity 20640 non-null object
```
dtypes: float64(9), object(1)
```
memory usage: 1.6+ MB
NOTE
In this book, when a code example contains a mix of code and outputs, as is the case here, it
is formatted like in the Python interpreter, for better readability: the code lines are prefixed
```
with >>> (or ... for indented blocks), and the outputs have no prefix.
```
There are 20,640 instances in the dataset, which means that it is fairly small by
Machine Learning standards, but it’s perfect to get started. Notice that the
total_bedrooms attribute has only 20,433 non-null values, meaning that
207 districts are missing this feature. We will need to take care of this later.
All attributes are numerical, except the ocean_proximity field. Its type is
object, so it could hold any kind of Python object. But since you loaded this
data from a CSV file, you know that it must be a text attribute. When you
looked at the top five rows, you probably noticed that the values in the
ocean_proximity column were repetitive, which means that it is probably
a categorical attribute. You can find out what categories exist and how many
```
districts belong to each category by using the value_counts() method:
```
```
>>> housing["ocean_proximity"].value_counts()
```
<1H OCEAN 9136
INLAND 6551
NEAR OCEAN 2658
NEAR BAY 2290
ISLAND 5
```
Name: ocean_proximity, dtype: int64
```
```
Let’s look at the other fields. The describe() method shows a summary of
```
```
the numerical attributes (Figure 2-7).
```
Figure 2-7. Summary of each numerical attribute
The count, mean, min, and max rows are self-explanatory. Note that the null
```
values are ignored (so, for example, the count of total_bedrooms is
```
```
20,433, not 20,640). The std row shows the standard deviation, which
```
measures how dispersed the values are. The 25%, 50%, and 75% rows show
the corresponding percentiles: a percentile indicates the value below which a
given percentage of observations in a group of observations fall. For example,
25% of the districts have a housing_median_age lower than 18, while
50% are lower than 29 and 75% are lower than 37. These are often called the
```
25th percentile (or first quartile), the median, and the 75th percentile (or third
```
```
quartile).
```
Another quick way to get a feel of the type of data you are dealing with is to
plot a histogram for each numerical attribute. A histogram shows the number of
```
instances (on the vertical axis) that have a given value range (on the horizontal
```
```
axis). You can either plot this one attribute at a time, or you can call the
```
```
hist() method on the whole dataset (as shown in the following code
```
```
example), and it will plot a histogram for each numerical attribute (see
```
```
Figure 2-8):
```
import matplotlib.pyplot as plt
```
housing.hist(bins=50, figsize=(12, 8))
```
```
plt.show()
```
5
Figure 2-8. A histogram for each numerical attribute
There are a few things you might notice in these histograms:
1. First, the median income attribute does not look like it is expressed in
```
US dollars (USD). After checking with the team that collected the data,
```
```
you are told that the data has been scaled and capped at 15 (actually,
```
```
15.0001) for higher median incomes, and at 0.5 (actually, 0.4999) for
```
lower median incomes. The numbers represent roughly tens of
```
thousands of dollars (e.g., 3 actually means about $30,000). Working
```
with preprocessed attributes is common in Machine Learning, and it is
not necessarily a problem, but you should try to understand how the
data was computed.
2. The housing median age and the median house value were also capped.
The latter may be a serious problem since it is your target attribute
```
(your labels). Your Machine Learning algorithms may learn that prices
```
never go beyond that limit. You need to check with your client team
```
(the team that will use your system’s output) to see if this is a problem
```
or not. If they tell you that they need precise predictions even beyond
$500,000, then you have two options:
a. Collect proper labels for the districts whose labels were
capped.
b. Remove those districts from the training set (and also from the
test set, since your system should not be evaluated poorly if it
```
predicts values beyond $500,000).
```
3. These attributes have very different scales. We will discuss this later in
this chapter, when we explore feature scaling.
4. Finally, many histograms are skewed right: they extend much farther to
the right of the median than to the left. This may make it a bit harder
for some Machine Learning algorithms to detect patterns. We will try
transforming these attributes later on to have more symmetrical and
bell-shaped distributions.
Hopefully you now have a better understanding of the kind of data you are
dealing with.
WARNING
Wait! Before you look at the data any further, you need to create a test set, put it aside, and
never look at it.
Create a Test Set
It may sound strange to voluntarily set aside part of the data at this stage. After
all, you have only taken a quick glance at the data, and surely you should learn
a whole lot more about it before you decide what algorithms to use, right? This
is true, but your brain is an amazing pattern detection system, which also means
that it is highly prone to overfitting: if you look at the test set, you may stumble
upon some seemingly interesting pattern in the test data that leads you to select
a particular kind of Machine Learning model. When you estimate the
generalization error using the test set, your estimate will be too optimistic, and
you will launch a system that will not perform as well as expected. This is
called data snooping bias.
Creating a test set is theoretically simple: pick some instances randomly,
```
typically 20% of the dataset (or less if your dataset is very large), and set them
```
```
aside:
```
import numpy as np
```
def shuffle_and_split_data(data, test_ratio):
```
```
shuffled_indices = np.random.permutation(len(data))
```
```
test_set_size = int(len(data) * test_ratio)
```
```
test_indices = shuffled_indices[:test_set_size]
```
```
train_indices = shuffled_indices[test_set_size:]
```
return data.iloc[train_indices], data.iloc[test_indices]
You can then use this function like this:
```
>>> train_set, test_set = shuffle_and_split_data(housing, 0.2)
```
```
>>> len(train_set)
```
16512
```
>>> len(test_set)
```
4128
Well, this works, but it is not perfect: if you run the program again, it will
```
generate a different test set! Over time, you (or your Machine Learning
```
```
algorithms) will get to see the whole dataset, which is what you want to avoid.
```
One solution is to save the test set on the first run and then load it in subsequent
```
runs. Another option is to set the random number generator’s seed (e.g., with
```
```
np.random.seed(42)) before calling np.random.permutation()
```
so that it always generates the same shuffled indices.
But both these solutions will break the next time you fetch an updated dataset.
To have a stable train/test split even after updating the dataset, a common
solution is to use each instance’s identifier to decide whether or not it should go
```
in the test set (assuming instances have a unique and immutable identifier). For
```
example, you could compute a hash of each instance’s identifier and put that
instance in the test set if the hash is lower than or equal to 20% of the maximum
hash value. This ensures that the test set will remain consistent across multiple
runs, even if you refresh the dataset. The new test set will contain 20% of the
new instances, but it will not contain any instance that was previously in the
training set.
Here is a possible implementation:
from zlib import crc32
```
def is_id_in_test_set(identifier, test_ratio):
```
```
return crc32(np.int64(identifier)) < test_ratio * 2**32
```
```
def split_data_with_id_hash(data, test_ratio, id_column):
```
```
ids = data[id_column]
```
```
in_test_set = ids.apply(lambda id_: is_id_in_test_set(id_,
```
```
test_ratio))
```
return data.loc[~in_test_set], data.loc[in_test_set]
Unfortunately, the housing dataset does not have an identifier column. The
simplest solution is to use the row index as the ID:
```
housing_with_id = housing.reset_index() # adds an `index` column
```
```
train_set, test_set = split_data_with_id_hash(housing_with_id, 0.2,
```
```
"index")
```
6
If you use the row index as a unique identifier, you need to make sure that new
data gets appended to the end of the dataset and that no row ever gets deleted. If
this is not possible, then you can try to use the most stable features to build a
unique identifier. For example, a district’s latitude and longitude are guaranteed
to be stable for a few million years, so you could combine them into an ID like
```
so:
```
housing_with_id["id"] = housing["longitude"] * 1000 +
housing["latitude"]
```
train_set, test_set = split_data_with_id_hash(housing_with_id, 0.2,
```
```
"id")
```
Scikit-Learn provides a few functions to split datasets into multiple subsets in
```
various ways. The simplest function is train_test_split(), which does
```
```
pretty much the same thing as the function shuffle_and_split_data()
```
we defined earlier, with a couple of additional features. First, there is a
random_state parameter that allows you to set the random generator seed.
Second, you can pass it multiple datasets with an identical number of rows, and
```
it will split them on the same indices (this is very useful, for example, if you
```
```
have a separate DataFrame for labels):
```
from sklearn.model_selection import train_test_split
```
train_set, test_set = train_test_split(housing, test_size=0.2,
```
```
random_state=42)
```
So far we have considered purely random sampling methods. This is generally
```
fine if your dataset is large enough (especially relative to the number of
```
```
attributes), but if it is not, you run the risk of introducing a significant sampling
```
bias. When a survey company decides to call 1,000 people to ask them a few
questions, they don’t just pick 1,000 people randomly in a phone book. They
try to ensure that these 1,000 people are representative of the whole population,
with regards to the questions they want to ask. For example, the US population
is 51.1% females and 48.9% males, so a well-conducted survey in the US
```
would try to maintain this ratio in the sample: 511 female and 489 male (at least
```
```
if we believe that the answers may vary across genders). This is called stratified
```
```
sampling: the population is divided into homogeneous subgroups called strata,
```
and the right number of instances are sampled from each stratum to guarantee
7
that the test set is representative of the overall population. If the people running
the survey used purely random sampling, there would be about 10.7% chance
of sampling a skewed test set with less than 48.5% female or more than 53.5%
female. Either way, the survey results would likely be quite biased.
Suppose you chatted with experts who told you that the median income is a
very important attribute to predict median housing prices. You may want to
ensure that the test set is representative of the various categories of incomes in
the whole dataset. Since the median income is a continuous numerical attribute,
you first need to create an income category attribute. Let’s look at the median
```
income histogram more closely (back in Figure 2-8): most median income
```
```
values are clustered around 1.5 to 6 (i.e., $15,000–$60,000), but some median
```
incomes go far beyond 6. It is important to have a sufficient number of
instances in your dataset for each stratum, or else the estimate of a stratum’s
importance may be biased. This means that you should not have too many
strata, and each stratum should be large enough. The following code uses the
```
pd.cut() function to create an income category attribute with five categories
```
```
(labeled from 1 to 5): category 1 ranges from 0 to 1.5 (i.e., less than $15,000),
```
category 2 from 1.5 to 3, and so on:
```
housing["income_cat"] = pd.cut(housing["median_income"],
```
```
bins=[0., 1.5, 3.0, 4.5, 6., np.inf],
```
```
labels=[1, 2, 3, 4, 5])
```
These income categories are represented in Figure 2-9:
```
housing["income_cat"].value_counts().sort_index().plot.bar(rot=0,
```
```
grid=True)
```
```
plt.xlabel("Income category")
```
```
plt.ylabel("Number of districts")
```
```
plt.show()
```
Figure 2-9. Histogram of income categories
Now you are ready to do stratified sampling based on the income category.
Scikit-Learn provides a number of splitter classes in the
sklearn.model_selection package, which implement various strategies
```
to split your dataset into a train set and a test set. Each splitter has a split()
```
method which returns an iterator over different train/test splits of the same data.
```
To be precise, the split() method yields the train and test indices, not the
```
data itself. Having multiple splits can be useful if you want to better estimate
the performance of your model, as we will see when we discuss cross-
validation later in this chapter. For example, the following code generates 10
different stratified splits of the same dataset:
from sklearn.model_selection import StratifiedShuffleSplit
```
splitter = StratifiedShuffleSplit(n_splits=10, test_size=0.2,
```
```
random_state=42)
```
```
strat_splits = []
```
```
for train_index, test_index in splitter.split(housing,
```
```
housing["income_cat"]):
```
```
strat_train_set_n = housing.loc[train_index]
```
```
strat_test_set_n = housing.loc[test_index]
```
```
strat_splits.append([strat_train_set_n, strat_test_set_n])
```
For now, we can just use the first split:
strat_train_set, strat_test_set = strat_splits[0]
Since stratified sampling is fairly common, there’s a shorter way to get a single
```
split using the train_test_split() function with the stratify
```
```
argument:
```
```
strat_train_set, strat_test_set = train_test_split(
```
housing, test_size=0.2, stratify=housing["income_cat"],
```
random_state=42)
```
Let’s see if this worked as expected. You can start by looking at the income
category proportions in the test set:
```
>>> strat_test_set["income_cat"].value_counts() / len(strat_test_set)
```
3 0.350533
2 0.318798
4 0.176357
5 0.114341
1 0.039971
```
Name: income_cat, dtype: float64
```
With similar code you can measure the income category proportions in the full
dataset. Figure 2-10 compares the income category proportions in the overall
dataset, in the test set generated with stratified sampling, and in a test set
generated using purely random sampling. As you can see, the test set generated
using stratified sampling has income category proportions almost identical to
those in the full dataset, whereas the test set generated using purely random
sampling is skewed.
Figure 2-10. Sampling bias comparison of stratified versus purely random sampling
Now we won’t use the income_cat column anymore so we might as well
drop it, reverting the data back to its original state:
```
for set_ in (strat_train_set, strat_test_set):
```
```
set_.drop("income_cat", axis=1, inplace=True)
```
We spent quite a bit of time on test set generation for a good reason: this is an
often neglected but critical part of a Machine Learning project. Moreover, many
of these ideas will be useful later when we discuss cross-validation. Now it’s
time to move on to the next stage: exploring the data.
Discover and Visualize the Data to Gain
Insights
So far you have only taken a quick glance at the data to get a general
understanding of the kind of data you are manipulating. Now the goal is to go
into a little more depth.
First, make sure you have put the test set aside and you are only exploring the
training set. Also, if the training set is very large, you may want to sample an
exploration set, to make manipulations easy and fast during the exploration
phase. In our case, the training set is quite small, so we can just work directly
on the full set. Since you’re going to experiment with various transformations
of the training set, you should make a copy of the original so you can revert to
it afterwards:
```
housing = strat_train_set.copy()
```
Visualizing Geographical Data
```
Since there is geographical information (latitude and longitude), it is a good
```
```
idea to create a scatterplot of all districts to visualize the data (Figure 2-11):
```
```
housing.plot(kind="scatter", x="longitude", y="latitude", grid=True)
```
```
plt.show()
```
Figure 2-11. A geographical scatterplot of the data
This looks like California all right, but other than that it is hard to see any
particular pattern. Setting the alpha option to 0.2 makes it much easier to
```
visualize the places where there is a high density of data points (Figure 2-12):
```
```
housing.plot(kind="scatter", x="longitude", y="latitude", grid=True,
```
```
alpha=0.2)
```
```
plt.show()
```
Figure 2-12. A better visualization that highlights high-density areas
Now that’s much better: you can clearly see the high-density areas, namely the
Bay Area and around Los Angeles and San Diego, plus a long line of fairly
high density in the Central Valley, in particular around Sacramento and Fresno.
Our brains are very good at spotting patterns in pictures, but you may need to
play around with visualization parameters to make the patterns stand out.
```
Now let’s look at the housing prices (Figure 2-13). The radius of each circle
```
```
represents the district’s population (option s), and the color represents the price
```
```
(option c). We will use a predefined color map (option cmap) called jet,
```
```
which ranges from blue (low values) to red (high prices):
```
```
housing.plot(kind="scatter", x="longitude", y="latitude", grid=True,
```
```
s=housing["population"] / 100, label="population",
```
```
c="median_house_value", cmap="jet", colorbar=True,
```
```
legend=True, sharex=False, figsize=(10, 7))
```
```
plt.show()
```
8
Figure 2-13. California housing prices: red is expensive, blue is cheap, larger circles indicate areas with a
larger population
This image tells you that the housing prices are very much related to the
```
location (e.g., close to the ocean) and to the population density, as you probably
```
knew already. A clustering algorithm should be useful for detecting the main
cluster and for adding new features that measure the proximity to the cluster
centers. The ocean proximity attribute may be useful as well, although in
Northern California the housing prices in coastal districts are not too high, so it
is not a simple rule.
Looking for Correlations
Since the dataset is not too large, you can easily compute the standard
```
correlation coefficient (also called Pearson’s r) between every pair of attributes
```
```
using the corr() method:
```
```
corr_matrix = housing.corr()
```
Now let’s look at how much each attribute correlates with the median house
```
value:
```
```
>>> corr_matrix["median_house_value"].sort_values(ascending=False)
```
median_house_value 1.000000
median_income 0.688380
total_rooms 0.137455
housing_median_age 0.102175
households 0.071426
total_bedrooms 0.054635
population -0.020153
longitude -0.050859
latitude -0.139584
```
Name: median_house_value, dtype: float64
```
The correlation coefficient ranges from –1 to 1. When it is close to 1, it means
```
that there is a strong positive correlation; for example, the median house value
```
tends to go up when the median income goes up. When the coefficient is close
```
to –1, it means that there is a strong negative correlation; you can see a small
```
```
negative correlation between the latitude and the median house value (i.e.,
```
```
prices have a slight tendency to go down when you go north). Finally,
```
coefficients close to 0 mean that there is no linear correlation.
Another way to check for correlation between attributes is to use the Pandas
```
scatter_matrix() function, which plots every numerical attribute against
```
every other numerical attribute. Since there are now 11 numerical attributes,
you would get 11 = 121 plots, which would not fit on a page—so let’s just
focus on a few promising attributes that seem most correlated with the median
```
housing value (Figure 2-14):
```
from pandas.plotting import scatter_matrix
```
attributes = ["median_house_value", "median_income", "total_rooms",
```
"housing_median_age"]
```
scatter_matrix(housing[attributes], figsize=(12, 8))
```
```
plt.show()
```
2
Figure 2-14. This scatter matrix plots every numerical attribute against every other numerical attribute,
```
plus a histogram of each numerical attribute’s values on the main diagonal (top left to bottom right)
```
The main diagonal would be full of straight lines if Pandas plotted each variable
against itself, which would not be very useful. So instead Pandas displays a
```
histogram of each attribute (other options are available; see Pandas’
```
```
documentation for more details).
```
Looking at the correlation scatterplots, it seems like the most promising
attribute to predict the median house value is the median income, so let’s zoom
```
in on their scatterplot (Figure 2-15):
```
```
housing.plot(kind="scatter", x="median_income",
```
```
y="median_house_value",
```
```
alpha=0.1, grid=True)
```
```
plt.show()
```
Figure 2-15. Median income versus median house value
```
This plot reveals a few things. First, the correlation is indeed quite strong; you
```
can clearly see the upward trend, and the points are not too dispersed. Second,
the price cap that we noticed earlier is clearly visible as a horizontal line at
$500,000. But this plot reveals other less obvious straight lines: a horizontal
line around $450,000, another around $350,000, perhaps one around $280,000,
and a few more below that. You may want to try removing the corresponding
districts to prevent your algorithms from learning to reproduce these data
quirks.
WARNING
```
The correlation coefficient only measures linear correlations (“as x goes up, y generally goes
```
```
up/down”). It may completely miss out on nonlinear relationships (e.g., “as x approaches 0, y
```
```
generally goes up”). Figure 2-16 shows a variety of datasets along with their correlation
```
coefficient. Note how all the plots of the bottom row have a correlation coefficient equal to 0,
despite the fact that their axes are clearly not independent: these are examples of nonlinear
relationships. Also, the second row shows examples where the correlation coefficient is equal
```
to 1 or –1; notice that this has nothing to do with the slope. For example, your height in
```
inches has a correlation coefficient of 1 with your height in feet or in nanometers.
```
Figure 2-16. Standard correlation coefficient of various datasets (source: Wikipedia; public domain
```
```
image)
```
Experimenting with Attribute Combinations
Hopefully the previous sections gave you an idea of a few ways you can
explore the data and gain insights. You identified a few data quirks that you
may want to clean up before feeding the data to a Machine Learning algorithm,
and you found interesting correlations between attributes, in particular with the
target attribute. You also noticed that some attributes have a skewed-right
```
distribution, so you may want to transform them (e.g., by computing their
```
```
logarithm or square root). Of course, your mileage will vary considerably with
```
each project, but the general ideas are similar.
One last thing you may want to do before preparing the data for Machine
Learning algorithms is to try out various attribute combinations. For example,
the total number of rooms in a district is not very useful if you don’t know how
many households there are. What you really want is the number of rooms per
household. Similarly, the total number of bedrooms by itself is not very useful:
you probably want to compare it to the number of rooms. And the population
per household also seems like an interesting attribute combination to look at.
Let’s create these new attributes:
housing["rooms_per_house"] = housing["total_rooms"] /
housing["households"]
housing["bedrooms_ratio"] = housing["total_bedrooms"] /
housing["total_rooms"]
housing["people_per_house"] = housing["population"] /
housing["households"]
And now let’s look at the correlation matrix again:
```
>>> corr_matrix = housing.corr()
```
```
>>> corr_matrix["median_house_value"].sort_values(ascending=False)
```
median_house_value 1.000000
median_income 0.688380
rooms_per_house 0.143663
total_rooms 0.137455
housing_median_age 0.102175
households 0.071426
total_bedrooms 0.054635
population -0.020153
people_per_house -0.038224
longitude -0.050859
latitude -0.139584
bedrooms_ratio -0.256397
```
Name: median_house_value, dtype: float64
```
Hey, not bad! The new bedrooms_ratio attribute is much more correlated
with the median house value than the total number of rooms or bedrooms.
Apparently houses with a lower bedroom/room ratio tend to be more expensive.
The number of rooms per household is also more informative than the total
number of rooms in a district—obviously the larger the houses, the more
expensive they are.
```
This round of exploration does not have to be absolutely thorough; the point is
```
to start off on the right foot and quickly gain insights that will help you get a
first reasonably good prototype. But this is an iterative process: once you get a
prototype up and running, you can analyze its output to gain more insights and
come back to this exploration step.
Prepare the Data for Machine Learning
Algorithms
It’s time to prepare the data for your Machine Learning algorithms. Instead of
doing this manually, you should write functions for this purpose, for several
good reasons:
This will allow you to reproduce these transformations easily on any
```
dataset (e.g., the next time you get a fresh dataset).
```
You will gradually build a library of transformation functions that you
can reuse in future projects.
You can use these functions in your live system to transform the new
data before feeding it to your algorithms.
This will make it possible for you to easily try various transformations
and see which combination of transformations works best.
```
But first let’s revert to a clean training set (by copying strat_train_set
```
```
once again). Let’s also separate the predictors and the labels, since we don’t
```
necessarily want to apply the same transformations to the predictors and the
```
target values (note that drop() creates a copy of the data and does not affect
```
```
strat_train_set):
```
```
housing = strat_train_set.drop("median_house_value", axis=1)
```
```
housing_labels = strat_train_set["median_house_value"].copy()
```
Data Cleaning
Most Machine Learning algorithms cannot work with missing features, so let’s
create a few functions to take care of them. We saw earlier that the
total_bedrooms attribute has some missing values, so let’s fix this. You
have three options:
1. Get rid of the corresponding districts.
2. Get rid of the whole attribute.
3. Set the missing values to some value (zero, the mean, the median, etc.).
This is called imputation.
```
You can accomplish these easily using DataFrame’s dropna(), drop(), and
```
```
fillna() methods:
```
```
housing.dropna(subset=["total_bedrooms"], inplace=True) # option 1
```
```
housing.drop("total_bedrooms", axis=1) # option 2
```
```
median = housing["total_bedrooms"].median() # option 3
```
```
housing["total_bedrooms"].fillna(median, inplace=True)
```
Let’s go for option 3 since it is the least destructive, but instead of the code
above, we will use a handy Scikit-Learn class : SimpleImputer. The benefit
is that it will store the median value of each feature: this will make it possible to
impute missing values not only on the training set, but also on the validation
set, the test set, and any new data fed to the model. Here is how to use it. First,
you need to create a SimpleImputer instance, specifying that you want to
replace each attribute’s missing values with the median of that attribute:
from sklearn.impute import SimpleImputer
```
imputer = SimpleImputer(strategy="median")
```
Since the median can only be computed on numerical attributes, you need to
```
create a copy of the data with only the numerical attributes (this will exclude
```
```
the text attribute ocean_proximity):
```
```
housing_num = housing.select_dtypes(include=[np.number])
```
```
Now you can fit the imputer instance to the training data using the fit()
```
```
method:
```
```
imputer.fit(housing_num)
```
The imputer has simply computed the median of each attribute and stored the
result in its statistics_ instance variable. Only the total_bedrooms
attribute had missing values, but we cannot be sure that there won’t be any
missing values in new data after the system goes live, so it is safer to apply the
imputer to all the numerical attributes:
>>> imputer.statistics_
```
array([-118.51 , 34.26 , 29. , 2125. , 434. , 1167. , 408. , 3.5385])
```
```
>>> housing_num.median().values
```
```
array([-118.51 , 34.26 , 29. , 2125. , 434. , 1167. , 408. , 3.5385])
```
Now you can use this “trained” imputer to transform the training set by
replacing missing values with the learned medians:
```
X = imputer.transform(housing_num)
```
Missing values can also be replaced with the mean value
```
(strategy="mean"), or with the most frequent value
```
```
(strategy="most_frequent"), or with a constant value
```
```
(strategy="constant", fill_value=…). The last two strategies
```
support non-numerical data.
TIP
```
There are also more powerful imputers available in the sklearn.impute package (both
```
```
for numerical features only):
```
KNNImputer replaces each missing value with the mean of the k nearest
neighbors’ values for that feature. The distance is based on all the available features.
IterativeImputer trains a regression model per feature to predict the missing
values based on all the other available features. It then trains the model again on the
updated data, and repeats the process several times, improving the models and the
replacement values at each iteration.
SCIKIT-LEARN DESIGN
Scikit-Learn’s API is remarkably well designed. These are the main design
```
principles:
```
Consistency
All objects share a consistent and simple interface:
Estimators
Any object that can estimate some parameters based on a dataset is
```
called an estimator (e.g., a SimpleImputer is an estimator). The
```
```
estimation itself is performed by the fit() method, and it takes a
```
dataset as a parameter, or two for supervised learning algorithms—
the second dataset contains the labels. Any other parameter needed
to guide the estimation process is considered a hyperparameter
```
(such as a SimpleImputer’s strategy), and it must be set as
```
```
an instance variable (generally via a constructor parameter).
```
Transformers
```
Some estimators (such as a SimpleImputer) can also transform
```
```
a dataset; these are called transformers. Once again, the API is
```
```
simple: the transformation is performed by the transform()
```
method with the dataset to transform as a parameter. It returns the
transformed dataset. This transformation generally relies on the
learned parameters, as is the case for a SimpleImputer. All
transformers also have a convenience method called
```
fit_transform() which is equivalent to calling fit() and
```
```
then transform() (but sometimes fit_transform() is
```
```
optimized and runs much faster).
```
Predictors
Finally, some estimators, given a dataset, are capable of making
```
predictions; they are called predictors. For example, the
```
LinearRegression model in the previous chapter was a
```
predictor: given a country’s GDP per capita, it predicted life
```
9
```
satisfaction. A predictor has a predict() method that takes a
```
dataset of new instances and returns a dataset of corresponding
```
predictions. It also has a score() method that measures the
```
```
quality of the predictions, given a test set (and the corresponding
```
```
labels, in the case of supervised learning algorithms).{wj}
```
Inspection
All the estimator’s hyperparameters are accessible directly via public
```
instance variables (e.g., imputer.strategy), and all the estimator’s
```
learned parameters are accessible via public instance variables with an
```
underscore suffix (e.g., imputer.statistics_).
```
Nonproliferation of classes
Datasets are represented as NumPy arrays or SciPy sparse matrices,
instead of homemade classes. Hyperparameters are just regular Python
strings or numbers.
Composition
Existing building blocks are reused as much as possible. For example, it
is easy to create a Pipeline estimator from an arbitrary sequence of
transformers followed by a final estimator, as we will see.
Sensible defaults
Scikit-Learn provides reasonable default values for most parameters,
making it easy to quickly create a baseline working system.
```
Scikit-Learn transformers output NumPy arrays (or sometimes SciPy sparse
```
```
matrices) even when they are fed Pandas DataFrames as input. So the output
```
```
of imputer.transform(housing_num) is a NumPy array: X has neither
```
column names nor index. Luckily, it’s not too hard to wrap X in a DataFrame
and recover the column names and index from housing_num:
10
11
```
housing_tr = pd.DataFrame(X, columns=housing_num.columns,
```
```
index=housing_num.index)
```
Handling Text and Categorical Attributes
So far we have only dealt with numerical attributes, but now let’s look at text
attributes. In this dataset, there is just one: the ocean_proximity attribute.
Let’s look at its value for the first few instances:
>>> housing_cat = housing[["ocean_proximity"]]
```
>>> housing_cat.head(8)
```
ocean_proximity
13096 NEAR BAY
14973 <1H OCEAN
3785 INLAND
14689 INLAND
20507 NEAR OCEAN
1286 INLAND
18078 <1H OCEAN
4396 NEAR BAY
It’s not arbitrary text: there are a limited number of possible values, each of
which represents a category. So this attribute is a categorical attribute. Most
Machine Learning algorithms prefer to work with numbers, so let’s convert
these categories from text to numbers. For this, we can use Scikit-Learn’s
OrdinalEncoder class:
from sklearn.preprocessing import OrdinalEncoder
```
ordinal_encoder = OrdinalEncoder()
```
```
housing_cat_encoded = ordinal_encoder.fit_transform(housing_cat)
```
Here’s what the first few encoded values in housing_cat_encoded look
```
like:
```
>>> housing_cat_encoded[:8]
```
array([[3.],
```
[0.],
[1.],
[1.],
[4.],
[1.],
[0.],
```
[3.]])
```
You can get the list of categories using the categories_ instance variable. It
```
is a list containing a 1D array of categories for each categorical attribute (in this
```
```
case, a list containing a single array since there is just one categorical attribute):
```
>>> ordinal_encoder.categories_
```
[array(['<1H OCEAN', 'INLAND', 'ISLAND', 'NEAR BAY', 'NEAR OCEAN'],
```
```
dtype=object)]
```
One issue with this representation is that ML algorithms will assume that two
nearby values are more similar than two distant values. This may be fine in
```
some cases (e.g., for ordered categories such as “bad,” “average,” “good,” and
```
```
“excellent”), but it is obviously not the case for the ocean_proximity
```
```
column (for example, categories 0 and 4 are clearly more similar than
```
```
categories 0 and 1). To fix this issue, a common solution is to create one binary
```
attribute per category: one attribute equal to 1 when the category is “<1H
```
OCEAN” (and 0 otherwise), another attribute equal to 1 when the category is
```
```
“INLAND” (and 0 otherwise), and so on. This is called one-hot encoding,
```
```
because only one attribute will be equal to 1 (hot), while the others will be 0
```
```
(cold). The new attributes are sometimes called dummy attributes. Scikit-Learn
```
provides a OneHotEncoder class to convert categorical values into one-hot
```
vectors:
```
from sklearn.preprocessing import OneHotEncoder
```
cat_encoder = OneHotEncoder()
```
```
housing_cat_1hot = cat_encoder.fit_transform(housing_cat)
```
By default, the output of a OneHotEncoder is a SciPy sparse matrix, instead
of a NumPy array:
>>> housing_cat_1hot
<16512x5 sparse matrix of type '<class 'numpy.float64'>'
with 16512 stored elements in Compressed Sparse Row format>
A sparse matrix is a very efficient representation for matrices that contain
mostly zeroes. Indeed, internally it only stores the non-zero values and their
positions. When a categorical attribute has hundreds or thousands of categories,
then one-hot-encoding it results in a very large matrix full of zeros except for a
single 1 per row. In this case, a sparse matrix is exactly what we need: it will
save plenty of memory and speed up computations. You can use a sparse matrix
```
mostly like a normal 2D array, but if you want to convert it to a (dense)
```
```
NumPy array, just call the toarray() method:
```
```
>>> housing_cat_1hot.toarray()
```
```
array([[0., 0., 0., 1., 0.],
```
[1., 0., 0., 0., 0.],
[0., 1., 0., 0., 0.],
...,
[0., 0., 0., 0., 1.],
[1., 0., 0., 0., 0.],
```
[0., 0., 0., 0., 1.]])
```
Alternatively, you can set sparse=False when creating the
```
OneHotEncoder, in which case the transform() method will return a
```
```
regular (dense) NumPy array directly.
```
As with the OrdinalEncoder, you can get the list of categories using the
encoder’s categories_ instance variable:
>>> cat_encoder.categories_
```
[array(['<1H OCEAN', 'INLAND', 'ISLAND', 'NEAR BAY', 'NEAR OCEAN'],
```
```
dtype=object)]
```
```
Pandas has a function called get_dummies() which also converts each
```
categorical feature into a one-hot-representation, with one binary feature per
```
category:
```
```
>>> df_test = pd.DataFrame({"ocean_proximity": ["INLAND", "NEAR
```
```
BAY"]})
```
```
>>> pd.get_dummies(df_test)
```
ocean_proximity_INLAND ocean_proximity_NEAR BAY
0 1 0
1 0 1
It looks nice and simple, so why not use it instead of OneHotEncoder? Well,
the advantage of OneHotEncoder is that it remembers which categories it
was trained on. This is very important because once your model is in
12
production, it should be fed exactly the same features as during training: no
more, no less. Watch what our trained cat_encoder outputs when we make
```
it transform the same df_test (using transform(), not
```
```
fit_transform()):
```
```
>>> cat_encoder.transform(df_test)
```
```
array([[0., 1., 0., 0., 0.],
```
```
[0., 0., 0., 1., 0.]])
```
```
See the difference? get_dummies() saw only two categories, so it output
```
two columns, whereas OneHotEncoder output one column per learned
```
category, in the right order. Moreover, if you feed get_dummies() a
```
```
DataFrame containing an unknown category (e.g., "<2H OCEAN"), it will
```
happily generate a column for it:
```
>>> df_test_unknown = pd.DataFrame({"ocean_proximity": ["<2H OCEAN",
```
```
"ISLAND"]})
```
```
>>> pd.get_dummies(df_test_unknown)
```
ocean_proximity_<2H OCEAN ocean_proximity_ISLAND
0 1 0
1 0 1
But OneHotEncoder is smarter: it will detect the unknown category and
raise an exception. If you prefer, you can set the handle_unknown
hyperparameter to "ignore", in which case it will just represent the unknown
category with zeros:
>>> cat_encoder.handle_unknown = "ignore"
```
>>> cat_encoder.transform(df_test_unknown)
```
```
array([[0., 0., 0., 0., 0.],
```
```
[0., 0., 1., 0., 0.]])
```
When you fit any Scikit-Learn estimator using a DataFrame, the estimator
stores the column names in the feature_names_in_ attribute. Scikit-Learn
```
then ensures that any DataFrame fed to this estimator after that (e.g., to
```
```
transform() or predict()) has the same column names. Transformers
```
```
also provide a get_feature_names_out() method which you can use to
```
build a DataFrame around the transformer’s output:
>>> cat_encoder.feature_names_in_
```
array(['ocean_proximity'], dtype=object)
```
```
>>> cat_encoder.get_feature_names_out()
```
```
array(['ocean_proximity_<1H OCEAN', 'ocean_proximity_INLAND',
```
'ocean_proximity_ISLAND', 'ocean_proximity_NEAR BAY',
```
'ocean_proximity_NEAR OCEAN'], dtype=object)
```
```
>>> df_output = pd.DataFrame(cat_encoder.transform(df_test_unknown),
```
...
```
columns=cat_encoder.get_feature_names_out(),
```
```
... index=df_test_unknown.index)
```
...
TIP
```
If a categorical attribute has a large number of possible categories (e.g., country code,
```
```
profession, species), then one-hot encoding will result in a large number of input features.
```
This may slow down training and degrade performance. If this happens, you may want to
replace the categorical input with useful numerical features related to the categories: for
example, you could replace the ocean_proximity feature with the distance to the ocean
```
(similarly, a country code could be replaced with the country’s population and GDP per
```
```
capita). Alternatively, you can use one of the encoders provided by the category_encoders
```
package on https://github.com/scikit-learn-contrib. Or when dealing with neural networks,
you can replace each category with a learnable, low-dimensional vector called an embedding.
```
This is an example of representation learning (see Chapters 13 and 17 for more details).
```
Feature Scaling and Transformation
One of the most important transformations you need to apply to your data is
feature scaling. With few exceptions, Machine Learning algorithms don’t
perform well when the input numerical attributes have very different scales.
This is the case for the housing data: the total number of rooms ranges from
about 6 to 39,320, while the median incomes only range from 0 to 15.
There are two common ways to get all attributes to have the same scale: min-
max scaling and standardization.
```
Min-max scaling (many people call this normalization) is the simplest: for each
```
attribute, the values are shifted and rescaled so that they end up ranging from 0
to 1. This is performed by subtracting the min value and dividing by the
difference between the min and the max. Scikit-Learn provides a transformer
called MinMaxScaler for this. It has a feature_range hyperparameter
```
that lets you change the range if, for some reason, you don’t want 0–1 (e.g.,
```
neural networks work best with zero-mean inputs, so a range of –1 to 1 is
```
preferable). It’s quite easy to use:
```
from sklearn.preprocessing import MinMaxScaler
```
min_max_scaler = MinMaxScaler(feature_range=(-1, 1))
```
```
housing_num_min_max_scaled =
```
```
min_max_scaler.fit_transform(housing_num)
```
WARNING
As with all estimators, it is important to fit the scalers to the training data only: never use
```
fit() or fit_transform() for anything else than the training set. Once you have a
```
```
trained scaler, you can then use it to transform() any other set, including the validation
```
set, the test set, and new data. Note that while the training set values will always be scaled to
the specified range, if new data contains outliers, these may end up scaled outside the range.
If you want to avoid this, just set the clip hyperparameter to True.
```
Standardization is different: first it subtracts the mean value (so standardized
```
```
values have a zero mean), then it divides the result by the standard deviation (so
```
```
standardized values have a standard deviation equal to 1). Unlike min-max
```
scaling, standardization does not bound values to a specific range. However,
standardization is much less affected by outliers. For example, suppose a
```
district has a median income equal to 100 (by mistake), instead of the usual 0–
```
15. Min-max scaling to the 0–1 range would map this outlier down to 1 and it
would crush all the other values down to 0–0.15, whereas standardization
would not be much affected. Scikit-Learn provides a transformer called
StandardScaler for standardization:
from sklearn.preprocessing import StandardScaler
```
std_scaler = StandardScaler()
```
```
housing_num_std_scaled = std_scaler.fit_transform(housing_num)
```
TIP
If you want to scale a sparse matrix without converting it to a dense matrix first, you can use
a StandardScaler with its with_mean hyperparameter set to False: it will only
```
divide the data by the standard deviation, without subtracting the mean (as this would break
```
```
sparsity).
```
```
When a feature’s distribution has a heavy tail (i.e., when values far from the
```
```
mean are not exponentially rare), both min-max scaling and standardization will
```
squash most values into a small range. Machine Learning models generally
don’t like this at all, as we will see in Chapter 4. So before you scale the
feature, you should first transform it to shrink the heavy tail, and if possible to
make the distribution roughly symmetrical. For example, a common way to do
this for positive features with a heavy tail to the right is to replace the feature
```
with its square root (or raise the feature to a power between 0 and 1). If the
```
feature has a really long and heavy tail, such as a power law distribution, then
replacing the feature with its logarithm may help. For example, the
population feature roughly follows a power law: districts with 10,000
inhabitants are only 10 times less frequent than districts with 1,000 inhabitants,
not exponentially less frequent. Figure 2-17 shows how much better this feature
```
looks when you compute its log: it’s very close to a Gaussian distribution (i.e.,
```
```
bell-shaped).
```
Figure 2-17. Transforming a feature to make it closer to a Gaussian distribution
Another approach to handle heavy tailed features consists in bucketizing the
feature. This means chopping its distribution into roughly equal size buckets,
and replacing each feature value with the index of the bucket it belongs to,
```
much like we did to create the income_cat feature (although we only used it
```
```
for stratified sampling). For example, you could replace each value with its
```
percentile. Bucketizing with equal-sized buckets results in a feature with an
almost uniform distribution, so there’s no need for further scaling, or you can
just divide by the number of buckets to force the values to the 0–1 range.
```
When a feature has a multimodal distribution (i.e., with two or more clear
```
```
peaks, called modes), such as the housing_median_age feature, it can also
```
be helpful to bucketize it, but this time treating the bucket ids as categories,
rather than as numerical values. This means that the bucket indices must be
```
encoded, for example using a OneHotEncoder (so you usually don’t want to
```
```
use too many buckets). This approach will allow the regression model to more
```
easily learn different rules for different ranges of this feature value. For
example, perhaps houses built around 35 years ago have a peculiar style that
fell out of fashion, and therefore they’re cheaper than their age alone would
suggest.
Another approach for transforming multimodal distributions is to add a feature
```
for each of the modes (at least the main ones), representing the similarity
```
between the housing median age and that particular mode. The similarity
```
measure is typically computed using a Radial Basis Function (RBF): this is any
```
```
function which depends only on the distance between the input value and a
```
fixed point. The most commonly used RBF is the Gaussian RBF whose output
value decays exponentially as the input value moves away from the fixed point.
For example, the Gaussian RBF similarity between the housing age x and 35 is
```
given by the equation exp(-ݛ x_ - 35)²). The hyperparameter ݛ gamma)
```
determines how quickly the similarity measure decays as x moves away from
35. Using Scikit-Learn’s rbf_kernel() function, we can create a new
Gaussian RBF feature measuring the similarity between the housing median
age and 35:
from sklearn.metrics.pairwise import rbf_kernel
```
age_simil_35 = rbf_kernel(housing[["housing_median_age"]], [[35]],
```
```
gamma=0.1)
```
Figure 2-18 shows this new feature as a function of the housing median age
```
(solid line). It also shows what the feature would look like if we used a smaller
```
gamma value. As the chart shows, the new age similarity feature peaks at 35,
right around the spike in the housing median age distribution: if this particular
age group is well correlated with lower prices, there’s a good chance that this
new feature will help.
Figure 2-18. Gaussian RBF feature measuring the similarity between the housing median age and 35
So far we’ve only looked at the input features, but the target values may also
need to be transformed. For example, if the target distribution has a heavy tail,
you may choose to replace the target with its logarithm. But if you do, the
regression model will now predict the log of the median house value, not the
median house value itself. So you will need to compute the exponential of the
model’s prediction if you want the predicted median house value.
Luckily, most of Scikit-Learn’s transformers have an
```
inverse_transform() method, making it easy to compute the inverse of
```
their transformations. For example, the following code example shows how to
```
scale the labels using a StandardScaler (just like we did for inputs), then
```
train a simple linear regression model on the resulting scaled labels, and use it
to make predictions on some new data, which we transform back to the original
```
scale using the trained scaler’s inverse_transform() method. Note that
```
we convert the labels from a Pandas Series to a DataFrame, since the
StandardScaler expects 2D inputs. Also, in this example we just train the
```
model on a single raw input feature (median income), for simplicity.
```
from sklearn.linear_model import LinearRegression
```
target_scaler = StandardScaler()
```
```
scaled_labels =
```
```
target_scaler.fit_transform(housing_labels.to_frame())
```
```
model = LinearRegression()
```
```
model.fit(housing[["median_income"]], scaled_labels)
```
```
some_new_data = housing[["median_income"]].iloc[:5] # pretend this
```
is new data
```
scaled_predictions = model.predict(some_new_data)
```
```
predictions = target_scaler.inverse_transform(scaled_predictions)
```
This works fine, but there’s a simpler way: we can use a
TransformedTargetRegressor. We just need to construct it, giving it
the regression model and the label transformer, then fit it on the training set,
using the original unscaled labels. It will automatically use the transformer to
scale the labels, and train the regression model on the resulting scaled labels,
just like we did above. Then when we make a prediction, it will call the
```
regression model’s predict() method and use the scaler’s
```
```
inverse_transform() method to produce the predictions:
```
from sklearn.compose import TransformedTargetRegressor
```
model = TransformedTargetRegressor(LinearRegression(),
```
```
transformer=StandardScaler())
```
```
model.fit(housing[["median_income"]], housing_labels)
```
```
predictions = model.predict(some_new_data)
```
Custom Transformers
Although Scikit-Learn provides many useful transformers, you will need to
write your own for tasks such as custom transformations, cleanup operations, or
combining specific attributes.
For transformations that don’t require any training, you can just write a function
that takes a NumPy array as input, and outputs the transformed array. For
example, as we discussed in the previous section, it’s often a good idea to
transform features with heavy-tailed distributions by replacing them with their
```
logarithm (assuming the feature is positive and the tail is on the right). Let’s
```
create a log-transformer, and apply it to the population feature:
from sklearn.preprocessing import FunctionTransformer
```
log_transformer = FunctionTransformer(np.log, inverse_func=np.exp)
```
```
log_pop = log_transformer.transform(housing[["population"]])
```
The inverse_func argument is optional. It lets you specify an inverse
transform function, for example if you plan to use your transformer in a
TransformedTargetRegressor.
Your transformation function can take hyperparameters as additional
arguments. For example, here’s how to create a transformer that computes the
same Gaussian RBF similarity measure as earlier:
```
rbf_transformer = FunctionTransformer(rbf_kernel,
```
```
kw_args=dict(Y=[[35.]],
```
```
gamma=0.1))
```
```
age_simil_35 =
```
```
rbf_transformer.transform(housing[["housing_median_age"]])
```
Note that there’s no inverse function for the RBF kernel, since there are always
```
two values at a given distance from a fixed point (except at distance 0). Also
```
```
note that rbf_kernel() does not treat the features separately. If you pass it
```
```
an array with 2 features, it will measure the 2D distance (Euclidean) to measure
```
similarity. For example, here’s how to add a feature that will measure the
geographic similarity between each district and San Francisco:
```
sf_coords = 37.7749, -122.41
```
```
sf_transformer = FunctionTransformer(rbf_kernel,
```
```
kw_args=dict(Y=[sf_coords],
```
```
gamma=0.1))
```
```
sf_simil = sf_transformer.transform(housing[["latitude",
```
```
"longitude"]])
```
Custom transformers are also useful to combine features. For example, here’s a
FunctionTransformer that computes the ratio between the input features
0 and 1:
```
>>> ratio_transformer = FunctionTransformer(lambda X: X[:, [0]] /
```
```
X[:, [1]])
```
```
>>> ratio_transformer.transform(np.array([[1., 2.], [3., 4.]]))
```
```
array([[0.5 ],
```
```
[0.75]])
```
FunctionTransformer is very handy, but what if you would like your
```
transformer to be trainable, learning some parameters in the fit() method
```
```
and using them later in the transform() method? For this, you need to write
```
a custom class. Scikit-Learn relies on duck typing, so this class does not have to
```
inherit from any particular base class: all it needs is three methods: fit()
```
```
(which must return self), transform(), and fit_transform().
```
```
You can get fit_transform() for free by simply adding
```
TransformerMixin as a base class: the default implementation will just
```
call fit() then transform(). If you add BaseEstimator as a base
```
```
class (and avoid using *args and **kargs in your constructor), you will
```
```
also get two extra methods: get_params() and set_params(). These
```
will be useful for automatic hyperparameter tuning.
For example, here’s a custom transformer that acts much like the
```
StandardScaler:
```
from sklearn.base import BaseEstimator, TransformerMixin
from sklearn.utils.validation import check_array, check_is_fitted
```
class StandardScalerClone(BaseEstimator, TransformerMixin):
```
```
def __init__(self, with_mean=True): # no *args or **kwargs!
```
self.with_mean = with_mean
```
def fit(self, X, y=None): # y is required even though we don't
```
use it
```
X = check_array(X) # checks that X is an array with finite
```
float values
```
self.mean_ = X.mean(axis=0)
```
```
self.scale_ = X.std(axis=0)
```
self.n_features_in_ = X.shape[1] # every estimator stores
```
this in fit()
```
return self # always return self!
```
def transform(self, X):
```
```
check_is_fitted(self) # looks for learned attributes (with
```
```
trailing _)
```
```
X = check_array(X)
```
assert self.n_features_in_ == X.shape[1]
if self.with_mean:
```
X = X - self.mean_
```
return X / self.scale_
Here are a few things to note:
The sklearn.utils.validation package contains several
functions we can use to validate the inputs. For simplicity, we will skip
such tests in the rest of this book, but production code should have
them.
```
Scikit-Learn pipelines require the fit() method to have two
```
arguments X and y, which is why we need the y=None argument even
though we don’t use y.
```
All Scikit-Learn estimators set n_features_in_ in the fit()
```
```
method, and they ensure that the data passed to transform() or
```
```
predict() has this number of features.
```
```
The fit() method must return self.
```
This implementation is not 100% complete: all estimators should set
```
feature_names_in_ in the fit() method when they are passed
```
a DataFrame. Moreover, all transformers should provide a
```
get_feature_names_out() method, as well as an
```
```
inverse_transform() method when their transformation can be
```
reversed. See the last exercise at the end of this chapter for more
details.
TIP
You can check whether your custom estimator respects Scikit-Learn’s API by passing an
```
instance to check_estimator() from the sklearn.utils.estimator_checks
```
package. For the full API, check out https://scikit-learn.org/stable/developers/.
```
A custom transformer can (and often does) use other estimators in its
```
implementation. For example, below we see a custom transformer that uses a
```
KMeans clusterer in the fit() method to identify the main clusters in the
```
```
training data, and then uses rbf_kernel() in the transform() method to
```
measure how similar each sample is to each cluster center:
from sklearn.cluster import KMeans
```
class ClusterSimilarity(BaseEstimator, TransformerMixin):
```
```
def __init__(self, n_clusters=10, gamma=1.0, random_state=None):
```
self.n_clusters = n_clusters
self.gamma = gamma
self.random_state = random_state
```
def fit(self, X, y=None, sample_weight=None):
```
```
self.kmeans_ = KMeans(self.n_clusters,
```
```
random_state=self.random_state)
```
```
self.kmeans_.fit(X, sample_weight=sample_weight)
```
return self # always return self!
```
def transform(self, X):
```
```
return rbf_kernel(X, self.kmeans_.cluster_centers_,
```
```
gamma=self.gamma)
```
```
def get_feature_names_out(self, names=None):
```
```
return [f"Cluster {i} similarity" for i in
```
```
range(self.n_clusters)]
```
As we will see in Chapter 9, K-Means is a clustering algorithm that locates
clusters in the data. How many it searches for is controlled by the
n_clusters hyperparameter. After training, the cluster centers are available
```
via the cluster_centers_ attribute. The fit() method of KMeans
```
supports an optional argument sample_weight which lets the user specify
the relative weights of the samples. K-Means is a stochastic algorithm, meaning
that it relies on randomness to locate the clusters, so if you want reproducible
results, you must set the random_state parameter. As you can see, despite
the complexity of the task, the code is fairly straightforward. Now let’s use this
custom transformer:
```
cluster_simil = ClusterSimilarity(n_clusters=10, gamma=1.,
```
```
random_state=42)
```
```
similarities = cluster_simil.fit_transform(housing[["latitude",
```
"longitude"]],
```
sample_weight=housing_labels)
```
This code creates a ClusterSimilarity transformer, setting the number of
```
clusters to 10 clusters. Then it calls fit_transform() with the latitude and
```
longitude of every district in the training set, weighting each district by its
median house value. The transformer uses K-Means to locate the clusters, then
measures the Gaussian RBF similarity between each district and all 10 cluster
centers. The result is a matrix with one row per district, and one column per
cluster. Let’s look at the first 3 rows, rounding to 2 decimals:
```
>>> similarities[:3].round(2)
```
```
array([[0. , 0.14, 0. , 0. , 0. , 0.08, 0. , 0.99, 0. , 0.6 ],
```
[0.63, 0. , 0.99, 0. , 0. , 0. , 0.04, 0. , 0.11, 0. ],
```
[0. , 0.29, 0. , 0. , 0.01, 0.44, 0. , 0.7 , 0. , 0.3 ]])
```
Figure 2-19 shows the 10 cluster centers found by K-Means. The districts are
colored according to their geographic similarity to their closest cluster center.
As you can see, most clusters are located in highly populated and expensive
areas.
Figure 2-19. Gaussian RBF similarity to the nearest cluster center
Transformation Pipelines
As you can see, there are many data transformation steps that need to be
executed in the right order. Fortunately, Scikit-Learn provides the Pipeline
class to help with such sequences of transformations. Here is a small pipeline
for numerical attributes, which will first impute then scale the input features:
from sklearn.pipeline import Pipeline
```
num_pipeline = Pipeline([
```
```
("impute", SimpleImputer(strategy="median")),
```
```
("standardize", StandardScaler()),
```
```
])
```
```
The Pipeline constructor takes a list of name/estimator pairs (2-tuples)
```
defining a sequence of steps. The names can be anything you like, as long as
they are unique and don’t contain double underscores, __. They will be useful
later when we discuss hyperparameter tuning. The estimators must all be
```
transformers (i.e., they must have a fit_transform() method), except for
```
the last one, which can be anything: a transformer, a predictor, or any other type
of estimator.
TIP
In a Jupyter notebook, if you import sklearn and run
```
sklearn.set_config(display="diagram"), all Scikit-Learn estimators will be
```
rendered as interactive diagrams. This is particularly useful to visual pipelines. To visualize
num_pipeline, run a cell with num_pipeline as the last line. Clicking on an estimator
will show more details.
If you don’t want to bother naming the transformers, you can use the
```
make_pipeline() function instead: it just takes a list of transformers as
```
positional arguments, and it creates a Pipeline using the names of the
```
transformers’ classes, in lower case and without underscores (e.g.,
```
```
“simpleimputer”). In case multiple transformers have the same name, an index
```
```
is appended to their names (e.g., “foo-1”, “foo-2”, etc.).
```
from sklearn.pipeline import make_pipeline
```
num_pipeline = make_pipeline(SimpleImputer(strategy="median"),
```
```
StandardScaler())
```
```
When you call the pipeline’s fit() method, it calls fit_transform()
```
sequentially on all transformers, passing the output of each call as the parameter
to the next call until it reaches the final estimator, for which it just calls the
```
fit() method.
```
The pipeline exposes the same methods as the final estimator. In this example,
the last estimator is a StandardScaler which is a transformer so the
```
pipeline also acts like a transformer. If you call the pipeline’s transform()
```
method, it will sequentially apply all the transformations to the data. If the last
estimator were a predictor instead of a transformer, then the pipeline would
```
have a predict() method rather than a transform() method. Calling it
```
would sequentially apply all the transformations to the data and pass the result
```
to the predictor’s predict() method.
```
```
Let’s call the pipeline’s fit_transform() method and look at the output’s
```
first two rows, rounded to 2 decimals:
```
>>> housing_num_prepared = num_pipeline.fit_transform(housing_num)
```
```
>>> housing_num_prepared[:2].round(2)
```
```
array([[-1.42, 1.01, 1.86, 0.31, 1.37, 0.14, 1.39, -0.94],
```
```
[ 0.6 , -0.7 , 0.91, -0.31, -0.44, -0.69, -0.37, 1.17]])
```
As we saw earlier, we can recover a nice DataFrame using the pipeline’s
```
get_feature_names_out() method:
```
```
df_housing_num_prepared = pd.DataFrame(
```
housing_num_prepared,
```
columns=num_pipeline.get_feature_names_out(),
```
```
index=housing_num.index)
```
Pipelines support indexing, for example pipeline[1] returns the second
estimator in the pipeline, and pipeline[:-1] returns a Pipeline object
containing all but the last estimator. You can also access the estimators via the
steps attribute, which is a list of name/estimator pairs, or via the
name_steps dictionary attribute which maps the names to the estimators. For
example num_pipeline["simpleimputer"] returns the estimator
named "simpleimputer".
So far, we have handled the categorical columns and the numerical columns
separately. It would be more convenient to have a single transformer capable of
handling all columns, applying the appropriate transformations to each column.
For this, you can use a ColumnTransformer. For example, the following
```
ColumnTransformer will apply num_pipeline (the one we just
```
```
defined) to the numerical attributes, and cat_pipeline to the categorical
```
```
attribute:
```
from sklearn.compose import ColumnTransformer
```
num_attribs = ["longitude", "latitude", "housing_median_age",
```
"total_rooms",
"total_bedrooms", "population", "households",
"median_income"]
```
cat_attribs = ["ocean_proximity"]
```
```
cat_pipeline = make_pipeline(
```
```
SimpleImputer(strategy="most_frequent"),
```
```
OneHotEncoder(handle_unknown="ignore"))
```
```
preprocessing = ColumnTransformer([
```
```
("num", num_pipeline, num_attribs),
```
```
("cat", cat_pipeline, cat_attribs),
```
```
])
```
First we import the ColumnTransformer class, next we define the list of
numerical and categorical column names, we construct a simple pipeline for
categorical attributes, and lastly we construct a ColumnTransformer. Its
```
constructor requires a list of triplets (3-tuples), each containing a name (which
```
```
must be unique and not contain double underscores), a transformer, and a list of
```
```
names (or indices) of columns that the transformer should be applied to.
```
TIP
Instead of using a transformer, you can specify the string "drop" if you want the columns to
be dropped, or you can specify "passthrough" if you want the columns to be left
```
untouched. By default, the remaining columns (i.e., the ones that were not listed) will be
```
```
dropped, but you can set the remainder hyperparameter to any transformer (or to
```
```
"passthrough") if you want these columns to be handled differently.
```
Since listing all the column names is not very convenient, Scikit-Learn provides
```
a make_column_selector() function that returns a selector function you
```
can use to automatically select all the features of a given type, such as
numerical or categorical. This selector function can be passed to the
ColumnTransformer instead of column names or indices. Moreover, if you
don’t care about naming the transformers, you can use
```
make_column_transformer() which chooses the names for you, just
```
```
like make_pipeline() does. For example, the following code creates the
```
same ColumnTransformer as above, except the transformers are
automatically named "pipeline-1" and "pipeline-2" instead of
"num" and "cat":
from sklearn.compose import make_column_selector,
make_column_transformer
```
preprocessing = make_column_transformer(
```
```
(num_pipeline, make_column_selector(dtype_include=np.number)),
```
```
(cat_pipeline, make_column_selector(dtype_include=np.object)),
```
```
)
```
Now we’re ready to apply this ColumnTransformer to the housing data:
```
housing_prepared = preprocessing.fit_transform(housing)
```
Great! We have a preprocessing pipeline that takes the entire training data and
applies each transformer to the appropriate columns, then concatenates the
```
transformed columns horizontally (transformers must never change the number
```
```
of rows). Once again this returns a NumPy array, but you can get the column
```
```
names using preprocessing.get_feature_names_out() and wrap
```
the data in a nice DataFrame as we did before.
NOTE
The OneHotEncoder returns a sparse matrix, while the num_pipeline returns a dense
matrix. When there is such a mix of sparse and dense matrices, the ColumnTransformer
```
estimates the density of the final matrix (i.e., the ratio of nonzero cells), and it returns a
```
```
sparse matrix if the density is lower than a given threshold (by default,
```
```
sparse_threshold=0.3). In this example, it returns a dense matrix.
```
Your project’s going really well, you’re almost ready to train some models! You
now want to create a single pipeline that will perform all the transformations
you’ve experimented with up to now. Let’s recap what the pipeline will do and
```
why:
```
Missing values in numerical features will be imputed by replacing
them with the median, as most ML algorithms don’t expect missing
values. As for the categorical feature, any missing values will be
replaced by the most frequent category.
The categorical feature will be one-hot encoded, as most ML
algorithms only accept numerical inputs.
A few ratio features will be computed and added:
bedrooms_ratio, rooms_per_house and
people_per_house. Hopefully these will better correlate with the
median housing value, and thereby help the ML models.
A few cluster similarity features will also be added. These will likely
be more useful to the model than latitude and longitude.
Features with a long tail will be replaced by their logarithm, as most
models prefer features with roughly uniform or Gaussian distributions.
All numerical features will be standardized, as most ML algorithms
prefer when all features have roughly the same scale.
The code that builds the pipeline to do all of this has no secret for you by now:
```
def column_ratio(X):
```
return X[:, [0]] / X[:, [1]]
```
def ratio_pipeline(name=None):
```
```
return make_pipeline(
```
```
SimpleImputer(strategy="median"),
```
```
FunctionTransformer(column_ratio,
```
```
feature_names_out=lambda input_features:
```
```
[name]),
```
```
StandardScaler())
```
```
log_pipeline = make_pipeline(SimpleImputer(strategy="median"),
```
```
FunctionTransformer(np.log),
```
```
StandardScaler())
```
```
cluster_simil = ClusterSimilarity(n_clusters=10, gamma=1.,
```
```
random_state=42)
```
```
default_num_pipeline =
```
```
make_pipeline(SimpleImputer(strategy="median"),
```
```
StandardScaler())
```
```
preprocessing = ColumnTransformer([
```
```
("bedrooms_ratio", ratio_pipeline("bedrooms_ratio"),
```
```
["total_bedrooms", "total_rooms"]),
```
```
("rooms_per_house", ratio_pipeline("rooms_per_house"),
```
```
["total_rooms", "households"]),
```
```
("people_per_house", ratio_pipeline("people_per_house"),
```
```
["population", "households"]),
```
```
("log", log_pipeline, ["total_bedrooms", "total_rooms",
```
"population", "households",
```
"median_income"]),
```
```
("geo", cluster_simil, ["latitude", "longitude"]),
```
```
("cat", cat_pipeline,
```
```
make_column_selector(dtype_include=np.object)),
```
],
```
remainder=default_num_pipeline) # one column remaining:
```
housing_median_age
If you run this column transformer, it performs all the transformations and
outputs a NumPy array with 24 features:
```
>>> housing_prepared = preprocessing.fit_transform(housing)
```
>>> housing_prepared.shape
```
(16512, 24)
```
```
>>> preprocessing.get_feature_names_out()
```
```
array(['bedrooms_ratio__bedrooms_ratio',
```
'rooms_per_house__rooms_per_house',
'people_per_house__people_per_house', 'log__total_bedrooms',
'log__total_rooms', 'log__population', 'log__households',
'log__median_income', 'geo__Cluster 0 similarity', [...],
'geo__Cluster 9 similarity', 'cat__ocean_proximity_<1H OCEAN',
'cat__ocean_proximity_INLAND', 'cat__ocean_proximity_ISLAND',
'cat__ocean_proximity_NEAR BAY', 'cat__ocean_proximity_NEAR
OCEAN',
```
'remainder__housing_median_age'], dtype=object)
```
Select and Train a Model
At last! You framed the problem, you got the data and explored it, you sampled
a training set and a test set, and you wrote a preprocessing pipeline to
automatically clean up and prepare your data for Machine Learning algorithms.
You are now ready to select and train a Machine Learning model.
Training and Evaluating on the Training Set
The good news is that thanks to all these previous steps, things are now going
to be easy! You decide to train a very basic Linear Regression model to get
```
started:
```
from sklearn.linear_model import LinearRegression
```
lin_reg = make_pipeline(preprocessing, LinearRegression())
```
```
lin_reg.fit(housing, housing_labels)
```
Done! You now have a working Linear Regression model. Let’s try it out on the
training set, looking at the first 5 predictions and comparing them to the labels:
```
>>> housing_predictions = lin_reg.predict(housing)
```
```
>>> housing_predictions[:5].round(-2) # -2 = rounded to the nearest
```
hundred
```
array([243700., 372400., 128800., 94400., 328300.])
```
>>> housing_labels.iloc[:5].values
```
array([458300., 483800., 101700., 96100., 361800.])
```
```
Well, it works, but not always: the first prediction is way off (by over
```
```
$200,000!), while the other predictions are better: two are off by about 25%,
```
and two are off by less than 10%. Remember that you chose to use the RMSE
as your performance measure, so you want to measure this regression model’s
RMSE on the whole training set using Scikit-Learn’s
```
mean_squared_error() function, with the squared argument set to
```
```
False:
```
>>> from sklearn.metrics import mean_squared_error
```
>>> lin_rmse = mean_squared_error(housing_labels,
```
housing_predictions,
```
... squared=False)
```
...
>>> lin_rmse
68687.89176589991
This is better than nothing, but clearly not a great score: most districts’
median_housing_values range between $120,000 and $265,000, so a
typical prediction error of $68,628 is really not very satisfying. This is an
example of a model underfitting the training data. When this happens it can
mean that the features do not provide enough information to make good
predictions, or that the model is not powerful enough. As we saw in the
previous chapter, the main ways to fix underfitting are to select a more
powerful model, to feed the training algorithm with better features, or to reduce
the constraints on the model. This model is not regularized, which rules out the
last option. You could try to add more features, but first you want to try a more
complex model to see how it does.
So you decide to try a DecisionTreeRegressor, as this is a fairly
powerful model capable of finding complex nonlinear relationships in the data
```
(Decision Trees are presented in more detail in Chapter 6):
```
from sklearn.tree import DecisionTreeRegressor
```
tree_reg = make_pipeline(preprocessing,
```
```
DecisionTreeRegressor(random_state=42))
```
```
tree_reg.fit(housing, housing_labels)
```
Now that the model is trained, you evaluate it on the training set:
```
>>> housing_predictions = tree_reg.predict(housing)
```
```
>>> tree_rmse = mean_squared_error(housing_labels,
```
housing_predictions,
```
... squared=False)
```
...
>>> tree_rmse
0.0
Wait, what!? No error at all? Could this model really be absolutely perfect? Of
course, it is much more likely that the model has badly overfit the data. How
can you be sure? As we saw earlier, you don’t want to touch the test set until
you are ready to launch a model you are confident about, so you need to use
part of the training set for training and part of it for model validation.
Better Evaluation Using Cross-Validation
One way to evaluate the Decision Tree model would be to use the
```
train_test_split() function to split the training set into a smaller
```
training set and a validation set, then train your models against the smaller
training set and evaluate them against the validation set. It’s a bit of work, but
nothing too difficult, and it would work fairly well.
A great alternative is to use Scikit-Learn’s K-fold cross-validation feature. The
following code randomly splits the training set into 10 non-overlapping subsets
called folds, then it trains and evaluates the Decision Tree model 10 times,
picking a different fold for evaluation every time and using the other 9 folds for
training. The result is an array containing the 10 evaluation scores:
from sklearn.model_selection import cross_val_score
```
tree_rmses = -cross_val_score(tree_reg, housing, housing_labels,
```
```
scoring="neg_root_mean_squared_error",
```
```
cv=10)
```
WARNING
```
Scikit-Learn’s cross-validation features expect a utility function (greater is better) rather than
```
```
a cost function (lower is better), so the scoring function is actually the opposite of the RMSE.
```
It’s a negative value, which is why we need to switch the sign of the output to get the RMSE
scores.
Let’s look at the results:
```
>>> pd.Series(tree_rmses).describe()
```
count 10.000000
mean 66868.027288
std 2060.966425
min 63649.536493
25% 65338.078316
50% 66801.953094
75% 68229.934454
max 70094.778246
```
dtype: float64
```
Now the Decision Tree doesn’t look as good as it did earlier. In fact, it seems to
perform almost as poorly as the Linear Regression model! Notice that cross-
validation allows you to get not only an estimate of the performance of your
```
model, but also a measure of how precise this estimate is (i.e., its standard
```
```
deviation). The Decision Tree has an RMSE of about 66,868, with a standard
```
deviation of about 2,061. You would not have this information if you just used
one validation set. But cross-validation comes at the cost of training the model
several times, so it is not always feasible.
If you compute the same metric for the Linear Regression model, you will find
that the mean RMSE is 69,858 and the standard deviation is 4,182. So the
Decision Tree model seems to perform very slightly better than the linear
model, but only marginally better due to severe overfitting. We know there’s an
```
overfitting problem because the training error is low (actually zero) while the
```
validation error is high.
Let’s try one last model now: the RandomForestRegressor. As we will
see in Chapter 7, Random Forests work by training many Decision Trees on
random subsets of the features, then averaging out their predictions. Such
models composed of many other models are called ensembles: they are capable
```
of boosting the performance of the underlying model (in this case, Decision
```
```
Trees). The code is much the same as earlier:
```
from sklearn.ensemble import RandomForestRegressor
```
forest_reg = make_pipeline(preprocessing,
```
```
RandomForestRegressor(random_state=42))
```
```
forest_rmses = -cross_val_score(forest_reg, housing, housing_labels,
```
```
scoring="neg_root_mean_squared_error", cv=10)
```
Let’s look at these scores:
```
>>> pd.Series(forest_rmses).describe()
```
count 10.000000
mean 47019.561281
std 1033.957120
min 45458.112527
25% 46464.031184
50% 46967.596354
75% 47325.694987
max 49243.765795
```
dtype: float64
```
Wow, this is much better: Random Forests really look very promising for this
task! However, if you train a RandomForest and measure the RMSE on the
training set, you will find about 17,474: that’s much lower, meaning that there’s
still quite a lot of overfitting going on. Possible solutions are to simplify the
```
model, constrain it (i.e., regularize it), or get a lot more training data. Before
```
you dive much deeper into Random Forests, however, you should try out many
```
other models from various categories of Machine Learning algorithms (e.g.,
```
several Support Vector Machines with different kernels, and possibly a neural
```
network), without spending too much time tweaking the hyperparameters. The
```
```
goal is to shortlist a few (two to five) promising models.
```
Fine-Tune Your Model
Let’s assume that you now have a shortlist of promising models. You now need
to fine-tune them. Let’s look at a few ways you can do that.
Grid Search
One option would be to fiddle with the hyperparameters manually, until you
find a great combination of hyperparameter values. This would be very tedious
work, and you may not have time to explore many combinations.
Instead, you can use Scikit-Learn’s GridSearchCV class to search for you.
All you need to do is tell it which hyperparameters you want it to experiment
with and what values to try out, and it will use cross-validation to evaluate all
the possible combinations of hyperparameter values. For example, the
following code searches for the best combination of hyperparameter values for
the RandomForestRegressor:
from sklearn.model_selection import GridSearchCV
```
full_pipeline = Pipeline([
```
```
("preprocessing", preprocessing),
```
```
("random_forest", RandomForestRegressor(random_state=42)),
```
```
])
```
```
param_grid = [
```
```
{'preprocessing__geo__n_clusters': [5, 8, 10],
```
```
'random_forest__max_features': [4, 6, 8]},
```
```
{'preprocessing__geo__n_clusters': [10, 15],
```
```
'random_forest__max_features': [6, 8, 10]},
```
]
```
grid_search = GridSearchCV(full_pipeline, param_grid, cv=3,
```
```
scoring='neg_root_mean_squared_error')
```
```
grid_search.fit(housing, housing_labels)
```
Notice that you can refer to any hyperparameter of any estimator in a pipeline,
even if this estimator is nested deep inside several pipelines and column
transformers. For example, when Scikit-Learn sees
"preprocessing__geo__n_clusters", it splits this string at the
double underscores, then it looks for an estimator named "preprocessing"
inside the pipeline and finds the preprocessing ColumnTransformer. Then
it looks for a transformer named "geo" inside this ColumnTransformer
and finds the ClusterSimilarity transformer we used on the latitude and
longitude attributes. The it finds this transformer’s n_clusters
hyperparameter. Similarly, random_forest__max_features refers to
the max_features hyperparameter of the estimator named “random_forest”,
```
which is of course the RandomForest model (the max_features
```
```
hyperparameter will be explained in Chapter 7).
```
TIP
Wrapping preprocessing steps in a Scikit-Learn pipeline allows you to tune the preprocessing
hyperparameters along with the model hyperparameters. This is a good thing since they often
interact. For example, perhaps increasing n_clusters requires increasing
max_features as well. If fitting the pipeline transformers is computationally expensive,
you can set the pipeline’s memory hyperparameter to the path of a caching directory: when
you first fit the pipeline, Scikit-Learn will save the fitted transformers to this directory. If you
then fit the pipeline again with the same hyperparameters, Scikit-Learn will just load the
cached transformers.
There are two dictionaries in this param_grid, so GridSearchCV will first
evaluate all 3 × 3 = 9 combinations of n_clusters and max_features
hyperparameter values specified in the first dict, then it will try all 2 × 3 = 6
combinations of hyperparameter values in the second dict. So in total the grid
search will explore 9 + 6 = 15 combinations of hyperparameter values, and it
will train the pipeline 3 times per combination, since we are using three-fold
cross validation. So there will be a grand total of 15 × 3 = 45 rounds of training!
It may take a while, but when it is done you can get the best combination of
parameters like this:
>>> grid_search.best_params_
```
{'preprocessing__geo__n_clusters': 15, 'random_forest__max_features':
```
```
6}
```
In this example, the best model is obtained by setting n_clusters to 15 and
max_features to 8.
TIP
Since 15 is the maximum value that was evaluated for n_clusters, you should probably
```
try searching again with higher values; the score may continue to improve.
```
The best estimator is available using grid_search.best_estimator_.
```
If GridSearchCV is initialized with refit=True (which is the default),
```
then once it finds the best estimator using cross-validation, it retrains it on the
whole training set. This is usually a good idea, since feeding it more data will
likely improve its performance.
The evaluation scores are available using grid_search.cv_results_.
This is a dictionary, but if you wrap it in a DataFrame, you get a nice list of all
the test scores for each combination of hyperparameters and for each cross-
validation split, as well as the mean test score across all splits.
```
>>> cv_res = pd.DataFrame(grid_search.cv_results_)
```
```
>>> cv_res.sort_values(by="mean_test_score", ascending=False,
```
```
inplace=True)
```
>>> [...] # change column names to fit on this page, and show rmse =
-score
```
>>> cv_res.head()
```
n_clusters max_features split0 split1 split2 mean_test_rmse
12 15 6 43460 43919 44748 44042
13 15 8 44132 44075 45010 44406
14 15 10 44374 44286 45316 44659
7 10 6 44683 44655 45657 44999
9 10 6 44683 44655 45657 44999
The mean test RMSE score for the best model is 44,042, which is better than
```
the score you got earlier using the default hyperparameter values (which was
```
```
47,019). Congratulations, you have successfully fine-tuned your best model!
```
Randomized Search
The grid search approach is fine when you are exploring relatively few
combinations, like in the previous example, but RandomizedSearchCV is
often preferable, especially when the hyperparameter search space is large. This
class can be used in much the same way as the GridSearchCV class, but
instead of trying out all possible combinations, it evaluates a fixed number of
combinations, selecting a random value for each hyperparameter at every
iteration. This may sound surprising, but this approach has several benefits:
```
If some of your hyperparameters are continuous (or discrete but with
```
```
many possible values), and you let randomized search run for, say,
```
1,000 iterations, then it will explore 1,000 different values for each of
these hyperparameters, whereas grid search would only explore the
few values you listed for each one.
Suppose a hyperparameter does not actually make much difference, but
you don’t know it yet. If it has 10 possible values you add it to your
grid search, then training will take 10 times longer. But if you add it to
a random search, it will not make any difference.
Suppose there are 6 hyperparameters to explore, each with 10 possible
values, then grid search offers no other choice than training the model
a million times, whereas random search can always run for any number
of iterations you choose.
For each hyperparameter, you must provide either a list of possible values, or a
probability distribution:
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint
```
param_distribs = {'preprocessing__geo__n_clusters': randint(low=3,
```
```
high=50),
```
```
'random_forest__max_features': randint(low=2,
```
```
high=20)}
```
```
rnd_search = RandomizedSearchCV(
```
full_pipeline, param_distributions=param_distribs, n_iter=10,
```
cv=3,
```
```
scoring='neg_root_mean_squared_error', random_state=42)
```
```
rnd_search.fit(housing, housing_labels)
```
Scikit-Learn also has two other hyperparameter search classes:
HalvingRandomSearchCV and HalvingGridSearchCV. Their goal is
to use the computational resources more efficiently, either to train faster or to
explore a larger hyperparameter space. Here’s how they work: in the first round,
```
many hyperparameter combinations (called “candidates”) are generated using
```
either the grid approach or the random approach. These candidates are then
used to train models which are then evaluated using cross-validation, as usual.
However, training uses limited resources which speeds up this first round
considerably. By default, “limited resources” means that the models are trained
on a small part of the training set. However, other limitations are possible, such
as reducing the number of training iterations if the model has a hyperparameter
to set it. Once every candidate has been evaluated, only the best ones go on to
the second round, where they are allowed more resources to compete. After
several rounds, the final candidates are evaluated using full resources. This may
save you some time tuning hyperparameters.
Ensemble Methods
Another way to fine-tune your system is to try to combine the models that
```
perform best. The group (or “ensemble”) will often perform better than the best
```
individual model—just like Random Forests perform better than the individual
Decision Trees they rely on—especially if the individual models make very
different types of errors. For example, you could train and fine-tune a k-Nearest
Neighbors model, then create an ensemble model that just predicts the mean of
the random forest prediction and the KNN’s prediction. We will cover this topic
in more detail in Chapter 7.
Analyze the Best Models and Their Errors
You will often gain good insights on the problem by inspecting the best models.
For example, the RandomForestRegressor can indicate the relative
importance of each attribute for making accurate predictions:
>>> final_model = rnd_search.best_estimator_ # includes
preprocessing
>>> feature_importances =
final_model["random_forest"].feature_importances_
```
>>> feature_importances.round(2)
```
```
array([0.07, 0.05, 0.05, 0.01, 0.01, 0.01, 0.01, 0.19, [...], 0.01])
```
Let’s sort these importance scores in descending order and display them next to
their corresponding attribute names:
```
>>> sorted(zip(feature_importances,
```
```
... final_model["preprocessing"].get_feature_names_out()),
```
```
... reverse=True)
```
...
```
[(0.18694559869103852, 'log__median_income'),
```
```
(0.0748194905715524, 'cat__ocean_proximity_INLAND'),
```
```
(0.06926417748515576, 'bedrooms_ratio__bedrooms_ratio'),
```
```
(0.05446998753775219, 'rooms_per_house__rooms_per_house'),
```
```
(0.05262301809680712, 'people_per_house__people_per_house'),
```
```
(0.03819415873915732, 'geo__Cluster 0 similarity'),
```
[...]
```
(0.00015061247730531558, 'cat__ocean_proximity_NEAR BAY'),
```
```
(7.301686597099842e-05, 'cat__ocean_proximity_ISLAND')]
```
With this information, you may want to try dropping some of the less useful
```
features (e.g., apparently only one ocean_proximity category is really
```
```
useful, so you could try dropping the others).
```
TIP
The sklearn.feature_selection.SelectFromModel transformer can
automatically drop the least useful features for you: when you fit it, it trains a model
```
(typically a random forest), it looks at its feature_importances_ attribute, and it
```
```
selects the most useful features. Then when you call transform(), it just drops the other
```
features.
You should also look at the specific errors that your system makes, then try to
understand why it makes them and what could fix the problem: adding extra
features or getting rid of uninformative ones, cleaning up outliers, etc.
Now is also a good time to ensure that your model not only works well on
average, but also on all categories of districts, whether they’re rural or urban,
rich or poor, North or South, minority or not, etc. This requires a bit of work
creating subsets of your validation set for each category, but it’s important: if
your model performs poorly on a whole category of districts, then it should
probably not be deployed until the issue is solved, or at least it should not be
used to make predictions for that category, as it may do more harm than good.
Evaluate Your System on the Test Set
After tweaking your models for a while, you eventually have a system that
performs sufficiently well. You are ready to evaluate the final model on the test
```
set. There is nothing special about this process; just get the predictors and the
```
labels from your test set, and run your final_model to transform the data
and make predictions, then evaluate these predictions:
```
X_test = strat_test_set.drop("median_house_value", axis=1)
```
```
y_test = strat_test_set["median_house_value"].copy()
```
```
final_predictions = final_model.predict(X_test)
```
```
final_rmse = mean_squared_error(y_test, final_predictions,
```
```
squared=False)
```
```
print(final_rmse) # prints 41424.40026462184
```
In some cases, such a point estimate of the generalization error will not be quite
enough to convince you to launch: what if it is just 0.1% better than the model
currently in production? You might want to have an idea of how precise this
estimate is. For this, you can compute a 95% confidence interval for the
```
generalization error using scipy.stats.t.interval(). We get a fairly
```
large interval from 39,275 to 43,467, and our previous point estimate of 41,424
is roughly in the middle of it:
>>> from scipy import stats
>>> confidence = 0.95
```
>>> squared_errors = (final_predictions - y_test) ** 2
```
```
>>> np.sqrt(stats.t.interval(confidence, len(squared_errors) - 1,
```
```
... loc=squared_errors.mean(),
```
```
... scale=stats.sem(squared_errors)))
```
...
```
array([39275.40861216, 43467.27680583])
```
If you did a lot of hyperparameter tuning, the performance will usually be
slightly worse than what you measured using cross-validation. That’s because
your system ends up fine-tuned to perform well on the validation data and will
likely not perform as well on unknown datasets. It is not the case in this
example since the test RMSE is lower than the validation RMSE, but when it
happens you must resist the temptation to tweak the hyperparameters to make
```
the numbers look good on the test set; the improvements would be unlikely to
```
generalize to new data.
Now comes the project prelaunch phase: you need to present your solution
```
(highlighting what you have learned, what worked and what did not, what
```
```
assumptions were made, and what your system’s limitations are), document
```
everything, and create nice presentations with clear visualizations and easy-to-
```
remember statements (e.g., “the median income is the number one predictor of
```
```
housing prices”). In this California housing example, the final performance of
```
the system is not much better than the experts’ price estimates which were often
off by 30%, but it may still be a good idea to launch it, especially if this frees up
some time for the experts so they can work on more interesting and productive
tasks.
Launch, Monitor, and Maintain Your System
Perfect, you got approval to launch! You now need to get your solution ready
```
for production (e.g., polish the code, write documentation and tests, and so on).
```
Then you can deploy your model to your production environment. The most
basic way to do this is just to save the best model you trained, transfer the file
to your production environment, and load it. To save the model, you can use the
joblib library like this:
import joblib
```
joblib.dump(final_model, "my_california_housing_model.pkl")
```
TIP
It’s often a good idea to save every model you experiment with so that you can come back
easily to any model you want. You may also save the cross-validation scores and perhaps the
actual predictions on the validation set. This will allow you to easily compare scores across
model types, and compare the types of errors they make.
Once your model is transferred to production, you can load it and use it. For
this you must first import any custom classes and functions the model relies on
```
(which means transferring the code to production), then load the model using
```
joblib and use it to make predictions:
import joblib
[...] # import KMeans, BaseEstimator, TransformerMixin, rbf_kernel,
etc.
```
def column_ratio(X):
```
return X[:, [0]] / X[:, [1]]
```
class ClusterSimilarity(BaseEstimator, TransformerMixin):
```
[...]
```
final_model_reloaded = joblib.load("my_california_housing_model.pkl")
```
```
new_data = [...] # some new districts to make predictions for
```
```
predictions = final_model_reloaded.predict(new_data)
```
For example, perhaps the model will be used within a website: the user will
type in some data about a new district and click the “Estimate Price” button.
This will send a query containing the data to the web server, which will forward
it to your web application, and finally your code will simply call the model’s
```
predict() method (you want to load the model upon server startup, rather
```
```
than every time the model is used). Alternatively, you can wrap the model
```
within a dedicated web service that your web application can query through a
```
REST API (see Figure 2-20). This makes it easier to upgrade your model to
```
new versions without interrupting the main application. It also simplifies
scaling, since you can start as many web services as needed and load-balance
the requests coming from your web application across these web services.
Moreover, it allows your web application to use any programming language,
not just Python.
Figure 2-20. A model deployed as a web service and used by a web application
Another popular strategy is to deploy your model to the cloud, for example on
```
Google’s Vertex AI (formerly known as Google Cloud AI Platform and Google
```
```
Cloud ML Engine): just save your model using joblib and upload it to
```
```
Google Cloud Storage (GCS), then head over to Google Cloud AI Platform and
```
create a new model version, pointing it to the GCS file. That’s it! This gives
you a simple web service that takes care of load balancing and scaling for you.
```
It takes JSON requests containing the input data (e.g., of a district) and returns
```
JSON responses containing the predictions. You can then use this web service
```
in your website (or whatever production environment you are using). As we
```
will see in Chapter 19, deploying TensorFlow models on Vertex AI is not much
different from deploying Scikit-Learn models.
13
But deployment is not the end of the story. You also need to write monitoring
code to check your system’s live performance at regular intervals and trigger
alerts when it drops. It may drop very quickly, for example if a component
breaks in your infrastructure, but be aware that it could also decay very slowly,
which can easily go unnoticed for a long time. This is quite common because of
model rot: if the model was trained with last year’s data, it may not be adapted
to today’s data.
So you need to monitor your model’s live performance. But how do you that?
Well, it depends. In some cases, the model’s performance can be inferred from
downstream metrics. For example, if your model is part of a recommender
system and it suggests products that the users may be interested in, then it’s
easy to monitor the number of recommended products sold each day. If this
```
number drops (compared to non-recommended products), then the prime
```
suspect is the model. This may be because the data pipeline is broken, or
```
perhaps the model needs to be retrained on fresh data (as we will discuss
```
```
shortly).
```
However, you may also need human analysis to determine the model’s
performance. For example, suppose you trained an image classification model
```
(which we will see in Chapter 3) to detect several product defects on a
```
production line. How can you get an alert if the model’s performance drops,
before thousands of defective products get shipped to your clients? One
solution is to send to human raters a sample of all the pictures that the model
```
classified (especially pictures that the model wasn’t so sure about). Depending
```
on the task, the raters may need to be experts, or they could be nonspecialists,
```
such as workers on a crowdsourcing platform (e.g., Amazon Mechanical Turk).
```
In some applications they could even be the users themselves, responding for
example via surveys or repurposed captchas.
```
Either way, you need to put in place a monitoring system (with or without
```
```
human raters to evaluate the live model), as well as all the relevant processes to
```
define what to do in case of failures and how to prepare for them.
Unfortunately, this can be a lot of work. In fact, it is often much more work
than building and training a model.
If the data keeps evolving, you will need to update your datasets and retrain
your model regularly. You should probably automate the whole process as
14
much as possible. Here are a few things you can automate:
```
Collect fresh data regularly and label it (e.g., using human raters).
```
Write a script to train the model and fine-tune the hyperparameters
automatically. This script could run automatically, for example every
day or every week, depending on your needs.
Write another script that will evaluate both the new model and the
previous model on the updated test set, and deploy the model to
```
production if the performance has not decreased (if it did, make sure
```
```
you investigate why). The script should probably test the performance
```
of your model on various subsets of the test set, such as poor or rich
districts, rural or urban districts, etc.
You should also make sure you evaluate the model’s input data quality.
Sometimes performance will degrade slightly because of a poor-quality signal
```
(e.g., a malfunctioning sensor sending random values, or another team’s output
```
```
becoming stale), but it may take a while before your system’s performance
```
degrades enough to trigger an alert. If you monitor your model’s inputs, you
may catch this earlier. For example, you could trigger an alert if more and more
inputs are missing a feature, or if its mean or standard deviation drifts too far
from the training set, or a categorical feature starts containing new categories.
Finally, make sure you keep backups of every model you create and have the
process and tools in place to roll back to a previous model quickly, in case the
new model starts failing badly for some reason. Having backups also makes it
possible to easily compare new models with previous ones. Similarly, you
should keep backups of every version of your datasets so that you can roll back
```
to a previous dataset if the new one ever gets corrupted (e.g., if the fresh data
```
```
that gets added to it turns out to be full of outliers). Having backups of your
```
datasets also allows you to evaluate any model against any previous dataset.
As you can see, Machine Learning involves quite a lot of infrastructure.
Chapter 19 discusses some aspects of this, but it’s a very broad topic called ML
```
Operations (ML Ops) which deserves its own book. So don’t be surprised if
```
your first ML project takes a lot of effort and time to build and deploy to
production. Fortunately, once all the infrastructure is in place, going from idea
to production will be much faster.
Try It Out!
Hopefully this chapter gave you a good idea of what a Machine Learning
project looks like as well as showing you some of the tools you can use to train
a great system. As you can see, much of the work is in the data preparation
```
step: building monitoring tools, setting up human evaluation pipelines, and
```
automating regular model training. The Machine Learning algorithms are
important, of course, but it is probably preferable to be comfortable with the
overall process and know three or four algorithms well rather than to spend all
your time exploring advanced algorithms.
So, if you have not already done so, now is a good time to pick up a laptop,
select a dataset that you are interested in, and try to go through the whole
process from A to Z. A good place to start is on a competition website such as
```
http://kaggle.com/: you will have a dataset to play with, a clear goal, and people
```
to share the experience with. Have fun!
Exercises
The following exercises are based on this chapter’s housing dataset:
1. Try a Support Vector Machine regressor (sklearn.svm.SVR) with
```
various hyperparameters, such as kernel="linear" (with various
```
```
values for the C hyperparameter) or kernel="rbf" (with various
```
```
values for the C and gamma hyperparameters). Note that SVMs don’t
```
scale well to large datasets, so you should probably train your model
on just the first 5,000 instances of the training set and use only 3-fold
cross-validation, or else it will take hours. Don’t worry about what the
hyperparameters mean for now, we’ll discuss them in Chapter 5. How
does the best SVR predictor perform?
2. Try replacing the GridSearchCV with a RandomizedSearchCV.
3. Try adding a SelectFromModel transformer in the preparation
pipeline to select only the most important attributes.
4. Try creating a custom transformer that trains a k-Nearest Neighbors
```
regressor (sklearn.neighbors.KNeighborsRegressor) in
```
```
its fit() method, and outputs the model’s predictions in its
```
```
transform() method. Then add this feature to the preprocessing
```
pipeline, using latitude and longitude as the inputs to this transformer.
This will add a feature in the model that corresponds to the housing
median price of the nearest districts.
5. Automatically explore some preparation options using
GridSearchCV.
6. Try to implement the StandardScalerClone class again from
```
scratch, then add support for the inverse_transform() method:
```
executing
```
scaler.inverse_transform(scaler.fit_transform(X
```
```
)) should return an array very close to X. Then add support for feature
```
```
names: set feature_names_in_ in the fit() method if the input
```
is a DataFrame. This attribute should be a NumPy array of column
```
names. Lastly, implement the get_feature_names_out()
```
```
method: it should have one optional input_features=None
```
argument. If passed, the method should check that its length matches
n_features_in_, and it should match feature_names_in_ if
it is defined, then input_features should be returned. If
input_features is None, then the method should return
```
feature_names_in_ if it is defined or np.array(["x0",
```
```
"x1", ...]) with length n_features_in_ otherwise.
```
Solutions to these exercises are available at the end of this chapter’s notebook,
at https://homl.info/colab3.
1 The original dataset appeared in R. Kelley Pace and Ronald Barry, “Sparse Spatial
```
Autoregressions,” Statistics & Probability Letters 33, no. 3 (1997): 291–297.
```
2 A piece of information fed to a Machine Learning system is often called a signal, in reference to
Claude Shannon’s information theory, which he developed at Bell Labs to improve
telecommunications. His theory: you want a high signal-to-noise ratio.
```
3 Recall that the transpose operator flips a column vector into a row vector (and vice versa).
```
4 You might also need to check legal constraints, such as private fields that should never be copied to
unsafe data stores.
```
5 The standard deviation is generally denoted σ (the Greek letter sigma), and it is the square root of
```
the variance, which is the average of the squared deviation from the mean. When a feature has a
```
bell-shaped normal distribution (also called a Gaussian distribution), which is very common, the
```
“68-95-99.7” rule applies: about 68% of the values fall within 1σ of the mean, 95% within 2σ, and
99.7% within 3σ.
6 You will often see people set the random seed to 42. This number has no special property, other
than to be the Answer to the Ultimate Question of Life, the Universe, and Everything.
7 The location information is actually quite coarse, and as a result many districts will have the exact
```
same ID, so they will end up in the same set (test or train). This introduces some unfortunate
```
sampling bias.
8 If you are reading this in grayscale, grab a red pen and scribble over most of the coastline from the
```
Bay Area down to San Diego (as you might expect). You can add a patch of yellow around
```
Sacramento as well.
9 For more details on the design principles, see Lars Buitinck et al., “API Design for Machine
Learning Software: Experiences from the Scikit-Learn Project” ,” arXiv preprint arXiv:1309.0238
```
(2013).
```
10 Some predictors also provide methods to measure the confidence of their predictions.
11 By the time you read these lines, it may be possible to make all transformers output Pandas
DataFrames when they receive a DataFrame as input: Pandas in, Pandas out. There will be a global
```
configuration option for this: sklearn.set_config(pandas_in_out=True).
```
12 See SciPy’s documentation for more details.
```
13 In a nutshell, a REST (or RESTful) API is an HTTP-based API that follows some conventions,
```
```
such as using standard HTTP verbs to read, update, create, or delete resources (GET, POST, PUT,
```
```
and DELETE) and using JSON for the inputs and outputs.
```
14 A captcha is a test to ensure a user is not a robot. These tests have often been used as a cheap way
to label training data.
Chapter 3. Classification
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take
advantage of these technologies long before the official release of these
titles.
This will be the 3rd chapter of the final book. Notebooks are available
on GitHub at https://github.com/ageron/handson-ml3. Datasets are
available at https://github.com/ageron/data.
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this
chapter, please reach out to the editoor at ntache@oreilly.com.
In Chapter 1 I mentioned that the most common supervised learning tasks
```
are regression (predicting values) and classification (predicting classes). In
```
Chapter 2 we explored a regression task, predicting housing values, using
various algorithms such as Linear Regression, Decision Trees, and Random
```
Forests (which will be explained in further detail in later chapters). Now we
```
will turn our attention to classification systems.
MNIST
In this chapter we will be using the MNIST dataset, which is a set of 70,000
small images of digits handwritten by high school students and employees
of the US Census Bureau. Each image is labeled with the digit it represents.
This set has been studied so much that it is often called the “hello world” of
Machine Learning: whenever people come up with a new classification
algorithm they are curious to see how it will perform on MNIST, and
anyone who learns Machine Learning tackles this dataset sooner or later.
Scikit-Learn provides many helper functions to download popular datasets.
MNIST is one of them. The following code fetches the MNIST dataset from
OpenML.org:
from sklearn.datasets import fetch_openml
```
mnist = fetch_openml('mnist_784', as_frame=False)
```
The sklearn.datasets package contains mostly three types of
```
functions: fetch_* functions such as fetch_openml() to download
```
real-life datasets, load_* functions to load small toy datasets bundled with
```
Scikit-Learn (so they don’t need to be downloaded over the Internet), and
```
make_* functions to generate fake datasets, useful for tests. Generated
```
datasets are usually returned as an (X, y) tuple containing the input data and
```
the targets, both as NumPy arrays. Other Datasets are returned as
sklearn.utils.Bunch objects, which are dictionaries whose entries
can also be accessed as attributes. They generally contain the following
```
entries:
```
"DESCR": a description of the dataset
"data": the input data, usually as a 2D NumPy array
"target": the labels, usually as a 1D NumPy array
```
The fetch_openml() function is a bit unusual since by default it returns
```
```
the inputs as a Pandas DataFrame and the labels as a Pandas Series (unless
```
```
the dataset is sparse). But the MNIST dataset contains images, and
```
DataFrames aren’t ideal for that, so it’s preferable to set
```
as_frame=False to get the data as NumPy arrays instead. Let’s look at
```
these arrays:
>>> X, y = mnist.data, mnist.target
>>> X
```
array([[0., 0., 0., ..., 0., 0., 0.],
```
1
[0., 0., 0., ..., 0., 0., 0.],
[0., 0., 0., ..., 0., 0., 0.],
...,
[0., 0., 0., ..., 0., 0., 0.],
[0., 0., 0., ..., 0., 0., 0.],
```
[0., 0., 0., ..., 0., 0., 0.]])
```
>>> X.shape
```
(70000, 784)
```
>>> y
```
array(['5', '0', '4', ..., '4', '5', '6'], dtype=object)
```
>>> y.shape
```
(70000,)
```
There are 70,000 images, and each image has 784 features. This is because
each image is 28 × 28 pixels, and each feature simply represents one pixel’s
```
intensity, from 0 (white) to 255 (black). Let’s take a peek at one digit from
```
the dataset. All you need to do is grab an instance’s feature vector, reshape
```
it to a 28 × 28 array, and display it using Matplotlib’s imshow() function
```
```
(Figure 3-1). We use cmap="binary" to get a grayscale color map where
```
0 is white and 255 is black:
import matplotlib.pyplot as plt
```
def plot_digit(image_data):
```
```
image = image_data.reshape(28, 28)
```
```
plt.imshow(image, cmap="binary")
```
```
plt.axis("off")
```
```
some_digit = X[0]
```
```
plot_digit(some_digit)
```
```
plt.show()
```
Figure 3-1. Example of an MNIST image
This looks like a 5, and indeed that’s what the label tells us:
>>> y[0]
'5'
To give you a feel for the complexity of the classification task, Figure 3-2
shows a few more images from the MNIST dataset.
Figure 3-2. Digits from the MNIST dataset
But wait! You should always create a test set and set it aside before
inspecting the data closely. The MNIST dataset returned by
```
fetch_openml() is actually already split into a training set (the first
```
```
60,000 images) and a test set (the last 10,000 images):
```
X_train, X_test, y_train, y_test = X[:60000], X[60000:],
y[:60000], y[60000:]
The training set is already shuffled for us, which is good because this
```
guarantees that all cross-validation folds will be similar (you don’t want one
```
```
fold to be missing some digits). Moreover, some learning algorithms are
```
sensitive to the order of the training instances, and they perform poorly if
they get many similar instances in a row. Shuffling the dataset ensures that
this won’t happen.
Training a Binary Classifier
Let’s simplify the problem for now and only try to identify one digit—for
example, the number 5. This “5-detector” will be an example of a binary
classifier, capable of distinguishing between just two classes, 5 and not-5.
Let’s create the target vectors for this classification task:
```
y_train_5 = (y_train == '5') # True for all 5s, False for all
```
other digits
```
y_test_5 = (y_test == '5')
```
Now let’s pick a classifier and train it. A good place to start is with a
```
Stochastic Gradient Descent (SGD) classifier, using Scikit-Learn’s
```
SGDClassifier class. This classifier is capable of handling very large
datasets efficiently. This is in part because SGD deals with training
instances independently, one at a time, which also makes SGD well suited
for online learning, as we will see later. Let’s create an SGDClassifier
and train it on the whole training set:
2
3
from sklearn.linear_model import SGDClassifier
```
sgd_clf = SGDClassifier(random_state=42)
```
```
sgd_clf.fit(X_train, y_train_5)
```
Now we can use it to detect images of the number 5:
```
>>> sgd_clf.predict([some_digit])
```
```
array([ True])
```
```
The classifier guesses that this image represents a 5 (True). Looks like it
```
guessed right in this particular case! Now, let’s evaluate this model’s
performance.
Performance Measures
Evaluating a classifier is often significantly trickier than evaluating a
regressor, so we will spend a large part of this chapter on this topic. There
are many performance measures available, so grab another coffee and get
ready to learn many new concepts and acronyms!
Measuring Accuracy Using Cross-Validation
A good way to evaluate a model is to use cross-validation, just as you did in
```
Chapter 2. Let’s use the cross_val_score() function to evaluate our
```
SGDClassifier model, using K-fold cross-validation with three folds.
Remember that K-fold cross-validation means splitting the training set into
```
K folds (in this case, three), then training the model K times, holding out a
```
```
different fold each time for evaluation (see Chapter 2):
```
>>> from sklearn.model_selection import cross_val_score
```
>>> cross_val_score(sgd_clf, X_train, y_train_5, cv=3,
```
```
scoring="accuracy")
```
```
array([0.95035, 0.96035, 0.9604 ])
```
```
Wow! Above 95% accuracy (ratio of correct predictions) on all cross-
```
validation folds? This looks amazing, doesn’t it? Well, before you get too
excited, let’s look at a dummy classifier that just classifies every single
```
image in the most frequent class, in this case the negative class (i.e., not a
```
```
5):
```
from sklearn.dummy import DummyClassifier
```
dummy_clf = DummyClassifier()
```
```
dummy_clf.fit(X_train, y_train_5)
```
```
print(any(dummy_clf.predict(X_train))) # prints False: no 5s
```
detected
Can you guess this model’s accuracy? Let’s find out:
```
>>> cross_val_score(dummy_clf, X_train, y_train_5, cv=3,
```
```
scoring="accuracy")
```
```
array([0.90965, 0.90965, 0.90965])
```
That’s right, it has over 90% accuracy! This is simply because only about
10% of the images are 5s, so if you always guess that an image is not a 5,
you will be right about 90% of the time. Beats Nostradamus.
This demonstrates why accuracy is generally not the preferred performance
measure for classifiers, especially when you are dealing with skewed
```
datasets (i.e., when some classes are much more frequent than others). A
```
much better way to evaluate the performance of a classifier is to look at the
confusion matrix.
IMPLEMENTING CROSS-VALIDATION
Occasionally you will need more control over the cross-validation
process than what Scikit-Learn provides off the shelf. In these cases,
you can implement cross-validation yourself. The following code does
```
roughly the same thing as Scikit-Learn’s cross_val_score()
```
function, and it prints the same result:
from sklearn.model_selection import StratifiedKFold
from sklearn.base import clone
```
skfolds = StratifiedKFold(n_splits=3) # add shuffle=True if
```
the dataset is not
# already shuffled
```
for train_index, test_index in skfolds.split(X_train,
```
```
y_train_5):
```
```
clone_clf = clone(sgd_clf)
```
```
X_train_folds = X_train[train_index]
```
```
y_train_folds = y_train_5[train_index]
```
```
X_test_fold = X_train[test_index]
```
```
y_test_fold = y_train_5[test_index]
```
```
clone_clf.fit(X_train_folds, y_train_folds)
```
```
y_pred = clone_clf.predict(X_test_fold)
```
```
n_correct = sum(y_pred == y_test_fold)
```
```
print(n_correct / len(y_pred)) # prints 0.95035, 0.96035
```
and 0.9604
```
The StratifiedKFold class performs stratified sampling (as
```
```
explained in Chapter 2) to produce folds that contain a representative
```
ratio of each class. At each iteration the code creates a clone of the
classifier, trains that clone on the training folds, and makes predictions
on the test fold. Then it counts the number of correct predictions and
outputs the ratio of correct predictions.
Confusion Matrix
The general idea of a confusion matrix is to count the number of times
instances of class A are classified as class B, for all A/B pairs. For example,
to know the number of times the classifier confused images of 8s with 0s,
you would look at row #8, column #0 of the confusion matrix.
To compute the confusion matrix, you first need to have a set of predictions
so that they can be compared to the actual targets. You could make
```
predictions on the test set, but let’s keep it untouched for now (remember
```
that you want to use the test set only at the very end of your project, once
```
you have a classifier that you are ready to launch). Instead, you can use the
```
```
cross_val_predict() function:
```
from sklearn.model_selection import cross_val_predict
```
y_train_pred = cross_val_predict(sgd_clf, X_train, y_train_5,
```
```
cv=3)
```
```
Just like the cross_val_score() function,
```
```
cross_val_predict() performs K-fold cross-validation, but instead
```
of returning the evaluation scores, it returns the predictions made on each
test fold. This means that you get a clean prediction for each instance in the
```
training set (by “clean” I mean “out-of-sample”: the model makes
```
```
predictions on data that it never saw during training).
```
Now you are ready to get the confusion matrix using the
```
confusion_matrix() function. Just pass it the target classes
```
```
(y_train_5) and the predicted classes (y_train_pred):
```
>>> from sklearn.metrics import confusion_matrix
```
>>> cm = confusion_matrix(y_train_5, y_train_pred)
```
>>> cm
```
array([[53892, 687],
```
```
[ 1891, 3530]])
```
Each row in a confusion matrix represents an actual class, while each
column represents a predicted class. The first row of this matrix considers
```
non-5 images (the negative class): 53,892 of them were correctly classified
```
```
as non-5s (they are called true negatives), while the remaining 687 were
```
```
wrongly classified as 5s (false positives, also called type I errors). The
```
```
second row considers the images of 5s (the positive class): 1,891 were
```
```
wrongly classified as non-5s (false negatives, also called type II errors),
```
```
while the remaining 3,530 were correctly classified as 5s (true positives). A
```
perfect classifier would only have true positives and true negatives, so its
```
confusion matrix would have nonzero values only on its main diagonal (top
```
```
left to bottom right):
```
>>> y_train_perfect_predictions = y_train_5 # pretend we reached
perfection
```
>>> confusion_matrix(y_train_5, y_train_perfect_predictions)
```
```
array([[54579, 0],
```
```
[ 0, 5421]])
```
The confusion matrix gives you a lot of information, but sometimes you
may prefer a more concise metric. An interesting one to look at is the
```
accuracy of the positive predictions; this is called the precision of the
```
```
classifier (Equation 3-1).
```
Equation 3-1. Precision
```
precision =
```
T P
T P + F P
TP is the number of true positives, and FP is the number of false positives.
A trivial way to have perfect precision is to create a classifier that always
makes negative predictions, except for one single positive prediction on the
instance it’s most confident about. If this one prediction is correct, then the
```
classifier has 100% precision (precision = 1/1 = 100%). Obviously, such a
```
classifier would not be very useful, since it would ignore all but one
positive instance. So precision is typically used along with another metric
```
named recall, also called sensitivity or the true positive rate (TPR): this is
```
the ratio of positive instances that are correctly detected by the classifier
```
(Equation 3-2).
```
Equation 3-2. Recall
```
recall =
```
T P
T P + F N
FN is, of course, the number of false negatives.
If you are confused about the confusion matrix, Figure 3-3 may help.
```
Figure 3-3. An illustrated confusion matrix shows examples of true negatives (top left), false positives
```
```
(top right), false negatives (lower left), and true positives (lower right)
```
Precision and Recall
Scikit-Learn provides several functions to compute classifier metrics,
including precision and recall:
>>> from sklearn.metrics import precision_score, recall_score
```
>>> precision_score(y_train_5, y_train_pred) # == 3530 / (687 +
```
```
3530)
```
0.8370879772350012
```
>>> recall_score(y_train_5, y_train_pred) # == 3530 / (1891 +
```
```
3530)
```
0.6511713705958311
Now your 5-detector does not look as shiny as it did when you looked at its
accuracy. When it claims an image represents a 5, it is correct only 83.7%
of the time. Moreover, it only detects 65.1% of the 5s.
It is often convenient to combine precision and recall into a single metric
called the F score, especially when you need a single metric to compare
two classifiers. The F score is the harmonic mean of precision and recall
```
(Equation 3-3). Whereas the regular mean treats all values equally, the
```
harmonic mean gives much more weight to low values. As a result, the
classifier will only get a high F score if both recall and precision are high.
Equation 3-3. F score
```
F1 =
```
2
1
precision +
1
recall
= 2 ×
precision × recall
precision + recall
=
T P
T P + F N+F P2
```
To compute the F score, simply call the f1_score() function:
```
>>> from sklearn.metrics import f1_score
```
>>> f1_score(y_train_5, y_train_pred)
```
0.7325171197343846
The F score favors classifiers that have similar precision and recall. This is
not always what you want: in some contexts you mostly care about
precision, and in other contexts you really care about recall. For example, if
you trained a classifier to detect videos that are safe for kids, you would
```
probably prefer a classifier that rejects many good videos (low recall) but
```
1
1
1
1
1
1
```
keeps only safe ones (high precision), rather than a classifier that has a
```
much higher recall but lets a few really bad videos show up in your product
```
(in such cases, you may even want to add a human pipeline to check the
```
```
classifier’s video selection). On the other hand, suppose you train a
```
classifier to detect shoplifters in surveillance images: it is probably fine if
```
your classifier only has 30% precision as long as it has 99% recall (sure, the
```
security guards will get a few false alerts, but almost all shoplifters will get
```
caught).
```
Unfortunately, you can’t have it both ways: increasing precision reduces
recall, and vice versa. This is called the precision/recall trade-off.
Precision/Recall Trade-off
To understand this trade-off, let’s look at how the SGDClassifier
makes its classification decisions. For each instance, it computes a score
based on a decision function. If that score is greater than a threshold, it
```
assigns the instance to the positive class; otherwise it assigns it to the
```
negative class. Figure 3-4 shows a few digits positioned from the lowest
score on the left to the highest score on the right. Suppose the decision
```
threshold is positioned at the central arrow (between the two 5s): you will
```
```
find 4 true positives (actual 5s) on the right of that threshold, and 1 false
```
```
positive (actually a 6). Therefore, with that threshold, the precision is 80%
```
```
(4 out of 5). But out of 6 actual 5s, the classifier only detects 4, so the recall
```
```
is 67% (4 out of 6). If you raise the threshold (move it to the arrow on the
```
```
right), the false positive (the 6) becomes a true negative, thereby increasing
```
```
the precision (up to 100% in this case), but one true positive becomes a
```
false negative, decreasing recall down to 50%. Conversely, lowering the
threshold increases recall and reduces precision.
Figure 3-4. In this precision/recall trade-off, images are ranked by their classifier score, and those
```
above the chosen decision threshold are considered positive; the higher the threshold, the lower the
```
```
recall, but (in general) the higher the precision
```
Scikit-Learn does not let you set the threshold directly, but it does give you
access to the decision scores that it uses to make predictions. Instead of
```
calling the classifier’s predict() method, you can call its
```
```
decision_function() method, which returns a score for each
```
instance, and then use any threshold you want to make predictions based on
those scores:
```
>>> y_scores = sgd_clf.decision_function([some_digit])
```
>>> y_scores
```
array([2164.22030239])
```
>>> threshold = 0
```
>>> y_some_digit_pred = (y_scores > threshold)
```
```
array([ True])
```
The SGDClassifier uses a threshold equal to 0, so the previous code
```
returns the same result as the predict() method (i.e., True). Let’s raise
```
the threshold:
>>> threshold = 3000
```
>>> y_some_digit_pred = (y_scores > threshold)
```
>>> y_some_digit_pred
```
array([False])
```
This confirms that raising the threshold decreases recall. The image actually
represents a 5, and the classifier detects it when the threshold is 0, but it
misses it when the threshold is increased to 3,000.
How do you decide which threshold to use? First, use the
```
cross_val_predict() function to get the scores of all instances in the
```
training set, but this time specify that you want to return decision scores
instead of predictions:
```
y_scores = cross_val_predict(sgd_clf, X_train, y_train_5, cv=3,
```
```
method="decision_function")
```
```
With these scores, use the precision_recall_curve() function to
```
```
compute precision and recall for all possible thresholds (the function adds a
```
last precision of 0 and a last recall of 1, corresponding to an infinite
```
threshold):
```
from sklearn.metrics import precision_recall_curve
precisions, recalls, thresholds =
```
precision_recall_curve(y_train_5, y_scores)
```
Finally, use Matplotlib to plot precision and recall as functions of the
```
threshold value (Figure 3-5), and let’s show the threshold of 3,000 we
```
```
selected:
```
```
plt.plot(thresholds, precisions[:-1], "b--", label="Precision",
```
```
linewidth=2)
```
```
plt.plot(thresholds, recalls[:-1], "g-", label="Recall",
```
```
linewidth=2)
```
```
plt.vlines(threshold, 0, 1.0, "k", "dotted", label="threshold")
```
[...] # beautify the figure: add grid, legend, axis, labels and
circles
```
plt.show()Figure 3-5. Precision and recall versus the decision threshold
```
NOTE
You may wonder why the precision curve is bumpier than the recall curve in Figure 3-5.
The reason is that precision may sometimes go down when you raise the threshold
```
(although in general it will go up). To understand why, look back at Figure 3-4 and
```
notice what happens when you start from the central threshold and move it just one digit
```
to the right: precision goes from 4/5 (80%) down to 3/4 (75%). On the other hand, recall
```
can only go down when the threshold is increased, which explains why its curve looks
smooth.
At this threshold value, precision is near 90% and recall is around 50%.
Another way to select a good precision/recall trade-off is to plot precision
```
directly against recall, as shown in Figure 3-6 (the same threshold is
```
```
shown).
```
```
plt.plot(recalls, precisions, linewidth=2,
```
```
label="Precision/Recall curve")
```
[...] # beautify the figure: add labels, grid, legend, arrow and
text
```
plt.show()
```
Figure 3-6. Precision versus recall
You can see that precision really starts to fall sharply around 80% recall.
You will probably want to select a precision/recall trade-off just before that
drop—for example, at around 60% recall. But of course, the choice depends
on your project.
Suppose you decide to aim for 90% precision. You could use the first plot to
find the threshold you need to use, but that’s not very precise. Alternatively,
you can search for the lowest threshold that gives you at least 90%
```
precision. For this, we can use NumPy array’s argmax() method, which
```
returns the first index of the maximum value, which in this case means the
first True value:
```
>>> idx_for_90_precision = (precisions >= 0.90).argmax()
```
>>> threshold_for_90_precision = thresholds[idx_for_90_precision]
>>> threshold_for_90_precision
3370.0194991439557
```
To make predictions (on the training set for now), instead of calling the
```
```
classifier’s predict() method, you can run this code:
```
```
y_train_pred_90 = (y_scores >= threshold_for_90_precision)
```
Let’s check these predictions’ precision and recall:
```
>>> precision_score(y_train_5, y_train_pred_90)
```
0.9000345901072293
```
>>> recall_at_90_precision = recall_score(y_train_5,
```
```
y_train_pred_90)
```
>>> recall_at_90_precision
0.4799852425751706
Great, you have a 90% precision classifier! As you can see, it is fairly easy
to create a classifier with virtually any precision you want: just set a high
enough threshold, and you’re done. But wait, not so fast: a high-precision
classifier is not very useful if its recall is too low! For many applications,
48% recall wouldn’t be great at all.
TIP
If someone says, “Let’s reach 99% precision,” you should ask, “At what recall?”
The ROC Curve
```
The receiver operating characteristic (ROC) curve is another common tool
```
used with binary classifiers. It is very similar to the precision/recall curve,
but instead of plotting precision versus recall, the ROC curve plots the true
```
positive rate (another name for recall) against the false positive rate (FPR).
```
```
The FPR (also called the fall-out) is the ratio of negative instances that are
```
incorrectly classified as positive. It is equal to 1 – the true negative rate
```
(TNR), which is the ratio of negative instances that are correctly classified
```
as negative. The TNR is also called specificity. Hence, the ROC curve plots
```
sensitivity (recall) versus 1 – specificity.
```
```
To plot the ROC curve, you first use the roc_curve() function to
```
compute the TPR and FPR for various threshold values:
from sklearn.metrics import roc_curve
```
fpr, tpr, thresholds = roc_curve(y_train_5, y_scores)
```
Then you can plot the FPR against the TPR using Matplotlib. The following
code produces the plot in Figure 3-7. To find the point that corresponds to
90% precision, we need to look for the index of the desired threshold. Since
thresholds are listed in decreasing order in this case, we use <= instead of
>= on the first line:
```
idx_for_threshold_at_90 = (thresholds <=
```
```
threshold_for_90_precision).argmax()
```
tpr_90, fpr_90 = tpr[idx_for_threshold_at_90],
fpr[idx_for_threshold_at_90]
```
plt.plot(fpr, tpr, linewidth=2, label="ROC curve")
```
```
plt.plot([0, 1], [0, 1], 'k:', label="Random classifier's ROC
```
```
curve")
```
```
plt.plot([fpr_90], [tpr_90], "ko", label="Threshold for 90%
```
```
precision")
```
[...] # beautify the figure: add labels, grid, legend, arrow and
text
```
plt.show()
```
```
Once again there is a trade-off: the higher the recall (TPR), the more false
```
```
positives (FPR) the classifier produces. The dotted line represents the ROC
```
```
curve of a purely random classifier; a good classifier stays as far away from
```
```
that line as possible (toward the top-left corner).
```
Figure 3-7. This ROC curve plots the false positive rate against the true positive rate for all possible
```
thresholds; the black circle highlights the chosen ratio (at 90% precision and 48% recall)
```
One way to compare classifiers is to measure the area under the curve
```
(AUC). A perfect classifier will have a ROC AUC equal to 1, whereas a
```
purely random classifier will have a ROC AUC equal to 0.5. Scikit-Learn
provides a function to estimate the ROC AUC:
>>> from sklearn.metrics import roc_auc_score
```
>>> roc_auc_score(y_train_5, y_scores)
```
0.9604938554008616
TIP
```
Since the ROC curve is so similar to the precision/recall (PR) curve, you may wonder
```
how to decide which one to use. As a rule of thumb, you should prefer the PR curve
whenever the positive class is rare or when you care more about the false positives than
the false negatives. Otherwise, use the ROC curve. For example, looking at the previous
```
ROC curve (and the ROC AUC score), you may think that the classifier is really good.
```
```
But this is mostly because there are few positives (5s) compared to the negatives (non-
```
```
5s). In contrast, the PR curve makes it clear that the classifier has room for
```
```
improvement: the curve could really be closer to the top-right corner (see Figure 3-6
```
```
again).
```
Let’s now create a RandomForestClassifier, and we will compare
its PR curve and F score to those of the SGDClassifier:
from sklearn.ensemble import RandomForestClassifier
```
forest_clf = RandomForestClassifier(random_state=42)
```
```
The precision_recall_curve() function expects labels and scores
```
for each instance, so we need to train the random forest and make it assign a
score to each instance. But the RandomForestClassifier class does
```
not have a decision_function() method, due to the way it works
```
```
(we will cover this in Chapter 7). Luckily, it has a predict_proba()
```
method which returns class probabilities for each instance, and we can just
use the probability of the positive class as a score, it will work fine. So
1
4
```
let’s call the cross_val_predict() function to train the
```
RandomForestClassifier using cross-validation and make it predict
class probabilities for every image:
```
y_probas_forest = cross_val_predict(forest_clf, X_train,
```
y_train_5, cv=3,
```
method="predict_proba")
```
Let’s look at the class probabilities for the first two images in the training
```
set:
```
>>> y_probas_forest[:2]
```
array([[0.11, 0.89],
```
```
[0.99, 0.01]])
```
The model predicts that the first image is positive with 89% probability, and
it predicts that the second image is negative with 99% probability. Since
each image is either positive or negative, the probabilities in each row add
up to 100%.
WARNING
These are estimated probabilities, not actual probabilities. For example, if you look at all
the images that the model classified as positive with an estimated probability between
50% and 60%, roughly 94% of them are actually positive. So the model’s estimated
probabilities were much too low in this case—but models can be overconfident as well.
The sklearn.calibration package contains tools to calibrate the estimated
probabilities and make them much closer to actual probabilities. See the extra material
section in the notebook for more details.
The second column contains the estimated probabilities for the positive
```
class, so let’s pass them to the precision_recall_curve() function:
```
```
y_scores_forest = y_probas_forest[:, 1]
```
precisions_forest, recalls_forest, thresholds_forest =
```
precision_recall_curve(
```
```
y_train_5, y_scores_forest)
```
Now you are ready to plot the PR curve. It is useful to plot the first PR
```
curve as well to see how they compare (Figure 3-8):
```
```
plt.plot(recalls_forest, precisions_forest, "b-", linewidth=2,
```
```
label="Random Forest")
```
```
plt.plot(recalls, precisions, "--", linewidth=2, label="SGD")
```
[...] # beautify the figure: add labels, grid, and legend
```
plt.show()
```
Figure 3-8. Comparing PR curves: the Random Forest classifier is superior to the SGD classifier
because its PR curve is much closer to the top-right corner, and it has a greater AUC
As you can see in Figure 3-8, the RandomForestClassifier’s PR
curve looks much better than the SGDClassifier’s: it comes much
closer to the top-right corner. Its F score and ROC AUC score are also
significantly better:
>>> y_train_pred_forest = y_probas_forest[:, 1] >= 0.5 #
positive proba ≥ 50%
```
>>> f1_score(y_train_5, y_pred_forest)
```
0.9242275142688446
```
>>> roc_auc_score(y_train_5, y_scores_forest)
```
0.9983436731328145
Try measuring the precision and recall scores: you should find about 99.1%
precision and 86.6% recall. Not too bad!
You now know how to train binary classifiers, choose the appropriate
metric for your task, evaluate your classifiers using cross-validation, select
the precision/recall trade-off that fits your needs, and use several metrics
and curves to compare various models. Now let’s try to detect more than
just the 5s.
Multiclass Classification
Whereas binary classifiers distinguish between two classes, multiclass
```
classifiers (also called multinomial classifiers) can distinguish between
```
more than two classes.
Some Scikit-Learn classifiers, such as LogisticRegression,
RandomForestClassifier, and GaussianNB, are capable of
handling multiple classes natively. Others, such as SGDClassifier or
SVC, are strictly binary classifiers. However, there are various strategies
that you can use to perform multiclass classification with multiple binary
classifiers.
1
One way to create a system that can classify the digit images into 10 classes
```
(from 0 to 9) is to train 10 binary classifiers, one for each digit (a 0-detector,
```
```
a 1-detector, a 2-detector, and so on). Then when you want to classify an
```
image, you get the decision score from each classifier for that image and
you select the class whose classifier outputs the highest score. This is called
```
the one-versus-the-rest (OvR) strategy (also called one-versus-all).
```
Another strategy is to train a binary classifier for every pair of digits: one to
distinguish 0s and 1s, another to distinguish 0s and 2s, another for 1s and
```
2s, and so on. This is called the one-versus-one (OvO) strategy. If there are
```
```
N classes, you need to train N × (N – 1) / 2 classifiers. For the MNIST
```
problem, this means training 45 binary classifiers! When you want to
classify an image, you have to run the image through all 45 classifiers and
see which class wins the most duels. The main advantage of OvO is that
each classifier only needs to be trained on the part of the training set for the
two classes that it must distinguish.
```
Some algorithms (such as Support Vector Machine classifiers) scale poorly
```
with the size of the training set. For these algorithms OvO is preferred
because it is faster to train many classifiers on small training sets than to
train few classifiers on large training sets. For most binary classification
algorithms, however, OvR is preferred.
Scikit-Learn detects when you try to use a binary classification algorithm
for a multiclass classification task, and it automatically runs OvR or OvO,
depending on the algorithm. Let’s try this with a Support Vector Machine
```
classifier using the sklearn.svm.SVC class (see Chapter 5). We’ll only
```
train on the first 2,000 images or else it will take a very long time:
from sklearn.svm import SVC
```
svm_clf = SVC(random_state=42)
```
```
svm_clf.fit(X_train[:2000], y_train[:2000]) # y_train, not
```
y_train_5
That was easy! We trained the SVC using the original target classes from 0
```
to 9 (y_train), instead of the 5-versus-the-rest target classes
```
```
(y_train_5). Since there are 10 classes, more than 2, Scikit-Learn used
```
the OvO strategy: it trained 45 binary classifiers. Now let’s make a
prediction on an image:
```
>>> svm_clf.predict([some_digit])
```
```
array(['5'], dtype=object)
```
That’s correct! This code actually made 45 predictions—one per pair of
classes—and it selected the class that won the most duels. If you call the
```
decision_function() method, you will see that it returns 10 scores
```
per instance: one per class. Each class gets a score equal to the number of
```
won duels plus or minus a small tweak (max ±0.33) to break ties, based on
```
the classifier scores:
```
>>> some_digit_scores = svm_clf.decision_function([some_digit])
```
```
>>> some_digit_scores.round(2)
```
```
array([[ 3.79, 0.73, 6.06, 8.3 , -0.29, 9.3 , 1.75, 2.77,
```
7.21,
```
4.82]])
```
The highest score is 9.3, and it’s indeed the one corresponding to class 5:
```
>>> class_id = some_digit_scores.argmax()
```
>>> class_id
5
When a classifier is trained, it stores the list of target classes in its
classes_ attribute, ordered by value. In the case of MNIST, the index of
each class in the classes_ array conveniently matches the class itself
```
(e.g., the class at index 5 happens to be class '5'), but in general you won’t
```
be so lucky: you will need to look up the class label like this:
>>> svm_clf.classes_
```
array(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
```
```
dtype=object)
```
>>> svm_clf.classes_[class_id]
'5'
If you want to force Scikit-Learn to use one-versus-one or one-versus-the-
rest, you can use the OneVsOneClassifier or
OneVsRestClassifier classes. Simply create an instance and pass a
```
classifier to its constructor (it does not even have to be a binary classifier).
```
For example, this code creates a multiclass classifier using the OvR
strategy, based on an SVC:
from sklearn.multiclass import OneVsRestClassifier
```
ovr_clf = OneVsRestClassifier(SVC(random_state=42))
```
```
ovr_clf.fit(X_train[:2000], y_train[:2000])
```
Let’s make a prediction, and check the number of trained classifiers:
```
>>> ovr_clf.predict([some_digit])
```
```
array(['5'], dtype='<U1')
```
```
>>> len(ovr_clf.estimators_)
```
10
Training an SGDClassifier on a multiclass dataset and using it to make
predictions is just as easy:
```
>>> sgd_clf = SGDClassifier(random_state=42)
```
```
>>> sgd_clf.fit(X_train, y_train)
```
```
>>> sgd_clf.predict([some_digit])
```
```
array(['3'], dtype='<U1')
```
Oops, that’s incorrect. Prediction errors do happen! This time Scikit-Learn
used the OvR strategy under the hood: since there are 10 classes, it trained
```
10 binary classifiers. The decision_function() method now returns
```
one value per class. Let’s look at the score that the SGD classifier assigned
to each class:
```
>>> sgd_clf.decision_function([some_digit]).round()
```
```
array([[-31893., -34420., -9531., 1824., -22320., -1386.,
```
-26189.,
```
-16148., -4604., -12051.]])
```
You can see that the classifier is not very confident about its prediction:
almost all scores are very negative, while class 3 has a score of +1,824, and
class 5 is not too far behind at –1,386. Now of course you want to evaluate
this classifier on more than one image. Since there are roughly as many
images of each class, the accuracy metric is fine. As usual, you can use the
```
cross_val_score() function to evaluate the model:
```
```
>>> cross_val_score(sgd_clf, X_train, y_train, cv=3,
```
```
scoring="accuracy")
```
```
array([0.87365, 0.85835, 0.8689 ])
```
It gets over 85.8% on all test folds. If you used a random classifier, you
would get 10% accuracy, so this is not such a bad score, but you can still do
```
much better. Simply scaling the inputs (as discussed in Chapter 2) increases
```
accuracy above 89.1%:
>>> from sklearn.preprocessing import StandardScaler
```
>>> scaler = StandardScaler()
```
>>> X_train_scaled =
```
scaler.fit_transform(X_train.astype("float64"))
```
```
>>> cross_val_score(sgd_clf, X_train_scaled, y_train, cv=3,
```
```
scoring="accuracy")
```
```
array([0.8983, 0.891 , 0.9018])
```
Error Analysis
If this were a real project, you would now follow the steps in your Machine
```
Learning project checklist (see Appendix A). You’d explore data
```
preparation options, try out multiple models, shortlist the best ones, fine-
tune their hyperparameters using GridSearchCV, and automate as much
as possible. Here, we will assume that you have found a promising model
and you want to find ways to improve it. One way to do this is to analyze
the types of errors it makes.
First, look at the confusion matrix. For this, you first need to make
```
predictions using the cross_val_predict() function, then you can
```
```
pass the labels and predictions to the confusion_matrix() function,
```
just like you did earlier. However, since there are now 10 classes instead of
2, the confusion matrix will contain quite a lot of numbers, and it may be
hard to read. A colored diagram of the confusion matrix is much easier to
analyze. To plot such a diagram, you can use the
```
ConfusionMatrixDisplay.from_predictions() function like
```
```
this:
```
from sklearn.metrics import ConfusionMatrixDisplay
```
y_train_pred = cross_val_predict(sgd_clf, X_train_scaled,
```
```
y_train, cv=3)
```
```
ConfusionMatrixDisplay.from_predictions(y_train, y_train_pred)
```
```
plt.show()
```
This produces the left diagram in Figure 3-9. This confusion matrix looks
pretty good: most images are on the main diagonal, which means that they
were classified correctly. Notice that the cell on the diagonal on row #5 and
column #5 looks slightly darker than the other digits. This could be because
the model made more errors on 5s, or because there are simply less 5s in the
dataset than the other digits. That’s why it’s important to normalize the
confusion matrix by dividing each value by the total number of images in
```
the corresponding (true) class (i.e., divide by the row’s sum). This can be
```
done simply by setting normalize="true". We can also specify
```
values_format=".0%" argument to show percentages with no
```
decimals. The following code produces the diagram on the right of
Figure 3-9:
```
ConfusionMatrixDisplay.from_predictions(y_train, y_train_pred,
```
```
normalize="true",
```
```
values_format=".0%")
```
```
plt.show()
```
```
Figure 3-9. Confusion matrix (left) and the same CM normalized by row (right)
```
Now we can easily see that only 82% of the images of 5s were classified
correctly. The most common error the model made with images of 5s was to
misclassify them as 8s: this happened for 10% of all 5s. But only 2% of 8s
got misclassified as 5s: confusion matrices are generally not symmetrical! If
you look carefully, you will notice that many digits have been misclassified
as 8s, but this is not immediately obvious on this diagram. If you want to
make the errors stand out much more, you can try putting zero weight on
the correct predictions. The following code does just that and produces the
diagram on the left of Figure 3-10:
```
sample_weight = (y_train_pred != y_train)
```
```
ConfusionMatrixDisplay.from_predictions(y_train, y_train_pred,
```
```
sample_weight=sample_weight,
```
```
normalize="true",
```
```
values_format=".0%")
```
```
plt.show()
```
```
Figure 3-10. Confusion matrix with errors only, normalized by row (left) and by column (right)
```
Now you can see much more clearly the kinds of errors the classifier
makes. The column for class 8 is now really bright, which confirms that
many images got misclassified as 8s. In fact this is the most common
misclassification for almost all classes. But be careful how you interpret the
percentages on this diagram: remember that we’ve excluded the correct
predictions. For example, the 36% in row #7, column #9 does not mean that
36% of all images of 7s were misclassified as 9s. It means that 36% of the
errors the model made on images of 7s were misclassifications as 9s. In
reality, only 3% of images of 7s were misclassified as 9s, as you can see in
the diagram on the right of Figure 3-9.
It is also possible to normalize the confusion matrix by column rather than
by row: if you set normalize="pred", you get the diagram on the right
of Figure 3-10. For example, you can see that 56% of misclassified 7s are
actually 9s.
Analyzing the confusion matrix often gives you insights into ways to
improve your classifier. Looking at these plots, it seems that your efforts
should be spent on reducing the false 8s. For example, you could try to
```
gather more training data for digits that look like 8s (but are not) so that the
```
classifier can learn to distinguish them from real 8s. Or you could engineer
new features that would help the classifier—for example, writing an
```
algorithm to count the number of closed loops (e.g., 8 has two, 6 has one, 5
```
```
has none). Or you could preprocess the images (e.g., using Scikit-Image,
```
```
Pillow, or OpenCV) to make some patterns, such as closed loops, stand out
```
more.
Analyzing individual errors can also be a good way to gain insights on what
your classifier is doing and why it is failing. For example, let’s plot
```
examples of 3s and 5s in a confusion matrix style (Figure 3-11):
```
cl_a, cl_b = '3', '5'
```
X_aa = X_train[(y_train == cl_a) & (y_train_pred == cl_a)]
```
```
X_ab = X_train[(y_train == cl_a) & (y_train_pred == cl_b)]
```
```
X_ba = X_train[(y_train == cl_b) & (y_train_pred == cl_a)]
```
```
X_bb = X_train[(y_train == cl_b) & (y_train_pred == cl_b)]
```
[...] # plot all images in X_aa, X_ab, X_ba, X_bb in a confusion
matrix styleFigure 3-11. Some images of 3s and 5s organized like a confusion matrix
```
As you can see, some of the digits that the classifier gets wrong (i.e., in the
```
```
bottom-left and top-right blocks) are so badly written that even a human
```
would have trouble classifying them. However, most misclassified images
seem like obvious errors to us, and it’s hard to understand why the classifier
made the mistakes it did. But remember that our brain is a fantastic pattern
recognition system, and our visual system does a lot of complex
preprocessing before any information even reaches our consciousness, so
the fact that it feels simple does not mean that it is. Remember that we used
a simple SGDClassifier, which is just a linear model: all it does is
assign a weight per class to each pixel, and when it sees a new image it just
sums up the weighted pixel intensities to get a score for each class. Since 3s
and 5s differ only by a few pixels, this model will easily confuse them.
The main difference between 3s and 5s is the position of the small line that
joins the top line to the bottom arc. If you draw a 3 with the junction
slightly shifted to the left, the classifier might classify it as a 5, and vice
versa. In other words, this classifier is quite sensitive to image shifting and
rotation. So one way to reduce the 3/5 confusion would be to preprocess the
images to ensure that they are well centered and not too rotated. However,
this may not be easy at all since it requires predicting the correct rotation of
each image. A much simpler approach consists in augmenting the training
set with slightly shifted and rotated variants of the training images. This
will force the model to learn to be more tolerant to such variations. This is
```
called data augmentation (we’ll cover this in Chapter 14 and also see
```
```
exercise 2 at the end of this chapter).
```
Multilabel Classification
Until now each instance has always been assigned to just one class. In some
cases you may want your classifier to output multiple classes for each
instance. Consider a face-recognition classifier: what should it do if it
recognizes several people in the same picture? It should attach one tag per
person it recognizes. Say the classifier has been trained to recognize three
faces, Alice, Bob, and Charlie. Then when the classifier is shown a picture
of Alice and Charlie, it should output [True, False, True]
```
(meaning “Alice yes, Bob no, Charlie yes”). Such a classification system
```
that outputs multiple binary tags is called a multilabel classification system.
We won’t go into face recognition just yet, but let’s look at a simpler
example, just for illustration purposes:
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
```
y_train_large = (y_train >= '7')
```
```
y_train_odd = (y_train.astype('int8') % 2 == 1)
```
```
y_multilabel = np.c_[y_train_large, y_train_odd]
```
```
knn_clf = KNeighborsClassifier()
```
```
knn_clf.fit(X_train, y_multilabel)
```
This code creates a y_multilabel array containing two target labels for
```
each digit image: the first indicates whether or not the digit is large (7, 8, or
```
```
9), and the second indicates whether or not it is odd. Then the code creates a
```
KNeighborsClassifier instance, which supports multilabel
```
classification (not all classifiers do). Then the code trains this model using
```
the multiple targets array. Now you can make a prediction, and notice that it
outputs two labels:
```
>>> knn_clf.predict([some_digit])
```
```
array([[False, True]])
```
```
And it gets it right! The digit 5 is indeed not large (False) and odd
```
```
(True).
```
There are many ways to evaluate a multilabel classifier, and selecting the
right metric really depends on your project. One approach is to measure the
```
F score for each individual label (or any other binary classifier metric
```
```
discussed earlier), then simply compute the average score. The following
```
code computes the average F score across all labels:
1
1
```
>>> y_train_knn_pred = cross_val_predict(knn_clf, X_train,
```
```
y_multilabel, cv=3)
```
```
>>> f1_score(y_multilabel, y_train_knn_pred, average="macro")
```
0.976410265560605
This approach assumes that all labels are equally important, which may not
be the case. In particular, if you have many more pictures of Alice than of
Bob or Charlie, you may want to give more weight to the classifier’s score
on pictures of Alice. One simple option is to give each label a weight equal
```
to its support (i.e., the number of instances with that target label). To do
```
```
this, simply set average="weighted" when calling the f1_score()
```
function.
If you wish to use a classifier that does not natively support multilabel
classification, such as SVC, one possible strategy is to train one model per
label. However, this strategy may have a hard time capturing the
```
dependencies between the labels. For example, a large digit (7, 8, or 9) is
```
twice more likely to be odd than even, but the classifier for the “odd” label
does not know what the classifier for the “large” label predicted. To solve
this issue, the models can be organized in a chain: when a model makes a
prediction, it uses the input features plus all the predictions of the models
that come before it in the chain.
Now the good news is that Scikit-Learn has a class called
ChainClassifier that does just that! By default it will use the true
labels for training, feeding each model the appropriate labels depending on
their position in the chain. But if you set the cv hyperparameter, it will use
```
cross-validation to get “clean” (out-of-sample) predictions from each
```
trained model, for every instance in the training set, and these predictions
will then be used to train all the models later in the chain. Here’s an
example showing how to create and train a ChainClassifier using the
cross-validation strategy. As earlier, we’ll just use the first 2,000 images in
the training set to speed things up:
from sklearn.multioutput import ClassifierChain
5
```
chain_clf = ClassifierChain(SVC(), cv=3, random_state=42)
```
```
chain_clf.fit(X_train[:2000], y_multilabel[:2000])
```
Now we can use this ChainClassifier to make predictions:
```
>>> chain_clf.predict([some_digit])
```
```
array([[0., 1.]])
```
Multioutput Classification
The last type of classification task we are going to discuss here is called
```
multioutput–multiclass classification (or just multioutput classification). It
```
is a generalization of multilabel classification where each label can be
```
multiclass (i.e., it can have more than two possible values).
```
To illustrate this, let’s build a system that removes noise from images. It
```
will take as input a noisy digit image, and it will (hopefully) output a clean
```
digit image, represented as an array of pixel intensities, just like the MNIST
```
images. Notice that the classifier’s output is multilabel (one label per pixel)
```
```
and each label can have multiple values (pixel intensity ranges from 0 to
```
```
255). It is thus an example of a multioutput classification system.
```
NOTE
The line between classification and regression is sometimes blurry, such as in this
example. Arguably, predicting pixel intensity is more akin to regression than to
```
classification. Moreover, multioutput systems are not limited to classification tasks; you
```
could even have a system that outputs multiple labels per instance, including both class
labels and value labels.
Let’s start by creating the training and test sets by taking the MNIST images
```
and adding noise to their pixel intensities with NumPy’s randint()
```
function. The target images will be the original images:
```
np.random.seed(42) # to make this code example reproducible
```
```
noise = np.random.randint(0, 100, (len(X_train), 784))
```
```
X_train_mod = X_train + noise
```
```
noise = np.random.randint(0, 100, (len(X_test), 784))
```
```
X_test_mod = X_test + noise
```
```
y_train_mod = X_train
```
```
y_test_mod = X_test
```
```
Let’s take a peek at the first image from the test set (Figure 3-12). Yes,
```
we’re snooping on the test data, so you should be frowning right now.
```
Figure 3-12. A noisy image (left) and the target clean image (right)
```
On the left is the noisy input image, and on the right is the clean target
image. Now let’s train the classifier and make it clean up this image
```
(Figure 3-13):
```
```
knn_clf = KNeighborsClassifier()
```
```
knn_clf.fit(X_train_mod, y_train_mod)
```
```
clean_digit = knn_clf.predict([X_test_mod[0]])
```
```
plot_digit(clean_digit)
```
```
plt.show()
```
Figure 3-13. The cleaned up image
Looks close enough to the target! Well, this concludes our tour of
classification. You now know how to select good metrics for classification
tasks, pick the appropriate precision/recall trade-off, compare classifiers,
and more generally build good classification systems for a variety of tasks.
In the next chapters, we look at how all these Machine Learning models
we’ve been using actually work.
Exercises
1. Try to build a classifier for the MNIST dataset that achieves over
97% accuracy on the test set. Hint: the
```
KNeighborsClassifier works quite well for this task; you
```
```
just need to find good hyperparameter values (try a grid search on
```
```
the weights and n_neighbors hyperparameters).
```
2. Write a function that can shift an MNIST image in any direction
```
(left, right, up, or down) by one pixel. Then, for each image in the
```
```
training set, create four shifted copies (one per direction) and add
```
them to the training set. Finally, train your best model on this
expanded training set and measure its accuracy on the test set. You
should observe that your model performs even better now! This
technique of artificially growing the training set is called data
augmentation or training set expansion.
3. Tackle the Titanic dataset. A great place to start is on Kaggle.
Alternatively, you can download the data from
```
https://homl.info/titanic.tgz and unzip this tarball like you did for
```
the housing data in Chapter 2. This will give you two CSV files:
train.csv and test.csv which you can load using
```
pandas.read_csv(). The goal is to train a classifier that can
```
predict the Survived column based on the other columns.
4. Build a spam classifier (a more challenging exercise):
6
Download examples of spam and ham from Apache
SpamAssassin’s public datasets.
Unzip the datasets and familiarize yourself with the data
format.
Split the datasets into a training set and a test set.
Write a data preparation pipeline to convert each email
into a feature vector. Your preparation pipeline should
```
transform an email into a (sparse) vector that indicates the
```
presence or absence of each possible word. For example,
if all emails only ever contain four words, “Hello,” “how,”
“are,” “you,” then the email “Hello you Hello Hello you”
```
would be converted into a vector [1, 0, 0, 1] (meaning
```
[“Hello” is present, “how” is absent, “are” is absent,
```
“you” is present]), or [3, 0, 0, 2] if you prefer to count the
```
number of occurrences of each word.
You may want to add hyperparameters to your preparation
pipeline to control whether or not to strip off email
headers, convert each email to lowercase, remove
punctuation, replace all URLs with “URL,” replace all
numbers with “NUMBER,” or even perform stemming
```
(i.e., trim off word endings; there are Python libraries
```
```
available to do this).
```
Finally, try out several classifiers and see if you can build
a great spam classifier, with both high recall and high
precision.
Solutions to these exercises are available at the end of this chapter’s
notebook, at https://homl.info/colab3.
1 By default Scikit-Learn caches downloaded datasets in a directory called scikit_learn_data in
your home directory.
```
2 Datasets returned by fetch_openml() are not always shuffled or split.
```
3 Shuffling may be a bad idea in some contexts—for example, if you are working on time series
```
data (such as stock market prices or weather conditions). We will explore this in Chapter 15.
```
```
4 Scikit-Learn classifiers always have either a decision_function() method or a
```
```
predict_proba() method, or sometimes both.
```
```
5 Scikit-Learn offers a few other averaging options and multilabel classifier metrics; see the
```
documentation for more details.
```
6 You can use the shift() function from the scipy.ndimage.interpolation
```
```
module. For example, shift(image, [2, 1], cval=0) shifts the image two pixels
```
down and one pixel to the right.
Chapter 4. Training Models
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the author’s raw and unedited content as
they write—so you can take advantage of these technologies long before the official release of these titles.
This will be the 4th chapter of the final book. Notebooks are available on GitHub at
```
https://github.com/ageron/handson-ml3. Datasets are available at https://github.com/ageron/data.
```
If you have comments about how we might improve the content and/or examples in this book, or if you
notice missing material within this chapter, please reach out to the editoor at ntache@oreilly.com.
So far we have treated Machine Learning models and their training algorithms mostly like black boxes. If you
went through some of the exercises in the previous chapters, you may have been surprised by how much you
can get done without knowing anything about what’s under the hood: you optimized a regression system, you
improved a digit image classifier, and you even built a spam classifier from scratch, all this without knowing
how they actually work. Indeed, in many situations you don’t really need to know the implementation details.
However, having a good understanding of how things work can help you quickly home in on the appropriate
model, the right training algorithm to use, and a good set of hyperparameters for your task. Understanding
what’s under the hood will also help you debug issues and perform error analysis more efficiently. Lastly, most
of the topics discussed in this chapter will be essential in understanding, building, and training neural networks
```
(discussed in Part II of this book).
```
In this chapter we will start by looking at the Linear Regression model, one of the simplest models there is. We
will discuss two very different ways to train it:
Using a “closed-form” equation that directly computes the model parameters that best fit the model to
```
the training set (i.e., the model parameters that minimize the cost function over the training set).
```
```
Using an iterative optimization approach called Gradient Descent (GD) that gradually tweaks the
```
model parameters to minimize the cost function over the training set, eventually converging to the
same set of parameters as the first method. We will look at a few variants of Gradient Descent that we
will use again and again when we study neural networks in Part II: Batch GD, Mini-batch GD, and
Stochastic GD.
Next we will look at Polynomial Regression, a more complex model that can fit nonlinear datasets. Since this
model has more parameters than Linear Regression, it is more prone to overfitting the training data, so we will
look at how to detect whether or not this is the case using learning curves, and then we will look at several
regularization techniques that can reduce the risk of overfitting the training set.
Finally, we will look at two more models that are commonly used for classification tasks: Logistic Regression
and Softmax Regression.
WARNING
There will be quite a few math equations in this chapter, using basic notions of linear algebra and calculus. To understand these
```
equations, you will need to know what vectors and matrices are; how to transpose them, multiply them, and inverse them; and what
```
partial derivatives are. If you are unfamiliar with these concepts, please go through the linear algebra and calculus introductory tutorials
available as Jupyter notebooks in the online supplemental material. For those who are truly allergic to mathematics, you should still go
```
through this chapter and simply skip the equations; hopefully, the text will be sufficient to help you understand most of the concepts.
```
Linear Regression
In Chapter 1 we looked at a simple regression model of life satisfaction: life_satisfaction = θ + θ ×
GDP_per_capita.
This model is just a linear function of the input feature GDP_per_capita. θ and θ are the model’s
parameters.
More generally, a linear model makes a prediction by simply computing a weighted sum of the input features,
```
plus a constant called the bias term (also called the intercept term), as shown in Equation 4-1.
```
Equation 4-1. Linear Regression model prediction
ˆy = θ0 + θ1x1 + θ2x2 + ⋯ + θnxn
In this equation:
ŷ is the predicted value.
n is the number of features.
x is the i feature value.
θ is the j model parameter, including the bias term θ and the feature weights θ , θ , ⋯, θ .
This can be written much more concisely using a vectorized form, as shown in Equation 4-2.
```
Equation 4-2. Linear Regression model prediction (vectorized form)
```
```
ˆy = h𝛉(x) = 𝛉 ⋅ x
```
In this equation:
h is the hypothesis function, using the model parameters θ.
θ is the model’s parameter vector, containing the bias term θ and the feature weights θ to θ .
x is the instance’s feature vector, containing x to x , with x always equal to 1.
θ · x is the dot product of the vectors θ and x, which is equal to θ x + θ x + θ x + ... + θ x .
NOTE
In Machine Learning, vectors are often represented as column vectors, which are 2D arrays with a single column. If θ and x are column
```
vectors, then the prediction is ˆy = 𝛉⊺x, where 𝛉⊺ is the transpose of θ (a row vector instead of a column vector) and 𝛉⊺x is the matrix
```
multiplication of 𝛉⊺ and x. It is of course the same prediction, except that it is now represented as a single-cell matrix rather than a
scalar value. In this book I will use this notation to avoid switching between dot products and matrix multiplications.
OK, that’s the Linear Regression model—but how do we train it? Well, recall that training a model means
setting its parameters so that the model best fits the training set. For this purpose, we first need a measure of
```
how well (or poorly) the model fits the training data. In Chapter 2 we saw that the most common performance
```
```
measure of a regression model is the Root Mean Square Error (RMSE) (Equation 2-1). Therefore, to train a
```
Linear Regression model, we need to find the value of θ that minimizes the RMSE. In practice, it is simpler to
```
minimize the mean squared error (MSE) than the RMSE, and it leads to the same result (because the value that
```
```
minimizes a positive function also minimizes its square root).
```
0 1
0 1
i th
j th 0 1 2 n
θ
0 1 n
0 n 0
0 0 1 1 2 2 n n
WARNING
Learning algorithms will often optimize a different loss function during training than the performance measure used to evaluate the final
```
model. This is generally because the function is easier to optimize and/or because it has extra terms needed during training only (e.g.,
```
```
for regularization). A good performance metric is as close as possible to the final business objective. A good training loss is easy to
```
```
optimize and strongly correlated with the metric. For example, classifiers are often trained using a cost function such as the log loss (as
```
```
we will see later in this chapter) but evaluated using precision/recall. The log loss is easy to minimize, and doing so will usually
```
improve precision/recall.
The MSE of a Linear Regression hypothesis h on a training set X is calculated using Equation 4-3.
Equation 4-3. MSE cost function for a Linear Regression model
```
MSE (X, h𝛉) = 1m
```
m
∑
```
i=1
```
```
(𝛉⊺x(i) − y(i))
```
2
```
Most of these notations were presented in Chapter 2 (see “Notations”). The only difference is that we write h
```
instead of just h to make it clear that the model is parametrized by the vector θ. To simplify notations, we will
```
just write MSE(θ) instead of MSE(X, h ).
```
The Normal Equation
To find the value of θ that minimizes the MSE, there exists a closed-form solution—in other words, a
```
mathematical equation that gives the result directly. This is called the Normal Equation (Equation 4-4).
```
Equation 4-4. Normal Equation
```
ˆ𝛉 = (X⊺X)−1 X⊺ y
```
In this equation:
ˆ𝛉 is the value of θ that minimizes the cost function.
y is the vector of target values containing y to y .
```
Let’s generate some linear-looking data to test this equation on (Figure 4-1):
```
import numpy as np
```
np.random.seed(42) # to make this code example reproducible
```
```
m = 100 # number of instances
```
```
X = 2 * np.random.rand(m, 1) # column vector
```
```
y = 4 + 3 * X + np.random.randn(m, 1) # column vector
```
θ
θ
θ
```
(1) (m)
```
Figure 4-1. Randomly generated linear dataset
```
Now let’s compute ˆ𝛉 using the Normal Equation. We will use the inv() function from NumPy’s linear
```
```
algebra module (np.linalg) to compute the inverse of a matrix, and the dot() method for matrix
```
```
multiplication:
```
from sklearn.preprocessing import add_dummy_feature
```
X_b = add_dummy_feature(X) # add x0 = 1 to each instance
```
```
theta_best = np.linalg.inv(X_b.T @ X_b) @ X_b.T @ y
```
NOTE
```
The @ operator performs matrix multiplication. If A and B are NumPy arrays, then A @ B is equivalent to np.matmul(A, B). Many
```
```
other libraries like TensorFlow, PyTorch, or Jax, support the @ operator as well. However, you cannot use @ on pure Python arrays (i.e.,
```
```
lists of lists).
```
The function that we used to generate the data is y = 4 + 3x + Gaussian noise. Let’s see what the equation
```
found:
```
>>> theta_best
```
array([[4.21509616],
```
```
[2.77011339]])
```
We would have hoped for θ = 4 and θ = 3 instead of θ = 4.215 and θ = 2.770. Close enough, but the noise
made it impossible to recover the exact parameters of the original function. The smaller and noisier the dataset,
the harder it gets.
Now we can make predictions using ˆ𝛉:
```
>>> X_new = np.array([[0], [2]])
```
```
>>> X_new_b = add_dummy_feature(X_new) # add x0 = 1 to each instance
```
>>> y_predict = X_new_b @ theta_best
>>> y_predict
```
array([[4.21509616],
```
```
[9.75532293]])
```
```
Let’s plot this model’s predictions (Figure 4-2):
```
import matplotlib.pyplot as plt
```
plt.plot(X_new, y_predict, "r-", label="Predictions")
```
```
plt.plot(X, y, "b.")
```
[...] # beautify the figure: add labels, axis, grid and legend
```
plt.show()
```
1
0 1 0 1
Figure 4-2. Linear Regression model predictions
Performing Linear Regression using Scikit-Learn is relatively straightforward:
>>> from sklearn.linear_model import LinearRegression
```
>>> lin_reg = LinearRegression()
```
```
>>> lin_reg.fit(X, y)
```
>>> lin_reg.intercept_, lin_reg.coef_
```
(array([4.21509616]), array([[2.77011339]]))
```
```
>>> lin_reg.predict(X_new)
```
```
array([[4.21509616],
```
```
[9.75532293]])
```
```
Notice that Scikit-Learn separates the bias term (intercept_) from the feature weights (coef_). The
```
```
LinearRegression class is based on the scipy.linalg.lstsq() function (the name stands for “least
```
```
squares”), which you could call directly:
```
```
>>> theta_best_svd, residuals, rank, s = np.linalg.lstsq(X_b, y, rcond=1e-6)
```
>>> theta_best_svd
```
array([[4.21509616],
```
```
[2.77011339]])
```
```
This function computes ˆ𝛉 = X+y, where X+ is the pseudoinverse of X (specifically, the Moore-Penrose
```
```
inverse). You can use np.linalg.pinv() to compute the pseudoinverse directly:
```
```
>>> np.linalg.pinv(X_b) @ y
```
```
array([[4.21509616],
```
```
[2.77011339]])
```
The pseudoinverse itself is computed using a standard matrix factorization technique called Singular Value
```
Decomposition (SVD) that can decompose the training set matrix X into the matrix multiplication of three
```
```
matrices U Σ V (see numpy.linalg.svd()). The pseudoinverse is computed as X+ = VΣ+U⊺. To
```
compute the matrix Σ+, the algorithm takes Σ and sets to zero all values smaller than a tiny threshold value,
then it replaces all the nonzero values with their inverse, and finally it transposes the resulting matrix. This
approach is more efficient than computing the Normal Equation, plus it handles edge cases nicely: indeed, the
```
Normal Equation may not work if the matrix X X is not invertible (i.e., singular), such as if m < n or if some
```
features are redundant, but the pseudoinverse is always defined.
Computational Complexity
```
The Normal Equation computes the inverse of X X, which is an (n + 1) × (n + 1) matrix (where n is the
```
```
number of features). The computational complexity of inverting such a matrix is typically about 𝓞(n ) to
```
```
𝓞(n ), depending on the implementation. In other words, if you double the number of features, you multiply the
```
computation time by roughly 2 = 5.3 to 2 = 8.
```
The SVD approach used by Scikit-Learn’s LinearRegression class is about 𝓞(n ). If you double the
```
number of features, you multiply the computation time by roughly 4.
WARNING
```
Both the Normal Equation and the SVD approach get very slow when the number of features grows large (e.g., 100,000). On the
```
```
positive side, both are linear with regard to the number of instances in the training set (they are ݓ m_)), so they handle large training
```
sets efficiently, provided they can fit in memory.
```
Also, once you have trained your Linear Regression model (using the Normal Equation or any other algorithm),
```
predictions are very fast: the computational complexity is linear with regard to both the number of instances
you want to make predictions on and the number of features. In other words, making predictions on twice as
```
many instances (or twice as many features) will take roughly twice as much time.
```
Now we will look at a very different way to train a Linear Regression model, which is better suited for cases
where there are a large number of features or too many training instances to fit in memory.
Gradient Descent
Gradient Descent is a generic optimization algorithm capable of finding optimal solutions to a wide range of
problems. The general idea of Gradient Descent is to tweak parameters iteratively in order to minimize a cost
function.
Suppose you are lost in the mountains in a dense fog, and you can only feel the slope of the ground below your
feet. A good strategy to get to the bottom of the valley quickly is to go downhill in the direction of the steepest
⊺
⊺
⊺
2.4
3
2.4 3
2
slope. This is exactly what Gradient Descent does: it measures the local gradient of the error function with
regard to the parameter vector θ, and it goes in the direction of descending gradient. Once the gradient is zero,
you have reached a minimum!
```
In practice, you start by filling θ with random values (this is called random initialization). Then you improve it
```
```
gradually, taking one baby step at a time, each step attempting to decrease the cost function (e.g., the MSE),
```
```
until the algorithm converges to a minimum (see Figure 4-3).
```
Figure 4-3. In this depiction of Gradient Descent, the model parameters are initialized randomly and get tweaked repeatedly to minimize the cost
```
function; the learning step size is proportional to the slope of the cost function, so the steps gradually get smaller as the cost approaches the
```
minimum
An important parameter in Gradient Descent is the size of the steps, determined by the learning rate
hyperparameter. If the learning rate is too small, then the algorithm will have to go through many iterations to
```
converge, which will take a long time (see Figure 4-4).
```
Figure 4-4. The learning rate is too small
On the other hand, if the learning rate is too high, you might jump across the valley and end up on the other
side, possibly even higher up than you were before. This might make the algorithm diverge, with larger and
```
larger values, failing to find a good solution (see Figure 4-5).
```
Figure 4-5. The learning rate is too large
Finally, not all cost functions look like nice, regular bowls. There may be holes, ridges, plateaus, and all sorts of
irregular terrains, making convergence to the minimum difficult. Figure 4-6 shows the two main challenges
with Gradient Descent. If the random initialization starts the algorithm on the left, then it will converge to a
local minimum, which is not as good as the global minimum. If it starts on the right, then it will take a very long
time to cross the plateau. And if you stop too early, you will never reach the global minimum.
Figure 4-6. Gradient Descent pitfalls
Fortunately, the MSE cost function for a Linear Regression model happens to be a convex function, which
means that if you pick any two points on the curve, the line segment joining them is never below the curve.
This implies that there are no local minima, just one global minimum. It is also a continuous function with a
slope that never changes abruptly. These two facts have a great consequence: Gradient Descent is guaranteed
```
to approach arbitrarily close the global minimum (if you wait long enough and if the learning rate is not too
```
```
high).
```
In fact, the cost function has the shape of a bowl, but it can be an elongated bowl if the features have very
different scales. Figure 4-7 shows Gradient Descent on a training set where features 1 and 2 have the same
```
scale (on the left), and on a training set where feature 1 has much smaller values than feature 2 (on the right).
```
1
2
```
Figure 4-7. Gradient Descent with (left) and without (right) feature scaling
```
As you can see, on the left the Gradient Descent algorithm goes straight toward the minimum, thereby reaching
it quickly, whereas on the right it first goes in a direction almost orthogonal to the direction of the global
minimum, and it ends with a long march down an almost flat valley. It will eventually reach the minimum, but
it will take a long time.
WARNING
```
When using Gradient Descent, you should ensure that all features have a similar scale (e.g., using Scikit-Learn’s StandardScaler
```
```
class), or else it will take much longer to converge.
```
This diagram also illustrates the fact that training a model means searching for a combination of model
```
parameters that minimizes a cost function (over the training set). It is a search in the model’s parameter space:
```
the more parameters a model has, the more dimensions this space has, and the harder the search is: searching
for a needle in a 300-dimensional haystack is much trickier than in 3 dimensions. Fortunately, since the cost
```
function is convex in the case of Linear Regression, the needle is simply at the bottom of the bowl.
```
Batch Gradient Descent
To implement Gradient Descent, you need to compute the gradient of the cost function with regard to each
model parameter θ . In other words, you need to calculate how much the cost function will change if you
change θ just a little bit. This is called a partial derivative. It is like asking “What is the slope of the mountain
```
under my feet if I face east?” and then asking the same question facing north (and so on for all other
```
```
dimensions, if you can imagine a universe with more than three dimensions). Equation 4-5 computes the partial
```
```
derivative of the MSE with regard to parameter θ , noted ∂ MSE(θ) / ∂θ .
```
Equation 4-5. Partial derivatives of the cost function
∂
```
∂θjMSE (𝛉) =
```
2
m
m
∑
```
i=1
```
```
(𝛉⊺x(i) − y(i)) x(i)j
```
Instead of computing these partial derivatives individually, you can use Equation 4-6 to compute them all in
```
one go. The gradient vector, noted ∇ MSE(θ), contains all the partial derivatives of the cost function (one for
```
```
each model parameter).
```
Equation 4-6. Gradient vector of the cost function
```
𝛻𝛉 MSE (𝛉) = = 2m X⊺ (X𝛉 − y)
```
WARNING
Notice that this formula involves calculations over the full training set X, at each Gradient Descent step! This is why the algorithm is
```
called Batch Gradient Descent: it uses the whole batch of training data at every step (actually, Full Gradient Descent would probably be
```
```
a better name). As a result it is terribly slow on very large training sets (but we will see much faster Gradient Descent algorithms
```
```
shortly). However, Gradient Descent scales well with the number of features; training a Linear Regression model when there are
```
hundreds of thousands of features is much faster using Gradient Descent than using the Normal Equation or SVD decomposition.
Once you have the gradient vector, which points uphill, just go in the opposite direction to go downhill. This
```
means subtracting ∇ MSE(θ) from θ. This is where the learning rate η comes into play: multiply the gradient
```
```
vector by η to determine the size of the downhill step (Equation 4-7).
```
Equation 4-7. Gradient Descent step
```
𝛉(next step) = 𝛉 − η∇𝛉 MSE(𝛉)
```
Let’s look at a quick implementation of this algorithm:
```
eta = 0.1 # learning rate
```
```
n_epochs = 1000
```
```
m = len(X_b) # number of instances
```
```
np.random.seed(42)
```
```
theta = np.random.randn(2, 1) # randomly initialized model parameters
```
```
for epoch in range(n_epochs):
```
j
j
j j
θ
⎛
⎜
⎝
∂∂θ
```
0 MSE (𝛉)
```
∂∂θ
```
1 MSE (𝛉)
```
⋮
∂∂θ
```
n MSE (𝛉)
```
⎞
⎟
⎠
θ 3
```
gradients = 2 / m * X_b.T @ (X_b @ theta - y)
```
```
theta = theta - eta * gradients
```
That wasn’t too hard! Each iteration over the training set is called an epoch. Let’s look at the resulting theta:
>>> theta
```
array([[4.21509616],
```
```
[2.77011339]])
```
Hey, that’s exactly what the Normal Equation found! Gradient Descent worked perfectly. But what if you had
used a different learning rate eta? Figure 4-8 shows the first 20 steps of Gradient Descent using three different
learning rates. The line at the bottom of each plot represents the random starting point, then each epoch is
represented by a darker and darker line.
Figure 4-8. Gradient Descent with various learning rates
On the left, the learning rate is too low: the algorithm will eventually reach the solution, but it will take a long
time. In the middle, the learning rate looks pretty good: in just a few epochs, it has already converged to the
solution. On the right, the learning rate is too high: the algorithm diverges, jumping all over the place and
actually getting further and further away from the solution at every step.
```
To find a good learning rate, you can use grid search (see Chapter 2). However, you may want to limit the
```
number of epochs so that grid search can eliminate models that take too long to converge.
You may wonder how to set the number of epochs. If it is too low, you will still be far away from the optimal
```
solution when the algorithm stops; but if it is too high, you will waste time while the model parameters do not
```
change anymore. A simple solution is to set a very large number of epochs but to interrupt the algorithm when
```
the gradient vector becomes tiny—that is, when its norm becomes smaller than a tiny number ϵ (called the
```
```
tolerance)—because this happens when Gradient Descent has (almost) reached the minimum.
```
CONVERGENCE RATE
```
When the cost function is convex and its slope does not change abruptly (as is the case for the MSE cost
```
```
function), Batch Gradient Descent with a fixed learning rate will eventually converge to the optimal
```
```
solution, but you may have to wait a while: it can take O(1/ϵ) iterations to reach the optimum within a range
```
of ϵ, depending on the shape of the cost function. If you divide the tolerance by 10 to have a more precise
solution, then the algorithm may have to run about 10 times longer.
Stochastic Gradient Descent
The main problem with Batch Gradient Descent is the fact that it uses the whole training set to compute the
gradients at every step, which makes it very slow when the training set is large. At the opposite extreme,
Stochastic Gradient Descent picks a random instance in the training set at every step and computes the
gradients based only on that single instance. Obviously, working on a single instance at a time makes the
algorithm much faster because it has very little data to manipulate at every iteration. It also makes it possible to
```
train on huge training sets, since only one instance needs to be in memory at each iteration (Stochastic GD can
```
```
be implemented as an out-of-core algorithm; see Chapter 1).
```
```
On the other hand, due to its stochastic (i.e., random) nature, this algorithm is much less regular than Batch
```
Gradient Descent: instead of gently decreasing until it reaches the minimum, the cost function will bounce up
and down, decreasing only on average. Over time it will end up very close to the minimum, but once it gets
```
there it will continue to bounce around, never settling down (see Figure 4-9). So once the algorithm stops, the
```
final parameter values are good, but not optimal.Figure 4-9. With Stochastic Gradient Descent, each training step is much faster but also much more stochastic than when using Batch Gradient
Descent
```
When the cost function is very irregular (as in Figure 4-6), this can actually help the algorithm jump out of
```
local minima, so Stochastic Gradient Descent has a better chance of finding the global minimum than Batch
Gradient Descent does.
Therefore, randomness is good to escape from local optima, but bad because it means that the algorithm can
never settle at the minimum. One solution to this dilemma is to gradually reduce the learning rate. The steps
```
start out large (which helps make quick progress and escape local minima), then get smaller and smaller,
```
allowing the algorithm to settle at the global minimum. This process is akin to simulated annealing, an
algorithm inspired from the process in metallurgy of annealing, where molten metal is slowly cooled down. The
```
function that determines the learning rate at each iteration is called the learning schedule. If the learning rate is
```
reduced too quickly, you may get stuck in a local minimum, or even end up frozen halfway to the minimum. If
the learning rate is reduced too slowly, you may jump around the minimum for a long time and end up with a
suboptimal solution if you halt training too early.
This code implements Stochastic Gradient Descent using a simple learning schedule:
```
n_epochs = 50
```
t0, t1 = 5, 50 # learning schedule hyperparameters
```
def learning_schedule(t):
```
```
return t0 / (t + t1)
```
```
np.random.seed(42)
```
```
theta = np.random.randn(2, 1) # random initialization
```
```
for epoch in range(n_epochs):
```
```
for iteration in range(m):
```
```
random_index = np.random.randint(m)
```
```
xi = X_b[random_index : random_index + 1]
```
```
yi = y[random_index : random_index + 1]
```
```
gradients = 2 * xi.T @ (xi @ theta - yi) # for SGD, do not divide by m
```
```
eta = learning_schedule(epoch * m + iteration)
```
```
theta = theta - eta * gradients
```
```
By convention we iterate by rounds of m iterations; each round is called an epoch, as earlier. While the Batch
```
Gradient Descent code iterated 1,000 times through the whole training set, this code goes through the training
set only 50 times and reaches a pretty good solution:
>>> theta
```
array([[4.21076011],
```
```
[2.74856079]])
```
```
Figure 4-10 shows the first 20 steps of training (notice how irregular the steps are).
```
Figure 4-10. The first 20 steps of Stochastic Gradient Descent
Note that since instances are picked randomly, some instances may be picked several times per epoch, while
others may not be picked at all. If you want to be sure that the algorithm goes through every instance at each
```
epoch, another approach is to shuffle the training set (making sure to shuffle the input features and the labels
```
```
jointly), then go through it instance by instance, then shuffle it again, and so on. However, this approach is
```
more complex and it generally does not improve the result.
WARNING
```
When using Stochastic Gradient Descent, the training instances must be independent and identically distributed (IID) to ensure that the
```
parameters get pulled toward the global optimum, on average. A simple way to ensure this is to shuffle the instances during training
```
(e.g., pick each instance randomly, or shuffle the training set at the beginning of each epoch). If you do not shuffle the instances—for
```
example, if the instances are sorted by label—then SGD will start by optimizing for one label, then the next, and so on, and it will not
settle close to the global minimum.
To perform Linear Regression using Stochastic GD with Scikit-Learn, you can use the SGDRegressor class,
which defaults to optimizing the MSE cost function. The following code runs for maximum 1,000 epochs
```
(max_iter) or until the loss drops by less than 10 (tol) during 100 epochs (n_iter_no_change). It
```
```
starts with a learning rate of 0.01 (eta0), using the default learning schedule (different from the one we used).
```
```
Lastly, it does not use any regularization (penalty=None; more details on this shortly):
```
from sklearn.linear_model import SGDRegressor
```
sgd_reg = SGDRegressor(max_iter=1000, tol=1e-5, penalty=None, eta0=0.01,
```
```
n_iter_no_change=100, random_state=42)
```
```
sgd_reg.fit(X, y.ravel()) # y.ravel() because fit() expects 1D targets
```
Once again, you find a solution quite close to the one returned by the Normal Equation:
>>> sgd_reg.intercept_, sgd_reg.coef_
```
(array([4.21278812]), array([2.77270267]))
```
TIP
```
All Scikit-Learn estimators can be trained using the fit() method, but some estimators also have a partial_fit() method that
```
```
you can call to run a single round of training on one or more instances (it ignores hyperparameters like max_iter or tol). Repeatedly
```
```
calling partial_fit() will gradually train the model. This is useful when you need more control over the training process. Other
```
```
models have a warm_start hyperparameter instead (and some have both): if you set warm_start=True, calling the fit()
```
method on a trained model will not reset the model, it will just continue training where it left off, respecting hyperparameters like
```
max_iter and tol. Note that fit() resets the iteration counter used by the learning schedule, while partial_fit() does not.
```
Mini-batch Gradient Descent
The last Gradient Descent algorithm we will look at is called Mini-batch Gradient Descent. It is straightforward
once you know Batch and Stochastic Gradient Descent: at each step, instead of computing the gradients based
```
on the full training set (as in Batch GD) or based on just one instance (as in Stochastic GD), Mini-batch GD
```
computes the gradients on small random sets of instances called mini-batches. The main advantage of Mini-
batch GD over Stochastic GD is that you can get a performance boost from hardware optimization of matrix
operations, especially when using GPUs.
The algorithm’s progress in parameter space is less erratic than with Stochastic GD, especially with fairly large
mini-batches. As a result, Mini-batch GD will end up walking around a bit closer to the minimum than
```
Stochastic GD—but it may be harder for it to escape from local minima (in the case of problems that suffer
```
```
from local minima, unlike Linear Regression with the MSE cost function). Figure 4-11 shows the paths taken
```
by the three Gradient Descent algorithms in parameter space during training. They all end up near the
minimum, but Batch GD’s path actually stops at the minimum, while both Stochastic GD and Mini-batch GD
continue to walk around. However, don’t forget that Batch GD takes a lot of time to take each step, and
Stochastic GD and Mini-batch GD would also reach the minimum if you used a good learning schedule.
–5
Figure 4-11. Gradient Descent paths in parameter space
```
Let’s compare the algorithms we’ve discussed so far for Linear Regression (recall that m is the number of
```
```
training instances and n is the number of features); see Table 4-1.
```
4
T
a
b
l
e
4
-
1
.
C
o
m
p
a
r
i
s
o
n
o
f
a
l
g
o
r
i
t
h
m
s
f
o
r
L
i
n
e
a
r
R
e
g
r
e
s
s
i
o
n
Algorithm Large m
Out-of-core
support Large n Hyperparams Scaling required Scikit-Learn
Normal Equation Fast No Slow 0 No N/A
SVD Fast No Slow 0 No LinearRegress
ion
Batch GD Slow No Fast 2 Yes N/A
Stochastic GD Fast Yes Fast ≥2 Yes SGDRegressor
Mini-batch GD Fast Yes Fast ≥2 Yes N/A
There is almost no difference after training: all these algorithms end up with very similar models and make
predictions in exactly the same way.
Polynomial Regression
What if your data is more complex than a straight line? Surprisingly, you can use a linear model to fit nonlinear
data. A simple way to do this is to add powers of each feature as new features, then train a linear model on this
extended set of features. This technique is called Polynomial Regression.
```
Let’s look at an example. First, let’s generate some nonlinear data, based on a simple quadratic equation (plus
```
```
some noise; see Figure 4-12):
```
```
np.random.seed(42)
```
```
m = 100
```
```
X = 6 * np.random.rand(m, 1) - 3
```
```
y = 0.5 * X ** 2 + X + 2 + np.random.randn(m, 1)
```
5
Figure 4-12. Generated nonlinear and noisy dataset
Clearly, a straight line will never fit this data properly. So let’s use Scikit-Learn’s PolynomialFeatures
```
class to transform our training data, adding the square (second-degree polynomial) of each feature in the
```
```
training set as a new feature (in this case there is just one feature):
```
>>> from sklearn.preprocessing import PolynomialFeatures
```
>>> poly_features = PolynomialFeatures(degree=2, include_bias=False)
```
```
>>> X_poly = poly_features.fit_transform(X)
```
>>> X[0]
```
array([-0.75275929])
```
>>> X_poly[0]
```
array([-0.75275929, 0.56664654])
```
X_poly now contains the original feature of X plus the square of this feature. Now you can fit a
```
LinearRegression model to this extended training data (Figure 4-13):
```
```
>>> lin_reg = LinearRegression()
```
```
>>> lin_reg.fit(X_poly, y)
```
>>> lin_reg.intercept_, lin_reg.coef_
```
(array([1.78134581]), array([[0.93366893, 0.56456263]]))
```
Figure 4-13. Polynomial Regression model predictions
Not bad: the model estimates ˆy = 0.56x1 2 + 0.93x1 + 1.78 when in fact the original function was
```
y = 0.5x1 2 + 1.0x1 + 2.0 + Gaussian noise.
```
Note that when there are multiple features, Polynomial Regression is capable of finding relationships between
features, which is something a plain Linear Regression model cannot do. This is made possible by the fact that
PolynomialFeatures also adds all combinations of features up to the given degree. For example, if there
were two features a and b, PolynomialFeatures with degree=3 would not only add the features a , a ,
b , and b , but also the combinations ab, a b, and ab .
2 3
2 3 2 2
WARNING
```
PolynomialFeatures(degree=d) transforms an array containing n features into an array containing (n + d)! / d!n! features,
```
where n! is the factorial of n, equal to 1 × 2 × 3 × ⋯ × n. Beware of the combinatorial explosion of the number of features!
Learning Curves
If you perform high-degree Polynomial Regression, you will likely fit the training data much better than with
plain Linear Regression. For example, Figure 4-14 applies a 300-degree polynomial model to the preceding
```
training data, and compares the result with a pure linear model and a quadratic model (second-degree
```
```
polynomial). Notice how the 300-degree polynomial model wiggles around to get as close as possible to the
```
training instances.
Figure 4-14. High-degree Polynomial Regression
This high-degree Polynomial Regression model is severely overfitting the training data, while the linear model
is underfitting it. The model that will generalize best in this case is the quadratic model, which makes sense
because the data was generated using a quadratic model. But in general you won’t know what function
generated the data, so how can you decide how complex your model should be? How can you tell that your
model is overfitting or underfitting the data?
In Chapter 2 you used cross-validation to get an estimate of a model’s generalization performance. If a model
performs well on the training data but generalizes poorly according to the cross-validation metrics, then your
model is overfitting. If it performs poorly on both, then it is underfitting. This is one way to tell when a model
is too simple or too complex.
Another way to tell is to look at the learning curves: these are plots of the model’s training error and validation
error as a function of the training iteration: just evaluate the model at regular intervals during training on both
```
the training set and the validation set, and plot the results. If the model cannot be trained incrementally (i.e., if it
```
```
does not support partial_fit() or warm_start), then you must train the model several times on
```
gradually larger subsets of the training set.
```
Scikit-Learn has a useful learning_curve() function to help with this: it trains and evaluates the model
```
using cross-validation. By default it retrains the model on growing subsets of the training set, but if the model
supports incremental learning you can set exploit_incremental_learning=True when calling
```
learning_curve() and it will train the model incrementally instead. The function returns the training set
```
sizes at which it evaluated the model, and the training and validation scores it measured for each size and for
each cross-validation fold. Let’s use this function to look at the learning curves of the plain Linear Regression
```
model (see Figure 4-15):
```
from sklearn.model_selection import learning_curve
```
train_sizes, train_scores, valid_scores = learning_curve(
```
```
LinearRegression(), X, y, train_sizes=np.linspace(0.01, 1.0, 40), cv=5,
```
```
scoring="neg_root_mean_squared_error")
```
```
train_errors = -train_scores.mean(axis=1)
```
```
valid_errors = -valid_scores.mean(axis=1)
```
```
plt.plot(train_sizes, train_errors, "r-+", linewidth=2, label="train")
```
```
plt.plot(train_sizes, valid_errors, "b-", linewidth=3, label="valid")
```
[...] # beautify the figure: add labels, axis, grid and legend.
```
plt.show()
```
Figure 4-15. Learning curves
This model is underfitting, let’s see why. First, let’s look at the training error: when there are just one or two
instances in the training set, the model can fit them perfectly, which is why the curve starts at zero. But as new
instances are added to the training set, it becomes impossible for the model to fit the training data perfectly,
both because the data is noisy and because it is not linear at all. So the error on the training data goes up until it
reaches a plateau, at which point adding new instances to the training set doesn’t make the average error much
better or worse. Now let’s look at the validation error. When the model is trained on very few training instances,
it is incapable of generalizing properly, which is why the validation error is initially quite large. Then, as the
model is shown more training examples, it learns, and thus the validation error slowly goes down. However,
once again a straight line cannot do a good job modeling the data, so the error ends up at a plateau, very close
to the other curve.
```
These learning curves are typical of a model that’s underfitting. Both curves have reached a plateau; they are
```
close and fairly high.
TIP
If your model is underfitting the training data, adding more training examples will not help. You need to use a better model or come up
with better features.
```
Now let’s look at the learning curves of a 10th-degree polynomial model on the same data (Figure 4-16):
```
from sklearn.pipeline import make_pipeline
```
polynomial_regression = make_pipeline(
```
```
PolynomialFeatures(degree=10, include_bias=False),
```
```
LinearRegression())
```
```
train_sizes, train_scores, valid_scores = learning_curve(
```
```
polynomial_regression, X, y, train_sizes=np.linspace(0.01, 1.0, 40), cv=5,
```
```
scoring="neg_root_mean_squared_error")
```
[...] # same as earlier
Figure 4-16. Learning curves for the 10th-degree polynomial model
These learning curves look a bit like the previous ones, but there are two very important differences:
The error on the training data is much lower than before.
There is a gap between the curves. This means that the model performs significantly better on the
training data than on the validation data, which is the hallmark of an overfitting model. If you used a
much larger training set, however, the two curves would continue to get closer.
TIP
One way to improve an overfitting model is to feed it more training data until the validation error reaches the training error.
THE BIAS/VARIANCE TRADE-OFF
An important theoretical result of statistics and Machine Learning is the fact that a model’s generalization
error can be expressed as the sum of three very different errors:
Bias
This part of the generalization error is due to wrong assumptions, such as assuming that the data is
linear when it is actually quadratic. A high-bias model is most likely to underfit the training data.
Variance
This part is due to the model’s excessive sensitivity to small variations in the training data. A model
```
with many degrees of freedom (such as a high-degree polynomial model) is likely to have high variance
```
and thus overfit the training data.
Irreducible error
This part is due to the noisiness of the data itself. The only way to reduce this part of the error is to
```
clean up the data (e.g., fix the data sources, such as broken sensors, or detect and remove outliers).
```
Increasing a model’s complexity will typically increase its variance and reduce its bias. Conversely,
reducing a model’s complexity increases its bias and reduces its variance. This is why it is called a trade-
off.
Regularized Linear Models
```
As we saw in Chapters 1 and 2, a good way to reduce overfitting is to regularize the model (i.e., to constrain it):
```
the fewer degrees of freedom it has, the harder it will be for it to overfit the data. A simple way to regularize a
polynomial model is to reduce the number of polynomial degrees.
For a linear model, regularization is typically achieved by constraining the weights of the model. We will now
look at Ridge Regression, Lasso Regression, and Elastic Net, which implement three different ways to
constrain the weights.
Ridge Regression
```
Ridge Regression (also called Tikhonov regularization) is a regularized version of Linear Regression: a
```
regularization term equal to αm ∑ni=1 θi 2 is added to the MSE. This forces the learning algorithm to not only fit
the data but also keep the model weights as small as possible. Note that the regularization term should only be
added to the cost function during training. Once the model is trained, you want to use the unregularized MSE
```
(or the RMSE) to evaluate the model’s performance.
```
The hyperparameter α controls how much you want to regularize the model. If α = 0, then Ridge Regression is
just Linear Regression. If α is very large, then all weights end up very close to zero and the result is a flat line
going through the data’s mean. Equation 4-8 presents the Ridge Regression cost function.
Equation 4-8. Ridge Regression cost function
```
J(𝛉) = MSE(𝛉) + αm ∑ni=1 θi 2
```
```
Note that the bias term θ is not regularized (the sum starts at i = 1, not 0). If we define w as the vector of
```
```
feature weights (θ to θ ), then the regularization term is equal to α(∥ w ∥ ) / m, where ∥ w ∥ represents the ℓ
```
norm of the weight vector. For Batch Gradient Descent, just add 2αw / m to the part of the MSE gradient
6
7
0
1 n 2 2 2 28
```
vector that corresponds to the feature weights, without adding anything to the gradient of the bias term (see
```
```
Equation 4-6).
```
WARNING
```
It is important to scale the data (e.g., using a StandardScaler) before performing Ridge Regression, as it is sensitive to the scale of
```
the input features. This is true of most regularized models.
Figure 4-17 shows several Ridge models trained on some very noisy linear data using different α values. On the
left, plain Ridge models are used, leading to linear predictions. On the right, the data is first expanded using
```
PolynomialFeatures(degree=10), then it is scaled using a StandardScaler, and finally the Ridge
```
models are applied to the resulting features: this is Polynomial Regression with Ridge regularization. Note how
```
increasing α leads to flatter (i.e., less extreme, more reasonable) predictions, thus reducing the model’s variance
```
but increasing its bias.
```
Figure 4-17. A linear model (left) and a polynomial model (right), both with various levels of Ridge regularization
```
As with Linear Regression, we can perform Ridge Regression either by computing a closed-form equation or
by performing Gradient Descent. The pros and cons are the same. Equation 4-9 shows the closed-form solution,
```
where A is the (n + 1) × (n + 1) identity matrix, except with a 0 in the top-left cell, corresponding to the bias
```
term.
Equation 4-9. Ridge Regression closed-form solution
```
ˆ𝛉 = (X⊺X + αA)−1 X⊺ y
```
```
Here is how to perform Ridge Regression with Scikit-Learn using a closed-form solution (a variant of Equation
```
```
4-9 that uses a matrix factorization technique by André-Louis Cholesky):
```
>>> from sklearn.linear_model import Ridge
```
>>> ridge_reg = Ridge(alpha=0.1, solver="cholesky")
```
```
>>> ridge_reg.fit(X, y)
```
9
```
>>> ridge_reg.predict([[1.5]])
```
```
array([[1.55325833]])
```
And using Stochastic Gradient Descent:
```
>>> sgd_reg = SGDRegressor(penalty="l2", alpha=0.1 / m, tol=None,
```
```
... max_iter=1000, eta0=0.01, random_state=42)
```
...
```
>>> sgd_reg.fit(X, y.ravel()) # y.ravel() because fit() expects 1D targets
```
```
>>> sgd_reg.predict([[1.5]])
```
```
array([1.55302613])
```
The penalty hyperparameter sets the type of regularization term to use. Specifying "l2" indicates that you
want SGD to add a regularization term to the MSE cost function equal to alpha times the square of the ℓ
norm of the weight vector: this is just like Ridge Regression, except there’s no division by m in this case, which
```
is why we passed alpha=0.1 / m, to get the same result as Ridge(alpha=0.1).
```
TIP
The RidgeCV class also performs Ridge Regression, but it automatically tunes hyperparameters using cross-validation. It’s roughly
```
equivalent to using GridSearchCV, but it’s optimized for Ridge Regression and runs much faster. Several other estimators (mostly
```
```
linear) also have efficient CV variants, such as LassoCV or ElasticNetCV.
```
Lasso Regression
```
Least Absolute Shrinkage and Selection Operator Regression (usually simply called Lasso Regression) is
```
another regularized version of Linear Regression: just like Ridge Regression, it adds a regularization term to
```
the cost function, but it uses the ℓ norm of the weight vector instead of the square of the ℓ norm (see Equation
```
```
4-10). Notice that the ℓ norm is multiplied by 2_α, whereas the ℓ norm was multiplied by _α / m in Ridge
```
regression. These factors were chosen to ensure that the optimal α value is independent from the training set
```
size: different norms lead to different factors (see Scikit-Learn issue #15657 for more details).
```
Equation 4-10. Lasso Regression cost function
```
J(𝛉) = MSE(𝛉) + 2α ∑ni=1|θi|
```
Figure 4-18 shows the same thing as Figure 4-17 but replaces Ridge models with Lasso models and uses
different α values.
10
2
1 2
1 2
```
Figure 4-18. A linear model (left) and a polynomial model (right), both using various levels of Lasso regularization
```
An important characteristic of Lasso Regression is that it tends to eliminate the weights of the least important
```
features (i.e., set them to zero). For example, the dashed line in the righthand plot in Figure 4-18 (with α = 0.01)
```
looks roughly cubic: all the weights for the high-degree polynomial features are equal to zero. In other words,
```
Lasso Regression automatically performs feature selection and outputs a sparse model (i.e., with few nonzero
```
```
feature weights).
```
You can get a sense of why this is the case by looking at Figure 4-19: the axes represent two model parameters,
and the background contours represent different loss functions. In the top-left plot, the contours represent the ℓ
```
loss (|θ | + |θ |), which drops linearly as you get closer to any axis. For example, if you initialize the model
```
```
parameters to θ = 2 and θ = 0.5, running Gradient Descent will decrement both parameters equally (as
```
```
represented by the dashed yellow line); therefore θ will reach 0 first (since it was closer to 0 to begin with).
```
```
After that, Gradient Descent will roll down the gutter until it reaches θ = 0 (with a bit of bouncing around,
```
```
since the gradients of ℓ never get close to 0: they are either –1 or 1 for each parameter). In the top-right plot,
```
```
the contours represent Lasso’s cost function (i.e., an MSE cost function plus an ℓ loss). The small white circles
```
1
1 2
1 2
2
1
1
1
show the path that Gradient Descent takes to optimize some model parameters that were initialized around θ =
0.25 and θ = –1: notice once again how the path quickly reaches θ = 0, then rolls down the gutter and ends up
```
bouncing around the global optimum (represented by the red square). If we increased α, the global optimum
```
would move left along the dashed yellow line, while if we decreased α, the global optimum would move right
```
(in this example, the optimal parameters for the unregularized MSE are θ = 2 and θ = 0.5).
```
Figure 4-19. Lasso versus Ridge regularization
The two bottom plots show the same thing but with an ℓ penalty instead. In the bottom-left plot, you can see
that the ℓ loss decreases as we get closer to the origin, so Gradient Descent just takes a straight path toward
```
that point. In the bottom-right plot, the contours represent Ridge Regression’s cost function (i.e., an MSE cost
```
```
function plus an ℓ loss). As you can see, the gradients get smaller as the parameters approach the global
```
```
optimum, so Gradient Descent naturally slows down, which helps convergence (as there is no bouncing
```
```
around). This helps Ridge converge faster than Lasso. Also note that the optimal parameters (represented by the
```
```
red square) get closer and closer to the origin when you increase α, but they never get eliminated entirely.
```
1
2 2
1 2
2
2
2
TIP
To avoid Gradient Descent from bouncing around the optimum at the end when using Lasso, you need to gradually reduce the learning
```
rate during training (it will still bounce around the optimum, but the steps will get smaller and smaller, so it will converge).
```
```
The Lasso cost function is not differentiable at θ = 0 (for i = 1, 2, ⋯, n), but Gradient Descent still works fine if
```
you use a subgradient vector g instead when any θ = 0. Equation 4-11 shows a subgradient vector equation
you can use for Gradient Descent with the Lasso cost function.
Equation 4-11. Lasso Regression subgradient vector
```
g(𝛉, J) = ∇𝛉 MSE(𝛉) + 2α where sign (θi) =
```
Here is a small Scikit-Learn example using the Lasso class:
>>> from sklearn.linear_model import Lasso
```
>>> lasso_reg = Lasso(alpha=0.1)
```
```
>>> lasso_reg.fit(X, y)
```
```
>>> lasso_reg.predict([[1.5]])
```
```
array([1.53788174])
```
```
Note that you could instead use SGDRegressor(penalty="l1", alpha=0.1).
```
Elastic Net
Elastic Net is a middle ground between Ridge Regression and Lasso Regression. The regularization term is a
weighted sum of both Ridge and Lasso’s regularization terms, and you can control the mix ratio r. When r = 0,
```
Elastic Net is equivalent to Ridge Regression, and when r = 1, it is equivalent to Lasso Regression (see
```
```
Equation 4-12).
```
Equation 4-12. Elastic Net cost function
```
J(𝛉) = MSE(𝛉) + r(2α ∑ni=1|θi|) + (1 − r)( αm ∑ni=1 θ2i )
```
```
So when should you use plain Linear Regression (i.e., without any regularization), Ridge, Lasso, or Elastic
```
Net? It is almost always preferable to have at least a little bit of regularization, so generally you should avoid
plain Linear Regression. Ridge is a good default, but if you suspect that only a few features are useful, you
should prefer Lasso or Elastic Net because they tend to reduce the useless features’ weights down to zero, as we
have discussed. In general, Elastic Net is preferred over Lasso because Lasso may behave erratically when the
number of features is greater than the number of training instances or when several features are strongly
correlated.
```
Here is a short example that uses Scikit-Learn’s ElasticNet (l1_ratio corresponds to the mix ratio r):
```
>>> from sklearn.linear_model import ElasticNet
```
>>> elastic_net = ElasticNet(alpha=0.1, l1_ratio=0.5)
```
```
>>> elastic_net.fit(X, y)
```
```
>>> elastic_net.predict([[1.5]])
```
```
array([1.54333232])
```
Early Stopping
i11
i
⎛
⎜
⎝
```
sign (θ1)
```
```
sign (θ2)
```
⋮
```
sign (θn)
```
⎞
⎟
⎠
⎧
⎪
⎨
⎪
⎩
−1 if θi < 0
0 if θi = 0
+1 if θi > 0
A very different way to regularize iterative learning algorithms such as Gradient Descent is to stop training as
soon as the validation error reaches a minimum. This is called early stopping. Figure 4-20 shows a complex
```
model (in this case, a high-degree Polynomial Regression model) being trained with Batch Gradient Descent on
```
```
the quadratic dataset we used earlier. As the epochs go by, the algorithm learns, and its prediction error (RMSE)
```
on the training set goes down, along with its prediction error on the validation set. After a while though, the
validation error stops decreasing and starts to go back up. This indicates that the model has started to overfit the
training data. With early stopping you just stop training as soon as the validation error reaches the minimum. It
is such a simple and efficient regularization technique that Geoffrey Hinton called it a “beautiful free lunch.”
Figure 4-20. Early stopping regularization
TIP
With Stochastic and Mini-batch Gradient Descent, the curves are not so smooth, and it may be hard to know whether you have reached
```
the minimum or not. One solution is to stop only after the validation error has been above the minimum for some time (when you are
```
```
confident that the model will not do any better), then roll back the model parameters to the point where the validation error was at a
```
minimum.
Here is a basic implementation of early stopping:
from copy import deepcopy
from sklearn.metrics import mean_squared_error
from sklearn.preprocessing import StandardScaler
X_train, y_train, X_valid, y_valid = [...] # split the quadratic dataset
```
preprocessing = make_pipeline(PolynomialFeatures(degree=90, include_bias=False),
```
```
StandardScaler())
```
```
X_train_prep = preprocessing.fit_transform(X_train)
```
```
X_valid_prep = preprocessing.transform(X_valid)
```
```
sgd_reg = SGDRegressor(penalty=None, eta0=0.002, random_state=42)
```
```
n_epochs = 500
```
```
best_valid_rmse = float('inf')
```
```
for epoch in range(n_epochs):
```
```
sgd_reg.partial_fit(X_train_prep, y_train)
```
```
y_valid_predict = sgd_reg.predict(X_valid_prep)
```
```
val_error = mean_squared_error(y_valid, y_valid_predict, squared=False)
```
if val_error < best_valid_rmse:
```
best_valid_rmse = val_error
```
```
best_model = deepcopy(sgd_reg)
```
Here’s what this code does: it first adds the polynomial features and scales all the input features, both for the
```
training set and the validation set (this code assumes that you have split the training set into a smaller training
```
```
set and a validation set). Then it creates an SGDRegressor model with no regularization and a small learning
```
```
rate. In the training loop, it calls partial_fit() instead of fit(), to perform incremental learning. At
```
each epoch, it measures the RMSE on the validation set. If it is lower than the lowest RMSE seen so far, it
saves a copy of the model in the best_model variable. This implementation does not actually stop training,
```
but it lets you revert to the best model after training. Note that the model is copied using copy.deepcopy(),
```
because it copies both the model’s hyperparameters and the learned parameters. In contrast,
```
sklearn.base.clone() only copies the model’s hyperparameters.
```
Logistic Regression
```
As we discussed in Chapter 1, some regression algorithms can be used for classification (and vice versa).
```
```
Logistic Regression (also called Logit Regression) is commonly used to estimate the probability that an instance
```
```
belongs to a particular class (e.g., what is the probability that this email is spam?). If the estimated probability
```
```
is greater than a given threshold (typically 50%), then the model predicts that the instance belongs to that class
```
```
(called the positive class, labeled “1”), and otherwise it predicts that it does not (i.e., it belongs to the negative
```
```
class, labeled “0”). This makes it a binary classifier.
```
Estimating Probabilities
So how does Logistic Regression work? Just like a Linear Regression model, a Logistic Regression model
```
computes a weighted sum of the input features (plus a bias term), but instead of outputting the result directly
```
```
like the Linear Regression model does, it outputs the logistic of this result (see Equation 4-13).
```
```
Equation 4-13. Logistic Regression model estimated probability (vectorized form)
```
```
ˆp = h𝛉 (x) = σ (𝛉⊺x)
```
```
The logistic—noted σ(·)—is a sigmoid function (i.e., S-shaped) that outputs a number between 0 and 1. It is
```
defined as shown in Equation 4-14 and Figure 4-21.
Equation 4-14. Logistic function
```
σ (t) = 11+ exp (−t)
```
Figure 4-21. Logistic function
```
Once the Logistic Regression model has estimated the probability ˆp = h (x) that an instance x belongs to the
```
```
positive class, it can make its prediction ŷ easily (see Equation 4-15).
```
Equation 4-15. Logistic Regression model prediction using a threshold probability of 50%
```
ˆy = {
```
θ
0 if ˆp < 0.5
1 if ˆp ≥ 0.5
```
Notice that σ(t) < 0.5 when t < 0, and σ(t) ≥ 0.5 when t ≥ 0, so a Logistic Regression model using the default
```
threshold of 50% probability predicts 1 if θ x is positive and 0 if it is negative.
NOTE
```
The score t is often called the logit. The name comes from the fact that the logit function, defined as logit(p) = log(p / (1 – p)), is the
```
inverse of the logistic function. Indeed, if you compute the logit of the estimated probability p, you will find that the result is t. The logit
is also called the log-odds, since it is the log of the ratio between the estimated probability for the positive class and the estimated
probability for the negative class.
Training and Cost Function
Now you know how a Logistic Regression model estimates probabilities and makes predictions. But how is it
trained? The objective of training is to set the parameter vector θ so that the model estimates high probabilities
```
for positive instances (y = 1) and low probabilities for negative instances (y = 0). This idea is captured by the
```
cost function shown in Equation 4-16 for a single training instance x.
Equation 4-16. Cost function of a single training instance
```
c(𝛉) = {
```
```
This cost function makes sense because –log(t) grows very large when t approaches 0, so the cost will be large
```
if the model estimates a probability close to 0 for a positive instance, and it will also be very large if the model
```
estimates a probability close to 1 for a negative instance. On the other hand, –log(t) is close to 0 when t is close
```
to 1, so the cost will be close to 0 if the estimated probability is close to 0 for a negative instance or close to 1
for a positive instance, which is precisely what we want.
The cost function over the whole training set is the average cost over all training instances. It can be written in a
single expression called the log loss, shown in Equation 4-17.
```
Equation 4-17. Logistic Regression cost function (log loss)
```
```
J(𝛉) = − 1m ∑mi=1[y(i)log(ˆp(i)) + (1 − y(i))log(1 − ˆp(i))]
```
WARNING
```
The log loss was not just pulled out of a hat. It can be shown mathematically (using Bayesian inference) that minimizing this loss will
```
result in the model with the maximum likelihood of being optimal, assuming that the instances follow a Gaussian distribution around the
mean of their class. When you use the log loss, this is the implicit assumption you are making. The more wrong this assumption is, the
more biased the model will be. Similarly, when we used the MSE to train Linear Regression models, we were implicitly assuming that
```
the data was purely linear, plus some Gaussian noise. So if the data is not linear (e.g., quadratic) or if the noise is not Gaussian (e.g., if
```
```
outliers are not exponentially rare), then the model will be biased.
```
The bad news is that there is no known closed-form equation to compute the value of θ that minimizes this cost
```
function (there is no equivalent of the Normal Equation). But the good news is that this cost function is convex,
```
```
so Gradient Descent (or any other optimization algorithm) is guaranteed to find the global minimum (if the
```
```
learning rate is not too large and you wait long enough). The partial derivatives of the cost function with regard
```
to the j model parameter θ are given by Equation 4-18.
Equation 4-18. Logistic cost function partial derivatives
∂
```
∂θjJ (𝛉) =
```
1
m
m
∑
```
i=1
```
```
(σ (𝛉⊺x(i)) − y(i)) x(i)j
```
⊺
```
− log(ˆp) if y = 1
```
```
− log(1 − ˆp) if y = 0
```
th j
This equation looks very much like Equation 4-5: for each instance it computes the prediction error and
multiplies it by the j feature value, and then it computes the average over all training instances. Once you have
the gradient vector containing all the partial derivatives, you can use it in the Batch Gradient Descent
algorithm. That’s it: you now know how to train a Logistic Regression model. For Stochastic GD you would
take one instance at a time, and for Mini-batch GD you would use a mini-batch at a time.
Decision Boundaries
Let’s use the iris dataset to illustrate Logistic Regression. This is a famous dataset that contains the sepal and
petal length and width of 150 iris flowers of three different species: Iris setosa, Iris versicolor, and Iris
```
virginica (see Figure 4-22).
```
Figure 4-22. Flowers of three iris plant species
Let’s try to build a classifier to detect the Iris virginica type based only on the petal width feature. First let’s
load the data and take a quick peek:
>>> from sklearn.datasets import load_iris
```
>>> iris = load_iris(as_frame=True)
```
```
>>> list(iris)
```
th
12
['data', 'target', 'frame', 'target_names', 'DESCR', 'feature_names',
'filename', 'data_module']
```
>>> iris.data.head(3)
```
```
sepal length (cm) sepal width (cm) petal length (cm) petal width (cm)
```
0 5.1 3.5 1.4 0.2
1 4.9 3.0 1.4 0.2
2 4.7 3.2 1.3 0.2
```
>>> iris.target.head(3) # note that the instances are not shuffled
```
0 0
1 0
2 0
```
Name: target, dtype: int64
```
>>> iris.target_names
```
array(['setosa', 'versicolor', 'virginica'], dtype='<U10')
```
Now let’s split the data and train a Logistic Regression model on the training set:
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
```
X = iris.data[["petal width (cm)"]].values
```
```
y = iris.target_names[iris.target] == 'virginica'
```
```
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)
```
```
log_reg = LogisticRegression(random_state=42)
```
```
log_reg.fit(X_train, y_train)
```
Let’s look at the model’s estimated probabilities for flowers with petal widths varying from 0 cm to 3 cm
```
(Figure 4-23):
```
```
X_new = np.linspace(0, 3, 1000).reshape(-1, 1) # reshape to get a column vector
```
```
y_proba = log_reg.predict_proba(X_new)
```
```
decision_boundary = X_new[y_proba[:, 1] >= 0.5][0, 0]
```
```
plt.plot(X_new, y_proba[:, 0], "b--", linewidth=2,
```
```
label="Not Iris virginica proba")
```
```
plt.plot(X_new, y_proba[:, 1], "g-", linewidth=2, label="Iris virginica proba")
```
```
plt.plot([decision_boundary, decision_boundary], [0, 1], "k:", linewidth=2,
```
```
label="Decision boundary")
```
[...] # beautify the figure: add grid, labels, axis, legend, arrows and samples
```
plt.show()
```
13
Figure 4-23. Estimated probabilities and decision boundary
```
The petal width of Iris virginica flowers (represented as triangles) ranges from 1.4 cm to 2.5 cm, while the
```
```
other iris flowers (represented by squares) generally have a smaller petal width, ranging from 0.1 cm to 1.8 cm.
```
Notice that there is a bit of overlap. Above about 2 cm the classifier is highly confident that the flower is an Iris
```
virginica (it outputs a high probability for that class), while below 1 cm it is highly confident that it is not an
```
```
Iris virginica (high probability for the “Not Iris virginica” class). In between these extremes, the classifier is
```
```
unsure. However, if you ask it to predict the class (using the predict() method rather than the
```
```
predict_proba() method), it will return whichever class is the most likely. Therefore, there is a decision
```
boundary at around 1.6 cm where both probabilities are equal to 50%: if the petal width is higher than 1.6 cm,
```
the classifier will predict that the flower is an Iris virginica, and otherwise it will predict that it is not (even if it
```
```
is not very confident):
```
>>> decision_boundary
1.6516516516516517
```
>>> log_reg.predict([[1.7], [1.5]])
```
```
array([ True, False])
```
Figure 4-24 shows the same dataset, but this time displaying two features: petal width and length. Once trained,
the Logistic Regression classifier can, based on these two features, estimate the probability that a new flower is
an Iris virginica. The dashed line represents the points where the model estimates a 50% probability: this is the
model’s decision boundary. Note that it is a linear boundary. Each parallel line represents the points where the
```
model outputs a specific probability, from 15% (bottom left) to 90% (top right). All the flowers beyond the top-
```
right line have over 90% chance of being Iris virginica, according to the model.
Figure 4-24. Linear decision boundary
Just like the other linear models, Logistic Regression models can be regularized using ℓ or ℓ penalties. Scikit-
Learn actually adds an ℓ penalty by default.
NOTE
```
The hyperparameter controlling the regularization strength of a Scikit-Learn LogisticRegression model is not alpha (as in
```
```
other linear models), but its inverse: C. The higher the value of C, the less the model is regularized.
```
14
1 2
2
Softmax Regression
The Logistic Regression model can be generalized to support multiple classes directly, without having to train
```
and combine multiple binary classifiers (as discussed in Chapter 3). This is called Softmax Regression, or
```
Multinomial Logistic Regression.
```
The idea is simple: when given an instance x, the Softmax Regression model first computes a score s (x) for
```
```
each class k, then estimates the probability of each class by applying the softmax function (also called the
```
```
normalized exponential) to the scores. The equation to compute s (x) should look familiar, as it is just like the
```
```
equation for Linear Regression prediction (see Equation 4-19).
```
Equation 4-19. Softmax score for class k
```
sk (x) = (𝛉(k))
```
⊺
x
Note that each class has its own dedicated parameter vector θ . All these vectors are typically stored as rows
in a parameter matrix Θ.
Once you have computed the score of every class for the instance x, you can estimate the probability ˆp that the
```
instance belongs to class k by running the scores through the softmax function (Equation 4-20). The function
```
```
computes the exponential of every score, then normalizes them (dividing by the sum of all the exponentials).
```
```
The scores are generally called logits or log-odds (although they are actually unnormalized log-odds).
```
Equation 4-20. Softmax function
```
ˆpk = σ(s(x))k = exp (sk (x))
```
```
∑Kj=1 exp (sj (x))
```
In this equation:
K is the number of classes.
```
s(x) is a vector containing the scores of each class for the instance x.
```
```
σ(s(x)) is the estimated probability that the instance x belongs to class k, given the scores of each class
```
for that instance.
Just like the Logistic Regression classifier, by default the Softmax Regression classifier predicts the class with
```
the highest estimated probability (which is simply the class with the highest score), as shown in Equation 4-21.
```
Equation 4-21. Softmax Regression classifier prediction
ˆy =argmax
k
```
σ(s(x))k =argmax
```
k
```
sk (x) =argmax
```
k
```
((𝛉(k))
```
⊺
```
x)
```
The argmax operator returns the value of a variable that maximizes a function. In this equation, it returns the
```
value of k that maximizes the estimated probability σ(s(x)) .
```
TIP
```
The Softmax Regression classifier predicts only one class at a time (i.e., it is multiclass, not multioutput), so it should be used only with
```
mutually exclusive classes, such as different species of plants. You cannot use it to recognize multiple people in one picture.
Now that you know how the model estimates probabilities and makes predictions, let’s take a look at training.
```
The objective is to have a model that estimates a high probability for the target class (and consequently a low
```
k
k
```
(k)
```
k
k
k
```
probability for the other classes). Minimizing the cost function shown in Equation 4-22, called the cross
```
entropy, should lead to this objective because it penalizes the model when it estimates a low probability for a
target class. Cross entropy is frequently used to measure how well a set of estimated class probabilities matches
the target classes.
Equation 4-22. Cross entropy cost function
```
J(Θ) = − 1m ∑mi=1 ∑Kk=1 y(i)k log(ˆp(i)k )
```
In this equation:
```
y(i)k is the target probability that the i instance belongs to class k. In general, it is either equal to 1 or
```
0, depending on whether the instance belongs to the class or not.
```
Notice that when there are just two classes (K = 2), this cost function is equivalent to the Logistic Regression’s
```
```
cost function (log loss; see Equation 4-17).
```
CROSS ENTROPY
Cross entropy originated from Claude Shannon’s information theory. Suppose you want to efficiently
```
transmit information about the weather every day. If there are eight options (sunny, rainy, etc.), you could
```
encode each option using three bits because 2 = 8. However, if you think it will be sunny almost every day,
```
it would be much more efficient to code “sunny” on just one bit (0) and the other seven options on four bits
```
```
(starting with a 1). Cross entropy measures the average number of bits you actually send per option. If your
```
```
assumption about the weather is perfect, cross entropy will be equal to the entropy of the weather itself (i.e.,
```
```
its intrinsic unpredictability). But if your assumptions are wrong (e.g., if it rains often), cross entropy will
```
```
be greater by an amount called the Kullback–Leibler (KL) divergence.
```
```
The cross entropy between two probability distributions p and q is defined as H(p,q) = —Σ p(x) log q(x) (at
```
```
least when the distributions are discrete). For more details, check out my video on the subject.
```
The gradient vector of this cost function with regard to θ is given by Equation 4-23.
Equation 4-23. Cross entropy gradient vector for class k
```
𝛻𝛉(k) J (Θ) = 1m
```
m
∑
```
i=1
```
```
(ˆp(i)k − y(i)k )x(i)
```
```
Now you can compute the gradient vector for every class, then use Gradient Descent (or any other optimization
```
```
algorithm) to find the parameter matrix Θ that minimizes the cost function.
```
Let’s use Softmax Regression to classify the iris plants into all three classes. Scikit-Learn’s
LogisticRegression uses Softmax Regression automatically when you train it on more than two classes
```
(assuming you use solver="lbfgs", which is the default). It also applies ℓ regularization by default,
```
which you can control using the hyperparameter C, as earlier:
```
X = iris.data[["petal length (cm)", "petal width (cm)"]].values
```
```
y = iris["target"]
```
```
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)
```
```
softmax_reg = LogisticRegression(C=30, random_state=42)
```
```
softmax_reg.fit(X_train, y_train)
```
So the next time you find an iris with petals that are 5 cm long and 2 cm wide, you can ask your model to tell
```
you what type of iris it is, and it will answer Iris virginica (class 2) with 96% probability (or Iris versicolor
```
th
3
x
```
(k)
```
2
```
with 4% probability):
```
```
>>> softmax_reg.predict([[5, 2]])
```
```
array([2])
```
```
>>> softmax_reg.predict_proba([[5, 2]]).round(2)
```
```
array([[0. , 0.04, 0.96]])
```
Figure 4-25 shows the resulting decision boundaries, represented by the background colors. Notice that the
decision boundaries between any two classes are linear. The figure also shows the probabilities for the Iris
```
versicolor class, represented by the curved lines (e.g., the line labeled with 0.30 represents the 30% probability
```
```
boundary). Notice that the model can predict a class that has an estimated probability below 50%. For example,
```
at the point where all decision boundaries meet, all classes have an equal estimated probability of 33%.
Figure 4-25. Softmax Regression decision boundaries
In this chapter, you learned various ways to train linear models, both for regression and classification. You used
a closed-form equation to solve Linear Regression, as well as Gradient Descent, and you learned how various
penalties can be added to the cost function during training to regularize the model. Along the way, you also
learned how to plot learning curves and analyze them, and how to implement early stopping. Finally, you
learned how Logistic Regression and Softmax Regression work. We’ve opened up the first Machine Learning
black boxes! In the next chapters, we will open many more, starting with Decision Trees.
Exercises
1. Which Linear Regression training algorithm can you use if you have a training set with millions of
features?
2. Suppose the features in your training set have very different scales. Which algorithms might suffer
from this, and how? What can you do about it?
3. Can Gradient Descent get stuck in a local minimum when training a Logistic Regression model?
4. Do all Gradient Descent algorithms lead to the same model, provided you let them run long enough?
5. Suppose you use Batch Gradient Descent and you plot the validation error at every epoch. If you
notice that the validation error consistently goes up, what is likely going on? How can you fix this?
6. Is it a good idea to stop Mini-batch Gradient Descent immediately when the validation error goes up?
7. Which Gradient Descent algorithm (among those we discussed) will reach the vicinity of the optimal
solution the fastest? Which will actually converge? How can you make the others converge as well?
8. Suppose you are using Polynomial Regression. You plot the learning curves and you notice that there
is a large gap between the training error and the validation error. What is happening? What are three
ways to solve this?
9. Suppose you are using Ridge Regression and you notice that the training error and the validation error
are almost equal and fairly high. Would you say that the model suffers from high bias or high
variance? Should you increase the regularization hyperparameter α or reduce it?
10. Why would you want to use:
a. Ridge Regression instead of plain Linear Regression (i.e., without any regularization)?
b. Lasso instead of Ridge Regression?
c. Elastic Net instead of Lasso?
11. Suppose you want to classify pictures as outdoor/indoor and daytime/nighttime. Should you implement
two Logistic Regression classifiers or one Softmax Regression classifier?
12. Implement Batch Gradient Descent with early stopping for Softmax Regression without using Scikit-
Learn, only NumPy. Use it on a classification task such as the iris dataset.
Solutions to these exercises are available at the end of this chapter’s notebook, at https://homl.info/colab3.
1 Technically speaking, its derivative is Lipschitz continuous.
2 Since feature 1 is smaller, it takes a larger change in θ to affect the cost function, which is why the bowl is elongated along the θ axis.
```
3 Eta (η) is the seventh letter of the Greek alphabet.
```
4 While the Normal Equation can only perform Linear Regression, the Gradient Descent algorithms can be used to train many other models, as
we will see.
5 A quadratic equation is of the form y = ax + bx + c.
1 1
2
6 This notion of bias is not to be confused with the bias term of linear models.
```
7 It is common to use the notation J(θ) for cost functions that don’t have a short name; we will often use this notation throughout the rest of this
```
book. The context will make it clear which cost function is being discussed.
8 Norms are discussed in Chapter 2.
```
9 A square matrix full of 0s except for 1s on the main diagonal (top left to bottom right).
```
10 Alternatively you can use the Ridge class with the "sag" solver. Stochastic Average GD is a variant of Stochastic GD. For more details,
see the presentation “Minimizing Finite Sums with the Stochastic Average Gradient Algorithm” by Mark Schmidt et al. from the University of
British Columbia.
11 You can think of a subgradient vector at a nondifferentiable point as an intermediate vector between the gradient vectors around that point.
```
12 Photos reproduced from the corresponding Wikipedia pages. Iris virginica photo by Frank Mayfield (Creative Commons BY-SA 2.0), Iris
```
```
versicolor photo by D. Gordon E. Robertson (Creative Commons BY-SA 3.0), Iris setosa photo public domain.
```
```
13 NumPy’s reshape() function allows one dimension to be –1, which means “automatic”: the value is inferred from the length of the array
```
and the remaining dimensions.
14 It is the the set of points x such that θ + θ x + θ x = 0, which defines a straight line.0 1 1 2 2
Chapter 5. Support Vector Machines
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the author’s raw and unedited content as they
write—so you can take advantage of these technologies long before the official release of these titles.
This will be the 5th chapter of the final book. Notebooks are available on GitHub at
```
https://github.com/ageron/handson-ml3. Datasets are available at https://github.com/ageron/data.
```
If you have comments about how we might improve the content and/or examples in this book, or if you notice
missing material within this chapter, please reach out to the editoor at ntache@oreilly.com.
```
A Support Vector Machine (SVM) is a powerful and versatile Machine Learning model, capable of performing
```
linear or nonlinear classification, regression, and even novelty detection. SVMs shine with small to medium-sized
```
nonlinear datasets (i.e., hundreds to thousands of instances), especially for classification tasks. However, they
```
don’t scale very well to very large datasets, as we will see.
This chapter will explain the core concepts of SVMs, how to use them, and how they work. Let’s jump right in!
Linear SVM Classification
The fundamental idea behind SVMs is best explained with some pictures. Figure 5-1 shows part of the iris dataset
that was introduced at the end of Chapter 4. The two classes can clearly be separated easily with a straight line
```
(they are linearly separable). The left plot shows the decision boundaries of three possible linear classifiers. The
```
model whose decision boundary is represented by the dashed line is so bad that it does not even separate the
classes properly. The other two models work perfectly on this training set, but their decision boundaries come so
close to the instances that these models will probably not perform as well on new instances. In contrast, the solid
```
line in the plot on the right represents the decision boundary of an SVM classifier; this line not only separates the
```
two classes but also stays as far away from the closest training instances as possible. You can think of an SVM
```
classifier as fitting the widest possible street (represented by the parallel dashed lines) between the classes. This is
```
called large margin classification.
Figure 5-1. Large margin classification
Notice that adding more training instances “off the street” will not affect the decision boundary at all: it is fully
```
determined (or “supported”) by the instances located on the edge of the street. These instances are called the
```
```
support vectors (they are circled in Figure 5-1).
```
Figure 5-2. Sensitivity to feature scales
WARNING
SVMs are sensitive to the feature scales, as you can see in Figure 5-2: in the left plot, the vertical scale is much larger than the horizontal
```
scale, so the widest possible street is close to horizontal. After feature scaling (e.g., using Scikit-Learn’s StandardScaler), the decision
```
boundary in the right plot looks much better.
Soft Margin Classification
If we strictly impose that all instances must be off the street and on the correct side, this is called hard margin
classification. There are two main issues with hard margin classification. First, it only works if the data is linearly
separable. Second, it is sensitive to outliers. Figure 5-3 shows the iris dataset with just one additional outlier: on
```
the left, it is impossible to find a hard margin; on the right, the decision boundary ends up very different from the
```
one we saw in Figure 5-1 without the outlier, and it will probably not generalize as well.
Figure 5-3. Hard margin sensitivity to outliers
To avoid these issues, use a more flexible model. The objective is to find a good balance between keeping the
```
street as large as possible and limiting the margin violations (i.e., instances that end up in the middle of the street
```
```
or even on the wrong side). This is called soft margin classification.
```
When creating an SVM model using Scikit-Learn, you can specify several hyperparameters, including a
regularization hyperparameter called C. If you set it to a low value, then you end up with the model on the left of
Figure 5-4. With a high value, you get the model on the right. As you can see, reducing C makes the street larger,
but it also leads to more margin violations. In other words, reducing C results in more instances supporting the
street, so there’s less risk of overfitting. But if you reduce it too much, then the model ends up underfitting, as
seems to be the case here: the model with C=100 looks like it will generalize better than the one with C=1.
```
Figure 5-4. Large margin (left) versus fewer margin violations (right)
```
TIP
If your SVM model is overfitting, you can try regularizing it by reducing C.
The following Scikit-Learn code loads the iris dataset, and trains a linear SVM classifier to detect Iris virginica
flowers. The pipeline first scales the features, then uses a LinearSVC with C=1:
from sklearn.datasets import load_iris
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import LinearSVC
```
iris = load_iris(as_frame=True)
```
```
X = iris.data[["petal length (cm)", "petal width (cm)"]].values
```
```
y = (iris.target == 2) # Iris virginica
```
```
svm_clf = make_pipeline(StandardScaler(),
```
```
LinearSVC(C=1, random_state=42))
```
```
svm_clf.fit(X, y)
```
The resulting model is represented on the left in Figure 5-4.
Then, as usual, you can use the model to make predictions:
>>> X_new = [[5.5, 1.7], [5.0, 1.5]]
```
>>> svm_clf.predict(X_new)
```
```
array([ True, False])
```
The first plant is classified as an Iris virginia, while the second is not. Let’s look at the scores that the SVM used to
make these predictions. These measure the signed distance between each instance and the decision boundary:
```
>>> svm_clf.decision_function(X_new)
```
```
array([ 0.66163411, -0.22036063])
```
```
Unlike the LogisticRegression classifier, LinearSVC does not have a predict_proba() method to
```
```
estimate the class probabilities. That said, if you use the SVC class (discussed shortly) instead of LinearSVC,
```
and if you set its probability to True, then the model will fit an extra model at the end of training to map the
SVM decision function scores to estimated probabilities. Under the hood, this requires using 5-fold cross-
validation to generate out-of-sample predictions for every instance in the training set, then training a
LogisticRegression model, so it will slow down training considerably. After that, the
```
predict_proba() and predict_log_proba() methods will be available.
```
Nonlinear SVM Classification
Although linear SVM classifiers are efficient and often work surprisingly well, many datasets are not even close to
being linearly separable. One approach to handling nonlinear datasets is to add more features, such as polynomial
```
features (as you did in Chapter 4); in some cases this can result in a linearly separable dataset. Consider the left
```
plot in Figure 5-5: it represents a simple dataset with just one feature, x . This dataset is not linearly separable, as
```
you can see. But if you add a second feature x = (x ) , the resulting 2D dataset is perfectly linearly separable.
```
1
2 1 2
Figure 5-5. Adding features to make a dataset linearly separable
To implement this idea using Scikit-Learn, create a pipeline containing a PolynomialFeatures transformer
```
(discussed in “Polynomial Regression”), followed by a StandardScaler and a LinearSVC. Let’s test this on
```
the moons dataset: this is a toy dataset for binary classification in which the data points are shaped as two
```
interleaving crescent moons (see Figure 5-6). You can generate this dataset using the make_moons() function:
```
from sklearn.datasets import make_moons
from sklearn.preprocessing import PolynomialFeatures
```
X, y = make_moons(n_samples=100, noise=0.15, random_state=42)
```
```
polynomial_svm_clf = make_pipeline(
```
```
PolynomialFeatures(degree=3),
```
```
StandardScaler(),
```
```
LinearSVC(C=10, max_iter=10_000, random_state=42)
```
```
)
```
```
polynomial_svm_clf.fit(X, y)
```
Figure 5-6. Linear SVM classifier using polynomial features
Polynomial Kernel
Adding polynomial features is simple to implement and can work great with all sorts of Machine Learning
```
algorithms (not just SVMs). That said, at a low polynomial degree, this method cannot deal with very complex
```
datasets, and with a high polynomial degree it creates a huge number of features, making the model too slow.
Fortunately, when using SVMs you can apply an almost miraculous mathematical technique called the kernel trick
```
(which is explained later in this chapter). The kernel trick makes it possible to get the same result as if you had
```
added many polynomial features, even with a very high-degree, without actually having to actually add them. This
means there’s no combinatorial explosion of the number of features. This trick is implemented by the SVC class.
Let’s test it on the moons dataset:
from sklearn.svm import SVC
```
poly_kernel_svm_clf = make_pipeline(StandardScaler(),
```
```
SVC(kernel="poly", degree=3, coef0=1, C=5))
```
```
poly_kernel_svm_clf.fit(X, y)
```
This code trains an SVM classifier using a third-degree polynomial kernel. It is represented on the left in Figure 5-
7. On the right is another SVM classifier using a 10th-degree polynomial kernel. Obviously, if your model is
overfitting, you might want to reduce the polynomial degree. Conversely, if it is underfitting, you can try
increasing it. The hyperparameter coef0 controls how much the model is influenced by high-degree terms versus
low-degree terms.
Figure 5-7. SVM classifiers with a polynomial kernel
TIP
```
Although you will typically tune hyperparameters automatically (e.g., using randomized search), it’s good to have a sense of what each
```
hyperparameter actually does, and how it may interact with other hyperparameters: this way, you can narrow the search to a much smaller
space.
Similarity Features
Another technique to tackle nonlinear problems is to add features computed using a similarity function, which
measures how much each instance resembles a particular landmark, as we did in Chapter 2 when we added the
geographic similarity features. For example, let’s take the 1D dataset discussed earlier and add two landmarks to it
```
at x = –2 and x = 1 (see the left plot in Figure 5-8). Next, let’s define the similarity function to be the Gaussian
```
```
RBF with γ = 0.3. This is a bell-shaped function varying from 0 (very far away from the landmark) to 1 (at the
```
```
landmark).
```
Now we are ready to compute the new features. For example, let’s look at the instance x = –1: it is located at a
```
distance of 1 from the first landmark and 2 from the second landmark. Therefore its new features are x = exp(–0.3
```
```
× 1 ) ≈ 0.74 and x = exp(–0.3 × 2 ) ≈ 0.30. The plot on the right in Figure 5-8 shows the transformed dataset
```
```
(dropping the original features). As you can see, it is now linearly separable.
```
Figure 5-8. Similarity features using the Gaussian RBF
You may wonder how to select the landmarks. The simplest approach is to create a landmark at the location of
each and every instance in the dataset. Doing that creates many dimensions and thus increases the chances that the
transformed training set will be linearly separable. The downside is that a training set with m instances and n
1 1
1
22
3 2
```
features gets transformed into a training set with m instances and m features (assuming you drop the original
```
```
features). If your training set is very large, you end up with an equally large number of features.
```
Gaussian RBF Kernel
Just like the polynomial features method, the similarity features method can be useful with any Machine Learning
algorithm, but it may be computationally expensive to compute all the additional features, especially on large
training sets. Once again the kernel trick does its SVM magic, making it possible to obtain a similar result as if you
had added many similarity features, but without actually doing so. Let’s try the SVC class with the Gaussian RBF
```
kernel:
```
```
rbf_kernel_svm_clf = make_pipeline(StandardScaler(),
```
```
SVC(kernel="rbf", gamma=5, C=0.001))
```
```
rbf_kernel_svm_clf.fit(X, y)
```
This model is represented at the bottom left in Figure 5-9. The other plots show models trained with different
```
values of hyperparameters gamma (γ) and C. Increasing gamma makes the bell-shaped curve narrower (see the
```
```
lefthand plots in Figure 5-8). As a result, each instance’s range of influence is smaller: the decision boundary ends
```
up being more irregular, wiggling around individual instances. Conversely, a small gamma value makes the bell-
shaped curve wider: instances have a larger range of influence, and the decision boundary ends up smoother. So γ
```
acts like a regularization hyperparameter: if your model is overfitting, you should reduce γ; if it is underfitting, you
```
```
should increase γ (similar to the C hyperparameter).
```
Figure 5-9. SVM classifiers using an RBF kernel
Other kernels exist but are used much more rarely. Some kernels are specialized for specific data structures. String
```
kernels are sometimes used when classifying text documents or DNA sequences (e.g., using the string
```
```
subsequence kernel or kernels based on the Levenshtein distance).
```
TIP
With so many kernels to choose from, how can you decide which one to use? As a rule of thumb, you should always try the linear kernel
```
first. The LinearSVC class is much faster than SVC(kernel="linear"), especially if the training set is very large. If it is not too
```
```
large, you should also try kernelized SVMs, starting with the Gaussian RBF kernel; it often works really well. Then if you have spare time
```
and computing power, you can experiment with a few other kernels, using hyperparameter search. If there are kernels specialized for your
training set’s data structure, make sure to give them a try too.
SVM Classes and Computational Complexity
The LinearSVC class is based on the liblinear library, which implements an optimized algorithm for linear
SVMs. It does not support the kernel trick, but it scales almost linearly with the number of training instances and1
```
the number of features. Its training time complexity is roughly ݓ m_ × n). The algorithm takes longer if you
```
```
require very high precision. This is controlled by the tolerance hyperparameter ϵ (called tol in Scikit-Learn). In
```
most classification tasks, the default tolerance is fine.
The SVC class is based on the libsvm library, which implements an algorithm that supports the kernel trick. The
```
training time complexity is usually between ݓ m_ × n) and ݓ m_ × n). Unfortunately, this means that it gets
```
```
dreadfully slow when the number of training instances gets large (e.g., hundreds of thousands of instances). This
```
algorithm is best for small or medium-sized nonlinear training sets. It scales well with the number of features,
```
especially with sparse features (i.e., when each instance has few nonzero features). In this case, the algorithm
```
scales roughly with the average number of nonzero features per instance. Table 5-1 compares Scikit-Learn’s SVM
classification classes.
Lastly, the SGDClassifier class also performs large-margin classification by default, and its hyperparameters
can be adjusted to produce similar results as the linear SVMs, especially the regularization hyperparameters
```
(alpha and penalty) and the learning_rate. For training, it uses Stochastic Gradient Descent (see
```
```
Chapter 4), which allows incremental learning and uses little memory. Moreover, it scales very well, as its
```
```
computational complexity is ݓ m_ × n).
```
2
2 3
T
a
b
l
e
5
-
1
.
C
o
m
p
a
r
i
s
o
n
o
f
S
c
i
k
i
t
-
L
e
a
r
n
c
l
a
s
s
e
s
f
o
r
S
V
M
c
l
a
s
s
i
f
i
c
a
t
i
o
n
Class Time Complexity Out-of-core support Scaling required Kernel trick
```
LinearSVC ݓ m_ × n) No Yes No
```
```
SVC ݓ m² × _n) to ݓ m³ × _n) No Yes Yes
```
```
SGDClassifier ݓ m_ × n) Yes Yes No
```
Now let’s see how the SVM algorithm can also be used for linear and nonlinear regression.
SVM Regression
To use SVMs for regression instead of classification, the trick is to tweak the objective: instead of trying to fit the
largest possible street between two classes while limiting margin violations, SVM Regression tries to fit as many
```
instances as possible on the street while limiting margin violations (i.e., instances off the street). The width of the
```
street is controlled by a hyperparameter, ϵ. Figure 5-10 shows two linear SVM Regression models trained on some
```
linear data, one with a small margin (ϵ = 0.5) and the other with a large margin (ϵ = 1.5).
```
Figure 5-10. SVM Regression
Reducing ϵ increases the number of support vectors, which regularizes the model. Moreover, if you add more
```
training instances within the margin, it will not affect the model’s predictions; thus, the model is said to be ϵ-
```
insensitive.
You can use Scikit-Learn’s LinearSVR class to perform linear SVM Regression. The following code produces
the model represented on the left in Figure 5-10:
from sklearn.svm import LinearSVR
X, y = [...] # a linear dataset
```
svm_reg = make_pipeline(StandardScaler(),
```
```
LinearSVR(epsilon=0.5, random_state=42))
```
```
svm_reg.fit(X, y)
```
To tackle nonlinear regression tasks, you can use a kernelized SVM model. Figure 5-11 shows SVM Regression on
a random quadratic training set, using a second-degree polynomial kernel. There is some regularization in the left
```
plot (i.e., a small C value), and much less in the right plot (i.e., a large C value).
```
Figure 5-11. SVM Regression using a second-degree polynomial kernel
```
The following code uses Scikit-Learn’s SVR class (which supports the kernel trick) to produce the model
```
represented on the left in Figure 5-11:
from sklearn.svm import SVR
X, y = [...] # a quadratic dataset
```
svm_poly_reg = make_pipeline(StandardScaler(),
```
```
SVR(kernel="poly", degree=2, C=0.01, epsilon=0.1))
```
```
svm_poly_reg.fit(X, y)
```
The SVR class is the regression equivalent of the SVC class, and the LinearSVR class is the regression
```
equivalent of the LinearSVC class. The LinearSVR class scales linearly with the size of the training set (just
```
```
like the LinearSVC class), while the SVR class gets much too slow when the training set grows very large (just
```
```
like the SVC class).
```
NOTE
SVMs can also be used for novelty detection, as we will see in Chapter 9.
The rest of this chapter explains how SVMs make predictions and how their training algorithms work, starting
with linear SVM classifiers. If you are just getting started with Machine Learning, you can safely skip this and go
straight to the exercises at the end of this chapter, and come back later when you want to get a deeper
understanding of SVMs.
Under The Hood of Linear SVM Classifiers
The linear SVM classifier model predicts the class of a new instance x by first computing the decision function θ
```
x = θ x + ⋯ + θ x , where x is the bias feature (always equal to 1). If the result is positive, then the predicted
```
```
class ŷ is the positive class (1), otherwise it is the negative class (0). This is exactly like LogisticRegression
```
```
(discussed in Chapter 4).
```
NOTE
Up to now, I have used the convention of putting all the model parameters in one vector θ, including the bias term θ and the input feature
weights θ to θ . This required adding a bias input x = 1 to all instances. Another very common convention is to separate the bias term b
```
(equal to θ ), and the feature weights vector w (containing θ to θ ). In this case, no bias feature needs to be added to the input feature
```
vectors, and the linear SVM’s decision function is equal to w x + b = w x + ⋯ + w x + b. I will use this convention throughout the rest
of this book.
So making predictions with a linear SVM classifier is quite straightforward. How about training? Well, it requires
```
finding the weights vector w and the bias term b that make the “street” (i.e., the margin) as wide as possible while
```
limiting the number of margin violations. Let’s start with the width of the street: to make it larger, we need to make
w smaller. This may be easier to visualize in 2D, as shown in Figure 5-12. Let’s define the borders of the street as
the points where the decision function is equal to –1 or +1. On the left plot, the weight w is 1, so the points at
which w x = –1 or +1 are x = –1 and +1: therefore the margin’s size is 2. On the right plot, the weight is 0.5, so
the points at which w x = –1 or +1 are x = –2 and +2: the margin’s size is 4. So we need to keep w as small as
possible. Note that the bias term b has no influence on the size of the margin: tweaking it just shifts the margin
around, without affecting its size.
⊺
0 0 n n 0
0
1 n 0
0 1 n⊺
1 1 n n
1
1 1 1
1 1 1
Figure 5-12. A smaller weight vector results in a larger margin
We also want to avoid margin violations, so we need the decision function to be greater than 1 for all positive
training instances and lower than –1 for negative training instances. If we define t = –1 for negative instances
```
(when y = 0) and t = 1 for positive instances (when y = 1), then we can write this constraint as t (w x + b)
```
≥ 1 for all instances.
We can therefore express the hard margin linear SVM classifier objective as the constrained optimization problem
in Equation 5-1.
Equation 5-1. Hard margin linear SVM classifier objective
```
(i)
```
```
(i) (i) (i) (i) ⊺ (i)
```
minimizew,b12 w⊺w
```
subject to t(i) (w⊺x(i) + b) ≥ 1 for i = 1, 2, ⋯ , m
```
NOTE
```
We are minimizing ½ w w, which is equal to ½∥ w ∥ , rather than minimizing ∥ w ∥ (the norm of w). Indeed, ½∥ w ∥ has a nice, simple
```
```
derivative (it is just w), while ∥ w ∥ is not differentiable at w = 0. Optimization algorithms often work much better on differentiable
```
functions.
To get the soft margin objective, we need to introduce a slack variable ζ ≥ 0 for each instance: ζ measures how
much the i instance is allowed to violate the margin. We now have two conflicting objectives: make the slack
variables as small as possible to reduce the margin violations, and make ½ w w as small as possible to increase the
margin. This is where the C hyperparameter comes in: it allows us to define the tradeoff between these two
objectives. This gives us the constrained optimization problem in Equation 5-2.
Equation 5-2. Soft margin linear SVM classifier objective
The hard margin and soft margin problems are both convex quadratic optimization problems with linear
```
constraints. Such problems are known as Quadratic Programming (QP) problems. Many off-the-shelf solvers are
```
available to solve QP problems by using a variety of techniques that are outside the scope of this book.
So using a QP solver is one way to train an SVM. Another is to use Gradient Descent to minimize the Hinge loss
```
or the squared Hinge loss (see Figure 5-13). Given an instance x of the positive class (i.e., with t = 1), the loss is
```
```
zero if the output s of the decision function (s = w x + b) is greater or equal to 1. This happens when the instance
```
```
is off the street and on the positive side. Given an instance of the negative class (i.e., with t = –1), the loss is zero if
```
s ≤ –1. This happens when the instance is off the street and on the negative side. The further away an instance is
from the correct side of the margin, the higher the loss: it grows linearly for the Hinge loss, and quadratically for
the squared Hinge loss. This makes the squared Hinge loss more sensitive to outliers. However, if the dataset is
clean, it tends to converge faster. By default, LinearSVC uses the squared Hinge loss, while SGDClassifier
uses the Hinge loss. Both classes let you choose the loss by setting the loss hyperparameter to "hinge" or
"squared_hinge". The SVC class’s optimization algorithm finds a similar solution as minimizing the Hinge
loss.
⊺ 2 2
```
(i) 3 (i)
```
th
⊺
minimizew,b,ζ12 w⊺w + C
m
∑
```
i=1
```
```
ζ (i)
```
```
subject to t(i) (w⊺x(i) + b) ≥ 1 − ζ (i) and ζ (i) ≥ 0 for i = 1, 2, ⋯ , m
```
4
⊺
```
Figure 5-13. The Hinge loss (left) and the Squared Hinge loss (right)
```
There’s yet another way to train a linear SVM classifier: solving the dual problem.
The Dual Problem
Given a constrained optimization problem, known as the primal problem, it is possible to express a different but
closely related problem, called its dual problem. The solution to the dual problem typically gives a lower bound to
the solution of the primal problem, but under some conditions it can have the same solution as the primal problem.
Luckily, the SVM problem happens to meet these conditions, so you can choose to solve the primal problem or
```
the dual problem; both will have the same solution. Equation 5-3 shows the dual form of the linear SVM objective.
```
If you are interested in knowing how to derive the dual problem from the primal problem, see the extra material
section in the notebook.
Equation 5-3. Dual form of the linear SVM objective
5
minimize𝛂12
m
∑
```
i=1
```
m
∑
```
j=1
```
```
α(i)α(j)t(i)t(j)x(i) ⊺x(j) −
```
m
∑
```
i=1
```
```
α(i)subject to α(i) ≥ 0 for all i = 1, 2, … , m and
```
m
∑
```
i=1
```
```
α(
```
```
Once you find the vector ˆ𝛂 that minimizes this equation (using a QP solver), use Equation 5-4 to compute ˆw and ˆb
```
that minimize the primal problem.
Equation 5-4. From the dual solution to the primal solution
Where n is the number of support vectors.
The dual problem is faster to solve than the primal one when the number of training instances is smaller than the
number of features. More importantly, the dual problem makes the kernel trick possible, while the primal does not.
So what is this kernel trick, anyway?
Kernelized SVMs
```
Suppose you want to apply a second-degree polynomial transformation to a two-dimensional training set (such as
```
```
the moons training set), then train a linear SVM classifier on the transformed training set. Equation 5-5 shows the
```
second-degree polynomial mapping function ϕ that you want to apply.
Equation 5-5. Second-degree polynomial mapping
```
ϕ(x) = ϕ(( )) =
```
Notice that the transformed vector is 3D instead of 2D. Now let’s look at what happens to a couple of 2D vectors,
a and b, if we apply this second-degree polynomial mapping and then compute the dot product of the transformed
```
vectors (See Equation 5-6).
```
Equation 5-6. Kernel trick for a second-degree polynomial mapping
How about that? The dot product of the transformed vectors is equal to the square of the dot product of the original
```
vectors: ϕ(a) ϕ(b) = (a b) .
```
```
Here is the key insight: if you apply the transformation ϕ to all training instances, then the dual problem (see
```
```
Equation 5-3) will contain the dot product ϕ(x ) ϕ(x ). But if ϕ is the second-degree polynomial transformation
```
```
defined in Equation 5-5, then you can replace this dot product of transformed vectors simply by (x(i) ⊺x(j))
```
2
. So,
```
you don’t need to transform the training instances at all; just replace the dot product by its square in Equation 5-3.
```
The result will be strictly the same as if you had gone through the trouble of transforming the training set then
fitting a linear SVM algorithm, but this trick makes the whole process much more computationally efficient.
ˆw =
m
∑
```
i=1
```
```
ˆα(i)t(i)x(i)
```
ˆb = 1
ns
m
∑
```
i=1ˆα(i)>0
```
```
(t(i) − ˆw⊺x(i))
```
s
x1
x2
⎛
⎝
x1 2
√2 x1x2
x2 2
⎞
⎠
6
```
ϕ(a)⊺ϕ (b) =
```
⊺
= a1 2b1 2 + 2a1b1a2b2 + a2 2b2 2
```
= (a1b1 + a2b2)2 = (( )
```
⊺
```
( ))
```
2
```
= (a⊺b)2
```
⎛
⎝
a1 2
√2 a1a2
a2 2
⎞
⎠
⎛
⎝
b1 2
√2 b1b2
b2 2
⎞
⎠
a1
a2
b1
b2
⊺ ⊺ 2
```
(i) ⊺ (j)
```
```
The function K(a, b) = (a b) is a second-degree polynomial kernel. In Machine Learning, a kernel is a function
```
```
capable of computing the dot product ϕ(a) ϕ(b), based only on the original vectors a and b, without having to
```
```
compute (or even to know about) the transformation ϕ. Equation 5-7 lists some of the most commonly used
```
kernels.
Equation 5-7. Common kernels
MERCER’S THEOREM
```
According to Mercer’s theorem, if a function K(a, b) respects a few mathematical conditions called Mercer’s
```
```
conditions (e.g., K must be continuous and symmetric in its arguments so that K(a, b) = K(b, a), etc.), then
```
```
there exists a function ϕ that maps a and b into another space (possibly with much higher dimensions) such
```
```
that K(a, b) = ϕ(a) ϕ(b). You can use K as a kernel because you know ϕ exists, even if you don’t know what ϕ
```
is. In the case of the Gaussian RBF kernel, it can be shown that ϕ maps each training instance to an infinite-
dimensional space, so it’s a good thing you don’t need to actually perform the mapping!
```
Note that some frequently used kernels (such as the sigmoid kernel) don’t respect all of Mercer’s conditions,
```
yet they generally work well in practice.
There is still one loose end we must tie up. Equation 5-4 shows how to go from the dual solution to the primal
solution in the case of a linear SVM classifier. But if you apply the kernel trick, you end up with equations that
```
include ϕ(x ). In fact, ˆw must have the same number of dimensions as ϕ(x ), which may be huge or even infinite,
```
so you can’t compute it. But how can you make predictions without knowing ˆw? Well, the good news is that you
can plug the formula for ˆw from Equation 5-4 into the decision function for a new instance x , and you get an
```
equation with only dot products between input vectors. This makes it possible to use the kernel trick (Equation 5-
```
```
8).
```
Equation 5-8. Making predictions with a kernelized SVM
Note that since α ≠ 0 only for support vectors, making predictions involves computing the dot product of the new
input vector x with only the support vectors, not all the training instances. Of course, you need to use the same
```
trick to compute the bias term ˆb (Equation 5-9).
```
Equation 5-9. Using the kernel trick to compute the bias term
⊺ 2
⊺
```
Linear: K (a, b) = a⊺b
```
```
Polynomial: K (a, b) = (γa⊺b + r)d
```
```
Gaussian RBF: K (a, b) =exp (−γ∥a − b∥2)
```
```
Sigmoid: K (a, b) =tanh (γa⊺b + r)
```
⊺
```
(i) (i)
```
```
(n)
```
```
h ˆw,ˆb(ϕ(x(n))) = ˆw⊺ϕ (x(n)) + ˆb = (
```
m
∑
```
i=1
```
```
ˆα(i)t(i)ϕ (x(i)))
```
⊺
```
ϕ (x(n)) + ˆb
```
=
m
∑
```
i=1
```
```
ˆα(i)t(i)(ϕ(x(i))
```
⊺
```
ϕ (x(n))) + ˆb
```
=
m
∑
```
i=1ˆα(i)>0
```
```
ˆα(i)t(i)K (x(i), x(n)) + ˆb
```
```
(i)
```
```
(n)
```
If you are starting to get a headache, it’s perfectly normal: it’s an unfortunate side effect of the kernel trick.
NOTE
It is also possible to implement online kernelized SVMs, capable of incremental learning, as described in the papers “Incremental and
Decremental Support Vector Machine Learning” and “Fast Kernel Classifiers with Online and Active Learning”. These kernelized SVMs
```
are implemented in Matlab and C++. But for large-scale nonlinear problems, you may want to consider using Random Forests (see
```
```
Chapter 7) or neural networks (see Part II).
```
Exercises
1. What is the fundamental idea behind Support Vector Machines?
2. What is a support vector?
3. Why is it important to scale the inputs when using SVMs?
4. Can an SVM classifier output a confidence score when it classifies an instance? What about a probability?
5. How can you choose between LinearSVC, SVC, or SGDClassifier?
6. Say you’ve trained an SVM classifier with an RBF kernel, but it seems to underfit the training set. Should
```
you increase or decrease γ (gamma)? What about C?
```
7. What does it mean for a model to be ϵ-insensitive?
8. What is the point of using the kernel trick?
9. Train a LinearSVC on a linearly separable dataset. Then train an SVC and a SGDClassifier on the
same dataset. See if you can get them to produce roughly the same model.
10. Train an SVM classifier on the Wine dataset, which you can load using
```
sklearn.datasets.load_wine(). This dataset contains the chemical analysis of 178 wine
```
samples produced by 3 different cultivators: the goal is to train a classification model capable of
predicting the cultivator based on the wine’s chemical analysis. Since SVM classifiers are binary
classifiers, you will need to use one-versus-all to classify all 3 classes. What accuracy can you reach?
11. Train and fine-tune an SVM regressor on the California housing dataset. You can use the original dataset
rather than the tweaked version we used in Chapter 2. The original dataset can be fetched using
```
sklearn.datasets.fetch_california_housing(). The targets represent hundreds of
```
thousands of dollars. Since there are over 20,000 instances, SVMs can be slow, so for hyperparameter
```
tuning you should use much less instances (e.g., 2,000), to test many more hyperparameter combinations.
```
What is your best model’s RMSE?
Solutions to these exercises are available at the end of this chapter’s notebook, at https://homl.info/colab3.
1 Chih-Jen Lin et al., “A Dual Coordinate Descent Method for Large-Scale Linear SVM,” Proceedings of the 25th International Conference on
```
Machine Learning (2008): 408–415.
```
ˆb = 1
ns
m
∑
```
i=1ˆα(i)>0
```
```
(t(i) − ˆw⊺ϕ (x(i))) = 1ns
```
m
∑
```
i=1ˆα(i)>0
```
```
(t(i) − (
```
m
∑
```
j=1
```
```
ˆα(j)t(j)ϕ (x(j)))
```
⊺
```
ϕ (x(i)))
```
= 1ns
m
∑
```
i=1ˆα(i)>0
```
```
t(i) −
```
m
∑
```
j=1
```
```
ˆα(j)>0
```
```
ˆα(j)t(j)K (x(i), x(j))
```
⎛
⎜
⎝
⎞
⎟
⎠
7 8
```
2 John Platt, “Sequential Minimal Optimization: A Fast Algorithm for Training Support Vector Machines” (Microsoft Research technical report,
```
```
April 21, 1998), https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-98-14.pdf.
```
```
3 Zeta (ζ) is the sixth letter of the Greek alphabet.
```
4 To learn more about Quadratic Programming, you can start by reading Stephen Boyd and Lieven Vandenberghe’s book Convex Optimization
```
(Cambridge University Press, 2004) or watch Richard Brown’s series of video lectures.
```
5 The objective function is convex, and the inequality constraints are continuously differentiable and convex functions.
6 As explained in Chapter 4, the dot product of two vectors a and b is normally noted a · b. However, in Machine Learning, vectors are frequently
```
represented as column vectors (i.e., single-column matrices), so the dot product is achieved by computing a b. To remain consistent with the rest of
```
the book, we will use this notation here, ignoring the fact that this technically results in a single-cell matrix rather than a scalar value.
7 Gert Cauwenberghs and Tomaso Poggio, “Incremental and Decremental Support Vector Machine Learning,” Proceedings of the 13th
```
International Conference on Neural Information Processing Systems (2000): 388–394.
```
```
8 Antoine Bordes et al., “Fast Kernel Classifiers with Online and Active Learning,” Journal of Machine Learning Research 6 (2005): 1579–1619.
```
⊺
Chapter 6. Decision Trees
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the author’s raw
and unedited content as they write—so you can take advantage of these
technologies long before the official release of these titles.
This will be the 6th chapter of the final book. Notebooks are available on GitHub
at https://github.com/ageron/handson-ml3. Datasets are available at
```
https://github.com/ageron/data.
```
If you have comments about how we might improve the content and/or examples
in this book, or if you notice missing material within this chapter, please reach out
to the editoor at ntache@oreilly.com.
Decision Trees are versatile Machine Learning algorithms that can perform both
classification and regression tasks, and even multioutput tasks. They are powerful
algorithms, capable of fitting complex datasets. For example, in Chapter 2 you trained
a DecisionTreeRegressor model on the California housing dataset, fitting it
```
perfectly (actually, overfitting it).
```
```
Decision Trees are also the fundamental components of Random Forests (see
```
```
Chapter 7), which are among the most powerful Machine Learning algorithms
```
available today.
In this chapter we will start by discussing how to train, visualize, and make predictions
with Decision Trees. Then we will go through the CART training algorithm used by
Scikit-Learn, and we will discuss how to regularize trees and use them for regression
tasks. Finally, we will discuss some of the limitations of Decision Trees.
Training and Visualizing a Decision Tree
To understand Decision Trees, let’s build one and take a look at how it makes
predictions. The following code trains a DecisionTreeClassifier on the iris
```
dataset (see Chapter 4):
```
from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
```
iris = load_iris(as_frame=True)
```
```
X_iris = iris.data[["petal length (cm)", "petal width (cm)"]].values
```
```
y_iris = iris.target
```
```
tree_clf = DecisionTreeClassifier(max_depth=2, random_state=42)
```
```
tree_clf.fit(X_iris, y_iris)
```
```
You can visualize the trained Decision Tree by first using the export_graphviz()
```
method to output a graph definition file called iris_tree.dot:
from sklearn.tree import export_graphviz
```
export_graphviz(
```
tree_clf,
```
out_file="iris_tree.dot",
```
```
feature_names=["petal length (cm)", "petal width (cm)"],
```
```
class_names=iris.target_names,
```
```
rounded=True,
```
```
filled=True
```
```
)
```
```
Then you can use graphviz.Source.from_file() to load and display the file
```
in a Jupyter notebook:
from graphviz import Source
```
Source.from_file("iris_tree.dot")
```
Graphviz is an open source graph visualization software package. It also includes a
dot command-line tool to convert .dot files to a variety of formats, such as PDF or
PNG.
Your first Decision Tree looks like Figure 6-1.
Figure 6-1. Iris Decision Tree
Making Predictions
Let’s see how the tree represented in Figure 6-1 makes predictions. Suppose you find
an iris plant and you want to classify it based on its petals. You start at the root node
```
(depth 0, at the top): this node asks whether the flower’s petal length is smaller than
```
```
2.45 cm. If it is, then you move down to the root’s left child node (depth 1, left). In this
```
```
case, it is a leaf node (i.e., it does not have any child nodes), so it does not ask any
```
```
questions: simply look at the predicted class for that node, and the Decision Tree
```
```
predicts that your flower is an Iris setosa (class=setosa).
```
Now suppose you find another flower, and this time the petal length is greater than
```
2.45 cm. You must move down to the root’s right child node (depth 1, right), which is
```
not a leaf node, it’s a split node, so it asks another question: is the petal width smaller
```
than 1.75 cm? If it is, then your flower is most likely an Iris versicolor (depth 2, left).
```
```
If not, it is likely an Iris virginica (depth 2, right). It’s really that simple.
```
NOTE
One of the many qualities of Decision Trees is that they require very little data preparation. In fact,
they don’t require feature scaling or centering at all.
A node’s samples attribute counts how many training instances it applies to. For
```
example, 100 training instances have a petal length greater than 2.45 cm (depth 1,
```
```
right), and of those 100, 54 have a petal width smaller than 1.75 cm (depth 2, left). A
```
node’s value attribute tells you how many training instances of each class this node
applies to: for example, the bottom-right node applies to 0 Iris setosa, 1 Iris versicolor,
and 45 Iris virginica. Finally, a node’s gini attribute measures its Gini impurity: a
```
node is “pure” (gini=0) if all training instances it applies to belong to the same class.
```
For example, since the depth-1 left node applies only to Iris setosa training instances,
it is pure and its Gini impurity is 0. Equation 6-1 shows how the training algorithm
computes the Gini impurity G of the i node. The depth-2 left node has a Gini
```
impurity equal to 1 – (0/54) – (49/54) – (5/54) ≈ 0.168.
```
Equation 6-1. Gini impurity
```
Gi = 1 −
```
n
∑
```
k=1
```
pi,k 2
In this equation:
G is the Gini impurity of the i node.
i th
2 2 2
i th
p is the ratio of class k instances among the training instances in the i node.
NOTE
Scikit-Learn uses the CART algorithm, which produces only binary trees, meaning trees where split
```
nodes always have exactly two children (i.e., questions only have yes/no answers). However, other
```
algorithms such as ID3 can produce Decision Trees with nodes that have more than two children.
Figure 6-2 shows this Decision Tree’s decision boundaries. The thick vertical line
```
represents the decision boundary of the root node (depth 0): petal length = 2.45 cm.
```
```
Since the lefthand area is pure (only Iris setosa), it cannot be split any further.
```
However, the righthand area is impure, so the depth-1 right node splits it at petal width
```
= 1.75 cm (represented by the dashed line). Since max_depth was set to 2, the
```
Decision Tree stops right there. If you set max_depth to 3, then the two depth-2
```
nodes would each add another decision boundary (represented by the two vertical
```
```
dotted lines).
```
i,k th
Figure 6-2. Decision Tree decision boundaries
MODEL INTERPRETATION: WHITE BOX VERSUS BLACK BOX
Decision Trees are intuitive, and their decisions are easy to interpret. Such models
are often called white box models. In contrast, as we will see, Random Forests or
neural networks are generally considered black box models. They make great
predictions, and you can easily check the calculations that they performed to make
```
these predictions; nevertheless, it is usually hard to explain in simple terms why
```
the predictions were made. For example, if a neural network says that a particular
person appears on a picture, it is hard to know what contributed to this prediction:
did the model recognize that person’s eyes? Their mouth? Their nose? Their shoes?
Or even the couch that they were sitting on? Conversely, Decision Trees provide
```
nice, simple classification rules that can even be applied manually if need be (e.g.,
```
```
for flower classification). The field of Interpretable ML aims at creating ML
```
systems that can explain their decisions in a way humans can understand. This is
important in many domains, for example to ensure the system does not make unfair
decisions.
TIP
The tree structure, including all the information shown in Figure 6-1, is available via the classifier’s
```
tree_ attribute. Type help(tree_clf.tree_) for details, and see the notebook for an example.
```
Estimating Class Probabilities
A Decision Tree can also estimate the probability that an instance belongs to a
particular class k. First it traverses the tree to find the leaf node for this instance, and
then it returns the ratio of training instances of class k in this node. For example,
suppose you have found a flower whose petals are 5 cm long and 1.5 cm wide. The
corresponding leaf node is the depth-2 left node, so the Decision Tree outputs the
```
following probabilities: 0% for Iris setosa (0/54), 90.7% for Iris versicolor (49/54),
```
```
and 9.3% for Iris virginica (5/54). And if you ask it to predict the class, it outputs Iris
```
```
versicolor (class 1) because it has the highest probability. Let’s check this:
```
```
>>> tree_clf.predict_proba([[5, 1.5]]).round(3)
```
```
array([[0. , 0.907, 0.093]])
```
```
>>> tree_clf.predict([[5, 1.5]])
```
```
array([1])
```
Perfect! Notice that the estimated probabilities would be identical anywhere else in the
bottom-right rectangle of Figure 6-2—for example, if the petals were 6 cm long and
```
1.5 cm wide (even though it seems obvious that it would most likely be an Iris
```
```
virginica in this case).
```
The CART Training Algorithm
```
Scikit-Learn uses the Classification and Regression Tree (CART) algorithm to train
```
```
Decision Trees (also called “growing” trees). The algorithm works by first splitting the
```
```
training set into two subsets using a single feature k and a threshold t (e.g., “petal
```
```
length ≤ 2.45 cm”). How does it choose k and t ? It searches for the pair (k, t ) that
```
produces the purest subsets, weighted by their size. Equation 6-2 gives the cost
```
function that the algorithm tries to minimize.
```
Equation 6-2. CART cost function for classification
Once the CART algorithm has successfully split the training set in two, it splits the
subsets using the same logic, then the sub-subsets, and so on, recursively. It stops
```
recursing once it reaches the maximum depth (defined by the max_depth
```
```
hyperparameter), or if it cannot find a split that will reduce impurity. A few other
```
```
hyperparameters (described in a moment) control additional stopping conditions:
```
min_samples_split, min_samples_leaf,
min_weight_fraction_leaf, and max_leaf_nodes.
WARNING
As you can see, the CART algorithm is a greedy algorithm: it greedily searches for an optimum split at
the top level, then repeats the process at each subsequent level. It does not check whether or not the
split will lead to the lowest possible impurity several levels down. A greedy algorithm often produces a
solution that’s reasonably good but not guaranteed to be optimal.
Unfortunately, finding the optimal tree is known to be an NP-Complete problem. It requires
```
ݓ xp(m)) time, making the problem intractable even for small training sets. This is why we must
```
settle for a “reasonably good” solution when training decision trees.
k
k k
```
J (k, tk) =
```
mleft
m
Gleft +
mright
m
Gright
```
where {
```
Gleft/right measures the impurity of the left/right subset,
mleft/right is the number of instances in the left/right subset.
1
Computational Complexity
Making predictions requires traversing the Decision Tree from the root to a leaf.
Decision Trees generally are approximately balanced, so traversing the Decision Tree
```
requires going through roughly ݓ og (m)) nodes, where log (m) is the binary
```
```
logarithm of m, equal to log(m) / log(2). Since each node only requires checking the
```
```
value of one feature, the overall prediction complexity is ݓ og (m)), independent of
```
the number of features. So predictions are very fast, even when dealing with large
training sets.
```
The training algorithm compares all features (or less if max_features is set) on all
```
samples at each node. Comparing all features on all samples at each node results in a
```
training complexity of ݓ n_ × m log (m)).
```
Gini Impurity or Entropy?
By default, the DecisionTreeClassifier class uses the Gini impurity measure,
but you can select the entropy impurity measure instead by setting the criterion
hyperparameter to "entropy". The concept of entropy originated in
thermodynamics as a measure of molecular disorder: entropy approaches zero when
molecules are still and well ordered. Entropy later spread to a wide variety of domains,
including in Shannon’s information theory, where it measures the average information
content of a message, as we saw in Chapter 4. Entropy is zero when all messages are
identical. In Machine Learning, entropy is frequently used as an impurity measure: a
set’s entropy is zero when it contains instances of only one class. Equation 6-3 shows
the definition of the entropy of the i node. For example, the depth-2 left node in
```
Figure 6-1 has an entropy equal to –(49/54) log (49/54) – (5/54) log (5/54) ≈ 0.445.
```
Equation 6-3. Entropy
```
Hi = −
```
n
∑
```
k=1
```
pi,k≠0
```
pi,k log2 (pi,k)
```
So, should you use Gini impurity or entropy? The truth is, most of the time it does not
make a big difference: they lead to similar trees. Gini impurity is slightly faster to
compute, so it is a good default. However, when they differ, Gini impurity tends to
isolate the most frequent class in its own branch of the tree, while entropy tends to
produce slightly more balanced trees.
2 2
2
2
th
2 2
2
Regularization Hyperparameters
```
Decision Trees make very few assumptions about the training data (as opposed to
```
```
linear models, which assume that the data is linear, for example). If left unconstrained,
```
the tree structure will adapt itself to the training data, fitting it very closely—indeed,
most likely overfitting it. Such a model is often called a nonparametric model, not
```
because it does not have any parameters (it often has a lot) but because the number of
```
parameters is not determined prior to training, so the model structure is free to stick
closely to the data. In contrast, a parametric model, such as a linear model, has a
predetermined number of parameters, so its degree of freedom is limited, reducing the
```
risk of overfitting (but increasing the risk of underfitting).
```
To avoid overfitting the training data, you need to restrict the Decision Tree’s freedom
during training. As you know by now, this is called regularization. The regularization
hyperparameters depend on the algorithm used, but generally you can at least restrict
the maximum depth of the Decision Tree. In Scikit-Learn, this is controlled by the
max_depth hyperparameter. The default value is None, which means unlimited.
Reducing max_depth will regularize the model and thus reduce the risk of
overfitting.
The DecisionTreeClassifier class has a few other parameters that similarly
restrict the shape of the Decision Tree:
```
max_features: maximum number of features that are evaluated for
```
splitting at each node
```
max_leaf_nodes: maximum number of leaf nodes
```
```
min_samples_split: minimum number of samples a node must have
```
before it can be split
```
min_samples_leaf: minimum number of samples a leaf node must have
```
to be created
```
min_weight_fraction_leaf: same as min_samples_leaf but
```
expressed as a fraction of the total number of weighted instances
Increasing min_* hyperparameters or reducing max_* hyperparameters will
regularize the model.
NOTE
```
Other algorithms work by first training the Decision Tree without restrictions, then pruning (deleting)
```
unnecessary nodes. A node whose children are all leaf nodes is considered unnecessary if the purity
```
improvement it provides is not statistically significant. Standard statistical tests, such as the χ test (chi-
```
```
squared test), are used to estimate the probability that the improvement is purely the result of chance
```
```
(which is called the null hypothesis). If this probability, called the p-value, is higher than a given
```
```
threshold (typically 5%, controlled by a hyperparameter), then the node is considered unnecessary and
```
its children are deleted. The pruning continues until all unnecessary nodes have been pruned.
Let’s test regularization on the moons dataset, introduced in Chapter 5. We’ll train one
decision tree without regularization, and another with min_samples_leaf=5.
Figure 6-3 shows the decision boundaries of each tree.
from sklearn.datasets import make_moons
```
X_moons, y_moons = make_moons(n_samples=150, noise=0.2, random_state=42)
```
```
tree_clf1 = DecisionTreeClassifier(random_state=42)
```
```
tree_clf2 = DecisionTreeClassifier(min_samples_leaf=5, random_state=42)
```
```
tree_clf1.fit(X_moons, y_moons)
```
```
tree_clf2.fit(X_moons, y_moons)
```
2
```
Figure 6-3. Decision boundaries of an unregularized tree (left) and a regularized tree (right)
```
The unregularized model on the left is clearly overfitting, and the regularized model on
the right will probably generalize better. We can verify this by evaluating both trees on
a test set generated using a different random seed:
```
>>> X_moons_test, y_moons_test = make_moons(n_samples=1000, noise=0.2,
```
```
... random_state=43)
```
...
```
>>> tree_clf1.score(X_moons_test, y_moons_test)
```
0.898
```
>>> tree_clf2.score(X_moons_test, y_moons_test)
```
0.92
Indeed, the second tree has a better accuracy on the test set.
Regression
Decision Trees are also capable of performing regression tasks. Let’s build a regression
tree using Scikit-Learn’s DecisionTreeRegressor class, training it on a noisy
quadratic dataset with max_depth=2:
import numpy as np
from sklearn.tree import DecisionTreeRegressor
```
np.random.seed(42)
```
```
X_quad = np.random.rand(200, 1) - 0.5 # a single random input feature
```
```
y_quad = X_quad ** 2 + 0.025 * np.random.randn(200, 1)
```
```
tree_reg = DecisionTreeRegressor(max_depth=2, random_state=42)
```
```
tree_reg.fit(X_quad, y_quad)
```
The resulting tree is represented in Figure 6-4.
Figure 6-4. A Decision Tree for regression
This tree looks very similar to the classification tree you built earlier. The main
difference is that instead of predicting a class in each node, it predicts a value. For
example, suppose you want to make a prediction for a new instance with x = 0.2. The
root node asks whether x ≤ 0.197. Since it is not, the algorithm goes to the right child
node, which asks whether x ≤ 0.772. Since it is, the algorithm goes to the left child
node. This is a leaf node, and it predicts value=0.111. This prediction is the
average target value of the 110 training instances associated with this leaf node, and it
results in a mean squared error equal to 0.015 over these 110 instances.
This model’s predictions are represented on the left in Figure 6-5. If you set
```
max_depth=3, you get the predictions represented on the right. Notice how the
```
predicted value for each region is always the average target value of the instances in
that region. The algorithm splits each region in a way that makes most training
instances as close as possible to that predicted value.
1
1
1
Figure 6-5. Predictions of two Decision Tree regression models
The CART algorithm works mostly the same way as earlier, except that instead of
trying to split the training set in a way that minimizes impurity, it now tries to split the
training set in a way that minimizes the MSE. Equation 6-4 shows the cost function
that the algorithm tries to minimize.
Equation 6-4. CART cost function for regression
```
J (k, tk) =
```
mleft
m
MSEleft +
mright
m
MSEright where
Just like for classification tasks, Decision Trees are prone to overfitting when dealing
```
with regression tasks. Without any regularization (i.e., using the default
```
```
hyperparameters), you get the predictions on the left in Figure 6-6. These predictions
```
are obviously overfitting the training set very badly. Just setting
```
min_samples_leaf=10 results in a much more reasonable model, represented on
```
the right in Figure 6-6.
⎧
⎪
⎨
⎪
```
MSEnode = ∑i∈node (ˆynode−y
```
```
(i))2
```
mnode
ˆynode = ∑i∈node y
```
(i)
```
mnode
```
Figure 6-6. Predictions of an unregularized regression tree (left) and a regularized tree (right)
```
Sensitivity to axis orientation
Hopefully by now you are convinced that Decision Trees have a lot going for them:
they are relatively easy to understand and interpret, simple to use, versatile, and
powerful. However, they do have a few limitations. First, as you may have noticed,
```
Decision Trees love orthogonal decision boundaries (all splits are perpendicular to an
```
```
axis), which makes them sensitive to the data’s orientation. For example, Figure 6-7
```
shows a simple linearly separable dataset: on the left, a Decision Tree can split it
easily, while on the right, after the dataset is rotated by 45°, the decision boundary
looks unnecessarily convoluted. Although both Decision Trees fit the training set
perfectly, it is very likely that the model on the right will not generalize well.
Figure 6-7. Sensitivity to training set rotation
One way to limit this problem is to scale the data then apply a Principal Component
Analysis tranformation. We will look at PCA in detail in Chapter 8, but for now you
only need to know that it rotates the data in a way that reduces the correlation between
```
the features, which often (not always) makes things easier for trees. Let’s create a
```
small pipeline that scales the data and rotates it using PCA, then let’s train a
DecisionTreeClassifier on that data. Figure 6-8 shows the decision
boundaries of that tree: as you can see, the rotation makes it possible to fit the dataset
pretty well using only one feature, z , which is a linear function of the original petal
length and width.
from sklearn.decomposition import PCA
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
```
pca_pipeline = make_pipeline(StandardScaler(), PCA())
```
```
X_iris_rotated = pca_pipeline.fit_transform(X_iris)
```
```
tree_clf_pca = DecisionTreeClassifier(max_depth=2, random_state=42)
```
```
tree_clf_pca.fit(X_iris_rotated, y_iris)
```
1
Figure 6-8. A tree’s decision boundaries on the scaled and PCA-rotated iris dataset
Decision Trees have a high variance
More generally, the main issue with Decision Trees is that they have quite a high
```
variance: small changes to the hyperparameters or to the data may produce very
```
different models. In fact, since the training algorithm used by Scikit-Learn is stochastic
—it randomly selects the set of features to evaluate at each node—even retraining the
same Decision Tree on the exact same data may produce a very different model, such
```
as the one represented in Figure 6-9 (unless you set the random_state
```
```
hyperparameter). As you can see, it looks very different from the previous Decision
```
```
Tree (Figure 6-2).
```
Figure 6-9. Retraining the same model on the same data may produce a very different model
Luckily, by averaging predictions over many trees, it’s possible to reduce variance
significantly. Such an ensemble of trees is called a Random Forest, and it’s one of the
most powerful types of models available today, as we will see in the next chapter.
Exercises
1. What is the approximate depth of a Decision Tree trained (without
```
restrictions) on a training set with one million instances?
```
2. Is a node’s Gini impurity generally lower or greater than its parent’s? Is it
generally lower/greater, or always lower/greater?
3. If a Decision Tree is overfitting the training set, is it a good idea to try
decreasing max_depth?
4. If a Decision Tree is underfitting the training set, is it a good idea to try
scaling the input features?
5. If it takes one hour to train a Decision Tree on a training set containing 1
million instances, roughly how much time will it take to train another
Decision Tree on a training set containing 10 million instances? Hint: consider
the CART algorithm’s computational complexity.
6. If it takes one hour to train a Decision Tree on a given training set, roughly
how much time will it take if you double the number of features?
7. Train and fine-tune a Decision Tree for the moons dataset by following these
```
steps:
```
a. Use make_moons(n_samples=10000, noise=0.4) to
generate a moons dataset.
b. Use train_test_split() to split the dataset into a training set
and a test set.
c. Use grid search with cross-validation (with the help of the
```
GridSearchCV class) to find good hyperparameter values for a
```
DecisionTreeClassifier. Hint: try various values for
max_leaf_nodes.
d. Train it on the full training set using these hyperparameters, and
measure your model’s performance on the test set. You should get
roughly 85% to 87% accuracy.
8. Grow a forest by following these steps:
a. Continuing the previous exercise, generate 1,000 subsets of the
training set, each containing 100 instances selected randomly. Hint:
you can use Scikit-Learn’s ShuffleSplit class for this.
b. Train one Decision Tree on each subset, using the best
hyperparameter values found in the previous exercise. Evaluate these
1,000 Decision Trees on the test set. Since they were trained on
smaller sets, these Decision Trees will likely perform worse than the
first Decision Tree, achieving only about 80% accuracy.
c. Now comes the magic. For each test set instance, generate the
predictions of the 1,000 Decision Trees, and keep only the most
```
frequent prediction (you can use SciPy’s mode() function for this).
```
This approach gives you majority-vote predictions over the test set.
d. Evaluate these predictions on the test set: you should obtain a slightly
```
higher accuracy than your first model (about 0.5 to 1.5% higher).
```
Congratulations, you have trained a Random Forest classifier!
Solutions to these exercises are available at the end of this chapter’s notebook, at
```
https://homl.info/colab3.
```
```
1 P is the set of problems that can be solved in polynomial time (i.e., a polynomial of the dataset size). NP is
```
the set of problems whose solutions can be verified in polynomial time. An NP-Hard problem is a problem
that can be reduced to a known NP-Hard problem in polynomial time. An NP-Complete problem is both NP
```
and NP-Hard. A major open mathematical question is whether or not P = NP. If P ≠ NP (which seems likely),
```
```
then no polynomial algorithm will ever be found for any NP-Complete problem (except perhaps one day on a
```
```
quantum computer).
```
2 See Sebastian Raschka’s interesting analysis for more details.
Chapter 7. Ensemble Learning and
Random Forests
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the author’s raw
and unedited content as they write—so you can take advantage of these
technologies long before the official release of these titles.
This will be the 7th chapter of the final book. Notebooks are available on GitHub at
```
https://github.com/ageron/handson-ml3. Datasets are available at
```
```
https://github.com/ageron/data.
```
If you have comments about how we might improve the content and/or examples in
this book, or if you notice missing material within this chapter, please reach out to
the editoor at ntache@oreilly.com.
Suppose you pose a complex question to thousands of random people, then aggregate
their answers. In many cases you will find that this aggregated answer is better than an
expert’s answer. This is called the wisdom of the crowd. Similarly, if you aggregate the
```
predictions of a group of predictors (such as classifiers or regressors), you will often get
```
better predictions than with the best individual predictor. A group of predictors is called
```
an ensemble; thus, this technique is called Ensemble Learning, and an Ensemble
```
Learning algorithm is called an Ensemble method.
As an example of an Ensemble method, you can train a group of Decision Tree
classifiers, each on a different random subset of the training set. To make predictions,
you obtain the predictions of all the individual trees, then predict the class that gets the
```
most votes (see the last exercise in Chapter 6). Such an ensemble of Decision Trees is
```
called a Random Forest, and despite its simplicity, this is one of the most powerful
Machine Learning algorithms available today.
As discussed in Chapter 2, you will often use Ensemble methods near the end of a
project, once you have already built a few good predictors, to combine them into an
even better predictor. In fact, the winning solutions in Machine Learning competitions
often involve several Ensemble methods—most famously in the Netflix Prize
competition.
In this chapter we will discuss the most popular Ensemble methods, including bagging,
boosting, and stacking. We will also explore Random Forests.
Voting Classifiers
Suppose you have trained a few classifiers, each one achieving about 80% accuracy.
You may have a Logistic Regression classifier, an SVM classifier, a Random Forest
```
classifier, a K-Nearest Neighbors classifier, and perhaps a few more (see Figure 7-1).
```
Figure 7-1. Training diverse classifiers
A very simple way to create an even better classifier is to aggregate the predictions of
each classifier and predict the class that gets the most votes. This majority-vote
```
classifier is called a hard voting classifier (see Figure 7-2).
```
Figure 7-2. Hard voting classifier predictions
Somewhat surprisingly, this voting classifier often achieves a higher accuracy than the
```
best classifier in the ensemble. In fact, even if each classifier is a weak learner (meaning
```
```
it does only slightly better than random guessing), the ensemble can still be a strong
```
```
learner (achieving high accuracy), provided there are a sufficient number of weak
```
learners and they are sufficiently diverse.
How is this possible? The following analogy can help shed some light on this mystery.
Suppose you have a slightly biased coin that has a 51% chance of coming up heads and
49% chance of coming up tails. If you toss it 1,000 times, you will generally get more
or less 510 heads and 490 tails, and hence a majority of heads. If you do the math, you
will find that the probability of obtaining a majority of heads after 1,000 tosses is close
```
to 75%. The more you toss the coin, the higher the probability (e.g., with 10,000 tosses,
```
```
the probability climbs over 97%). This is due to the law of large numbers: as you keep
```
tossing the coin, the ratio of heads gets closer and closer to the probability of heads
```
(51%). Figure 7-3 shows 10 series of biased coin tosses. You can see that as the number
```
of tosses increases, the ratio of heads approaches 51%. Eventually all 10 series end up
so close to 51% that they are consistently above 50%.
Figure 7-3. The law of large numbers
Similarly, suppose you build an ensemble containing 1,000 classifiers that are
```
individually correct only 51% of the time (barely better than random guessing). If you
```
predict the majority voted class, you can hope for up to 75% accuracy! However, this is
only true if all classifiers are perfectly independent, making uncorrelated errors, which
is clearly not the case because they are trained on the same data. They are likely to make
the same types of errors, so there will be many majority votes for the wrong class,
reducing the ensemble’s accuracy.
TIP
Ensemble methods work best when the predictors are as independent from one another as possible. One
way to get diverse classifiers is to train them using very different algorithms. This increases the chance
that they will make very different types of errors, improving the ensemble’s accuracy.
Scikit-Learn provides a VotingClassifier class that’s quite easy to use: just give
it a list of name/predictor pairs, and use it like a normal classifier, that’s it! Let’s try it
```
on the moons dataset (introduced in Chapter 6): we will load and split the moons dataset
```
into a training set and a test set, then we’ll create and train a voting classifier composed
of three diverse classifiers:
from sklearn.datasets import make_moons
from sklearn.ensemble import RandomForestClassifier, VotingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
```
X, y = make_moons(n_samples=500, noise=0.30, random_state=42)
```
```
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)
```
```
voting_clf = VotingClassifier(
```
```
estimators=[
```
```
('lr', LogisticRegression(random_state=42)),
```
```
('rf', RandomForestClassifier(random_state=42)),
```
```
('svc', SVC(random_state=42))
```
]
```
)
```
```
voting_clf.fit(X_train, y_train)
```
When you fit a VotingClassifier, it clones every estimator and fits the clones.
The original estimators are available via the estimators attribute, while the fitted
clones are available via the estimators_ attribute. If you prefer a dict rather than a
list, you can use named_estimators or named_estimators_ instead. For
example, let’s look at each fitted classifier’s accuracy on the test set:
```
>>> for name, clf in voting_clf.named_estimators_.items():
```
```
... print(name, "=", clf.score(X_test, y_test))
```
...
```
lr = 0.864
```
```
rf = 0.896
```
```
svc = 0.896
```
```
When you call the voting classifier’s predict() method, it performs hard voting. For
```
example, the voting classifier predicts class 1 for the first instance of the test set,
because 2 out of 3 classifiers predict that class:
```
>>> voting_clf.predict(X_test[:1])
```
```
array([1])
```
```
>>> [clf.predict(X_test[:1]) for clf in voting_clf.estimators_]
```
```
[array([1]), array([1]), array([0])]
```
Now let’s look at the performance of the voting classifier on the test set:
```
>>> voting_clf.score(X_test, y_test)
```
0.912
There you have it! The voting classifier outperforms all the individual classifiers.
```
If all classifiers are able to estimate class probabilities (i.e., they all have a
```
```
predict_proba() method), then you can tell Scikit-Learn to predict the class with
```
the highest class probability, averaged over all the individual classifiers. This is called
soft voting. It often achieves higher performance than hard voting because it gives more
weight to highly confident votes. All you need to do is set the voting classifier’s
voting hyperparameter to "soft", and ensure that all classifiers can estimate class
probabilities. This is not the case for the SVC class by default, so you need to set its
```
probability hyperparameter to True (this will make the SVC class use cross-
```
validation to estimate class probabilities, slowing down training, and it will add a
```
predict_proba() method). Let’s try that:
```
>>> voting_clf.voting = "soft"
>>> voting_clf.named_estimators["svc"].probability = True
```
>>> voting_clf.fit(X_train, y_train)
```
```
>>> voting_clf.score(X_test, y_test)
```
0.92
We reach 92% accuracy simply by using soft voting, not bad!
Bagging and Pasting
One way to get a diverse set of classifiers is to use very different training algorithms, as
just discussed. Another approach is to use the same training algorithm for every
predictor but train them on different random subsets of the training set. When sampling
```
is performed with replacement, this method is called bagging (short for bootstrap
```
```
aggregating ). When sampling is performed without replacement, it is called pasting.
```
In other words, both bagging and pasting allow training instances to be sampled several
times across multiple predictors, but only bagging allows training instances to be
sampled several times for the same predictor. This sampling and training process is
represented in Figure 7-4.
Figure 7-4. Bagging and pasting involve training several predictors on different random samples of the training set
Once all predictors are trained, the ensemble can make a prediction for a new instance
by simply aggregating the predictions of all predictors. The aggregation function is
1
2 3
```
typically the statistical mode for classification (i.e., the most frequent prediction, just
```
```
like a hard voting classifier), or the average for regression. Each individual predictor has
```
a higher bias than if it were trained on the original training set, but aggregation reduces
both bias and variance. Generally, the net result is that the ensemble has a similar bias
but a lower variance than a single predictor trained on the original training set.
As you can see in Figure 7-4, predictors can all be trained in parallel, via different CPU
cores or even different servers. Similarly, predictions can be made in parallel. This is
one of the reasons bagging and pasting are such popular methods: they scale very well.
Bagging and Pasting in Scikit-Learn
Scikit-Learn offers a simple API for both bagging and pasting with the
```
BaggingClassifier class (or BaggingRegressor for regression). The
```
following code trains an ensemble of 500 Decision Tree classifiers: each is trained on
```
100 training instances randomly sampled from the training set with replacement (this is
```
an example of bagging, but if you want to use pasting instead, just set
```
bootstrap=False). The n_jobs parameter tells Scikit-Learn the number of CPU
```
cores to use for training and predictions, and –1 tells Scikit-Learn to use all available
cores.
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier
```
bag_clf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=500,
```
```
max_samples=100, random_state=42)
```
```
bag_clf.fit(X_train, y_train)
```
NOTE
The BaggingClassifier automatically performs soft voting instead of hard voting if the base
```
classifier can estimate class probabilities (i.e., if it has a predict_proba() method), which is the
```
case with Decision Tree classifiers.
Figure 7-5 compares the decision boundary of a single Decision Tree with the decision
```
boundary of a bagging ensemble of 500 trees (from the preceding code), both trained on
```
the moons dataset. As you can see, the ensemble’s predictions will likely generalize
much better than the single Decision Tree’s predictions: the ensemble has a comparable
```
bias but a smaller variance (it makes roughly the same number of errors on the training
```
```
set, but the decision boundary is less irregular).
```
4
5
```
Figure 7-5. A single Decision Tree (left) versus a bagging ensemble of 500 trees (right)
```
Bootstrapping introduces a bit more diversity in the subsets that each predictor is trained
```
on, so bagging ends up with a slightly higher bias than pasting; but the extra diversity
```
also means that the predictors end up being less correlated, so the ensemble’s variance is
reduced. Overall, bagging often results in better models, which explains why it is
generally preferred. However, if you have spare time and CPU power, you can use
cross-validation to evaluate both bagging and pasting and select the one that works best.
Out-of-Bag Evaluation
With bagging, some instances may be sampled several times for any given predictor,
while others may not be sampled at all. By default a BaggingClassifier samples
```
m training instances with replacement (bootstrap=True), where m is the size of the
```
training set. With this process, it can be shown mathematically that only about 63% of
the training instances are sampled on average for each predictor. The remaining 37% of
```
the training instances that are not sampled are called out-of-bag (oob) instances. Note
```
that they are not the same 37% for all predictors.
A bagging ensemble can be evaluated using oob instances, without the need for a
separate validation set: indeed, if there are enough estimators, then each instance in the
training set will likely be an oob instance of several estimators, so these estimators can
be used to make a fair ensemble prediction for that instance. Once you have a prediction
```
for each instance, you can compute the ensemble’s prediction accuracy (or any other
```
```
metric).
```
In Scikit-Learn, you can set oob_score=True when creating a
BaggingClassifier to request an automatic oob evaluation after training. The
following code demonstrates this. The resulting evaluation score is available in the
oob_score_ attribute:
```
>>> bag_clf = BaggingClassifier(DecisionTreeClassifier(), n_estimators=500,
```
```
... oob_score=True, random_state=42)
```
...
```
>>> bag_clf.fit(X_train, y_train)
```
>>> bag_clf.oob_score_
0.896
According to this oob evaluation, this BaggingClassifier is likely to achieve
about 89.6% accuracy on the test set. Let’s verify this:
>>> from sklearn.metrics import accuracy_score
```
>>> y_pred = bag_clf.predict(X_test)
```
```
>>> accuracy_score(y_test, y_pred)
```
0.92
We get 92% accuracy on the test. The oob evaluation was a bit too pessimistic, a bit
over 2% too low.
6
The oob decision function for each training instance is also available through the
oob_decision_function_ attribute. Since the base estimator has a
```
predict_proba() method, the decision function returns the class probabilities for
```
each training instance. For example, the oob evaluation estimates that the first training
instance has a 67.6% probability of belonging to the positive class, and 32.4% of
belonging to the negative class:
>>> bag_clf.oob_decision_function_[:3] # probas for the first 3 instances
```
array([[0.32352941, 0.67647059],
```
[0.3375 , 0.6625 ],
```
[1. , 0. ]])
```
Random Patches and Random Subspaces
The BaggingClassifier class supports sampling the features as well. Sampling is
controlled by two hyperparameters: max_features and bootstrap_features.
They work the same way as max_samples and bootstrap, but for feature
sampling instead of instance sampling. Thus, each predictor will be trained on a random
subset of the input features.
This technique is particularly useful when you are dealing with high-dimensional inputs
```
(such as images). Sampling both training instances and features is called the Random
```
```
Patches method. Keeping all training instances (by setting bootstrap=False and
```
```
max_samples=1.0) but sampling features (by setting bootstrap_features to
```
```
True and/or max_features to a value smaller than 1.0) is called the Random
```
Subspaces method.
Sampling features results in even more predictor diversity, trading a bit more bias for a
lower variance.
Random Forests
As we have discussed, a Random Forest is an ensemble of Decision Trees, generally
```
trained via the bagging method (or sometimes pasting), typically with max_samples
```
set to the size of the training set. Instead of building a BaggingClassifier and
passing it a DecisionTreeClassifier, you can use the
RandomForestClassifier class, which is more convenient and optimized for
```
Decision Trees (similarly, there is a RandomForestRegressor class for
```
```
regression tasks). The following code trains a Random Forest classifier with 500 trees,
```
each limited to maximum 16 nodes, and using all available CPU cores:
7
8
9
10
from sklearn.ensemble import RandomForestClassifier
```
rnd_clf = RandomForestClassifier(n_estimators=500, max_leaf_nodes=16,
```
```
n_jobs=-1, random_state=42)
```
```
rnd_clf.fit(X_train, y_train)
```
```
y_pred_rf = rnd_clf.predict(X_test)
```
With a few exceptions, a RandomForestClassifier has all the hyperparameters
```
of a DecisionTreeClassifier (to control how trees are grown), plus all the
```
hyperparameters of a BaggingClassifier to control the ensemble itself.
```
The Random Forest algorithm introduces extra randomness when growing trees; instead
```
```
of searching for the very best feature when splitting a node (see Chapter 6), it searches
```
for the best feature among a random subset of features. By default, it samples √n
```
features (where n is the total number of features). The algorithm results in greater tree
```
```
diversity, which (again) trades a higher bias for a lower variance, generally yielding an
```
overall better model. So the following BaggingClassifier is equivalent to the
previous RandomForestClassifier:
```
bag_clf = BaggingClassifier(
```
```
DecisionTreeClassifier(max_features="sqrt", max_leaf_nodes=16),
```
```
n_estimators=500, n_jobs=-1, random_state=42)
```
Extra-Trees
When you are growing a tree in a Random Forest, at each node only a random subset of
```
the features is considered for splitting (as discussed earlier). It is possible to make trees
```
even more random by also using random thresholds for each feature rather than
```
searching for the best possible thresholds (like regular Decision Trees do). For this,
```
simply set splitter="random" when creating a DecisionTreeClassifier.
A forest of such extremely random trees is called an Extremely Randomized Trees
```
ensemble (or Extra-Trees for short). Once again, this technique trades more bias for a
```
lower variance. It also makes Extra-Trees much faster to train than regular Random
Forests, because finding the best possible threshold for each feature at every node is one
of the most time-consuming tasks of growing a tree.
You can create an Extra-Trees classifier using Scikit-Learn’s
ExtraTreesClassifier class. Its API is identical to the
RandomForestClassifier class, except bootstrap defaults to False.
Similarly, the ExtraTreesRegressor class has the same API as the
RandomForestRegressor class, except bootstrap defaults to False.
11
TIP
It is hard to tell in advance whether a RandomForestClassifier will perform better or worse than
an ExtraTreesClassifier. Generally, the only way to know is to try both and compare them
using cross-validation.
Feature Importance
Yet another great quality of Random Forests is that they make it easy to measure the
relative importance of each feature. Scikit-Learn measures a feature’s importance by
looking at how much the tree nodes that use that feature reduce impurity on average,
across all trees in the forest. More precisely, it is a weighted average, where each node’s
```
weight is equal to the number of training samples that are associated with it (see
```
```
Chapter 6).
```
Scikit-Learn computes this score automatically for each feature after training, then it
scales the results so that the sum of all importances is equal to 1. You can access the
result using the feature_importances_ variable. For example, the following code
```
trains a RandomForestClassifier on the iris dataset (introduced in Chapter 4)
```
and outputs each feature’s importance. It seems that the most important features are the
```
petal length (44%) and width (42%), while sepal length and width are rather
```
```
unimportant in comparison (11% and 2%, respectively):
```
>>> from sklearn.datasets import load_iris
```
>>> iris = load_iris(as_frame=True)
```
```
>>> rnd_clf = RandomForestClassifier(n_estimators=500, random_state=42)
```
```
>>> rnd_clf.fit(iris.data, iris.target)
```
```
>>> for score, name in zip(rnd_clf.feature_importances_, iris.data.columns):
```
```
... print(round(score, 2), name)
```
...
```
0.11 sepal length (cm)
```
```
0.02 sepal width (cm)
```
```
0.44 petal length (cm)
```
```
0.42 petal width (cm)
```
```
Similarly, if you train a Random Forest classifier on the MNIST dataset (introduced in
```
```
Chapter 3) and plot each pixel’s importance, you get the image represented in Figure 7-
```
6.
```
Figure 7-6. MNIST pixel importance (according to a Random Forest classifier)
```
Random Forests are very handy to get a quick understanding of what features actually
matter, in particular if you need to perform feature selection.
Boosting
```
Boosting (originally called hypothesis boosting) refers to any Ensemble method that can
```
combine several weak learners into a strong learner. The general idea of most boosting
methods is to train predictors sequentially, each trying to correct its predecessor. There
```
are many boosting methods available, but by far the most popular are AdaBoost (short
```
```
for Adaptive Boosting) and Gradient Boosting. Let’s start with AdaBoost.
```
AdaBoost
One way for a new predictor to correct its predecessor is to pay a bit more attention to
the training instances that the predecessor underfitted. This results in new predictors
focusing more and more on the hard cases. This is the technique used by AdaBoost.
For example, when training an AdaBoost classifier, the algorithm first trains a base
```
classifier (such as a Decision Tree) and uses it to make predictions on the training set.
```
The algorithm then increases the relative weight of misclassified training instances.
Then it trains a second classifier, using the updated weights, and again makes
```
predictions on the training set, updates the instance weights, and so on (see Figure 7-7).
```
12
Figure 7-7. AdaBoost sequential training with instance weight updates
Figure 7-8 shows the decision boundaries of five consecutive predictors on the moons
```
dataset (in this example, each predictor is a highly regularized SVM classifier with an
```
```
RBF kernel ). The first classifier gets many instances wrong, so their weights get
```
boosted. The second classifier therefore does a better job on these instances, and so on.
13
The plot on the right represents the same sequence of predictors, except that the learning
```
rate is halved (i.e., the misclassified instance weights are boosted much less at every
```
```
iteration). As you can see, this sequential learning technique has some similarities with
```
Gradient Descent, except that instead of tweaking a single predictor’s parameters to
minimize a cost function, AdaBoost adds predictors to the ensemble, gradually making
it better.
Figure 7-8. Decision boundaries of consecutive predictors
Once all predictors are trained, the ensemble makes predictions very much like bagging
or pasting, except that predictors have different weights depending on their overall
accuracy on the weighted training set.
WARNING
There is one important drawback to this sequential learning technique: training cannot be parallelized
since each predictor can only be trained after the previous predictor has been trained and evaluated. As a
result, it does not scale as well as bagging or pasting.
Let’s take a closer look at the AdaBoost algorithm. Each instance weight w is initially
set to 1/m. A first predictor is trained, and its weighted error rate r is computed on the
```
training set; see Equation 7-1.
```
Equation 7-1. Weighted error rate of the j predictor
```
rj =
```
m
∑
```
i=1
```
```
ˆy(i)j ≠y(i)
```
```
w(i) where ˆy(i)j is the jth predictor’s prediction for the ith instance.
```
The predictor’s weight α is then computed using Equation 7-2, where η is the learning
```
rate hyperparameter (defaults to 1). The more accurate the predictor is, the higher its
```
weight will be. If it is just guessing randomly, then its weight will be close to zero.
```
However, if it is most often wrong (i.e., less accurate than random guessing), then its
```
weight will be negative.
Equation 7-2. Predictor weight
Next, the AdaBoost algorithm updates the instance weights, using Equation 7-3, which
boosts the weights of the misclassified instances.
Equation 7-3. Weight update rule
```
Then all the instance weights are normalized (i.e., divided by ∑mi=1 w(i)).
```
Finally, a new predictor is trained using the updated weights, and the whole process is
```
repeated: the new predictor’s weight is computed, the instance weights are updated, then
```
another predictor is trained, and so on. The algorithm stops when the desired number of
predictors is reached, or when a perfect predictor is found.
```
(i)
```
1
th
j
14
αj = η log
1 − rj
rj
for i = 1, 2, ⋯ , m
```
w(i) ← {
```
```
w(i) if ˆyj(i) = y(i)
```
```
w(i) exp (αj) if ˆyj(i) ≠ y(i)
```
To make predictions, AdaBoost simply computes the predictions of all the predictors
and weighs them using the predictor weights α . The predicted class is the one that
```
receives the majority of weighted votes (see Equation 7-4).
```
Equation 7-4. AdaBoost predictions
```
ˆy (x) =argmax
```
k
N
∑
```
j=1
```
```
ˆyj(x)=k
```
αj where N is the number of predictors.
```
Scikit-Learn uses a multiclass version of AdaBoost called SAMME (which stands for
```
```
Stagewise Additive Modeling using a Multiclass Exponential loss function). When there
```
are just two classes, SAMME is equivalent to AdaBoost. If the predictors can estimate
```
class probabilities (i.e., if they have a predict_proba() method), Scikit-Learn can
```
```
use a variant of SAMME called SAMME.R (the R stands for “Real”), which relies on
```
class probabilities rather than predictions and generally performs better.
The following code trains an AdaBoost classifier based on 30 Decision Stumps using
```
Scikit-Learn’s AdaBoostClassifier class (as you might expect, there is also an
```
```
AdaBoostRegressor class). A Decision Stump is a Decision Tree with
```
```
max_depth=1—in other words, a tree composed of a single decision node plus two
```
leaf nodes. This is the default base estimator for the AdaBoostClassifier class:
from sklearn.ensemble import AdaBoostClassifier
```
ada_clf = AdaBoostClassifier(
```
```
DecisionTreeClassifier(max_depth=1), n_estimators=30,
```
```
learning_rate=0.5, random_state=42)
```
```
ada_clf.fit(X_train, y_train)
```
TIP
If your AdaBoost ensemble is overfitting the training set, you can try reducing the number of estimators
or more strongly regularizing the base estimator.
Gradient Boosting
Another very popular boosting algorithm is Gradient Boosting. Just like AdaBoost,
Gradient Boosting works by sequentially adding predictors to an ensemble, each one
correcting its predecessor. However, instead of tweaking the instance weights at every
iteration like AdaBoost does, this method tries to fit the new predictor to the residual
errors made by the previous predictor.
j
15
16
Let’s go through a simple regression example, using Decision Trees as the base
```
predictors: this is called Gradient Tree Boosting, or Gradient Boosted Regression Trees
```
```
(GBRT). First, let’s generate a noisy quadratic dataset and fit a
```
DecisionTreeRegressor to it:
import numpy as np
from sklearn.tree import DecisionTreeRegressor
```
np.random.seed(42)
```
```
X = np.random.rand(100, 1) - 0.5
```
```
y = 3 * X[:, 0] ** 2 + 0.05 * np.random.randn(100) # y = 3x² + Gaussian
```
noise
```
tree_reg1 = DecisionTreeRegressor(max_depth=2, random_state=42)
```
```
tree_reg1.fit(X, y)
```
Next, we’ll train a second DecisionTreeRegressor on the residual errors made
by the first predictor:
```
y2 = y - tree_reg1.predict(X)
```
```
tree_reg2 = DecisionTreeRegressor(max_depth=2, random_state=43)
```
```
tree_reg2.fit(X, y2)
```
Then we train a third regressor on the residual errors made by the second predictor:
```
y3 = y2 - tree_reg2.predict(X)
```
```
tree_reg3 = DecisionTreeRegressor(max_depth=2, random_state=44)
```
```
tree_reg3.fit(X, y3)
```
Now we have an ensemble containing three trees. It can make predictions on a new
instance simply by adding up the predictions of all the trees:
```
>>> X_new = np.array([[-0.4], [0.], [0.5]])
```
```
>>> sum(tree.predict(X_new) for tree in (tree_reg1, tree_reg2, tree_reg3))
```
```
array([0.49484029, 0.04021166, 0.75026781])
```
Figure 7-9 represents the predictions of these three trees in the left column, and the
ensemble’s predictions in the right column. In the first row, the ensemble has just one
tree, so its predictions are exactly the same as the first tree’s predictions. In the second
row, a new tree is trained on the residual errors of the first tree. On the right you can see
that the ensemble’s predictions are equal to the sum of the predictions of the first two
trees. Similarly, in the third row another tree is trained on the residual errors of the
second tree. You can see that the ensemble’s predictions gradually get better as trees are
added to the ensemble.
```
Figure 7-9. In this depiction of Gradient Boosting, the first predictor (top left) is trained normally, then each
```
```
consecutive predictor (middle left and lower left) is trained on the previous predictor’s residuals; the right column
```
shows the resulting ensemble’s predictions
A simpler way to train GBRT ensembles is to use Scikit-Learn’s
```
GradientBoostingRegressor class (there’s also a
```
```
GradientBoostingClassifier class for classification). Much like the
```
RandomForestRegressor class, it has hyperparameters to control the growth of
```
Decision Trees (e.g., max_depth, min_samples_leaf), as well as
```
hyperparameters to control the ensemble training, such as the number of trees
```
(n_estimators). The following code creates the same ensemble as the previous one:
```
from sklearn.ensemble import GradientBoostingRegressor
```
gbrt = GradientBoostingRegressor(max_depth=2, n_estimators=3,
```
```
learning_rate=1.0, random_state=42)
```
```
gbrt.fit(X, y)
```
The learning_rate hyperparameter scales the contribution of each tree. If you set it
to a low value, such as 0.05, you will need more trees in the ensemble to fit the
training set, but the predictions will usually generalize better. This is a regularization
technique called shrinkage. Figure 7-10 shows two GBRT ensembles trained with
different hyperparameters: the one on the left does not have enough trees to fit the
training set, while the one on the right has about the right amount. If we added more, the
GBRT would start to overfit the training set.
```
Figure 7-10. GBRT ensembles with not enough predictors (left) and just enough (right)
```
To find the optimal number of trees, you could perform cross-validation using
GridSearchCV or RandomizedSearchCV, as usual, but there’s a simpler way: if
you set the n_iter_no_change hyperparameter to an integer value, say 10, then the
GradientBoostingRegressor will automatically stop adding more trees during
training if it sees that the last 10 trees didn’t help. This is simply early stopping
```
(introduced in Chapter 4), but with a little bit of patience: it tolerates having no progress
```
for a few iterations before it stops. Let’s train the ensemble using early stopping:
```
gbrt_best = GradientBoostingRegressor(
```
```
max_depth=2, learning_rate=0.05, n_estimators=500,
```
```
n_iter_no_change=10, random_state=42)
```
```
gbrt_best.fit(X, y)
```
If you set n_iter_no_change too low, training may stop too early and the model
will underfit. But if you set it too high, it will overfit instead. We also set a fairly small
learning rate and a high number of estimators, but the actual number of estimators in the
trained ensemble is much lower, thanks to early stopping:
>>> gbrt_best.n_estimators_
92
```
When n_iter_no_change is set, the fit() method automatically splits the
```
training set into a smaller training set and a validation set: this allows it to evaluate the
model’s performance each time it adds a new tree. The size of the validation set is
controlled by the validation_fraction hyperparameter, which is 10% by default.
The tol hyperparameter determines the maximum performance improvement that still
counts as negligible. It defaults to 0.0001.
The GradientBoostingRegressor class also supports a subsample
hyperparameter, which specifies the fraction of training instances to be used for training
each tree. For example, if subsample=0.25, then each tree is trained on 25% of the
training instances, selected randomly. As you can probably guess by now, this technique
trades a higher bias for a lower variance. It also speeds up training considerably. This is
called Stochastic Gradient Boosting.
Histogram-Based Gradient Boosting
Scikit-Learn also provides another GBRT implementation, optimized for large datasets:
```
Histogram-based Gradient Boosting (HGB). It works by binning the inputs features,
```
replacing them with integers. The number of bins is controlled by the max_bins
hyperparameter, which defaults to 255 and cannot be set any higher than this. Binning
can enormously reduce the number of possible thresholds that the training algorithm
needs to evaluate. Moreover, working with integers makes it possible to use faster and
more memory-efficient data structures. And the way the bins are built removes the need
for sorting the features when training each tree.
```
As a result, this implementation has a computational complexity of ݓ n_×m) instead of
```
```
ݓ n_×m×log(m)), where m is the number of training instances, and n is the number of
```
features. In practice, this means that HGB can train hundreds of times faster than regular
GBRT on large datasets. However, binning causes a precision loss, which acts as a
```
regularizer: depending on the dataset, this may help reduce overfitting, or it may cause
```
underfitting.
Scikit-Learn provides two classes for HGB: HistGradientBoostingRegressor
and HistGradientBoostingClassifier. They have a similar API as
GradientBoostingRegressor and GradientBoostingClassifier, with
a few notable differences:
Early stopping is automatically activated if the number of instances is greater
than 10,000. You can turn early-stopping always on or off by setting the
early_stopping hyperparameter to True or False.
Subsampling is not supported.
n_estimators is renamed to max_iter.
The only Decision Tree hyperparameters that can be tweaked are
max_leaf_nodes, min_samples_leaf, and max_depth.
The HGB classes also have two nice features: they support both categorical features and
missing values. This simplifies preprocessing quite a bit. However, the categorical
features must be represented as integers ranging from 0 to a number lower than
```
max_bins: you can use an OrdinalEncoder for this. For example, here’s how to
```
build and train a complete pipeline for the California housing dataset introduced in
Chapter 2:
from sklearn.pipeline import make_pipeline
from sklearn.compose import make_column_transformer
from sklearn.ensemble import HistGradientBoostingRegressor
from sklearn.preprocessing import OrdinalEncoder
```
hgb_reg = make_pipeline(
```
```
make_column_transformer((OrdinalEncoder(), ["ocean_proximity"]),
```
```
remainder="passthrough"),
```
```
HistGradientBoostingRegressor(categorical_features=[0], random_state=42)
```
```
)
```
```
hgb_reg.fit(housing, housing_labels)
```
The whole pipeline is just as short as the imports! No need for an imputer, or a scaler, or
a one-hot encoder, it’s really convenient. Note that categorical_features must
```
be set to the categorical column indices (or a boolean array). Without any
```
hyperparameter tuning, this model yields an RMSE of about 47,600, which is not too
bad.
TIP
Several other optimized implementations of Gradient Boosting are available in the Python ML
ecosystem, in particular: XGBoost, CatBoost, and LightGBM. These libraries have been around for
several years, they are all specialized for Gradient Boosting, their APIs are very similar to Scikit-
Learn’s, and they provide many additional features, including GPU-acceleration: you should definitely
check them out! Moreover, there’s a newcomer in the forest arena: TensorFlow Random Forests was
released in 2021, and it provides optimized implementations of many Random Forest algorithms: plain
Random Forests, Extra Trees, GBRT, and several more.
Stacking
```
The last Ensemble method we will discuss in this chapter is called stacking (short for
```
```
stacked generalization). It is based on a simple idea: instead of using trivial functions
```
```
(such as hard voting) to aggregate the predictions of all predictors in an ensemble, why
```
don’t we train a model to perform this aggregation? Figure 7-11 shows such an
ensemble performing a regression task on a new instance. Each of the bottom three
```
predictors predicts a different value (3.1, 2.7, and 2.9), and then the final predictor
```
```
(called a blender, or a meta learner) takes these predictions as inputs and makes the
```
```
final prediction (3.0).
```
17
Figure 7-11. Aggregating predictions using a blending predictor
To train the blender, you first need to build the blending training set: you can use
```
cross_val_predict() on every predictor in the ensemble to get out-of-sample
```
```
predictions for each instance in the original training set (Figure 7-12). These can be
```
used as the input features to train the blender, and the targets can be simply be copied
from the original training set. Note that regardless of the number of features in the
```
original training set (just one in this example), the blending training set will contain one
```
```
input feature per predictor (three in this example). Once the blender is trained, the base
```
predictors are retrained one last time on the full original training set.
Figure 7-12. Training the blender in a stacking ensemble
```
It is actually possible to train several different blenders this way (e.g., one using Linear
```
```
Regression, another using Random Forest Regression), to get a whole layer of blenders,
```
and then add another blender on top of that to produce the final prediction, as shown in
Figure 7-13. You may be able to squeeze out a few more drops of performance doing
this, but it will cost you in both training time and system complexity.
Figure 7-13. Predictions in a multilayer stacking ensemble
Scikit-Learn provides two classes for stacking ensembles: StackingClassifier
and StackingRegressor. For example, you can replace the
VotingClassifier you used at the beginning of this chapter on the moons dataset
with a StackingClassifier:
from sklearn.ensemble import StackingClassifier
```
stacking_clf = StackingClassifier(
```
```
estimators=[
```
```
('lr', LogisticRegression(random_state=42)),
```
```
('rf', RandomForestClassifier(random_state=42)),
```
```
('svc', SVC(probability=True, random_state=42))
```
],
```
final_estimator=RandomForestClassifier(random_state=43),
```
```
cv=5 # number of cross-validation folds
```
```
)
```
```
stacking_clf.fit(X_train, y_train)
```
```
For each predictor, the stacking classifier will call predict_proba() if available, or
```
```
it will fallback to decision_function() if available, or as a last resort it will call
```
```
predict(). If you don’t provide a final estimator, StackingClassifier will use
```
LogisticRegression, and StackingRegressor will use RidgeCV.
If you evaluate this stacking model on the test set, you will find 92.8% accuracy, which
is a bit better than the voting classifier using soft voting, which got 92%.
In conclusion, ensemble learning is versatile, powerful, and fairly simple to use.
Random Forests, AdaBoost and GBRT are among the first models you should test on
most Machine Learning tasks, and they particularly shine with heterogeneous tabular
data. Moreover, as they require very little preprocessing, they’re great to get a prototype
up and running quickly. Lastly, ensemble methods like voting classifiers and stacking
classifiers can help push your system’s performance to its limits.
Exercises
1. If you have trained five different models on the exact same training data, and
they all achieve 95% precision, is there any chance that you can combine these
models to get better results? If so, how? If not, why?
2. What is the difference between hard and soft voting classifiers?
3. Is it possible to speed up training of a bagging ensemble by distributing it
across multiple servers? What about pasting ensembles, boosting ensembles,
Random Forests, or stacking ensembles?
4. What is the benefit of out-of-bag evaluation?
5. What makes Extra-Trees more random than regular Random Forests? How can
this extra randomness help? Are Extra-Trees slower or faster than regular
Random Forests?
6. If your AdaBoost ensemble underfits the training data, which hyperparameters
should you tweak and how?
7. If your Gradient Boosting ensemble overfits the training set, should you
increase or decrease the learning rate?
8. Load the MNIST data (introduced in Chapter 3), and split it into a training set,
```
a validation set, and a test set (e.g., use 50,000 instances for training, 10,000 for
```
```
validation, and 10,000 for testing). Then train various classifiers, such as a
```
Random Forest classifier, an Extra-Trees classifier, and an SVM classifier.
Next, try to combine them into an ensemble that outperforms each individual
classifier on the validation set, using soft or hard voting. Once you have found
one, try it on the test set. How much better does it perform compared to the
individual classifiers?
9. Run the individual classifiers from the previous exercise to make predictions
on the validation set, and create a new training set with the resulting
```
predictions: each training instance is a vector containing the set of predictions
```
from all your classifiers for an image, and the target is the image’s class. Train
a classifier on this new training set. Congratulations, you have just trained a
blender, and together with the classifiers it forms a stacking ensemble! Now
evaluate the ensemble on the test set. For each image in the test set, make
predictions with all your classifiers, then feed the predictions to the blender to
get the ensemble’s predictions. How does it compare to the voting classifier
you trained earlier? Now try again using a StackingClassifier instead:
do you get better performance? If so, why?
Solutions to these exercises are available at the end of this chapter’s notebook, at
```
https://homl.info/colab3.
```
```
1 Leo Breiman, “Bagging Predictors,” Machine Learning 24, no. 2 (1996): 123–140.
```
2 In statistics, resampling with replacement is called bootstrapping.
3 Leo Breiman, “Pasting Small Votes for Classification in Large Databases and On-Line,” Machine Learning
```
36, no. 1–2 (1999): 85–103.
```
4 Bias and variance were introduced in Chapter 4.
5 max_samples can alternatively be set to a float between 0.0 and 1.0, in which case the max number of
sampled instances is equal to the size of the training set times max_samples.
```
6 As m grows, this ratio approaches 1 – exp(–1) ≈ 63%.
```
7 Gilles Louppe and Pierre Geurts, “Ensembles on Random Patches,” Lecture Notes in Computer Science 7523
```
(2012): 346–361.
```
8 Tin Kam Ho, “The Random Subspace Method for Constructing Decision Forests,” IEEE Transactions on
```
Pattern Analysis and Machine Intelligence 20, no. 8 (1998): 832–844.
```
9 Tin Kam Ho, “Random Decision Forests,” Proceedings of the Third International Conference on Document
```
Analysis and Recognition 1 (1995): 278.
```
10 The BaggingClassifier class remains useful if you want a bag of something other than Decision Trees.
```
11 Pierre Geurts et al., “Extremely Randomized Trees,” Machine Learning 63, no. 1 (2006): 3–42.
```
12 Yoav Freund and Robert E. Schapire, “A Decision-Theoretic Generalization of On-Line Learning and an
```
Application to Boosting,” Journal of Computer and System Sciences 55, no. 1 (1997): 119–139.
```
```
13 This is just for illustrative purposes. SVMs are generally not good base predictors for AdaBoost; they are slow
```
and tend to be unstable with it.
14 The original AdaBoost algorithm does not use a learning rate hyperparameter.
```
15 For more details, see Ji Zhu et al., “Multi-Class AdaBoost,” Statistics and Its Interface 2, no. 3 (2009): 349–
```
360.
16 Gradient Boosting was first introduced in Leo Breiman’s 1997 paper “Arcing the Edge” and was further
developed in the 1999 paper “Greedy Function Approximation: A Gradient Boosting Machine” by Jerome H.
Friedman.
```
17 David H. Wolpert, “Stacked Generalization,” Neural Networks 5, no. 2 (1992): 241–259.
```
Chapter 8. Dimensionality
Reduction
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take
advantage of these technologies long before the official release of these
titles.
This will be the 8th chapter of the final book. Notebooks are available
on GitHub at https://github.com/ageron/handson-ml3. Datasets are
available at https://github.com/ageron/data.
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this
chapter, please reach out to the editoor at ntache@oreilly.com.
Many Machine Learning problems involve thousands or even millions of
features for each training instance. Not only do all these features make
training extremely slow, but they can also make it much harder to find a
good solution, as we will see. This problem is often referred to as the curse
of dimensionality.
Fortunately, in real-world problems, it is often possible to reduce the
number of features considerably, turning an intractable problem into a
```
tractable one. For example, consider the MNIST images (introduced in
```
```
Chapter 3): the pixels on the image borders are almost always white, so you
```
could completely drop these pixels from the training set without losing
much information. Figure 7-6 confirms that these pixels are utterly
unimportant for the classification task. Additionally, two neighboring pixels
```
are often highly correlated: if you merge them into a single pixel (e.g., by
```
```
taking the mean of the two pixel intensities), you will not lose much
```
information.
WARNING
Reducing dimensionality does cause some information loss, just like compressing an
image to JPEG can degrade its quality, so even though it will speed up training, it may
make your system perform slightly worse. It also makes your pipelines a bit more
complex and thus harder to maintain. So you should first try to train your system with
the original data before considering using dimensionality reduction. In some cases,
reducing the dimensionality of the training data may filter out some noise and
```
unnecessary details and thus result in higher performance, but in general it won’t; it will
```
just speed up training.
Apart from speeding up training, dimensionality reduction is also extremely
```
useful for data visualization (or DataViz). Reducing the number of
```
```
dimensions down to two (or three) makes it possible to plot a condensed
```
view of a high-dimensional training set on a graph and often gain some
important insights by visually detecting patterns, such as clusters.
Moreover, DataViz is essential to communicate your conclusions to people
who are not data scientists—in particular, decision makers who will use
your results.
In this chapter we will discuss the curse of dimensionality and get a sense
of what goes on in high-dimensional space. Then, we will consider the two
```
main approaches to dimensionality reduction (projection and Manifold
```
```
Learning), and we will go through three of the most popular dimensionality
```
reduction techniques: PCA, random projection, and LLE.
The Curse of Dimensionality
We are so used to living in three dimensions that our intuition fails us
when we try to imagine a high-dimensional space. Even a basic 4D
```
hypercube is incredibly hard to picture in our minds (see Figure 8-1), let
```
alone a 200-dimensional ellipsoid bent in a 1,000-dimensional space.
1
```
Figure 8-1. Point, segment, square, cube, and tesseract (0D to 4D hypercubes)
```
It turns out that many things behave very differently in high-dimensional
```
space. For example, if you pick a random point in a unit square (a 1 × 1
```
```
square), it will have only about a 0.4% chance of being located less than
```
```
0.001 from a border (in other words, it is very unlikely that a random point
```
```
will be “extreme” along any dimension). But in a 10,000-dimensional unit
```
hypercube, this probability is greater than 99.999999%. Most points in a
high-dimensional hypercube are very close to the border.
Here is a more troublesome difference: if you pick two points randomly in a
unit square, the distance between these two points will be, on average,
roughly 0.52. If you pick two random points in a unit 3D cube, the average
distance will be roughly 0.66. But what about two points picked randomly
in a 1,000,000-dimensional hypercube? The average distance, believe it or
```
not, will be about 408.25 (roughly √1,000,000/6)! This is counterintuitive:
```
how can two points be so far apart when they both lie within the same unit
hypercube? Well, there’s just plenty of space in high dimensions. As a
result, high-dimensional datasets are at risk of being very sparse: most
training instances are likely to be far away from each other. This also means
2
3
that a new instance will likely be far away from any training instance,
making predictions much less reliable than in lower dimensions, since they
will be based on much larger extrapolations. In short, the more dimensions
the training set has, the greater the risk of overfitting it.
In theory, one solution to the curse of dimensionality could be to increase
the size of the training set to reach a sufficient density of training instances.
Unfortunately, in practice, the number of training instances required to
reach a given density grows exponentially with the number of dimensions.
With just 100 features—significantly fewer than in the MNIST problem—
all ranging from 0 to 1, you would need more training instances than atoms
in the observable universe in order for training instances to be within 0.1 of
each other on average, assuming they were spread out uniformly across all
dimensions.
Main Approaches for Dimensionality
Reduction
Before we dive into specific dimensionality reduction algorithms, let’s take
a look at the two main approaches to reducing dimensionality: projection
and Manifold Learning.
Projection
In most real-world problems, training instances are not spread out
uniformly across all dimensions. Many features are almost constant, while
```
others are highly correlated (as discussed earlier for MNIST). As a result,
```
```
all training instances lie within (or close to) a much lower-dimensional
```
subspace of the high-dimensional space. This sounds very abstract, so let’s
look at an example. In Figure 8-2 you can see a 3D dataset represented by
small spheres.
Figure 8-2. A 3D dataset lying close to a 2D subspace
Notice that all training instances lie close to a plane: this is a lower-
```
dimensional (2D) subspace of the higher-dimensional (3D) space. If we
```
```
project every training instance perpendicularly onto this subspace (as
```
```
represented by the short dashed lines connecting the instances to the plane),
```
we get the new 2D dataset shown in Figure 8-3. Ta-da! We have just
reduced the dataset’s dimensionality from 3D to 2D. Note that the axes
correspond to new features z and z : they are the coordinates of the
projections on the plane.
1 2
Figure 8-3. The new 2D dataset after projection
However, projection is not always the best approach to dimensionality
reduction. In many cases the subspace may twist and turn, such as in the
famous Swiss roll toy dataset represented in Figure 8-4.
Figure 8-4. Swiss roll dataset
```
Simply projecting onto a plane (e.g., by dropping x ) would squash different
```
layers of the Swiss roll together, as shown on the left side of Figure 8-5.
What you probably want instead is to unroll the Swiss roll to obtain the 2D
dataset on the right side of Figure 8-5.
3
```
Figure 8-5. Squashing by projecting onto a plane (left) versus unrolling the Swiss roll (right)
```
Manifold Learning
The Swiss roll is an example of a 2D manifold. Put simply, a 2D manifold is
a 2D shape that can be bent and twisted in a higher-dimensional space.
More generally, a d-dimensional manifold is a part of an n-dimensional
```
space (where d < n) that locally resembles a d-dimensional hyperplane. In
```
the case of the Swiss roll, d = 2 and n = 3: it locally resembles a 2D plane,
but it is rolled in the third dimension.
Many dimensionality reduction algorithms work by modeling the manifold
```
on which the training instances lie; this is called Manifold Learning. It
```
relies on the manifold assumption, also called the manifold hypothesis,
which holds that most real-world high-dimensional datasets lie close to a
much lower-dimensional manifold. This assumption is very often
empirically observed.
Once again, think about the MNIST dataset: all handwritten digit images
have some similarities. They are made of connected lines, the borders are
white, and they are more or less centered. If you randomly generated
images, only a ridiculously tiny fraction of them would look like
handwritten digits. In other words, the degrees of freedom available to you
if you try to create a digit image are dramatically lower than the degrees of
freedom you have if you are allowed to generate any image you want.
These constraints tend to squeeze the dataset into a lower-dimensional
manifold.
The manifold assumption is often accompanied by another implicit
```
assumption: that the task at hand (e.g., classification or regression) will be
```
simpler if expressed in the lower-dimensional space of the manifold. For
example, in the top row of Figure 8-6 the Swiss roll is split into two classes:
```
in the 3D space (on the left), the decision boundary would be fairly
```
```
complex, but in the 2D unrolled manifold space (on the right), the decision
```
boundary is a straight line.
However, this implicit assumption does not always hold. For example, in
the bottom row of Figure 8-6, the decision boundary is located at x = 5.
```
This decision boundary looks very simple in the original 3D space (a
```
```
vertical plane), but it looks more complex in the unrolled manifold (a
```
```
collection of four independent line segments).
```
In short, reducing the dimensionality of your training set before training a
model will usually speed up training, but it may not always lead to a better
```
or simpler solution; it all depends on the dataset.
```
Hopefully you now have a good sense of what the curse of dimensionality
is and how dimensionality reduction algorithms can fight it, especially
when the manifold assumption holds. The rest of this chapter will go
through some of the most popular algorithms.
1
Figure 8-6. The decision boundary may not always be simpler with lower dimensions
PCA
```
Principal Component Analysis (PCA) is by far the most popular
```
dimensionality reduction algorithm. First it identifies the hyperplane that
lies closest to the data, and then it projects the data onto it, just like in
Figure 8-2.
Preserving the Variance
Before you can project the training set onto a lower-dimensional
hyperplane, you first need to choose the right hyperplane. For example, a
simple 2D dataset is represented on the left in Figure 8-7, along with three
```
different axes (i.e., 1D hyperplanes). On the right is the result of the
```
projection of the dataset onto each of these axes. As you can see, the
projection onto the solid line preserves the maximum variance, while the
projection onto the dotted line preserves very little variance and the
projection onto the dashed line preserves an intermediate amount of
variance.
Figure 8-7. Selecting the subspace to project on
It seems reasonable to select the axis that preserves the maximum amount
of variance, as it will most likely lose less information than the other
projections. Another way to justify this choice is that it is the axis that
minimizes the mean squared distance between the original dataset and its
projection onto that axis. This is the rather simple idea behind PCA.
Principal Components
PCA identifies the axis that accounts for the largest amount of variance in
the training set. In Figure 8-7, it is the solid line. It also finds a second axis,
orthogonal to the first one, that accounts for the largest amount of
remaining variance. In this 2D example there is no choice: it is the dotted
line. If it were a higher-dimensional dataset, PCA would also find a third
axis, orthogonal to both previous axes, and a fourth, a fifth, and so on—as
many axes as the number of dimensions in the dataset.
```
The i axis is called the i principal component (PC) of the data. In
```
Figure 8-7, the first PC is the axis on which vector c lies, and the second
PC is the axis on which vector c lies. In Figure 8-2 the first two PCs are on
the projection plane, and the third PC is the axis orthogonal to that plane.
After the projection, in Figure 8-3, the first PC corresponds to the z axis,
and the second PC corresponds to the z axis.
NOTE
For each principal component, PCA finds a zero-centered unit vector pointing in the
direction of the PC. Since two opposing unit vectors lie on the same axis, the direction
of the unit vectors returned by PCA is not stable: if you perturb the training set slightly
and run PCA again, the unit vectors may point in the opposite direction as the original
vectors. However, they will generally still lie on the same axes. In some cases, a pair of
```
unit vectors may even rotate or swap (if the variances along these two axes are very
```
```
close), but the plane they define will generally remain the same.
```
4
th th
1
2
1
2
So how can you find the principal components of a training set? Luckily,
there is a standard matrix factorization technique called Singular Value
```
Decomposition (SVD) that can decompose the training set matrix X into the
```
matrix multiplication of three matrices U Σ V , where V contains the unit
vectors that define all the principal components that we are looking for, as
shown in Equation 8-1.
Equation 8-1. Principal components matrix
```
V =
```
```
The following Python code uses NumPy’s svd() function to obtain all the
```
principal components of the 3D training set represented in Figure 8-2, then
it extracts the two unit vectors that define the first two PCs:
import numpy as np
```
X = [...] # create a small 3D dataset
```
```
X_centered = X - X.mean(axis=0)
```
```
U, s, Vt = np.linalg.svd(X_centered)
```
```
c1 = Vt[0]
```
```
c2 = Vt[1]
```
WARNING
PCA assumes that the dataset is centered around the origin. As we will see, Scikit-
Learn’s PCA classes take care of centering the data for you. If you implement PCA
```
yourself (as in the preceding example), or if you use other libraries, don’t forget to
```
center the data first.
Projecting Down to d Dimensions
Once you have identified all the principal components, you can reduce the
dimensionality of the dataset down to d dimensions by projecting it onto the
hyperplane defined by the first d principal components. Selecting this
⊺
⎛
⎝
∣ ∣ ∣
c1 c2 ⋯ cn
∣ ∣ ∣
⎞
⎠
hyperplane ensures that the projection will preserve as much variance as
possible. For example, in Figure 8-2 the 3D dataset is projected down to the
2D plane defined by the first two principal components, preserving a large
part of the dataset’s variance. As a result, the 2D projection looks very
much like the original 3D dataset.
To project the training set onto the hyperplane and obtain a reduced dataset
X of dimensionality d, compute the matrix multiplication of the
training set matrix X by the matrix W , defined as the matrix containing the
first d columns of V, as shown in Equation 8-2.
Equation 8-2. Projecting the training set down to d dimensions
Xd-proj = XWd
The following Python code projects the training set onto the plane defined
by the first two principal components:
```
W2 = Vt[:2].T
```
```
X2D = X_centered @ W2
```
There you have it! You now know how to reduce the dimensionality of any
dataset by projecting it down to any number of dimensions, while
preserving as much variance as possible.
Using Scikit-Learn
Scikit-Learn’s PCA class uses SVD decomposition to implement PCA, just
like we did earlier in this chapter. The following code applies PCA to
```
reduce the dimensionality of the dataset down to two dimensions (note that
```
```
it automatically takes care of centering the data):
```
from sklearn.decomposition import PCA
```
pca = PCA(n_components=2)
```
```
X2D = pca.fit_transform(X)
```
d-proj
d
After fitting the PCA transformer to the dataset, its components_
attribute holds the transpose of W : it contains one row for each of the first
d principal components.
Explained Variance Ratio
Another useful piece of information is the explained variance ratio of each
principal component, available via the
explained_variance_ratio_ variable. The ratio indicates the
proportion of the dataset’s variance that lies along each principal
component. For example, let’s look at the explained variance ratios of the
first two components of the 3D dataset represented in Figure 8-2:
>>> pca.explained_variance_ratio_
```
array([0.7578477 , 0.15186921])
```
This output tells you that about 76% of the dataset’s variance lies along the
first PC, and about 15% lies along the second PC. This leaves about 9% for
the third PC, so it is reasonable to assume that the third PC probably carries
little information.
Choosing the Right Number of Dimensions
Instead of arbitrarily choosing the number of dimensions to reduce down to,
it is simpler to choose the number of dimensions that add up to a
```
sufficiently large portion of the variance (e.g., 95%). Unless, of course, you
```
are reducing dimensionality for data visualization, in which case you will
want to reduce the dimensionality down to 2 or 3.
```
The following code loads and splits the MNIST dataset (introduced in
```
```
Chapter 3) and performs PCA without reducing dimensionality, then it
```
computes the minimum number of dimensions required to preserve 95% of
the training set’s variance:
from sklearn.datasets import fetch_openml
```
mnist = fetch_openml('mnist_784', as_frame=False)
```
d
X_train, y_train = mnist.data[:60_000], mnist.target[:60_000]
X_test, y_test = mnist.data[60_000:], mnist.target[60_000:]
```
pca = PCA()
```
```
pca.fit(X_train)
```
```
cumsum = np.cumsum(pca.explained_variance_ratio_)
```
```
d = np.argmax(cumsum >= 0.95) + 1 # d equals 154
```
You could then set n_components=d and run PCA again. But there is a
better option: instead of specifying the number of principal components you
want to preserve, you can set n_components to be a float between 0.0
and 1.0, indicating the ratio of variance you wish to preserve:
```
pca = PCA(n_components=0.95)
```
```
X_reduced = pca.fit_transform(X_train)
```
The actual number of components is determined during training, and it is
stored in the n_components_ attribute:
>>> pca.n_components_
154
Yet another option is to plot the explained variance as a function of the
```
number of dimensions (simply plot cumsum; see Figure 8-8). There will
```
usually be an elbow in the curve, where the explained variance stops
growing fast. In this case, you can see that reducing the dimensionality
down to about 100 dimensions wouldn’t lose too much explained variance.
Figure 8-8. Explained variance as a function of the number of dimensions
Lastly, if you are using dimensionality reduction as a preprocessing step for
```
a supervised learning task (e.g., classification), then you can tune the
```
```
number of dimensions as you would any other hyperparameter (see
```
```
Chapter 2). For example, the following code example creates a two-step
```
pipeline, first reducing dimensionality using PCA, then classifying using a
Random Forest. Next, it uses RandomizedSearchCV to find a good
combination of hyperparameters for both PCA and the Random Forest
classifier. This example does a quick search, tuning only two
hyperparameters, training on just 1,000 instances, and running for just 10
iterations, but feel free do a more thorough search if you have the time.
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import RandomizedSearchCV
from sklearn.pipeline import make_pipeline
```
clf = make_pipeline(PCA(random_state=42),
```
```
RandomForestClassifier(random_state=42))
```
```
param_distrib = {
```
```
"pca__n_components": np.arange(10, 80),
```
```
"randomforestclassifier__n_estimators": np.arange(50, 500)
```
```
}
```
```
rnd_search = RandomizedSearchCV(clf, param_distrib, n_iter=10,
```
```
cv=3,
```
```
random_state=42)
```
```
rnd_search.fit(X_train[:1000], y_train[:1000])
```
Let’s look at the best hyperparameters found:
```
>>> print(rnd_search.best_params_)
```
```
{'randomforestclassifier__n_estimators': 465,
```
```
'pca__n_components': 23}
```
It’s interesting to note how low the optimal number of components is: we
reduced a 784-dimensional dataset to just 23 dimensions! This is tied to the
fact that we used a Random Forest, which is a pretty powerful model. If we
used a linear model instead, such as an SGDClassifier, the search
```
would find that we need to preserve more dimensions (about 70).
```
PCA for Compression
After dimensionality reduction, the training set takes up much less space.
For example, after applying PCA to the MNIST dataset while preserving
95% of its variance, we are left with 154 features, instead of the original
784 features. So the dataset is now less than 20% of its original size, and we
only lost 5% of its variance! This is a reasonable compression ratio, and it’s
easy to see how such a size reduction would speed up a classification
algorithm tremendously.
It is also possible to decompress the reduced dataset back to 784
dimensions by applying the inverse transformation of the PCA projection.
This won’t give you back the original data, since the projection lost a bit of
```
information (within the 5% variance that was dropped), but it will likely be
```
close to the original data. The mean squared distance between the original
```
data and the reconstructed data (compressed and then decompressed) is
```
called the reconstruction error.
```
The inverse_transform() method lets us decompress the reduced
```
MNIST dataset back to 784 dimensions:
```
X_recovered = pca.inverse_transform(X_reduced)
```
```
Figure 8-9 shows a few digits from the original training set (on the left), and
```
the corresponding digits after compression and decompression. You can see
that there is a slight image quality loss, but the digits are still mostly intact.
Figure 8-9. MNIST compression that preserves 95% of the variance
The equation of the inverse transformation is shown in Equation 8-3.
Equation 8-3. PCA inverse transformation, back to the original number of dimensions
```
Xrecovered = Xd-projWd ⊺
```
Randomized PCA
If you set the svd_solver hyperparameter to "randomized", Scikit-
Learn uses a stochastic algorithm called Randomized PCA that quickly
finds an approximation of the first d principal components. Its
```
computational complexity is ݓ m_ × d ) + ݓ d_ ), instead of ݓ m_ ×
```
```
n ) + ݓ n_ ) for the full SVD approach, so it is dramatically faster than
```
full SVD when d is much smaller than n:
```
rnd_pca = PCA(n_components=154, svd_solver="randomized",
```
```
random_state=42)
```
```
X_reduced = rnd_pca.fit_transform(X_train)
```
TIP
By default, svd_solver is actually set to "auto": Scikit-Learn automatically uses
```
the randomized PCA algorithm if max(m, n) > 500 and n_components is an integer
```
```
smaller than 80% of min(m, n), or else it uses the full SVD approach. So the preceding
```
code would use the randomized PCA algorithm even if you removed
```
svd_solver="randomized" argument, since 154 < 0.8 × 784. If you want to force
```
Scikit-Learn to use full SVD, you can set the svd_solver hyperparameter to
"full".
Incremental PCA
One problem with the preceding implementations of PCA is that they
require the whole training set to fit in memory in order for the algorithm to
```
run. Fortunately, Incremental PCA (IPCA) algorithms have been developed.
```
They allow you to split the training set into mini-batches and feed an IPCA
2 3
2 3
algorithm one mini-batch at a time. This is useful for large training sets and
```
for applying PCA online (i.e., on the fly, as new instances arrive).
```
The following code splits the MNIST training set into 100 mini-batches
```
(using NumPy’s array_split() function) and feeds them to Scikit-
```
Learn’s IncrementalPCA class to reduce the dimensionality of the
MNIST dataset down to 154 dimensions, just like before. Note that you
```
must call the partial_fit() method with each mini-batch, rather than
```
```
the fit() method with the whole training set:
```
from sklearn.decomposition import IncrementalPCA
```
n_batches = 100
```
```
inc_pca = IncrementalPCA(n_components=154)
```
```
for X_batch in np.array_split(X_train, n_batches):
```
```
inc_pca.partial_fit(X_batch)
```
```
X_reduced = inc_pca.transform(X_train)
```
Alternatively, you can use NumPy’s memmap class, which allows you to
manipulate a large array stored in a binary file on disk as if it were entirely
```
in memory; the class loads only the data it needs in memory, when it needs
```
it. To demonstrate this, let’s first create a memmap file and copy the
```
MNIST training set to it, then call flush() to ensure that any data still in
```
cache gets saved to disk. In real life, X_train would typically not fit in
memory so you would load it chunk by chunk and save each chunk to the
right part of the memmap array:
```
filename = "my_mnist.mmap"
```
```
X_mmap = np.memmap(filename, dtype='float32', mode='write',
```
```
shape=X_train.shape)
```
X_mmap[:] = X_train # could be a loop instead, saving the data
chunk by chunk
```
X_mmap.flush()
```
Next, we can load the memmap file and use it like a regular NumPy array.
Let’s use the IncrementalPCA class to reduce its dimensionality. Since
this algorithm uses only a small part of the array at any given time, memory
5
```
usage remains under control. This makes it possible to call the usual fit()
```
```
method instead of partial_fit(), which is quite convenient:
```
```
X_mmap = np.memmap(filename, dtype="float32",
```
```
mode="readonly").reshape(-1, 784)
```
```
batch_size = X_mmap.shape[0] // n_batches
```
```
inc_pca = IncrementalPCA(n_components=154, batch_size=batch_size)
```
```
inc_pca.fit(X_mmap)
```
WARNING
Only the raw binary data is saved to disk, so you need to specify the data type and shape
```
of the array when you load it. If you omit the shape, np.memmap() returns a 1D array.
```
For very high-dimensional datasets, PCA can be too slow. As we saw
earlier, even if you use Randomized PCA, its computational complexity is
```
still ݓ m_ × d ) + ݓ d_ ), so the target number of dimensions d must not
```
be too large. If you are dealing with a dataset with tens of thousands of
```
features or more (e.g., images), then training may become much too slow:
```
in this case, you should consider using Random Projection instead.
Random Projection
As its name suggests, the Random Projection algorithm projects the data to
a lower-dimensional space using a random linear projection. This may
sound crazy, but it turns out that such a random projection is actually very
likely to preserve distances fairly well, as was demonstrated mathematically
by William B. Johnson and Joram Lindenstrauss in a famous lemma. So
two similar instances will remain similar after the projection, and two very
different instances will remain very different.
Obviously, the more dimensions you drop, the more information is lost, and
the more distances get distorted. So how can you choose the optimal
number of dimensions? Well, Johnson and Lindenstrauss came up with an
equation that determines the minimum number of dimensions to preserve in
2 3
order to ensure—with high probability—that distances won’t change by
more than a given tolerance. For example, if you have a dataset containing
```
m = 5,000 instances with n = 20,000 features each, and you don’t want the
```
squared distance between any two instances to change by more than ε =
10%, then you should project the data down to d dimensions, with d ≥ 4
```
log(m) / (½ ε² - ⅓ ε³), which is 7,300 dimensions. That’s quite a significant
```
dimensionality reduction! Notice that the equation does not use n, it only
relies on m and ε. This equation is implemented by the
```
johnson_lindenstrauss_min_dim() function:
```
>>> from sklearn.random_projection import
johnson_lindenstrauss_min_dim
>>> m, ε = 5_000, 0.1
```
>>> d = johnson_lindenstrauss_min_dim(m, eps=ε)
```
>>> d
7300
Now we can just generate a random matrix P of shape [d, n], where each
item is sampled randomly from a Gaussian distribution with mean 0 and
variance 1 / d, and we use it to project a dataset from n dimensions down to
```
d:
```
```
n = 20_000
```
```
np.random.seed(42)
```
```
P = np.random.randn(d, n) / np.sqrt(d) # std dev = square root
```
of variance
```
X = np.random.randn(m, n) # generate a fake dataset
```
```
X_reduced = X @ P.T
```
That’s all there is to it! It’s simple and efficient, and no training is required:
the only thing the algorithm needs to create the random matrix is the
dataset’s shape, that’s it. The data itself is not used at all.
Scikit-Learn offers a GaussianRandomProjection class to do exactly
```
what we just did: when you call its fit() method, it uses
```
```
johnson_lindenstrauss_min_dim() to determine the output
```
dimensionality, then it generates a random matrix, which it stores in the
6
```
components_ attribute. Then when you call transform(), it uses this
```
matrix to perform the projection. When creating the transformer, you can
```
set eps if you want to tweak ε (it defaults to 0.1), and n_components if
```
you want to force a specific target dimensionality d. The following code
```
example gives the same result as above (you can also verify that
```
```
gaussian_rnd_proj.components_ is equal to P):
```
from sklearn.random_projection import GaussianRandomProjection
```
gaussian_rnd_proj = GaussianRandomProjection(eps=ε,
```
```
random_state=42)
```
```
X_reduced = gaussian_rnd_proj.fit_transform(X) # same result as
```
above
Scikit-Learn provides a second random projection transformer:
SparseRandomProjection. It determines the target dimensionality in
the same way, it generates a random matrix of the same shape, and it
performs the projection identically. The main difference is that the random
matrix is sparse. This means it uses much less memory: about 25 MB
instead of almost 1.2GB in the preceding example! And it’s also much
faster, both to generate the random matrix and to reduce dimensionality:
about 50% faster on the preceding example. Moreover, if the input is sparse,
```
the transformation keeps it sparse (unless you set
```
```
dense_output=True). Lastly, it enjoys the same distance-preserving
```
property as the previous approach, and the quality of the dimensionality
reduction is comparable. In short, it’s usually preferable to use this
transformer instead of the first one, especially for large or sparse datasets.
The ratio r of nonzero items in the sparse random matrix is called its
density. By default, it is equal to 1/√n. With 20,000 features, this means
that only one in ~141 cells in the random matrix is nonzero: that’s quite
sparse! You can set the density hyperparameter to another value if you
prefer. Each cell in the sparse random matrix has a probability r of being
```
nonzero, and each nonzero value is either –v or +v (both equally likely),
```
where v = 1/√dr.
NOTE
Random Projection is not always used to reduce the dimensionality of large datasets.
For example, a 2017 paper by Sanjoy Dasgupta et al. showed that the brain of fruit flies
implements an analog of Random Projection to map dense low-dimensional olfactory
inputs to sparse high-dimensional binary outputs: for each odor, only a small fraction of
the output neurons get activated, but similar odors activate many of the same neurons.
```
This is similar to a well-known algorithm called Locality Sensitive Hashing (LSH)
```
which is typically used in search engines to group similar documents.
If you want to perform the inverse transform, you first need to compute the
```
pseudo-inverse of the components matrix, using SciPy’s pinv() function,
```
then multiply the reduced data by the transpose of the pseudo-inverse:
```
components_pinv = np.linalg.pinv(gaussian_rnd_proj.components_)
```
```
X_recovered = X_reduced @ components_pinv.T
```
WARNING
Computing the pseudo-inverse may take a very long time if the components matrix is
```
large, as the computational complexity of pinv() ݓ is dn_²) if d < n, or ݓ nd_²)
```
otherwise.
In summary, Random Projection is a simple, fast, memory-efficient and
surprisingly powerful dimensionality reduction algorithm that you should
keep in mind, especially when you deal with high-dimensional datasets.
LLE
```
Locally Linear Embedding (LLE) is a nonlinear dimensionality reduction
```
```
(NLDR) technique. It is a Manifold Learning technique that does not rely
```
on projections, unlike PCA and Random Projection. In a nutshell, LLE
works by first measuring how each training instance linearly relates to its
nearest neighbors, and then looking for a low-dimensional representation of
```
the training set where these local relationships are best preserved (more
```
7
8
```
details shortly). This approach makes it particularly good at unrolling
```
twisted manifolds, especially when there is not too much noise.
The following code makes a Swiss roll then uses Scikit-Learn’s
LocallyLinearEmbedding class to unroll it:
from sklearn.datasets import make_swiss_roll
from sklearn.manifold import LocallyLinearEmbedding
```
X_swiss, t = make_swiss_roll(n_samples=1000, noise=0.2,
```
```
random_state=42)
```
```
lle = LocallyLinearEmbedding(n_components=2, n_neighbors=10,
```
```
random_state=42)
```
```
X_unrolled = lle.fit_transform(X_swiss)
```
The variable t is a 1D NumPy array containing the position of each
instance along the rolled axis of Swiss roll. We don’t use it in this example,
but it can be used as a target for a non-linear regression task.
The resulting 2D dataset is shown in Figure 8-10. As you can see, the Swiss
roll is completely unrolled, and the distances between instances are locally
well preserved. However, distances are not preserved on a larger scale: the
unrolled Swiss roll should be a rectangle, not this kind of stretched and
twisted band. Nevertheless, LLE did a pretty good job at modeling the
manifold.
Figure 8-10. Unrolled Swiss roll using LLE
Here’s how LLE works: for each training instance x , the algorithm
```
identifies its k nearest neighbors (in the preceding code k = 10), then tries to
```
reconstruct x as a linear function of these neighbors. More specifically, it
tries to find the weights w such that the squared distance between x and
```
∑mj=1 wi,jx(j) is as small as possible, assuming w = 0 if x is not one of
```
the k nearest neighbors of x . Thus the first step of LLE is the constrained
optimization problem described in Equation 8-4, where W is the weight
matrix containing all the weights w . The second constraint simply
normalizes the weights for each training instance x .
Equation 8-4. LLE step one: linearly modeling local relationships
```
After this step, the weight matrix ˆW (containing the weights ˆwi,j) encodes
```
the local linear relationships between the training instances. The second
```
step is to map the training instances into a d-dimensional space (where d <
```
```
n) while preserving these local relationships as much as possible. If z is
```
the image of x in this d-dimensional space, then we want the squared
```
distance between z and ∑mj=1 ˆwi,jz(j) to be as small as possible. This idea
```
leads to the unconstrained optimization problem described in Equation 8-5.
It looks very similar to the first step, but instead of keeping the instances
fixed and finding the optimal weights, we are doing the reverse: keeping the
weights fixed and finding the optimal position of the instances’ images in
the low-dimensional space. Note that Z is the matrix containing all z .
Equation 8-5. LLE step two: reducing dimensionality while preserving relationships
```
(i)
```
```
(i)
```
i,j
```
(i)
```
i,j
```
(j)
```
```
(i)
```
i,j
```
(i)
```
ˆW =argmin
W
m
∑
```
i=1
```
```
(x(i) −
```
m
∑
```
j=1
```
```
wi,jx(j))
```
2
```
subject to {
```
```
wi,j = 0 if x(j) is not one of the k n.n. of x(i)
```
∑mj=1 wi,j = 1 for i = 1, 2, ⋯ , m
```
(i)
```
```
(i)
```
```
(i)
```
```
(i)
```
ˆZ =argmin
Z
m
∑
```
i=1
```
```
(z(i) −
```
m
∑
```
j=1
```
```
ˆwi,jz(j))
```
2
Scikit-Learn’s LLE implementation has the following computational
```
complexity: 𝓞(m log(m)n log(k)) for finding the k nearest neighbors,
```
```
ݓ mnk_ ) for optimizing the weights, and ݓ dm_ ) for constructing the
```
low-dimensional representations. Unfortunately, the m in the last term
makes this algorithm scale poorly to very large datasets.
As you can see, LLE is quite different from the projection techniques, and
it’s significantly more complex, but it can also perform much better,
especially if the data is non-linear.
Before we conclude this chapter, let’s take a quick look at a few other
popular dimensionality reduction techniques available in Scikit-Learn:
```
sklearn.manifold.MDS Multidimensional Scaling (MDS) reduces
```
dimensionality while trying to preserve the distances between the instances.
Random Projection does that for high-dimensional data, but it doesn’t work
well on low-dimensional data. sklearn.manifold.Isomap Isomap
creates a graph by connecting each instance to its nearest neighbors, then
reduces dimensionality while trying to preserve the geodesic distances
between the instances. The geodesic distance between two nodes in a graph
is the number of nodes on the shortest path between these nodes.
sklearn.manifold.TSNE t-Distributed Stochastic Neighbor
```
Embedding (t-SNE) reduces dimensionality while trying to keep similar
```
instances close and dissimilar instances apart. It is mostly used for
visualization, in particular to visualize clusters of instances in high-
dimensional space. For example, in the exercises at the end of this chapter
you will use t-SNE to visualize a 2D map of the MNIST images.
sklearn.discriminant_analysis.LinearDiscriminantAn
```
alysis Linear Discriminant Analysis (LDA) is a linear classification
```
algorithm, and during training it learns the most discriminative axes
between the classes. These axes can then be used to define a hyperplane
onto which to project the data. The benefit of this approach is that the
3 2
2
projection will keep classes as far apart as possible, so LDA is a good
technique to reduce dimensionality before running another classification
```
algorithm (unless LDA is sufficient).
```
Figure 8-11 shows the results of MDS, Isomap and t-SNE on the Swiss roll.
Figure 8-11. Using various techniques to reduce the Swiss roll to 2D
Exercises
1. What are the main motivations for reducing a dataset’s
dimensionality? What are the main drawbacks?
2. What is the curse of dimensionality?
3. Once a dataset’s dimensionality has been reduced, is it possible to
reverse the operation? If so, how? If not, why?
4. Can PCA be used to reduce the dimensionality of a highly
nonlinear dataset?
5. Suppose you perform PCA on a 1,000-dimensional dataset, setting
the explained variance ratio to 95%. How many dimensions will
the resulting dataset have?
6. In what cases would you use regular PCA, Incremental PCA,
Randomized PCA, or Random Projection?
7. How can you evaluate the performance of a dimensionality
reduction algorithm on your dataset?
8. Does it make any sense to chain two different dimensionality
reduction algorithms?
9. Load the MNIST dataset (introduced in Chapter 3) and split it into
```
a training set and a test set (take the first 60,000 instances for
```
```
training, and the remaining 10,000 for testing). Train a Random
```
Forest classifier on the dataset and time how long it takes, then
evaluate the resulting model on the test set. Next, use PCA to
reduce the dataset’s dimensionality, with an explained variance
ratio of 95%. Train a new Random Forest classifier on the reduced
dataset and see how long it takes. Was training much faster? Next,
evaluate the classifier on the test set. How does it compare to the
previous classifier? Try again with an SGDClassifier. How
much does PCA help now?
10. Use t-SNE to reduce the first 5,000 images of the MNIST dataset
down to two dimensions and plot the result using Matplotlib. You
can use a scatterplot using 10 different colors to represent each
image’s target class. Alternatively, you can replace each dot in the
```
scatterplot with the corresponding instance’s class (a digit from 0
```
```
to 9), or even plot scaled-down versions of the digit images
```
```
themselves (if you plot all digits, the visualization will be too
```
cluttered, so you should either draw a random sample or plot an
instance only if no other instance has already been plotted at a
```
close distance). You should get a nice visualization with well-
```
separated clusters of digits. Try using other dimensionality
reduction algorithms such as PCA, LLE, or MDS and compare the
resulting visualizations.
Solutions to these exercises are available at the end of this chapter’s
notebook, at https://homl.info/colab3.
1 Well, four dimensions if you count time, and a few more if you are a string theorist.
2 Watch a rotating tesseract projected into 3D space at https://homl.info/30. Image by Wikipedia
```
user NerdBoy1392 (Creative Commons BY-SA 3.0). Reproduced from
```
```
https://en.wikipedia.org/wiki/Tesseract.
```
```
3 Fun fact: anyone you know is probably an extremist in at least one dimension (e.g., how much
```
```
sugar they put in their coffee), if you consider enough dimensions.
```
4 Karl Pearson, “On Lines and Planes of Closest Fit to Systems of Points in Space,” The
London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science 2, no. 11
```
(1901): 559-572, https://homl.info/pca.
```
5 Scikit-Learn uses the algorithm described in David A. Ross et al., “Incremental Learning for
```
Robust Visual Tracking,” International Journal of Computer Vision 77, no. 1–3 (2008): 125–
```
141.
6 ε is the greek letter epsilon, often used for tiny values.
7 Sanjoy Dasgupta et al., “A neural algorithm for a fundamental computing problem,” Science
```
358, no. 6364 (2017): 793–796.
```
8 Sam T. Roweis and Lawrence K. Saul, “Nonlinear Dimensionality Reduction by Locally
```
Linear Embedding,” Science 290, no. 5500 (2000): 2323–2326.Chapter 9. Unsupervised
```
Learning Techniques
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take
advantage of these technologies long before the official release of these
titles.
This will be the 9th chapter of the final book. Notebooks are available
on GitHub at https://github.com/ageron/handson-ml3. Datasets are
available at https://github.com/ageron/data.
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this
chapter, please reach out to the editoor at ntache@oreilly.com.
Although most of the applications of Machine Learning today are based on
```
supervised learning (and as a result, this is where most of the investments
```
```
go to), the vast majority of the available data is unlabeled: we have the
```
input features X, but we do not have the labels y. The computer scientist
Yann LeCun famously said that “if intelligence was a cake, unsupervised
learning would be the cake, supervised learning would be the icing on the
cake, and reinforcement learning would be the cherry on the cake.” In other
words, there is a huge potential in unsupervised learning that we have only
barely started to sink our teeth into.
Say you want to create a system that will take a few pictures of each item
on a manufacturing production line and detect which items are defective.
You can fairly easily create a system that will take pictures automatically,
and this might give you thousands of pictures every day. You can then build
a reasonably large dataset in just a few weeks. But wait, there are no labels!
If you want to train a regular binary classifier that will predict whether an
item is defective or not, you will need to label every single picture as
“defective” or “normal.” This will generally require human experts to sit
down and manually go through all the pictures. This is a long, costly, and
tedious task, so it will usually only be done on a small subset of the
available pictures. As a result, the labeled dataset will be quite small, and
the classifier’s performance will be disappointing. Moreover, every time the
company makes any change to its products, the whole process will need to
be started over from scratch. Wouldn’t it be great if the algorithm could just
exploit the unlabeled data without needing humans to label every picture?
Enter unsupervised learning.
In Chapter 8 we looked at the most common unsupervised learning task:
dimensionality reduction. In this chapter we will look at a few more
unsupervised learning tasks and algorithms:
Clustering
The goal is to group similar instances together into clusters. Clustering
is a great tool for data analysis, customer segmentation, recommender
systems, search engines, image segmentation, semi-supervised learning,
dimensionality reduction, and more.
Anomaly detection
The objective is to learn what “normal” data looks like, and then use
that to detect abnormal instances, such as defective items on a
production line or a new trend in a time series.
Density estimation
```
This is the task of estimating the probability density function (PDF) of
```
the random process that generated the dataset. Density estimation is
commonly used for anomaly detection: instances located in very low-
density regions are likely to be anomalies. It is also useful for data
analysis and visualization.
Ready for some cake? We will start with clustering, using K-Means and
DBSCAN, and then we will discuss Gaussian mixture models and see how
they can be used for density estimation, clustering, and anomaly detection.
Clustering
As you enjoy a hike in the mountains, you stumble upon a plant you have
never seen before. You look around and you notice a few more. They are
not identical, yet they are sufficiently similar for you to know that they most
```
likely belong to the same species (or at least the same genus). You may
```
need a botanist to tell you what species that is, but you certainly don’t need
an expert to identify groups of similar-looking objects. This is called
```
clustering: it is the task of identifying similar instances and assigning them
```
to clusters, or groups of similar instances.
Just like in classification, each instance gets assigned to a group. However,
unlike classification, clustering is an unsupervised task. Consider Figure 9-
```
1: on the left is the iris dataset (introduced in Chapter 4), where each
```
```
instance’s species (i.e., its class) is represented with a different marker. It is
```
a labeled dataset, for which classification algorithms such as Logistic
Regression, SVMs, or Random Forest classifiers are well suited. On the
right is the same dataset, but without the labels, so you cannot use a
classification algorithm anymore. This is where clustering algorithms step
```
in: many of them can easily detect the lower-left cluster. It is also quite easy
```
to see with our own eyes, but it is not so obvious that the upper-right cluster
is composed of two distinct sub-clusters. That said, the dataset has two
```
additional features (sepal length and width), not represented here, and
```
clustering algorithms can make good use of all features, so in fact they
```
identify the three clusters fairly well (e.g., using a Gaussian mixture model,
```
```
only 5 instances out of 150 are assigned to the wrong cluster).
```
```
Figure 9-1. Classification (left) versus clustering (right)
```
Clustering is used in a wide variety of applications, including these:
For customer segmentation
You can cluster your customers based on their purchases and their
activity on your website. This is useful to understand who your
customers are and what they need, so you can adapt your products and
marketing campaigns to each segment. For example, customer
segmentation can be useful in recommender systems to suggest content
that other users in the same cluster enjoyed.
For data analysis
When you analyze a new dataset, it can be helpful to run a clustering
algorithm, and then analyze each cluster separately.
As a dimensionality reduction technique
Once a dataset has been clustered, it is usually possible to measure each
instance’s affinity with each cluster: affinity is any measure of how well
an instance fits into a cluster. Each instance’s feature vector x can then
be replaced with the vector of its cluster affinities. If there are k clusters,
then this vector is k-dimensional. This vector is typically much lower-
dimensional than the original feature vector, but it can preserve enough
information for further processing.
For feature engineering
The cluster affinities can often be useful as extra features. For example,
we used K-Means in Chapter 2 to add geographic cluster affinity
features to the California housing dataset, and they helped us get better
performance.
```
For anomaly detection (also called outlier detection)
```
Any instance that has a low affinity to all the clusters is likely to be an
anomaly. For example, if you have clustered the users of your website
based on their behavior, you can detect users with unusual behavior,
such as an unusual number of requests per second. Anomaly detection is
particularly useful in detecting defects in manufacturing, or for fraud
detection.
For semi-supervised learning
If you only have a few labels, you could perform clustering and
propagate the labels to all the instances in the same cluster. This
technique can greatly increase the number of labels available for a
subsequent supervised learning algorithm, and thus improve its
performance.
For search engines
Some search engines let you search for images that are similar to a
reference image. To build such a system, you would first apply a
```
clustering algorithm to all the images in your database; similar images
```
would end up in the same cluster. Then when a user provides a
reference image, all you need to do is use the trained clustering model
to find this image’s cluster, and you can then simply return all the
images from this cluster.
To segment an image
By clustering pixels according to their color, then replacing each pixel’s
color with the mean color of its cluster, it is possible to considerably
reduce the number of different colors in the image. Image segmentation
is used in many object detection and tracking systems, as it makes it
easier to detect the contour of each object.
There is no universal definition of what a cluster is: it really depends on the
context, and different algorithms will capture different kinds of clusters.
Some algorithms look for instances centered around a particular point,
called a centroid. Others look for continuous regions of densely packed
```
instances: these clusters can take on any shape. Some algorithms are
```
hierarchical, looking for clusters of clusters. And the list goes on.
In this section, we will look at two popular clustering algorithms, K-Means
and DBSCAN, and explore some of their applications, such as nonlinear
dimensionality reduction, semi-supervised learning, and anomaly detection.
K-Means
Consider the unlabeled dataset represented in Figure 9-2: you can clearly
see five blobs of instances. The K-Means algorithm is a simple algorithm
capable of clustering this kind of dataset very quickly and efficiently, often
in just a few iterations. It was proposed by Stuart Lloyd at Bell Labs in
1957 as a technique for pulse-code modulation, but it was only published
outside of the company in 1982. In 1965, Edward W. Forgy had published
virtually the same algorithm, so K-Means is sometimes referred to as
Lloyd–Forgy.
1
Figure 9-2. An unlabeled dataset composed of five blobs of instances
Let’s train a K-Means clusterer on this dataset. It will try to find each blob’s
center and assign each instance to the closest blob:
from sklearn.cluster import KMeans
from sklearn.datasets import make_blobs
```
X, y = make_blobs([...]) # make the blobs: y contains the
```
cluster ids, but we
# will not use them, it's what we want
to predict
```
k = 5
```
```
kmeans = KMeans(n_clusters=k, random_state=42)
```
```
y_pred = kmeans.fit_predict(X)
```
Note that you have to specify the number of clusters k that the algorithm
must find. In this example, it is pretty obvious from looking at the data that
k should be set to 5, but in general it is not that easy. We will discuss this
shortly.
Each instance was assigned to one of the five clusters. In the context of
clustering, an instance’s label is the index of the cluster that this instance
gets assigned to by the algorithm: this is not to be confused with the class
```
labels in classification, which are used as targets (remember that clustering
```
```
is an unsupervised learning task). The KMeans instance preserves the
```
predicted labels of the instances it was trained on, available via the
labels_ instance variable:
>>> y_pred
```
array([4, 0, 1, ..., 2, 1, 0], dtype=int32)
```
>>> y_pred is kmeans.labels_
True
We can also take a look at the five centroids that the algorithm found:
>>> kmeans.cluster_centers_
```
array([[-2.80389616, 1.80117999],
```
[ 0.20876306, 2.25551336],
[-2.79290307, 2.79641063],
[-1.46679593, 2.28585348],
```
[-2.80037642, 1.30082566]])
```
You can easily assign new instances to the cluster whose centroid is closest:
>>> import numpy as np
```
>>> X_new = np.array([[0, 2], [3, 2], [-3, 3], [-3, 2.5]])
```
```
>>> kmeans.predict(X_new)
```
```
array([1, 1, 2, 2], dtype=int32)
```
If you plot the cluster’s decision boundaries, you get a Voronoi tessellation:
see Figure 9-3, where each centroid is represented with an X.
```
Figure 9-3. K-Means decision boundaries (Voronoi tessellation)
```
The vast majority of the instances were clearly assigned to the appropriate
cluster, but a few instances were probably mislabeled, especially near the
boundary between the top-left cluster and the central cluster. Indeed, the K-
Means algorithm does not behave very well when the blobs have very
different diameters because all it cares about when assigning an instance to
a cluster is the distance to the centroid.
Instead of assigning each instance to a single cluster, which is called hard
clustering, it can be useful to give each instance a score per cluster, which is
called soft clustering. The score can be the distance between the instance
```
and the centroid; conversely, it can be a similarity score (or affinity), such
```
as the Gaussian Radial Basis Function we used in Chapter 2. In the
```
KMeans class, the transform() method measures the distance from
```
each instance to every centroid:
```
>>> kmeans.transform(X_new).round(2)
```
```
array([[2.81, 0.33, 2.9 , 1.49, 2.89],
```
[5.81, 2.8 , 5.85, 4.48, 5.84],
[1.21, 3.29, 0.29, 1.69, 1.71],
```
[0.73, 3.22, 0.36, 1.55, 1.22]])
```
In this example, the first instance in X_new is located at a distance of about
2.81 from the first centroid, 0.33 from the second centroid, 2.90 from the
third centroid, 1.49 from the fourth centroid, and 2.89 from the fifth
centroid. If you have a high-dimensional dataset and you transform it this
way, you end up with a k-dimensional dataset: this transformation can be a
very efficient nonlinear dimensionality reduction technique. Alternatively,
you can use these distances as extra features to train another model, as we
did in Chapter 2.
The K-Means algorithm
So, how does the algorithm work? Well, suppose you were given the
centroids. You could easily label all the instances in the dataset by assigning
each of them to the cluster whose centroid is closest. Conversely, if you
were given all the instance labels, you could easily locate each cluster’s
centroid by computing the mean of the instances in that cluster. But you are
given neither the labels nor the centroids, so how can you proceed? Well,
```
just start by placing the centroids randomly (e.g., by picking k instances at
```
```
random from the dataset and using their locations as centroids). Then label
```
the instances, update the centroids, label the instances, update the centroids,
and so on until the centroids stop moving. The algorithm is guaranteed to
```
converge in a finite number of steps (usually quite small). That’s because
```
the mean squared distance between the instances and their closest centroid
can only go down at each step, and since it cannot be negative, it’s
guaranteed to converge.
You can see the algorithm in action in Figure 9-4: the centroids are
```
initialized randomly (top left), then the instances are labeled (top right),
```
```
then the centroids are updated (center left), the instances are relabeled
```
```
(center right), and so on. As you can see, in just three iterations, the
```
algorithm has reached a clustering that seems close to optimal.
NOTE
The computational complexity of the algorithm is generally linear with regard to the
number of instances m, the number of clusters k, and the number of dimensions n.
However, this is only true when the data has a clustering structure. If it does not, then in
the worst-case scenario the complexity can increase exponentially with the number of
instances. In practice, this rarely happens, and K-Means is generally one of the fastest
clustering algorithms.
Figure 9-4. The K-Means algorithm
Although the algorithm is guaranteed to converge, it may not converge to
```
the right solution (i.e., it may converge to a local optimum): whether it does
```
or not depends on the centroid initialization. Figure 9-5 shows two
suboptimal solutions that the algorithm can converge to if you are not lucky
with the random initialization step.
Figure 9-5. Suboptimal solutions due to unlucky centroid initializations
Let’s look at a few ways you can mitigate this risk by improving the
centroid initialization.
Centroid initialization methods
```
If you happen to know approximately where the centroids should be (e.g., if
```
```
you ran another clustering algorithm earlier), then you can set the init
```
hyperparameter to a NumPy array containing the list of centroids, and set
n_init to 1:
```
good_init = np.array([[-3, 3], [-3, 2], [-3, 1], [-1, 2], [0,
```
```
2]])
```
```
kmeans = KMeans(n_clusters=5, init=good_init, n_init=1,
```
```
random_state=42)
```
```
kmeans.fit(X)
```
Another solution is to run the algorithm multiple times with different
random initializations and keep the best solution. The number of random
initializations is controlled by the n_init hyperparameter: by default, it is
equal to 10, which means that the whole algorithm described earlier runs
```
10 times when you call fit(), and Scikit-Learn keeps the best solution.
```
But how exactly does it know which solution is the best? It uses a
performance metric! That metric is called the model’s inertia, which is the
sum of the squared distances between the instances and their closest
centroid. It is roughly equal to 219.4 for the model on the left in Figure 9-5,
258.6 for the model on the right in Figure 9-5, and only 211.6 for the model
in Figure 9-3. The KMeans class runs the algorithm n_init times and
keeps the model with the lowest inertia. In this example, the model in
```
Figure 9-3 will be selected (unless we are very unlucky with n_init
```
```
consecutive random initializations). If you are curious, a model’s inertia is
```
accessible via the inertia_ instance variable:
>>> kmeans.inertia_
211.59853725816836
```
The score() method returns the negative inertia. Why negative? Because
```
```
a predictor’s score() method must always respect Scikit-Learn’s “greater
```
```
is better” rule: if a predictor is better than another, its score() method
```
should return a greater score.
```
>>> kmeans.score(X)
```
-211.5985372581684
An important improvement to the K-Means algorithm, K-Means++, was
proposed in a 2006 paper by David Arthur and Sergei Vassilvitskii. They
introduced a smarter initialization step that tends to select centroids that are
distant from one another, and this improvement makes the K-Means
algorithm much less likely to converge to a suboptimal solution. They
showed that the additional computation required for the smarter
initialization step is well worth it because it makes it possible to drastically
reduce the number of times the algorithm needs to be run to find the
optimal solution. The K-Means++ initialization algorithm goes like this:
1. Take one centroid c , chosen uniformly at random from the
dataset.
2. Take a new centroid c , choosing an instance x with probability
```
D(x(i))
```
2
```
/ ∑mj=1 D(x(j))
```
2
```
, where D(x ) is the distance between
```
the instance x and the closest centroid that was already chosen.
This probability distribution ensures that instances farther away
from already chosen centroids are much more likely be selected as
centroids.
3. Repeat the previous step until all k centroids have been chosen.
The KMeans class uses this initialization method by default.
Accelerated K-Means and mini-batch K-Means
Another improvement to the K-Means algorithm was proposed in a 2003
paper by Charles Elkan. On some large datasets with many clusters, it can
accelerate the algorithm by avoiding many unnecessary distance
2
```
(1)
```
```
(i) (i)
```
```
(i)
```
```
(i)
```
3
```
calculations. Elkan achieved this by exploiting the triangle inequality (i.e.,
```
```
that a straight line is always the shortest distance between two points ) and
```
by keeping track of lower and upper bounds for distances between instances
and centroids. However, Elkan’s algorithm does not always accelerate
training, it depends on the dataset, and sometimes it can even slow down
training significantly. Still, if you want to give it a try, set
```
algorithm="elkan".
```
Yet another important variant of the K-Means algorithm was proposed in a
2010 paper by David Sculley. Instead of using the full dataset at each
iteration, the algorithm is capable of using mini-batches, moving the
centroids just slightly at each iteration. This speeds up the algorithm
typically by a factor of three to four and makes it possible to cluster huge
datasets that do not fit in memory. Scikit-Learn implements this algorithm
in the MiniBatchKMeans class. You can just use this class like the
KMeans class:
from sklearn.cluster import MiniBatchKMeans
```
minibatch_kmeans = MiniBatchKMeans(n_clusters=5, random_state=42)
```
```
minibatch_kmeans.fit(X)
```
If the dataset does not fit in memory, the simplest option is to use the
memmap class, as we did for incremental PCA in Chapter 8. Alternatively,
```
you can pass one mini-batch at a time to the partial_fit() method,
```
but this will require much more work, since you will need to perform
multiple initializations and select the best one yourself.
Although the Mini-batch K-Means algorithm is much faster than the regular
K-Means algorithm, its inertia is generally slightly worse. You can see this
in Figure 9-6: the plot on the left compares the inertias of Mini-batch K-
Means and regular K-Means models trained on the previous five-blobs
dataset using various numbers of clusters k. The difference between the two
curves is small, but visible. In the plot on the right, you can see that Mini-
batch K-Means is roughly 3.5 times faster than regular K-Means on this
dataset.
4
5
```
Figure 9-6. Mini-batch K-Means has a higher inertia than K-Means (left) but it is much faster
```
```
(right), especially as k increases
```
Finding the optimal number of clusters
So far, we have set the number of clusters k to 5 because it was obvious by
looking at the data that this was the correct number of clusters. But in
general, it will not be so easy to know how to set k, and the result might be
quite bad if you set it to the wrong value. As you can see in Figure 9-7,
setting k to 3 or 8 results in fairly bad models.
Figure 9-7. Bad choices for the number of clusters: when k is too small, separate clusters get merged
```
(left), and when k is too large, some clusters get chopped into multiple pieces (right)
```
You might be thinking that we could just pick the model with the lowest
inertia, right? Unfortunately, it is not that simple. The inertia for k=3 is
```
about 653.2, which is much higher than for k=5 (which was 211.6). But
```
with k=8, the inertia is just 119.1. The inertia is not a good performance
metric when trying to choose k because it keeps getting lower as we
increase k. Indeed, the more clusters there are, the closer each instance will
be to its closest centroid, and therefore the lower the inertia will be. Let’s
```
plot the inertia as a function of k (see Figure 9-8).
```
Figure 9-8. When plotting the inertia as a function of the number of clusters k, the curve often
contains an inflexion point called the “elbow”
As you can see, the inertia drops very quickly as we increase k up to 4, but
then it decreases much more slowly as we keep increasing k. This curve has
roughly the shape of an arm, and there is an “elbow” at k = 4. So, if we did
not know better, 4 would be a good choice: any lower value would be
dramatic, while any higher value would not help much, and we might just
be splitting perfectly good clusters in half for no good reason.
This technique for choosing the best value for the number of clusters is
```
rather coarse. A more precise approach (but also more computationally
```
```
expensive) is to use the silhouette score, which is the mean silhouette
```
coefficient over all the instances. An instance’s silhouette coefficient is
```
equal to (b – a) / max(a, b), where a is the mean distance to the other
```
```
instances in the same cluster (i.e., the mean intra-cluster distance) and b is
```
```
the mean nearest-cluster distance (i.e., the mean distance to the instances of
```
the next closest cluster, defined as the one that minimizes b, excluding the
```
instance’s own cluster). The silhouette coefficient can vary between –1 and
```
+1. A coefficient close to +1 means that the instance is well inside its own
cluster and far from other clusters, while a coefficient close to 0 means that
it is close to a cluster boundary, and finally a coefficient close to –1 means
that the instance may have been assigned to the wrong cluster.
To compute the silhouette score, you can use Scikit-Learn’s
```
silhouette_score() function, giving it all the instances in the dataset
```
and the labels they were assigned:
>>> from sklearn.metrics import silhouette_score
```
>>> silhouette_score(X, kmeans.labels_)
```
0.655517642572828
```
Let’s compare the silhouette scores for different numbers of clusters (see
```
```
Figure 9-9).
```
Figure 9-9. Selecting the number of clusters k using the silhouette score
As you can see, this visualization is much richer than the previous one:
although it confirms that k = 4 is a very good choice, it also underlines the
fact that k = 5 is quite good as well, and much better than k = 6 or 7. This
was not visible when comparing inertias.
An even more informative visualization is obtained when you plot every
instance’s silhouette coefficient, sorted by the cluster they are assigned to
```
and by the value of the coefficient. This is called a silhouette diagram (see
```
```
Figure 9-10). Each diagram contains one knife shape per cluster. The
```
shape’s height indicates the number of instances in the cluster, and its width
represents the sorted silhouette coefficients of the instances in the cluster
```
(wider is better). The dashed line indicates the mean silhouette coefficient.
```
Figure 9-10. Analyzing the silhouette diagrams for various values of k
The vertical dashed lines represent the silhouette score for each number of
clusters. When most of the instances in a cluster have a lower coefficient
```
than this score (i.e., if many of the instances stop short of the dashed line,
```
```
ending to the left of it), then the cluster is rather bad since this means its
```
instances are much too close to other clusters. We can see that when k = 3
or 6, we get bad clusters. But when k = 4 or 5, the clusters look pretty good:
most instances extend beyond the dashed line, to the right and closer to 1.0.
```
When k = 4, the cluster at index 1 (the second from the bottom) is rather
```
big. When k = 5, all clusters have similar sizes. So, even though the overall
silhouette score from k = 4 is slightly greater than for k = 5, it seems like a
good idea to use k = 5 to get clusters of similar sizes.
Limits of K-Means
Despite its many merits, most notably being fast and scalable, K-Means is
not perfect. As we saw, it is necessary to run the algorithm several times to
avoid suboptimal solutions, plus you need to specify the number of clusters,
which can be quite a hassle. Moreover, K-Means does not behave very well
when the clusters have varying sizes, different densities, or nonspherical
shapes. For example, Figure 9-11 shows how K-Means clusters a dataset
containing three ellipsoidal clusters of different dimensions, densities, and
orientations.
Figure 9-11. K-Means fails to cluster these ellipsoidal blobs properly
As you can see, neither of these solutions is any good. The solution on the
left is better, but it still chops off 25% of the middle cluster and assigns it to
the cluster on the right. The solution on the right is just terrible, even
though its inertia is lower. So, depending on the data, different clustering
algorithms may perform better. On these types of elliptical clusters,
Gaussian mixture models work great.
TIP
It is important to scale the input features before you run K-Means, or the clusters may
be very stretched and K-Means will perform poorly. Scaling the features does not
guarantee that all the clusters will be nice and spherical, but it generally helps K-Means.
Now let’s look at a few ways we can benefit from clustering. We will use
K-Means, but feel free to experiment with other clustering algorithms.
Using Clustering for Image Segmentation
Image segmentation is the task of partitioning an image into multiple
segments. In semantic segmentation, all pixels that are part of the same
object type get assigned to the same segment. For example, in a self-driving
car’s vision system, all pixels that are part of a pedestrian’s image might be
```
assigned to the “pedestrian” segment (there would be one segment
```
```
containing all the pedestrians). In instance segmentation, all pixels that are
```
part of the same individual object are assigned to the same segment. In this
case there would be a different segment for each pedestrian. The state of the
art in semantic or instance segmentation today is achieved using complex
```
architectures based on convolutional neural networks (see Chapter 14).
```
Here, we are going to do something much simpler: color segmentation. We
will simply assign pixels to the same segment if they have a similar color.
In some applications, this may be sufficient. For example, if you want to
analyze satellite images to measure how much total forest area there is in a
region, color segmentation may be just fine.
```
Let’s use the Pillow package (Python Image Library) to load the
```
```
ladybug.png image (see the upper-left image in Figure 9-12), assuming it’s
```
located at filepath:
>>> import PIL
```
>>> image = np.asarray(PIL.Image.open(filepath))
```
>>> image.shape
```
(533, 800, 3)
```
The image is represented as a 3D array. The first dimension’s size is the
```
height; the second is the width; and the third is the number of color
```
```
channels, in this case red, green, and blue (RGB). In other words, for each
```
pixel there is a 3D vector containing the intensities of red, green, and blue,
as unsigned 8-bit integers between 0 and 255. Some images may have fewer
```
channels, such as grayscale images (one channel). And some images may
```
have more channels, such as images with an additional alpha channel for
transparency, or satellite images which often contain channels for many
```
light frequencies (e.g., infrared).
```
The following code reshapes the array to get a long list of RGB colors, then
it clusters these colors using K-Means with 8 clusters, and it creates a
segmented_img array containing the nearest cluster center for each pixel
```
(i.e., the mean color of each pixel’s cluster), and lastly it reshapes this array
```
to the original image shape. The third line uses advanced NumPy indexing:
for example, if the first 10 labels in kmeans_.labels_ are equal to 1,
then the first 10 colors in segmented_img are equal to
kmeans.cluster_centers_[1].
```
X = image.reshape(-1, 3)
```
```
kmeans = KMeans(n_clusters=8, random_state=42).fit(X)
```
```
segmented_img = kmeans.cluster_centers_[kmeans.labels_]
```
```
segmented_img = segmented_img.reshape(image.shape)
```
This outputs the image shown in the upper right of Figure 9-12. You can
experiment with various numbers of clusters, as shown in the figure. When
you use fewer than eight clusters, notice that the ladybug’s flashy red color
fails to get a cluster of its own: it gets merged with colors from the
environment. This is because K-Means prefers clusters of similar sizes. The
ladybug is small—much smaller than the rest of the image—so even though
its color is flashy, K-Means fails to dedicate a cluster to it.
Figure 9-12. Image segmentation using K-Means with various numbers of color clusters
That wasn’t too hard, was it? Now let’s look at another application of
clustering.
Using Clustering for Semi-Supervised Learning
Another use case for clustering is in semi-supervised learning, when we
have plenty of unlabeled instances and very few labeled instances. In this
section, we’ll use the digits dataset, which is a simple MNIST-like dataset
containing 1,797 grayscale 8 × 8 images representing the digits 0 to 9. First,
```
let’s load and split the dataset (it’s already shuffled):
```
from sklearn.datasets import load_digits
```
X_digits, y_digits = load_digits(return_X_y=True)
```
X_train, y_train = X_digits[:1400], y_digits[:1400]
X_test, y_test = X_digits[1400:], y_digits[1400:]
We will pretend we only have labels for 50 instances. To get a baseline
performance, let’s train a Logistic Regression model on these 50 labeled
```
instances:
```
from sklearn.linear_model import LogisticRegression
```
n_labeled = 50
```
```
log_reg = LogisticRegression(max_iter=10_000)
```
```
log_reg.fit(X_train[:n_labeled], y_train[:n_labeled])
```
```
Let’s measure the accuracy of this model on the test set (note that the test
```
```
set must be labeled):
```
```
>>> log_reg.score(X_test, y_test)
```
0.7481108312342569
The model’s accuracy is just 74.8%, while it would have reached 90.7% if
we had trained it on the full training set. Let’s see how we can do better.
First, let’s cluster the training set into 50 clusters. Then for each cluster,
let’s find the image closest to the centroid. Let’s call these images the
representative images:
```
k = 50
```
```
kmeans = KMeans(n_clusters=k, random_state=42)
```
```
X_digits_dist = kmeans.fit_transform(X_train)
```
```
representative_digit_idx = np.argmin(X_digits_dist, axis=0)
```
```
X_representative_digits = X_train[representative_digit_idx]
```
Figure 9-13 shows these 50 representative images.
```
Figure 9-13. Fifty representative digit images (one per cluster)
```
Let’s look at each image and manually label it:
```
y_representative_digits = np.array([1, 3, 6, 0, 7, 9, 2, ..., 5,
```
```
1, 9, 9, 3, 7])
```
Now we have a dataset with just 50 labeled instances, but instead of being
random instances, each of them is a representative image of its cluster. Let’s
see if the performance is any better:
```
>>> log_reg = LogisticRegression(max_iter=10_000)
```
```
>>> log_reg.fit(X_representative_digits, y_representative_digits)
```
```
>>> log_reg.score(X_test, y_test)
```
0.8488664987405542
Wow! We jumped from 74.8% accuracy to 84.9%, although we are still
only training the model on 50 instances. Since it is often costly and painful
to label instances, especially when it has to be done manually by experts, it
is a good idea to label representative instances rather than just random
instances.
But perhaps we can go one step further: what if we propagated the labels to
all the other instances in the same cluster? This is called label propagation:
```
y_train_propagated = np.empty(len(X_train), dtype=np.int64)
```
```
for i in range(k):
```
y_train_propagated[kmeans.labels_ == i] =
y_representative_digits[i]
Now let’s train the model again and look at its performance:
```
>>> log_reg = LogisticRegression()
```
```
>>> log_reg.fit(X_train, y_train_propagated)
```
```
>>> log_reg.score(X_test, y_test)
```
0.8942065491183879
We got another significant accuracy boost! Let’s see if we can do even
better by ignoring the 1% instances that are farthest from their cluster
```
center: this should eliminate some outliers. The following code first
```
computes the distance from each instance to its closest cluster center, then
for each cluster it sets the 1% largest distances to –1. Lastly, it creates a set
without these instances marked with a –1 distance.
```
percentile_closest = 99
```
```
X_cluster_dist = X_digits_dist[np.arange(len(X_train)),
```
kmeans.labels_]
```
for i in range(k):
```
```
in_cluster = (kmeans.labels_ == i)
```
```
cluster_dist = X_cluster_dist[in_cluster]
```
```
cutoff_distance = np.percentile(cluster_dist,
```
```
percentile_closest)
```
```
above_cutoff = (X_cluster_dist > cutoff_distance)
```
X_cluster_dist[in_cluster & above_cutoff] = -1
```
partially_propagated = (X_cluster_dist != -1)
```
```
X_train_partially_propagated = X_train[partially_propagated]
```
```
y_train_partially_propagated =
```
y_train_propagated[partially_propagated]
Now let’s train the model again on this partially propagated dataset and see
what accuracy we get:
```
>>> log_reg = LogisticRegression(max_iter=10_000)
```
```
>>> log_reg.fit(X_train_partially_propagated,
```
```
y_train_partially_propagated)
```
```
>>> log_reg.score(X_test, y_test)
```
0.9093198992443325
```
Nice! With just 50 labeled instances (only 5 examples per class on
```
```
average!), we got 90.9% accuracy, which is actually very slightly higher
```
```
than the performance we got on the fully labeled digits dataset (90.7%).
```
This is partly thanks to the fact that we dropped some outliers, and partly
because the propagated labels are actually pretty good—their accuracy is
about 97.5%, as the following code shows:
```
>>> (y_train_partially_propagated ==
```
```
y_train[partially_propagated]).mean()
```
0.9755555555555555
TIP
Scikit-Learn also offers two classes that can propagate labels automatically:
LabelSpreading and LabelPropagation in the
sklearn.semi_supervised package. They both construct a similarity matrix
between all the instances, and iteratively propagate labels from labeled instances to
similar unlabeled instances. There’s also a very different class called
```
SelfTrainingClassifier in the same package: you give it a base classifier (such
```
```
as a RandomForestClassifier) and it trains it on the labeled instances, then uses
```
it to predict labels for the unlabeled samples. It then updates the training set with the
labels it is most confident about. Lastly, it repeats this process of training and labeling
until it cannot add labels anymore. These techniques are not magic bullets, but they can
occasionally give your model a little boost.
ACTIVE LEARNING
To continue improving your model and your training set, the next step
could be to do a few rounds of active learning, which is when a human
expert interacts with the learning algorithm, providing labels for
specific instances when the algorithm requests them. There are many
different strategies for active learning, but one of the most common
ones is called uncertainty sampling. Here is how it works:
1. The model is trained on the labeled instances gathered so far,
and this model is used to make predictions on all the unlabeled
instances.
2. The instances for which the model is most uncertain (i.e., when
```
its estimated probability is lowest) are given to the expert for
```
labeling.
3. You iterate this process until the performance improvement
stops being worth the labeling effort.
Other active learning strategies include labeling the instances that
would result in the largest model change, or the largest drop in the
model’s validation error, or the instances that different models disagree
```
on (e.g., an SVM and a Random Forest).
```
Before we move on to Gaussian mixture models, let’s take a look at
DBSCAN, another popular clustering algorithm that illustrates a very
different approach based on local density estimation. This approach allows
the algorithm to identify clusters of arbitrary shapes.
DBSCAN
This algorithm defines clusters as continuous regions of high density. Here
is how it works:
For each instance, the algorithm counts how many instances are
```
located within a small distance ε (epsilon) from it. This region is
```
called the instance’s ε-neighborhood.
If an instance has at least min_samples instances in its ε-
```
neighborhood (including itself), then it is considered a core
```
instance. In other words, core instances are those that are located in
dense regions.
All instances in the neighborhood of a core instance belong to the
```
same cluster. This neighborhood may include other core instances;
```
therefore, a long sequence of neighboring core instances forms a
single cluster.
Any instance that is not a core instance and does not have one in its
neighborhood is considered an anomaly.
This algorithm works well if all the clusters are well separated by low-
density regions. The DBSCAN class in Scikit-Learn is as simple to use as
you might expect. Let’s test it on the moons dataset, introduced in
Chapter 6:
from sklearn.cluster import DBSCAN
from sklearn.datasets import make_moons
```
X, y = make_moons(n_samples=1000, noise=0.05)
```
```
dbscan = DBSCAN(eps=0.05, min_samples=5)
```
```
dbscan.fit(X)
```
The labels of all the instances are now available in the labels_ instance
```
variable:
```
>>> dbscan.labels_
```
array([ 0, 2, -1, -1, 1, 0, 0, 0, 2, 5, [...], 3, 3, 4,
```
```
2, 6, 3])
```
Notice that some instances have a cluster index equal to –1, which means
that they are considered as anomalies by the algorithm. The indices of the
core instances are available in the core_sample_indices_ instance
variable, and the core instances themselves are available in the
components_ instance variable:
>>> dbscan.core_sample_indices_
```
array([ 0, 4, 5, 6, 7, 8, 10, 11, [...], 993, 995,
```
```
997, 998, 999])
```
>>> dbscan.components_
```
array([[-0.02137124, 0.40618608],
```
[-0.84192557, 0.53058695],
[...],
```
[ 0.79419406, 0.60777171]])
```
This clustering is represented in the lefthand plot of Figure 9-14. As you
can see, it identified quite a lot of anomalies, plus seven different clusters.
How disappointing! Fortunately, if we widen each instance’s neighborhood
by increasing eps to 0.2, we get the clustering on the right, which looks
perfect. Let’s continue with this model.
Figure 9-14. DBSCAN clustering using two different neighborhood radiuses
```
Surprisingly, the DBSCAN class does not have a predict() method,
```
```
although it has a fit_predict() method. In other words, it cannot
```
predict which cluster a new instance belongs to. This decision was made
because different classification algorithms can be better for different tasks,
so the authors decided to let the user choose which one to use. Moreover,
it’s not hard to implement. For example, let’s train a
```
KNeighborsClassifier:
```
from sklearn.neighbors import KNeighborsClassifier
```
knn = KNeighborsClassifier(n_neighbors=50)
```
```
knn.fit(dbscan.components_,
```
```
dbscan.labels_[dbscan.core_sample_indices_])
```
Now, given a few new instances, we can predict which cluster they most
likely belong to and even estimate a probability for each cluster:
```
>>> X_new = np.array([[-0.5, 0], [0, 0.5], [1, -0.1], [2, 1]])
```
```
>>> knn.predict(X_new)
```
```
array([1, 0, 1, 0])
```
```
>>> knn.predict_proba(X_new)
```
```
array([[0.18, 0.82],
```
[1. , 0. ],
[0.12, 0.88],
```
[1. , 0. ]])
```
Note that we only trained the classifier on the core instances, but we could
also have chosen to train it on all the instances, or all but the anomalies: this
choice depends on the final task.
```
The decision boundary is represented in Figure 9-15 (the crosses represent
```
```
the four instances in X_new). Notice that since there is no anomaly in the
```
training set, the classifier always chooses a cluster, even when that cluster is
far away. It is fairly straightforward to introduce a maximum distance, in
which case the two instances that are far away from both clusters are
```
classified as anomalies. To do this, use the kneighbors() method of the
```
KNeighborsClassifier. Given a set of instances, it returns the
```
distances and the indices of the k nearest neighbors in the training set (two
```
```
matrices, each with k columns):
```
```
>>> y_dist, y_pred_idx = knn.kneighbors(X_new, n_neighbors=1)
```
>>> y_pred = dbscan.labels_[dbscan.core_sample_indices_]
[y_pred_idx]
>>> y_pred[y_dist > 0.2] = -1
```
>>> y_pred.ravel()
```
```
array([-1, 0, 1, -1])
```
Figure 9-15. Decision boundary between two clusters
In short, DBSCAN is a very simple yet powerful algorithm capable of
identifying any number of clusters of any shape. It is robust to outliers, and
```
it has just two hyperparameters (eps and min_samples). If the density
```
varies significantly across the clusters, or if there’s no sufficiently low-
density region around some clusters, DBSCAN can struggle to capture all
the clusters properly. Moreover, its computational complexity is roughly
```
ݓ m_ n), so it does not scale well to large datasets.
```
TIP
```
You may also want to try Hierarchical DBSCAN (HDBSCAN), which is implemented in
```
the scikit-learn-contrib project.
Other Clustering Algorithms
Scikit-Learn implements several more clustering algorithms that you should
take a look at. I cannot cover them all in detail here, but here is a brief
```
overview:
```
Agglomerative clustering
A hierarchy of clusters is built from the bottom up. Think of many tiny
bubbles floating on water and gradually attaching to each other until
there’s one big group of bubbles. Similarly, at each iteration,
```
agglomerative clustering connects the nearest pair of clusters (starting
```
```
with individual instances). If you drew a tree with a branch for every
```
pair of clusters that merged, you would get a binary tree of clusters,
where the leaves are the individual instances. This approach can capture
clusters of various shapes, it also produces a flexible and informative
cluster tree instead of forcing you to choose a particular cluster scale,
and it can be used with any pairwise distance. It can scale nicely to large
numbers of instances if you provide a connectivity matrix, which is a
sparse m × m matrix that indicates which pairs of instances are
```
neighbors (e.g., returned by
```
```
sklearn.neighbors.kneighbors_graph()). Without a
```
connectivity matrix, the algorithm does not scale well to large datasets.
BIRCH
```
The BIRCH (Balanced Iterative Reducing and Clustering using
```
```
Hierarchies) algorithm was designed specifically for very large datasets,
```
2
and it can be faster than batch K-Means, with similar results, as long as
```
the number of features is not too large (<20). During training, it builds a
```
tree structure containing just enough information to quickly assign each
new instance to a cluster, without having to store all the instances in the
```
tree: this approach allows it to use limited memory, while handling huge
```
datasets.
Mean-Shift
```
This algorithm starts by placing a circle centered on each instance; then
```
for each circle it computes the mean of all the instances located within
it, and it shifts the circle so that it is centered on the mean. Next, it
```
iterates this mean-shifting step until all the circles stop moving (i.e.,
```
```
until each of them is centered on the mean of the instances it contains).
```
Mean-Shift shifts the circles in the direction of higher density, until each
of them has found a local density maximum. Finally, all the instances
```
whose circles have settled in the same place (or close enough) are
```
assigned to the same cluster. Mean-Shift has some of the same features
as DBSCAN, like how it can find any number of clusters of any shape,
```
it has very few hyperparameters (just one—the radius of the circles,
```
```
called the bandwidth), and it relies on local density estimation. But
```
unlike DBSCAN, Mean-Shift tends to chop clusters into pieces when
they have internal density variations. Unfortunately, its computational
```
complexity is ݓ m_ n), so it is not suited for large datasets.
```
Affinity propagation
In this algorithm, instances repeatedly exchange messages between one
```
another until every instance has elected another instance (or itself) to
```
represent it. These elected instances are called exemplars. Each
exemplar and all the instances that elected it form one cluster. In real-
life politics, you typically want to vote for a candidate whose opinions
are similar to yours, but you also want them to win the election, so you
might choose a candidate you don’t fully agree with, but who is more
popular. You typically evaluate popularity through polls. Affinity
propagation works in a similar way, and it tends to choose exemplars
2
located near the center of clusters, similar to K-Means. But unlike with
K-Means, you don’t have to pick a number of clusters ahead of time: it
is determined during training. Moreover, affinity propagation can deal
nicely with clusters of different sizes. Sadly, this algorithm has a
```
computational complexity of ݓ m_ ), so it is not suited for large
```
datasets.
Spectral clustering
This algorithm takes a similarity matrix between the instances and
```
creates a low-dimensional embedding from it (i.e., it reduces the
```
```
matrix’s dimensionality), then it uses another clustering algorithm in
```
```
this low-dimensional space (Scikit-Learn’s implementation uses K-
```
```
Means). Spectral clustering can capture complex cluster structures, and
```
```
it can also be used to cut graphs (e.g., to identify clusters of friends on a
```
```
social network). It does not scale well to large numbers of instances, and
```
it does not behave well when the clusters have very different sizes.
Now let’s dive into Gaussian mixture models, which can be used for density
estimation, clustering, and anomaly detection.
Gaussian Mixtures
```
A Gaussian mixture model (GMM) is a probabilistic model that assumes
```
that the instances were generated from a mixture of several Gaussian
distributions whose parameters are unknown. All the instances generated
from a single Gaussian distribution form a cluster that typically looks like
an ellipsoid. Each cluster can have a different ellipsoidal shape, size,
density, and orientation, just like in Figure 9-11. When you observe an
instance, you know it was generated from one of the Gaussian distributions,
but you are not told which one, and you do not know what the parameters
of these distributions are.
There are several GMM variants. In the simplest variant, implemented in
the GaussianMixture class, you must know in advance the number k of
2
Gaussian distributions. The dataset X is assumed to have been generated
through the following probabilistic process:
For each instance, a cluster is picked randomly from among k
clusters. The probability of choosing the j cluster is the cluster’s
weight ϕ . The index of the cluster chosen for the i instance is
noted z .
```
If the i instance was assigned to the j cluster (i.e., z = j), then
```
the location x of this instance is sampled randomly from the
Gaussian distribution with mean μ and covariance matrix Σ .
```
This is noted x ݒ ~騪μ , *Σ ).
```
So, what can you do with such a model? Well, given the dataset X, you
typically want to start by estimating the weights ϕ and all the distribution
parameters μ to μ and Σ to Σ . Scikit-Learn’s GaussianMixture
class makes this super easy:
from sklearn.mixture import GaussianMixture
```
gm = GaussianMixture(n_components=3, n_init=10)
```
```
gm.fit(X)
```
Let’s look at the parameters that the algorithm estimated:
>>> gm.weights_
```
array([0.39025715, 0.40007391, 0.20966893])
```
>>> gm.means_
```
array([[ 0.05131611, 0.07521837],
```
[-1.40763156, 1.42708225],
```
[ 3.39893794, 1.05928897]])
```
>>> gm.covariances_
```
array([[[ 0.68799922, 0.79606357],
```
[ 0.79606357, 1.21236106]],
[[ 0.63479409, 0.72970799],
[ 0.72970799, 1.1610351 ]],
[[ 1.14833585, -0.03256179],
```
[-0.03256179, 0.95490931]]])
```
th
```
(j) 6 th
```
```
(i)
```
```
th th (i)
```
```
(i)
```
```
(j) (j)
```
```
(i) (j) (j)
```
```
(1) (k) (1) (k)
```
Great, it worked fine! Indeed, two of the three clusters were generated with
500 instances each, while the third cluster only contains 250 instances. So
the true cluster weights are 0.4, 0.4, and 0.2, respectively, and that’s roughly
what the algorithm found. Similarly, the true means and covariance
matrices are quite close to those found by the algorithm. But how? This
```
class relies on the Expectation-Maximization (EM) algorithm, which has
```
many similarities with the K-Means algorithm: it also initializes the cluster
parameters randomly, then it repeats two steps until convergence, first
```
assigning instances to clusters (this is called the expectation step) and then
```
```
updating the clusters (this is called the maximization step). Sounds familiar,
```
right? In the context of clustering, you can think of EM as a generalization
```
of K-Means that not only finds the cluster centers (μ to μ ), but also
```
```
their size, shape, and orientation (Σ to Σ ), as well as their relative
```
```
weights (ϕ to ϕ ). Unlike K-Means, though, EM uses soft cluster
```
assignments, not hard assignments. For each instance, during the
expectation step, the algorithm estimates the probability that it belongs to
```
each cluster (based on the current cluster parameters). Then, during the
```
maximization step, each cluster is updated using all the instances in the
dataset, with each instance weighted by the estimated probability that it
belongs to that cluster. These probabilities are called the responsibilities of
the clusters for the instances. During the maximization step, each cluster’s
update will mostly be impacted by the instances it is most responsible for.
WARNING
Unfortunately, just like K-Means, EM can end up converging to poor solutions, so it
needs to be run several times, keeping only the best solution. This is why we set
n_init to 10. Be careful: by default n_init is set to 1.
You can check whether or not the algorithm converged and how many
iterations it took:
>>> gm.converged_
True
```
(1) (k)
```
```
(1) (k)
```
```
(1) (k)
```
>>> gm.n_iter_
4
Now that you have an estimate of the location, size, shape, orientation, and
relative weight of each cluster, the model can easily assign each instance to
```
the most likely cluster (hard clustering) or estimate the probability that it
```
```
belongs to a particular cluster (soft clustering). Just use the predict()
```
```
method for hard clustering, or the predict_proba() method for soft
```
```
clustering:
```
```
>>> gm.predict(X)
```
```
array([0, 0, 1, ..., 2, 2, 2])
```
```
>>> gm.predict_proba(X).round(3)
```
```
array([[0.977, 0. , 0.023],
```
[0.983, 0.001, 0.016],
[0. , 1. , 0. ],
...,
[0. , 0. , 1. ],
[0. , 0. , 1. ],
```
[0. , 0. , 1. ]])
```
A Gaussian mixture model is a generative model, meaning you can sample
```
new instances from it (note that they are ordered by cluster index):
```
```
>>> X_new, y_new = gm.sample(6)
```
>>> X_new
```
array([[-0.86944074, -0.32767626],
```
[ 0.29836051, 0.28297011],
[-2.8014927 , -0.09047309],
[ 3.98203732, 1.49951491],
[ 3.81677148, 0.53095244],
```
[ 2.84104923, -0.73858639]])
```
>>> y_new
```
array([0, 0, 1, 2, 2, 2])
```
It is also possible to estimate the density of the model at any given location.
```
This is achieved using the score_samples() method: for each instance
```
it is given, this method estimates the log of the probability density function
```
(PDF) at that location. The greater the score, the higher the density:
```
```
>>> gm.score_samples(X).round(2)
```
```
array([-2.61, -3.57, -3.33, ..., -3.51, -4.4 , -3.81])
```
If you compute the exponential of these scores, you get the value of the
PDF at the location of the given instances. These are not probabilities, but
probability densities: they can take on any positive value, not just a value
between 0 and 1. To estimate the probability that an instance will fall within
```
a particular region, you would have to integrate the PDF over that region (if
```
you do so over the entire space of possible instance locations, the result will
```
be 1).
```
```
Figure 9-16 shows the cluster means, the decision boundaries (dashed
```
```
lines), and the density contours of this model.
```
Figure 9-16. Cluster means, decision boundaries, and density contours of a trained Gaussian mixture
model
Nice! The algorithm clearly found an excellent solution. Of course, we
made its task easy by generating the data using a set of 2D Gaussian
```
distributions (unfortunately, real-life data is not always so Gaussian and
```
```
low-dimensional). We also gave the algorithm the correct number of
```
clusters. When there are many dimensions, or many clusters, or few
instances, EM can struggle to converge to the optimal solution. You might
need to reduce the difficulty of the task by limiting the number of
parameters that the algorithm has to learn. One way to do this is to limit the
range of shapes and orientations that the clusters can have. This can be
achieved by imposing constraints on the covariance matrices. To do this, set
the covariance_type hyperparameter to one of the following values:
"spherical"
All clusters must be spherical, but they can have different diameters
```
(i.e., different variances).
```
"diag"
Clusters can take on any ellipsoidal shape of any size, but the ellipsoid’s
```
axes must be parallel to the coordinate axes (i.e., the covariance
```
```
matrices must be diagonal).
```
"tied"
All clusters must have the same ellipsoidal shape, size, and orientation
```
(i.e., all clusters share the same covariance matrix).
```
By default, covariance_type is equal to "full", which means that
```
each cluster can take on any shape, size, and orientation (it has its own
```
```
unconstrained covariance matrix). Figure 9-17 plots the solutions found by
```
the EM algorithm when covariance_type is set to "tied" or
"spherical.”
```
Figure 9-17. Gaussian mixtures for tied clusters (left) and spherical clusters (right)
```
NOTE
The computational complexity of training a GaussianMixture model depends on
the number of instances m, the number of dimensions n, the number of clusters k, and
the constraints on the covariance matrices. If covariance_type is "spherical or
```
"diag", it is ݓ kmn_), assuming the data has a clustering structure. If
```
```
covariance_type is "tied" or "full", it is ݓ kmn_ + kn ), so it will not
```
scale to large numbers of features.
2 3
Gaussian mixture models can also be used for anomaly detection. Let’s see
how.
Anomaly Detection Using Gaussian Mixtures
```
Anomaly detection (also called outlier detection) is the task of detecting
```
instances that deviate strongly from the norm. These instances are called
anomalies, or outliers, while the normal instances are called inliers.
Anomaly detection is useful in a wide variety of applications, such as fraud
detection, detecting defective products in manufacturing, or removing
outliers from a dataset before training another model, which can
significantly improve the performance of the resulting model.
Using a Gaussian mixture model for anomaly detection is quite simple: any
instance located in a low-density region can be considered an anomaly. You
must define what density threshold you want to use. For example, in a
manufacturing company that tries to detect defective products, the ratio of
defective products is usually well known. Say it is equal to 2%. You then
set the density threshold to be the value that results in having 2% of the
instances located in areas below that threshold density. If you notice that
```
you get too many false positives (i.e., perfectly good products that are
```
```
flagged as defective), you can lower the threshold. Conversely, if you have
```
```
too many false negatives (i.e., defective products that the system does not
```
```
flag as defective), you can increase the threshold. This is the usual
```
```
precision/recall trade-off (see Chapter 3). Here is how you would identify
```
```
the outliers using the fourth percentile lowest density as the threshold (i.e.,
```
```
approximately 4% of the instances will be flagged as anomalies):
```
```
densities = gm.score_samples(X)
```
```
density_threshold = np.percentile(densities, 2)
```
```
anomalies = X[densities < density_threshold]
```
Figure 9-18 represents these anomalies as stars.
Figure 9-18. Anomaly detection using a Gaussian mixture model
A closely related task is novelty detection: it differs from anomaly detection
in that the algorithm is assumed to be trained on a “clean” dataset,
uncontaminated by outliers, whereas anomaly detection does not make this
assumption. Indeed, outlier detection is often used to clean up a dataset.
TIP
Gaussian mixture models try to fit all the data, including the outliers, so if you have too
many of them, this will bias the model’s view of “normality,” and some outliers may
wrongly be considered as normal. If this happens, you can try to fit the model once, use
it to detect and remove the most extreme outliers, then fit the model again on the
cleaned-up dataset. Another approach is to use robust covariance estimation methods
```
(see the EllipticEnvelope class).
```
Just like K-Means, the GaussianMixture algorithm requires you to
specify the number of clusters. So, how can you find it?
Selecting the Number of Clusters
With K-Means, you could use the inertia or the silhouette score to select the
appropriate number of clusters. But with Gaussian mixtures, it is not
possible to use these metrics because they are not reliable when the clusters
are not spherical or have different sizes. Instead, you can try to find the
model that minimizes a theoretical information criterion, such as the
```
Bayesian information criterion (BIC) or the Akaike information criterion
```
```
(AIC), defined in Equation 9-1.
```
```
Equation 9-1. Bayesian information criterion (BIC) and Akaike information criterion (AIC)
```
In these equations:
```
BIC = log (m)p − 2 log ( ˆL )
```
```
AIC = 2p − 2 log ( ˆL )
```
m is the number of instances, as always.
p is the number of parameters learned by the model.
ˆL is the maximized value of the likelihood function of the model.
Both the BIC and the AIC penalize models that have more parameters to
```
learn (e.g., more clusters) and reward models that fit the data well. They
```
often end up selecting the same model. When they differ, the model
```
selected by the BIC tends to be simpler (fewer parameters) than the one
```
```
selected by the AIC, but tends to not fit the data quite as well (this is
```
```
especially true for larger datasets).
```
LIKELIHOOD FUNCTION
The terms “probability” and “likelihood” are often used interchangeably
in everyday language, but they have very different meanings in
statistics. Given a statistical model with some parameters θ, the word
“probability” is used to describe how plausible a future outcome x is
```
(knowing the parameter values θ), while the word “likelihood” is used
```
to describe how plausible a particular set of parameter values θ are,
after the outcome x is known.
Consider a 1D mixture model of two Gaussian distributions centered at
–4 and +1. For simplicity, this toy model has a single parameter θ that
controls the standard deviations of both distributions. The top-left
```
contour plot in Figure 9-19 shows the entire model f(x; θ) as a function
```
of both x and θ. To estimate the probability distribution of a future
outcome x, you need to set the model parameter θ. For example, if you
```
set θ to 1.3 (the horizontal line), you get the probability density function
```
```
f(x; θ=1.3) shown in the lower-left plot. Say you want to estimate the
```
probability that x will fall between –2 and +2. You must calculate the
```
integral of the PDF on this range (i.e., the surface of the shaded region).
```
But what if you don’t know θ, and instead if you have observed a single
```
instance x=2.5 (the vertical line in the upper-left plot)? In this case, you
```
```
get the likelihood function ℒ(θ|x=2.5)=f(x=2.5; θ), represented in the
```
upper-right plot.
```
Figure 9-19. A model’s parametric function (top left), and some derived functions: a PDF
```
```
(lower left), a likelihood function (top right), and a log likelihood function (lower right)
```
```
In short, the PDF is a function of x (with θ fixed), while the likelihood
```
```
function is a function of θ (with x fixed). It is important to understand
```
that the likelihood function is not a probability distribution: if you
integrate a probability distribution over all possible values of x, you
```
always get 1; but if you integrate the likelihood function over all
```
possible values of θ, the result can be any positive value.
Given a dataset X, a common task is to try to estimate the most likely
values for the model parameters. To do this, you must find the values
that maximize the likelihood function, given X. In this example, if you
have observed a single instance x=2.5, the maximum likelihood estimate
```
(MLE) of θ is ˆ𝛉=1.5. If a prior probability distribution g over θ exists, it
```
```
is possible to take it into account by maximizing ℒ(θ|x)g(θ) rather than
```
```
just maximizing ℒ(θ|x). This is called maximum a-posteriori (MAP)
```
estimation. Since MAP constrains the parameter values, you can think
of it as a regularized version of MLE.
Notice that maximizing the likelihood function is equivalent to
```
maximizing its logarithm (represented in the lower-righthand plot in
```
```
Figure 9-19). Indeed the logarithm is a strictly increasing function, so if
```
θ maximizes the log likelihood, it also maximizes the likelihood. It
turns out that it is generally easier to maximize the log likelihood. For
example, if you observed several independent instances x to x , you
would need to find the value of θ that maximizes the product of the
individual likelihood functions. But it is equivalent, and much simpler,
```
to maximize the sum (not the product) of the log likelihood functions,
```
thanks to the magic of the logarithm which converts products into sums:
```
log(ab)=log(a)+log(b).
```
Once you have estimated ˆ𝛉, the value of θ that maximizes the
```
likelihood function, then you are ready to compute ˆL =L (ˆ𝛉, X),
```
```
which is the value used to compute the AIC and BIC; you can think of
```
it as a measure of how well the model fits the data.
```
(1) (m)
```
```
To compute the BIC and AIC, call the bic() and aic() methods:
```
```
>>> gm.bic(X)
```
8189.747000497186
```
>>> gm.aic(X)
```
8102.521720382148
Figure 9-20 shows the BIC for different numbers of clusters k. As you can
see, both the BIC and the AIC are lowest when k=3, so it is most likely the
best choice.
Figure 9-20. AIC and BIC for different numbers of clusters k
Bayesian Gaussian Mixture Models
Rather than manually searching for the optimal number of clusters, you can
use the BayesianGaussianMixture class, which is capable of giving
```
weights equal (or close) to zero to unnecessary clusters. Set the number of
```
clusters n_components to a value that you have good reason to believe is
```
greater than the optimal number of clusters (this assumes some minimal
```
```
knowledge about the problem at hand), and the algorithm will eliminate the
```
unnecessary clusters automatically. For example, let’s set the number of
clusters to 10 and see what happens:
>>> from sklearn.mixture import BayesianGaussianMixture
```
>>> bgm = BayesianGaussianMixture(n_components=10, n_init=10,
```
```
random_state=42)
```
```
>>> bgm.fit(X)
```
```
>>> bgm.weights_.round(2)
```
```
array([0.4 , 0.21, 0.4 , 0. , 0. , 0. , 0. , 0. , 0. , 0.
```
```
])
```
```
Perfect: the algorithm automatically detected that only three clusters are
```
needed, and the resulting clusters are almost identical to the ones in
Figure 9-16.
A final note about Gaussian mixture models: although they work great on
clusters with ellipsoidal shapes, they don’t do so well with clusters of very
different shapes. For example, let’s see what happens if we use a Bayesian
```
Gaussian mixture model to cluster the moons dataset (see Figure 9-21).
```
Figure 9-21. Fitting a Gaussian mixture to nonellipsoidal clusters
Oops! The algorithm desperately searched for ellipsoids, so it found eight
different clusters instead of two. The density estimation is not too bad, so
this model could perhaps be used for anomaly detection, but it failed to
identify the two moons. To conclude this chapter, let’s take a quick look at a
few algorithms capable of dealing with arbitrarily shaped clusters.
Other Algorithms for Anomaly and Novelty Detection
Scikit-Learn implements other algorithms dedicated to anomaly detection
or novelty detection:
```
Fast-MCD (minimum covariance determinant)
```
Implemented by the EllipticEnvelope class, this algorithm is
useful for outlier detection, in particular to clean up a dataset. It
```
assumes that the normal instances (inliers) are generated from a single
```
```
Gaussian distribution (not a mixture). It also assumes that the dataset is
```
contaminated with outliers that were not generated from this Gaussian
distribution. When the algorithm estimates the parameters of the
```
Gaussian distribution (i.e., the shape of the elliptic envelope around the
```
```
inliers), it is careful to ignore the instances that are most likely outliers.
```
This technique gives a better estimation of the elliptic envelope and thus
makes the algorithm better at identifying the outliers.
Isolation Forest
This is an efficient algorithm for outlier detection, especially in high-
dimensional datasets. The algorithm builds a Random Forest in which
each Decision Tree is grown randomly: at each node, it picks a feature
```
randomly, then it picks a random threshold value (between the min and
```
```
max values) to split the dataset in two. The dataset gradually gets
```
chopped into pieces this way, until all instances end up isolated from the
other instances. Anomalies are usually far from other instances, so on
```
average (across all the Decision Trees) they tend to get isolated in fewer
```
steps than normal instances.
```
Local Outlier Factor (LOF)
```
This algorithm is also good for outlier detection. It compares the density
of instances around a given instance to the density around its neighbors.
An anomaly is often more isolated than its k nearest neighbors.
One-class SVM
This algorithm is better suited for novelty detection. Recall that a
```
kernelized SVM classifier separates two classes by first (implicitly)
```
mapping all the instances to a high-dimensional space, then separating
the two classes using a linear SVM classifier within this high-
```
dimensional space (see Chapter 5). Since we just have one class of
```
instances, the one-class SVM algorithm instead tries to separate the
instances in high-dimensional space from the origin. In the original
space, this will correspond to finding a small region that encompasses
all the instances. If a new instance does not fall within this region, it is
an anomaly. There are a few hyperparameters to tweak: the usual ones
for a kernelized SVM, plus a margin hyperparameter that corresponds to
the probability of a new instance being mistakenly considered as novel
when it is in fact normal. It works great, especially with high-
dimensional datasets, but like all SVMs it does not scale to large
datasets.
PCA and other dimensionality reduction techniques with an
```
inverse_transform() method
```
If you compare the reconstruction error of a normal instance with the
reconstruction error of an anomaly, the latter will usually be much
larger. This is a simple and often quite efficient anomaly detection
```
approach (see this chapter’s exercises for an example).
```
Exercises
1. How would you define clustering? Can you name a few clustering
algorithms?
2. What are some of the main applications of clustering algorithms?
3. Describe two techniques to select the right number of clusters
when using K-Means.
4. What is label propagation? Why would you implement it, and
how?
5. Can you name two clustering algorithms that can scale to large
datasets? And two that look for regions of high density?
6. Can you think of a use case where active learning would be useful?
How would you implement it?
7. What is the difference between anomaly detection and novelty
detection?
8. What is a Gaussian mixture? What tasks can you use it for?
9. Can you name two techniques to find the right number of clusters
when using a Gaussian mixture model?
10. The classic Olivetti faces dataset contains 400 grayscale 64 × 64–
pixel images of faces. Each image is flattened to a 1D vector of
```
size 4,096. 40 different people were photographed (10 times each),
```
and the usual task is to train a model that can predict which person
is represented in each picture. Load the dataset using the
```
sklearn.datasets.fetch_olivetti_faces()
```
function, then split it into a training set, a validation set, and a test
```
set (note that the dataset is already scaled between 0 and 1). Since
```
the dataset is quite small, you probably want to use stratified
sampling to ensure that there are the same number of images per
person in each set. Next, cluster the images using K-Means, and
```
ensure that you have a good number of clusters (using one of the
```
```
techniques discussed in this chapter). Visualize the clusters: do you
```
see similar faces in each cluster?
11. Continuing with the Olivetti faces dataset, train a classifier to
predict which person is represented in each picture, and evaluate it
on the validation set. Next, use K-Means as a dimensionality
reduction tool, and train a classifier on the reduced set. Search for
the number of clusters that allows the classifier to get the best
```
performance: what performance can you reach? What if you
```
append the features from the reduced set to the original features
```
(again, searching for the best number of clusters)?
```
12. Train a Gaussian mixture model on the Olivetti faces dataset. To
speed up the algorithm, you should probably reduce the dataset’s
```
dimensionality (e.g., use PCA, preserving 99% of the variance).
```
```
Use the model to generate some new faces (using the sample()
```
```
method), and visualize them (if you used PCA, you will need to
```
```
use its inverse_transform() method). Try to modify some
```
```
images (e.g., rotate, flip, darken) and see if the model can detect
```
```
the anomalies (i.e., compare the output of the
```
```
score_samples() method for normal images and for
```
```
anomalies).
```
13. Some dimensionality reduction techniques can also be used for
anomaly detection. For example, take the Olivetti faces dataset and
reduce it with PCA, preserving 99% of the variance. Then compute
the reconstruction error for each image. Next, take some of the
modified images you built in the previous exercise, and look at
their reconstruction error: notice how much larger the
reconstruction error is. If you plot a reconstructed image, you will
see why: it tries to reconstruct a normal face.
Solutions to these exercises are available at the end of this chapter’s
notebook, at https://homl.info/colab3.
1 Stuart P. Lloyd, “Least Squares Quantization in PCM,” IEEE Transactions on Information
```
Theory 28, no. 2 (1982): 129–137.
```
2 David Arthur and Sergei Vassilvitskii, “k-Means++: The Advantages of Careful Seeding,”
```
Proceedings of the 18th Annual ACM-SIAM Symposium on Discrete Algorithms (2007): 1027–
```
1035.
3 Charles Elkan, “Using the Triangle Inequality to Accelerate k-Means,” Proceedings of the
```
20th International Conference on Machine Learning (2003): 147–153.
```
4 The triangle inequality is AC ≤ AB + BC where A, B and C are three points and AB, AC, and
BC are the distances between these points.
5 David Sculley, “Web-Scale K-Means Clustering,” Proceedings of the 19th International
```
Conference on World Wide Web (2010): 1177–1178.
```
```
6 Phi (ϕ or φ) is the 21st letter of the Greek alphabet.
```
Part II. Neural Networks and
Deep Learning
Chapter 10. Introduction to
Artificial Neural Networks with
Keras
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take
advantage of these technologies long before the official release of these
titles.
This will be the 10th chapter of the final book. Notebooks are available
on GitHub at https://github.com/ageron/handson-ml3. Datasets are
available at https://github.com/ageron/data.
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this
chapter, please reach out to the editoor at ntache@oreilly.com.
Birds inspired us to fly, burdock plants inspired Velcro, and nature has
inspired countless more inventions. It seems only logical, then, to look at
the brain’s architecture for inspiration on how to build an intelligent
```
machine. This is the logic that sparked artificial neural networks (ANNs):
```
an ANN is a Machine Learning model inspired by the networks of
biological neurons found in our brains. However, although planes were
inspired by birds, they don’t have to flap their wings. Similarly, ANNs have
gradually become quite different from their biological cousins. Some
researchers even argue that we should drop the biological analogy
```
altogether (e.g., by saying “units” rather than “neurons”), lest we restrict
```
our creativity to biologically plausible systems.1
ANNs are at the very core of Deep Learning. They are versatile, powerful,
and scalable, making them ideal to tackle large and highly complex
```
Machine Learning tasks such as classifying billions of images (e.g., Google
```
```
Images), powering speech recognition services (e.g., Apple’s Siri),
```
recommending the best videos to watch to hundreds of millions of users
```
every day (e.g., YouTube), or learning to beat the world champion at the
```
```
game of Go (DeepMind’s AlphaGo).
```
The first part of this chapter introduces artificial neural networks, starting
with a quick tour of the very first ANN architectures and leading up to
```
Multilayer Perceptrons (MLPs), which are heavily used today (other
```
```
architectures will be explored in the next chapters). In the second part, we
```
will look at how to implement neural networks using TensorFlow’s Keras
API. This is a beautifully designed and simple high-level API for building,
training, evaluating, and running neural networks. But don’t be fooled by its
```
simplicity: it is expressive and flexible enough to let you build a wide
```
variety of neural network architectures. In fact, it will probably be sufficient
for most of your use cases. And should you ever need extra flexibility, you
can always write custom Keras components using its lower-level API, or
even use TensorFlow directly, as we will see in Chapter 12.
But first, let’s go back in time to see how artificial neural networks came to
be!
From Biological to Artificial Neurons
Surprisingly, ANNs have been around for quite a while: they were first
introduced back in 1943 by the neurophysiologist Warren McCulloch and
the mathematician Walter Pitts. In their landmark paper “A Logical
Calculus of Ideas Immanent in Nervous Activity,” McCulloch and Pitts
presented a simplified computational model of how biological neurons
might work together in animal brains to perform complex computations
using propositional logic. This was the first artificial neural network
architecture. Since then many other architectures have been invented, as we
will see.
2
The early successes of ANNs led to the widespread belief that we would
soon be conversing with truly intelligent machines. When it became clear in
```
the 1960s that this promise would go unfulfilled (at least for quite a while),
```
funding flew elsewhere, and ANNs entered a long winter. In the early
1980s, new architectures were invented and better training techniques were
developed, sparking a revival of interest in connectionism, the study of
neural networks. But progress was slow, and by the 1990s other powerful
Machine Learning techniques were invented, such as Support Vector
```
Machines (see Chapter 5). These techniques seemed to offer better results
```
and stronger theoretical foundations than ANNs, so once again the study of
neural networks was put on hold.
We are now witnessing yet another wave of interest in ANNs. Will this
wave die out like the previous ones did? Well, here are a few good reasons
to believe that this time is different and that the renewed interest in ANNs
will have a much more profound impact on our lives:
There is now a huge quantity of data available to train neural
networks, and ANNs frequently outperform other ML techniques
on very large and complex problems.
The tremendous increase in computing power since the 1990s now
makes it possible to train large neural networks in a reasonable
```
amount of time. This is in part due to Moore’s law (the number of
```
components in integrated circuits has doubled about every 2 years
```
over the last 50 years), but also thanks to the gaming industry,
```
which has stimulated the production of powerful GPU cards by the
millions. Moreover, cloud platforms have made this power
accessible to everyone.
The training algorithms have been improved. To be fair they are
only slightly different from the ones used in the 1990s, but these
relatively small tweaks have had a huge positive impact.
Some theoretical limitations of ANNs have turned out to be benign
in practice. For example, many people thought that ANN training
algorithms were doomed because they were likely to get stuck in
local optima, but it turns out that this is not big problem in practice,
especially for larger neural networks: the local optima often
perform almost as well as the global optimum.
ANNs seem to have entered a virtuous circle of funding and
progress. Amazing products based on ANNs regularly make the
headline news, which pulls more and more attention and funding
toward them, resulting in more and more progress and even more
amazing products.
Biological Neurons
Before we discuss artificial neurons, let’s take a quick look at a biological
```
neuron (represented in Figure 10-1). It is an unusual-looking cell mostly
```
found in animal brains. It’s composed of a cell body containing the nucleus
and most of the cell’s complex components, many branching extensions
called dendrites, plus one very long extension called the axon. The axon’s
length may be just a few times longer than the cell body, or up to tens of
thousands of times longer. Near its extremity the axon splits off into many
branches called telodendria, and at the tip of these branches are minuscule
```
structures called synaptic terminals (or simply synapses), which are
```
connected to the dendrites or cell bodies of other neurons. Biological
```
neurons produce short electrical impulses called action potentials (APs, or
```
```
just signals) which travel along the axons and make the synapses release
```
chemical signals called neurotransmitters. When a neuron receives a
sufficient amount of these neurotransmitters within a few milliseconds, it
```
fires its own electrical impulses (actually, it depends on the
```
```
neurotransmitters, as some of them inhibit the neuron from firing).
```
3
Figure 10-1. Biological neuron
Thus, individual biological neurons seem to behave in a rather simple way,
but they are organized in a vast network of billions, with each neuron
typically connected to thousands of other neurons. Highly complex
computations can be performed by a network of fairly simple neurons,
much like a complex anthill can emerge from the combined efforts of
```
simple ants. The architecture of biological neural networks (BNNs) is still
```
the subject of active research, but some parts of the brain have been
mapped, and it seems that neurons are often organized in consecutive
```
layers, especially in the cerebral cortex (i.e., the outer layer of your brain),
```
as shown in Figure 10-2.
4
5
```
Figure 10-2. Multiple layers in a biological neural network (human cortex)
```
Logical Computations with Neurons
6
McCulloch and Pitts proposed a very simple model of the biological
neuron, which later became known as an artificial neuron: it has one or
```
more binary (on/off) inputs and one binary output. The artificial neuron
```
activates its output when more than a certain number of its inputs are active.
In their paper, they showed that even with such a simplified model it is
possible to build a network of artificial neurons that computes any logical
proposition you want. To see how such a network works, let’s build a few
```
ANNs that perform various logical computations (see Figure 10-3),
```
assuming that a neuron is activated when at least two of its input
connections are active.
Figure 10-3. ANNs performing simple logical computations
Let’s see what these networks do:
The first network on the left is the identity function: if neuron A is
```
activated, then neuron C gets activated as well (since it receives
```
```
two input signals from neuron A); but if neuron A is off, then
```
neuron C is off as well.
The second network performs a logical AND: neuron C is
```
activated only when both neurons A and B are activated (a single
```
```
input signal is not enough to activate neuron C).
```
The third network performs a logical OR: neuron C gets activated
```
if either neuron A or neuron B is activated (or both).
```
Finally, if we suppose that an input connection can inhibit the
```
neuron’s activity (which is the case with biological neurons), then
```
the fourth network computes a slightly more complex logical
```
proposition: neuron C is activated only if neuron A is active and
```
neuron B is off. If neuron A is active all the time, then you get a
logical NOT: neuron C is active when neuron B is off, and vice
versa.
You can imagine how these networks can be combined to compute complex
```
logical expressions (see the exercises at the end of the chapter for an
```
```
example).
```
The Perceptron
The Perceptron is one of the simplest ANN architectures, invented in 1957
```
by Frank Rosenblatt. It is based on a slightly different artificial neuron (see
```
```
Figure 10-4) called a threshold logic unit (TLU), or sometimes a linear
```
```
threshold unit (LTU). The inputs and output are numbers (instead of binary
```
```
on/off values), and each input connection is associated with a weight. The
```
TLU first computes a linear function of its inputs: z = w x + w x + ⋯ +
```
w x + b = w x + b. Then it applies a step function to the result: h (x) =
```
```
step(z). So it’s almost like Logistic Regression, except it uses a step
```
```
function instead of the logistic function (Chapter 4). Just like in Logistic
```
Regression, the model parameters are the input weights w and the bias term
b.
1 1 2 2
n n
⊺
w
Figure 10-4. Threshold logic unit: an artificial neuron which computes a weighted sum of its inputs
w x, plus a bias term b, then applies a step function
The most common step function used in Perceptrons is the Heaviside step
```
function (see Equation 10-1). Sometimes the sign function is used instead.
```
```
Equation 10-1. Common step functions used in Perceptrons (assuming threshold = 0)
```
⊺
A single TLU can be used for simple linear binary classification. It
computes a linear function of its inputs, and if the result exceeds a
threshold, it outputs the positive class. Otherwise it outputs the negative
```
class. This may remind you of Logistic Regression (Chapter 4) or linear
```
```
SVM classification (Chapter 5). You could, for example, use a single TLU
```
to classify iris flowers based on petal length and width. Training such a
```
TLU would require finding the right values for w , w and b (the training
```
```
algorithm is discussed shortly).
```
A Perceptron is composed of one or more TLUs organized in a single layer,
where every TLU is connected to every input. Such a layer is called a fully
connected layer, or a dense layer. The inputs constitute the input layer. And
since the layer of TLUs produces the final outputs, it is called the output
layer. For example, a Perceptron with two inputs and three outputs is
represented in Figure 10-5.
```
heaviside (z) = { sgn (z) =
```
0 if z < 0
1 if z ≥ 0
⎧
⎪
⎨
⎪
−1 if z < 0
0 if z = 0
+1 if z > 0
1 2
Figure 10-5. Architecture of a Perceptron with two inputs and three output neurons
This Perceptron can classify instances simultaneously into three different
binary classes, which makes it a multilabel classifier. It may also be used
for multiclass classification.
Thanks to the magic of linear algebra, Equation 10-2 can be used to
efficiently compute the outputs of a layer of artificial neurons for several
instances at once.
Equation 10-2. Computing the outputs of a fully connected layer
```
hW,b (X) = ϕ (XW + b)
```
In this equation:
As always, X represents the matrix of input features. It has one row
per instance and one column per feature.
The weight matrix W contains all the connection weights. It has
one row per input and one column per neuron.
The bias vector b contains all the bias terms: one per neuron.
The function ϕ is called the activation function: when the artificial
```
neurons are TLUs, it is a step function (but we will discuss other
```
```
activation functions shortly).
```
NOTE
In mathematics, the sum of a matrix and a vector is undefined. However, in Data
Science, we allow “broadcasting”: adding a vector to a matrix means adding it to every
row in the matrix. So XW + b first multiplies X by W—which results in a matrix with
one row per instance and one column per output—then adds the vector b to every row of
that matrix, which adds each bias term to the corresponding output, for every instance.
Moreover, ϕ is applied itemwise to each item in the resulting matrix.
So, how is a Perceptron trained? The Perceptron training algorithm
proposed by Rosenblatt was largely inspired by Hebb’s rule. In his 1949
```
book The Organization of Behavior (Wiley), Donald Hebb suggested that
```
when a biological neuron triggers another neuron often, the connection
between these two neurons grows stronger. Siegrid Löwel later summarized
```
Hebb’s idea in the catchy phrase, “Cells that fire together, wire together”;
```
that is, the connection weight between two neurons tends to increase when
```
they fire simultaneously. This rule later became known as Hebb’s rule (or
```
```
Hebbian learning). Perceptrons are trained using a variant of this rule that
```
takes into account the error made by the network when it makes a
```
prediction; the Perceptron learning rule reinforces connections that help
```
reduce the error. More specifically, the Perceptron is fed one training
instance at a time, and for each instance it makes its predictions. For every
output neuron that produced a wrong prediction, it reinforces the connection
weights from the inputs that would have contributed to the correct
prediction. The rule is shown in Equation 10-3.
```
Equation 10-3. Perceptron learning rule (weight update)
```
```
wi,j(next step) = wi,j + η (yj − ˆyj)xi
```
In this equation:
w is the connection weight between the i input and the j
neuron.
x is the i input value of the current training instance.
ˆyj is the output of the j output neuron for the current training
instance.
y is the target output of the j output neuron for the current
training instance.
```
η is the learning rate (see Chapter 4).
```
The decision boundary of each output neuron is linear, so Perceptrons are
```
incapable of learning complex patterns (just like Logistic Regression
```
```
classifiers). However, if the training instances are linearly separable,
```
Rosenblatt demonstrated that this algorithm would converge to a solution.
This is called the Perceptron convergence theorem.
Scikit-Learn provides a Perceptron class which can be used pretty much
```
as you would expect—for example, on the iris dataset (introduced in
```
```
Chapter 4):
```
import numpy as np
from sklearn.datasets import load_iris
from sklearn.linear_model import Perceptron
```
iris = load_iris(as_frame=True)
```
```
X = iris.data[["petal length (cm)", "petal width (cm)"]].values
```
```
y = (iris.target == 0) # Iris setosa
```
```
per_clf = Perceptron(random_state=42)
```
i, j
th th
i
th
th
j
th
7
```
per_clf.fit(X, y)
```
```
X_new = [[2, 0.5], [3, 1]]
```
```
y_pred = per_clf.predict(X_new) # predicts True and False for
```
these 2 flowers
You may have noticed that the Perceptron learning algorithm strongly
```
resembles Stochastic Gradient Descent (introduced in Chapter 4). In fact,
```
Scikit-Learn’s Perceptron class is equivalent to using an
SGDClassifier with the following hyperparameters:
```
loss="perceptron", learning_rate="constant", eta0=1
```
```
(the learning rate), and penalty=None (no regularization).
```
NOTE
Contrary to Logistic Regression classifiers, Perceptrons do not output a class
probability. This is one reason to prefer Logistic Regression over Perceptrons.
Moreover, Perceptrons do not use any regularization by default, and training stops as
soon as there are no more prediction errors on the training set, so the model typically
does not generalize as well as Logistic Regression or a linear SVM classifier. However,
Perceptrons may train a bit faster.
In their 1969 monograph Perceptrons, Marvin Minsky and Seymour Papert
highlighted a number of serious weaknesses of Perceptrons—in particular,
```
the fact that they are incapable of solving some trivial problems (e.g., the
```
```
Exclusive OR (XOR) classification problem; see the left side of Figure 10-
```
```
6). This is true of any other linear classification model (such as Logistic
```
```
Regression classifiers), but researchers had expected much more from
```
Perceptrons, and some were so disappointed that they dropped neural
networks altogether in favor of higher-level problems such as logic,
problem solving, and search.
It turns out that some of the limitations of Perceptrons can be eliminated by
stacking multiple Perceptrons. The resulting ANN is called a Multilayer
```
Perceptron (MLP). An MLP can solve the XOR problem, as you can verify
```
by computing the output of the MLP represented on the right side of
```
Figure 10-6: with inputs (0, 0) or (1, 1), the network outputs 0, and with
```
```
inputs (0, 1) or (1, 0) it outputs 1. Try verifying that this network indeed
```
solves the XOR problem!8
Figure 10-6. XOR classification problem and an MLP that solves it
The Multilayer Perceptron and Backpropagation
An MLP is composed of one input layer, one or more layers of TLUs,
called hidden layers, and one final layer of TLUs called the output layer
```
(see Figure 10-7). The layers close to the input layer are usually called the
```
lower layers, and the ones close to the outputs are usually called the upper
layers.
Figure 10-7. Architecture of a Multilayer Perceptron with two inputs, one hidden layer of four
neurons, and three output neurons
NOTE
```
The signal flows only in one direction (from the inputs to the outputs), so this
```
```
architecture is an example of a feedforward neural network (FNN).
```
When an ANN contains a deep stack of hidden layers, it is called a deep
```
neural network (DNN). The field of Deep Learning studies DNNs, and
```
more generally it is interested in models containing deep stacks of
computations. Even so, many people talk about Deep Learning whenever
```
neural networks are involved (even shallow ones).
```
For many years researchers struggled to find a way to train MLPs, without
success. In the early 1960s, several researchers discussed the possibility to
use Gradient Descent to train neural networks, but as we saw in Chapter 4,
Gradient Descent requires computing the gradients of the model’s error
with regards to the model parameters: it wasn’t clear at the time how to do
this efficiently with such a complex model containing so many parameters,
especially with the computers they had back then.
Then in 1970, a researcher named Seppo Linnainmaa introduced, in his
master thesis, a technique to compute all the gradients automatically and
efficiently. This algorithm is now called reverse-mode automatic
```
differentiation (or reverse-mode autodiff for short). In just two passes
```
```
through the network (one forward, one backward), it is able to compute the
```
gradients of the neural network’s error with regard to every single model
parameter. In other words, it can find out how each connection weight and
each bias should be tweaked in order to reduce the neural network’s error.
These gradients can then be used to perform a Gradient Descent step. If you
repeat this process of computing the gradients automatically and taking a
Gradient Descent step, the neural network’s error will gradually drop, until
it eventually reaches a minimum. This combination of reverse-mode
```
autodiff and Gradient Descent is now called backpropagation (or backprop
```
```
for short).
```
9
NOTE
There are various autodiff techniques, with different pros and cons. Reverse-mode
```
autodiff is well suited when the function to differentiate has many variables (e.g.,
```
```
connection weights and biases) and few outputs (e.g., one loss). If you want to learn
```
more about autodiff, check out Appendix B.
Backpropagation can actually be applied to all sorts of computational
graphs, not just neural networks: indeed, Linnainmaa’s master thesis was
not about neural nets, it was more general. It took several more years before
backprop started to be used to train neural networks, but it still wasn’t
```
mainstream. Then David Rumelhart reinvented backpropagation (as did
```
```
several other researchers in other fields), and he published a
```
groundbreaking paper in 1986, along with Geoffrey Hinton and Ronald
Williams, analyzing how backpropagation allowed neural networks to learn
useful internal representations. Their results were so impressive that
backpropagation was quickly popularized in the field. Today, it is by far the
most popular training technique for neural networks.
So let’s run through backpropagation again in a bit more detail:
```
It handles one mini-batch at a time (for example, containing 32
```
```
instances each), and it goes through the full training set multiple
```
times. Each pass is called an epoch.
Each mini-batch enters the network through the input layer. The
algorithm then computes the output of all the neurons in the first
hidden layer, for every instance in the mini-batch. The result is
passed on to the next layer, its output is computed and passed to
the next layer, and so on until we get the output of the last layer,
the output layer. This is the forward pass: it is exactly like making
predictions, except all intermediate results are preserved since they
are needed for the backward pass.
```
Next, the algorithm measures the network’s output error (i.e., it
```
uses a loss function that compares the desired output and the actual
10
```
output of the network, and returns some measure of the error).
```
Then it computes how much each output bias and each connection
to the output layer contributed to the error. This is done
```
analytically by applying the chain rule (perhaps the most
```
```
fundamental rule in calculus), which makes this step fast and
```
precise.
The algorithm then measures how much of these error
contributions came from each connection in the layer below, again
using the chain rule, working backward until the algorithm reaches
the input layer. As explained earlier, this reverse pass efficiently
measures the error gradient across all the connection weights and
biases in the network by propagating the error gradient backward
```
through the network (hence the name of the algorithm).
```
Finally, the algorithm performs a Gradient Descent step to tweak
all the connection weights in the network, using the error gradients
it just computed.
```
In short, backpropagation makes predictions for a mini-batch (forward
```
```
pass), measures the error, then goes through each layer in reverse to
```
```
measure the error contribution from each parameter (reverse pass), and
```
finally tweaks the connection weights and biases to reduce the error
```
(Gradient Descent step).
```
WARNING
It is important to initialize all the hidden layers’ connection weights randomly, or else
training will fail. For example, if you initialize all weights and biases to zero, then all
neurons in a given layer will be perfectly identical, and thus backpropagation will affect
them in exactly the same way, so they will remain identical. In other words, despite
having hundreds of neurons per layer, your model will act as if it had only one neuron
per layer: it won’t be too smart. If instead you randomly initialize the weights, you
break the symmetry and allow backpropagation to train a diverse team of neurons.
In order for backprop to work properly, Rumelhart and his colleagues made
a key change to the MLP’s architecture: they replaced the step function with
```
the logistic function, σ(z) = 1 / (1 + exp(–z)), also called the sigmoid
```
function. This was essential because the step function contains only flat
```
segments, so there is no gradient to work with (Gradient Descent cannot
```
```
move on a flat surface), while the sigmoid function has a well-defined
```
nonzero derivative everywhere, allowing Gradient Descent to make some
progress at every step. In fact, the backpropagation algorithm works well
with many other activation functions, not just the sigmoid function. Here
are two other popular choices:
```
The hyperbolic tangent function: tanh(z) = 2σ(2z) – 1
```
Just like the sigmoid function, this activation function is S-shaped,
continuous, and differentiable, but its output value ranges from –1 to 1
```
(instead of 0 to 1 in the case of the sigmoid function). That range tends
```
to make each layer’s output more or less centered around 0 at the
beginning of training, which often helps speed up convergence.
```
The Rectified Linear Unit function: ReLU(z) = max(0, z)
```
The ReLU function is continuous but unfortunately not differentiable at
```
z = 0 (the slope changes abruptly, which can make Gradient Descent
```
```
bounce around), and its derivative is 0 for z < 0. In practice, however, it
```
works very well and has the advantage of being fast to compute, so it
has become the default. Importantly, the fact that it does not have a
maximum output value helps reduce some issues during Gradient
```
Descent (we will come back to this in Chapter 11).
```
These popular activation functions and their derivatives are represented in
Figure 10-8. But wait! Why do we need activation functions in the first
place? Well, if you chain several linear transformations, all you get is a
```
linear transformation. For example, if f(x) = 2x + 3 and g(x) = 5x – 1, then
```
chaining these two linear functions gives you another linear function:
```
f(g(x)) = 2(5x – 1) + 3 = 10x + 1. So if you don’t have some nonlinearity
```
between layers, then even a deep stack of layers is equivalent to a single
11
layer, and you can’t solve very complex problems with that. Conversely, a
large enough DNN with nonlinear activations can theoretically approximate
any continuous function.
```
Figure 10-8. Activation functions (left) and their derivatives (right)
```
OK! You know where neural nets came from, what their architecture is, and
how to compute their outputs. You’ve also learned about the
backpropagation algorithm. But what exactly can you do with neural nets?
Regression MLPs
First, MLPs can be used for regression tasks. If you want to predict a single
```
value (e.g., the price of a house, given many of its features), then you just
```
need a single output neuron: its output is the predicted value. For
```
multivariate regression (i.e., to predict multiple values at once), you need
```
one output neuron per output dimension. For example, to locate the center
of an object in an image, you need to predict 2D coordinates, so you need
two output neurons. If you also want to place a bounding box around the
object, then you need two more numbers: the width and the height of the
object. So, you end up with four output neurons.
Scikit-Learn includes an MLPRegressor class, so let’s use it to build an
MLP with three hidden layers composed of 50 neurons each, and train it on
the California housing dataset. For simplicity, we will use Scikit-Learn’s
```
fetch_california_housing() function to load the data. This
```
dataset is simpler than the one we used in Chapter 2, since it contains only
```
numerical features (there is no ocean_proximity feature), and there are
```
no missing values. The following code starts by fetching and splitting the
dataset, then it creates a pipeline to standardize the input features before
sending them to the MLPRegressor. This is very important for neural
networks because they are trained using Gradient Descent, and as we saw in
Chapter 4, Gradient Descent does not converge very well when the features
have very different scales. Finally, the code trains the model and evaluates
its validation error. The model uses the ReLU activation function in the
```
hidden layers, and it uses a variant of Gradient Descent called Adam (see
```
```
Chapter 11) to minimize the mean squared error, with a little bit of ℓ
```
```
regularization (which you can control via the alpha hyperparameter).
```
from sklearn.datasets import fetch_california_housing
from sklearn.metrics import mean_squared_error
from sklearn.model_selection import train_test_split
2
from sklearn.neural_network import MLPRegressor
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
```
housing = fetch_california_housing()
```
```
X_train_full, X_test, y_train_full, y_test = train_test_split(
```
```
housing.data, housing.target, random_state=42)
```
```
X_train, X_valid, y_train, y_valid = train_test_split(
```
```
X_train_full, y_train_full, random_state=42)
```
```
mlp_reg = MLPRegressor(hidden_layer_sizes=[50, 50, 50],
```
```
random_state=42)
```
```
pipeline = make_pipeline(StandardScaler(), mlp_reg)
```
```
pipeline.fit(X_train, y_train)
```
```
y_pred = pipeline.predict(X_valid)
```
```
rmse = mean_squared_error(y_valid, y_pred, squared=False) #
```
about 0.505
We get a validation RMSE of about 0.505, which is comparable to what you
would get with a Random Forest classifier. Not too bad for a first try!
Note that this MLP does not use any activation function for the output layer,
so it’s free to output any value it wants. This is generally fine, but if you
want to guarantee that the output will always be positive, then you should
use the ReLU activation function in the output layer, or the softplus
```
activation function, which is a smooth variant of ReLU: softplus(z) = log(1
```
- exp(z)). Softplus is close to 0 when z is negative, and close to z when z is
positive. Finally, if you want to guarantee that the predictions will always
fall within a given range of values, then you should use the sigmoid
```
function or the hyperbolic tangent, and scale the targets to the appropriate
```
```
range: 0 to 1 for sigmoid and –1 to 1 for tanh. Sadly, the MLPRegressor
```
class does not support activation functions in the output layer.
WARNING
Building and training a standard MLP with Scikit-Learn in just a few lines of code is
very convenient, but the neural net features are limited. This is why we will switch to
Keras in the second part of this chapter.
The MLPRegressor class uses the mean squared error, which is usually
what you want for regression, but if you have a lot of outliers in the training
set, you may prefer to use the mean absolute error instead. Alternatively,
you may want to use the Huber loss, which is a combination of both. It is
```
quadratic when the error is smaller than a threshold δ (typically 1) but linear
```
when the error is larger than δ. The linear part makes it less sensitive to
outliers than the mean squared error, and the quadratic part allows it to
converge faster and be more precise than the mean absolute error. However,
MLPRegressor only supports the MSE.
Table 10-1 summarizes the typical architecture of a regression MLP.
T
a
b
l
e
1
0
-
1
.
T
y
p
i
c
a
l
r
e
g
r
e
s
s
i
o
n
M
L
P
a
r
c
h
i
t
e
c
t
u
r
e
Hyperparameter Typical value
# hidden layers Depends on the problem, but typically 1 to 5
# neurons per hidden
layer
Depends on the problem, but typically 10 to 100
# output neurons 1 per prediction dimension
Hidden activation ReLU
```
Output activation None, or ReLU/softplus (if positive outputs) or sigmoid/tanh (if bounded
```
```
outputs)
```
Loss function MSE, or Huber if outliers
Classification MLPs
MLPs can also be used for classification tasks. For a binary classification
problem, you just need a single output neuron using the sigmoid activation
```
function: the output will be a number between 0 and 1, which you can
```
interpret as the estimated probability of the positive class. The estimated
probability of the negative class is equal to one minus that number.
```
MLPs can also easily handle multilabel binary classification tasks (see
```
```
Chapter 3). For example, you could have an email classification system that
```
predicts whether each incoming email is ham or spam, and simultaneously
predicts whether it is an urgent or nonurgent email. In this case, you would
need two output neurons, both using the sigmoid activation function: the
first would output the probability that the email is spam, and the second
would output the probability that it is urgent. More generally, you would
dedicate one output neuron for each positive class. Note that the output
probabilities do not necessarily add up to 1. This lets the model output any
combination of labels: you can have nonurgent ham, urgent ham, nonurgent
```
spam, and perhaps even urgent spam (although that would probably be an
```
```
error).
```
If each instance can belong only to a single class, out of three or more
```
possible classes (e.g., classes 0 through 9 for digit image classification),
```
then you need to have one output neuron per class, and you should use the
```
softmax activation function for the whole output layer (see Figure 10-9).
```
```
The softmax function (introduced in Chapter 4) will ensure that all the
```
estimated probabilities are between 0 and 1, and that they add up to 1 since
the classes are exclusive. This is called multiclass classification.
```
Figure 10-9. A modern MLP (including ReLU and softmax) for classification
```
Regarding the loss function, since we are predicting probability
```
distributions, the cross-entropy loss (or x-entropy or log loss for short, see
```
```
Chapter 4) is generally a good choice.
```
Scikit-Learn has an MLPClassifier class in the
sklearn.neural_network package. It is almost identical to the
MLPRegressor class, except that it minimizes the cross-entropy rather
than the MSE. Give it a try now, for example on the Iris dataset. It’s a
almost a linear task, so a single layer with 5 to 10 neurons should suffice
```
(and make sure to scale the features).
```
Table 10-2 summarizes the typical architecture of a classification MLP.
T
a
b
l
e
1
0
-
2
.
T
y
p
i
c
a
l
c
l
a
s
s
i
f
i
c
a
t
i
o
n
M
L
P
a
r
c
h
i
t
e
c
t
u
r
e
Hyperparameter
Binary
classification
Multilabel binary
classification
Multiclass
classification
hidden layers Same as regression Same as regression Same as regression
# output neurons 1 1 per binary label 1 per class
Output layer activation Sigmoid Sigmoid Softmax
Loss function x-entropy x-entropy x-entropy
TIP
Before we go on, I recommend you go through exercise 1 at the end of this chapter. You
will play with various neural network architectures and visualize their outputs using the
TensorFlow Playground. This will be very useful to better understand MLPs, including
```
the effects of all the hyperparameters (number of layers and neurons, activation
```
```
functions, and more).
```
Now you have all the concepts you need to start implementing MLPs with
Keras!
Implementing MLPs with Keras
Keras is TensorFlow’s high-level Deep Learning API: it allows you to
build, train, evaluate, and execute all sorts of neural networks. The original
Keras library was developed by François Chollet as part of a research
project and was released as a standalone open source project in March
2015. It quickly gained popularity, owing to its ease of use, flexibility, and
beautiful design.
NOTE
Keras used to support multiple backends, including TensorFlow, PlaidML, Theano and
```
Microsoft Cognitive Toolkit (CNTK) (the last two are sadly deprecated), but since
```
version 2.4, Keras is TensorFlow-only. Conversely, TensorFlow used to include multiple
high-level APIs, but Keras was officially chosen as its preferred high-level API when
TensorFlow 2 came out. Installing TensorFlow will automatically install Keras as well,
and Keras will not work without TensorFlow installed. In short, Keras and TensorFlow
fell in love and got married. François Chollet joined Google where he continues to lead
the Keras project.
The most popular Deep Learning library, after Keras and TensorFlow, is
Facebook’s PyTorch library. The good news is that its API is quite similar
to Keras’s, in part because both APIs were inspired by Scikit-Learn and
Chainer. So once you know Keras, it is not difficult to switch to PyTorch, if
you ever want to. PyTorch’s popularity grew exponentially in 2018, largely
thanks to its simplicity and excellent documentation, which were not
TensorFlow 1.x’s main strengths back then. However, TensorFlow 2 is just
as simple as PyTorch, in part because it has adopted Keras as its official
high-level API, but also because the developers have greatly simplified and
cleaned up the rest of the API. The documentation has also been completely
reorganized, and it is much easier to find what you need now. Similarly,
```
PyTorch’s main weaknesses (e.g., limited portability and no computation
```
```
graph analysis) have been largely addressed in PyTorch 1.0. Healthy
```
competition seems beneficial to everyone.
12
All right, now let’s use Keras! We will start by building an MLP for image
classification using Keras.
NOTE
Colab Runtimes come with recent versions of TensorFlow and Keras preinstalled.
However, if you want to install them on your own machine, please see the installation
instructions at https://homl.info/install.
Building an Image Classifier Using the Sequential API
First, we need to load a dataset. We will use Fashion MNIST, which is a
```
drop-in replacement of MNIST (introduced in Chapter 3). It has the exact
```
```
same format as MNIST (70,000 grayscale images of 28 × 28 pixels each,
```
```
with 10 classes), but the images represent fashion items rather than
```
handwritten digits, so each class is more diverse, and the problem turns out
to be significantly more challenging than MNIST. For example, a simple
linear model reaches about 92% accuracy on MNIST, but only about 83%
on Fashion MNIST.
Using Keras to load the dataset
Keras provides some utility functions to fetch and load common datasets,
including MNIST, Fashion MNIST, and a few more. Let’s load Fashion
```
MNIST. It’s already shuffled and split into a training set (60,000 images)
```
```
and a test set (10,000 images), but let’s hold out the last 5,000 images from
```
the training set for validation:
import tensorflow as tf
```
fashion_mnist = tf.keras.datasets.fashion_mnist.load_data()
```
```
(X_train_full, y_train_full), (X_test, y_test) = fashion_mnist
```
X_train, y_train = X_train_full[:-5000], y_train_full[:-5000]
X_valid, y_valid = X_train_full[-5000:], y_train_full[-5000:]
TIP
TensorFlow is usually imported as tf, and the Keras API is available via tf.keras.
When loading MNIST or Fashion MNIST using Keras rather than Scikit-
Learn, one important difference is that every image is represented as a 28 ×
28 array rather than a 1D array of size 784. Moreover, the pixel intensities
```
are represented as integers (from 0 to 255) rather than floats (from 0.0 to
```
```
255.0). Let’s take a look at the shape and data type of the training set:
```
>>> X_train.shape
```
(55000, 28, 28)
```
>>> X_train.dtype
```
dtype('uint8')
```
For simplicity, we’ll scale the pixel intensities down to the 0–1 range by
```
dividing them by 255.0 (this also converts them to floats):
```
X_train, X_valid, X_test = X_train / 255., X_valid / 255., X_test
/ 255.
With MNIST, when the label is equal to 5, it means that the image
represents the handwritten digit 5. Easy. For Fashion MNIST, however, we
need the list of class names to know what we are dealing with:
```
class_names = ["T-shirt/top", "Trouser", "Pullover", "Dress",
```
"Coat",
"Sandal", "Shirt", "Sneaker", "Bag", "Ankle boot"]
For example, the first image in the training set represents an ankle boot:
>>> class_names[y_train[0]]
'Ankle boot'
Figure 10-10 shows some samples from the Fashion MNIST dataset.
Figure 10-10. Samples from Fashion MNIST
Creating the model using the Sequential API
Now let’s build the neural network! Here is a classification MLP with two
hidden layers:
```
tf.random.set_seed(42)
```
```
model = tf.keras.Sequential()
```
```
model.add(tf.keras.layers.InputLayer(input_shape=[28, 28]))
```
```
model.add(tf.keras.layers.Flatten())
```
```
model.add(tf.keras.layers.Dense(300, activation="relu"))
```
```
model.add(tf.keras.layers.Dense(100, activation="relu"))
```
```
model.add(tf.keras.layers.Dense(10, activation="softmax"))
```
Let’s go through this code line by line:
We first set TensorFlow’s random seed to make the results
```
reproducible: the random weights of the hidden layers and the
```
output layer will be the same every time you run the notebook.
The next line creates a Sequential model. This is the simplest
kind of Keras model for neural networks that are just composed of
a single stack of layers connected sequentially. This is called the
Sequential API.
Next, we build the first layer and add it to the model: it is an
InputLayer. We specify the input_shape, which doesn’t
include the batch size, only the shape of the instances. Keras needs
to know the shape of the inputs so it can determine the shape of the
connection weight matrix of the first hidden layer.
Then we add a Flatten layer whose role is to convert each input
image into a 1D array: for example, if it receives a batch of shape
[32, 28, 28], it will reshape it to [32, 784]. In other words, if it
```
receives input data X, it computes X.reshape(-1, 784). This
```
```
layer does not have any parameters; it is just there to do some
```
simple preprocessing.
Next we add a Dense hidden layer with 300 neurons. It will use
the ReLU activation function. Each Dense layer manages its own
weight matrix, containing all the connection weights between the
neurons and their inputs. It also manages a vector of bias terms
```
(one per neuron). When it receives some input data, it computes
```
Equation 10-2.
Then we add a second Dense hidden layer with 100 neurons, also
using the ReLU activation function.
```
Finally, we add a Dense output layer with 10 neurons (one per
```
```
class), using the softmax activation function because the classes
```
are exclusive.
TIP
Specifying activation="relu" is equivalent to specifying
```
activation=tf.keras.activations.relu. Other activation functions are
```
available in the tf.keras.activations package, we will use many of them in this
book. See https://keras.io/api/layers/activations/ for the full list. We will also define our
own custom activation functions in Chapter 12.
Instead of adding the layers one by one as we just did, it’s often more
convenient to pass a list of layers when creating the Sequential model.
You can also drop the InputLayer and instead specify the
input_shape in the first layer:
```
model = tf.keras.Sequential([
```
```
tf.keras.layers.Flatten(input_shape=[28, 28]),
```
```
tf.keras.layers.Dense(300, activation="relu"),
```
```
tf.keras.layers.Dense(100, activation="relu"),
```
```
tf.keras.layers.Dense(10, activation="softmax")
```
```
])
```
```
The model’s summary() method displays all the model’s layers,
```
```
including each layer’s name (which is automatically generated unless you
```
```
set it when creating the layer), its output shape (None means the batch size
```
13
```
can be anything), and its number of parameters. The summary ends with the
```
total number of parameters, including trainable and non-trainable
```
parameters. Here we only have trainable parameters (we will see some non-
```
```
trainable parameters later in this chapter):
```
```
>>> model.summary()
```
```
Model: "sequential"
```
_________________________________________________________________
```
Layer (type) Output Shape Param #
```
=================================================================
```
flatten (Flatten) (None, 784) 0
```
```
dense (Dense) (None, 300) 235500
```
```
dense_1 (Dense) (None, 100) 30100
```
```
dense_2 (Dense) (None, 10) 1010
```
=================================================================
Total params: 266,610
Trainable params: 266,610
Non-trainable params: 0
_________________________________________________________________
Note that Dense layers often have a lot of parameters. For example, the
first hidden layer has 784 × 300 connection weights, plus 300 bias terms,
which adds up to 235,500 parameters! This gives the model quite a lot of
flexibility to fit the training data, but it also means that the model runs the
risk of overfitting, especially when you do not have a lot of training data.
We will come back to this later.
```
All layers in a model must have a unique name (e.g., “dense_2”). You can
```
set the layer names explicitly using the constructor’s name argument, but
generally it’s simpler to let Keras name the layers automatically, as we just
```
did: Keras takes the layer’s class name and converts it to snake case (e.g., a
```
layer from the MyCoolLayer class is named "my_cool_layer" by
```
default). Moreover, Keras ensures that the name is globally unique, even
```
across models, by appending an index if needed, as in "dense_2". But
why, I hear you ask, does it bother making the names unique across
models? Well, this makes it possible to merge models easily without getting
name conflicts.
TIP
All global state managed by Keras is stored in a Keras session, which you can clear
```
using tf.keras.backend.clear_session(). In particular, this resets the name
```
counters.
You can easily get a model’s list of layers using the layers attribute, or
```
use the get_layer() method to access a layer by name:
```
>>> model.layers
[<keras.layers.core.flatten.Flatten at 0x7fa1dea02250>,
<keras.layers.core.dense.Dense at 0x7fa1c8f42520>,
<keras.layers.core.dense.Dense at 0x7fa188be7ac0>,
<keras.layers.core.dense.Dense at 0x7fa188be7fa0>]
>>> hidden1 = model.layers[1]
>>> hidden1.name
'dense'
```
>>> model.get_layer('dense') is hidden1
```
True
```
All the parameters of a layer can be accessed using its get_weights()
```
```
and set_weights() methods. For a Dense layer, this includes both the
```
connection weights and the bias terms:
```
>>> weights, biases = hidden1.get_weights()
```
>>> weights
```
array([[ 0.02448617, -0.00877795, -0.02189048, ..., 0.03859074,
```
-0.06889391],
[ 0.00476504, -0.03105379, -0.0586676 , ..., -0.02763776,
-0.04165364],
...,
[ 0.07061854, -0.06960931, 0.07038955, ..., 0.00034875,
0.02878492],
[-0.06022581, 0.01577859, -0.02585464, ..., 0.00272203,
-0.06793761]],
```
dtype=float32)
```
>>> weights.shape
```
(784, 300)
```
>>> biases
```
array([0., 0., 0., 0., 0., 0., 0., 0., 0., ..., 0., 0., 0.],
```
```
dtype=float32)
```
>>> biases.shape
```
(300,)
```
Notice that the Dense layer initialized the connection weights randomly
```
(which is needed to break symmetry, as we discussed earlier), and the
```
biases were initialized to zeros, which is fine. If you ever want to use a
different initialization method, you can set kernel_initializer
```
(kernel is another name for the matrix of connection weights) or
```
bias_initializer when creating the layer. We will discuss initializers
further in Chapter 11, but if you want the full list, see
```
https://keras.io/api/layers/initializers/.
```
NOTE
The shape of the weight matrix depends on the number of inputs, which is why we
specified the input_shape when creating the model. If you do not specify the input
shape, it’s OK: Keras will simply wait until it knows the input shape before it actually
```
builds the model parameters. This will happen either when you feed it some data (e.g.,
```
```
during training), or when you call its build() method. Until the model parameters are
```
built, you will not be able to do certain things, such as display the model summary or
save the model. So, if you know the input shape when creating the model, it is best to
specify it.
Compiling the model
```
After a model is created, you must call its compile() method to specify
```
the loss function and the optimizer to use. Optionally, you can specify a list
of extra metrics to compute during training and evaluation:
```
model.compile(loss="sparse_categorical_crossentropy",
```
```
optimizer="sgd",
```
```
metrics=["accuracy"])
```
NOTE
Using loss="sparse_categorical_crossentropy" is equivalent to using
```
loss=tf.keras.losses.sparse_categorical_crossentropy.
```
Similarly, specifying optimizer="sgd" is equivalent to specifying
```
optimizer=tf.keras.optimizers.SGD(), and metrics=["accuracy"]
```
is equivalent to metrics=
```
[tf.keras.metrics.sparse_categorical_accuracy] (when using this
```
```
loss). We will use many other losses, optimizers, and metrics in this book; for the full
```
lists, see https://keras.io/api/losses/, https://keras.io/api/optimizers/, and
```
https://keras.io/api/metrics/.
```
This code requires some explanation. First, we use the
"sparse_categorical_crossentropy" loss because we have
```
sparse labels (i.e., for each instance, there is just a target class index, from 0
```
```
to 9 in this case), and the classes are exclusive. If instead we had one target
```
```
probability per class for each instance (such as one-hot vectors, e.g. [0.,
```
```
0., 0., 1., 0., 0., 0., 0., 0., 0.] to represent class 3),
```
then we would need to use the "categorical_crossentropy" loss
instead. If we were doing binary classification or multilabel binary
classification, then we would use the "sigmoid" activation function in
the output layer instead of the "softmax" activation function, and we
would use the "binary_crossentropy" loss.
TIP
```
If you want to convert sparse labels (i.e., class indices) to one-hot vector labels, use the
```
```
tf.keras.utils.to_categorical() function. To go the other way round, use
```
```
the np.argmax() function with axis=1.
```
Regarding the optimizer, "sgd" means that we will train the model using
Stochastic Gradient Descent. In other words, Keras will perform the
```
backpropagation algorithm described earlier (i.e., reverse-mode autodiff
```
```
plus Gradient Descent). We will discuss more efficient optimizers in
```
Chapter 11. They improve Gradient Descent, not autodiff.
NOTE
When using the SGD optimizer, it is important to tune the learning rate. So, you will
generally want to use
```
optimizer=tf.keras.optimizers.SGD(learning_rate=???) to set the
```
learning rate, rather than optimizer="sgd", which defaults to a learning rate of
0.01.
Finally, since this is a classifier, it’s useful to measure its accuracy during
training and evaluation, which is why we set metrics=["accuracy"].
Training and evaluating the model
Now the model is ready to be trained. For this we simply need to call its
```
fit() method:
```
```
>>> history = model.fit(X_train, y_train, epochs=30,
```
```
... validation_data=(X_valid, y_valid))
```
...
Epoch 1/30
1719/1719 [==============================] - 2s 989us/step
- loss: 0.7220 - sparse_categorical_accuracy: 0.7649
- val_loss: 0.4959 - val_sparse_categorical_accuracy: 0.8332
Epoch 2/30
1719/1719 [==============================] - 2s 964us/step
- loss: 0.4825 - sparse_categorical_accuracy: 0.8332
- val_loss: 0.4567 - val_sparse_categorical_accuracy: 0.8384
[...]
Epoch 30/30
1719/1719 [==============================] - 2s 963us/step
- loss: 0.2235 - sparse_categorical_accuracy: 0.9200
- val_loss: 0.3056 - val_sparse_categorical_accuracy: 0.8894
```
We pass it the input features (X_train) and the target classes (y_train),
```
```
as well as the number of epochs to train (or else it would default to just 1,
```
```
which would definitely not be enough to converge to a good solution). We
```
```
also pass a validation set (this is optional). Keras will measure the loss and
```
the extra metrics on this set at the end of each epoch, which is very useful to
see how well the model really performs. If the performance on the training
set is much better than on the validation set, your model is probably
overfitting the training set, or there is a bug, such as a data mismatch
between the training set and the validation set.
TIP
Shape errors are quite common, especially when getting started, so you should
familiarize yourself with the error messages: try fitting a model with inputs and/or labels
of the wrong shape, and see the errors you get. Similarly, try compiling the model with
```
loss="categorical_crossentropy" instead of
```
```
loss="sparse_categorical_crossentropy", or remove the Flatten
```
layer.
And that’s it! The neural network is trained. At each epoch during training,
Keras displays the number of mini-batches processed so far, on the left side
of the progress bar. The batch size is 32 by default, and since the training
set has 55,000 images, the model goes through 1,719 batches per epoch:
1,718 of size 32, and one of size 24. After the progress bar, you can see the
```
mean training time per sample, and the loss and accuracy (or any other
```
```
extra metrics you asked for) on both the training set and the validation set.
```
Notice that the training loss went down, which is a good sign, and the
validation accuracy reached 88.94% after 30 epochs. That’s slightly below
the training accuracy, so there is a little bit of overfitting going on, but not a
huge amount.
TIP
Instead of passing a validation set using the validation_data argument, you could
set validation_split to the ratio of the training set that you want Keras to use for
validation. For example, validation_split=0.1 tells Keras to use the last 10% of
```
the data (before shuffling) for validation.
```
If the training set was very skewed, with some classes being
overrepresented and others underrepresented, it would be useful to set the
```
class_weight argument when calling the fit() method, to give a
```
larger weight to underrepresented classes and a lower weight to
overrepresented classes. These weights would be used by Keras when
computing the loss. If you need per-instance weights, set the
sample_weight argument. If both class_weight and
sample_weight are provided, then Keras multiplies them. Per-instance
weights could be useful for example if some instances were labeled by
experts while others were labeled using a crowdsourcing platform: you
might want to give more weight to the former. You can also provide sample
```
weights (but not class weights) for the validation set by adding them as a
```
third item in the validation_data tuple.
```
The fit() method returns a History object containing the training
```
```
parameters (history.params), the list of epochs it went through
```
```
(history.epoch), and most importantly a dictionary
```
```
(history.history) containing the loss and extra metrics it measured at
```
```
the end of each epoch on the training set and on the validation set (if any).
```
If you use this dictionary to create a Pandas DataFrame and call its
```
plot() method, you get the learning curves shown in Figure 10-11:
```
import matplotlib.pyplot as plt
import pandas as pd
```
pd.DataFrame(history.history).plot(
```
```
figsize=(8, 5), xlim=[0, 29], ylim=[0, 1], grid=True,
```
```
xlabel="Epoch",
```
```
style=["r--", "r--.", "b-", "b-*"])
```
```
plt.show()
```
Figure 10-11. Learning curves: the mean training loss and accuracy measured over each epoch, and
the mean validation loss and accuracy measured at the end of each epoch
You can see that both the training accuracy and the validation accuracy
steadily increase during training, while the training loss and the validation
loss decrease. Good! The validation curves are relatively close to each other
at first, but they get further apart over time, which shows that there’s a little
bit of overfitting. In this particular case, the model looks like it performed
better on the validation set than on the training set at the beginning of
training. But that’s not the case: indeed, the validation error is computed at
the end of each epoch, while the training error is computed using a running
mean during each epoch. So the training curve should be shifted by half an
epoch to the left. If you do that, you will see that the training and validation
curves overlap almost perfectly at the beginning of training.
TIP
When plotting the training curve, it should be shifted by half an epoch to the left.
The training set performance ends up beating the validation performance, as
is generally the case when you train for long enough. You can tell that the
model has not quite converged yet, as the validation loss is still going down,
so you should probably continue training. It’s as simple as calling the
```
fit() method again, since Keras just continues training where it left off:
```
you should be able to reach about 89.8% validation accuracy, while the
```
training accuracy will continue to rise up to 100% (this is not always the
```
```
case).
```
If you are not satisfied with the performance of your model, you should go
back and tune the hyperparameters. The first one to check is the learning
```
rate. If that doesn’t help, try another optimizer (and always retune the
```
```
learning rate after changing any hyperparameter). If the performance is still
```
not great, then try tuning model hyperparameters such as the number of
layers, the number of neurons per layer, and the types of activation
functions to use for each hidden layer. You can also try tuning other
```
hyperparameters, such as the batch size (it can be set in the fit() method
```
```
using the batch_size argument, which defaults to 32). We will get back
```
to hyperparameter tuning at the end of this chapter. Once you are satisfied
with your model’s validation accuracy, you should evaluate it on the test set
to estimate the generalization error before you deploy the model to
```
production. You can easily do this using the evaluate() method (it also
```
supports several other arguments, such as batch_size and
```
sample_weight; please check the documentation for more details):
```
```
>>> model.evaluate(X_test, y_test)
```
313/313 [==============================] - 0s 626us/step
- loss: 0.3243 - sparse_categorical_accuracy: 0.8864
[0.32431697845458984, 0.8863999843597412]
As we saw in Chapter 2, it is common to get slightly lower performance on
the test set than on the validation set, because the hyperparameters are tuned
```
on the validation set, not the test set (however, in this example, we did not
```
```
do any hyperparameter tuning, so the lower accuracy is just bad luck).
```
Remember to resist the temptation to tweak the hyperparameters on the test
set, or else your estimate of the generalization error will be too optimistic.
Using the model to make predictions
```
Next, we can use the model’s predict() method to make predictions on
```
new instances. Since we don’t have actual new instances, we will just use
the first three instances of the test set:
>>> X_new = X_test[:3]
```
>>> y_proba = model.predict(X_new)
```
```
>>> y_proba.round(2)
```
```
array([[0. , 0. , 0. , 0. , 0. , 0.01, 0. , 0.02, 0. ,
```
0.97],
[0. , 0. , 0.99, 0. , 0.01, 0. , 0. , 0. , 0. , 0.
],
[0. , 1. , 0. , 0. , 0. , 0. , 0. , 0. , 0. , 0.
]],
```
dtype=float32)
```
As you can see, for each instance the model estimates one probability per
class, from class 0 to class 9. This is similar to the output of the
```
predict_proba() method in Scikit-Learn classifiers. For example, for
```
```
the first image it estimates that the probability of class 9 (ankle boot) is
```
```
96%, the probability of class 7 (sneaker) is 2%, the probability of class 5
```
```
(sandal) is 1%, and the probabilities of the other classes are negligible. In
```
other words, it is highly confident that the first image is footwear, most
likely ankle boots but possibly sneakers or sandals. If you only care about
```
the class with the highest estimated probability (even if that probability is
```
```
quite low), then you can use the argmax() to get the highest probability
```
class index for each instance:
>>> import numpy as np
```
>>> y_pred = y_proba.argmax(axis=-1)
```
>>> y_pred
```
array([9, 2, 1])
```
```
>>> np.array(class_names)[y_pred]
```
```
array(['Ankle boot', 'Pullover', 'Trouser'], dtype='<U11')
```
```
Here, the classifier actually classified all three images correctly (these
```
```
images are shown in Figure 10-12):
```
>>> y_new = y_test[:3]
>>> y_new
```
array([9, 2, 1], dtype=uint8)
```
Figure 10-12. Correctly classified Fashion MNIST images
Now you know how to use the Sequential API to build, train, evaluate, and
use a classification MLP. But what about regression?
Building a Regression MLP Using the Sequential API
Let’s switch back to the California housing problem and tackle it using the
same MLP as earlier, with 3 hidden layers composed of 50 neurons each,
but this time building it with Keras.
Using the Sequential API to build, train, evaluate, and use a regression
MLP is quite similar to what we did for classification. The main differences
in the following code example are the fact that the output layer has a single
```
neuron (since we only want to predict a single value) and it uses no
```
activation function, the loss function is the mean squared error, the metric is
the RMSE, and we’re using an Adam optimizer like Scikit-Learn’s
MLPRegressor did. Moreover, in this example we don’t need a
Flatten layer, and instead we’re using a Normalization layer as the
first layer: it does the same thing as Scikit-Learn’s StandardScaler, but
```
it must be fitted to the training data using its adapt() method before you
```
```
call the model’s fit() method. Keras has other preprocessing layers
```
which will be covered in Chapter 13.
```
tf.random.set_seed(42)
```
```
norm_layer =
```
```
tf.keras.layers.Normalization(input_shape=X_train.shape[1:])
```
```
model = tf.keras.Sequential([
```
norm_layer,
```
tf.keras.layers.Dense(50, activation="relu"),
```
```
tf.keras.layers.Dense(50, activation="relu"),
```
```
tf.keras.layers.Dense(50, activation="relu"),
```
```
tf.keras.layers.Dense(1)
```
```
])
```
```
optimizer = tf.keras.optimizers.Adam(learning_rate=1e-3)
```
```
model.compile(loss="mse", optimizer=optimizer, metrics=
```
```
["RootMeanSquaredError"])
```
```
norm_layer.adapt(X_train)
```
```
history = model.fit(X_train, y_train, epochs=20,
```
```
validation_data=(X_valid, y_valid))
```
```
mse_test, rmse_test = model.evaluate(X_test, y_test)
```
```
X_new = X_test[:3]
```
```
y_pred = model.predict(X_new)
```
NOTE
The Normalization layer learns the feature means and standard deviations in the
```
training data when you call the adapt() method. Yet when you display the model’s
```
summary, these statistics are listed as non-trainable. This is because these parameters are
not affected by Gradient Descent.
As you can see, the Sequential API is quite clean and straightforward.
However, although Sequential models are extremely common, it is
sometimes useful to build neural networks with more complex topologies,
or with multiple inputs or outputs. For this purpose, Keras offers the
Functional API.
Building Complex Models Using the Functional API
One example of a nonsequential neural network is a Wide & Deep neural
network. This neural network architecture was introduced in a 2016 paper
by Heng-Tze Cheng et al. It connects all or part of the inputs directly to
the output layer, as shown in Figure 10-13. This architecture makes it
```
possible for the neural network to learn both deep patterns (using the deep
```
```
path) and simple rules (through the short path). In contrast, a regular MLP
```
```
forces all the data to flow through the full stack of layers; thus, simple
```
patterns in the data may end up being distorted by this sequence of
transformations.
14
15
Figure 10-13. Wide & Deep neural network
Let’s build such a neural network to tackle the California housing problem:
```
normalization_layer = tf.keras.layers.Normalization()
```
```
hidden_layer1 = tf.keras.layers.Dense(30, activation="relu")
```
```
hidden_layer2 = tf.keras.layers.Dense(30, activation="relu")
```
```
concat_layer = tf.keras.layers.Concatenate()
```
```
output_layer = tf.keras.layers.Dense(1)
```
```
input_ = tf.keras.layers.Input(shape=X_train.shape[1:])
```
```
normalized = normalization_layer(input_)
```
```
hidden1 = hidden_layer1(normalized)
```
```
hidden2 = hidden_layer2(hidden1)
```
```
concat = concat_layer([input_, hidden2])
```
```
output = output_layer(concat)
```
```
model = tf.keras.Model(inputs=[input_], outputs=[output])
```
At a high level, the first five lines create all the layers we need to build the
model, the next six lines use these layers just like functions to go from the
input to the output, and the last line creates a Keras Model object by
pointing to the input and the output. Let’s go through this code in more
```
details:
```
First, we create five layers: a Normalization layer to
standardize the inputs, two Dense layers with 30 neurons each,
using the ReLU activation function, a Concatenate layer, and
one more Dense layer with a single neuron for the output layer,
without any activation function.
```
Next, we create an Input object (the variable name input_ is
```
```
used to avoid overshadowing Python’s built-in input()
```
```
function). This is a specification of the kind of input the model will
```
get, including its shape and optionally its dtype, which defaults
to 32-bit floats. A model may actually have multiple inputs, as we
will see shortly.
Then we use the Normalization layer just like a function,
passing it the Input object. This is why this is called the
Functional API. Note that we are just telling Keras how it should
```
connect the layers together; no actual data is being processed yet,
```
as the Input object is just a data specification. In other words, it’s
a symbolic input. The output of this call is also symbolic:
normalized doesn’t store any actual data, it’s just used to
construct the model.
In the same may, we then pass normalized to
hidden_layer1, which outputs hidden1, and we pass
hidden1 to hidden_layer2, which outputs hidden2.
So far, we’ve connected the layers sequentially, but then we use the
concat_layer to concatenate the input and the second hidden
layer’s output. Again, no actual data is concatenated yet: it’s all
symbolic, to build the model.
Then we pass concat to the output_layer, which gives us
the final output.
Lastly, we create a Keras Model, specifying which inputs and
outputs to use.
Once you have built this Keras model, everything is exactly like earlier, so
there’s no need to repeat it here: you must compile the model, adapt the
Normalization layer, fit the model, evaluate it, and use it to make
predictions.
But what if you want to send a subset of the features through the wide path
```
and a different subset (possibly overlapping) through the deep path (see
```
```
Figure 10-14)? In this case, one solution is to use multiple inputs. For
```
example, suppose we want to send five features through the wide path
```
(features 0 to 4), and six features through the deep path (features 2 to 7):
```
```
input_wide = tf.keras.layers.Input(shape=[5]) # features 0 to 4
```
```
input_deep = tf.keras.layers.Input(shape=[6]) # features 2 to 7
```
```
norm_layer_wide = tf.keras.layers.Normalization()
```
```
norm_layer_deep = tf.keras.layers.Normalization()
```
```
norm_wide = norm_layer_wide(input_wide)
```
```
norm_deep = norm_layer_deep(input_deep)
```
```
hidden1 = tf.keras.layers.Dense(30, activation="relu")(norm_deep)
```
```
hidden2 = tf.keras.layers.Dense(30, activation="relu")(hidden1)
```
```
concat = tf.keras.layers.concatenate([norm_wide, hidden2])
```
```
output = tf.keras.layers.Dense(1)(concat)
```
```
model = tf.keras.Model(inputs=[input_wide, input_deep], outputs=
```
```
[output])
```
Figure 10-14. Handling multiple inputs
There are a few things to note in this code example, compared to the
previous example:
Each Dense layer is created and called on the same line. This is a
common practice, as it makes the code more concise without losing
clarity. However, we can’t do this with the Normalization
layer since we need a reference to the layer to be able to call its
```
adapt() method before fitting the model.
```
```
We used tf.keras.layers.concatenate(), which creates
```
a Concatenate layer and calls it with the given inputs.
We specified inputs=[input_wide, input_deep] when
creating the model, since there are two inputs.
```
Now we can compile the model as usual, but when we call the fit()
```
method, instead of passing a single input matrix X_train, we must pass a
```
pair of matrices (X_train_wide, X_train_deep): one per input.
```
The same is true for X_valid, and also for X_test and X_new when
```
you call evaluate() or predict():
```
```
optimizer = tf.keras.optimizers.Adam(learning_rate=1e-3)
```
```
model.compile(loss="mse", optimizer=optimizer, metrics=
```
```
["RootMeanSquaredError"])
```
X_train_wide, X_train_deep = X_train[:, :5], X_train[:, 2:]
X_valid_wide, X_valid_deep = X_valid[:, :5], X_valid[:, 2:]
X_test_wide, X_test_deep = X_test[:, :5], X_test[:, 2:]
X_new_wide, X_new_deep = X_test_wide[:3], X_test_deep[:3]
```
norm_layer_wide.adapt(X_train_wide)
```
```
norm_layer_deep.adapt(X_train_deep)
```
```
history = model.fit((X_train_wide, X_train_deep), y_train,
```
```
epochs=20,
```
```
validation_data=((X_valid_wide,
```
```
X_valid_deep), y_valid))
```
```
mse_test = model.evaluate((X_test_wide, X_test_deep), y_test)
```
```
y_pred = model.predict((X_new_wide, X_new_deep))
```
TIP
```
Instead of passing a tuple (X_train_wide, X_train_deep), you can pass a
```
```
dictionary {"input_wide": X_train_wide, "input_deep":
```
```
X_train_deep}, assuming you set name="input_wide" and
```
```
name="input_deep" when creating the inputs. This is highly recommended when
```
there are many inputs, to clarify the code and avoid getting the order wrong.
There are also many use cases in which you may want to have multiple
```
outputs:
```
The task may demand it. For instance, you may want to locate and
classify the main object in a picture. This is both a regression tasks
and a classification task.
Similarly, you may have multiple independent tasks based on the
same data. Sure, you could train one neural network per task, but in
many cases you will get better results on all tasks by training a
single neural network with one output per task. This is because the
neural network can learn features in the data that are useful across
tasks. For example, you could perform multitask classification on
pictures of faces, using one output to classify the person’s facial
```
expression (smiling, surprised, etc.) and another output to identify
```
whether they are wearing glasses or not.
```
Another use case is as a regularization technique (i.e., a training
```
constraint whose objective is to reduce overfitting and thus
```
improve the model’s ability to generalize). For example, you may
```
want to add an auxiliary output in a neural network architecture
```
(see Figure 10-15) to ensure that the underlying part of the network
```
learns something useful on its own, without relying on the rest of
the network.
Figure 10-15. Handling multiple outputs, in this example to add an auxiliary output for
regularization
Adding an extra output is quite easy: just connect it to the appropriate layer
and add it to your model’s list of outputs. For example, the following code
builds the network represented in Figure 10-15:
[...] # Same as above, up to the main output layer
```
output = tf.keras.layers.Dense(1)(concat)
```
```
aux_output = tf.keras.layers.Dense(1)(hidden2)
```
```
model = tf.keras.Model(inputs=[input_wide, input_deep],
```
```
outputs=[output, aux_output])
```
Each output will need its own loss function. Therefore, when we compile
the model, we should pass a list of losses. If we pass a single loss, Keras
will assume that the same loss must be used for all outputs. By default,
Keras will compute all the losses and simply add them up to get the final
loss used for training. Since we care much more about the main output than
```
about the auxiliary output (as it is just used for regularization), we want to
```
give the main output’s loss a much greater weight. Luckily, it is possible to
set all the loss weights when compiling the model:
```
optimizer = tf.keras.optimizers.Adam(learning_rate=1e-3)
```
```
model.compile(loss=("mse", "mse"), loss_weights=(0.9, 0.1),
```
```
optimizer=optimizer,
```
```
metrics=["RootMeanSquaredError"])
```
TIP
```
Instead of passing a tuple loss=("mse", "mse"), you can pass a dictionary
```
```
loss={"output": "mse", "aux_output": "mse"}, assuming you created
```
the output layers with name="output" and name="aux_output". Just like for
the inputs, this clarifies the code and avoids errors when there are several outputs. You
can also pass a dictionary for loss_weights.
Now when you train the model, you need to provide labels for each output.
In this example, the main output and the auxiliary output should try to
predict the same thing, so they should use the same labels. So instead of
```
passing y_train, you need to pass (y_train, y_train), or a
```
```
dictionary {"output": y_train, "aux_output": y_train} if
```
the outputs were named "output" and "aux_output". The same goes
for y_valid and y_test:
```
norm_layer_wide.adapt(X_train_wide)
```
```
norm_layer_deep.adapt(X_train_deep)
```
```
history = model.fit(
```
```
(X_train_wide, X_train_deep), (y_train, y_train), epochs=20,
```
```
validation_data=((X_valid_wide, X_valid_deep), (y_valid,
```
```
y_valid))
```
```
)
```
When you evaluate the model, Keras returns the weighted sum of the
losses, as well as all the individual losses and metrics:
```
eval_results = model.evaluate((X_test_wide, X_test_deep),
```
```
(y_test, y_test))
```
weighted_sum_of_losses, main_loss, aux_loss, main_rmse, aux_rmse
= eval_results
TIP
```
If you set return_dict=True, then evaluate() will return a dictionary instead
```
of a big tuple.
```
Similarly, the predict() method will return predictions for each output:
```
```
y_pred_main, y_pred_aux = model.predict((X_new_wide, X_new_deep))
```
```
The predict() method returns a tuple, and it does not have a
```
return_dict argument to get a dictionary instead, but you can create
one using model.output_names:
```
y_pred_tuple = model.predict((X_new_wide, X_new_deep))
```
```
y_pred = dict(zip(model.output_names, y_pred_tuple))
```
As you can see, you can build all sorts of architectures with the Functional
API. Let’s look at one last way you can build Keras models.
Using the Subclassing API to Build Dynamic Models
Both the Sequential API and the Functional API are declarative: you start
by declaring which layers you want to use and how they should be
connected, and only then can you start feeding the model some data for
training or inference. This has many advantages: the model can easily be
```
saved, cloned, and shared; its structure can be displayed and analyzed; the
```
framework can infer shapes and check types, so errors can be caught early
```
(i.e., before any data ever goes through the model). It’s also fairly
```
straightforward to debug, since the whole model is a static graph of layers.
But the flip side is just that: it’s static. Some models involve loops, varying
shapes, conditional branching, and other dynamic behaviors. For such
cases, or simply if you prefer a more imperative programming style, the
Subclassing API is for you.
You must subclass the Model class, create the layers you need in the
constructor, and use them to perform the computations you want in the
```
call() method. For example, creating an instance of the following
```
WideAndDeepModel class gives us an equivalent model to the one we
just built with the Functional API:
```
class WideAndDeepModel(tf.keras.Model):
```
```
def __init__(self, units=30, activation="relu", **kwargs):
```
```
super().__init__(**kwargs) # needed to support naming
```
the model
```
self.norm_layer_wide = tf.keras.layers.Normalization()
```
```
self.norm_layer_deep = tf.keras.layers.Normalization()
```
```
self.hidden1 = tf.keras.layers.Dense(units,
```
```
activation=activation)
```
```
self.hidden2 = tf.keras.layers.Dense(units,
```
```
activation=activation)
```
```
self.main_output = tf.keras.layers.Dense(1)
```
```
self.aux_output = tf.keras.layers.Dense(1)
```
```
def call(self, inputs):
```
input_wide, input_deep = inputs
```
norm_wide = self.norm_layer_wide(input_wide)
```
```
norm_deep = self.norm_layer_deep(input_deep)
```
```
hidden1 = self.hidden1(norm_deep)
```
```
hidden2 = self.hidden2(hidden1)
```
```
concat = tf.keras.layers.concatenate([norm_wide,
```
```
hidden2])
```
```
output = self.main_output(concat)
```
```
aux_output = self.aux_output(hidden2)
```
return output, aux_output
```
model = WideAndDeepModel(30, activation="relu",
```
```
name="my_cool_model")
```
This example looks very much like the Functional API, except we separate
the creation of the layers in the constructor from their usage in the
```
call() method. We also do not need to create the Input objects: we just
```
```
use the input argument to the call() method.
```
Now that you have a model instance, you can compile it, adapt its
```
normalization layers (e.g., using
```
```
model.norm_layer_wide.adapt(...) and
```
```
model.norm_layer_deep.adapt(...)), fit it, evaluate it, and use
```
it to make predictions, exactly like you did with the Functional API.
The big difference with this API is that you can do pretty much anything
```
you want in the call() method: for loops, if statements, low-level
```
```
TensorFlow operations—your imagination is the limit (see Chapter 12)!
```
This makes it a great API when experimenting with new ideas, especially
for researchers. However, this extra flexibility does come at a cost: your
```
model’s architecture is hidden within the call() method, so Keras cannot
```
easily inspect it, the model cannot be cloned using
```
tf.keras.models.clone_model(), and when you call the
```
```
summary() method, you only get a list of layers, without any information
```
on how they are connected to each other. Moreover, Keras cannot check
types and shapes ahead of time, and it is easier to make mistakes. So unless
you really need that extra flexibility, you should probably stick to the
Sequential API or the Functional API.
16
TIP
Keras models can be used just like regular layers, so you can easily combine them to
build complex architectures.
Now that you know how to build and train neural nets using Keras, you will
want to save them!
Saving and Restoring a Model
Saving a trained Keras model is as simple as it gets:
```
model.save("my_keras_model")
```
By default, Keras saves the model using TensorFlow’s SavedModel format:
```
this is a directory (with the given name) containing several files and
```
subdirectories. In particular, the saved_model.pb file contains the
model’s architecture and logic in the form of a serialized computation
graph, so you don’t need to deploy the model’s source code in order to use
```
it in production, the SavedModel is sufficient (we will see how this works
```
```
in Chapter 12). The keras_metadata.pb file contains extra
```
information needed by Keras. The variables subdirectory contains all
```
the parameter values (including the connection weights, the biases, the
```
```
normalization statistics, and the optimizer’s parameters), possibly split
```
across multiple files if the model is very large. Lastly, the assets
directory may contain extra files, for example data samples, feature names,
class names, and so on. By default, the assets directory is empty. Since
the optimizer is also saved, including its hyperparameters and any state it
may have, after loading the model you can continue training if you want.
NOTE
If you set save_format="h5" or use a name ending with .h5, then Keras will save
the model to a single file using the HDF5 format. However, this format does not support
the Subclassing API, and most TensorFlow deployment tools require the SavedModel
format.
You will typically have a script that trains a model and saves it, and one or
```
more scripts (or web services) that load the model and use it to evaluate it
```
or to make predictions. Loading the model is just as easy as saving it:
```
model = tf.keras.models.load_model("my_keras_model")
```
```
y_pred_main, y_pred_aux = model.predict((X_new_wide, X_new_deep))
```
```
You can also use save_weights() and load_weights() to save and
```
load only the parameter values. This includes the connection weights,
biases, preprocessing stats, optimizer state, etc. The parameter values are
saved in one or more files such as my_weights.data-00004-of-
00052, plus an index file like my_weights.index.
Saving just the weights is faster and uses less disk space than saving the
whole model, so it’s perfect to save quick checkpoints during training. If
you’re training a big model, and it takes hours or days, then you must save
checkpoints regularly in case the computer crashes. But how can you tell
```
the fit() method to save checkpoints? Use callbacks.
```
Using Callbacks
```
The fit() method accepts a callbacks argument that lets you specify
```
a list of objects that Keras will call before and after training, before and
after each epoch, and even before and after processing each batch. For
example, the ModelCheckpoint callback saves checkpoints of your
model at regular intervals during training, by default at the end of each
```
epoch:
```
```
checkpoint_cb =
```
```
tf.keras.callbacks.ModelCheckpoint("my_checkpoints",
```
```
save_weights_only=True)
```
```
history = model.fit([...], callbacks=[checkpoint_cb])
```
Moreover, if you use a validation set during training, you can set
```
save_best_only=True when creating the ModelCheckpoint. In
```
this case, it will only save your model when its performance on the
validation set is the best so far. This way, you do not need to worry about
training for too long and overfitting the training set: simply restore the last
saved model after training, and this will be the best model on the validation
```
set. This is one way to implement early stopping (introduced in Chapter 4),
```
but it won’t actually stop training.
Another way is to use the EarlyStopping callback. It will interrupt
training when it measures no progress on the validation set for a number of
```
epochs (defined by the patience argument), and if you set
```
```
restore_best_weights=True it will roll back to the best model at
```
the end of training. You can combine both callbacks to save checkpoints of
your model in case your computer crashes, and interrupt training early
when there is no more progress, to avoid wasting time and resources and to
reduce overfitting:
```
early_stopping_cb = tf.keras.callbacks.EarlyStopping(patience=10,
```
```
restore_best_weights=True)
```
```
history = model.fit([...], callbacks=[checkpoint_cb,
```
```
early_stopping_cb])
```
The number of epochs can be set to a large value since training will stop
```
automatically when there is no more progress (just make sure the learning
```
rate is not too small, or else it might keep making slow progress until the
```
end). The EarlyStopping callback will store the weights of the best
```
model in RAM, and it will restore them for you at the end of training.
TIP
There are many other callbacks available in the tf.keras.callbacks package.
If you need extra control, you can easily write your own custom callbacks.
For example, the following custom callback will display the ratio between
```
the validation loss and the training loss during training (e.g., to detect
```
```
overfitting):
```
```
class PrintValTrainRatioCallback(tf.keras.callbacks.Callback):
```
```
def on_epoch_end(self, epoch, logs):
```
```
ratio = logs["val_loss"] / logs["loss"]
```
```
print(f"Epoch={epoch}, val/train={ratio:.2f}")
```
```
As you might expect, you can implement on_train_begin(),
```
```
on_train_end(), on_epoch_begin(), on_epoch_end(),
```
```
on_batch_begin(), and on_batch_end(). Callbacks can also be
```
```
used during evaluation and predictions, should you ever need them (e.g., for
```
```
debugging). For evaluation, you should implement on_test_begin(),
```
```
on_test_end(), on_test_batch_begin(), or
```
```
on_test_batch_end(), which are called by evaluate(). For
```
```
prediction, you should implement on_predict_begin(),
```
```
on_predict_end(), on_predict_batch_begin(), or
```
```
on_predict_batch_end(), which are called by predict().
```
Now let’s take a look at one more tool you should definitely have in your
toolbox when using Keras: TensorBoard.
Using TensorBoard for Visualization
TensorBoard is a great interactive visualization tool that you can use to
view the learning curves during training, compare curves and metrics
between multiple runs, visualize the computation graph, analyze training
statistics, view images generated by your model, visualize complex
multidimensional data projected down to 3D and automatically clustered for
```
you, profile your network (i.e., measure its speed to identify bottlenecks),
```
and more!
TensorBoard is installed automatically when you install TensorFlow.
However, you will need a TensorBoard plugin to visualize profiling data. If
you followed the installation instructions at https://homl.info/install to run
everything locally, then you already have the plugin installed, but if you are
using Colab, then you must run the following command:
%pip install -q -U tensorboard-plugin-profile
To use TensorBoard, you must modify your program so that it outputs the
data you want to visualize to special binary log files called event files. Each
binary data record is called a summary. The TensorBoard server will
monitor the log directory, and it will automatically pick up the changes and
```
update the visualizations: this allows you to visualize live data (with a short
```
```
delay), such as the learning curves during training. In general, you want to
```
point the TensorBoard server to a root log directory and configure your
program so that it writes to a different subdirectory every time it runs. This
way, the same TensorBoard server instance will allow you to visualize and
compare data from multiple runs of your program, without getting
everything mixed up.
Let’s name the root log directory my_logs, and let’s define a little
```
function that generates the path of the log subdirectory based on the current
```
date and time, so that it’s different at every run:
from pathlib import Path
from time import strftime
```
def get_run_logdir(root_logdir="my_logs"):
```
```
return Path(root_logdir) / strftime("run_%Y_%m_%d_%H_%M_%S")
```
```
run_logdir = get_run_logdir() # e.g.,
```
my_logs/run_2022_08_01_17_25_59
```
The good news is that Keras provides a convenient TensorBoard()
```
```
callback which will take care of creating the log directory for you (along
```
```
with its parent directories if needed), and it will create event files and write
```
summaries to them during training. It will measure your model’s training
```
and validation loss and metrics (in this case, the MSE and RMSE), and it
```
will also profile your neural network. It is straightforward to use:
```
tensorboard_cb = tf.keras.callbacks.TensorBoard(run_logdir,
```
```
profile_batch=
```
```
(100, 200))
```
```
history = model.fit([...], callbacks=[tensorboard_cb])
```
And that’s all there is to it! In this example, it will profile the network
between batches 100 and 200 during the first epoch. Why 100 and 200?
Well, it often takes a few batches for the neural network to “warm up”, so
you don’t want to profile too early. And profiling uses a bit of resources, so
it’s best not to do it for every batch.
Next, try changing the learning rate from 0.001 to 0.002, and run the code
again, with a new log subdirectory. You will end up with a directory
structure similar to this one:
my_logs
├── run_2022_08_01_17_25_59
│ ├── train
│ │ ├──
events.out.tfevents.1659331561.my_host_name.42042.0.v2
│ │ ├── events.out.tfevents.1659331562.my_host_name.profile-
empty
│ │ └── plugins
│ │ └── profile
│ │ └── 2022_08_01_17_26_02
│ │ ├── my_host_name.input_pipeline.pb
│ │ └── [...]
│ └── validation
│ └──
events.out.tfevents.1659331562.my_host_name.42042.1.v2
└── run_2022_08_01_17_31_12
└── [...]
There’s one directory per run, each containing one subdirectory for training
logs and one for validation logs. Both contain event files, and the training
logs also include profiling traces.
Now that you have the event files ready, it’s time to start the TensorBoard
server. This can be done directly within Jupyter or Colab using the Jupyter
extension for TensorBoard, which gets installed along with the TensorBoard
library. This extension is preinstalled in Colab. The following code loads
the Jupyter extension for TensorBoard, and the second line starts a
TensorBoard server for the my_logs directory, and it connects to this
server and displays the user interface directly inside of Jupyter. The server
```
listens on the first available TCP port greater or equal to 6006 (or you can
```
```
set the port you want using the --port option).
```
%load_ext tensorboard
%tensorboard --logdir=./my_logs
TIP
If you are running everything on your own machine, it’s also possible to start
TensorBoard by executing tensorboard --logdir=./my_logs in a terminal.
You must first activate the conda environment in which you installed TensorBoard, and
go to the handson-ml3 directory. Once the server is started, visit
```
http://localhost:6006/.
```
Now you should see TensorBoard’s user interface. Click the SCALARS tab
```
to view the learning curves (see Figure 10-16). At the bottom left, select the
```
```
logs you want to visualize (e.g., the training logs from the first and second
```
```
run), and click the epoch_loss scalar. Notice that the training loss went
```
down nicely during both runs, but the second run went down a bit faster
thanks to the higher learning rate.
Figure 10-16. Visualizing learning curves with TensorBoard
You can also visualize the whole computation graph in the GRAPHS tab,
the learned weights projected to 3D in the PROJECTOR tab, and the
```
profiling traces in the PROFILE tab. The TensorBoard() callback has
```
```
options to log extra data too (see the documentation for more details). You
```
```
can click the refresh button (⟳) at the top right to make TensorBoard
```
```
refresh data, and you can click the settings button (⚙) to activate auto-
```
refresh and specify the refresh interval.
Additionally, TensorFlow offers a lower-level API in the tf.summary
package. The following code creates a SummaryWriter using the
```
create_file_writer() function, and it uses this writer as a Python
```
context to log scalars, histograms, images, audio, and text, all of which can
then be visualized using TensorBoard:
```
test_logdir = get_run_logdir()
```
```
writer = tf.summary.create_file_writer(str(test_logdir))
```
```
with writer.as_default():
```
```
for step in range(1, 1000 + 1):
```
```
tf.summary.scalar("my_scalar", np.sin(step / 10),
```
```
step=step)
```
```
data = (np.random.randn(100) + 2) * step / 100 # gets
```
larger
```
tf.summary.histogram("my_hist", data, buckets=50,
```
```
step=step)
```
```
images = np.random.rand(2, 32, 32, 3) * step / 1000 #
```
gets brighter
```
tf.summary.image("my_images", images, step=step)
```
```
texts = ["The step is " + str(step), "Its square is " +
```
```
str(step ** 2)]
```
```
tf.summary.text("my_text", texts, step=step)
```
```
sine_wave = tf.math.sin(tf.range(12000) / 48000 * 2 *
```
```
np.pi * step)
```
```
audio = tf.reshape(tf.cast(sine_wave, tf.float32), [1,
```
```
-1, 1])
```
```
tf.summary.audio("my_audio", audio, sample_rate=48000,
```
```
step=step)
```
If you run this code and click the refresh button in TensorBoard, you will
see several tabs appear: IMAGES, AUDIO, DISTRIBUTIONS,
HISTOGRAMS and TEXT. Try clicking on the IMAGES tab, and use the
slider above each image to view the images at different time steps.
Similarly, go to the AUDIO tab and try listening to the audios at different
time steps. As you can see, TensorBoard is a useful tool even beyond
TensorFlow or Deep Learning.
TIP
You can share your results online by publishing them to https://tensorboard.dev. For
this, just run !tensorboard dev upload --logdir ./my_logs. The first
time, it will ask you to accept the terms and conditions and authenticate. Then your logs
will be uploaded, and you will get a permanent link to view your results in a
TensorBoard interface.
Let’s summarize what you’ve learned so far in this chapter: you now know
where neural nets came from, what an MLP is and how you can use it for
classification and regression, how to use Keras’s Sequential API to build
MLPs, and how to use the Functional API or the Subclassing API to build
more complex model architectures, including Wide & Deep models, as well
as models with multiple inputs and outputs. You also learned how to save
and restore a model and how to use callbacks for checkpointing, early
stopping, and more. Finally, you learned how to use TensorBoard for
visualization. You can already go ahead and use neural networks to tackle
many problems! However, you may wonder how to choose the number of
hidden layers, the number of neurons in the network, and all the other
hyperparameters. Let’s look at this now.
Fine-Tuning Neural Network
Hyperparameters
The flexibility of neural networks is also one of their main drawbacks: there
are many hyperparameters to tweak. Not only can you use any imaginable
network architecture, but even in a basic MLP you can change the number
of layers, the number of neurons and the type of activation function to use
in each layer, the weight initialization logic, the type of optimizer to use, its
learning rate, the batch size, and more. How do you know what
combination of hyperparameters is the best for your task?
One option is to convert your Keras model to a Scikit-Learn estimator, and
then use GridSearchCV or RandomizedSearchCV to fine-tune the
hyperparameters, as you did in Chapter 2. For this, you can use the
KerasRegressor and KerasClassifier wrapper classes from the
```
SciKeras library (see https://github.com/adriangb/scikeras for more
```
```
details). However, there’s a better way: you can use the Keras Tuner library,
```
which is a hyperparameter tuning library for Keras models. It offers several
tuning strategies, it’s highly customizable, and it has excellent integration
with TensorBoard. Let’s see how to use it.
If you followed the installation instructions at https://homl.info/install to
run everything locally, then you already have Keras Tuner installed, but if
you are using Colab, then you must run %pip install -q -U
keras-tuner. Next, import keras_tuner, usually as kt, then write a
```
function that builds, compiles, and returns a Keras model. The function
```
must take a kt.HyperParameters object as argument, which it can use
```
to define hyperparameters (integers, floats, strings, etc.) along with their
```
range of possible values, and these hyperparameters may be used to build
and compile the model. For example, the following function builds and
compiles an MLP to classify Fashion MNIST images, using
```
hyperparameters such as the number of hidden layers (n_hidden), the
```
```
number of neurons per layer (n_neurons), the learning rate
```
```
(learning_rate), and the type of optimizer to use (optimizer):
```
import keras_tuner as kt
```
def build_model(hp):
```
```
n_hidden = hp.Int("n_hidden", min_value=0, max_value=8,
```
```
default=2)
```
```
n_neurons = hp.Int("n_neurons", min_value=16, max_value=256)
```
```
learning_rate = hp.Float("learning_rate", min_value=1e-4,
```
```
max_value=1e-2,
```
```
sampling="log")
```
```
optimizer = hp.Choice("optimizer", values=["sgd", "adam"])
```
if optimizer == "sgd":
```
optimizer =
```
```
tf.keras.optimizers.SGD(learning_rate=learning_rate)
```
```
else:
```
```
optimizer =
```
```
tf.keras.optimizers.Adam(learning_rate=learning_rate)
```
```
model = tf.keras.Sequential()
```
```
model.add(tf.keras.layers.Flatten())
```
```
for _ in range(n_hidden):
```
```
model.add(tf.keras.layers.Dense(n_neurons,
```
```
activation="relu"))
```
```
model.add(tf.keras.layers.Dense(10, activation="softmax"))
```
```
model.compile(loss="sparse_categorical_crossentropy",
```
```
optimizer=optimizer,
```
```
metrics=["accuracy"])
```
return model
The first part of the function defines the hyperparameters. For example,
```
hp.Int("n_hidden", min_value=0, max_value=8,
```
```
default=2) checks whether a hyperparameter named "n_hidden" is
```
already present in the HyperParameters object hp, and if so it returns
its value. If not, then it registers a new integer hyperparameter named
```
"n_hidden", whose possible values range from 0 to 8 (inclusive), and it
```
```
returns the default value, which is 2 in this case (when default is not set,
```
```
then min_value is returned). The "n_neurons" hyperparameter is
```
registered in a similar way. The "learning_rate" hyperparameter is
registered as a float ranging from 10 to 10 , and since
```
sampling="log", learning rates of all scales will be sampled equally.
```
Lastly, the optimizer hyperparameter is registered with two possible
```
values: "sgd" or "adam" (the default value is the first one, which is
```
```
"sgd" in this case). Depending on the value of optimizer, we create an
```
SGD optimizer or an Adam optimizer with the given learning rate.
The second part of the function just builds the model using the
hyperparameter values. It creates a Sequential model starting with a
```
Flatten layer, followed by the requested number of hidden layers (as
```
–4 –2
```
determined by the n_hidden hyperparameter) using the ReLU activation
```
```
function, and an output layer with 10 neurons (one per class) and using the
```
softmax activation function. Lastly, the function compiles the model and
returns it.
Now if you want to do a basic random search, you can create a
kt.RandomSearch tuner, passing the build_model function to the
```
constructor, and call the tuner’s search() method:
```
```
random_search_tuner = kt.RandomSearch(
```
build_model, objective="val_accuracy", max_trials=5,
```
overwrite=True,
```
```
directory="my_fashion_mnist", project_name="my_rnd_search",
```
```
seed=42)
```
```
random_search_tuner.search(X_train, y_train, epochs=10,
```
```
validation_data=(X_valid, y_valid))
```
```
The RandomSearch tuner first calls build_model() once with an
```
empty Hyperparameters object, just to gather all the hyperparameters
specifications. Then, in this example, it runs 5 trials, and for each trial it
builds a model using hyperparameters sampled randomly within their
respective ranges, then it trains that model for 10 epochs and saves it to a
subdirectory of the my_fashion_mnist/my_rnd_search directory.
Since overwrite=True, the my_rnd_search directory is deleted
before training starts. If you run this code a second time but with
```
overwrite=False and max_trials=10, the tuner will continue
```
tuning where it left off, running 5 more trials: this means you don’t have to
run all the trials in one shot. Lastly, since objective is set to
"val_accuracy", the tuner prefers models with a higher validation
accuracy, so once the tuner has finished searching, you can get the best
models like this:
```
top3_models = random_search_tuner.get_best_models(num_models=3)
```
```
best_model = top3_models[0]
```
```
You can also call get_best_hyperparameters() to get the
```
kt.HyperParameters of the best models:
>>> top3_params =
```
random_search_tuner.get_best_hyperparameters(num_trials=3)
```
>>> top3_params[0].values # best hyperparameter values
```
{'n_hidden': 5,
```
'n_neurons': 70,
'learning_rate': 0.00041268008323824807,
```
'optimizer': 'adam'}
```
Each tuner is guided by a so-called oracle: before each trial, the tuner asks
the oracle to tell it what the next trial should be. The RandomSearch
tuner uses a RandomSearchOracle, which is pretty basic: it just picks
the next trial randomly, as we saw earlier. Since the oracle keeps track of all
the trials, you can ask it to give you the best one, and you can display a
summary of that trial:
>>> best_trial =
```
random_search_tuner.oracle.get_best_trials(num_trials=1)[0]
```
```
>>> best_trial.summary()
```
Trial summary
```
Hyperparameters:
```
```
n_hidden: 5
```
```
n_neurons: 70
```
```
learning_rate: 0.00041268008323824807
```
```
optimizer: adam
```
```
Score: 0.8736000061035156
```
```
This shows the best hyperparameters (like earlier), as well as the validation
```
accuracy. You can also access all the metrics directly:
```
>>> best_trial.metrics.get_last_value("val_accuracy")
```
0.8736000061035156
If you are happy with the best model’s performance, you may continue
```
training it for a few epochs on the full training set (X_train_full and
```
```
y_train_full), then evaluate it on the test set, and deploy it to
```
```
production (see Chapter 19):
```
```
best_model.fit(X_train_full, y_train_full, epochs=10)
```
```
test_loss, test_accuracy = best_model.evaluate(X_test, y_test)
```
In some cases, you may want to fine-tune data preprocessing
```
hyperparameters, or model.fit() arguments, such as the batch size. For
```
this, you must use a slightly different technique: instead of writing a
```
build_model() function, you must subclass the kt.HyperModel
```
```
class and define two methods, build() and fit(). The build()
```
```
method does the exact same thing as the build_model() function, and
```
```
the fit() method takes a HyperParameters object and a compiled
```
```
model as argument, as well as all the model.fit() arguments, and it
```
```
must fit the model and return the History object. Crucially, the fit()
```
method may use hyperparameters to decide how to preprocess the data,
tweak the batch size, and more. For example, the following class builds the
same model as before, with the same hyperparameters, but it also uses a
boolean "normalize" hyperparameter to control whether or not to
standardize the training data before fitting the model:
```
class MyClassificationHyperModel(kt.HyperModel):
```
```
def build(self, hp):
```
```
return build_model(hp)
```
```
def fit(self, hp, model, X, y, **kwargs):
```
```
if hp.Boolean("normalize"):
```
```
norm_layer = tf.keras.layers.Normalization()
```
```
X = norm_layer(X)
```
```
return model.fit(X, y, **kwargs)
```
You can then pass an instance of this class to the tuner of your choice,
instead of passing the build_model function. For example, let’s build a
kt.Hyperband tuner based on a MyClassificationHyperModel
```
instance:
```
```
hyperband_tuner = kt.Hyperband(
```
```
MyClassificationHyperModel(), objective="val_accuracy",
```
```
seed=42,
```
```
max_epochs=10, factor=3, hyperband_iterations=2,
```
```
overwrite=True, directory="my_fashion_mnist",
```
```
project_name="hyperband")
```
This tuner is similar to the HalvingRandomSearchCV class we
discussed in Chapter 2: it starts by training many different models for few
epochs, then it eliminates the worst models and keeps only the top 1 /
```
factor models (i.e., the top third in this case), repeating this selection
```
process until a single model is left. The max_epochs argument controls
the max number of epochs that the best model will be trained for. The
whole process is repeated twice in this case
```
(hyperband_iterations=2). The total number of training epochs
```
across all models for each hyperband iteration is about max_epochs *
```
(log(max_epochs) / log(factor)) ** 2, so it’s about 44
```
epochs in this example. The other arguments as the same as for
kt.RandomSearch.
Let’s run the Hyperband tuner now. We’ll use the TensorBoard callback,
```
this time pointing to the root log directory (the tuner will take care of using
```
```
a different subdirectory for each trial), as well as an EarlyStopping
```
```
callback:
```
```
root_logdir = Path(hyperband_tuner.project_dir) / "tensorboard"
```
```
tensorboard_cb = tf.keras.callbacks.TensorBoard(root_logdir)
```
```
early_stopping_cb = tf.keras.callbacks.EarlyStopping(patience=2)
```
```
hyperband_tuner.search(X_train, y_train, epochs=10,
```
```
validation_data=(X_valid, y_valid),
```
```
callbacks=[early_stopping_cb,
```
```
tensorboard_cb])
```
Now if you open TensorBoard, pointing --logdir to the
my_fashion_mnist/hyperband/tensorboard directory, you will
see all the trial results, as they unfold. Make sure to visit the HPARAMS
```
tab: it contains a summary of all the hyperparameter combinations that were
```
tried, along with the corresponding metrics. Notice that there are three tabs
inside the HPARAMS tab: a table view, a parallel coordinates view, and a
scatter plot matrix view. In the lower part of the left panel, uncheck all
metrics except for validation.epoch_accuracy: this will make the
graphs clearer. In the parallel coordinates view, try selecting a range of high
values on the validation.epoch_accuracy column: this will filter
17
only the hyperparameter combinations that reached a good performance.
Click on one of the hyperparameter combinations: the corresponding
learning curves will appear at the bottom of the page. Take some time to go
through each tab: they will help you understand the effect of each
hyperparameter on performance, as well as the interactions between the
hyperparameters.
Hyperband is smarter than pure random search in the way it allocates
resources, but at its core it still explores the hyperparameter space
```
randomly: it’s fast, but coarse. However, Keras Tuner also includes a
```
kt.BayesianOptimization tuner: this algorithm gradually learns
which regions of the hyperparameter space are most promising by fitting a
probabilistic model called a Gaussian process. This allows it to gradually
zoom in on the best hyperparameters. The downside is that this algorithm
has its own hyperparameters: alpha represents the level of noise you
```
expect in the performance measures across trials (it defaults to 10 ), and
```
beta specifies how much you want the algorithm to explore, instead of
```
simply exploiting the known good regions of hyperparameter space (it
```
```
defaults to 2.6). Other than that, this tuner can be used just like the previous
```
```
ones:
```
```
bayesian_opt_tuner = kt.BayesianOptimization(
```
```
MyClassificationHyperModel(), objective="val_accuracy",
```
```
seed=42,
```
```
max_trials=10, alpha=1e-4, beta=2.6,
```
```
overwrite=True, directory="my_fashion_mnist",
```
```
project_name="bayesian_opt")
```
```
bayesian_opt_tuner.search([...])
```
Hyperparameter tuning is still an active area of research, and many other
approaches are being explored. For example, check out DeepMind’s
excellent 2017 paper, where the authors used an evolutionary algorithm to
jointly optimize a population of models and their hyperparameters. Google
has also used an evolutionary approach, not just to search for
hyperparameters but also to explore all sorts of model architectures. They
offer a hyperparameter tuning service as part of their Google’s Vertex AI
```
platform (see Chapter 19). Evolutionary algorithms have even been used
```
–4
18
successfully to train individual neural networks, replacing the ubiquitous
Gradient Descent! For an example, see the 2017 post by Uber where the
authors introduce their Deep Neuroevolution technique.
But despite all this exciting progress and all these tools and services, it still
helps to have an idea of what values are reasonable for each hyperparameter
so that you can build a quick prototype and restrict the search space. The
following sections provide guidelines for choosing the number of hidden
layers and neurons in an MLP and for selecting good values for some of the
main hyperparameters.
Number of Hidden Layers
For many problems, you can begin with a single hidden layer and get
reasonable results. An MLP with just one hidden layer can theoretically
model even the most complex functions, provided it has enough neurons.
But for complex problems, deep networks have a much higher parameter
efficiency than shallow ones: they can model complex functions using
exponentially fewer neurons than shallow nets, allowing them to reach
much better performance with the same amount of training data.
To understand why, suppose you are asked to draw a forest using some
drawing software, but you are forbidden to copy and paste anything. It
would take an enormous amount of time: you would have to draw each tree
individually, branch by branch, leaf by leaf. If you could instead draw one
leaf, copy and paste it to draw a branch, then copy and paste that branch to
create a tree, and finally copy and paste this tree to make a forest, you
would be finished in no time. Real-world data is often structured in such a
hierarchical way, and deep neural networks automatically take advantage of
```
this fact: lower hidden layers model low-level structures (e.g., line segments
```
```
of various shapes and orientations), intermediate hidden layers combine
```
```
these low-level structures to model intermediate-level structures (e.g.,
```
```
squares, circles), and the highest hidden layers and the output layer combine
```
```
these intermediate structures to model high-level structures (e.g., faces).
```
Not only does this hierarchical architecture help DNNs converge faster to a
good solution, but it also improves their ability to generalize to new
datasets. For example, if you have already trained a model to recognize
faces in pictures and you now want to train a new neural network to
recognize hairstyles, you can kickstart the training by reusing the lower
layers of the first network. Instead of randomly initializing the weights and
biases of the first few layers of the new neural network, you can initialize
them to the values of the weights and biases of the lower layers of the first
network. This way the network will not have to learn from scratch all the
```
low-level structures that occur in most pictures; it will only have to learn
```
```
the higher-level structures (e.g., hairstyles). This is called transfer learning.
```
In summary, for many problems you can start with just one or two hidden
layers and the neural network will work just fine. For instance, you can
easily reach above 97% accuracy on the MNIST dataset using just one
hidden layer with a few hundred neurons, and above 98% accuracy using
two hidden layers with the same total number of neurons, in roughly the
same amount of training time. For more complex problems, you can ramp
up the number of hidden layers until you start overfitting the training set.
Very complex tasks, such as large image classification or speech
```
recognition, typically require networks with dozens of layers (or even
```
```
hundreds, but not fully connected ones, as we will see in Chapter 14), and
```
they need a huge amount of training data. You will rarely have to train such
networks from scratch: it is much more common to reuse parts of a
pretrained state-of-the-art network that performs a similar task. Training
```
will then be a lot faster and require much less data (we will discuss this in
```
```
Chapter 11).
```
Number of Neurons per Hidden Layer
The number of neurons in the input and output layers is determined by the
type of input and output your task requires. For example, the MNIST task
requires 28 × 28 = 784 inputs and 10 output neurons.
As for the hidden layers, it used to be common to size them to form a
pyramid, with fewer and fewer neurons at each layer—the rationale being
that many low-level features can coalesce into far fewer high-level features.
A typical neural network for MNIST might have 3 hidden layers, the first
with 300 neurons, the second with 200, and the third with 100. However,
this practice has been largely abandoned because it seems that using the
same number of neurons in all hidden layers performs just as well in most
```
cases, or even better; plus, there is only one hyperparameter to tune, instead
```
of one per layer. That said, depending on the dataset, it can sometimes help
to make the first hidden layer bigger than the others.
Just like the number of layers, you can try increasing the number of neurons
gradually until the network starts overfitting. Alternatively, you can try
building a model with a bit more layers and neurons than you actually need,
then use early stopping and other regularization techniques to prevent it
from overfitting too much. Vincent Vanhoucke, a scientist at Google, has
dubbed this the “stretch pants” approach: instead of wasting time looking
for pants that perfectly match your size, just use large stretch pants that will
shrink down to the right size. With this approach, you avoid bottleneck
layers that could ruin your model. Indeed, if a layer has too few neurons, it
will not have enough representational power to preserve all the useful
```
information from the inputs (e.g., a layer with two neurons can only output
```
```
2D data, so if it gets 3D data as input, some information will be lost). No
```
matter how big and powerful the rest of the network is, that information
will never be recovered.
TIP
In general you will get more bang for your buck by increasing the number of layers
instead of the number of neurons per layer.
Learning Rate, Batch Size, and Other Hyperparameters
The number of hidden layers and neurons are not the only hyperparameters
you can tweak in an MLP. Here are some of the most important ones, as
well as tips on how to set them:
Learning rate
The learning rate is arguably the most important hyperparameter. In
general, the optimal learning rate is about half of the maximum learning
```
rate (i.e., the learning rate above which the training algorithm diverges,
```
```
as we saw in Chapter 4). One way to find a good learning rate is to train
```
the model for a few hundred iterations, starting with a very low learning
```
rate (e.g., 10 ) and gradually increasing it up to a very large value (e.g.,
```
```
10). This is done by multiplying the learning rate by a constant factor at
```
```
each iteration (e.g., by (10 / 10 ) to go from 10 to 10 in 500
```
```
iterations). If you plot the loss as a function of the learning rate (using a
```
```
log scale for the learning rate), you should see it dropping at first. But
```
after a while, the learning rate will be too large, so the loss will shoot
back up: the optimal learning rate will be a bit lower than the point at
```
which the loss starts to climb (typically about 10 times lower than the
```
```
turning point). You can then reinitialize your model and train it
```
normally using this good learning rate. We will look at more learning
rate techniques in Chapter 11.
Optimizer
Choosing a better optimizer than plain old Mini-batch Gradient Descent
```
(and tuning its hyperparameters) is also quite important. We will see
```
several advanced optimizers in Chapter 11.
Batch size
The batch size can have a significant impact on your model’s
performance and training time. The main benefit of using large batch
sizes is that hardware accelerators like GPUs can process them
```
efficiently (see Chapter 19), so the training algorithm will see more
```
instances per second. Therefore, many researchers and practitioners
recommend using the largest batch size that can fit in GPU RAM.
There’s a catch, though: in practice, large batch sizes often lead to
training instabilities, especially at the beginning of training, and the
resulting model may not generalize as well as a model trained with a
–5
-5 1 / 500 –5
small batch size. In April 2018, Yann LeCun even tweeted “Friends
don’t let friends use mini-batches larger than 32,” citing a 2018 paper
by Dominic Masters and Carlo Luschi which concluded that using small
```
batches (from 2 to 32) was preferable because small batches led to
```
better models in less training time. Other papers point in the opposite
```
direction, however; in 2017, papers by Elad Hoffer et al. and Priya
```
Goyal et al. showed that it was possible to use very large batch sizes
```
(up to 8,192) using various techniques such as warming up the learning
```
```
rate (i.e., starting training with a small learning rate, then ramping it up,
```
```
as we will see in Chapter 11). This led to a very short training time,
```
without any generalization gap. So, one strategy is to try to use a large
batch size, using learning rate warmup, and if training is unstable or the
final performance is disappointing, then try using a small batch size
instead.
Activation function
We discussed how to choose the activation function earlier in this
```
chapter: in general, the ReLU activation function will be a good default
```
for all hidden layers. For the output layer, it really depends on your task.
Number of iterations
In most cases, the number of training iterations does not actually need to
be tweaked: just use early stopping instead.
TIP
The optimal learning rate depends on the other hyperparameters—especially the batch
size—so if you modify any hyperparameter, make sure to update the learning rate as
well.
For more best practices regarding tuning neural network hyperparameters,
check out the excellent 2018 paper by Leslie Smith.
19
20
21
22
This concludes our introduction to artificial neural networks and their
implementation with Keras. In the next few chapters, we will discuss
techniques to train very deep nets. We will also explore how to customize
models using TensorFlow’s lower-level API and how to load and preprocess
data efficiently using the Data API. And we will dive into other popular
neural network architectures: convolutional neural networks for image
processing, recurrent neural networks and transformers for sequential data
and text, autoencoders for representation learning, and generative
adversarial networks to model and generate data.
Exercises
1. The TensorFlow Playground is a handy neural network simulator
built by the TensorFlow team. In this exercise, you will train
several binary classifiers in just a few clicks, and tweak the
model’s architecture and its hyperparameters to gain some intuition
on how neural networks work and what their hyperparameters do.
Take some time to explore the following:
a. The patterns learned by a neural net. Try training the
```
default neural network by clicking the Run button (top
```
```
left). Notice how it quickly finds a good solution for the
```
classification task. The neurons in the first hidden layer
have learned simple patterns, while the neurons in the
second hidden layer have learned to combine the simple
patterns of the first hidden layer into more complex
patterns. In general, the more layers there are, the more
complex the patterns can be.
b. Activation functions. Try replacing the tanh activation
```
function with a ReLU activation function, and train the
```
network again. Notice that it finds a solution even faster,
but this time the boundaries are linear. This is due to the
shape of the ReLU function.
23
c. The risk of local minima. Modify the network architecture
to have just one hidden layer with three neurons. Train it
```
multiple times (to reset the network weights, click the
```
```
Reset button next to the Play button). Notice that the
```
training time varies a lot, and sometimes it even gets stuck
in a local minimum.
d. What happens when neural nets are too small. Remove
one neuron to keep just two. Notice that the neural
network is now incapable of finding a good solution, even
if you try multiple times. The model has too few
parameters and systematically underfits the training set.
e. What happens when neural nets are large enough. Set the
number of neurons to eight, and train the network several
times. Notice that it is now consistently fast and never gets
stuck. This highlights an important finding in neural
network theory: large neural networks rarely get stuck in
local minima, and even when they do these local optima
are often almost as good as the global optimum. However,
they can still get stuck on long plateaus for a long time.
f. The risk of vanishing gradients in deep networks. Select
```
the spiral dataset (the bottom-right dataset under
```
```
“DATA”), and change the network architecture to have
```
four hidden layers with eight neurons each. Notice that
training takes much longer and often gets stuck on
plateaus for long periods of time. Also notice that the
```
neurons in the highest layers (on the right) tend to evolve
```
```
faster than the neurons in the lowest layers (on the left).
```
This problem, called the “vanishing gradients” problem,
can be alleviated with better weight initialization and
```
other techniques, better optimizers (such as AdaGrad or
```
```
Adam), or Batch Normalization (discussed in Chapter 11).
```
g. Go further. Take an hour or so to play around with other
parameters and get a feel for what they do, to build an
intuitive understanding about neural networks.
2. Draw an ANN using the original artificial neurons (like the ones in
```
Figure 10-3) that computes A ⊕ B (where ⊕ represents the XOR
```
```
operation). Hint: A ⊕ B = (A ∧ ¬ B) ∨ (¬ A ∧ B).
```
3. Why is it generally preferable to use a Logistic Regression
```
classifier rather than a classical Perceptron (i.e., a single layer of
```
threshold logic units trained using the Perceptron training
```
algorithm)? How can you tweak a Perceptron to make it equivalent
```
to a Logistic Regression classifier?
4. Why was the sigmoid activation function a key ingredient in
training the first MLPs?
5. Name three popular activation functions. Can you draw them?
6. Suppose you have an MLP composed of one input layer with 10
passthrough neurons, followed by one hidden layer with 50
artificial neurons, and finally one output layer with 3 artificial
neurons. All artificial neurons use the ReLU activation function.
What is the shape of the input matrix X?
What are the shapes of the hidden layer’s weight matrix
W and bias vector b ?
What are the shapes of the output layer’s weight matrix
W and bias vector b ?
What is the shape of the network’s output matrix Y?
Write the equation that computes the network’s output
matrix Y as a function of X, W , b , W , and b .
7. How many neurons do you need in the output layer if you want to
classify email into spam or ham? What activation function should
h h
o o
h h o o
you use in the output layer? If instead you want to tackle MNIST,
how many neurons do you need in the output layer, and which
activation function should you use? What about for getting your
network to predict housing prices, as in Chapter 2?
8. What is backpropagation and how does it work? What is the
difference between backpropagation and reverse-mode autodiff?
9. Can you list all the hyperparameters you can tweak in a basic
MLP? If the MLP overfits the training data, how could you tweak
these hyperparameters to try to solve the problem?
10. Train a deep MLP on the MNIST dataset (you can load it using
```
tf.keras.datasets.mnist.load_data(). See if you
```
can get over 98% accuracy by manually tuning the
hyperparameters. Try searching for the optimal learning rate by
```
using the approach presented in this chapter (i.e., by growing the
```
learning rate exponentially, plotting the loss, and finding the point
```
where the loss shoots up). Next, try tuning the hyperparameters
```
using Keras Tuner with all the bells and whistles—save
checkpoints, use early stopping, and plot learning curves using
TensorBoard.
Solutions to these exercises are available at the end of this chapter’s
notebook, at https://homl.info/colab3.
1 You can get the best of both worlds by being open to biological inspirations without being
afraid to create biologically unrealistic models, as long as they work well.
2 Warren S. McCulloch and Walter Pitts, “A Logical Calculus of the Ideas Immanent in
```
Nervous Activity,” The Bulletin of Mathematical Biology 5, no. 4 (1943): 115–113.
```
3 They are not actually attached, just so close that they can very quickly exchange chemical
signals.
```
4 Image by Bruce Blaus (Creative Commons 3.0). Reproduced from
```
```
https://en.wikipedia.org/wiki/Neuron.
```
5 In the context of Machine Learning, the phrase “neural networks” generally refers to ANNs,
not BNNs.
```
6 Drawing of a cortical lamination by S. Ramon y Cajal (public domain). Reproduced from
```
```
https://en.wikipedia.org/wiki/Cerebral_cortex.
```
7 Note that this solution is not unique: when data points are linearly separable, there is an
infinity of hyperplanes that can separate them.
```
8 For example, when the inputs are (0, 1), the lower left neuron computes 0×1 + 1×1 – 3/2 = –
```
1/2, which is negative so it outputs 0. The lower right neuron computes 0×1 + 1×1 – 1/2 = 1/2
which is positive so it outputs 1. The output neuron receives the outputs of the first two
```
neurons as its inputs, so it computes 0×(–1) + 1×1 - 1/2 = 1/2, which is positive so it outputs 1.
```
9 In the 1990s, an ANN with more than two hidden layers was considered deep. Nowadays, it is
common to see ANNs with dozens of layers, or even hundreds, so the definition of “deep” is
quite fuzzy.
```
10 David Rumelhart et al. “Learning Internal Representations by Error Propagation,” (Defense
```
```
Technical Information Center technical report, September 1985).
```
```
11 Biological neurons seem to implement a roughly sigmoid (S-shaped) activation function, so
```
researchers stuck to sigmoid functions for a very long time. But it turns out that ReLU
generally works better in ANNs. This is one of the cases where the biological analogy was
perhaps misleading.
```
12 Project ONEIROS (Open-ended Neuro-Electronic Intelligent Robot Operating System).
```
```
13 You can also use tf.keras.utils.plot_model() to generate an image of your
```
model.
14 Heng-Tze Cheng et al., “Wide & Deep Learning for Recommender Systems,” Proceedings of
```
the First Workshop on Deep Learning for Recommender Systems (2016): 7–10.
```
15 The short path can also be used to provide manually engineered features to the neural
network.
16 Keras models have an output attribute, so we cannot use that name for the main output
layer, which is why we renamed it to main_output.
17 Hyperband is actually a bit more sophisticated than successive halving, see the paper by Lisha
Li et al., “Hyperband: A Novel Bandit-Based Approach to Hyperparameter Optimization,”
```
Journal of Machine Learning Research 18 (April 2018): 1–52.
```
18 Max Jaderberg et al., “Population Based Training of Neural Networks,” arXiv preprint
```
arXiv:1711.09846 (2017).
```
19 Dominic Masters and Carlo Luschi, “Revisiting Small Batch Training for Deep Neural
```
Networks,” arXiv preprint arXiv:1804.07612 (2018).
```
20 Elad Hoffer et al., “Train Longer, Generalize Better: Closing the Generalization Gap in Large
Batch Training of Neural Networks,” Proceedings of the 31st International Conference on
```
Neural Information Processing Systems (2017): 1729–1739.
```
21 Priya Goyal et al., “Accurate, Large Minibatch SGD: Training ImageNet in 1 Hour,” arXiv
```
preprint arXiv:1706.02677 (2017).
```
22 Leslie N. Smith, “A Disciplined Approach to Neural Network Hyper-Parameters: Part 1—
Learning Rate, Batch Size, Momentum, and Weight Decay,” arXiv preprint arXiv:1803.09820
```
(2018).
```
23 A few extra ANN architectures are presented in the online notebook at
```
https://homl.info/extra-anns.
```
Chapter 11. Training Deep
Neural Networks
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take
advantage of these technologies long before the official release of these
titles.
This will be the 11th chapter of the final book. Notebooks are available
on GitHub at https://github.com/ageron/handson-ml3. Datasets are
available at https://github.com/ageron/data.
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this
chapter, please reach out to the editoor at ntache@oreilly.com.
In Chapter 10 you built, trained, and fine-tuned your first artificial neural
networks. But they were shallow nets, with just a few hidden layers. What
if you need to tackle a complex problem, such as detecting hundreds of
types of objects in high-resolution images? You may need to train a much
deeper ANN, perhaps with 10 layers or many more, each containing
hundreds of neurons, linked by hundreds of thousands of connections.
Training a deep neural network isn’t a walk in the park. Here are some of
the problems you could run into:
You may be faced with the tricky vanishing gradients problem or
the related exploding gradients problem. This is when the gradients
grow smaller and smaller, or larger and larger, when flowing
backward through the DNN during training. Both of these
problems make lower layers very hard to train.
You might not have enough training data for such a large network,
or it might be too costly to label.
Training may be extremely slow.
A model with millions of parameters would severely risk
overfitting the training set, especially if there are not enough
training instances or if they are too noisy.
In this chapter we will go through each of these problems and present
techniques to solve them. We will start by exploring the vanishing and
exploding gradients problems and some of their most popular solutions.
Next, we will look at transfer learning and unsupervised pretraining, which
can help you tackle complex tasks even when you have little labeled data.
Then we will discuss various optimizers that can speed up training large
models tremendously. Finally, we will go through a few popular
regularization techniques for large neural networks.
With these tools, you will be able to train very deep nets. Welcome to Deep
Learning!
The Vanishing/Exploding Gradients
Problems
As we discussed in Chapter 10, the backpropagation algorithm’s second
phase works by going from the output layer to the input layer, propagating
the error gradient along the way. Once the algorithm has computed the
gradient of the cost function with regard to each parameter in the network,
it uses these gradients to update each parameter with a Gradient Descent
step.
Unfortunately, gradients often get smaller and smaller as the algorithm
progresses down to the lower layers. As a result, the Gradient Descent
update leaves the lower layers’ connection weights virtually unchanged,
and training never converges to a good solution. This is called the vanishing
gradients problem. In some cases, the opposite can happen: the gradients
can grow bigger and bigger until layers get insanely large weight updates
and the algorithm diverges. This is the exploding gradients problem, which
```
surfaces most often in recurrent neural networks (see Chapter 16). More
```
```
generally, deep neural networks suffer from unstable gradients; different
```
layers may learn at widely different speeds.
This unfortunate behavior was empirically observed long ago, and it was
one of the reasons deep neural networks were mostly abandoned in the
early 2000s. It wasn’t clear what caused the gradients to be so unstable
when training a DNN, but some light was shed in a 2010 paper by Xavier
Glorot and Yoshua Bengio. The authors found a few suspects, including
```
the combination of the popular sigmoid (logistic) activation function and
```
```
the weight initialization technique that was most popular at the time (i.e., a
```
```
normal distribution with a mean of 0 and a standard deviation of 1). In
```
short, they showed that with this activation function and this initialization
scheme, the variance of the outputs of each layer is much greater than the
variance of its inputs. Going forward in the network, the variance keeps
increasing after each layer until the activation function saturates at the top
layers. This saturation is actually made worse by the fact that the sigmoid
```
function has a mean of 0.5, not 0 (the hyperbolic tangent function has a
```
mean of 0 and behaves slightly better than the sigmoid function in deep
```
networks).
```
```
Looking at the sigmoid activation function (see Figure 11-1), you can see
```
```
that when inputs become large (negative or positive), the function saturates
```
```
at 0 or 1, with a derivative extremely close to 0 (i.e., the curve is flat at both
```
```
extremes). Thus, when backpropagation kicks in it has virtually no gradient
```
```
to propagate back through the network; and what little gradient exists keeps
```
getting diluted as backpropagation progresses down through the top layers,
so there is really nothing left for the lower layers.
1
Figure 11-1. Sigmoid activation function saturation
Glorot and He Initialization
In their paper, Glorot and Bengio propose a way to significantly alleviate
the unstable gradients problem. They point out that we need the signal to
flow properly in both directions: in the forward direction when making
predictions, and in the reverse direction when backpropagating gradients.
We don’t want the signal to die out, nor do we want it to explode and
saturate. For the signal to flow properly, the authors argue that we need the
variance of the outputs of each layer to be equal to the variance of its
inputs, and we need the gradients to have equal variance before and after
```
flowing through a layer in the reverse direction (please check out the paper
```
```
if you are interested in the mathematical details). It is actually not possible
```
to guarantee both unless the layer has an equal number of inputs and
```
outputs (these numbers are called the fan-in and fan-out of the layer), but
```
Glorot and Bengio proposed a good compromise that has proven to work
very well in practice: the connection weights of each layer must be
```
initialized randomly as described in Equation 11-1, where fan = (fan +
```
```
fan )/2. This initialization strategy is called Xavier initialization or Glorot
```
initialization, after the paper’s first author.
```
Equation 11-1. Glorot initialization (when using the sigmoid activation function)
```
If you replace fan with fan in Equation 11-1, you get an initialization
strategy that Yann LeCun proposed in the 1990s. He called it LeCun
initialization. Genevieve Orr and Klaus-Robert Müller even recommended
```
it in their 1998 book Neural Networks: Tricks of the Trade (Springer).
```
LeCun initialization is equivalent to Glorot initialization when fan =
fan . It took over a decade for researchers to realize how important this
2
avg in
out
Normal distribution with mean 0 and variance σ2 = 1fanavg
Or a uniform distribution between − r and + r, with r = √ 3fanavg
avg in
in
out
trick is. Using Glorot initialization can speed up training considerably, and
it is one of the tricks that led to the success of Deep Learning.
Some papers have provided similar strategies for different activation
functions. These strategies differ only by the scale of the variance and
```
whether they use fan or fan , as shown in Table 11-1 (for the uniform
```
```
distribution, just use r = √3σ2). The initialization strategy for the ReLU
```
activation function and its variants is called He initialization or Kaiming
initialization, after the paper’s first author. For SELU, use Yann LeCun’s
initialization method, preferably with a Normal distribution. We will cover
all these activation functions shortly.
3
avg in
T
a
b
l
e
1
1
-
1
.
I
n
i
t
i
a
l
i
z
a
t
i
o
n
p
a
r
a
m
e
t
e
r
s
f
o
r
e
a
c
h
t
y
p
e
o
f
a
c
t
i
v
a
t
i
o
n
f
u
n
c
t
i
o
n
```
Initialization Activation functions σ² (Normal)
```
Xavier Glorot None, tanh, sigmoid, softmax 1 / fan
Kaiming He ReLU, Leaky ReLU, ELU, GELU, Swish, Mish 2 / fan
Yann LeCun SELU 1 / fan
By default, Keras uses Glorot initialization with a uniform distribution.
When creating a layer, you can change this to He initialization by setting
```
kernel_initializer="he_uniform" or
```
```
kernel_initializer="he_normal" like this:
```
import tensorflow as tf
```
dense = tf.keras.layers.Dense(50, activation="relu",
```
```
kernel_initializer="he_normal")
```
Alternatively, you can obtain any of the initializations listed in Table 11-1
and more using the VarianceScaling initializer. For example, if you
want He initialization with a uniform distribution and based on fan
```
(rather than fan ), you can use the following code:
```
```
he_avg_init = tf.keras.initializers.VarianceScaling(scale=2.,
```
```
mode="fan_avg",
```
```
distribution="uniform")
```
```
dense = tf.keras.layers.Dense(50, activation="sigmoid",
```
```
kernel_initializer=he_avg_init)
```
Better Activation Functions
One of the insights in the 2010 paper by Glorot and Bengio was that the
problems with unstable gradients were in part due to a poor choice of
activation function. Until then most people had assumed that if Mother
avg
in
in
avg
in
Nature had chosen to use roughly sigmoid activation functions in biological
neurons, they must be an excellent choice. But it turns out that other
activation functions behave much better in deep neural networks—in
particular, the ReLU activation function, mostly because it does not saturate
for positive values, and also because it is very fast to compute.
Unfortunately, the ReLU activation function is not perfect. It suffers from a
problem known as the dying ReLUs: during training, some neurons
effectively “die,” meaning they stop outputting anything other than 0. In
some cases, you may find that half of your network’s neurons are dead,
especially if you used a large learning rate. A neuron dies when its weights
```
get tweaked in such a way that the input of the ReLU function (i.e., the
```
```
weighted sum of the neuron’s inputs plus its bias term) is negative for all
```
instances in the training set. When this happens, it just keeps outputting
zeros, and Gradient Descent does not affect it anymore because the gradient
of the ReLU function is zero when its input is negative.
To solve this problem, you may want to use a variant of the ReLU function,
such as the leaky ReLU.
Leaky ReLU
```
The leaky ReLU activation function is defined as LeakyReLU (z) =
```
```
max(αz, z) (see Figure 11-2). The hyperparameter α defines how much the
```
```
function “leaks”: it is the slope of the function for z < 0. Having a slope for
```
```
z < 0 ensures that leaky ReLUs never die; they can go into a long coma, but
```
they have a chance to eventually wake up. A 2015 paper by Bing Xu et al.
compared several variants of the ReLU activation function, and one of its
conclusions was that the leaky variants always outperformed the strict
```
ReLU activation function. In fact, setting α = 0.2 (a huge leak) seemed to
```
```
result in better performance than α = 0.01 (a small leak). The paper also
```
```
evaluated the randomized leaky ReLU (RReLU), where α is picked
```
randomly in a given range during training and is fixed to an average value
during testing. RReLU also performed fairly well and seemed to act as a
regularizer, reducing the risk of overfitting the training set. Finally, the
```
paper evaluated the parametric leaky ReLU (PReLU), where α is authorized
```
4
α
5
to be learned during training: instead of being a hyperparameter, it becomes
a parameter that can be modified by backpropagation like any other
parameter. PReLU was reported to strongly outperform ReLU on large
image datasets, but on smaller datasets it runs the risk of overfitting the
training set.
Figure 11-2. Leaky ReLU: like ReLU, but with a small slope for negative values
Keras includes the classes LeakyReLU and PReLU in the
tf.keras.layers package. Just like for other ReLU variants, you
should use He initialization, for example:
```
leaky_relu = tf.keras.layers.LeakyReLU(alpha=0.2) # defaults to
```
```
alpha=0.3
```
```
dense = tf.keras.layers.Dense(50, activation=leaky_relu,
```
```
kernel_initializer="he_normal")
```
If you prefer, you can also use LeakyReLU as a separate layer in your
model, it makes no difference for training and predictions:
```
model = tf.keras.models.Sequential([
```
[...] # more layers
```
tf.keras.layers.Dense(50, kernel_initializer="he_normal"), #
```
no activation
```
tf.keras.layers.LeakyReLU(alpha=0.2), # activation as a
```
separate layer
[...] # more layers
```
])
```
For PReLU, replace LeakyReLU with PReLU. There is currently no
official implementation of RReLU in Keras, but you can fairly easily
```
implement your own (to learn how to do that, see the exercises at the end of
```
```
Chapter 12).
```
ReLU, leaky ReLU, and PReLU all suffer from the fact that they are not
```
smooth functions: their derivatives abruptly change (at z = 0). As we saw in
```
Chapter 4 when we discussed Lasso, this sort of discontinuity can make
Gradient Descent bounce around the optimum, and slow down
convergence. So now we will look at smooth variants of the ReLU
activation function, starting with ELU and SELU.
ELU and SELU
In a 2016 paper by Djork-Arné Clevert et al. proposed a new activation
```
function called the exponential linear unit (ELU) that outperformed all the
```
6
ReLU variants in the authors’ experiments: training time was reduced, and
the neural network performed better on the test set. Equation 11-2 shows
this activation function’s definition.
Equation 11-2. ELU activation function
```
ELUα (z) = {
```
```
The ELU activation function looks a lot like the ReLU function (see
```
```
Figure 11-3), with a few major differences:
```
It takes on negative values when z < 0, which allows the unit to
have an average output closer to 0 and helps alleviate the vanishing
gradients problem. The hyperparameter α defines the opposite of
the value that the ELU function approaches when z is a large
negative number. It is usually set to 1, but you can tweak it like any
other hyperparameter.
It has a nonzero gradient for z < 0, which avoids the dead neurons
problem.
If α is equal to 1 then the function is smooth everywhere, including
around z = 0, which helps speed up Gradient Descent since it does
not bounce as much to the left and right of z = 0.
Using ELU with Keras is as easy as setting activation="elu", and
like with other ReLU variants, you should use He initialization. The main
drawback of the ELU activation function is that it is slower to compute than
```
the ReLU function and its variants (due to the use of the exponential
```
```
function). Its faster convergence rate during training may compensate for
```
that slow computation, but still, at test time an ELU network will be a bit
slower than a ReLU network.
```
α(exp (z) − 1) if z < 0
```
z if z ≥ 0
Figure 11-3. ELU and SELU activation functions
A year after ELU, a 2017 paper by Günter Klambauer et al. introduced the
```
Scaled ELU (SELU) activation function: as its name suggests, it is a scaled
```
```
variant of the ELU activation function (about 1.05 times ELU, using α ͌
```
```
1.67). The authors showed that if you build a neural network composed
```
```
exclusively of a stack of dense layers (i.e., an MLP), and if all hidden layers
```
use the SELU activation function, then the network will self-normalize: the
output of each layer will tend to preserve a mean of 0 and a standard
deviation of 1 during training, which solves the vanishing/exploding
gradients problem. As a result, the SELU activation function may
outperform other activation functions for MLPs, especially deep ones. To
use it with Keras, just set activation="selu". There are, however, a
```
few conditions for self-normalization to happen (see the paper for the
```
```
mathematical justification):
```
The input features must be standardized: mean 0 and standard
deviation 1.
Every hidden layer’s weights must be initialized using LeCun
normal initialization. In Keras, this means setting
```
kernel_initializer="lecun_normal".
```
The self-normalizing property is only guaranteed with plain MLPs.
If you try to use SELU in other architectures, like recurrent
```
networks (see Chapter 16) or networks with skip connections (i.e.,
```
```
connections that skip layers, such as in Wide & Deep nets), it will
```
probably not outperform ELU.
You cannot use regularization techniques like ℓ or ℓ
```
regularization, max-norm, batch-norm or regular dropout (these are
```
```
discussed later in this chapter).
```
These are significant constraints, so despite its promises, SELU did not gain
a lot of traction. Moreover, three more activation functions seem to
outperform it quite consistently on most tasks: GELU, Swish and Mish.
7
1 2
GELU, Swish and Mish
GELU was introduced in a 2016 paper by Dan Hendrycks and Kevin
Gimpel. Once again, you can think of it as a smooth variant of the ReLU
activation function. Its definition is given in Equation 11-3, where Φ is the
```
standard Gaussian cumulative distribution function (CDF): Φ(z)
```
corresponds to the probability that a value sampled randomly from a
Normal distribution of mean 0 and variance 1 is lower than z.
Equation 11-3. GELU activation function
```
GELU(z) = z Φ(z)
```
As you can see in Figure 11-4, GELU resembles ReLU: it approaches 0
when its input z is very negative, and it approaches z when z is very
positive. However, whereas all activation functions we discussed so far
were both convex and monotonic, the GELU activation function is neither:
from left to right, it starts by going straight, then it wiggles down, reaches a
low point around z ͌ –0.75, and finally it bounces up and ends up going
straight towards the top-right. This fairly complex shape and the fact that it
has a curvature at every point may explain why it works so well, especially
for complex tasks: Gradient Descent may find it easier to fit complex
patterns. In practice, it often outperforms every other activation function
discussed so far. However, it is a bit more computationally intensive, and
the performance boost it provides is not always sufficient to justify the extra
cost. That said, it is possible to show that it is approximately equal to
```
zσ(1.702 z), where σ is the sigmoid function: using this approximation also
```
works very well, and it has the advantage of being much faster to compute.
In fact, the GELU paper also introduced the SiLU activation function,
```
which is equal to zσ(z), but it was outperformed by GELU in their tests.
```
Interestingly, a 2017 paper by Prajit Ramachandran et al. rediscovered the
SiLU function by automatically searching for good activation functions.
They named it Swish, and the name caught on. In their paper, Swish
outperformed every other function, including GELU. The authors later
generalized Swish by adding an extra hyperparameter β to scale the sigmoid
8
9
10
```
function’s input. The generalized Swish function is Swish (z) = zσ(βz), so
```
GELU is approximately equal to the generalized Swish function using β =
1.702. You can tune β like any other hyperparameter. Alternatively, it’s also
possible to make β trainable and let Gradient Descent optimize it: much like
PReLU, this can make your model more powerful, but it also runs the risk
of overfitting the data.
Another quite similar activation function is Mish, which was introduced in a
```
2019 paper by Diganta Misra. It is defined as mish(z) = ztanh(softplus(z)),
```
```
where softplus(z) = log(1 + exp(z)). Just like GELU and Swish, it is a
```
smooth, non-convex, and non-monotonic variant of ReLU, and once again
the author ran many experiments and found that Mish generally
outperformed other activation functions, even Swish and GELU by a tiny
```
margin. Figure 11-4 shows GELU, Swish (both with the default β = 1 and
```
```
with β = 0.6), and lastly Mish. As you can see, Mish overlaps almost
```
perfectly with Swish when z is negative, and almost perfectly with GELU
when z is positive.
β
11
Figure 11-4. GELU, Swish, parametrized Swish, and Mish activation functions
Keras supports GELU and Swish out of the box, just use
```
activation="gelu" or activation="swish". However, it does
```
```
not support Mish or the generalized Swish activation function yet (but see
```
Chapter 12 to see how to implement your own activation functions and
```
layers).
```
TIP
So, which activation function should you use for the hidden layers of your deep neural
networks? ReLU remains a good default for simple tasks: it’s often just as good as the
more sophisticated activation functions, plus it’s very fast to compute, and many
libraries and hardware accelerators provide ReLU-specific optimizations. However,
Swish is probably a better default for more complex tasks, and you can even try
parametrized Swish with a learnable β parameter for the most complex tasks. Mish may
give you very slightly better results, but it requires a bit more compute. If you care a lot
about runtime latency, then you may prefer leaky ReLU, or parametrized leaky ReLU
for more complex tasks. For deep MLPs, give SELU a try, but make sure to respect the
constraints listed earlier. If you have spare time and computing power, you can use
cross-validation to evaluate other activation functions as well.
That’s all for activation functions! Now, let’s look at a completely different
way to solve the unstable gradients problem: Batch Normalization.
Batch Normalization
```
Although using He initialization along with ReLU (or any of its variants)
```
can significantly reduce the danger of the vanishing/exploding gradients
problems at the beginning of training, it doesn’t guarantee that they won’t
come back during training.
In a 2015 paper, Sergey Ioffe and Christian Szegedy proposed a technique
```
called Batch Normalization (BN) that addresses these problems. The
```
technique consists of adding an operation in the model just before or after
the activation function of each hidden layer. This operation simply zero-
centers and normalizes each input, then scales and shifts the result using
12
two new parameter vectors per layer: one for scaling, the other for shifting.
In other words, the operation lets the model learn the optimal scale and
mean of each of the layer’s inputs. In many cases, if you add a BN layer as
the very first layer of your neural network, you do not need to standardize
```
your training set (i.e., no need for StandardScaler or
```
```
Normalization); the BN layer will do it for you (well, approximately,
```
since it only looks at one batch at a time, and it can also rescale and shift
```
each input feature).
```
In order to zero-center and normalize the inputs, the algorithm needs to
estimate each input’s mean and standard deviation. It does so by evaluating
the mean and standard deviation of the input over the current mini-batch
```
(hence the name “Batch Normalization”). The whole operation is
```
summarized step by step in Equation 11-4.
Equation 11-4. Batch Normalization algorithm
In this algorithm:
μ is the vector of input means, evaluated over the whole mini-
```
batch B (it contains one mean per input).
```
m is the number of instances in the mini-batch.
σ is the vector of input standard deviations, also evaluated over
```
the whole mini-batch (it contains one standard deviation per input).
```
1. 𝛍B =
1
mB
mB
∑
```
i=1
```
```
x(i)
```
2. 𝛔B 2 =
1
mB
mB
∑
```
i=1
```
```
(x(i) − 𝛍B)
```
2
3. ˆx(i) =
```
x(i) − 𝛍B
```
√𝛔B 2 + ε
4. z(i) = 𝛄 ⊗ ˆx(i) + 𝛃
B
B
B
ˆx is the vector of zero-centered and normalized inputs for
instance i.
ε is a tiny number that avoids division by zero and ensures the
```
gradients don’t grow too large (typically 10 ). This is called a
```
smoothing term.
```
γ is the output scale parameter vector for the layer (it contains one
```
```
scale parameter per input).
```
```
⊗ represents element-wise multiplication (each input is multiplied
```
```
by its corresponding output scale parameter).
```
```
β is the output shift (offset) parameter vector for the layer (it
```
```
contains one offset parameter per input). Each input is offset by its
```
corresponding shift parameter.
z is the output of the BN operation. It is a rescaled and shifted
version of the inputs.
So during training, BN standardizes its inputs, then rescales and offsets
them. Good! What about at test time? Well, it’s not that simple. Indeed, we
may need to make predictions for individual instances rather than for
batches of instances: in this case, we will have no way to compute each
input’s mean and standard deviation. Moreover, even if we do have a batch
of instances, it may be too small, or the instances may not be independent
and identically distributed, so computing statistics over the batch instances
would be unreliable. One solution could be to wait until the end of training,
then run the whole training set through the neural network and compute the
mean and standard deviation of each input of the BN layer. These “final”
input means and standard deviations could then be used instead of the batch
input means and standard deviations when making predictions. However,
most implementations of Batch Normalization estimate these final statistics
during training by using a moving average of the layer’s input means and
standard deviations. This is what Keras does automatically when you use
the BatchNormalization layer. To sum up, four parameter vectors are
```
learned in each batch-normalized layer: γ (the output scale vector) and β
```
```
(i)
```
–5
```
(i)
```
```
(the output offset vector) are learned through regular backpropagation, and
```
```
μ (the final input mean vector) and σ (the final input standard deviation
```
```
vector) are estimated using an exponential moving average. Note that μ and
```
```
σ are estimated during training, but they are used only after training (to
```
```
replace the batch input means and standard deviations in Equation 11-4).
```
Ioffe and Szegedy demonstrated that Batch Normalization considerably
improved all the deep neural networks they experimented with, leading to a
```
huge improvement in the ImageNet classification task (ImageNet is a large
```
database of images classified into many classes, commonly used to evaluate
```
computer vision systems). The vanishing gradients problem was strongly
```
reduced, to the point that they could use saturating activation functions such
as the tanh and even the sigmoid activation function. The networks were
also much less sensitive to the weight initialization. The authors were able
to use much larger learning rates, significantly speeding up the learning
process. Specifically, they note that:
Applied to a state-of-the-art image classification model, Batch
Normalization achieves the same accuracy with 14 times fewer training
steps, and beats the original model by a significant margin. […] Using
an ensemble of batch-normalized networks, we improve upon the best
published result on ImageNet classification: reaching 4.9% top-5
```
validation error (and 4.8% test error), exceeding the accuracy of human
```
raters.
Finally, like a gift that keeps on giving, Batch Normalization acts like a
```
regularizer, reducing the need for other regularization techniques (such as
```
```
dropout, described later in this chapter).
```
Batch Normalization does, however, add some complexity to the model
```
(although it can remove the need for normalizing the input data, as we
```
```
discussed earlier). Moreover, there is a runtime penalty: the neural network
```
makes slower predictions due to the extra computations required at each
layer. Fortunately, it’s often possible to fuse the BN layer with the previous
layer, after training, thereby avoiding the runtime penalty. This is done by
updating the previous layer’s weights and biases so that it directly produces
outputs of the appropriate scale and offset. For example, if the previous
```
layer computes XW + b, then the BN layer will compute γ⊗(XW + b – μ)/
```
```
σ + β (ignoring the smoothing term ε in the denominator). If we define W′ =
```
```
γ⊗*W*/σ and b′ = γ⊗(b – μ)/σ + β, the equation simplifies to XW′ + b′.
```
```
So if we replace the previous layer’s weights and biases (W and b) with the
```
```
updated weights and biases (W′ and b′), we can get rid of the BN layer
```
```
(TFLite’s converter does this automatically; see Chapter 19).
```
NOTE
You may find that training is rather slow, because each epoch takes much more time
when you use Batch Normalization. This is usually counterbalanced by the fact that
convergence is much faster with BN, so it will take fewer epochs to reach the same
```
performance. All in all, wall time will usually be shorter (this is the time measured by
```
```
the clock on your wall).
```
Implementing Batch Normalization with Keras
As with most things with Keras, implementing Batch Normalization is
straightforward and intuitive. Just add a BatchNormalization layer
before or after each hidden layer’s activation function, and optionally add a
BN layer as well as the first layer in your model. For example, this model
```
applies BN after every hidden layer and as the first layer in the model (after
```
```
flattening the input images):
```
```
model = tf.keras.Sequential([
```
```
tf.keras.layers.Flatten(input_shape=[28, 28]),
```
```
tf.keras.layers.BatchNormalization(),
```
```
tf.keras.layers.Dense(300, activation="relu",
```
```
kernel_initializer="he_normal"),
```
```
tf.keras.layers.BatchNormalization(),
```
```
tf.keras.layers.Dense(100, activation="relu",
```
```
kernel_initializer="he_normal"),
```
```
tf.keras.layers.BatchNormalization(),
```
```
tf.keras.layers.Dense(10, activation="softmax")
```
```
])
```
That’s all! In this tiny example with just two hidden layers, Batch
Normalization is unlikely to have a large impact, but for deeper networks it
can make a tremendous difference.
Let’s display the model summary:
```
>>> model.summary()
```
```
Model: "sequential"
```
_________________________________________________________________
```
Layer (type) Output Shape Param #
```
=================================================================
```
flatten (Flatten) (None, 784) 0
```
_________________________________________________________________
```
batch_normalization (BatchNo (None, 784) 3136
```
_________________________________________________________________
```
dense (Dense) (None, 300) 235500
```
_________________________________________________________________
```
batch_normalization_1 (Batch (None, 300) 1200
```
_________________________________________________________________
```
dense_1 (Dense) (None, 100) 30100
```
_________________________________________________________________
```
batch_normalization_2 (Batch (None, 100) 400
```
_________________________________________________________________
```
dense_2 (Dense) (None, 10) 1010
```
=================================================================
Total params: 271,346
Trainable params: 268,978
Non-trainable params: 2,368
_________________________________________________________________
As you can see, each BN layer adds four parameters per input: γ, β, μ, and
```
σ (for example, the first BN layer adds 3,136 parameters, which is 4 × 784).
```
```
The last two parameters, μ and σ, are the moving averages; they are not
```
```
affected by backpropagation, so Keras calls them “non-trainable" (if you
```
count the total number of BN parameters, 3,136 + 1,200 + 400, and divide
by 2, you get 2,368, which is the total number of non-trainable parameters
```
in this model).
```
```
Let’s look at the parameters of the first BN layer. Two are trainable (by
```
```
backpropagation), and two are not:
```
```
>>> [(var.name, var.trainable) for var in
```
model.layers[1].variables]
```
[('batch_normalization/gamma:0', True),
```
```
('batch_normalization/beta:0', True),
```
13
```
('batch_normalization/moving_mean:0', False),
```
```
('batch_normalization/moving_variance:0', False)]
```
The authors of the BN paper argued in favor of adding the BN layers before
```
the activation functions, rather than after (as we just did). There is some
```
debate about this, as which is preferable seems to depend on the task—you
can experiment with this too to see which option works best on your
dataset. To add the BN layers before the activation functions, you must
remove the activation function from the hidden layers and add them as
separate layers after the BN layers. Moreover, since a Batch Normalization
layer includes one offset parameter per input, you can remove the bias term
from the previous layer by passing use_bias=False when creating it.
And lastly, you can usually drop the first BN layer to avoid sandwitching
the first hidden layer between two BN layers. The updated code looks like
```
this:
```
```
model = tf.keras.Sequential([
```
```
tf.keras.layers.Flatten(input_shape=[28, 28]),
```
```
tf.keras.layers.Dense(300, kernel_initializer="he_normal",
```
```
use_bias=False),
```
```
tf.keras.layers.BatchNormalization(),
```
```
tf.keras.layers.Activation("relu"),
```
```
tf.keras.layers.Dense(100, kernel_initializer="he_normal",
```
```
use_bias=False),
```
```
tf.keras.layers.BatchNormalization(),
```
```
tf.keras.layers.Activation("relu"),
```
```
tf.keras.layers.Dense(10, activation="softmax")
```
```
])
```
The BatchNormalization class has quite a few hyperparameters you
can tweak. The defaults will usually be fine, but you may occasionally need
to tweak the momentum. This hyperparameter is used by the
BatchNormalization layer when it updates the exponential moving
```
averages; given a new value v (i.e., a new vector of input means or standard
```
```
deviations computed over the current batch), the layer updates the running
```
average ˆv using the following equation:
```
ˆv ← ˆv × momentum + v × (1 − momentum)
```
```
A good momentum value is typically close to 1; for example, 0.9, 0.99, or
```
0.999. You want more 9s for larger datasets and for smaller mini-batches.
Another important hyperparameter is axis: it determines which axis
should be normalized. It defaults to –1, meaning that by default it will
```
normalize the last axis (using the means and standard deviations computed
```
```
across the other axes). When the input batch is 2D (i.e., the batch shape is
```
```
[batch size, features]), this means that each input feature will be normalized
```
based on the mean and standard deviation computed across all the instances
in the batch. For example, the first BN layer in the previous code example
```
will independently normalize (and rescale and shift) each of the 784 input
```
features. If we move the first BN layer before the Flatten layer, then the
```
input batches will be 3D, with shape [batch size, height, width]; therefore,
```
```
the BN layer will compute 28 means and 28 standard deviations (1 per
```
column of pixels, computed across all instances in the batch and across all
```
rows in the column), and it will normalize all pixels in a given column
```
using the same mean and standard deviation. There will also be just 28
scale parameters and 28 shift parameters. If instead you still want to treat
each of the 784 pixels independently, then you should set axis=[1, 2].
Batch Normalization has become one of the most-used layers in deep neural
```
networks, especially deep convolutional neural networks (Chapter 14), to
```
the point that it is often omitted in the architecture diagrams: it is assumed
that BN is added after every layer. Now let’s look at one last technique to
stabilize gradients during training: Gradient Clipping.
Gradient Clipping
Another popular technique to mitigate the exploding gradients problem is to
clip the gradients during backpropagation so that they never exceed some
threshold. This is called Gradient Clipping. This technique is most often
used in recurrent neural networks, as Batch Normalization is tricky to use in
RNNs, as we will see in Chapter 16.
In Keras, implementing Gradient Clipping is just a matter of setting the
clipvalue or clipnorm argument when creating an optimizer, like
14
```
this:
```
```
optimizer = tf.keras.optimizers.SGD(clipvalue=1.0)
```
```
model.compile([...], optimizer=optimizer)
```
This optimizer will clip every component of the gradient vector to a value
between –1.0 and 1.0. This means that all the partial derivatives of the loss
```
(with regard to each and every trainable parameter) will be clipped between
```
–1.0 and 1.0. The threshold is a hyperparameter you can tune. Note that it
may change the orientation of the gradient vector. For instance, if the
original gradient vector is [0.9, 100.0], it points mostly in the direction of
```
the second axis; but once you clip it by value, you get [0.9, 1.0], which
```
points roughly in the diagonal between the two axes. In practice, this
approach works well. If you want to ensure that Gradient Clipping does not
change the direction of the gradient vector, you should clip by norm by
setting clipnorm instead of clipvalue. This will clip the whole
gradient if its ℓ norm is greater than the threshold you picked. For
example, if you set clipnorm=1.0, then the vector [0.9, 100.0] will be
clipped to [0.00899964, 0.9999595], preserving its orientation but almost
eliminating the first component. If you observe that the gradients explode
```
during training (you can track the size of the gradients using TensorBoard),
```
you may want to try clipping by value or clipping by norm, with different
thresholds, and see which option performs best on the validation set.
Reusing Pretrained Layers
It is generally not a good idea to train a very large DNN from scratch
without first trying to find an existing neural network that accomplishes a
```
similar task to the one you are trying to tackle (we will discuss how to find
```
```
them in Chapter 14). If you find such as neural network, then you can
```
generally reuse most of its layers, except for the top ones. This technique is
called transfer learning. It will not only speed up training considerably, but
also require significantly less training data.
2
Suppose you have access to a DNN that was trained to classify pictures into
100 different categories, including animals, plants, vehicles, and everyday
objects. You now want to train a DNN to classify specific types of vehicles.
These tasks are very similar, even partly overlapping, so you should try to
```
reuse parts of the first network (see Figure 11-5).
```
Figure 11-5. Reusing pretrained layers
NOTE
If the input pictures of your new task don’t have the same size as the ones used in the
original task, you will usually have to add a preprocessing step to resize them to the size
expected by the original model. More generally, transfer learning will work best when
the inputs have similar low-level features.
The output layer of the original model should usually be replaced because it
is most likely not useful at all for the new task, and it generally does not
even have the right number of outputs.
Similarly, the upper hidden layers of the original model are less likely to be
as useful as the lower layers, since the high-level features that are most
useful for the new task may differ significantly from the ones that were
most useful for the original task. You want to find the right number of
layers to reuse.
TIP
```
The more similar the tasks are, the more layers you want to reuse (starting with the
```
```
lower layers). For very similar tasks, try to keep all the hidden layers and just replace
```
the output layer.
```
Try freezing all the reused layers first (i.e., make their weights non-trainable
```
```
so that Gradient Descent won’t modify them), then train your model and see
```
how it performs. Then try unfreezing one or two of the top hidden layers to
let backpropagation tweak them and see if performance improves. The more
training data you have, the more layers you can unfreeze. It is also useful to
reduce the learning rate when you unfreeze reused layers: this will avoid
wrecking their fine-tuned weights.
If you still cannot get good performance, and you have little training data,
```
try dropping the top hidden layer(s) and freezing all the remaining hidden
```
layers again. You can iterate until you find the right number of layers to
reuse. If you have plenty of training data, you may try replacing the top
hidden layers instead of dropping them, and even adding more hidden
layers.
Transfer Learning with Keras
Let’s look at an example. Suppose the Fashion MNIST dataset only
contained eight classes—for example, all the classes except for sandal and
shirt. Someone built and trained a Keras model on that set and got
```
reasonably good performance (>90% accuracy). Let’s call this model A.
```
You now want to tackle a different task: you have images of T-shirts and
```
pullovers, and you want to train a binary classifier: positive for T-shirts (and
```
```
tops), negative for sandals. Your dataset is quite small; you only have 200
```
```
labeled images. When you train a new model for this task (let’s call it model
```
```
B) with the same architecture as model A, you get 91.85% test accuracy.
```
While drinking your morning coffee, you realize that your task is quite
similar to task A, so perhaps transfer learning can help? Let’s find out!
First, you need to load model A and create a new model based on that
model’s layers. Let’s reuse all the layers except for the output layer:
[...] # Assuming model A was already trained and saved to
"my_model_A"
```
model_A = tf.keras.models.load_model("my_model_A")
```
```
model_B_on_A = tf.keras.Sequential(model_A.layers[:-1])
```
```
model_B_on_A.add(tf.keras.layers.Dense(1, activation="sigmoid"))
```
Note that model_A and model_B_on_A now share some layers. When
you train model_B_on_A, it will also affect model_A. If you want to
avoid that, you need to clone model_A before you reuse its layers. To do
```
this, you clone model A’s architecture with clone_model(), then copy
```
its weights:
```
model_A_clone = tf.keras.models.clone_model(model_A)
```
```
model_A_clone.set_weights(model_A.get_weights())
```
WARNING
```
tf.keras.models.clone_model() only clones the architecture, not the
```
```
weights. If you don’t copy them manually using set_weights(), they will be
```
initialized randomly when the cloned model is first used.
Now you could train model_B_on_A for task B, but since the new output
```
layer was initialized randomly it will make large errors (at least during the
```
```
first few epochs), so there will be large error gradients that may wreck the
```
reused weights. To avoid this, one approach is to freeze the reused layers
during the first few epochs, giving the new layer some time to learn
reasonable weights. To do this, set every layer’s trainable attribute to
False and compile the model:
for layer in model_B_on_A.layers[:-1]:
layer.trainable = False
```
optimizer = tf.keras.optimizers.SGD(learning_rate=0.001)
```
```
model_B_on_A.compile(loss="binary_crossentropy",
```
```
optimizer=optimizer,
```
```
metrics=["accuracy"])
```
NOTE
You must always compile your model after you freeze or unfreeze layers.
Now you can train the model for a few epochs, then unfreeze the reused
```
layers (which requires compiling the model again) and continue training to
```
fine-tune the reused layers for task B. After unfreezing the reused layers, it
is usually a good idea to reduce the learning rate, once again to avoid
damaging the reused weights.
```
history = model_B_on_A.fit(X_train_B, y_train_B, epochs=4,
```
```
validation_data=(X_valid_B,
```
```
y_valid_B))
```
for layer in model_B_on_A.layers[:-1]:
layer.trainable = True
```
optimizer = tf.keras.optimizers.SGD(learning_rate=0.001)
```
```
model_B_on_A.compile(loss="binary_crossentropy",
```
```
optimizer=optimizer,
```
```
metrics=["accuracy"])
```
```
history = model_B_on_A.fit(X_train_B, y_train_B, epochs=16,
```
```
validation_data=(X_valid_B,
```
```
y_valid_B))
```
So, what’s the final verdict? Well, this model’s test accuracy is 93.85%, up
exactly two percentage points from 91.85%! This means that transfer
learning reduced the error rate by almost 25%!
```
>>> model_B_on_A.evaluate(X_test_B, y_test_B)
```
[0.2546142041683197, 0.9384999871253967]
Are you convinced? You shouldn’t be: I cheated! I tried many
configurations until I found one that demonstrated a strong improvement. If
you try to change the classes or the random seed, you will see that the
improvement generally drops, or even vanishes or reverses. What I did is
called “torturing the data until it confesses.” When a paper just looks too
positive, you should be suspicious: perhaps the flashy new technique does
```
not actually help much (in fact, it may even degrade performance), but the
```
```
authors tried many variants and reported only the best results (which may
```
```
be due to sheer luck), without mentioning how many failures they
```
encountered on the way. Most of the time, this is not malicious at all, but it
is part of the reason so many results in science can never be reproduced.
Why did I cheat? It turns out that transfer learning does not work very well
with small dense networks, presumably because small networks learn few
patterns, and dense networks learn very specific patterns, which are
unlikely to be useful in other tasks. Transfer learning works best with deep
convolutional neural networks, which tend to learn feature detectors that are
```
much more general (especially in the lower layers). We will revisit transfer
```
```
learning in Chapter 14, using the techniques we just discussed (and this
```
```
time there will be no cheating, I promise!).
```
Unsupervised Pretraining
Suppose you want to tackle a complex task for which you don’t have much
labeled training data, but unfortunately you cannot find a model trained on a
similar task. Don’t lose hope! First, you should try to gather more labeled
training data, but if you can’t, you may still be able to perform unsupervised
```
pretraining (see Figure 11-6). Indeed, it is often cheap to gather unlabeled
```
training examples, but expensive to label them. If you can gather plenty of
unlabeled training data, you can try to use it to train an unsupervised model,
```
such as an autoencoder or a generative adversarial network (see Chapter
```
```
17). Then you can reuse the lower layers of the autoencoder or the lower
```
layers of the GAN’s discriminator, add the output layer for your task on top,
```
and fine-tune the final network using supervised learning (i.e., with the
```
```
labeled training examples).
```
It is this technique that Geoffrey Hinton and his team used in 2006 and
which led to the revival of neural networks and the success of Deep
Learning. Until 2010, unsupervised pretraining—typically with restricted
```
Boltzmann machines (RBMs; see the notebook at https://homl.info/extra-
```
```
anns)—was the norm for deep nets, and only after the vanishing gradients
```
problem was alleviated did it become much more common to train DNNs
```
purely using supervised learning. Unsupervised pretraining (today typically
```
```
using autoencoders or GANs rather than RBMs) is still a good option when
```
you have a complex task to solve, no similar model you can reuse, and little
labeled training data but plenty of unlabeled training data.
Note that in the early days of Deep Learning it was difficult to train deep
models, so people would use a technique called greedy layer-wise
```
pretraining (depicted in Figure 11-6). They would first train an
```
unsupervised model with a single layer, typically an RBM, then they would
freeze that layer and add another one on top of it, then train the model again
```
(effectively just training the new layer), then freeze the new layer and add
```
another layer on top of it, train the model again, and so on. Nowadays,
things are much simpler: people generally train the full unsupervised model
```
in one shot (i.e., in Figure 11-6, just start directly at step three) and use
```
autoencoders or GANs rather than RBMs.
Figure 11-6. In unsupervised training, a model is trained on all data, including the unlabeled data,
using an unsupervised learning technique, then it is fine-tuned for the final task on just the labeled
```
data using a supervised learning technique; the unsupervised part may train one layer at a time as
```
shown here, or it may train the full model directly
Pretraining on an Auxiliary Task
If you do not have much labeled training data, one last option is to train a
first neural network on an auxiliary task for which you can easily obtain or
generate labeled training data, then reuse the lower layers of that network
for your actual task. The first neural network’s lower layers will learn
feature detectors that will likely be reusable by the second neural network.
For example, if you want to build a system to recognize faces, you may
only have a few pictures of each individual—clearly not enough to train a
good classifier. Gathering hundreds of pictures of each person would not be
practical. You could, however, gather a lot of pictures of random people on
the web and train a first neural network to detect whether or not two
different pictures feature the same person. Such a network would learn good
feature detectors for faces, so reusing its lower layers would allow you to
train a good face classifier that uses little training data.
```
For natural language processing (NLP) applications, you can download a
```
corpus of millions of text documents and automatically generate labeled
data from it. For example, you could randomly mask out some words and
```
train a model to predict what the missing words are (e.g., it should predict
```
that the missing word in the sentence “What ___ you saying?” is probably
```
“are” or “were”). If you can train a model to reach good performance on
```
this task, then it will already know quite a lot about language, and you can
certainly reuse it for your actual task and fine-tune it on your labeled data
```
(we will discuss more pretraining tasks in Chapter 16).
```
NOTE
Self-supervised learning is when you automatically generate the labels from the data
itself, as in the text-masking example, then you train a model on the resulting “labeled”
dataset using supervised learning techniques.
Faster Optimizers
Training a very large deep neural network can be painfully slow. So far we
```
have seen four ways to speed up training (and reach a better solution):
```
applying a good initialization strategy for the connection weights, using a
good activation function, using Batch Normalization, and reusing parts of a
```
pretrained network (possibly built on an auxiliary task or using
```
```
unsupervised learning). Another huge speed boost comes from using a
```
faster optimizer than the regular Gradient Descent optimizer. In this section
we will present the most popular algorithms: momentum optimization,
Nesterov Accelerated Gradient, AdaGrad, RMSProp, and finally Adam
optimization and its variants.
Momentum Optimization
Imagine a bowling ball rolling down a gentle slope on a smooth surface: it
will start out slowly, but it will quickly pick up momentum until it
```
eventually reaches terminal velocity (if there is some friction or air
```
```
resistance). This is the core idea of momentum optimization, proposed by
```
Boris Polyak in 1964. In contrast, regular Gradient Descent will take
small steps when the slope is gentle, and big steps when the slope is steep,
but it will never pick up speed. As a result, regular Gradient Descent is
generally much slower to reach the minimum than momentum optimization.
Recall that Gradient Descent updates the weights θ by directly subtracting
```
the gradient of the cost function J(θ) with regard to the weights (∇ J(θ))
```
```
multiplied by the learning rate η. The equation is: θ ← θ – η∇ J(θ). It does
```
not care about what the earlier gradients were. If the local gradient is tiny, it
goes very slowly.
15
θ
θ
Momentum optimization cares a great deal about what previous gradients
```
were: at each iteration, it subtracts the local gradient from the momentum
```
```
vector m (multiplied by the learning rate η), and it updates the weights by
```
```
adding this momentum vector (see Equation 11-5). In other words, the
```
gradient is used as an acceleration, not as a speed. To simulate some sort of
friction mechanism and prevent the momentum from growing too large, the
algorithm introduces a new hyperparameter β, called the momentum, which
```
must be set between 0 (high friction) and 1 (no friction). A typical
```
momentum value is 0.9.
Equation 11-5. Momentum algorithm
You can verify that if the gradient remains constant, the terminal velocity
```
(i.e., the maximum size of the weight updates) is equal to that gradient
```
```
multiplied by the learning rate η multiplied by 1 / (1 – β) (ignoring the
```
```
sign). For example, if β = 0.9, then the terminal velocity is equal to 10 times
```
the gradient times the learning rate, so momentum optimization ends up
going 10 times faster than Gradient Descent! This allows momentum
optimization to escape from plateaus much faster than Gradient Descent.
We saw in Chapter 4 that when the inputs have very different scales, the
```
cost function will look like an elongated bowl (see Figure 4-7). Gradient
```
Descent goes down the steep slope quite fast, but then it takes a very long
time to go down the valley. In contrast, momentum optimization will roll
```
down the valley faster and faster until it reaches the bottom (the optimum).
```
In deep neural networks that don’t use Batch Normalization, the upper
layers will often end up having inputs with very different scales, so using
momentum optimization helps a lot. It can also help roll past local optima.
1. m ← βm − η𝛻𝛉J (𝛉)
2. 𝛉 ← 𝛉 + m
NOTE
Due to the momentum, the optimizer may overshoot a bit, then come back, overshoot
again, and oscillate like this many times before stabilizing at the minimum. This is one
of the reasons it’s good to have a bit of friction in the system: it gets rid of these
oscillations and thus speeds up convergence.
Implementing momentum optimization in Keras is a no-brainer: just use the
SGD optimizer and set its momentum hyperparameter, then lie back and
profit!
```
optimizer = tf.keras.optimizers.SGD(learning_rate=0.001,
```
```
momentum=0.9)
```
The one drawback of momentum optimization is that it adds yet another
hyperparameter to tune. However, the momentum value of 0.9 usually
works well in practice and almost always goes faster than regular Gradient
Descent.
Nesterov Accelerated Gradient
One small variant to momentum optimization, proposed by Yurii Nesterov
in 1983, is almost always faster than regular momentum optimization.
```
The Nesterov Accelerated Gradient (NAG) method, also known as Nesterov
```
momentum optimization, measures the gradient of the cost function not at
the local position θ but slightly ahead in the direction of the momentum, at
```
θ + βm (see Equation 11-6).
```
Equation 11-6. Nesterov Accelerated Gradient algorithm
This small tweak works because in general the momentum vector will be
```
pointing in the right direction (i.e., toward the optimum), so it will be
```
slightly more accurate to use the gradient measured a bit farther in that
16
1. m ← βm − η𝛻𝛉J (𝛉 + βm)
2. 𝛉 ← 𝛉 + m
direction rather than the gradient at the original position, as you can see in
```
Figure 11-7 (where ∇ represents the gradient of the cost function measured
```
at the starting point θ, and ∇ represents the gradient at the point located at
```
θ + βm).
```
As you can see, the Nesterov update ends up closer to the optimum. After a
while, these small improvements add up and NAG ends up being
significantly faster than regular momentum optimization. Moreover, note
that when the momentum pushes the weights across a valley, ∇ continues
to push farther across the valley, while ∇ pushes back toward the bottom of
the valley. This helps reduce oscillations and thus NAG converges faster.
NAG is generally faster than regular momentum optimization. To use it,
simply set nesterov=True when creating the SGD optimizer:
```
optimizer = tf.keras.optimizers.SGD(learning_rate=0.001,
```
```
momentum=0.9,
```
```
nesterov=True)
```
1
2
1
2
Figure 11-7. Regular versus Nesterov momentum optimization: the former applies the gradients
computed before the momentum step, while the latter applies the gradients computed after
AdaGrad
Consider the elongated bowl problem again: Gradient Descent starts by
quickly going down the steepest slope, which does not point straight toward
the global optimum, then it very slowly goes down to the bottom of the
valley. It would be nice if the algorithm could correct its direction earlier to
point a bit more toward the global optimum. The AdaGrad algorithm
achieves this correction by scaling down the gradient vector along the
```
steepest dimensions (see Equation 11-7).
```
Equation 11-7. AdaGrad algorithm
The first step accumulates the square of the gradients into the vector s
```
(recall that the ⊗ symbol represents the element-wise multiplication). This
```
```
vectorized form is equivalent to computing s ← s + (∂ J(θ) / ∂ θ ) for each
```
```
element s of the vector s; in other words, each s accumulates the squares of
```
the partial derivative of the cost function with regard to parameter θ . If the
cost function is steep along the i dimension, then s will get larger and
larger at each iteration.
The second step is almost identical to Gradient Descent, but with one big
```
difference: the gradient vector is scaled down by a factor of √s + ε (the ⊘
```
symbol represents the element-wise division, and ε is a smoothing term to
```
avoid division by zero, typically set to 10 ). This vectorized form is
```
```
equivalent to simultaneously computing θi ← θi − η ∂J(𝛉)/∂θi/√si + ε
```
for all parameters θ .
In short, this algorithm decays the learning rate, but it does so faster for
steep dimensions than for dimensions with gentler slopes. This is called an
adaptive learning rate. It helps point the resulting updates more directly
17
1. s ← s + 𝛻𝛉J (𝛉) ⊗ 𝛻𝛉J (𝛉)
2. 𝛉 ← 𝛉 − η 𝛻𝛉J (𝛉) ⊘ √s + ε
i i i
2
i i
i
th
i
–10
i
```
toward the global optimum (see Figure 11-8). One additional benefit is that
```
it requires much less tuning of the learning rate hyperparameter η.
Figure 11-8. AdaGrad versus Gradient Descent: the former can correct its direction earlier to point
to the optimum
AdaGrad frequently performs well for simple quadratic problems, but it
often stops too early when training neural networks. The learning rate gets
scaled down so much that the algorithm ends up stopping entirely before
reaching the global optimum. So even though Keras has an Adagrad
```
optimizer, you should not use it to train deep neural networks (it may be
```
```
efficient for simpler tasks such as Linear Regression, though). Still,
```
understanding AdaGrad is helpful to grasp the other adaptive learning rate
optimizers.
RMSProp
As we’ve seen, AdaGrad runs the risk of slowing down a bit too fast and
never converging to the global optimum. The RMSProp algorithm fixes
this by accumulating only the gradients from the most recent iterations, as
opposed to all the gradients since the beginning of training. It does so by
```
using exponential decay in the first step (see Equation 11-8).
```
Equation 11-8. RMSProp algorithm
The decay rate ρis typically set to 0.9. Yes, it is once again a new
hyperparameter, but this default value often works well, so you may not
need to tune it at all.
As you might expect, Keras has an RMSprop optimizer:
```
optimizer = tf.keras.optimizers.RMSprop(learning_rate=0.001,
```
```
rho=0.9)
```
Except on very simple problems, this optimizer almost always performs
much better than AdaGrad. In fact, it was the preferred optimization
algorithm of many researchers until Adam optimization came around.
18
1. s ← 𝓞s + (1 − 𝓞)𝛻𝛉J (𝛉) ⊗ 𝛻𝛉J (𝛉)
2. 𝛉 ← 𝛉 − η 𝛻𝛉J (𝛉) ⊘ √s + ε
19
Adam Optimization
Adam, which stands for adaptive moment estimation, combines the ideas
of momentum optimization and RMSProp: just like momentum
optimization, it keeps track of an exponentially decaying average of past
```
gradients; and just like RMSProp, it keeps track of an exponentially
```
```
decaying average of past squared gradients (see Equation 11-9). These are
```
```
estimations of the mean and (uncentered) variance of the gradients. The
```
mean is often called the first moment while the variance is often called the
second moment, hence the name of the algorithm.
Equation 11-9. Adam algorithm
```
In this equation, t represents the iteration number (starting at 1).
```
If you just look at steps 1, 2, and 5, you will notice Adam’s close similarity
to both momentum optimization and RMSProp: β corresponds to β in
momentum optimization, and β corresponds to ρin RMSProp. The only
difference is that step 1 computes an exponentially decaying average rather
than an exponentially decaying sum, but these are actually equivalent
```
except for a constant factor (the decaying average is just 1 – β times the
```
```
decaying sum). Steps 3 and 4 are somewhat of a technical detail: since m
```
and s are initialized at 0, they will be biased toward 0 at the beginning of
training, so these two steps will help boost m and s at the beginning of
training.
The momentum decay hyperparameter β is typically initialized to 0.9,
while the scaling decay hyperparameter β is often initialized to 0.999. As
20
1. m ← β1m − (1 − β1)𝛻𝛉J (𝛉)
2. s ← β2s + (1 − β2)𝛻𝛉J (𝛉) ⊗ 𝛻𝛉J (𝛉)
3. ˆm ←
m
1 − β1 t
4. ˆs ←
s
1 − β2 t
5. 𝛉 ← 𝛉 + η ˆm ⊘ √ˆs + ε
1
2
1
1
2
earlier, the smoothing term ε is usually initialized to a tiny number such as
10 . These are the default values for the Adam class. Here is how to create
an Adam optimizer using Keras:
```
optimizer = tf.keras.optimizers.Adam(learning_rate=0.001,
```
```
beta_1=0.9,
```
```
beta_2=0.999)
```
Since Adam is an adaptive learning rate algorithm, like AdaGrad and
RMSProp, it requires less tuning of the learning rate hyperparameter η. You
can often use the default value η = 0.001, making Adam even easier to use
than Gradient Descent.
TIP
If you are starting to feel overwhelmed by all these different techniques and are
wondering how to choose the right ones for your task, don’t worry: some practical
guidelines are provided at the end of this chapter.
Finally, three variants of Adam are worth mentioning:
AdaMax
The Adam paper also introduced AdaMax. Notice that in step 2 of
```
Equation 11-9, Adam accumulates the squares of the gradients in s (with
```
```
a greater weight for more recent gradients). In step 5, if we ignore ε and
```
```
steps 3 and 4 (which are technical details anyway), Adam scales down
```
the parameter updates by the square root of s. In short, Adam scales
down the parameter updates by the ℓ norm of the time-decayed
```
gradients (recall that the ℓ norm is the square root of the sum of
```
```
squares). AdaMax, introduced in the same paper as Adam, replaces the
```
```
ℓ norm with the ℓ norm (a fancy way of saying the max). Specifically,
```
it replaces step 2 in Equation 11-9 with
s ← , it drops step 4, and in step 5 it scales
down the gradient updates by a factor of s, which is the max of the
absolute value of the time-decayed gradients. In practice, this can make
–7
2
2
2 ∞
```
max(β2s, abs( ∇𝛉J(𝛉)))
```
AdaMax more stable than Adam, but it really depends on the dataset,
and in general Adam performs better. So, this is just one more optimizer
you can try if you experience problems with Adam on some task.
Nadam
Nadam optimization is Adam optimization plus the Nesterov trick, so it
will often converge slightly faster than Adam. In his report introducing
this technique, the researcher Timothy Dozat compares many different
optimizers on various tasks and finds that Nadam generally outperforms
Adam but is sometimes outperformed by RMSProp.
AdamW
AdamW is a variant of Adam that integrates a regularization
technique called weight decay. Weight decay consists in reducing the
size of the model’s weights at each training iteration by multiplying
them by a decay factor such as 0.99. This may remind you of ℓ
```
regularization (introduced in Chapter 4), which also aims to keep the
```
weights small, and indeed it can be shown mathematically that ℓ
regularization is equivalent to weight decay when using SGD. However,
when using Adam or its variants, ℓ regularization and weight decay are
not equivalent: in practice, combining Adam with ℓ regularization
results in models that often don’t generalize as well as those produced
by SGD. AdamW fixes this issue by properly combining Adam with
weight decay.
WARNING
```
Adaptive optimization methods (including RMSProp, Adam, AdaMax, Nadam, and
```
```
AdamW optimization) are often great, converging fast to a good solution. However, a
```
2017 paper by Ashia C. Wilson et al. showed that they can lead to solutions that
generalize poorly on some datasets. So when you are disappointed by your model’s
performance, try using Nesterov Accelerated Gradient instead: your dataset may just be
allergic to adaptive gradients. Also check out the latest research, because it’s moving
fast.
21
22
2
2
2
2
23
To use Nadam or AdaMax in Keras, just use replace
tf.keras.optimizers.Adam with
tf.keras.optimizers.Nadam or
tf.keras.optimizers.Adamax. AdamW is not included in Keras,
but it is available in the TensorFlow Add-Ons library. If you followed the
installation instructions at https://homl.info/install to run everything locally,
then you already have this library installed, but if you are using Google
Colab, then you need to run %pip install -q -U
tensorflow_addons. After that, you can use
tfa.optimizers.AdamW optimizer just like the
tf.keras.optimizers.Adam optimizer, with an extra
```
weight_decay hyperparameter (which needs to be tuned):
```
import tensorflow_addons as tfa
```
optimizer = tfa.optimizers.AdamW(weight_decay=1e-5,
```
```
learning_rate=0.001,
```
```
beta_1=0.9, beta_2=0.999)
```
All the optimization techniques discussed so far only rely on the first-order
```
partial derivatives (Jacobians). The optimization literature also contains
```
```
amazing algorithms based on the second-order partial derivatives (the
```
```
Hessians, which are the partial derivatives of the Jacobians). Unfortunately,
```
these algorithms are very hard to apply to deep neural networks because
```
there are n Hessians per output (where n is the number of parameters), as
```
opposed to just n Jacobians per output. Since DNNs typically have tens of
thousands of parameters or more, the second-order optimization algorithms
often don’t even fit in memory, and even when they do, computing the
Hessians is just too slow.
2
TRAINING SPARSE MODELS
All the optimization algorithms we just discussed produce dense
models, meaning that most parameters will be nonzero. If you need a
blazingly fast model at runtime, or if you need it to take up less
memory, you may prefer to end up with a sparse model instead.
One way to achieve this is to train the model as usual, then get rid of the
```
tiny weights (set them to zero). However, this will typically not lead to
```
a very sparse model, and it may degrade the model’s performance.
```
A better option is to apply strong ℓ regularization during training (we
```
```
will see how later in this chapter), as it pushes the optimizer to zero out
```
```
as many weights as it can (as discussed in “Lasso Regression” in
```
```
Chapter 4).
```
If these techniques remain insufficient, check out the TensorFlow
```
Model Optimization Toolkit (TF-MOT), which provides a pruning API
```
capable of iteratively removing connections during training based on
their magnitude.
```
Table 11-2 compares all the optimizers we’ve discussed so far (* is bad, **
```
```
is average, and *** is good).
```
1
T
a
b
l
e
1
1
-
2
.
O
p
t
i
m
i
z
e
r
c
o
m
p
a
r
i
s
o
n
Class Convergence speed Convergence quality
SGD * ***
```
SGD(momentum=...) ** ***
```
```
SGD(momentum=..., nesterov=True) ** ***
```
```
Adagrad *** * (stops too early)
```
RMSprop *** ** or ***
Adam *** ** or ***
AdaMax *** ** or ***
Nadam *** ** or ***
AdamW *** ** or ***
Learning Rate Scheduling
Finding a good learning rate is very important. If you set it much too high,
```
training may diverge (as we discussed in “Gradient Descent”). If you set it
```
too low, training will eventually converge to the optimum, but it will take a
very long time. If you set it slightly too high, it will make progress very
quickly at first, but it will end up dancing around the optimum, never really
settling down. If you have a limited computing budget, you may have to
interrupt training before it has converged properly, yielding a suboptimal
```
solution (see Figure 11-9).
```
Figure 11-9. Learning curves for various learning rates η
As we discussed in Chapter 10, you can find a good learning rate by
training the model for a few hundred iterations, exponentially increasing the
learning rate from a very small value to a very large value, and then looking
at the learning curve and picking a learning rate slightly lower than the one
at which the learning curve starts shooting back up. You can then
reinitialize your model and train it with that learning rate.
But you can do better than a constant learning rate: if you start with a large
learning rate and then reduce it once training stops making fast progress,
you can reach a good solution faster than with the optimal constant learning
rate. There are many different strategies to reduce the learning rate during
training. It can also be beneficial to start with a low learning rate, increase
```
it, then drop it again. These strategies are called learning schedules (we
```
```
briefly introduced this concept in Chapter 4). These are the most commonly
```
used learning schedules:
Power scheduling
```
Set the learning rate to a function of the iteration number t: η(t) = η / (1
```
- t/s) . The initial learning rate η , the power c (typically set to 1), and
the steps s are hyperparameters. The learning rate drops at each step.
After s steps, it is down to η / 2. After s more steps, it is down to η / 3,
then it goes down to η / 4, then η / 5, and so on. As you can see, this
schedule first drops quickly, then more and more slowly. Of course,
```
power scheduling requires tuning η and s (and possibly c).
```
Exponential scheduling
```
Set the learning rate to η(t) = η 0.1 . The learning rate will gradually
```
drop by a factor of 10 every s steps. While power scheduling reduces
the learning rate more and more slowly, exponential scheduling keeps
slashing it by a factor of 10 every s steps.
Piecewise constant scheduling
```
Use a constant learning rate for a number of epochs (e.g., η = 0.1 for 5
```
```
epochs), then a smaller learning rate for another number of epochs (e.g.,
```
0
c
0
0 0
0 0
0
0
t/s
0
```
η = 0.001 for 50 epochs), and so on. Although this solution can work
```
very well, it requires fiddling around to figure out the right sequence of
learning rates and how long to use each of them.
Performance scheduling
```
Measure the validation error every N steps (just like for early stopping),
```
and reduce the learning rate by a factor of λ when the error stops
dropping.
1cycle scheduling
1cycle was introduced in a 2018 paper by Leslie Smith. Contrary to
the other approaches, it starts by increasing the initial learning rate η ,
growing linearly up to η halfway through training. Then it decreases
the learning rate linearly down to η again during the second half of
training, finishing the last few epochs by dropping the rate down by
```
several orders of magnitude (still linearly). The maximum learning rate
```
η is chosen using the same approach we used to find the optimal
learning rate, and the initial learning rate η is usually 10 times lower.
```
When using a momentum, we start with a high momentum first (e.g.,
```
```
0.95), then drop it down to a lower momentum during the first half of
```
```
training (e.g., down to 0.85, linearly), and then bring it back up to the
```
```
maximum value (e.g., 0.95) during the second half of training, finishing
```
the last few epochs with that maximum value. Smith did many
experiments showing that this approach was often able to speed up
training considerably and reach better performance. For example, on the
popular CIFAR10 image dataset, this approach reached 91.9%
validation accuracy in just 100 epochs, instead of 90.3% accuracy in
```
800 epochs through a standard approach (with the same neural network
```
```
architecture). This feat was dubbed super-convergence.
```
A 2013 paper by Andrew Senior et al. compared the performance of some
of the most popular learning schedules when using momentum optimization
to train deep neural networks for speech recognition. The authors concluded
1
24
0
1
0
1
0
25
that, in this setting, both performance scheduling and exponential
scheduling performed well. They favored exponential scheduling because it
was easy to tune and it converged slightly faster to the optimal solution.
They also mentioned that it was easier to implement than performance
scheduling, but in Keras both options are easy. That said, the 1cycle
approach seems to perform even better.
Implementing power scheduling in Keras is the easiest option: just set the
decay hyperparameter when creating an optimizer:
```
optimizer = tf.keras.optimizers.SGD(learning_rate=0.01, decay=1e-
```
```
4)
```
```
The decay is the inverse of s (the number of steps it takes to divide the
```
```
learning rate by one more unit), and Keras assumes that c is equal to 1.
```
Exponential scheduling and piecewise scheduling are quite simple too. You
first need to define a function that takes the current epoch and returns the
learning rate. For example, let’s implement exponential scheduling:
```
def exponential_decay_fn(epoch):
```
```
return 0.01 * 0.1 ** (epoch / 20)
```
If you do not want to hardcode η and s, you can create a function that
returns a configured function:
```
def exponential_decay(lr0, s):
```
```
def exponential_decay_fn(epoch):
```
```
return lr0 * 0.1 ** (epoch / s)
```
return exponential_decay_fn
```
exponential_decay_fn = exponential_decay(lr0=0.01, s=20)
```
Next, create a LearningRateScheduler callback, giving it the
```
schedule function, and pass this callback to the fit() method:
```
```
lr_scheduler =
```
```
tf.keras.callbacks.LearningRateScheduler(exponential_decay_fn)
```
0
```
history = model.fit(X_train, y_train, [...], callbacks=
```
```
[lr_scheduler])
```
The LearningRateScheduler will update the optimizer’s
learning_rate attribute at the beginning of each epoch. Updating the
learning rate once per epoch is usually enough, but if you want it to be
updated more often, for example at every step, you can always write your
```
own callback (see the “Exponential Scheduling” section of the notebook for
```
```
an example). Updating the learning rate at every step may help if there are
```
many steps per epoch. Alternatively, you can use the
tf.keras.optimizers.schedules approach, described shortly.
TIP
After training, history.history["lr"] gives you access to the list of learning
rates used during training.
The schedule function can optionally take the current learning rate as a
second argument. For example, the following schedule function multiplies
the previous learning rate by 0.1 , which results in the same exponential
```
decay (except the decay now starts at the beginning of epoch 0 instead of
```
```
1):
```
```
def exponential_decay_fn(epoch, lr):
```
```
return lr * 0.1 ** (1 / 20)
```
```
This implementation relies on the optimizer’s initial learning rate (contrary
```
```
to the previous implementation), so make sure to set it appropriately.
```
When you save a model, the optimizer and its learning rate get saved along
with it. This means that with this new schedule function, you could just load
a trained model and continue training where it left off, no problem. Things
are not so simple if your schedule function uses the epoch argument,
```
however: the epoch does not get saved, and it gets reset to 0 every time you
```
```
call the fit() method. If you were to continue training a model where it
```
1/20
left off, this could lead to a very large learning rate, which would likely
```
damage your model’s weights. One solution is to manually set the fit()
```
method’s initial_epoch argument so the epoch starts at the right
value.
For piecewise constant scheduling, you can use a schedule function like the
```
following one (as earlier, you can define a more general function if you
```
```
want; see the “Piecewise Constant Scheduling” section of the notebook for
```
```
an example), then create a LearningRateScheduler callback with
```
```
this function and pass it to the fit() method, just like we did for
```
exponential scheduling:
```
def piecewise_constant_fn(epoch):
```
if epoch < 5:
return 0.01
elif epoch < 15:
return 0.005
```
else:
```
return 0.001
For performance scheduling, use the ReduceLROnPlateau callback. For
```
example, if you pass the following callback to the fit() method, it will
```
multiply the learning rate by 0.5 whenever the best validation loss does not
```
improve for five consecutive epochs (other options are available; please
```
```
check the documentation for more details):
```
```
lr_scheduler = tf.keras.callbacks.ReduceLROnPlateau(factor=0.5,
```
```
patience=5)
```
```
history = model.fit(X_train, y_train, [...], callbacks=
```
```
[lr_scheduler])
```
Lastly, Keras offers an alternative way to implement learning rate
```
scheduling: you can define a scheduled learning rate using one of the
```
classes available in tf.keras.optimizers.schedules, then pass it
to any optimizer. This approach updates the learning rate at each step rather
than at each epoch. For example, here is how to implement the same
```
exponential schedule as the exponential_decay_fn() function we
```
defined earlier:
import math
```
batch_size = 32
```
```
n_epochs = 25
```
```
n_steps = n_epochs * math.ceil(len(X_train) / batch_size)
```
```
scheduled_learning_rate =
```
```
tf.keras.optimizers.schedules.ExponentialDecay(
```
```
initial_learning_rate=0.01, decay_steps=n_steps,
```
```
decay_rate=0.1)
```
```
optimizer =
```
```
tf.keras.optimizers.SGD(learning_rate=scheduled_learning_rate)
```
This is nice and simple, plus when you save the model, the learning rate and
```
its schedule (including its state) get saved as well.
```
As for 1cycle, Keras does not support it, but it’s possible to implement it in
less than 30 lines of code by creating a custom callback that modifies the
learning rate at each iteration. To update the optimizer’s learning rate from
```
within the callback’s on_batch_begin() method, you need to call
```
```
tf.keras.backend.set_value(self.model.optimizer.le
```
```
arning_rate, new_learning_rate). See the “1Cycle
```
scheduling” section of the notebook for an example.
To sum up, exponential decay, performance scheduling, and 1cycle can
considerably speed up convergence, so give them a try!
Avoiding Overfitting Through Regularization
With four parameters I can fit an elephant and with five I can make him
wiggle his trunk.
—John von Neumann, cited by Enrico Fermi in Nature
427
With thousands of parameters, you can fit the whole zoo. Deep neural
networks typically have tens of thousands of parameters, sometimes even
millions. This gives them an incredible amount of freedom and means they
can fit a huge variety of complex datasets. But this great flexibility also
makes the network prone to overfitting the training set. Regularization is
often needed to prevent this.
We already implemented one of the best regularization techniques in
Chapter 10: early stopping. Moreover, even though Batch Normalization
was designed to solve the unstable gradients problems, it also acts like a
pretty good regularizer. In this section we will examine other popular
regularization techniques for neural networks: ℓ and ℓ regularization,
dropout, and max-norm regularization.
ℓ and ℓ Regularization
Just like you did in Chapter 4 for simple linear models, you can use ℓ
regularization to constrain a neural network’s connection weights, and/or ℓ
```
regularization if you want a sparse model (with many weights equal to 0).
```
Here is how to apply ℓ regularization to a Keras layer’s connection
weights, using a regularization factor of 0.01:
```
layer = tf.keras.layers.Dense(100, activation="relu",
```
```
kernel_initializer="he_normal",
```
```
kernel_regularizer=tf.keras.regularizers.l2(0.01))
```
```
The l2() function returns a regularizer that will be called at each step
```
during training to compute the regularization loss. This is then added to the
final loss. As you might expect, you can just use
```
tf.keras.regularizers.l1() if you want ℓ regularization; if you
```
want both ℓ and ℓ regularization, use
```
tf.keras.regularizers.l1_l2() (specifying both regularization
```
```
factors).
```
Since you will typically want to apply the same regularizer to all layers in
your network, as well as using the same activation function and the same
initialization strategy in all hidden layers, you may find yourself repeating
the same arguments. This makes the code ugly and error-prone. To avoid
1 2
1 2
2
1
2
1
1 2
this, you can try refactoring your code to use loops. Another option is to use
```
Python’s functools.partial() function, which lets you create a thin
```
wrapper for any callable, with some default argument values:
from functools import partial
```
RegularizedDense = partial(tf.keras.layers.Dense,
```
```
activation="relu",
```
```
kernel_initializer="he_normal",
```
```
kernel_regularizer=tf.keras.regularizers.l2(0.01))
```
```
model = tf.keras.Sequential([
```
```
tf.keras.layers.Flatten(input_shape=[28, 28]),
```
```
RegularizedDense(100),
```
```
RegularizedDense(100),
```
```
RegularizedDense(10, activation="softmax")
```
```
])
```
WARNING
As we saw earlier, ℓ regularization is fine when using SGD, momentum optimization
and Nesterov momentum optimization, but not with Adam and its variants. If you want
to use Adam with weight decay, then do not use ℓ regularization: use AdamW instead.
Dropout
Dropout is one of the most popular regularization techniques for deep
neural networks. It was proposed in a paper by Geoffrey Hinton in 2012
and further detailed in a 2014 paper by Nitish Srivastava et al., and it has
proven to be highly successful: many state-of-the-art neural networks use
dropout, as it gives them a 1–2% accuracy boost. This may not sound like a
lot, but when a model already has 95% accuracy, getting a 2% accuracy
```
boost means dropping the error rate by almost 40% (going from 5% error to
```
```
roughly 3%).
```
It is a fairly simple algorithm: at every training step, every neuron
```
(including the input neurons, but always excluding the output neurons) has
```
a probability p of being temporarily “dropped out,” meaning it will be
2
2
26
27
entirely ignored during this training step, but it may be active during the
```
next step (see Figure 11-10). The hyperparameter p is called the dropout
```
rate, and it is typically set between 10% and 50%: closer to 20–30% in
```
recurrent neural nets (see Chapter 16), and closer to 40–50% in
```
```
convolutional neural networks (see Chapter 14). After training, neurons
```
```
don’t get dropped anymore. And that’s all (except for a technical detail we
```
```
will discuss momentarily).
```
Figure 11-10. With dropout regularization, at each training iteration a random subset of all neurons
```
in one or more layers—except the output layer—are “dropped out”; these neurons output 0 at this
```
```
iteration (represented by the dashed arrows)
```
It’s surprising at first that this destructive technique works at all. Would a
company perform better if its employees were told to toss a coin every
```
morning to decide whether or not to go to work? Well, who knows; perhaps
```
```
it would! The company would be forced to adapt its organization; it could
```
not rely on any single person to work the coffee machine or perform any
other critical tasks, so this expertise would have to be spread across several
people. Employees would have to learn to cooperate with many of their
coworkers, not just a handful of them. The company would become much
more resilient. If one person quit, it wouldn’t make much of a difference.
It’s unclear whether this idea would actually work for companies, but it
certainly does for neural networks. Neurons trained with dropout cannot co-
```
adapt with their neighboring neurons; they have to be as useful as possible
```
```
on their own. They also cannot rely excessively on just a few input neurons;
```
they must pay attention to each of their input neurons. They end up being
less sensitive to slight changes in the inputs. In the end, you get a more
robust network that generalizes better.
Another way to understand the power of dropout is to realize that a unique
neural network is generated at each training step. Since each neuron can be
```
either present or absent, there are a total of 2 possible networks (where N
```
```
is the total number of droppable neurons). This is such a huge number that
```
it is virtually impossible for the same neural network to be sampled twice.
Once you have run 10,000 training steps, you have essentially trained
10,000 different neural networks, each with just one training instance.
These neural networks are obviously not independent because they share
many of their weights, but they are nevertheless all different. The resulting
neural network can be seen as an averaging ensemble of all these smaller
neural networks.
N
TIP
In practice, you can usually apply dropout only to the neurons in the top one to three
```
layers (excluding the output layer).
```
There is one small but important technical detail. Suppose p = 75%: on
average only 25% of all neurons are active at each step during training. This
means that after training, a neuron would be connected to four times as
many input neurons as it would be during training. To compensate for this
fact, we need to multiply each neuron’s input connection weights by four
during training. If we don’t, the neural network will not perform well as it
will see different data during and after training. More generally, we need to
```
divide the connection weights by the keep probability (1 – p) during
```
training.
To implement dropout using Keras, you can use the
tf.keras.layers.Dropout layer. During training, it randomly drops
```
some inputs (setting them to 0) and divides the remaining inputs by the
```
```
keep probability. After training, it does nothing at all; it just passes the
```
inputs to the next layer. The following code applies dropout regularization
before every dense layer, using a dropout rate of 0.2:
```
model = tf.keras.Sequential([
```
```
tf.keras.layers.Flatten(input_shape=[28, 28]),
```
```
tf.keras.layers.Dropout(rate=0.2),
```
```
tf.keras.layers.Dense(100, activation="relu",
```
```
kernel_initializer="he_normal"),
```
```
tf.keras.layers.Dropout(rate=0.2),
```
```
tf.keras.layers.Dense(100, activation="relu",
```
```
kernel_initializer="he_normal"),
```
```
tf.keras.layers.Dropout(rate=0.2),
```
```
tf.keras.layers.Dense(10, activation="softmax")
```
```
])
```
[...] # compile and train the model
WARNING
Since dropout is only active during training, comparing the training loss and the
validation loss can be misleading. In particular, a model may be overfitting the training
set and yet have similar training and validation losses. So make sure to evaluate the
```
training loss without dropout (e.g., after training).
```
If you observe that the model is overfitting, you can increase the dropout
rate. Conversely, you should try decreasing the dropout rate if the model
underfits the training set. It can also help to increase the dropout rate for
large layers, and reduce it for small ones. Moreover, many state-of-the-art
architectures only use dropout after the last hidden layer, so you may want
to try this if full dropout is too strong.
Dropout does tend to significantly slow down convergence, but it often
results in a better model when tuned properly. So, it is generally well worth
the extra time and effort, especially for large models.
TIP
If you want to regularize a self-normalizing network based on the SELU activation
```
function (as discussed earlier), you should use alpha dropout: this is a variant of dropout
```
that preserves the mean and standard deviation of its inputs. It was introduced in the
same paper as SELU, as regular dropout would break self-normalization.
```
Monte Carlo (MC) Dropout
```
In 2016, a paper by Yarin Gal and Zoubin Ghahramani added a few more
good reasons to use dropout:
First, the paper established a profound connection between dropout
```
networks (i.e., neural networks containing Dropout layers) and
```
approximate Bayesian inference, giving dropout a solid
mathematical justification.
28
29
Second, the authors introduced a powerful technique called MC
Dropout, which can boost the performance of any trained dropout
model without having to retrain it or even modify it at all. It also
provides a much better measure of the model’s uncertainty, and it
can be implemented in just a few lines of code.
If this all sounds like some “one weird trick” clickbait, then take a look at
the following code. It is the full implementation of MC Dropout, boosting
the dropout model we trained earlier without retraining it:
import numpy as np
```
y_probas = np.stack([model(X_test, training=True)
```
```
for sample in range(100)])
```
```
y_proba = y_probas.mean(axis=0)
```
```
Note that model(X) is similar to model.predict(X) except it returns
```
a tensor rather than a NumPy array, and it supports the training
argument. In this code example, setting training=True ensures that the
Dropout layer remains active, so all predictions will be a bit different. We
just make 100 predictions over the test set, and we compute their average.
More specifically, each call to the model returns a matrix with one row per
instance and one column per class. Because there are 10,000 instances in
the test set and 10 classes, this is a matrix of shape [10000, 10]. We stack
100 such matrices, so y_probas is a 3D array of shape [100, 10000, 10].
```
Once we average over the first dimension (axis=0), we get y_proba, an
```
array of shape [10000, 10], like we would get with a single prediction.
That’s all! Averaging over multiple predictions with dropout turned on
gives us a Monte Carlo estimate that is generally more reliable than the
result of a single prediction with dropout turned off. For example, let’s look
at the model’s prediction for the first instance in the Fashion MNIST test
set, with dropout turned off:
```
>>> model.predict(X_test[:1]).round(3)
```
```
array([[0. , 0. , 0. , 0. , 0. , 0.024, 0. , 0.132,
```
0. ,
```
0.844]], dtype=float32)
```
```
The model is fairly confident (84.4%) that this image belongs to class 9
```
```
(ankle boot). Compare this with the MC dropout prediction:
```
```
>>> y_proba[0].round(3)
```
```
array([0. , 0. , 0. , 0. , 0. , 0.067, 0. , 0.209,
```
0.001,
```
0.723], dtype=float32)
```
The model still seems to prefer class 9, but its confidence dropped down to
```
72.3%, and the estimated probabilities for classes 5 (sandal) and 7 (sneaker)
```
have increased, which makes sense given they’re also footwear.
MC Dropout tends to improve the reliability of the model’s probability
estimates. This means that it’s less likely to be confident but wrong, which
can be dangerous: just imagine a self-driving car confidently ignoring a stop
sign. It’s also useful to know exactly which other classes are most likely.
And you can also take a look at the standard deviation of the probability
```
estimates:
```
```
>>> y_std = y_probas.std(axis=0)
```
```
>>> y_std[0].round(3)
```
```
array([0. , 0. , 0. , 0.001, 0. , 0.096, 0. , 0.162,
```
0.001,
```
0.183], dtype=float32)
```
Apparently there’s quite a lot of variance in the probability estimates for
class 9: the standard deviation is 0.183, which should be compared to the
estimated probability of 0.723: if you were building a risk-sensitive system
```
(e.g., a medical or financial system), you would probably treat such an
```
uncertain prediction with extreme caution. You would definitely not treat it
like an 84.4% confident prediction. Moreover, the model’s accuracy got a
```
(very) small boost from 87.0% to 87.2%:
```
```
>>> y_pred = y_proba.argmax(axis=1)
```
```
>>> accuracy = (y_pred == y_test).sum() / len(y_test)
```
>>> accuracy
0.8717
NOTE
```
The number of Monte Carlo samples you use (100 in this example) is a hyperparameter
```
you can tweak. The higher it is, the more accurate the predictions and their uncertainty
estimates will be. However, if you double it, inference time will also be doubled.
Moreover, above a certain number of samples, you will notice little improvement. So
your job is to find the right trade-off between latency and accuracy, depending on your
application.
If your model contains other layers that behave in a special way during
```
training (such as BatchNormalization layers), then you should not
```
force training mode like we just did. Instead, you should replace the
Dropout layers with the following MCDropout class:
```
class MCDropout(tf.keras.layers.Dropout):
```
```
def call(self, inputs, training=None):
```
```
return super().call(inputs, training=True)
```
```
Here, we just subclass the Dropout layer and override the call()
```
```
method to force its training argument to True (see Chapter 12).
```
Similarly, you could define an MCAlphaDropout class by subclassing
AlphaDropout instead. If you are creating a model from scratch, it’s just
a matter of using MCDropout rather than Dropout. But if you have a
model that was already trained using Dropout, you need to create a new
model that’s identical to the existing model except with Dropout instead
of MCDropout, then copy the existing model’s weights to your new
model.
In short, MC Dropout is a great technique that boosts dropout models and
provides better uncertainty estimates. And of course, since it is just regular
dropout during training, it also acts like a regularizer.
Max-Norm Regularization
Another popular regularization technique for neural networks is called max-
norm regularization: for each neuron, it constrains the weights w of the
30
incoming connections such that ∥ w ∥ ≤ r, where r is the max-norm
hyperparameter and ∥ · ∥ is the ℓ norm.
Max-norm regularization does not add a regularization loss term to the
overall loss function. Instead, it is typically implemented by computing
```
∥ w ∥ after each training step and rescaling w if needed (w ← w r / ∥ w ∥ ).
```
Reducing r increases the amount of regularization and helps reduce
overfitting. Max-norm regularization can also help alleviate the unstable
```
gradients problems (if you are not using Batch Normalization).
```
To implement max-norm regularization in Keras, set the
kernel_constraint argument of each hidden layer to a
```
max_norm() constraint with the appropriate max value, like this:
```
```
dense = tf.keras.layers.Dense(
```
100, activation="relu", kernel_initializer="he_normal",
```
kernel_constraint=tf.keras.constraints.max_norm(1.))
```
```
After each training iteration, the model’s fit() method will call the object
```
```
returned by max_norm(), passing it the layer’s weights and getting
```
rescaled weights in return, which then replace the layer’s weights. As you’ll
see in Chapter 12, you can define your own custom constraint function if
necessary and use it as the kernel_constraint. You can also constrain
the bias terms by setting the bias_constraint argument.
```
The max_norm() function has an axis argument that defaults to 0. A
```
Dense layer usually has weights of shape [number of inputs, number of
neurons], so using axis=0 means that the max-norm constraint will apply
independently to each neuron’s weight vector. If you want to use max-norm
```
with convolutional layers (see Chapter 14), make sure to set the
```
```
max_norm() constraint’s axis argument appropriately (usually axis=
```
```
[0, 1, 2]).
```
Summary and Practical Guidelines
2
2 2
2 2
In this chapter we have covered a wide range of techniques, and you may be
wondering which ones you should use. This depends on the task, and there
is no clear consensus yet, but I have found the configuration in Table 11-3
to work fine in most cases, without requiring much hyperparameter tuning.
That said, please do not consider these defaults as hard rules!
T
a
b
l
e
1
1
-
3
.
D
e
f
a
u
lt
D
N
N
c
o
n
fi
g
u
r
a
ti
o
n
Hyperparameter Default value
Kernel initializer He initialization
```
Activation function ReLU if shallow; Swish if deep
```
```
Normalization None if shallow; Batch Norm if deep
```
```
Regularization Early stopping; Weight decay if needed
```
Optimizer Nesterov Accelerated Gradients or AdamW
Learning rate schedule Performance scheduling or 1cycle
If the network is a simple stack of dense layers, then it can self-normalize,
and you should use the configuration in Table 11-4 instead.
T
a
b
l
e
1
1
-
4
.
D
N
N
c
o
n
fi
g
u
r
a
ti
o
n
f
o
r
a
s
e
lf
-
n
o
r
m
a
li
z
i
n
g
n
e
t
Hyperparameter Default value
Kernel initializer LeCun initialization
Activation function SELU
```
Normalization None (self-normalization)
```
Regularization Alpha dropout if needed
Optimizer Nesterov Accelerated Gradients
Learning rate schedule Performance scheduling or 1cycle
Don’t forget to normalize the input features! You should also try to reuse
parts of a pretrained neural network if you can find one that solves a similar
problem, or use unsupervised pretraining if you have a lot of unlabeled
data, or use pretraining on an auxiliary task if you have a lot of labeled data
for a similar task.
While the previous guidelines should cover most cases, here are some
```
exceptions:
```
```
If you need a sparse model, you can use ℓ regularization (and
```
```
optionally zero out the tiny weights after training). If you need an
```
even sparser model, you can use the TensorFlow Model
Optimization Toolkit. This will break self-normalization, so you
should use the default configuration in this case.
```
If you need a low-latency model (one that performs lightning-fast
```
```
predictions), you may need to use fewer layers, use a fast
```
activation function such as ReLU or leaky ReLU, and fold the
Batch Normalization layers into the previous layers after training.
Having a sparse model will also help. Finally, you may want to
```
reduce the float precision from 32 bits to 16 or even 8 bits (see
```
```
Chapter 19). Again, check out TF-MOT.
```
If you are building a risk-sensitive application, or inference latency
is not very important in your application, you can use MC Dropout
to boost performance and get more reliable probability estimates,
along with uncertainty estimates.
With these guidelines, you are now ready to train very deep nets! I hope you
are now convinced that you can go quite a long way using just the
convenient Keras API. There may come a time, however, when you need to
```
have even more control; for example, to write a custom loss function or to
```
tweak the training algorithm. For such cases you will need to use
TensorFlow’s lower-level API, as you will see in the next chapter.
Exercises
1. What is the problem that Glorot initialization and He initialization
aim to fix?
2. Is it OK to initialize all the weights to the same value as long as
that value is selected randomly using He initialization?
3. Is it OK to initialize the bias terms to 0?
14. In which cases would you want to use each of the activation
functions we discussed in this chapter?
5. What may happen if you set the momentum hyperparameter too
```
close to 1 (e.g., 0.99999) when using an SGD optimizer?
```
6. Name three ways you can produce a sparse model.
7. Does dropout slow down training? Does it slow down inference
```
(i.e., making predictions on new instances)? What about MC
```
Dropout?
8. Practice training a deep neural network on the CIFAR10 image
```
dataset:
```
a. Build a DNN with 20 hidden layers of 100 neurons each
```
(that’s too many, but it’s the point of this exercise). Use
```
He initialization and the Swish activation function.
b. Using Nadam optimization and early stopping, train the
network on the CIFAR10 dataset. You can load it with
```
tf.keras.datasets.cifar10.load_data().
```
The dataset is composed of 60,000 32 × 32–pixel color
```
images (50,000 for training, 10,000 for testing) with 10
```
classes, so you’ll need a softmax output layer with 10
neurons. Remember to search for the right learning rate
each time you change the model’s architecture or
hyperparameters.
c. Now try adding Batch Normalization and compare the
learning curves: is it converging faster than before? Does
it produce a better model? How does it affect training
speed?
d. Try replacing Batch Normalization with SELU, and make
the necessary adjustments to ensure the network self-
```
normalizes (i.e., standardize the input features, use LeCun
```
normal initialization, make sure the DNN contains only a
```
sequence of dense layers, etc.).
```
e. Try regularizing the model with alpha dropout. Then,
without retraining your model, see if you can achieve
better accuracy using MC Dropout.
f. Retrain your model using 1cycle scheduling and see if it
improves training speed and model accuracy.
Solutions to these exercises are available at the end of this chapter’s
notebook, at https://homl.info/colab3.
1 Xavier Glorot and Yoshua Bengio, “Understanding the Difficulty of Training Deep
Feedforward Neural Networks,” Proceedings of the 13th International Conference on Artificial
```
Intelligence and Statistics (2010): 249–256.
```
2 Here’s an analogy: if you set a microphone amplifier’s knob too close to zero, people won’t
hear your voice, but if you set it too close to the max, your voice will be saturated and people
won’t understand what you are saying. Now imagine a chain of such amplifiers: they all need
to be set properly in order for your voice to come out loud and clear at the end of the chain.
Your voice has to come out of each amplifier at the same amplitude as it came in.
3 E.g., Kaiming He et al., “Delving Deep into Rectifiers: Surpassing Human-Level
Performance on ImageNet Classification,” Proceedings of the 2015 IEEE International
```
Conference on Computer Vision (2015): 1026–1034.
```
4 A dead neuron may come back to life if its inputs evolve over time and eventually return
within a range where the ReLU activation function gets a positive input again. For example,
this may happen if Gradient Descent tweaks the neurons in the layers below the dead neuron.
5 Bing Xu et al., “Empirical Evaluation of Rectified Activations in Convolutional Network,”
```
arXiv preprint arXiv:1505.00853 (2015).
```
6 Djork-Arné Clevert et al., “Fast and Accurate Deep Network Learning by Exponential Linear
```
Units (ELUs),” Proceedings of the International Conference on Learning Representations
```
```
(2016).
```
7 Günter Klambauer et al., “Self-Normalizing Neural Networks,” Proceedings of the 31st
```
International Conference on Neural Information Processing Systems (2017): 972–981.
```
```
8 Dan Hendrycks and Kevin Gimpel, “Gaussian error linear units (GELUs),“ arXiv preprint
```
```
arXiv:1606.08415 (2016).
```
9 A function is convex if the line segment between any two points on the curve never lies below
the curve. A monotonic function only increases, or only decreases.
```
10 Dan Hendrycks and Kevin Gimpel, “Gaussian error linear units (GELUs),“ arXiv preprint
```
```
arXiv:1606.08415 (2016).
```
11 Diganta Misra, “Mish: A self regularized non-monotonic activation function.“ arXiv preprint
```
arXiv:1908.08681 (2019).
```
12 Sergey Ioffe and Christian Szegedy, “Batch Normalization: Accelerating Deep Network
Training by Reducing Internal Covariate Shift,” Proceedings of the 32nd International
```
Conference on Machine Learning (2015): 448–456.
```
13 However, they are estimated during training, based on the training data, so arguably they are
trainable. In Keras, “non-trainable” really means “untouched by backpropagation.”
14 Razvan Pascanu et al., “On the Difficulty of Training Recurrent Neural Networks,”
```
Proceedings of the 30th International Conference on Machine Learning (2013): 1310–1318.
```
15 Boris T. Polyak, “Some Methods of Speeding Up the Convergence of Iteration Methods,”
```
USSR Computational Mathematics and Mathematical Physics 4, no. 5 (1964): 1–17.
```
16 Yurii Nesterov, “A Method for Unconstrained Convex Minimization Problem with the Rate of
```
Convergence ݓ /k ),” Doklady AN USSR 269 (1983): 543–547.
```
17 John Duchi et al., “Adaptive Subgradient Methods for Online Learning and Stochastic
```
Optimization,” Journal of Machine Learning Research 12 (2011): 2121–2159.
```
18 This algorithm was created by Geoffrey Hinton and Tijmen Tieleman in 2012 and presented
```
by Geoffrey Hinton in his Coursera class on neural networks (slides: https://homl.info/57;
```
```
video: https://homl.info/58). Amusingly, since the authors did not write a paper to describe the
```
algorithm, researchers often cite “slide 29 in lecture 6e” in their papers.
19 ρis ρletter rho.
20 Diederik P. Kingma and Jimmy Ba, “Adam: A Method for Stochastic Optimization,” arXiv
```
preprint arXiv:1412.6980 (2014).
```
```
21 Timothy Dozat, “Incorporating Nesterov Momentum into Adam” (2016).
```
22 Ilya Loshchilov, and Frank Hutter. “Decoupled weight decay regularization.” arXiv preprint
```
arXiv:1711.05101 (2017).
```
23 Ashia C. Wilson et al., “The Marginal Value of Adaptive Gradient Methods in Machine
```
Learning,” Advances in Neural Information Processing Systems 30 (2017): 4148–4158.
```
24 Leslie N. Smith, “A Disciplined Approach to Neural Network Hyper-Parameters: Part 1—
Learning Rate, Batch Size, Momentum, and Weight Decay,” arXiv preprint arXiv:1803.09820
```
(2018).
```
25 Andrew Senior et al., “An Empirical Study of Learning Rates in Deep Neural Networks for
Speech Recognition,” Proceedings of the IEEE International Conference on Acoustics, Speech,
```
and Signal Processing (2013): 6724–6728.
```
26 Geoffrey E. Hinton et al., “Improving Neural Networks by Preventing Co-Adaptation of
```
Feature Detectors,” arXiv preprint arXiv:1207.0580 (2012).
```
2
27 Nitish Srivastava et al., “Dropout: A Simple Way to Prevent Neural Networks from
```
Overfitting,” Journal of Machine Learning Research 15 (2014): 1929–1958.
```
28 Yarin Gal and Zoubin Ghahramani, “Dropout as a Bayesian Approximation: Representing
Model Uncertainty in Deep Learning,” Proceedings of the 33rd International Conference on
```
Machine Learning (2016): 1050–1059.
```
29 Specifically, they show that training a dropout network is mathematically equivalent to
approximate Bayesian inference in a specific type of probabilistic model called a Deep
Gaussian Process.
30 This MCDropout class will work with all Keras APIs, including the Sequential API. If you
only care about the Functional API or the Subclassing API, you do not have to create an
```
MCDropout class; you can create a regular Dropout layer and call it with
```
```
training=True.
```
Chapter 12. Custom Models and
Training with TensorFlow
A NOTE FOR EARLY RELEASE READERS
With Early Release ebooks, you get books in their earliest form—the
author’s raw and unedited content as they write—so you can take
advantage of these technologies long before the official release of these
titles.
This will be the 12th chapter of the final book. Notebooks are available
on GitHub at https://github.com/ageron/handson-ml3. Datasets are
available at https://github.com/ageron/data.
If you have comments about how we might improve the content and/or
examples in this book, or if you notice missing material within this
chapter, please reach out to the editoor at ntache@oreilly.com.
Up until now, we’ve used only TensorFlow’s high-level API, Keras, but it
already got us pretty far: we built various neural network architectures,
including regression and classification nets, Wide & Deep nets, and self-
normalizing nets, using all sorts of techniques, such as Batch
Normalization, dropout, and learning rate schedules. In fact, 95% of the use
```
cases you will encounter will not require anything other than Keras (and
```
```
tf.data; see Chapter 13). But now it’s time to dive deeper into TensorFlow
```
and take a look at its lower-level Python API. This will be useful when you
need extra control to write custom loss functions, custom metrics, layers,
models, initializers, regularizers, weight constraints, and more. You may
even need to fully control the training loop itself, for example to apply
```
special transformations or constraints to the gradients (beyond just clipping
```
```
them) or to use multiple optimizers for different parts of the network. We
```
will cover all these cases in this chapter, and we will also look at how you
can boost your custom models and training algorithms using TensorFlow’s
automatic graph generation feature. But first, let’s take a quick tour of
TensorFlow.
A Quick Tour of TensorFlow
As you know, TensorFlow is a powerful library for numerical computation,
particularly well suited and fine-tuned for large-scale Machine Learning
```
(but you could use it for anything else that requires heavy computations). It
```
was developed by the Google Brain team and it powers many of Google’s
large-scale services, such as Google Cloud Speech, Google Photos, and
Google Search. It was open sourced in November 2015, and it is now the
most widely used Deep Learning library in the industry: countless projects
use TensorFlow for all sorts of Machine Learning tasks, such as image
classification, natural language processing, recommender systems, and time
series forecasting.
So what does TensorFlow offer? Here’s a summary:
Its core is very similar to NumPy, but with GPU support.
```
It supports distributed computing (across multiple devices and
```
```
servers).
```
```
It includes a kind of just-in-time (JIT) compiler that allows it to
```
optimize computations for speed and memory usage. It works by
extracting the computation graph from a Python function, then
```
optimizing it (e.g., by pruning unused nodes), and finally running it
```
```
efficiently (e.g., by automatically running independent operations
```
```
in parallel).
```
Computation graphs can be exported to a portable format, so you
```
can train a TensorFlow model in one environment (e.g., using
```
```
Python on Linux) and run it in another (e.g., using Java on an
```
```
Android device).
```
1
```
It implements reverse-mode autodiff (see Chapter 10 and Appendix
```
```
B) and provides some excellent optimizers, such as RMSProp and
```
```
Nadam (see Chapter 11), so you can easily minimize all sorts of
```
loss functions.
TensorFlow offers many more features built on top of these core features:
the most important is of course Keras, but it also has data loading and
```
preprocessing ops (tf.data, tf.io, etc.), image processing ops
```
```
(tf.image), signal processing ops (tf.signal), and more (see
```
```
Figure 12-1 for an overview of TensorFlow’s Python API).
```
TIP
We will cover many of the packages and functions of the TensorFlow API, but it’s
impossible to cover them all, so you should really take some time to browse through the
```
API; you will find that it is quite rich and well documented.
```
2
Figure 12-1. TensorFlow’s Python API
```
At the lowest level, each TensorFlow operation (op for short) is
```
implemented using highly efficient C++ code. Many operations have
multiple implementations called kernels: each kernel is dedicated to a
```
specific device type, such as CPUs, GPUs, or even TPUs (tensor processing
```
```
units). As you may know, GPUs can dramatically speed up computations by
```
splitting them into many smaller chunks and running them in parallel across
many GPU threads. TPUs are even faster: they are custom ASIC chips built
```
specifically for Deep Learning operations (we will discuss how to use
```
```
TensorFlow with GPUs or TPUs in Chapter 19).
```
TensorFlow’s architecture is shown in Figure 12-2. Most of the time your
```
code will use the high-level APIs (especially Keras and tf.data); but when
```
you need more flexibility, you will use the lower-level Python API,
handling tensors directly. Note that APIs for other languages are also
available. In any case, TensorFlow’s execution engine will take care of
running the operations efficiently, even across multiple devices and
machines if you tell it to.
3
4
Figure 12-2. TensorFlow’s architecture
TensorFlow runs not only on Windows, Linux, and macOS, but also on
```
mobile devices (using TensorFlow Lite), including both iOS and Android
```
```
(see Chapter 19). If you do not want to use the Python API, there are C++,
```
Java, and Swift APIs. There is even a JavaScript implementation called
TensorFlow.js that makes it possible to run your models directly in your
browser.
There’s more to TensorFlow than the library. TensorFlow is at the center of
an extensive ecosystem of libraries. First, there’s TensorBoard for
```
visualization (see Chapter 10). Next, there’s TensorFlow Extended (TFX),
```
which is a set of libraries built by Google to productionize TensorFlow
```
projects: it includes tools for data validation, preprocessing, model analysis,
```
```
and serving (with TF Serving; see Chapter 19). Google’s TensorFlow Hub
```
provides a way to easily download and reuse pretrained neural networks.
You can also get many neural network architectures, some of them
pretrained, in TensorFlow’s model garden. Check out the TensorFlow
Resources and https://github.com/jtoy/awesome-tensorflow for more
TensorFlow-based projects. You will find hundreds of TensorFlow projects
on GitHub, so it is often easy to find existing code for whatever you are
trying to do.
TIP
More and more ML papers are released along with their implementations, and
sometimes even with pretrained models. Check out https://paperswithcode.com/ to
easily find them.
Last but not least, TensorFlow has a dedicated team of passionate and
helpful developers, as well as a large community contributing to improving
it. To ask technical questions, you should use http://stackoverflow.com/ and
tag your question with tensorflow and python. You can file bugs and feature
requests through GitHub. For general discussions, join the TensorFlow
Forum.
OK, it’s time to start coding!
Using TensorFlow like NumPy
TensorFlow’s API revolves around tensors, which flow from operation to
operation—hence the name TensorFlow. A tensor is very similar to a
NumPy ndarray: it is usually a multidimensional array, but it can also
```
hold a scalar (a simple value, such as 42). These tensors will be important
```
when we create custom cost functions, custom metrics, custom layers, and
more, so let’s see how to create and manipulate them.
Tensors and Operations
```
You can create a tensor with tf.constant(). For example, here is a
```
tensor representing a matrix with two rows and three columns of floats:
>>> import tensorflow as tf
```
>>> t = tf.constant([[1., 2., 3.], [4., 5., 6.]]) # matrix
```
>>> t
```
<tf.Tensor: shape=(2, 3), dtype=float32, numpy=
```
```
array([[1., 2., 3.],
```
```
[4., 5., 6.]], dtype=float32)>
```
Just like an ndarray, a tf.Tensor has a shape and a data type
```
(dtype):
```
>>> t.shape
```
TensorShape([2, 3])
```
>>> t.dtype
tf.float32
Indexing works much like in NumPy:
>>> t[:, 1:]
```
<tf.Tensor: shape=(2, 2), dtype=float32, numpy=
```
```
array([[2., 3.],
```
```
[5., 6.]], dtype=float32)>
```
>>> t[..., 1, tf.newaxis]
```
<tf.Tensor: shape=(2, 1), dtype=float32, numpy=
```
```
array([[2.],
```
```
[5.]], dtype=float32)>
```
Most importantly, all sorts of tensor operations are available:
>>> t + 10
```
<tf.Tensor: shape=(2, 3), dtype=float32, numpy=
```
```
array([[11., 12., 13.],
```
```
[14., 15., 16.]], dtype=float32)>
```
```
>>> tf.square(t)
```
```
<tf.Tensor: shape=(2, 3), dtype=float32, numpy=
```
```
array([[ 1., 4., 9.],
```
```
[16., 25., 36.]], dtype=float32)>
```
```
>>> t @ tf.transpose(t)
```
```
<tf.Tensor: shape=(2, 2), dtype=float32, numpy=
```
```
array([[14., 32.],
```
```
[32., 77.]], dtype=float32)>
```
```
Note that writing t + 10 is equivalent to calling tf.add(t, 10)
```
```
(indeed, Python calls the magic method t.__add__(10), which just
```
```
calls tf.add(t, 10)). Other operators like - and * are also supported.
```
The @ operator was added in Python 3.5, for matrix multiplication: it is
```
equivalent to calling the tf.matmul() function.
```
NOTE
```
Many functions and classes have aliases. For example, tf.add() and
```
```
tf.math.add() are the same function. This allows TensorFlow to have concise
```
names for the most common operations while preserving well-organized packages.
A tensor can also hold a scalar value. In this case, the shape is empty:
```
>>> tf.constant(42)
```
```
<tf.Tensor: shape=(), dtype=int32, numpy=42>
```
```
You will find all the basic math operations you need (tf.add(),
```
```
tf.multiply(), tf.square(), tf.exp(), tf.sqrt(), etc.) and
```
5
```
most operations that you can find in NumPy (e.g., tf.reshape(),
```
```
tf.squeeze(), tf.tile()). Some functions have a different name
```
```
than in NumPy; for instance, tf.reduce_mean(),
```
```
tf.reduce_sum(), tf.reduce_max(), and tf.math.log() are
```
```
the equivalent of np.mean(), np.sum(), np.max() and np.log().
```
When the name differs, there is usually a good reason for it. For example, in
```
TensorFlow you must write tf.transpose(t); you cannot just write
```
```
t.T like in NumPy. The reason is that the tf.transpose() function
```
does not do exactly the same thing as NumPy’s T attribute: in TensorFlow, a
new tensor is created with its own copy of the transposed data, while in
NumPy, t.T is just a transposed view on the same data. Similarly, the
```
tf.reduce_sum() operation is named this way because its GPU kernel
```
```
(i.e., GPU implementation) uses a reduce algorithm that does not guarantee
```
the order in which the elements are added: because 32-bit floats have
limited precision, the result may change ever so slightly every time you call
```
this operation. The same is true of tf.reduce_mean() (but of course
```
```
tf.reduce_max() is deterministic).
```
NOTE
The Keras API has its own low-level API, located in tf.keras.backend. This
package is usually imported as K, for conciseness. It used to include functions like
```
K.square(), K.exp(), and K.sqrt(): this was useful to write portable code back
```
when Keras supported multiple backends, but now that Keras is TensorFlow-only, most
of these functions are not needed anymore. Instead, you should call TensorFlow’s low-
```
level API directly (e.g., tf.square() instead of K.square()). Technically
```
```
K.square() and its friends are still there for backward compatibility, but the
```
documentation of the tf.keras.backend package only lists a handful of utility
```
functions, such as clear_session() (discussed in Chapter 10).
```
Tensors and NumPy
Tensors play nice with NumPy: you can create a tensor from a NumPy
array, and vice versa. You can even apply TensorFlow operations to NumPy
arrays and NumPy operations to tensors:
>>> import numpy as np
```
>>> a = np.array([2., 4., 5.])
```
```
>>> tf.constant(a)
```
```
<tf.Tensor: id=111, shape=(3,), dtype=float64, numpy=array([2.,
```
```
4., 5.])>
```
```
>>> t.numpy() # or np.array(t)
```
```
array([[1., 2., 3.],
```
```
[4., 5., 6.]], dtype=float32)
```
```
>>> tf.square(a)
```
```
<tf.Tensor: id=116, shape=(3,), dtype=float64, numpy=array([4.,
```
```
16., 25.])>
```
```
>>> np.square(t)
```
```
array([[ 1., 4., 9.],
```
```
[16., 25., 36.]], dtype=float32)
```
WARNING
Notice that NumPy uses 64-bit precision by default, while TensorFlow uses 32-bit. This
is because 32-bit precision is generally more than enough for neural networks, plus it
runs faster and uses less RAM. So when you create a tensor from a NumPy array, make
sure to set dtype=tf.float32.
Type Conversions
Type conversions can significantly hurt performance, and they can easily go
unnoticed when they are done automatically. To avoid this, TensorFlow
does not perform any type conversions automatically: it just raises an
exception if you try to execute an operation on tensors with incompatible
types. For example, you cannot add a float tensor and an integer tensor, and
you cannot even add a 32-bit float and a 64-bit float:
```
>>> tf.constant(2.) + tf.constant(40)
```
[...] InvalidArgumentError: [...] expected to be a float tensor
[...]
```
>>> tf.constant(2.) + tf.constant(40., dtype=tf.float64)
```
[...] InvalidArgumentError: [...] expected to be a float tensor
[...]
This may be a bit annoying at first, but remember that it’s for a good cause!
```
And of course you can use tf.cast() when you really need to convert
```
```
types:
```
```
>>> t2 = tf.constant(40., dtype=tf.float64)
```
```
>>> tf.constant(2.0) + tf.cast(t2, tf.float32)
```
```
<tf.Tensor: id=136, shape=(), dtype=float32, numpy=42.0>
```
Variables
The tf.Tensor values we’ve seen so far are immutable: you cannot
modify them. This means that we cannot use regular tensors to implement
weights in a neural network, since they need to be tweaked by
backpropagation. Plus, other parameters may also need to change over time
```
(e.g., a momentum optimizer keeps track of past gradients). What we need
```
is a tf.Variable:
```
>>> v = tf.Variable([[1., 2., 3.], [4., 5., 6.]])
```
>>> v
```
<tf.Variable 'Variable:0' shape=(2, 3) dtype=float32, numpy=
```
```
array([[1., 2., 3.],
```
```
[4., 5., 6.]], dtype=float32)>
```
A tf.Variable acts much like a tf.Tensor: you can perform the
same operations with it, it plays nicely with NumPy as well, and it is just as
```
picky with types. But it can also be modified in place using the assign()
```
```
method (or assign_add() or assign_sub(), which increment or
```
```
decrement the variable by the given value). You can also modify individual
```
```
cells (or slices), by using the cell’s (or slice’s) assign() method or by
```
```
using the scatter_update() or scatter_nd_update() methods:
```
```
v.assign(2 * v) # v now equals [[2., 4., 6.], [8., 10.,
```
12.]]
```
v[0, 1].assign(42) # v now equals [[2., 42., 6.], [8.,
```
10., 12.]]
```
v[:, 2].assign([0., 1.]) # v now equals [[2., 42., 0.], [8.,
```
10., 1.]]
```
v.scatter_nd_update( # v now equals [[100., 42., 0.], [8.,
```
10., 200.]]
```
indices=[[0, 0], [1, 2]], updates=[100., 200.])
```
Direct assignment will not work:
>>> v[1] = [7., 8., 9.]
[...] TypeError: 'ResourceVariable' object does not support item
assignment
NOTE
In practice you will rarely have to create variables manually, since Keras provides an
```
add_weight() method that will take care of it for you, as we will see. Moreover,
```
model parameters will generally be updated directly by the optimizers, so you will
rarely need to update variables manually.
Other Data Structures
TensorFlow supports several other data structures, including the following
```
(please see the “Other Data Structures” section in the notebook or Appendix
```
```
C for more details):
```
```
Sparse tensors (tf.SparseTensor)
```
Efficiently represent tensors containing mostly zeros. The tf.sparse
package contains operations for sparse tensors.
```
Tensor arrays (tf.TensorArray)
```
Are lists of tensors. They have a fixed length by default but can
optionally be made extensible. All tensors they contain must have the
same shape and data type.
```
Ragged tensors (tf.RaggedTensor)
```
Represent lists of tensors, all of the same rank and data type, but with
varying sizes. The dimensions along which the tensor sizes vary are
called the ragged dimensions. The tf.ragged package contains
operations for ragged tensors.
String tensors
Are regular tensors of type tf.string. These represent byte strings,
not Unicode strings, so if you create a string tensor using a Unicode
```
string (e.g., a regular Python 3 string like "café"), then it will get
```
```
encoded to UTF-8 automatically (e.g., b"caf\xc3\xa9").
```
Alternatively, you can represent Unicode strings using tensors of type
```
tf.int32, where each item represents a Unicode code point (e.g.,
```
```
[99, 97, 102, 233]). The tf.strings package (with an s)
```
```
contains ops for byte strings and Unicode strings (and to convert one
```
```
into the other). It’s important to note that a tf.string is atomic,
```
meaning that its length does not appear in the tensor’s shape. Once you
```
convert it to a Unicode tensor (i.e., a tensor of type tf.int32 holding
```
```
Unicode code points), the length appears in the shape.
```
Sets
```
Are represented as regular tensors (or sparse tensors). For example,
```
```
tf.constant([[1, 2], [3, 4]]) represents the two sets {1,
```
```
2} and {3, 4}. More generally, each set is represented by a vector in the
```
tensor’s last axis. You can manipulate sets using operations from the
tf.sets package.
Queues
Store tensors across multiple steps. TensorFlow offers various kinds of
```
queues: basic First In, First Out (FIFO) queues (FIFOQueue), queues
```
```
that can prioritize some items (PriorityQueue), shuffle their items
```
```
(RandomShuffleQueue), and batch items of different shapes by
```
```
padding (PaddingFIFOQueue). These classes are all in the
```
tf.queue package.
With tensors, operations, variables, and various data structures at your
disposal, you are now ready to customize your models and training
algorithms!
Customizing Models and Training Algorithms
Let’s start by creating a custom loss function, which is a straightforward
and common use case.
Custom Loss Functions
Suppose you want to train a regression model, but your training set is a bit
noisy. Of course, you start by trying to clean up your dataset by removing
```
or fixing the outliers, but that turns out to be insufficient; the dataset is still
```
noisy. Which loss function should you use? The mean squared error might
penalize large errors too much and cause your model to be imprecise. The
mean absolute error would not penalize outliers as much, but training might
take a while to converge, and the trained model might not be very precise.
```
This is probably a good time to use the Huber loss (introduced in
```
```
Chapter 10) instead of the good old MSE. The Huber loss is available in
```
```
Keras (just use an instance of the tf.keras.losses.Huber class).
```
But let’s pretend it’s not there. To implement it, just create a function that
takes the labels and the model’s predictions as arguments, and uses
```
TensorFlow operations to compute a tensor containing all the losses (one
```
```
per sample):
```
```
def huber_fn(y_true, y_pred):
```
```
error = y_true - y_pred
```
```
is_small_error = tf.abs(error) < 1
```
```
squared_loss = tf.square(error) / 2
```
```
linear_loss = tf.abs(error) - 0.5
```
```
return tf.where(is_small_error, squared_loss, linear_loss)
```
WARNING
For better performance, you should use a vectorized implementation, as in this example.
Moreover, if you want to benefit from TensorFlow’s graph optimization features, you
should use only TensorFlow operations.
It is also possible to return the mean loss instead of the individual sample
losses, but this is not recommended as it makes it impossible to use class
```
weights or sample weights when you need them (see Chapter 10).
```
Now you can use this Huber loss function when you compile the Keras
model, then train your model as usual:
```
model.compile(loss=huber_fn, optimizer="nadam")
```
```
model.fit(X_train, y_train, [...])
```
And that’s it! For each batch during training, Keras will call the
```
huber_fn() function to compute the loss, then it will use reverse-mode
```
autodiff to compute the gradients of the loss with regards to all the model
```
parameters, and finally it will perform a Gradient Descent step (in this
```
```
example using a Nadam optimizer). Moreover, it will keep track of the total
```
loss since the beginning of the epoch, and it will display the mean loss.
But what happens to this custom loss when you save the model?
Saving and Loading Models That Contain Custom
Components
Saving a model containing a custom loss function works fine, but when you
load it, you’ll need to provide a dictionary that maps the function name to
the actual function. More generally, when you load a model containing
custom objects, you need to map the names to the objects:
```
model = tf.keras.models.load_model("my_model_with_a_custom_loss",
```
```
custom_objects={"huber_fn":
```
```
huber_fn})
```
With the current implementation, any error between –1 and 1 is considered
“small.” But what if you want a different threshold? One solution is to
create a function that creates a configured loss function:
```
def create_huber(threshold=1.0):
```
```
def huber_fn(y_true, y_pred):
```
```
error = y_true - y_pred
```
```
is_small_error = tf.abs(error) < threshold
```
```
squared_loss = tf.square(error) / 2
```
```
linear_loss = threshold * tf.abs(error) - threshold ** 2
```
/ 2
```
return tf.where(is_small_error, squared_loss,
```
```
linear_loss)
```
return huber_fn
```
model.compile(loss=create_huber(2.0), optimizer="nadam")
```
Unfortunately, when you save the model, the threshold will not be
saved. This means that you will have to specify the threshold value
```
when loading the model (note that the name to use is "huber_fn", which
```
is the name of the function you gave Keras, not the name of the function
```
that created it):
```
```
model =
```
```
tf.keras.models.load_model("my_model_with_a_custom_loss_threshold
```
_2.h5",
```
custom_objects={"huber_fn":
```
```
create_huber(2.0)})
```
You can solve this by creating a subclass of the
tf.keras.losses.Loss class, and then implementing its
```
get_config() method:
```
```
class HuberLoss(tf.keras.losses.Loss):
```
```
def __init__(self, threshold=1.0, **kwargs):
```
self.threshold = threshold
```
super().__init__(**kwargs)
```
```
def call(self, y_true, y_pred):
```
```
error = y_true - y_pred
```
```
is_small_error = tf.abs(error) < self.threshold
```
```
squared_loss = tf.square(error) / 2
```
```
linear_loss = self.threshold * tf.abs(error) -
```
self.threshold**2 / 2
```
return tf.where(is_small_error, squared_loss,
```
```
linear_loss)
```
```
def get_config(self):
```
```
base_config = super().get_config()
```
```
return {**base_config, "threshold": self.threshold}
```
Let’s walk through this code:
The constructor accepts **kwargs and passes them to the parent
constructor, which handles standard hyperparameters: the name of
the loss and the reduction algorithm to use to aggregate the
individual instance losses. By default, it is "AUTO", which is
equivalent to "SUM_OVER_BATCH_SIZE": the loss will be the
sum of the instance losses, weighted by the sample weights, if any,
```
and divided by the batch size (not by the sum of weights, so this is
```
```
not the weighted mean). Other possible values are "SUM" and
```
"NONE".
```
The call() method takes the labels and predictions, computes all
```
the instance losses, and returns them.
```
The get_config() method returns a dictionary mapping each
```
hyperparameter name to its value. It first calls the parent class’s
```
get_config() method, then adds the new hyperparameters to
```
this dictionary.
You can then use any instance of this class when you compile the model:
```
model.compile(loss=HuberLoss(2.), optimizer="nadam")
```
```
When you save the model, the threshold will be saved along with it; and
```
when you load the model, you just need to map the class name to the class
```
itself:
```
```
model =
```
```
tf.keras.models.load_model("my_model_with_a_custom_loss_class",
```
```
custom_objects={"HuberLoss":
```
```
HuberLoss})
```
```
When you save a model, Keras calls the loss instance’s get_config()
```
method and saves the config in the SavedModel. When you load the model,
```
it calls the from_config() class method on the HuberLoss class: this
```
6
7
```
method is implemented by the base class (Loss) and creates an instance of
```
the class, passing **config to the constructor.
That’s it for losses! As we will see now, custom activation functions,
initializers, regularizers, and constraints are not much different.
Custom Activation Functions, Initializers, Regularizers,
and Constraints
Most Keras functionalities, such as losses, regularizers, constraints,
initializers, metrics, activation functions, layers, and even full models, can
be customized in very much the same way. Most of the time, you will just
need to write a simple function with the appropriate inputs and outputs.
```
Here are examples of a custom activation function (equivalent to
```
```
tf.keras.activations.softplus() or tf.nn.softplus()),
```
```
a custom Glorot initializer (equivalent to
```
```
tf.keras.initializers.glorot_normal()), a custom ℓ
```
```
regularizer (equivalent to tf.keras.regularizers.l1(0.01)),
```
```
and a custom constraint that ensures weights are all positive (equivalent to
```
```
tf.keras.constraints.nonneg() or tf.nn.relu()):
```
```
def my_softplus(z):
```
```
return tf.math.log(1.0 + tf.exp(z))
```
```
def my_glorot_initializer(shape, dtype=tf.float32):
```
```
stddev = tf.sqrt(2. / (shape[0] + shape[1]))
```
```
return tf.random.normal(shape, stddev=stddev, dtype=dtype)
```
```
def my_l1_regularizer(weights):
```
```
return tf.reduce_sum(tf.abs(0.01 * weights))
```
```
def my_positive_weights(weights): # return value is just
```
```
tf.nn.relu(weights)
```
```
return tf.where(weights < 0., tf.zeros_like(weights),
```
```
weights)
```
As you can see, the arguments depend on the type of custom function.
```
These custom functions can then be used normally; for example:
```
1
```
layer = tf.keras.layers.Dense(1, activation=my_softplus,
```
```
kernel_initializer=my_glorot_initializer,
```
```
kernel_regularizer=my_l1_regularizer,
```
```
kernel_constraint=my_positive_weights)
```
The activation function will be applied to the output of this Dense layer,
and its result will be passed on to the next layer. The layer’s weights will be
initialized using the value returned by the initializer. At each training step
the weights will be passed to the regularization function to compute the
regularization loss, which will be added to the main loss to get the final loss
used for training. Finally, the constraint function will be called after each
training step, and the layer’s weights will be replaced by the constrained
weights.
If a function has hyperparameters that need to be saved along with the
model, then you will want to subclass the appropriate class, such as
tf.keras.regularizers.Regularizer,
tf.keras.constraints.Constraint,
tf.keras.initializers.Initializer, or
```
tf.keras.layers.Layer (for any layer, including activation
```
```
functions). Much like we did for the custom loss, here is a simple class for
```
```
ℓ regularization that saves its factor hyperparameter (this time we do
```
```
not need to call the parent constructor or the get_config() method, as
```
```
they are not defined by the parent class):
```
```
class MyL1Regularizer(tf.keras.regularizers.Regularizer):
```
```
def __init__(self, factor):
```
self.factor = factor
```
def __call__(self, weights):
```
```
return tf.reduce_sum(tf.abs(self.factor * weights))
```
```
def get_config(self):
```
```
return {"factor": self.factor}
```
1
```
Note that you must implement the call() method for losses, layers
```
```
(including activation functions), and models, or the __call__() method
```
for regularizers, initializers, and constraints. For metrics, things are a bit
different, as we will see now.
Custom Metrics
```
Losses and metrics are conceptually not the same thing: losses (e.g., cross
```
```
entropy) are used by Gradient Descent to train a model, so they must be
```
```
differentiable (at least at the points where they are evaluated), and their
```
gradients should not be 0 everywhere. Plus, it’s OK if they are not easily
```
interpretable by humans. In contrast, metrics (e.g., accuracy) are used to
```
evaluate a model: they must be more easily interpretable, and they can be
non-differentiable or have 0 gradients everywhere.
That said, in most cases, defining a custom metric function is exactly the
same as defining a custom loss function. In fact, we could even use the
```
Huber loss function we created earlier as a metric; it would work just fine
```
```
(and persistence would also work the same way, in this case only saving the
```
```
name of the function, "huber_fn", not the threshold):
```
```
model.compile(loss="mse", optimizer="nadam", metrics=
```
```
[create_huber(2.0)])
```
For each batch during training, Keras will compute this metric and keep
track of its mean since the beginning of the epoch. Most of the time, this is
exactly what you want. But not always! Consider a binary classifier’s
precision, for example. As we saw in Chapter 3, precision is the number of
```
true positives divided by the number of positive predictions (including both
```
```
true positives and false positives). Suppose the model made five positive
```
predictions in the first batch, four of which were correct: that’s 80%
precision. Then suppose the model made three positive predictions in the
second batch, but they were all incorrect: that’s 0% precision for the second
batch. If you just compute the mean of these two precisions, you get 40%.
But wait a second—that’s not the model’s precision over these two batches!
8
```
Indeed, there were a total of four true positives (4 + 0) out of eight positive
```
```
predictions (5 + 3), so the overall precision is 50%, not 40%. What we need
```
is an object that can keep track of the number of true positives and the
number of false positives and that can compute the precision based on these
numbers when requested. This is precisely what the
tf.keras.metrics.Precision class does:
```
>>> precision = tf.keras.metrics.Precision()
```
```
>>> precision([0, 1, 1, 1, 0, 1, 0, 1], [1, 1, 0, 1, 0, 1, 0, 1])
```
```
<tf.Tensor: shape=(), dtype=float32, numpy=0.8>
```
```
>>> precision([0, 1, 0, 0, 1, 0, 1, 1], [1, 0, 1, 1, 0, 0, 0, 0])
```
```
<tf.Tensor: shape=(), dtype=float32, numpy=0.5>
```
In this example, we created a Precision object, then we used it like a
function, passing it the labels and predictions for the first batch, then for the
```
second batch (you can optionally pass sample weights as well, if you want).
```
We used the same number of true and false positives as in the example we
```
just discussed. After the first batch, it returns a precision of 80%; then after
```
```
the second batch, it returns 50% (which is the overall precision so far, not
```
```
the second batch’s precision). This is called a streaming metric (or stateful
```
```
metric), as it is gradually updated, batch after batch.
```
```
At any point, we can call the result() method to get the current value of
```
```
the metric. We can also look at its variables (tracking the number of true
```
```
and false positives) by using the variables attribute, and we can reset
```
```
these variables using the reset_states() method:
```
```
>>> precision.result()
```
```
<tf.Tensor: shape=(), dtype=float32, numpy=0.5>
```
>>> precision.variables
```
[<tf.Variable 'true_positives:0' [...], numpy=array([4.],
```
```
dtype=float32)>,
```
```
<tf.Variable 'false_positives:0' [...], numpy=array([4.],
```
```
dtype=float32)>]
```
```
>>> precision.reset_states() # both variables get reset to 0.0
```
If you need to define your own custom streaming metric, create a subclass
of the tf.keras.metrics.Metric class. Here is a basic example that
keeps track of the total Huber loss and the number of instances seen so far.
When asked for the result, it returns the ratio, which is just the mean Huber
```
loss:
```
```
class HuberMetric(tf.keras.metrics.Metric):
```
```
def __init__(self, threshold=1.0, **kwargs):
```
```
super().__init__(**kwargs) # handles base args (e.g.,
```
```
dtype)
```
self.threshold = threshold
```
self.huber_fn = create_huber(threshold)
```
```
self.total = self.add_weight("total",
```
```
initializer="zeros")
```
```
self.count = self.add_weight("count",
```
```
initializer="zeros")
```
```
def update_state(self, y_true, y_pred, sample_weight=None):
```
```
sample_metrics = self.huber_fn(y_true, y_pred)
```
```
self.total.assign_add(tf.reduce_sum(sample_metrics))
```
```
self.count.assign_add(tf.cast(tf.size(y_true),
```
```
tf.float32))
```
```
def result(self):
```
return self.total / self.count
```
def get_config(self):
```
```
base_config = super().get_config()
```
```
return {**base_config, "threshold": self.threshold}
```
Let’s walk through this code:
```
The constructor uses the add_weight() method to create the
```
variables needed to keep track of the metric’s state over multiple
```
batches—in this case, the sum of all Huber losses (total) and the
```
```
number of instances seen so far (count). You could just create
```
variables manually if you preferred. Keras tracks any
```
tf.Variable that is set as an attribute (and more generally, any
```
```
“trackable” object, such as layers or models).
```
```
The update_state() method is called when you use an
```
```
instance of this class as a function (as we did with the
```
```
Precision object). It updates the variables, given the labels and
```
9
```
predictions for one batch (and sample weights, but in this case we
```
```
ignore them).
```
```
The result() method computes and returns the final result, in
```
this case the mean Huber metric over all instances. When you use
```
the metric as a function, the update_state() method gets
```
```
called first, then the result() method is called, and its output is
```
returned.
```
We also implement the get_config() method to ensure the
```
threshold gets saved along with the model.
```
The default implementation of the reset_states() method
```
```
resets all variables to 0.0 (but you can override it if needed).
```
NOTE
```
Keras will take care of variable persistence seamlessly; no action is required.
```
When you define a metric using a simple function, Keras automatically
calls it for each batch, and it keeps track of the mean during each epoch,
just like we did manually. So the only benefit of our HuberMetric class
is that the threshold will be saved. But of course, some metrics, like
precision, cannot simply be averaged over batches: in those cases, there’s
no other option than to implement a streaming metric.
Now that we have built a streaming metric, building a custom layer will
seem like a walk in the park!
Custom Layers
You may occasionally want to build an architecture that contains an exotic
layer for which TensorFlow does not provide a default implementation. Or
you may simply want to build a very repetitive architecture, in which a
particular block of layers is repeated many times, and it would be
convenient to treat each block as a single layer. For such cases, you’ll want
to build a custom layer.
First, some layers have no weights, such as
tf.keras.layers.Flatten or tf.keras.layers.ReLU. If you
want to create a custom layer without any weights, the simplest option is to
write a function and wrap it in a tf.keras.layers.Lambda layer. For
example, the following layer will apply the exponential function to its
```
inputs:
```
```
exponential_layer = tf.keras.layers.Lambda(lambda x: tf.exp(x))
```
This custom layer can then be used like any other layer, using the
Sequential API, the Functional API, or the Subclassing API. You can also
use it as an activation function, or you could use activation=tf.exp.
The exponential layer is sometimes used in the output layer of a regression
```
model when the values to predict have very different scales (e.g., 0.001, 10.,
```
```
1,000.). In fact, the exponential function is one of the standard activation
```
functions in Keras, so you can just use activation="exponential".
```
As you might guess, to build a custom stateful layer (i.e., a layer with
```
```
weights), you need to create a subclass of the
```
tf.keras.layers.Layer class. For example, the following class
implements a simplified version of the Dense layer:
```
class MyDense(tf.keras.layers.Layer):
```
```
def __init__(self, units, activation=None, **kwargs):
```
```
super().__init__(**kwargs)
```
self.units = units
```
self.activation = tf.keras.activations.get(activation)
```
```
def build(self, batch_input_shape):
```
```
self.kernel = self.add_weight(
```
```
name="kernel", shape=[batch_input_shape[-1],
```
self.units],
```
initializer="glorot_normal")
```
```
self.bias = self.add_weight(
```
```
name="bias", shape=[self.units], initializer="zeros")
```
```
super().build(batch_input_shape) # must be at the end
```
```
def call(self, X):
```
```
return self.activation(X @ self.kernel + self.bias)
```
```
def compute_output_shape(self, batch_input_shape):
```
```
return tf.TensorShape(batch_input_shape.as_list()[:-1] +
```
```
[self.units])
```
```
def get_config(self):
```
```
base_config = super().get_config()
```
```
return {**base_config, "units": self.units,
```
"activation":
```
tf.keras.activations.serialize(self.activation)}
```
Let’s walk through this code:
```
The constructor takes all the hyperparameters as arguments (in this
```
```
example, units and activation), and importantly it also takes
```
a **kwargs argument. It calls the parent constructor, passing it
the kwargs: this takes care of standard arguments such as
input_shape, trainable, and name. Then it saves the
hyperparameters as attributes, converting the activation
argument to the appropriate activation function using the
```
tf.keras.activations.get() function (it accepts
```
functions, standard strings like "relu" or "swish", or simply
```
None).
```
```
The build() method’s role is to create the layer’s variables by
```
```
calling the add_weight() method for each weight. The
```
```
build() method is called the first time the layer is used. At that
```
point, Keras will know the shape of this layer’s inputs, and it will
```
pass it to the build() method, which is often necessary to
```
create some of the weights. For example, we need to know the
number of neurons in the previous layer in order to create the
```
connection weights matrix (i.e., the "kernel"): this corresponds
```
to the size of the last dimension of the inputs. At the end of the
```
build() method (and only at the end), you must call the parent’s
```
```
build() method: this tells Keras that the layer is built (it just sets
```
```
self.built = True).
```
10
```
The call() method performs the desired operations. In this case,
```
we compute the matrix multiplication of the inputs X and the
layer’s kernel, we add the bias vector, and we apply the activation
```
function to the result, and this gives us the output of the layer.
```
```
The compute_output_shape() method simply returns the
```
shape of this layer’s outputs. In this case, it is the same shape as the
inputs, except the last dimension is replaced with the number of
neurons in the layer. Note that in Keras, shapes are instances of the
tf.TensorShape class, which you can convert to Python lists
```
using as_list().
```
```
The get_config() method is just like in the previous custom
```
classes. Note that we save the activation function’s full
configuration by calling
```
tf.keras.activations.serialize().
```
You can now use a MyDense layer just like any other layer!
NOTE
```
You can generally omit the compute_output_shape() method, as Keras
```
```
automatically infers the output shape, except when the layer is dynamic (as we will see
```
```
shortly).
```
```
To create a layer with multiple inputs (e.g., Concatenate), the argument
```
```
to the call() method should be a tuple containing all the inputs, and
```
```
similarly the argument to the compute_output_shape() method
```
should be a tuple containing each input’s batch shape. To create a layer with
```
multiple outputs, the call() method should return the list of outputs, and
```
```
compute_output_shape() should return the list of batch output
```
```
shapes (one per output). For example, the following toy layer takes two
```
inputs and returns three outputs:
```
class MyMultiLayer(tf.keras.layers.Layer):
```
```
def call(self, X):
```
X1, X2 = X
return X1 + X2, X1 * X2, X1 / X2
```
def compute_output_shape(self, batch_input_shape):
```
batch_input_shape1, batch_input_shape2 =
batch_input_shape
return [batch_input_shape1, batch_input_shape1,
batch_input_shape1]
This layer may now be used like any other layer, but of course only using
```
the Functional and Subclassing APIs, not the Sequential API (which only
```
```
accepts layers with one input and one output).
```
If your layer needs to have a different behavior during training and during
```
testing (e.g., if it uses Dropout or BatchNormalization layers), then
```
```
you must add a training argument to the call() method and use this
```
argument to decide what to do. For example, let’s create a layer that adds
```
Gaussian noise during training (for regularization) but does nothing during
```
```
testing (Keras has a layer that does the same thing,
```
```
tf.keras.layers.GaussianNoise):
```
```
class MyGaussianNoise(tf.keras.layers.Layer):
```
```
def __init__(self, stddev, **kwargs):
```
```
super().__init__(**kwargs)
```
self.stddev = stddev
```
def call(self, X, training=None):
```
if training:
```
noise = tf.random.normal(tf.shape(X),
```
```
stddev=self.stddev)
```
return X + noise
```
else:
```
return X
```
def compute_output_shape(self, batch_input_shape):
```
return batch_input_shape
With that, you can now build any custom layer you need! Now let’s create
custom models.
Custom Models
We already looked at creating custom model classes in Chapter 10, when
we discussed the Subclassing API. It’s straightforward: subclass the
tf.keras.Model class, create layers and variables in the constructor,
```
and implement the call() method to do whatever you want the model to
```
do. For example, suppose you want to build the model represented in
Figure 12-3.
11
Figure 12-3. Custom model example: an arbitrary model with a custom ResidualBlock layer
containing a skip connection
The inputs go through a first dense layer, then through a residual block
```
composed of two dense layers and an addition operation (as we will see in
```
```
Chapter 14, a residual block adds its inputs to its outputs), then through this
```
same residual block three more times, then through a second residual block,
and the final result goes through a dense output layer. Note that this model
```
does not make much sense; it’s just an example to illustrate the fact that you
```
can easily build any kind of model you want, even one that contains loops
and skip connections. To implement this model, it is best to first create a
ResidualBlock layer, since we are going to create a couple of identical
```
blocks (and we might want to reuse it in another model):
```
```
class ResidualBlock(tf.keras.layers.Layer):
```
```
def __init__(self, n_layers, n_neurons, **kwargs):
```
```
super().__init__(**kwargs)
```
```
self.hidden = [tf.keras.layers.Dense(n_neurons,
```
```
activation="relu",
```
```
kernel_initializer="he_normal")
```
```
for _ in range(n_layers)]
```
```
def call(self, inputs):
```
```
Z = inputs
```
for layer in self.hidden:
```
Z = layer(Z)
```
return inputs + Z
This layer is a bit special since it contains other layers. This is handled
transparently by Keras: it automatically detects that the hidden attribute
```
contains trackable objects (layers in this case), so their variables are
```
automatically added to this layer’s list of variables. The rest of this class is
self-explanatory. Next, let’s use the Subclassing API to define the model
```
itself:
```
```
class ResidualRegressor(tf.keras.Model):
```
```
def __init__(self, output_dim, **kwargs):
```
```
super().__init__(**kwargs)
```
```
self.hidden1 = tf.keras.layers.Dense(30,
```
```
activation="relu",
```
```
kernel_initializer="he_normal")
```
```
self.block1 = ResidualBlock(2, 30)
```
```
self.block2 = ResidualBlock(2, 30)
```
```
self.out = tf.keras.layers.Dense(output_dim)
```
```
def call(self, inputs):
```
```
Z = self.hidden1(inputs)
```
```
for _ in range(1 + 3):
```
```
Z = self.block1(Z)
```
```
Z = self.block2(Z)
```
```
return self.out(Z)
```
```
We create the layers in the constructor and use them in the call()
```
```
method. This model can then be used like any other model (compile it, fit it,
```
```
evaluate it, and use it to make predictions). If you also want to be able to
```
```
save the model using the save() method and load it using the
```
```
tf.keras.models.load_model() function, you must implement
```
```
the get_config() method (as we did earlier) in both the
```
ResidualBlock class and the ResidualRegressor class.
Alternatively, you can save and load the weights using the
```
save_weights() and load_weights() methods.
```
The Model class is a subclass of the Layer class, so models can be
defined and used exactly like layers. But a model has some extra
```
functionalities, including of course its compile(), fit(),
```
```
evaluate(), and predict() methods (and a few variants), plus the
```
```
get_layers() method (which can return any of the model’s layers by
```
```
name or by index) and the save() method (and support for
```
```
tf.keras.models.load_model() and
```
```
tf.keras.models.clone_model()).
```
TIP
If models provide more functionality than layers, why not just define every layer as a
model? Well, technically you could, but it is usually cleaner to distinguish the internal
```
components of your model (i.e., layers or reusable blocks of layers) from the model
```
```
itself (i.e., the object you will train). The former should subclass the Layer class, while
```
the latter should subclass the Model class.
With that, you can naturally and concisely build almost any model that you
find in a paper, using the Sequential API, the Functional API, the
Subclassing API, or even a mix of these. “Almost” any model? Yes, there
are still a few things that we need to look at: first, how to define losses or
metrics based on model internals, and second, how to build a custom
training loop.
Losses and Metrics Based on Model Internals
The custom losses and metrics we defined earlier were all based on the
```
labels and the predictions (and optionally sample weights). There will be
```
times when you want to define losses based on other parts of your model,
such as the weights or activations of its hidden layers. This may be useful
for regularization purposes or to monitor some internal aspect of your
model.
To define a custom loss based on model internals, compute it based on any
```
part of the model you want, then pass the result to the add_loss()
```
method. For example, let’s build a custom regression MLP model
composed of a stack of five hidden layers plus an output layer. This custom
model will also have an auxiliary output on top of the upper hidden layer.
The loss associated to this auxiliary output will be called the reconstruction
```
loss (see Chapter 17): it is the mean squared difference between the
```
reconstruction and the inputs. By adding this reconstruction loss to the main
loss, we will encourage the model to preserve as much information as
possible through the hidden layers—even information that is not directly
useful for the regression task itself. In practice, this loss sometimes
```
improves generalization (it is a regularization loss). It is also possible to add
```
```
a custom metric using the model’s add_metric() method. Here is the
```
code for this custom model with a custom reconstruction loss and a
corresponding metric:
```
class ReconstructingRegressor(tf.keras.Model):
```
```
def __init__(self, output_dim, **kwargs):
```
```
super().__init__(**kwargs)
```
```
self.hidden = [tf.keras.layers.Dense(30,
```
```
activation="relu",
```
```
kernel_initializer="he_normal")
```
```
for _ in range(5)]
```
```
self.out = tf.keras.layers.Dense(output_dim)
```
```
self.reconstruction_mean = tf.keras.metrics.Mean(
```
```
name="reconstruction_error")
```
```
def build(self, batch_input_shape):
```
```
n_inputs = batch_input_shape[-1]
```
```
self.reconstruct = tf.keras.layers.Dense(n_inputs)
```
```
super().build(batch_input_shape) # or self.built = True,
```
see below
```
def call(self, inputs, training=None):
```
```
Z = inputs
```
for layer in self.hidden:
```
Z = layer(Z)
```
```
reconstruction = self.reconstruct(Z)
```
```
recon_loss = tf.reduce_mean(tf.square(reconstruction -
```
```
inputs))
```
```
self.add_loss(0.05 * recon_loss)
```
if training:
```
result = self.reconstruction_mean(recon_loss)
```
```
self.add_metric(result)
```
```
return self.out(Z)
```
Let’s go through this code:
The constructor creates the DNN with five dense hidden layers and
one dense output layer. We also create a Mean streaming metric to
keep track of the reconstruction error during training.
```
The build() method creates an extra dense layer which will be
```
used to reconstruct the inputs of the model. It must be created here
because its number of units must be equal to the number of inputs,
```
and this number is unknown before the build() method is
```
called.
```
The call() method processes the inputs through all five hidden
```
layers, then passes the result through the reconstruction layer,
which produces the reconstruction.
```
Then the call() method computes the reconstruction loss (the
```
mean squared difference between the reconstruction and the
```
inputs), and adds it to the model’s list of losses using the
```
```
add_loss() method. Notice that we scale down the
```
```
reconstruction loss by multiplying it by 0.05 (this is a
```
```
hyperparameter you can tune). This ensures that the reconstruction
```
loss does not dominate the main loss.
```
Next, during training only, the call() method updates the
```
reconstruction metric, and adds it to the model so it can be
displayed.
```
Finally, the call() method passes the output of the hidden layers
```
to the output layer and returns its output.
Both the total loss and the reconstruction loss will go down during training:
Epoch 1/5
363/363 [========] - 1s 820us/step - loss: 0.7640 -
```
reconstruction_error: 1.2728
```
Epoch 2/5
363/363 [========] - 0s 809us/step - loss: 0.4584 -
```
reconstruction_error: 0.6340
```
[...]
In most cases, everything we have discussed so far will be sufficient to
implement whatever model you want to build, even with complex
architectures, losses, and metrics. However, for some architectures such as
12
13
```
GANs (see Chapter 17), you will have to customize the training loop itself.
```
Before we get there, we must look at how to compute gradients
automatically in TensorFlow.
Computing Gradients Using Autodiff
```
To understand how to use autodiff (see Chapter 10 and Appendix B) to
```
compute gradients automatically, let’s consider a simple toy function:
```
def f(w1, w2):
```
return 3 * w1 ** 2 + 2 * w1 * w2
If you know calculus, you can analytically find that the partial derivative of
this function with regard to w1 is 6 * w1 + 2 * w2. You can also find
that its partial derivative with regard to w2 is 2 * w1. For example, at the
```
point (w1, w2) = (5, 3), these partial derivatives are equal to 36 and
```
```
10, respectively, so the gradient vector at this point is (36, 10). But if this
```
were a neural network, the function would be much more complex,
typically with tens of thousands of parameters, and finding the partial
derivatives analytically by hand would be a virtually impossible task. One
solution could be to compute an approximation of each partial derivative by
measuring how much the function’s output changes when you tweak the
corresponding parameter by a tiny amount:
>>> w1, w2 = 5, 3
>>> eps = 1e-6
```
>>> (f(w1 + eps, w2) - f(w1, w2)) / eps
```
36.000003007075065
```
>>> (f(w1, w2 + eps) - f(w1, w2)) / eps
```
10.000000003174137
Looks about right! This works rather well and is easy to implement, but it is
```
just an approximation, and importantly you need to call f() at least once
```
```
per parameter (not twice, since we could compute f(w1, w2) just once).
```
```
Having to call f() at least once per parameter makes this approach
```
intractable for large neural networks. So instead, we should use reverse-
mode autodiff. TensorFlow makes this pretty simple:
```
w1, w2 = tf.Variable(5.), tf.Variable(3.)
```
```
with tf.GradientTape() as tape:
```
```
z = f(w1, w2)
```
```
gradients = tape.gradient(z, [w1, w2])
```
We first define two variables w1 and w2, then we create a
tf.GradientTape context that will automatically record every
operation that involves a variable, and finally we ask this tape to compute
the gradients of the result z with regard to both variables [w1, w2]. Let’s
take a look at the gradients that TensorFlow computed:
>>> gradients
```
[<tf.Tensor: shape=(), dtype=float32, numpy=36.0>,
```
```
<tf.Tensor: shape=(), dtype=float32, numpy=10.0>]
```
```
Perfect! Not only is the result accurate (the precision is only limited by the
```
```
floating-point errors), but the gradient() method only goes through the
```
```
recorded computations once (in reverse order), no matter how many
```
variables there are, so it is incredibly efficient. It’s like magic!
TIP
```
To save memory, only put the strict minimum inside the tf.GradientTape()
```
block. Alternatively, pause recording by creating a with
```
tape.stop_recording() block inside the tf.GradientTape() block.
```
The tape is automatically erased immediately after you call its
```
gradient() method, so you will get an exception if you try to call
```
```
gradient() twice:
```
```
with tf.GradientTape() as tape:
```
```
z = f(w1, w2)
```
```
dz_dw1 = tape.gradient(z, w1) # returns tensor 36.0
```
```
dz_dw2 = tape.gradient(z, w2) # raises a RuntimeError!
```
```
If you need to call gradient() more than once, you must make the tape
```
persistent and delete it each time you are done with it to free resources:
```
with tf.GradientTape(persistent=True) as tape:
```
```
z = f(w1, w2)
```
```
dz_dw1 = tape.gradient(z, w1) # returns tensor 36.0
```
```
dz_dw2 = tape.gradient(z, w2) # returns tensor 10.0, works fine
```
now!
del tape
By default, the tape will only track operations involving variables, so if you
try to compute the gradient of z with regard to anything other than a
variable, the result will be None:
```
c1, c2 = tf.constant(5.), tf.constant(3.)
```
```
with tf.GradientTape() as tape:
```
```
z = f(c1, c2)
```
```
gradients = tape.gradient(z, [c1, c2]) # returns [None, None]
```
However, you can force the tape to watch any tensors you like, to record
every operation that involves them. You can then compute gradients with
regard to these tensors, as if they were variables:
```
with tf.GradientTape() as tape:
```
```
tape.watch(c1)
```
```
tape.watch(c2)
```
```
z = f(c1, c2)
```
```
gradients = tape.gradient(z, [c1, c2]) # returns [tensor 36.,
```
tensor 10.]
This can be useful in some cases, like if you want to implement a
regularization loss that penalizes activations that vary a lot when the inputs
vary little: the loss will be based on the gradient of the activations with
14
regard to the inputs. Since the inputs are not variables, you would need to
tell the tape to watch them.
Most of the time a gradient tape is used to compute the gradients of a single
```
value (usually the loss) with regard to a set of values (usually the model
```
```
parameters). This is where reverse-mode autodiff shines, as it just needs to
```
do one forward pass and one reverse pass to get all the gradients at once. If
you try to compute the gradients of a vector, for example a vector
containing multiple losses, then TensorFlow will compute the gradients of
```
the vector’s sum. So if you ever need to get the individual gradients (e.g.,
```
```
the gradients of each loss with regard to the model parameters), you must
```
```
call the tape’s jacobian() method: it will perform reverse-mode autodiff
```
```
once for each loss in the vector (all in parallel by default). It is even
```
```
possible to compute second-order partial derivatives (the Hessians, i.e., the
```
```
partial derivatives of the partial derivatives), but this is rarely needed in
```
```
practice (see the “Computing Gradients Using Autodiff” section of the
```
```
notebook for an example).
```
In some cases you may want to stop gradients from backpropagating
through some part of your neural network. To do this, you must use the
```
tf.stop_gradient() function. The function returns its inputs during
```
```
the forward pass (like tf.identity()), but it does not let gradients
```
```
through during backpropagation (it acts like a constant):
```
```
def f(w1, w2):
```
```
return 3 * w1 ** 2 + tf.stop_gradient(2 * w1 * w2)
```
```
with tf.GradientTape() as tape:
```
```
z = f(w1, w2) # the forward pass is not affected by
```
```
stop_gradient()
```
```
gradients = tape.gradient(z, [w1, w2]) # returns [tensor 30.,
```
None]
Finally, you may occasionally run into some numerical issues when
computing gradients. For example, if you compute the gradients of the
square root function at x = 10 , the result will be infinite. In reality, the
slope at that point is not infinite, but it’s more than 32-bit floats can handle:
–50
```
>>> x = tf.Variable(1e-50)
```
```
>>> with tf.GradientTape() as tape:
```
```
... z = tf.sqrt(x)
```
...
```
>>> tape.gradient(z, [x])
```
```
[<tf.Tensor: shape=(), dtype=float32, numpy=inf>]
```
```
To solve this, it’s often a good idea to add a tiny value to x (such as 10 )
```
when computing its square root.
The exponential function is also a frequent source of headaches, as it grows
```
extremely fast. For example, the way my_softplus() was defined
```
```
earlier is not numerically stable. If you compute my_softplus(100.0),
```
```
you will get infinity rather than the correct result (about 100). But it’s
```
possible to rewrite the function to make it numerically stable: the softplus
```
function is defined as log(1 + exp(z)), which is also equal to log(1 +
```
```
exp(–|z|)) + max(z, 0) (see the notebook for the mathematical proof) and the
```
advantage of this second form is that the exponential term cannot explode.
```
So here’s a better implementation of the my_softplus() function:
```
```
def my_softplus(z):
```
```
return tf.math.log(1 + tf.exp(-tf.abs(z))) + tf.maximum(0.,
```
```
z)
```
In some rare cases, a numerically stable function may still have numerically
unstable gradients. In such cases, you will have to tell TensorFlow which
equation to use for the gradients, rather than letting it use autodiff. For this,
you must use the @tf.custom_gradient decorator when defining the
function, and return both the function’s usual result plus a function that
```
computes the gradients. For example, let’s update the my_softplus()
```
```
function to also return a numerically stable gradients function:
```
@tf.custom_gradient
```
def my_softplus(z):
```
```
def my_softplus_gradients(grads): # grads = backprop'ed from
```
upper layers
```
return grads * (1 - 1 / (1 + tf.exp(z))) # stable grads
```
of softplus
–6
```
result = tf.math.log(1 + tf.exp(-tf.abs(z))) + tf.maximum(0.,
```
```
z)
```
return result, my_softplus_gradients
```
If you know differential calculus (see the tutorial notebook on this topic),
```
```
you can find that the derivative of log(1 + exp(z)) is exp(z) / (1 + exp(z)).
```
But this form is not stable: for large values of z, it ends up computing
infinity divided by infinity, which return NaN. However, with a bit of
```
algebraic manipulation, you can show that it’s also equal to 1 - 1 / (1 +
```
```
exp(z)), which is stable. The my_softplus_gradients() function
```
uses this equation to compute the gradients. Note that this function will
receive as input the gradients that were backpropagated so far, down to the
```
my_softplus() function; and according to the chain rule, we must
```
multiply them with this function’s gradients.
```
Now when we compute the gradients of the my_softplus() function,
```
we get the proper result, even for large input values.
Congratulations! You can now compute the gradients of any function
```
(provided it is differentiable at the point where you compute it), even
```
blocking backpropagation when needed, and write your own gradient
functions! This is probably more flexibility than you will ever need, even if
you build your own custom training loops, as we will see now.
Custom Training Loops
```
In some cases, the fit() method may not be flexible enough for what you
```
need to do. For example, the Wide & Deep paper we discussed in
Chapter 10 uses two different optimizers: one for the wide path and the
```
other for the deep path. Since the fit() method only uses one optimizer
```
```
(the one that we specify when compiling the model), implementing this
```
paper requires writing your own custom loop.
You may also like to write custom training loops simply to feel more
```
confident that they do precisely what you intend them to do (perhaps you
```
```
are unsure about some details of the fit() method). It can sometimes feel
```
safer to make everything explicit. However, remember that writing a
custom training loop will make your code longer, more error-prone, and
harder to maintain.
TIP
Unless you’re learning or you really need the extra flexibility, you should prefer using
```
the fit() method rather than implementing your own training loop, especially if you
```
work in a team.
First, let’s build a simple model. No need to compile it, since we will handle
the training loop manually:
```
l2_reg = tf.keras.regularizers.l2(0.05)
```
```
model = tf.keras.models.Sequential([
```
```
tf.keras.layers.Dense(30, activation="relu",
```
```
kernel_initializer="he_normal",
```
```
kernel_regularizer=l2_reg),
```
```
tf.keras.layers.Dense(1, kernel_regularizer=l2_reg)
```
```
])
```
Next, let’s create a tiny function that will randomly sample a batch of
```
instances from the training set (in Chapter 13 we will discuss the Data API,
```
```
which offers a much better alternative):
```
```
def random_batch(X, y, batch_size=32):
```
```
idx = np.random.randint(len(X), size=batch_size)
```
return X[idx], y[idx]
Let’s also define a function that will display the training status, including
the number of steps, the total number of steps, the mean loss since the start
```
of the epoch (i.e., we will use the Mean metric to compute it), and other
```
```
metrics:
```
```
def print_status_bar(step, total, loss, metrics=None):
```
```
metrics = " - ".join([f"{m.name}: {m.result():.4f}"
```
```
for m in [loss] + (metrics or [])])
```
```
end = "" if step < total else "\n"
```
```
print(f"\r{step}/{total} - " + metrics, end=end)
```
This code is self-explanatory, unless you are unfamiliar with Python string
```
formatting: {m.result():.4f} will format the metric’s result as a float
```
```
with four digits after the decimal point; moreover, using \r (carriage
```
```
return) along with end="" ensures that the status bar always gets printed
```
on the same line.
With that, let’s get down to business! First, we need to define some
hyperparameters and choose the optimizer, the loss function, and the
```
metrics (just the MAE in this example):
```
```
n_epochs = 5
```
```
batch_size = 32
```
```
n_steps = len(X_train) // batch_size
```
```
optimizer = tf.keras.optimizers.SGD(learning_rate=0.01)
```
```
loss_fn = tf.keras.losses.mean_squared_error
```
```
mean_loss = tf.keras.metrics.Mean()
```
```
metrics = [tf.keras.metrics.MeanAbsoluteError()]
```
And now we are ready to build the custom loop!
```
for epoch in range(1, n_epochs + 1):
```
```
print("Epoch {}/{}".format(epoch, n_epochs))
```
```
for step in range(1, n_steps + 1):
```
```
X_batch, y_batch = random_batch(X_train_scaled, y_train)
```
```
with tf.GradientTape() as tape:
```
```
y_pred = model(X_batch, training=True)
```
```
main_loss = tf.reduce_mean(loss_fn(y_batch, y_pred))
```
```
loss = tf.add_n([main_loss] + model.losses)
```
```
gradients = tape.gradient(loss,
```
```
model.trainable_variables)
```
```
optimizer.apply_gradients(zip(gradients,
```
```
model.trainable_variables))
```
```
mean_loss(loss)
```
for metric in metrics:
```
metric(y_batch, y_pred)
```
```
print_status_bar(step, n_steps, mean_loss, metrics)
```
for metric in [mean_loss] + metrics:
```
metric.reset_states()
```
There’s a lot going on in this code, so let’s walk through it:
We create two nested loops: one for the epochs, the other for the
batches within an epoch.
Then we sample a random batch from the training set.
```
Inside the tf.GradientTape() block, we make a prediction
```
for one batch, using the model as a function, and we compute the
```
loss: it is equal to the main loss plus the other losses (in this model,
```
```
there is one regularization loss per layer). Since the
```
```
mean_squared_error() function returns one loss per
```
instance, we compute the mean over the batch using
```
tf.reduce_mean() (if you wanted to apply different weights
```
```
to each instance, this is where you would do it). The regularization
```
losses are already reduced to a single scalar each, so we just need
```
to sum them (using tf.add_n(), which sums multiple tensors of
```
```
the same shape and data type).
```
Next, we ask the tape to compute the gradients of the loss with
regard to each trainable variable—not all variables!—and we apply
them to the optimizer to perform a Gradient Descent step.
```
Then we update the mean loss and the metrics (over the current
```
```
epoch), and we display the status bar.
```
At the end of each epoch, we reset the states of the mean loss and
the metrics.
```
If you want to apply Gradient Clipping (see Chapter 11), just set the
```
optimizer’s clipnorm or clipvalue hyperparameter. If you want to
apply any other transformation to the gradients, simply do so before calling
```
the apply_gradients() method. And if you want to add weight
```
```
constraints to your model (e.g., by setting kernel_constraint or
```
```
bias_constraint when creating a layer), you should update the
```
```
training loop to apply these constraints just after apply_gradients(),
```
like so:
for variable in model.variables:
if variable.constraint is not None:
```
variable.assign(variable.constraint(variable))
```
WARNING
Don’t forget to set training=True when calling the model in the training loop,
```
especially if your model behaves differently during training and testing (e.g., if it uses
```
```
BatchNormalization or Dropout). If it’s a custom model, make sure to
```
propagate the training argument to the layers that your model calls.
As you can see, there are quite a lot of things you need to get right, and it’s
easy to make a mistake. But on the bright side, you get full control, so it’s
your call.
Now that you know how to customize any part of your models and
training algorithms, let’s see how you can use TensorFlow’s automatic
graph generation feature: it can speed up your custom code considerably,
and it will also make it portable to any platform supported by TensorFlow
```
(see Chapter 19).
```
TensorFlow Functions and Graphs
```
Back in TensorFlow 1, graphs were unavoidable (as were the complexities
```
```
that came with them) because they were a central part of TensorFlow’s API.
```
```
Since TensorFlow 2 (released in 2019), graphs are still there, but not as
```
```
central, and they’re much (much!) simpler to use. To show just how simple,
```
let’s start with a trivial function that computes the cube of its input:
```
def cube(x):
```
return x ** 3
We can obviously call this function with a Python value, such as an int or a
float, or we can call it with a tensor:
15
```
>>> cube(2)
```
8
```
>>> cube(tf.constant(2.0))
```
```
<tf.Tensor: shape=(), dtype=float32, numpy=8.0>
```
```
Now, let’s use tf.function() to convert this Python function to a
```
TensorFlow Function:
```
>>> tf_cube = tf.function(cube)
```
>>> tf_cube
<tensorflow.python.eager.def_function.Function at 0x7fbfe0c54d50>
This TF Function can then be used exactly like the original Python function,
```
and it will return the same result (but always as tensors):
```
```
>>> tf_cube(2)
```
```
<tf.Tensor: shape=(), dtype=int32, numpy=8>
```
```
>>> tf_cube(tf.constant(2.0))
```
```
<tf.Tensor: shape=(), dtype=float32, numpy=8.0>
```
```
Under the hood, tf.function() analyzed the computations performed
```
```
by the cube() function and generated an equivalent computation graph!
```
```
As you can see, it was rather painless (we will see how this works shortly).
```
```
Alternatively, we could have used tf.function as a decorator; this is
```
actually more common:
@tf.function
```
def tf_cube(x):
```
return x ** 3
The original Python function is still available via the TF Function’s
python_function attribute, in case you ever need it:
```
>>> tf_cube.python_function(2)
```
8
TensorFlow optimizes the computation graph, pruning unused nodes,
```
simplifying expressions (e.g., 1 + 2 would get replaced with 3), and more.
```
Once the optimized graph is ready, the TF Function efficiently executes the
```
operations in the graph, in the appropriate order (and in parallel when it
```
```
can). As a result, a TF Function will usually run much faster than the
```
original Python function, especially if it performs complex computations.
Most of the time you will not really need to know more than that: when you
want to boost a Python function, just transform it into a TF Function. That’s
all!
Moreover, when you write a custom loss function, a custom metric, a
custom layer, or any other custom function and you use it in a Keras model
```
(as we did throughout this chapter), Keras automatically converts your
```
```
function into a TF Function—no need to use tf.function(). So most
```
of the time, all this magic is 100% transparent.
TIP
You can tell Keras not to convert your Python functions to TF Functions by setting
```
dynamic=True when creating a custom layer or a custom model. Alternatively, you
```
```
can set run_eagerly=True when calling the model’s compile() method.
```
By default, a TF Function generates a new graph for every unique set of
input shapes and data types and caches it for subsequent calls. For example,
```
if you call tf_cube(tf.constant(10)), a graph will be generated
```
for int32 tensors of shape []. Then if you call
```
tf_cube(tf.constant(20)), the same graph will be reused. But if
```
```
you then call tf_cube(tf.constant([10, 20])), a new graph
```
will be generated for int32 tensors of shape [2]. This is how TF Functions
```
handle polymorphism (i.e., varying argument types and shapes). However,
```
this is only true for tensor arguments: if you pass numerical Python values
to a TF Function, a new graph will be generated for every distinct value: for
```
example, calling tf_cube(10) and tf_cube(20) will generate two
```
graphs.
16
WARNING
If you call a TF Function many times with different numerical Python values, then many
```
graphs will be generated, slowing down your program and using up a lot of RAM (you
```
```
must delete the TF Function to release it). Python values should be reserved for
```
arguments that will have few unique values, such as hyperparameters like the number of
neurons per layer. This allows TensorFlow to better optimize each variant of your
model.
AutoGraph and Tracing
So how does TensorFlow generate graphs? It starts by analyzing the Python
function’s source code to capture all the control flow statements, such as
for loops, while loops, and if statements, as well as break,
continue, and return statements. This first step is called AutoGraph.
The reason TensorFlow has to analyze the source code is that Python does
not provide any other way to capture control flow statements: it offers
```
magic methods like __add__() and __mul__() to capture operators
```
```
like + and *, but there are no __while__() or __if__() magic
```
methods. After analyzing the function’s code, AutoGraph outputs an
upgraded version of that function in which all the control flow statements
are replaced by the appropriate TensorFlow operations, such as
```
tf.while_loop() for loops and tf.cond() for if statements. For
```
example, in Figure 12-4, AutoGraph analyzes the source code of the
```
sum_squares() Python function, and it generates the
```
```
tf__sum_squares() function. In this function, the for loop is
```
```
replaced by the definition of the loop_body() function (containing the
```
```
body of the original for loop), followed by a call to the for_stmt()
```
```
function. This call will build the appropriate tf.while_loop()
```
operation in the computation graph.
Figure 12-4. How TensorFlow generates graphs using AutoGraph and tracing
Next, TensorFlow calls this “upgraded” function, but instead of passing the
argument, it passes a symbolic tensor—a tensor without any actual value,
only a name, a data type, and a shape. For example, if you call
```
sum_squares(tf.constant(10)), then the
```
```
tf__sum_squares() function will be called with a symbolic tensor of
```
type int32 and shape []. The function will run in graph mode, meaning that
each TensorFlow operation will add a node in the graph to represent itself
```
and its output tensor(s) (as opposed to the regular mode, called eager
```
```
execution, or eager mode). In graph mode, TF operations do not perform
```
any computations. Graph mode was the default mode in TensorFlow 1. In
```
Figure 12-4, you can see the tf__sum_squares() function being called
```
```
with a symbolic tensor as its argument (in this case, an int32 tensor of shape
```
```
[]) and the final graph being generated during tracing. The nodes represent
```
```
operations, and the arrows represent tensors (both the generated function
```
```
and the graph are simplified).
```
TIP
To view the generated function’s source code, you can call
```
tf.autograph.to_code(sum_squares.python_function). The code is
```
not meant to be pretty, but it can sometimes help for debugging.
TF Function Rules
Most of the time, converting a Python function that performs TensorFlow
operations into a TF Function is trivial: decorate it with @tf.function
or let Keras take care of it for you. However, there are a few rules to
```
respect:
```
If you call any external library, including NumPy or even the
```
standard library, this call will run only during tracing; it will not be
```
part of the graph. Indeed, a TensorFlow graph can only include
```
TensorFlow constructs (tensors, operations, variables, datasets, and
```
```
so on). So, make sure you use tf.reduce_sum() instead of
```
```
np.sum(), tf.sort() instead of the built-in sorted()
```
```
function, and so on (unless you really want the code to run only
```
```
during tracing). This has a few additional implications:
```
```
If you define a TF Function f(x) that just returns
```
```
np.random.rand(), a random number will only be
```
generated when the function is traced, so
```
f(tf.constant(2.)) and
```
```
f(tf.constant(3.)) will return the same random
```
```
number, but f(tf.constant([2., 3.])) will
```
return a different one. If you replace
```
np.random.rand() with
```
```
tf.random.uniform([]), then a new random
```
number will be generated upon every call, since the
operation will be part of the graph.
```
If your non-TensorFlow code has side effects (such as
```
```
logging something or updating a Python counter), then
```
you should not expect those side effects to occur every
time you call the TF Function, as they will only occur
when the function is traced.
You can wrap arbitrary Python code in a
```
tf.py_function() operation, but doing so will
```
hinder performance, as TensorFlow will not be able to do
any graph optimization on this code. It will also reduce
portability, as the graph will only run on platforms where
```
Python is available (and where the right libraries are
```
```
installed).
```
You can call other Python functions or TF Functions, but they
should follow the same rules, as TensorFlow will capture their
operations in the computation graph. Note that these other
functions do not need to be decorated with @tf.function.
```
If the function creates a TensorFlow variable (or any other stateful
```
```
TensorFlow object, such as a dataset or a queue), it must do so
```
upon the very first call, and only then, or else you will get an
exception. It is usually preferable to create variables outside of the
```
TF Function (e.g., in the build() method of a custom layer). If
```
you want to assign a new value to the variable, make sure you call
```
its assign() method, instead of using the = operator.
```
The source code of your Python function should be available to
```
TensorFlow. If the source code is unavailable (for example, if you
```
define your function in the Python shell, which does not give
access to the source code, or if you deploy only the compiled *.pyc
```
Python files to production), then the graph generation process will
```
fail or have limited functionality.
TensorFlow will only capture for loops that iterate over a tensor
```
or a tf.data.Dataset (see Chapter 13). So make sure you use
```
```
for i in tf.range(x) rather than for i in
```
```
range(x), or else the loop will not be captured in the graph.
```
```
Instead, it will run during tracing. (This may be what you want if
```
the for loop is meant to build the graph, for example to create
```
each layer in a neural network.)
```
As always, for performance reasons, you should prefer a vectorized
implementation whenever you can, rather than using loops.
It’s time to sum up! In this chapter we started with a brief overview of
TensorFlow, then we looked at TensorFlow’s low-level API, including
tensors, operations, variables, and special data structures. We then used
these tools to customize almost every component in tf.keras. Finally, we
looked at how TF Functions can boost performance, how graphs are
generated using AutoGraph and tracing, and what rules to follow when you
```
write TF Functions (if you would like to open the black box a bit further
```
and explore the generated graphs, you will find technical details in
```
Appendix D).
```
In the next chapter, we will look at how to efficiently load and preprocess
data with TensorFlow.
Exercises
1. How would you describe TensorFlow in a short sentence? What are
its main features? Can you name other popular Deep Learning
libraries?
2. Is TensorFlow a drop-in replacement for NumPy? What are the
main differences between the two?
3. Do you get the same result with tf.range(10) and
```
tf.constant(np.arange(10))?
```
4. Can you name six other data structures available in TensorFlow,
beyond regular tensors?
5. A custom loss function can be defined by writing a function or by
subclassing the tf.keras.losses.Loss class. When would
you use each option?
6. Similarly, a custom metric can be defined in a function or a
subclass of tf.keras.metrics.Metric. When would you
use each option?
7. When should you create a custom layer versus a custom model?
8. What are some use cases that require writing your own custom
training loop?
9. Can custom Keras components contain arbitrary Python code, or
must they be convertible to TF Functions?
10. What are the main rules to respect if you want a function to be
convertible to a TF Function?
11. When would you need to create a dynamic Keras model? How do
you do that? Why not make all your models dynamic?
12. Implement a custom layer that performs Layer Normalization (we
```
will use this type of layer in Chapter 16):
```
a. The build() method should define two trainable
weights α and β, both of shape input_shape[-1:]
and data type tf.float32. α should be initialized with
1s, and β with 0s.
b. The call() method should compute the mean μ and
standard deviation σ of each instance’s features. For this,
```
you can use tf.nn.moments(inputs, axes=-1,
```
```
keepdims=True), which returns the mean μ and the
```
```
variance σ of all instances (compute the square root of the
```
```
variance to get the standard deviation). Then the function
```
```
should compute and return α⊗(X - μ)/(σ + ε) + β, where
```
```
⊗ represents itemwise multiplication (*) and ε is a
```
```
smoothing term (small constant to avoid division by zero,
```
```
e.g., 0.001).
```
c. Ensure that your custom layer produces the same (or very
```
nearly the same) output as the
```
tf.keras.layers.LayerNormalization layer.
13. Train a model using a custom training loop to tackle the Fashion
```
MNIST dataset (see Chapter 10).
```
a. Display the epoch, iteration, mean training loss, and mean
```
accuracy over each epoch (updated at each iteration), as
```
well as the validation loss and accuracy at the end of each
epoch.
b. Try using a different optimizer with a different learning
rate for the upper layers and the lower layers.
Solutions to these exercises are available at the end of this chapter’s
notebook, at https://homl.info/colab3.
1 However, PyTorch is currently more popular in Academia: more papers cite PyTorch than
TensorFlow or Keras.
2
2 TensorFlow includes another Deep Learning API called the Estimators API, but the
TensorFlow team recommends using Keras instead.
```
3 If you ever need to (but you probably won’t), you can write your own operations using the
```
C++ API.
4 To learn more about TPUs and how they work, check out https://homl.info/tpus.
```
5 A notable exception is tf.math.log(), which is commonly used but doesn’t have a
```
```
tf.log() alias, as it might be confused with logging.
```
6 It would not be a good idea to use a weighted mean: if you did, then two instances with the
same weight but in different batches would have a different impact on training, depending on
the total weight of each batch.
```
7 The {**x, [...]} syntax was added in Python 3.5, to merge all the key/value pairs from
```
dictionary x into another dictionary. Since Python 3.9, you can use the nicer x | y syntax
```
instead (where x and y are two dictionaries).
```
```
8 However, the Huber loss is seldom used as a metric (the MAE or MSE is preferred).
```
9 This class is for illustration purposes only. A simpler and better implementation would just
```
subclass the tf.keras.metrics.Mean class; see the “Streaming metrics” section of the
```
notebook for an example.
10 The Keras API calls this argument input_shape, but since it also includes the batch
dimension, I prefer to call it batch_input_shape. Same for
```
compute_output_shape().
```
11 The name “Subclassing API” in Keras usually refers only to the creation of custom models by
subclassing, although many other things can be created by subclassing, as we saw in this
chapter.
```
12 Due to TensorFlow issue #46858, the call to super().build() may fail in this case,
```
unless the issue was fixed by the time you read this. If not, you need to replace this line with
self.built = True.
```
13 You can also call add_loss() on any layer inside the model, as the model recursively
```
gathers losses from all of its layers.
14 If the tape goes out of scope, for example when the function that used it returns, Python’s
garbage collector will delete it for you.
```
15 With the exception of optimizers, as very few people ever customize these; see the “Custom
```
Optimizers” section in the notebook for an example.
16 However, in this trivial example, the computation graph is so small that there is nothing at all
```
to optimize, so tf_cube() actually runs much slower than cube().
```