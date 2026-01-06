import java.util.*;
public class lima{
    public static void printsum(int a,int b){
       
        int sum=a+b;
        System.out.println("the sum is "+sum);
    }
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        int a=sc.nextInt();
        int b=sc.nextInt();
        printsum(a,b);
    }
}