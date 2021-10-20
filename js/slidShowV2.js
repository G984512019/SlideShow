let count = 1;
let URL;
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");


function prev(){
  count = count - 1;
  if(count < 1){
    count = 19;
  }

  if(count <= 9){
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
  }

  mainElement.setAttribute('src', URL);
  // alert(count);
  thumbnailsElement.children[count-1].classList.add('selected');
  if (count == 19) {
      thumbnailsElement.children[0].classList.remove('selected');
  } else {
    thumbnailsElement.children[count].classList.remove('selected');
  }
}

function next(){
  count = count + 1;
  if(count > 19){
    count = 1;
  }

  if(count <= 9){
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_" + count + ".jpg";
  }

  mainElement.setAttribute('src', URL);
  //alert(count);
  thumbnailsElement.children[count-1].classList.add('selected');
  if(count == 1){
    thumbnailsElement.children[18].classList.remove('selected');
  }else{
    thumbnailsElement.children[count-2].classList.remove('selected');
  }

}
