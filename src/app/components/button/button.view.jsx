'use strict';

export default (ctrl, attrs, children) => {

  let className = attrs.className || 'btn';
  let isLink = attrs.isLink || false;
  let href = attrs.href || '#';
  let type = attrs.type || 'button';
  let onclick = attrs.onclick || "";

  return isLink ? (
    <a href={href} class={className}>
      {children}
    </a>
  ) : (
    <button class={className} type={type} onclick={onclick}>
      {children}
    </button>
  );

}
