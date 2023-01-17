 
//Given Array of objects
let studentRecords =[{name:'John',id:123,marks:98},
    {name:'Baba',id:101,marks:23},
    {name:'yaga',id:200,marks:45},
    {name:'Wick',id:115,marks:75}
    
]
let sum =0;
let sumID50 =0;
let sumTot =0;

//Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.
for (var record in studentRecords){
    console.log(studentRecords[record].name.toUpperCase());
}

//Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
for(var record in studentRecords){
    if(studentRecords[record].marks >50){
        console.log(studentRecords[record]);
    }
}
//[{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]


//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
for(record in studentRecords){
    if(studentRecords[record].marks >50 && studentRecords[record].id >120){
        console.log(studentRecords[record]);
    }
}
//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

for(record in studentRecords){
    if(studentRecords[record].marks >50 && studentRecords[record].id >120){
        sum+= studentRecords[record].marks;
    }
}
console.log("Sum of marks of desired students :",sum);
//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
for(record in studentRecords){
    if(studentRecords[record].marks >50 ){
        console.log(studentRecords[record].name);
    }
}


// Question 6: This time we are required to print the sum of marks of the students with id > 120.
for(record in studentRecords){
    if(studentRecords[record].id >120){
        sumID50+=studentRecords[record].marks;
         
    }
}
console.log("Sum of students have id >120: ",sumID50);

//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
for(record in studentRecords){
    if(studentRecords[record].marks < 50){
        studentRecords[record].marks =15+ studentRecords[record].marks;
    }
    
    if(studentRecords[record].marks >50){
        sumTot +=studentRecords[record].marks;
    }
    
}
console.log("Sum Total marks of Students having less than 50 marks after grace :",sumTot);



//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
const obj ={name:'saksham',class:'6',rollno:'12'};
const obj2 ={name:'saksham',class:'6',rollno:'12'};
const obj3 ={name:'saksham',class:'6',rollno:'12'};
const obj4 ={name:'saksham',class:'6',rollno:'12'};
const obj5 ={name:'saksham',class:'6',rollno:'12'};
const obj6 ={name:'saksham',class:'6',rollno:'12'};

let arr=[];
 arr.push(obj);
  arr.push(obj2);
   arr.push(obj3);
    arr.push(obj4);
     arr.push(obj5);
      arr.push(obj6);
 console.log(arr); //prints the array of objects
console.log("Welcome to Programiz!");