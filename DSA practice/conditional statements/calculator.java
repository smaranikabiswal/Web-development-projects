import java.util.*;
public class calculator{
    public static void main(String args[]){
        Scanner sc= new Scanner(System.in);
         System.out.println("enter a");
        int a=sc.nextInt();
        System.out.println("enter b");
        int b=sc.nextInt();
        char operator=sc.next().charAt(0);
        
            
        switch (operator) {
            case '+' -> System.out.println(a+b);
case '-' -> System.out.println(a-b);
case '*' -> System.out.println(a*b);
case '/' -> System.out.println(a/b);
case '%' -> System.out.println(a%b);

            default -> System.out.println("there we go");
        }
    
        }
    }

