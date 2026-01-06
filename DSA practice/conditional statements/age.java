import java.util.*;
public class age{
public static void main(String args[]){
    Scanner sc=new Scanner(System.in);
    int age=sc.nextInt();
    System.out.println("the age is "+age);
    if (age>18) {
      System.out.println("you are able to drive"); 
    }
if(age>16 && age<18){
    System.out.println("wait for maximum 2 years");


        
    } else {
        System.out.println("you are unable to drive");
    }

}
}