# NODE.JS

L1-> 
Node js installation -> even version is stable and can be work in production
                     -> Odd version is unstable as it is Beta version some changes there
                     -> node --version
                     -> npm(node package manager) -v 

L2-> 
NPM package-> we can use npm init to create dependencies and then we can set scripts and package
           -> NodeJS is for running server side application, so all DOM manipulation and other 
              frontend related applications are not present here.

L3-> 
   blocking = Synchronus call
   Non Blocking = Asynchronus call
   The V8 engine (written in C++) is responsible for converting your JavaScript code into machine code and executing it.
   Jab tum async kaam karte ho — jaise file read, HTTP request, timer —
libuv background me unhe handle karta hai, bina main thread ko block kiye.
Iske andar thread pool hota hai jo heavy kaam background me karta hai.
