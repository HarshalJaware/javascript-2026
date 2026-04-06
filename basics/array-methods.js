const projects = [
  {name: "React App", hours: 20, status: "active"},
  {name: "Node API", hours: 15, status: "active"},
  {name: "Jest Tests", hours: 10, status: "done"},
  {name: "Javascript Crud Project", hours: 12, status: "done"},
  {name: "Rect Project", hours: 10, status: "done"}
];

//1.Get all projects active name(map + filter)
const activeProjects = projects.filter(project=>project.status === "active").map(p=>p.name);

//2.Total hours with template literals
const totalHours  = projects.reduce((sum,project)=>sum + project.hours,0);
const summary = `Total hours:${totalHours} across ${projects.length} projects`;

//3.Get All projects which are more than 12 hours and active
const hoursMoreThen12Hours = projects.filter(project=>project.hours >= 12 && project.status === "active").map(p=>p.name);

//console both
console.log(activeProjects);
console.log(summary);
console.log('Projects have more than 12 hours',hoursMoreThen12Hours);