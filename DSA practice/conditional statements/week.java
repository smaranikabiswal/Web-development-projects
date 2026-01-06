
import java.util.*;
public class week{
    public static void main(String args[]){
        System.out.println("print a number");
        Scanner sc=new Scanner("System.in");
        int day=sc.nextInt();
    switch (day) {
        case 1 -> System.out.println("monday");
             case 2 -> System.out.println("tuesday");
             case 3 -> System.out.println("wednesday");
             case 4 -> System.out.println("thursday");
             case 5 -> System.out.println("friday");
             case 6 -> System.out.println("satday");
             case 7 -> System.out.println("sunday");
             
            
        default -> System.out.println("input is incorrect");
    }    
    }
}