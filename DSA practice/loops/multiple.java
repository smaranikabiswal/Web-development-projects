import java.util.*;
public class multiple{
  public static void main(String[] args) {
      Scanner sc=new Scanner(System.in);
      do{
      System.out.println("enter the value of the number n");
      int n=sc.nextInt();
      if(n%10==0){
       // break;
       continue;
      }
      System.out.println("number was:"+n);
       } while (true);
  }  

    
}