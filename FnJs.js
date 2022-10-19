const studentOne ={
    name:'Islam',
    age:22
}
function increaseStudentAge(student){
    const newStudent = Object.assign({},student)
    newStudent.name='Rita'
    newStudent.age += 1
    return newStudent
}
 const newStudent = increaseStudentAge(studentOne)
 //console.log(studentOne)
 //console.log(newStudent)

 const dayMoney ={
    nameRestoran:'mcdonalds',
    OnedayMoney: 1000,
    location:'osaka'
 }
 function increaseOnedayMoney(honmachi){
    const NewRestoran =Object.assign({},honmachi)
    NewRestoran.location='Namba',
    NewRestoran.nameRestoran='Ginji'
    NewRestoran.OnedayMoney += 10000
    return NewRestoran

}

const NewRestoran= increaseOnedayMoney(dayMoney)
//console.log(NewRestoran)
//console.log(dayMoney)

const Les={
    name:'lan',
    time:9.00,
    location:'BigCampus'
}
 function increaseTime(Les2){
    const NextLes=Object.assign({},Les2)
    NextLes.name='IT'
    NextLes.time+=1.45
    return NextLes
 }
 const NextLes=increaseTime(Les)
 console.log(NextLes)