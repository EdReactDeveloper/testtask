export const  toArray=(object)=>{
  const arr = []
  for(let key in object){
    arr.push(object[key])
  }
  return arr
}