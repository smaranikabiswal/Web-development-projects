public class binarystring{
    public static void print( int n,int lastplace,String str){
        if(n==0){
           System.out.println(str);
           return;
        }
        if (lastplace==0) {
          print(n-1,0, str+"0"); 
           print(n-1,1, str+"1"); 
        }else{
             print(n-1,0, str+"0"); 
        }
    }
    public static void main(String[] args) {
         print(3,0," "); 
    }
}