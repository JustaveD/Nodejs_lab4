const student = {
    id: "PS15446",
    fullName: "Duy THE NIGHTs",
    email: "duydh.florentino@gmail.com",
    avatar: "https://scontent.fdad3-2.fna.fbcdn.net/v/t39.30808-1/c0.25.320.320a/p320x320/263796499_632983774493470_7144666697427452113_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Bvup2Xp-SsMAX_WWSZR&_nc_ht=scontent.fdad3-2.fna&oh=00_AT9CBKqPtl2Wvz7StHuh5A3qHzohwNwb8yZP5JDgwTdXKw&oe=61E5FC1E",
    address: "Khanh Hoa Province",
    department: "Web Development",
    averageScore: 8,
    getRank: function(){
        if(this.averageScore >=9){
            console.log("Excellent");
        }
        else if( this.averageScore >=8){
            console.log("Good");
        }
        else if(this.averageScore >=6.5){
            console.log("Well");
        }
        else if(this.averageScore >=5){
            console.log("Average");
        }
        else{
            console.log("Weak");
        }
    },
    setAvgScore: function(point){
        this.averageScore = point;
        return this.averageScore;
    },
    changeAddress: function(address){
        this.address = address;
        return this.address;
    }
} 
// demo
student.getRank();


