import java.util.*;
public class fact{
    public static void main(String[] args) {
    Scanner sc= new Scanner(System.in);
    System.out.println("enter a number");
    int n=sc.nextInt();
    int factorial=1;
for (int i = 1; i <= n; i++) {
    factorial=factorial*i;
}
    System.out.println("the factorial is "+factorial);
    


    }
}