import java.util.*;
public class leap{
    public static void main(String args[]){
        Scanner sc= new Scanner(System.in);
         System.out.println("enter a year");
        int year=sc.nextInt();
    if (year%4==0 && year%400==0) {
     System.out.println("the year is a leap year");
    }
     else if(year%100==0){
    System.out.println("the year is not a leap year");    
     }
  else {
     System.out.println("the year is not a leap year");
        }
        
        
       
        
    }

   
    }

