let str="NaMan ShrAma";
let alpha=/[A-Z]/;
let bag=""
for(i=0;i<str.length;i++){
  if(str[i].match(alpha)){
    bag=bag+str[i].toLowerCase();
  }else{
     bag=bag+str[i].toUpperCase();
  }
  console.log(bag)
}