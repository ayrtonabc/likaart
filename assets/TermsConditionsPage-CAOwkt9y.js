import{b as x,r as i,j as e,L as g}from"./index-BD5u5Cxo.js";import{f as u,p}from"./pl-Ba8KbGqH.js";const y=()=>{var o;const{settings:t}=x(),[r,c]=i.useState(""),[l,m]=i.useState(!0);if(i.useEffect(()=>{var a,n;if((n=(a=t==null?void 0:t.legal)==null?void 0:a.terms_conditions)!=null&&n.last_updated){const h=new Date(t.legal.terms_conditions.last_updated);c(u(h,"d MMMM yyyy",{locale:p}))}m(!1)},[t]),l)return e.jsx("div",{className:"pt-32 pb-20 bg-beige-50 min-h-screen",children:e.jsx("div",{className:"container-custom max-w-4xl",children:e.jsxs("div",{className:"animate-pulse space-y-6",children:[e.jsx("div",{className:"h-12 bg-gray-200 rounded w-1/2"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3 mb-8"}),e.jsx("div",{className:"space-y-4",children:[...Array(10)].map((a,n)=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-gray-200 rounded w-full"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-5/6"}),e.jsx("div",{className:"h-4 bg-gray-200 rounded w-2/3"})]},n))})]})})});const{title:d,content:s}=((o=t==null?void 0:t.legal)==null?void 0:o.terms_conditions)||{};return s&&s.trim().length>0?e.jsx("div",{className:"pt-32 pb-20 bg-beige-50 min-h-screen",children:e.jsxs("div",{className:"container-custom max-w-4xl",children:[e.jsx("h1",{className:"text-4xl font-serif mb-4",children:d||"Regulamin"}),r&&e.jsxs("p",{className:"text-sm text-gray-500 mb-8",children:["Ostatnia aktualizacja: ",r]}),e.jsxs("div",{className:"prose prose-lg prose-brown max-w-none",children:[e.jsx("div",{className:"rich-text-content",dangerouslySetInnerHTML:{__html:s}}),e.jsx("style",{children:`
              .rich-text-content h1,
              .rich-text-content h2,
              .rich-text-content h3,
              .rich-text-content h4,
              .rich-text-content h5,
              .rich-text-content h6 {
                margin-top: 1.5em;
                margin-bottom: 0.5em;
                font-weight: 600;
                line-height: 1.3;
              }
              .rich-text-content h1 { font-size: 2em; }
              .rich-text-content h2 { font-size: 1.5em; }
              .rich-text-content h3 { font-size: 1.25em; }
              .rich-text-content p {
                margin-bottom: 1em;
                line-height: 1.7;
              }
              .rich-text-content ul,
              .rich-text-content ol {
                margin-bottom: 1em;
                padding-left: 1.5em;
              }
              .rich-text-content li {
                margin-bottom: 0.5em;
              }
              .rich-text-content a {
                color: #3b82f6;
                text-decoration: underline;
              }
              .rich-text-content a:hover {
                color: #2563eb;
              }
              .rich-text-content strong {
                font-weight: 600;
              }
              .rich-text-content em {
                font-style: italic;
              }
              .rich-text-content u {
                text-decoration: underline;
              }
            `})]}),e.jsx("div",{className:"mt-12 pt-6 border-t border-gray-200",children:e.jsxs("p",{className:"text-sm text-gray-500",children:["Jeśli masz jakiekolwiek pytania dotyczące niniejszego regulaminu, skontaktuj się z nami przez naszą"," ",e.jsx(g,{to:"/kontakt",className:"text-blue-600 hover:underline",children:"stronę kontaktową"}),"."]})})]})}):e.jsx("div",{className:"pt-32 pb-20 bg-beige-50 min-h-screen",children:e.jsxs("div",{className:"container-custom max-w-4xl",children:[e.jsx("h1",{className:"text-4xl font-serif mb-8",children:"Regulamin"}),e.jsx("div",{className:"prose prose-lg prose-brown max-w-none",children:e.jsx("p",{children:"Regulamin nie został jeszcze skonfigurowany. Skontaktuj się z administratorem witryny."})})]})})};export{y as default};
