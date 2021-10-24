class StringValidation {

    minlength(str,minlen){
        if(str && str.length>=minlen)
        {
            return true;
        }
        return false;
    }
    
    maxlength(str,maxlen,required=false){
        if(!str && !required){
            return true;
        }
        if(str && str.length<=maxlen)
        {
            return true;
        }
        return false;
    }
    
    minMaxlength(str,minlen,maxlen){
        if(str && str.length<=maxlen && str.length>=minlen)
        {
            return true;
        }
        return false;
    }
    
    onlyAlpha(str){
        var letters = /^[A-Za-z]+$/;
       if(str && str.match(letters))
         {
          return true;
         }
        return false;
    }
    onlyAlpha1(str){
        var letters = /^[A-Za-z. ]+$/;
       if(str && str.match(letters))
         {
          return true;
         }
        return false;
    }

    mobileNo(str)
    {
        var phoneno = /^[6-9]\d{9}$/;
        if(str.match(phoneno))
        {
            return true;
        }
    }
    emailId(str){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str))
      {
        return (true)
      }
        return false;
    }
    passwordpattern(str){
        var pattern= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if( str && str.match(pattern))
        {
         return true;
        }
       return false;
        }
    }
    
    export const strValidation=new StringValidation();
    