import java.util.*;
public class arrayc{
    public static void main(String[] args) {
        int marks[]=new int [100];
        Scanner sc=new Scanner(System.in);
        marks[0]=sc.nextInt();
         marks[1]=sc.nextInt();
          marks[2]=sc.nextInt();
          System.out.println("math mark is "+marks[0]);
System.out.println("phy mark is "+marks[1]);
System.out.println("chem mark is "+marks[2]);
marks[0]=43;
System.out.println("math mark is"+marks[0]);
int percentage=(marks[0]+marks[1]+marks[2])/3;
    System.out.println("percentage is "+percentage+"%");   
    }
}