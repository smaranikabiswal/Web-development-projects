import java.util.*;
public class prime{
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
    public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      System.out.println("enter the value of a");
      int a=sc.nextInt(); 
      System.out.println(isprime(a));
    }

}