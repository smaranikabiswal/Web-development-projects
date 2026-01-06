import java.util.*;
public class largest3{
    public static void main(String args[]){
        Scanner sc= new Scanner(System.in);
         System.out.println("enter a");
        int a=sc.nextInt();
        System.out.println("enter b");
        int b=sc.nextInt();
        System.out.println("enter c");
        int c=sc.nextInt();
    if (a>=b && a>=c) {
     System.out.println("a is larger");
     }else if(b>=c){
     System.out.println("c is larger");
 } else {
     System.out.println("b is larger");

        }
    }

}