import java.util.*;
public class sum{
  public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      System.out.println("enter the value of the number n");
      int n=sc.nextInt();
      
int number=1;
int sum=0;
      while (number<=n) { 
        sum=sum+number;
        number++;

      }
System.out.println(sum);
  }  

    
}