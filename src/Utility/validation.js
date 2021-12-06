export const isValidEmail=(inputText)=>{
 if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(inputText))
  {
    return (true)
  }
  
    return (false)
}
 
export const isValidName=(fullName)=>{
     if (fullName.length>=3)
      {
        return (true)
      }
      
        return (false)
     
    }
export const isValidPassword=(password)=>{
        if (password.length==8)
         {
           return (true)
         }
         
           return (false)
        
       }