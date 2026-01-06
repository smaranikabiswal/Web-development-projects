public class range{
    public static boolean isprime(int a){
        boolean isprime=true;
for (int i = 2; i <=a-1; i++) {
    if (a%i==0) {
        isprime=false;
    break;
        
    }
   
}
return isprime;
    }
    public static void x(int n){
      for (int i = 2; i <=n; i++) {
       if(isprime(i)) {
        System.out.println(i+" ");
       }  
      }  
System.out.println();
    }
  public static void main(String[] args) {
  x(20);    
  }  
    }