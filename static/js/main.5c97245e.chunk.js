(this["webpackJsonpbook-repo"]=this["webpackJsonpbook-repo"]||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n(1),s=n.n(o),i=n(3),a=n.n(i),r=(n(10),n(4)),l=(n(11),{cartIcon:{height:32,marginRight:20},nav:{height:70,background:"#4267b2",display:"flex",justifyContent:"flex-end",alignItems:"center"},cartIconContainer:{position:"relative"},cartCount:{background:"yellow",borderRadius:"50%",padding:"4px 8px",position:"absolute",right:0,top:-9}}),u=function(t){return Object(c.jsx)("div",{style:l.nav,children:Object(c.jsxs)("div",{style:l.cartIconContainer,children:[Object(c.jsx)("img",{style:l.cartIcon,src:"https://image.flaticon.com/icons/svg/1170/1170678.svg",alt:"cart-icon"}),Object(c.jsx)("span",{style:l.cartCount,children:t.count})]})})},d=function(t){var e=t.book,n=e.title,o=e.authors,s=e.average_rating,i=e.isbn,a=e.language_code,r=e.ratings_count,l=e.price,u=t.book,d=t.onIncreaseQuantity,j=t.onDecreaseQuantity,b=t.onDeleteProduct;return Object(c.jsxs)("div",{className:"cart-item",children:[Object(c.jsxs)("div",{className:"left-block",children:[Object(c.jsx)("div",{style:{fontSize:25},children:n}),Object(c.jsx)("div",{style:{fontSize:25},children:o})]}),Object(c.jsxs)("div",{className:"right-block",children:[Object(c.jsxs)("div",{style:{color:"#777"},children:["Rating: \ud83c\udf1f",s]}),Object(c.jsxs)("div",{style:{color:"#777"},children:["ISBN: ",i]}),Object(c.jsxs)("div",{style:{color:"#777"},children:["Language: ",a]}),Object(c.jsxs)("div",{style:{color:"#777"},children:["Rating Count: ",r]}),Object(c.jsxs)("div",{style:{color:"#777"},children:["\u20b9. ",l]}),Object(c.jsxs)("div",{className:"cart-item-actions",children:[Object(c.jsx)("img",{alt:"increase",className:"actions-icon",src:"https://image.flaticon.com/icons/svg/992/992651.svg",onClick:function(){return d(u)}}),Object(c.jsx)("img",{alt:"decrease",className:"actions-icon",src:"https://image.flaticon.com/icons/svg/1665/1665612.svg",onClick:function(){return j(u)}}),Object(c.jsx)("img",{alt:"delete",className:"actions-icon",src:"https://image.flaticon.com/icons/svg/1214/1214428.svg",onClick:function(){return b(u.bookID)}})]})]})]})},j=function(t){var e=t.books;return Object(c.jsx)("div",{className:"cart",children:e.map((function(e){return Object(c.jsx)(d,{book:e,onIncreaseQuantity:t.onIncreaseQuantity,onDecreaseQuantity:t.onDecreaseQuantity,onDeleteProduct:t.onDeleteProduct},e.bookID)}))})};var b=function(){var t=this,e=Object(o.useState)([]),n=Object(r.a)(e,2),s=n[0],i=n[1];return Object(o.useEffect)((function(){fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json").then((function(t){return t.json()})).then((function(t){return i(t)}))}),[]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(u,{count:function(){var t=0;return s.forEach((function(e){t+=e.qty})),t}}),Object(c.jsx)(j,{books:s,onIncreaseQuantity:function(t){console.log("Hey please inc the qty of ",t);var e=s.indexOf(t);s[e].qty+=1,i(s)},onDecreaseQuantity:function(t){console.log("Hey please decr the qty of ",t);var e=s.indexOf(t);0!==s[e].qty&&(s[e].qty-=1),i(s)},onDeleteProduct:function(e){var n=s.filter((function(t){return t.id!==e}));t.setState({books:n})}}),Object(c.jsxs)("div",{style:{padding:10,fontSize:20},children:["Total: ",function(){var t=0;return s.map((function(e){return t+=e.qty*e.price})),t}]})]})};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5c97245e.chunk.js.map