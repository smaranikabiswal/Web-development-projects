import java.util.*;
public class user{
    public static int sum(int a,int b){
        return a+b;
    }
   public static float sum(float a,float b){
        return a+b;  
}
public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    System.out.println("enter the value of a");
    int a=sc.nextInt();
     System.out.println("enter the value of b");
    int b=sc.nextInt();
    System.out.println(sum(a,b));
    float c=sc.nextFloat();
     System.out.println("enter the value of b");
   float d=sc.nextFloat();
    System.out.println(sum(c,d));
}

}