function e(e,t){localStorage.setItem(e,JSON.stringify(t))}function t(e){const t=localStorage.getItem(e);try{return JSON.parse(t)}catch{return t}}const a=document.querySelector(".feedback-form");a.addEventListener("input",(function(t){const a=t.target.name,n=t.target.value;e(a,n)})),a.addEventListener("submit",(function(e){e.preventDefault();const t=a.elements.email.value,n=a.elements.message.value,s={email:t,message:n};console.log(s),e.target.reset(),localStorage.removeItem("email"),localStorage.removeItem("message")})),function(){const e=t("email"),n=t("message");a.elements.email.value=e,a.elements.message.value=n}();
//# sourceMappingURL=03-feedback.ab1909b8.js.map
