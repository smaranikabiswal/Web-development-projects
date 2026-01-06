import java.util.*;
public class temp{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.println("enter your temperature");
        double temp=sc.nextDouble();
if (temp>100) {
    System.out.println("you have a fever!");
} else {
    System.out.println("you are completely fine");
}
    }
}