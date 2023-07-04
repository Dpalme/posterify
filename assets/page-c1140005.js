import{c as f,j as e,r as x}from"./index-87627dfc.js";import{E as m,H as u,C as _,T as j}from"./handleAsync-152e3216.js";import{u as y}from"./useTMDB-be268a36.js";import{u as N,a as w,I as g}from"./imageCard-f87c5996.js";import"./App-ae085aae.js";import"./index-6d2467d1.js";async function k(r){return y("/3/movie/"+r+"?append_to_response=images")}const C=r=>{const{data:s,error:l,isLoading:o}=N(["movies",r],()=>k(r));return{movie:s,error:l,loading:o}};function D(){var d,c,h,p;const{movieId:r}=f();if(!r)return e.jsx(m,{message:"No movie found"});const{movie:s,loading:l,error:o}=C(r),{collection:i}=w(),n=(d=s==null?void 0:s.images)==null?void 0:d.logos.filter(t=>t.iso_639_1==navigator.language.slice(0,2));return e.jsx(u,{loading:l,error:o,children:e.jsxs(_,{backgroundImage:((c=s==null?void 0:s.images)==null?void 0:c.backdrops[0].file_path)||"",children:[e.jsx("div",{className:"h-[100vh - 3.5rem]",children:e.jsxs("div",{className:`flex-col fixed bottom-8
          items-start justify-end w-full drop-shadow-lg filter overscroll-auto`,children:[n!==void 0&&n.length>0?e.jsx(j,{type:"logo",path:n[0].file_path,alt:s==null?void 0:s.title,className:"drop-shadow-md filter max-h-24 w-auto"}):e.jsx("h1",{className:"text-4xl font-extrabold font-title",children:s==null?void 0:s.title}),e.jsxs("p",{className:"font-bold",children:[s==null?void 0:s.release_date.slice(0,4),(s==null?void 0:s.title)!=(s==null?void 0:s.original_title)&&e.jsxs(e.Fragment,{children:[" | ",e.jsx("span",{className:"italic font-thin",children:s==null?void 0:s.original_title})]})]}),e.jsxs("p",{className:"text-gray-700 dark:text-gray-400 mt-4",children:[s==null?void 0:s.vote_average.toFixed(1)," / 10"]})]})}),e.jsx("div",{className:"md:col-start-2 animate-slide-in-left",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-2",children:[(h=s==null?void 0:s.images)==null?void 0:h.backdrops.sort((t,a)=>a.height-t.height+(a.width-t.width)).map(t=>x.createElement(g,{type:"backdrop",movie_id:s.id,inCollection:!!(i!=null&&i.find(a=>a.file_path==t.file_path)),...t,key:t.file_path})),(p=s==null?void 0:s.images)==null?void 0:p.posters.sort((t,a)=>a.height-t.height+(a.width-t.width)).map(t=>e.jsx(g,{type:"poster",movie_id:s.id,inCollection:!!(i!=null&&i.find(a=>a.file_path==t.file_path)),...t},t.file_path))]})})]})})}export{D as default};
