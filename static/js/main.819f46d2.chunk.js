(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(2),c=n.n(s),r=n(7),i=n.n(r),l=(n(13),n(3));function o(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(s.useEffect)((function(){var t=window.matchMedia(e);t.matches!==c&&r(t.matches);var n=function(){r(t.matches)};return t.addListener(n),function(){return t.removeListener(n)}}),[c,e]),c}n(14);var a=n(1),d=function(e){var t=o("(min-width: 800px)"),n=function(){document.getElementById("mobile-nav").classList.contains("h-screen")?document.getElementById("mobile-nav").classList.replace("h-screen","h-12"):document.getElementById("mobile-nav").classList.replace("h-12","h-screen")},s=function(){window.scrollTo({top:0,behavior:"smooth"}),n()};return t?Object(a.jsxs)("div",{id:"hide-nav",class:"\r overflow-hidden\r fixed\r w-full\r text-white\r flex flex-row\r transition-all\r top-0\r z-20\r ",children:[Object(a.jsx)("div",{class:"\r flex flex-nowrap\r w-full\r bg-blur bg-gray-900 bg-opacity-70\r px-6\r py-3\r ",children:Object(a.jsx)("div",{class:"cursor-pointer",onClick:function(){return s()},children:"Sebastian Strand"})}),Object(a.jsxs)("div",{id:"nav-menu",class:"flex flex-row md:visible flex-nowrap",children:[Object(a.jsxs)("div",{onClick:function(){return e.toLink("about")},class:"\r bg-blur bg-gray-900 bg-opacity-70\r px-6\r py-3\r cursor-pointer\r hover:bg-opacity-40\r flex flex-row flex-nowrap\r items-end\r ",children:[Object(a.jsx)("span",{class:"py-0.5 pr-2 text-yellow-400 text-sm",children:"1. "}),"ABOUT"]}),Object(a.jsxs)("div",{onClick:function(){return e.toLink("projects")},class:"\r bg-blur bg-gray-900 bg-opacity-70\r px-6\r py-3\r cursor-pointer\r hover:bg-opacity-40\r flex flex-row flex-nowrap\r items-end\r ",children:[Object(a.jsx)("span",{class:"py-0.5 pr-2 text-yellow-400 text-sm",children:"2. "}),"PROJECTS"]}),Object(a.jsxs)("div",{onClick:function(){return e.toLink("contact")},class:"\r bg-blur bg-gray-900 bg-opacity-70\r px-6\r py-3\r cursor-pointer\r hover:bg-opacity-40\r flex flex-row flex-nowrap\r items-end\r ",children:[Object(a.jsx)("span",{class:"py-0.5 pr-2 text-yellow-400 text-sm",children:"3. "}),"CONTACT"]})]})]}):Object(a.jsxs)("div",{id:"mobile-nav",class:"\r overflow-hidden\r fixed\r w-full\r text-white\r flex flex-col\r transition-all\r top-0\r z-20\r h-12\r bg-blur bg-gray-900 bg-opacity-70\r ",children:[Object(a.jsx)("div",{class:"\r flex flex-nowrap\r w-full\r px-6\r py-3\r ",children:Object(a.jsx)("div",{class:"cursor-pointer",onClick:function(){return s()},children:"Sebastian Strand"})}),Object(a.jsx)("div",{onClick:function(){return n()},class:"absolute right-2 z-20",children:Object(a.jsxs)("div",{class:"\r flex flex-col flex-nowrap\r p-4\r items-end\r cursor-pointer\r ",children:[Object(a.jsx)("div",{class:"bg-white w-8 h-0.5 my-0.5"}),Object(a.jsx)("div",{class:"bg-white w-4 h-0.5 my-0.5"}),Object(a.jsx)("div",{class:"bg-white w-6 h-0.5 my-0.5"})]})}),Object(a.jsxs)("div",{class:"min-h-50vh my-auto flex flex-col flex-nowrap text-2xl",children:[Object(a.jsxs)("div",{onClick:function(){return e.toLinkMobile("about")},class:"\r px-6\r py-3\r cursor-pointer\r flex flex-row flex-nowrap\r justify-end\r items-end\r ",children:[Object(a.jsx)("span",{class:"py-0.5 px-2 text-yellow-400 text-sm",children:"1. "}),"ABOUT"]}),Object(a.jsxs)("div",{onClick:function(){return e.toLinkMobile("projects")},class:"\r px-6\r py-3\r cursor-pointer\r flex flex-row flex-nowrap\r justify-end\r items-end\r ",children:[Object(a.jsx)("span",{class:"py-0.5 px-2 text-yellow-400 text-sm",children:"2. "}),"PROJECTS"]}),Object(a.jsxs)("div",{onClick:function(){return e.toLinkMobile("contact")},class:"\r px-6\r py-3\r cursor-pointer\r flex flex-row flex-nowrap\r justify-end\r items-end\r ",children:[Object(a.jsx)("span",{class:"py-0.5 px-2 text-yellow-400 text-sm",children:"3. "}),"CONTACT"]})]})]})},x=function(e){return Object(a.jsx)("div",{class:"\r bg-gradient-to-br\r from-gray-900\r to-gray-800\r flex flex-col\r items-center\r p-8\r ",children:Object(a.jsxs)("div",{class:"flex flex-col max-w-3xl",children:[Object(a.jsx)("div",{class:"flex w-fit text-yellow-500 text-xl m-2",id:"greeting",children:"Hi, my name is"}),Object(a.jsx)("h1",{class:"flex w-fit text-white text-4xl m-2",children:"Sebastian Strand."}),Object(a.jsx)("div",{class:"text-gray-300 text-lg sm:text-3xl m-2",id:"greeting",children:"I'm an Industrial Engineer who taught himself Web Development."}),Object(a.jsx)("p",{class:"text-white mx-2 my-6 max-w-2xl",children:"Why? Eventually, I want to create my own company and build projects that will improve the quality of life for others. Before I get there, I want to learn as much as I can from those I work with, and give back as much as possible while doing so."}),Object(a.jsxs)("div",{class:"flex flex-row flex-wrap m-2",children:[Object(a.jsx)("button",{onClick:function(){window.open("http://localhost:3000/src/cv-english.pdf","_blank")},class:"\r m-2\r transition-colors\r duration-300\r ease-in-out\r text-white\r bg-yellow-600\r py-2\r px-10\r ring-2 ring-yellow-600\r hover:ring-2 hover:ring-white hover:bg-opacity-20\r rounded\r ",children:"Download CV"}),Object(a.jsx)("button",{onClick:function(){return e.toLink("contact")},class:"\r m-2\r transition-colors\r duration-300\r ease-in-out\r text-white\r bg-yellow-600\r ring-2 ring-yellow-600\r py-2\r px-10\r hover:ring-2 hover:ring-white hover:bg-opacity-20\r rounded\r ",children:"Get in touch"})]})]})})},j=n.p+"static/media/profile.b668093d.jpg",b=function(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},class:"bg-white text-gray-900 px-3 m-1 rounded-full hover:opacity-80",children:e.item.tag}),c&&Object(a.jsx)("div",{class:"transition-all absolute mt-20 text-xs ml-1",children:e.item.caption})]})},u=function(){return Object(a.jsxs)("div",{id:"about-content",class:"mx-8 flex flex-row flex-wrap justify-center relative section-transition section-hidden\r overflow-hidden",children:[Object(a.jsxs)("div",{class:"flex flex-col max-w-md",children:[Object(a.jsx)("p",{class:"text-white mb-4",children:"So, originally I'm from the UK and when I was 14 years old I moved to Chile, where I graduated from Industrial Engineering at Universidad Adolfo Ibanez in Santiago."}),Object(a.jsx)("p",{class:"text-yellow-500 mx-2 my-4 text-3xl",children:"What's my stack?"}),Object(a.jsx)("p",{class:"text-white mx-2 mt-4 mb-6 text-sm",children:"Here are some of the technologies I've been using recently:"}),Object(a.jsx)("div",{class:"cursor-default flex flex-row flex-wrap text-white max-w-xs mt-2 mx-0 justify-start",children:[{tag:"Javascript",caption:"Fetch API, DOM manipulation, OOP"},{tag:"MongoDB",caption:"NoSQL, MongoAtlas"},{tag:"Strapi",caption:"Headless-CMS powered by Node.js"},{tag:"React.js",caption:"React Hooks, Styled-components, Axios"},{tag:"TailwindCSS",caption:"Utility first CSS framework/library"},{tag:"PostgreSQL",caption:"SQL"}].map((function(e){return Object(a.jsx)(b,{item:e})}))})]}),Object(a.jsxs)("div",{class:"relative lg:my-0 my-20",children:[Object(a.jsx)("img",{class:"\r relative\r mx-12\r h-56\r z-10\r transform\r opacity-80\r hover:opacity-100\r transition-all\r ",src:j}),Object(a.jsx)("div",{class:"\r h-56\r w-56\r border-2 border-white\r absolute\r z-0\r right-0\r transform\r -translate-y-52 -translate-x-8\r "}),Object(a.jsx)("div",{class:"\r h-56\r w-56\r bg-gray-900\r absolute\r z-0\r right-0\r transform\r -translate-y-56 -translate-x-12\r "})]}),Object(a.jsx)("div",{class:"w-full h-32"})]})},m=function(e){return Object(a.jsxs)("div",{onClick:function(){return e.isOpen?document.getElementById(e.elementId).classList.replace("section-visible","section-hidden"):document.getElementById(e.elementId).classList.replace("section-hidden","section-visible"),void e.setIsOpen(!e.isOpen)},class:"md:max-w-4xl pl-14 md:pl-20 pr-12 flex flex-row flex-nowrap w-full items-center justify-end my-24 cursor-pointer",children:[Object(a.jsxs)("div",{class:"flex flex-row items-center text-white text-md lg:text-2xl",children:[Object(a.jsx)("span",{class:"text-yellow-500 text-xs lg:text-xl mr-2",children:e.prefix}),Object(a.jsx)("span",{class:"w-max",children:e.title})]}),Object(a.jsx)("hr",{class:"ml-2 w-full"}),Object(a.jsxs)("div",{class:"w-36 text-white text-sm",children:[Object(a.jsx)("span",{class:"mx-2",children:e.isOpen?"hide":"show"}),Object(a.jsx)("span",{children:"\u21c1"})]})]})},p=function(e){var t=Object(s.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(a.jsxs)("div",{onMouseEnter:function(){!e.section.isOpen&&c&&(r(!1),e.toggleSection(e.section))},onClick:function(){return e.section.isOpen?null:e.toggleSection(e.section)},id:"about",class:"\r bg-gradient-to-br\r from-gray-800\r to-gray-900\r flex flex-col\r items-center\r ",children:[Object(a.jsx)(m,{prefix:"1.",title:"About me",elementId:"about-content",setIsOpen:e.section.setIsOpen,isOpen:e.section.isOpen}),Object(a.jsx)(u,{})]})},h=n.p+"static/media/porsche.ef2b6a6d.jpg",f=n(4),g=function(e){var t=Object(s.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},class:"bg-white text-gray-900 px-3 mx-1 rounded-full hover:opacity-80",children:e.item.tag}),c&&Object(a.jsx)("div",{class:"transition-all absolute mt-8 text-xs",children:e.item.caption})]})},O=n(5),w=function(e){return Object(a.jsxs)("div",{class:"self-end items-end my-24 relative flex flex-col cursor-default mt-36 lg:mt-0",children:[Object(a.jsxs)("div",{class:"flex flex-col items-end z-10",children:[Object(a.jsx)("div",{class:"text-yellow-600",children:"featured project"}),Object(a.jsx)("div",{class:"text-3xl mb-3",children:e.project.title}),Object(a.jsx)("div",{class:"p-4 bg-gray-700 rounded-xl text-sm max-w-sm",children:e.project.content}),Object(a.jsx)("div",{class:"flex flex-row my-4 justify-end",children:e.project.tech.map((function(e){return Object(a.jsx)(g,{item:e})}))}),Object(a.jsxs)("div",{class:"flex flex-row",children:[Object(a.jsx)("button",{onClick:function(){return window.open(e.project.liveLink)},children:Object(a.jsx)(O.b,{class:"text-2xl mt-8 mx-2 hover:opacity-80"})}),Object(a.jsx)("button",{onClick:function(){return window.open(e.project.gitGubLink)},children:Object(a.jsx)(f.a,{class:"text-2xl mt-8 mx-2 hover:opacity-80"})})]})]}),Object(a.jsx)("img",{src:h,class:"absolute z-0 h-64 rounded-lg transform -translate-y-32 lg:-translate-x-80 lg:translate-y-0"})]})},v=function(e){return Object(a.jsxs)("div",{class:"self-start my-24 relative flex flex-col cursor-default mt-36 lg:mt-0",children:[Object(a.jsxs)("div",{class:"flex flex-col z-10 items-start",children:[Object(a.jsx)("div",{class:"text-yellow-600",children:"featured project"}),Object(a.jsx)("div",{class:"text-3xl mb-3",children:e.project.title}),Object(a.jsx)("div",{class:"p-4 bg-gray-700 rounded-xl text-sm max-w-sm",children:e.project.content}),Object(a.jsx)("div",{class:"flex flex-row my-4",children:e.project.tech.map((function(e){return Object(a.jsx)(g,{item:e})}))}),Object(a.jsxs)("div",{class:"flex flex-row",children:[Object(a.jsx)("button",{onClick:function(){return window.open(e.project.gitGubLink)},children:Object(a.jsx)(f.a,{class:"text-2xl mt-8 mx-2 hover:opacity-80"})}),Object(a.jsx)("button",{onClick:function(){return window.open(e.project.liveLink)},children:Object(a.jsx)(O.b,{class:"text-2xl mt-8 mx-2 hover:opacity-80"})})]})]}),Object(a.jsx)("img",{src:h,class:"absolute z-0 h-64 rounded-lg transform -translate-y-32 lg:translate-x-80 lg:translate-y-0"})]})},y=function(){var e=[{title:"Yachtdrop",content:"and no space is created for the element in the page block established by the viewport, except when one of its ancestors has a transform, perspective, ",tech:[{tag:"React.js",caption:"React Hooks, Styled-components, Axios"},{tag:"Strapi",caption:"Headless-CMS powered by Node.js"},{tag:"MongoDB",caption:"NoSQL, MongoAtlas"}],gitHubLink:"http://www.github.com/sejostrand/yachtdrop",livelLink:"http:/www.yachtdrop.com/",coverImg:h},{title:"La Compa\xf1\xeda",content:"and no space is created for the element in the page block established by the viewport, except when one of its ancestors has a transform, perspective, ",tech:[{tag:"React.js",caption:"React Hooks, Styled-components, Axios"},{tag:"Strapi",caption:"Headless-CMS powered by Node.js"}],gitHubLink:"http://www.github.com/sejostrand/la-compania",liveLink:"http:/www.lacompania.cl/",coverImg:h}];return Object(a.jsxs)("div",{id:"projects-content",class:"flex flex-col w-full items-center overflow-hidden section-transition section-hidden text-white",children:[Object(a.jsxs)("div",{class:"mx-auto w-10/12 md:w-7/12 lg:w-8/12 xl:w-5/12",children:[Object(a.jsx)(w,{project:e[0]}),Object(a.jsx)("div",{class:"w-full h-1"}),Object(a.jsx)(v,{project:e[1]})]}),Object(a.jsx)("div",{class:"w-full h-20"})]})},k=function(e){var t=Object(s.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(a.jsxs)("div",{onMouseEnter:function(){!e.section.isOpen&&c&&(r(!1),e.toggleSection(e.section))},onClick:function(){return e.section.isOpen?null:e.toggleSection(e.section)},id:"projects",class:"\r bg-gradient-to-br\r from-gray-800\r to-gray-900\r flex flex-col flex-nowrap\r items-center\r ",children:[Object(a.jsx)(m,{prefix:"2.",title:"Some of my projects",elementId:"projects-content",setIsOpen:e.section.setIsOpen,isOpen:e.section.isOpen}),Object(a.jsx)(y,{})]})},I=n(8),S=n.n(I),L=function(){return Object(a.jsxs)("div",{id:"contact-content",class:"mx-8 text-white flex flex-col items-center relative section-transition section-hidden\r overflow-hidden",children:[Object(a.jsx)("div",{class:"text-yellow-500 text-2xl mb-14",children:"Send me a message!"}),Object(a.jsxs)("form",{class:"px-2 py-3 flex flex-col items-end border-2 border-yellow-600 rounded-2xl",children:[Object(a.jsxs)("div",{class:"flex flex-col bg-transparent rounded w-full text-yellow-500 text-md",children:[Object(a.jsxs)("div",{class:"flex flex-row flex-wrap",children:[Object(a.jsxs)("div",{class:"flex flex-col",children:[Object(a.jsx)("div",{class:"mt-2 ml-2",children:"Email:"}),Object(a.jsx)("input",{type:"email",placeholder:"Your Email",class:"bg-gray-200 text-gray-900 rounded mx-2 p-2 text-lg"})]}),Object(a.jsxs)("div",{class:"flex flex-col",children:[Object(a.jsx)("div",{class:"mt-2 ml-2",children:"Subject:"}),Object(a.jsx)("input",{type:"text",placeholder:"Subject",class:"bg-gray-200 text-gray-900 rounded mx-2 p-2 text-lg"})]})]}),Object(a.jsx)("div",{class:"mt-2 ml-2",children:"Message:"}),Object(a.jsx)("textarea",{placeholder:"Say hello..",type:"text",class:"bg-gray-200 text-gray-900 content-start rounded text-lg h-24 mx-2 mb-2 p-2"})]}),Object(a.jsx)("button",{class:"\r mt-6\r mx-1\r transition-colors\r duration-300\r ease-in-out\r text-white\r bg-yellow-600\r ring-2 ring-yellow-600\r py-2\r px-10\r hover:ring-2 hover:ring-white hover:bg-opacity-20\r rounded",children:"Send"})]}),Object(a.jsxs)("div",{class:"mt-14 flex md:flex-row flex-col items-center",children:[Object(a.jsxs)("div",{class:"flex m-6 justify-center text-lg",children:["sejostrand@gmail.com"," ",Object(a.jsx)(O.a,{onClick:function(){return S()("sejostrand@gmail.com")},class:"ml-3 my-2 text-sm text-yellow-500 cursor-pointer hover:opacity-70"})]}),Object(a.jsxs)("div",{class:"m-4 justify-center flex flex-row flex-nowrap text-white text-3xl",children:[Object(a.jsx)(f.a,{onClick:function(){return window.open("https://github.com/sejostrand")},class:"m-2 cursor-pointer hover:opacity-80"}),Object(a.jsx)(f.b,{onClick:function(){return window.open("https://www.linkedin.com/in/sebastianstrand/")},class:"m-2 cursor-pointer hover:opacity-80"})]}),Object(a.jsxs)("div",{class:"m-6 text-bold text-sm justify-center items-center",children:[Object(a.jsx)("span",{class:"mr-2 text-xs text-yellow-500",children:"mobile"}),"(+44) 7434 902711"]})]}),Object(a.jsx)("div",{class:"w-full h-14"})]})},C=function(e){var t=Object(s.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(a.jsxs)("div",{onMouseEnter:function(){!e.section.isOpen&&c&&(r(!1),e.toggleSection(e.section))},onClick:function(){return e.section.isOpen?null:e.toggleSection(e.section)},id:"contact",class:"\r bg-gradient-to-br\r from-gray-800\r to-gray-900\r flex flex-col\r items-center\r ",children:[Object(a.jsx)(m,{prefix:"3.",n:!0,title:"Get in touch",elementId:"contact-content",setIsOpen:e.section.setIsOpen,isOpen:e.section.isOpen}),Object(a.jsx)(L,{})]})},E=function(e){return Object(a.jsxs)("div",{class:"flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black w-full h-48",children:[Object(a.jsxs)("div",{class:"flex-row flex-wrap justify-center text-lg flex m-4 text-white",children:[Object(a.jsx)("a",{onClick:function(){return e.toTop()},class:"hover:bg-opacity-10 mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer",children:"toTop"}),Object(a.jsx)("a",{onClick:function(){return e.toLink("about")},class:"hover:bg-opacity-10  mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer",children:"About"}),Object(a.jsx)("a",{onClick:function(){return e.toLink("projects")},class:"hover:bg-opacity-10 mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer",children:"Projects"}),Object(a.jsx)("a",{onClick:function(){return e.toLink("contact")},class:"hover:bg-opacity-10 mb-1 mx-2 py-1 px-6 rounded-full bg-blur bg-black bg-opacity-50 cursor-pointer",children:"Contact"})]}),Object(a.jsxs)("div",{class:"text-white mb-10 text-xs md:text-lg",children:["Website Created with"," ",Object(a.jsx)("span",{class:"bg-white text-gray-900 px-3 mx-1 rounded-full",children:"React.js"})," ","and"," ",Object(a.jsx)("span",{class:"bg-white text-gray-900 px-3 mx-1 rounded-full",children:"TailwindCSS"}),"."]})]})},B=function(e){return Object(s.useEffect)((function(){e.isDark?(document.getElementById("theme-toggle").classList.remove("bg-gray-900"),document.getElementById("theme-toggle").classList.add("bg-yellow-500"),document.getElementById("bg-cover").classList.remove("dark-cover"),document.getElementById("bg-cover").classList.add("light-cover")):(document.getElementById("theme-toggle").classList.remove("bg-yellow-500"),document.getElementById("theme-toggle").classList.add("bg-gray-900"),document.getElementById("bg-cover").classList.remove("light-cover"),document.getElementById("bg-cover").classList.add("dark-cover"))}),[e.isDark]),Object(a.jsx)("button",{id:"theme-toggle",onClick:function(){return e.setIsDark(!e.isDark)},class:" transition-all z-10 w-28 font-mono flex flex-row justify-center text-white bg-blur bg-opacity-50 rounded-3xl",children:Object(a.jsx)("div",{class:"mb-0.5 text-sm",children:e.isDark?"light mode":"dark mode"})})},M=function(){var e=Object(s.useState)(new Date),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){setInterval((function(){return c(new Date)}),1e3),clearInterval()}),[]),Object(a.jsxs)("div",{class:"font-mono h-min flex flex-row items-end text-white px-4 py-1 bg-blur bg-gray-900 bg-opacity-60 rounded-3xl",children:[Object(a.jsx)("div",{class:"mb-0.5 text-xs md:text-sm",children:n.toDateString()}),Object(a.jsx)("div",{class:"ml-2 text-lg md:text-2xl",children:n.toLocaleTimeString()})]})};var T=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),i=Object(l.a)(r,2),j=i[0],b=i[1],u=Object(s.useState)(!1),m=Object(l.a)(u,2),h=m[0],f=m[1],g=Object(s.useState)(!1),O=Object(l.a)(g,2),w=O[0],v=O[1],y=o("(min-width: 800px)"),I={about:{id:"about-content",isOpen:j,setIsOpen:b},projects:{id:"projects-content",isOpen:h,setIsOpen:f},contact:{id:"contact-content",isOpen:w,setIsOpen:v}},S=function(e){e.isOpen?document.getElementById(e.id).classList.replace("section-visible","section-hidden"):document.getElementById(e.id).classList.replace("section-hidden","section-visible"),e.setIsOpen(!e.isOpen)},L=window.pageYOffset;window.onscroll=function(){var e=window.pageYOffset;L>e?y&&(document.getElementById("hide-nav").style.top="0"):y&&(document.getElementById("hide-nav").style.top="-48px"),L=e};var T=function(){window.scrollTo({top:0,behavior:"smooth"})},D=function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"}),document.getElementById("".concat(e,"-content")).classList.replace("section-hidden","section-visible")};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,{toTop:T,toLink:D,toLinkMobile:function(e){document.getElementById("mobile-nav").classList.contains("h-screen")?document.getElementById("mobile-nav").classList.replace("h-screen","h-12"):document.getElementById("mobile-nav").classList.replace("h-12","h-screen"),document.getElementById(e).scrollIntoView({behavior:"smooth"}),document.getElementById("".concat(e,"-content")).classList.replace("section-hidden","section-visible")}}),Object(a.jsxs)("div",{id:"bg-cover",class:"dark-cover flex flex-col w-full",children:[Object(a.jsxs)("div",{class:"w-full h-72 flex flex-row justify-between items-end p-2",children:[Object(a.jsx)(B,{isDark:n,setIsDark:c}),Object(a.jsx)(M,{})]}),Object(a.jsx)(x,{toLink:D}),Object(a.jsx)("div",{class:"w-full my-36"}),Object(a.jsx)(p,{toggleSection:S,section:I.about}),Object(a.jsx)("div",{class:"w-full my-36"}),Object(a.jsx)(k,{toggleSection:S,section:I.projects}),Object(a.jsx)("div",{class:"w-full my-36"}),Object(a.jsx)(C,{toggleSection:S,section:I.contact}),Object(a.jsx)("div",{class:"w-full my-12"}),Object(a.jsx)(E,{toTop:T,toLink:D})]})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),r(e),i(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),D()}},[[17,1,2]]]);
//# sourceMappingURL=main.819f46d2.chunk.js.map