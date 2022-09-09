let img = document.querySelectorAll(".carusel img");
let slider = document.querySelector(".slider");
slider.style.transform="rotateX(-15deg) rotateY(0deg)";
let k = 7;
let right = -45;
let left = 315;
let sum = 0;
let arr= [0,1,2,3,4,5,6,7];



img.forEach((element,index) => {
    element.onclick=()=>{
        let bool = true;
        let leftSide = 0;
        let rightSide = 7;
        for(let i=1;i<=3;i++){
            if(arr[k+i]===undefined){
                if(index === arr[leftSide]){
                    sum+=i;
                    bool = false;
                    slider.style.transform=`rotateX(-15deg) rotateY(${- (sum*45)}deg)`;
                    k = index;
                    break;
                }
                leftSide++;
            }
            else{
                if(index===arr[k+i]){
                    sum+=i;
                    bool = false;
                    slider.style.transform=`rotateX(-15deg) rotateY(${- (sum*45)}deg)`;
                    k = index;
                    break;
                }
            }
        }
            for(let i = 1;i<=4 && bool;i++){
                if(arr[k-i]===undefined){
                    if(index === arr[rightSide]){
                        sum-=i;
                        bool = false;
                        slider.style.transform=`rotateX(-15deg) rotateY(${-(sum*45)}deg)`;
                        k = index;
                        break;
                    }
                    rightSide--;
                }
                else{
                    if(index===arr[k-i]){
                        sum-=i;
                        bool = false;
                        slider.style.transform=`rotateX(-15deg) rotateY(${ - sum*45}deg)`;
                        k = index;
                        break;
                    }
                }
            }  
        }
    }
);