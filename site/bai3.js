function Student(id,fullName,email,avatar,address,department){
    this.id= id;
    this.fullName= fullName;
    this.email= email;
    this.avatar= avatar;
    this.address= address;
    this.department= department;
    this.subjects= [];
    this.average= 0;

    this.setAverageScore= function(point) {

        if (this.subjects.length == 0) {
            this.average = point
        } else {
            let total = 0;
            this.subjects.forEach(e => {
                total += parseFloat(e.point);
            })
            this.average = total / this.subjects.length;
        }
    };
    this.changeAddress= function(address){
        this.address = address;
    };
    this.addSubject= function(subject, point,teacher,year){
        let newSubject = {
            name: subject,
            point: point,
            teacher: teacher,
            year:year
        }
        this.subjects.push(newSubject);
        this.setAverageScore(point);
    }
}
const StudentPoly = new Student("PS15446","Đinh Hoàng Duy","duydh.florentino@gmail.com","https://scontent.fdad3-2.fna.fbcdn.net/v/t39.30808-6/263796499_632983774493470_7144666697427452113_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=A8eNSS09NJ8AX9yxiXS&_nc_ht=scontent.fdad3-2.fna&oh=00_AT_mvr5KjdHdOC3C_nnUxGvORYZqWs002mXABSo_YNovdw&oe=61E2EC80","Khanh Hoa","Front End web development");

StudentPoly.addSubject("JS nang cao",8,"Thầy Mua","04/01/2022");

console.log(StudentPoly.average);
