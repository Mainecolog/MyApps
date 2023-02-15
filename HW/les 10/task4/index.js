const student = {
   fullName: 'Максим',
   experienceInMonths: 12,
   stack: ['HTML', 'CSS', 'JavaScript', 'React'],
 };

 let newObj = {};
 giveJobToStudent = function (student,jobName)
 {
   const itStudent = Object.entries(student);
   const fullName = itStudent[0][1];
   
   alert(`Поздравляем! У студента ${fullName} появилась новая работа! Теперь он ${jobName}`);
    
   return newObj = 
      {
      ...student,
      job: jobName,
      }
    };   
 const res = giveJobToStudent(student,`веб-разработчик`);
 console.log(`student`,newObj);