import{t as e}from"./site.AeHubRBb.js";function t(e){let t=[`Hi Matt - free look request from your website.`,`Roof type: ${e.roofType}`,`Floors: ${e.stories}`,`Name: ${e.name}`,`Address: ${e.address}`,`Phone: ${e.phone}`];return e.estimate&&t.push(`Range the site showed: ${e.estimate}`),t.join(`
`)}function n(){return/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)}function r(t){return{sms:`sms:${e.phoneHref.replace(`tel:`,``)}?&body=${encodeURIComponent(t)}`,mail:`${e.emailHref}?subject=Free%20roof%20look%20request&body=${encodeURIComponent(t)}`}}function i(e){let i=t(e),a=r(i),o=n()?`text`:`email`;return window.location.href=o===`text`?a.sms:a.mail,{via:o,msg:i,hrefs:a}}function a(t,n){let r=t===`text`?`Messages`:`email`,i=t===`text`?n.mail:n.sms,a=t===`text`?`Email it to Matt instead`:`Text it to Matt instead`,o=t===`text`?n.sms:n.mail;return`
    <p class="sent-title">One more tap.</p>
    <p class="sent-copy">Your ${r} app should be opening a message to Matt with your details already filled in. Press <strong>Send</strong>, and Matt gets back to you to set a time for the free look.</p>
    <p class="sent-copy">Water coming in right now? Don't wait on the text - call: <a href="${e.phoneHref}">${e.phone}</a>.</p>
    <div class="sent-actions">
      <a class="btn btn-primary" href="${o}">Nothing opened? Tap here</a>
      <a class="btn btn-outline" href="${i}">${a}</a>
    </div>
  `}export{a as n,i as t};