var e=Array.from(document.querySelectorAll("span.population")).map(function(e){return parseInt(e.innerText.split(",").join(""))}),n=e.reduce(function(e,n){return e+n},0);document.querySelector("span.total-population").innerText=n.toLocaleString("en-US"),document.querySelector("span.average-population").innerText=(n/e.length).toLocaleString("en-US");
//# sourceMappingURL=index.74b19d8e.js.map
