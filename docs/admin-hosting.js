const hostedLinkButton=document.querySelector("#insert-image-url");
hostedLinkButton.onclick=()=>{
  let url=prompt("粘贴图床返回的地址，例如 /file/xxx.png 或完整 URL")?.trim();
  if(!url)return;
  if(url.startsWith("/"))url=`https://image.baobao123.dpdns.org${url}`;
  if(!/^https?:\/\//i.test(url)){toast("链接格式不正确");return}
  const filename=decodeURIComponent(url.split("/").pop().split("?")[0]||"托管文件");
  const label=prompt("显示名称",filename)?.trim()||filename;
  const isImage=/\.(avif|gif|jpe?g|png|webp|svg)(?:\?|$)/i.test(url);
  insertText(isImage?`\n![${label}](${url})\n`:`\n[${label}](${url})\n`);
};
icons();
