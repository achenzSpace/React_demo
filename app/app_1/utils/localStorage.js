export default {
    getItem:function(key){
        var value;
        try {
            value = localStorage.getItem(key);
        }catch (ex){

        }finally {
            return value;
        }
    },
    setItem:function(key,value){
        try{
            localStorage.setItem(key,value)
        }catch (ex){

        }
    }
}