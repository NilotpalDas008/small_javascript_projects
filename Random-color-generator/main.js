 
//HEx-color
const hexColorContainer = document.querySelector('.hex-color-container');
const hexButton = document.querySelector('.hex-button');
const hexColorValue = document.querySelector('.hex-color-value');
const Copy_btn=document.querySelector('.copy-btn');

hexButton.addEventListener('click', () => {
  const characterSet = '0123456789ABCDEF';
  const charLen = characterSet.length;
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += characterSet.charAt(Math.floor(Math.random() * charLen));
  }
  hexColorValue.textContent = color;               
  hexColorContainer.style.backgroundColor = color; 
  hexButton.style.color = color;                   });

function copy_hex_color(){
    navigator.clipboard.writeText(hexColorValue.textContent);
    alert('copied');
}

Copy_btn.addEventListener('click',copy_hex_color);

  //RGB

const rgb_color_container =document.querySelector('.rgb-color-container');
const rgb_color_vlaue=document.querySelector('.rgb-color-value');
const rgb_button =document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector("#red");
const getGreenInputRange = document.querySelector("#green");
const getBlueInputRange = document.querySelector("#blue");
const rgb_copy_btn=document.querySelector('.rgb-copy-btn')

rgb_button.addEventListener(('click'),()=>{
    let redValue=getRedInputRange.value;
    let greenValue=getGreenInputRange.value;
    let blueValue=getBlueInputRange.value;

    rgb_color_vlaue.textContent=`rgb(${redValue},${greenValue},${blueValue})`;
    rgb_button.style.color=`rgb(${redValue},${greenValue},${blueValue})`;
    rgb_color_container.style.backgroundColor=`rgb(${redValue},${greenValue},${blueValue})`;

})

function copy_color(){
    navigator.clipboard.writeText(rgb_color_vlaue.textContent);
    alert('copied')
}
rgb_copy_btn.addEventListener(('click'),copy_color);


