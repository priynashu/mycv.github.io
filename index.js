const menu = $(".menu");
const nav = $("nav");
const close = $(".close");
const hero = $(".hero");
const shop = $(".shop");
const shop_content = $(".shop-item");
const prevButton = $(".slide-left");
const nextButton = $(".slide-right");
var count = 0;
const bgImages = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];
$(window).on('load',function(){
  shop_content.eq(0).css('display','block');
  hero.css('backgroundImage',`url("${bgImages[count]}")`)
});
// open navigation
menu.click(function(){
  nav.css('top','0')
});
close.click(function(){
  nav.css('top','-100%')
});
prevButton.click(function(){
  if(count!=0)
  {
    count--;
  }
  else{
    count=bgImages.length-1;
  }
  hero.css('backgroundImage',`url("${bgImages[count]}")`);
  clearShopContent();
  shop_content.eq(count).css('display','block');
});
nextButton.click(function(){
  if(count==bgImages.length-1)
  {
    count=0;
  }
  else{
    count++;
  }

  clearShopContent();
  hero.css('backgroundImage',`url("${bgImages[count]}")`);
  shop_content.eq(count).css('display','block');
});
function clearShopContent(){
  shop_content.css('display','none');
}
