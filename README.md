git init
git remote add origin https://github.com/mrityunjay33/react-learning.git
git branch -M main
git push -u origin main
git add .
git commit -m "first commit"
git push origin main
--------------------------------------------------------------------------
Q. What is difference between ~(tilde) and ^(carate) sign in package.json ?
Ans - > Carate automatically upgrades to only minor latest version while tilde updates major version too automatically
--------------------------------------------------------------------------------
Q. Difference between package.json and package-lock.json ?
-> Package-lock.json tracks the record of exact version of dependency while package.json has approx version with tilde or carat sign.
    Package-lock.json has the "integrity": some hash value sha512 to track the exact version of dependency
---------------------------------------------------------------------------------------------
Q. Transitive Dependencies --> Package requiring help of other packages, so they installs other packages also as dependencies,  it is present in package-lock.json
Every package has its own package.json mentioning required dependency which we can see in Node_Modules 
---------------------------------------------------------------------------------------------------
Component Composition - component inside component
{JS expression inside html}
-----------------------------------------------------------------------------------------------------------
JSX sanitises data and saves us from cross site scripting malicious attacks  => JSX will encode any special characters to prevent them from being interpreted as HTML or JavaScript code.

For example, if a user enters the text <script>alert('hello');</script> into a form, JSX will convert it to "<script>alert('hello');</script>", which is just plain text and will not be interpreted as code.

This process is known as "escaping" or "encoding" and helps to prevent malicious code injection and other types of attacks. By default, React will encode all user-generated content, but developers can also use other techniques, such as Content Security Policy (CSP), to further secure their applications against XSS attacks.

To implement CSP in a React application, you can add the Content-Security-Policy HTTP response header to the server that serves the application.

Content-Security-Policy: default-src 'self'; script-src 'self' cdnjs.cloudflare.com; style-src 'self';

This policy allows scripts only from the same domain as the application and from the cdnjs.cloudflare.com CDN, and styles only from the same domain as the application.
---------------------------------------------------------------------------------------------------------
use of writing compoent like this ????   - <Title><Title/>
"In practical terms, this means that when you use the <Title /> syntax, you are creating an instance of a component that does not have any children. It's commonly used when you just need to render a component without any additional content.
On the other hand, when you use the <Title></Title> syntax, you are creating a component that can have children. This means that any content that you put between the opening and closing tags will be passed to the component as its children prop. This syntax is commonly used when you need to pass content to a component."

can we pass class into react fragement ????  => NOOO
can we have multiple root.render,   => NOOO
 nested react fragments ??? =>  YESSS
config driven ui _> ui driven by configuration, mostly by backend data
Array join methods javaScript  => join(separator)
why should not use index as key  => use a library like uuid to generate a unique identifier for each element
–----------------------------------------------------------------
significance of different naming conventions of react file (js, jsx, ts, tsx)

different import like header and header.js  => some tools or libraries may require you to include the file extension in the import statement (e.g.  .tsx)

can we use deafult export and named export for same component ????   => YESSS but codes becomes less readable
can we use xyz instead of setData in useState hook ???  => Yesss
--------------------------------------------------------------------------------------------------
React Fibre reconciliation - React Fibre

The key feature of React Fiber is that it breaks the reconciliation process into smaller, incremental steps or units of work, called fibers. This allows React to prioritize and schedule the work that needs to be done, and also allows it to pause and resume work if necessary. This makes React more responsive and improves the overall performance of the application.

The reconciliation process in React Fiber is performed in two phases. In the first phase, called the render phase, React builds a new virtual DOM tree by calling the render method of the components in the application. In the second phase, called the commit phase, React updates the actual DOM by comparing the new virtual DOM tree with the old one, and making the necessary changes.

React Fiber also introduces a concept called "stack reconciliation". In the previous algorithm, when a component was updated, React would traverse the entire sub-tree of components underneath it, even if they were not affected by the update. With stack reconciliation, React only updates the components that have actually changed, which makes the reconciliation process much faster.
-----------------------------------------------------------------------------------------------------




