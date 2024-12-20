let title = document.getElementById("title");
let content = document.getElementById("content");
let btn = document.getElementById("btn");
let list = document.getElementById("list");
btn.addEventListener("click",news);
function news()
{
  list.innerHTML = list.innerHTML + 
    `
    <div class="news">
       <h2>${title.value}</h2>
       <p>${content.value}</p><hr>
    </div>
    `;
  title.value = '';
  content.value = '';
}
let i=0, imgArr=new Array();
imgArr[0]="https://img.shoplineapp.com/media/image_clips/657f24699a0681001ad1c7f7/original.jpg?1702831209";
imgArr[1]="https://gw.alicdn.com/imgextra/i1/2200732594861/O1CN01m22lNE1lmO85RDFoY_!!2200732594861.jpg_Q75.jpg_.webp";
imgArr[2]="https://mewcare.com/wp-content/uploads/2018/10/maine-coon-robert-sijka-geekness-1-800x800.jpg";
imgArr[3]="https://image1.gamme.com.tw/news2/2016/18/67/paCYnp2Xlaadr6Sa.jpg";

function showImg()
{
  document.getElementById("ico").src = imgArr[i];
  i = (i+1) % 4 ;
}

function show()
{
  setInterval(showImg,2000);
}