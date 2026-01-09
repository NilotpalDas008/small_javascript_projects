const data =[
    {id:'1',
     question: "What is the  full form of HTML ?",
     Answer:"HyperText MarkUp Language "
    },
     {id:'2',
     question: "What is the  full form of HTML ?",
     Answer:"HyperText MarkUp Language "
    },
     {id:'3',
     question: "What is the  full form of HTML ?",
     Answer:"HyperText MarkUp Language "
    },
     {id:'4',
     question: "What is the  full form of HTML ?",
     Answer:"HyperText MarkUp Language "
    }
]

const accordionWrapper = document.querySelector('.accordion')

function createAccordionData (){
 accordionWrapper.innerHTML =data
 .map(
    (dataItem)=>`
        <div class='accordionitem'>
        <div class='accordiontitle'>
        <h3>${dataItem.question}</h3>
        <i class="fa-solid fa-arrow-down"></i>
        </div>
        <div class = "accordioncontent">
        <p>${dataItem.Answer}
        </p></div>
        </div>
    `
 )
 .join(" ")
}
createAccordionData();

const getAccordionTitles = document.querySelectorAll(".accordiontitle");

// console.log("====================================");
// console.log(getAccordionTitles);
// console.log("====================================");

getAccordionTitles.forEach((currentItem)=>{
    currentItem.addEventListener('click',(event)=>{
        if(currentItem.classList.contains("active")){
            currentItem.classList.remove("active");
        }
        else {
        let getAlreadyactiveClass=document.querySelectorAll(".active");
        getAlreadyactiveClass.forEach((currentItem)=>{
            currentItem.classList.remove('active')
        }
    )
     currentItem.classList.add("active");
        }

    })
})

