function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(Array.isArray(this.marks)) {
    this.marks.push(mark);
  } else {
    this.marks = [mark];
  }
}

Student.prototype.addMarks = function () {
  if(Array.isArray(this.marks)) {
    this.marks = this.marks.concat([...arguments]);
  } else {
    this.marks = [...arguments];
  }
}

Student.prototype.getAverage = function () {
  if(Array.isArray(this.marks)) {
    return this.marks.reduce((prev, curr) => prev + curr, 0) / this.marks.length;
  } else {
    return 0;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}

  