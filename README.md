# My Personal Website

This is my personal portfolio website, which contains my resume and some social media links, as well as some other personal projects as I build them.

It was created in Typescript React, using Nextjs for project scaffolding, and semantic-ui-react for the visual components and styling. 

If you would like to check out the UX features I implemented to make this site as usable as possible, 
please check out this website on mobile! Lots of time was spent working around semantic's lack of collapsable navbars, 
and I think I enjoy my solution quite a bit. Additionally, check out my resume, which I created in latex and converted to HTML,
and scroll down on desktop to see how the nicely the Navbar follows!

For a live deployment, go to http://jaimeherzog.com

Thanks for reading!

# Development instructions: 

To get started, clone the repo and run:
```
npm install
python generateResume.py
npm run dev
```
If you run into issues, delete your node_modules, run 
```npm install --save typescript @types/node@17.0.0 @types/react@17.0.0 @types/react-dom@17.0.0```
and try again.
If you're having issues generating the resume svg file, ensure texlive and inkscape are installed, with inkscape being added to the PATH.
Then go to http://localhost:3000. Happy hunting!

To deploy changes, see https://github.com/gitname/react-gh-pages.