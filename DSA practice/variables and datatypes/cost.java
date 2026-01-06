import java.util.*;
public class cost{
public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
   float pencil=sc.nextFloat();
   float pen=sc.nextFloat();
   float eraser=sc.nextFloat();
   float totalcost= pencil+pen+eraser;
    System.out.println("the total cost is"+totalcost);
    float gst=totalcost+(totalcost*0.18f);
System.out.println("by adding gst it will be"+gst);
System.out.println("thank you!");
}
}