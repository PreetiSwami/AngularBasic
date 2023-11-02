import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {


  
  constructor() { }

  

  ngOnInit(): void {


    /////////////////////////LET & VAR///////////////////////////////////////////////

    function varTest() {
      var x = 1;
      {
        var x = 2; // same variable!
        console.log(x); // 2
      }
      console.log(x); // 2
    }
    
    function letTest() {
      let x = 1;
      {
        let x = 2; // different variable
        console.log(x); // 2
      }
      console.log(x); // 1
    }



    /////////////////////////DECLARATION//////////////////////////////////////////////////////

    const message = "Hello World!";

    const a = 5;
    const b = 10;


    const names=["Preeti","Pritam","Pihu","Swamy"];
    const details=[
                    {
                      sno:1,
                      name:"Preeti",
                      gender:"Female"
                    },
                    {
                      sno:2,
                      name:"Pritam",
                      gender:"male"
                    },
                    {
                      sno:3,
                      name:"Pihu",
                      gender:"Female"
                    },
                    {
                      sno:4,
                      name:"Swamy",
                      gender:"male"
                    },
    ]
    let masg = message.toLowerCase();

    const user ={
      name:"Preeti",
      phone:989898,
      gender:"female",
      type:"Developer"
    }


///////////////////////////////OUTPUT////////////////////////////////////////
    console.log(masg)

    console.log(user.name)
    console.log(user.gender);

    console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);


/////////////////////////////////FUNCTION///////////////////////////////////////

function greet(person:string,date:Date){
  console.log(`Hello ${person},by date ${date}` )

};


greet("Preeti",new Date());


names.forEach(element => {

  console.log(element)
  
});

details.forEach(element =>{
  console.log(element)
  console.log(element.gender)
  
})


  }

}
