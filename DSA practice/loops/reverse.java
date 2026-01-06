import java.util.*;
public class reverse{
  public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      System.out.println("enter the value of the number n");
      int n=sc.nextInt();
      while (n>0) { 
       int lastDigit=n%10;
       System.out.println(lastDigit);
       n=n%10;   
      }
      System.out.println();
  }  

    
}